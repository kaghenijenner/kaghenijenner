import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const formSecret =
  process.env.CONTACT_FORM_SECRET ||
  process.env.RESEND_API_KEY ||
  randomBytes(32).toString("hex");
const usedTokens = new Set();
const requestsByIp = new Map();
const TOKEN_MAX_AGE = 30 * 60 * 1000;
const MIN_FORM_TIME = 1200;
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const sign = (value) =>
  createHmac("sha256", formSecret).update(value).digest("base64url");

const createFormToken = () => {
  const payload = Buffer.from(
    JSON.stringify({
      issuedAt: Date.now(),
      nonce: randomBytes(16).toString("hex"),
    }),
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
};

const isValidToken = (token) => {
  if (typeof token !== "string") return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = sign(payload);
  if (
    signature.length !== expected.length ||
    !timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
  ) {
    return false;
  }

  try {
    const { issuedAt, nonce } = JSON.parse(
      Buffer.from(payload, "base64url").toString(),
    );
    return (
      typeof issuedAt === "number" &&
      typeof nonce === "string" &&
      Date.now() - issuedAt >= 0 &&
      Date.now() - issuedAt <= TOKEN_MAX_AGE &&
      !usedTokens.has(nonce)
    );
  } catch {
    return false;
  }
};

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const getClientIp = (request) =>
  request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
  request.headers.get("x-real-ip") ||
  "unknown";

export async function GET() {
  return Response.json(
    { token: createFormToken() },
    {
      headers: { "Cache-Control": "no-store" },
    },
  );
}

export async function POST(request) {
  try {
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.RESEND_FROM_EMAIL ||
      !process.env.NOTIFICATION_EMAIL
    ) {
      console.error("Contact form email configuration is incomplete.");
      return Response.json(
        { error: "The contact form is temporarily unavailable." },
        { status: 503 },
      );
    }

    const { name, email, subject, message, company, formToken, formStartedAt } =
      await request.json();

    if (company) {
      return Response.json(
        { error: "Unable to send message." },
        { status: 400 },
      );
    }

    const formElapsed =
      typeof formStartedAt === "number" ? Date.now() - formStartedAt : 0;
    if (
      !isValidToken(formToken) ||
      formElapsed < MIN_FORM_TIME ||
      formElapsed > TOKEN_MAX_AGE
    ) {
      return Response.json(
        {
          error:
            "Unable to verify this form submission. Please refresh and try again.",
        },
        { status: 400 },
      );
    }

    const now = Date.now();
    const ip = getClientIp(request);
    const recentRequests = (requestsByIp.get(ip) || []).filter(
      (timestamp) => now - timestamp < RATE_LIMIT_WINDOW,
    );
    if (recentRequests.length >= RATE_LIMIT_MAX) {
      return Response.json(
        { error: "Too many attempts. Please try again later." },
        { status: 429 },
      );
    }
    recentRequests.push(now);
    requestsByIp.set(ip, recentRequests);

    if (
      ![name, email, subject, message].every(
        (value) => typeof value === "string" && value.trim(),
      )
    ) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();
    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanSubject.length > 200 ||
      cleanMessage.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)
    ) {
      return Response.json(
        { error: "Please check your message details and try again." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.NOTIFICATION_EMAIL,
      replyTo: cleanEmail,
      subject: cleanSubject,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#09090f;color:#fff;border-radius:16px">
          <h2 style="margin:0 0 24px;color:#646cff">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#8888aa;width:80px">Name</td><td style="padding:8px 0;font-weight:600">${escapeHtml(cleanName)}</td></tr>
            <tr><td style="padding:8px 0; color:#8888aa">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(cleanEmail)}" style="color:#00d4ff">${escapeHtml(cleanEmail)}</a></td></tr>
            <tr><td style="padding:8px 0;color:#8888aa">Subject</td><td style="padding:8px 0;font-weight:600">${escapeHtml(cleanSubject)}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid rgba(100,108,255,0.2);margin:24px 0"/>
          <p style="color:#8888aa;margin:0 0 8px;font-size:0.85rem;text-transform:uppercase;letter-spacing:1px">Message</p>
          <p style="margin:0;line-height:1.8;white-space:pre-wrap">${escapeHtml(cleanMessage)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Contact form email provider error:", error);
      return Response.json(
        {
          error:
            "Unable to send your message right now. Please try again later.",
        },
        { status: 502 },
      );
    }

    const [tokenPayload] = formToken.split(".");
    const { nonce } = JSON.parse(
      Buffer.from(tokenPayload, "base64url").toString(),
    );
    usedTokens.add(nonce);

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form request failed:", err);
    return Response.json({ error: "Failed to send message." }, { status: 500 });
  }
}
