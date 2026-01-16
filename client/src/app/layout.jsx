import "../index.css";
import Header from "../components/Header";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Kagheni Jenner | Software Engineer & Full Stack Developer",
  description:
    "Passionate Software Engineer from Uganda specializing in full-stack web, mobile, AI/ML, and cloud solutions. Available for hire.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Uganda",
    "Kagheni Jenner",
    "Web Development",
    "Mobile Development",
  ],
  openGraph: {
    title: "Kagheni Jenner | Software Engineer & Full Stack Developer",
    description:
      "Passionate Software Engineer from Uganda specializing in full-stack web, mobile, AI/ML, and cloud solutions. Available for hire.",
    url: "https://kaghenijenner.com",
    siteName: "Kagheni Jenner",
    images: [
      {
        url: "https://jennermaxim.com/jennermaxim.png",
        width: 800,
        height: 800,
        alt: "Kagheni Jenner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
