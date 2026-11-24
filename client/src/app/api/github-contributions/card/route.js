const username = "kaghenijenner";

const lifetimeQuery = `
  query LifetimeContributionCalendar($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      createdAt
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

async function fetchCalendar(from, to) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
      "User-Agent": "kaghenijenner-portfolio",
    },
    body: JSON.stringify({
      query: lifetimeQuery,
      variables: { username, from: from.toISOString(), to: to.toISOString() },
    }),
    signal: AbortSignal.timeout(5000),
  });

  const payload = await response.json();
  if (!response.ok || payload.errors || !payload.data?.user) {
    throw new Error("Unable to fetch GitHub contribution data.");
  }

  return payload.data.user;
}

function calculateStreaks(days) {
  const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));
  let longest = 0;
  let run = 0;

  for (const day of sorted) {
    if (day.contributionCount > 0) {
      run += 1;
      longest = Math.max(longest, run);
    } else {
      run = 0;
    }
  }

  let current = 0;
  for (let index = sorted.length - 1; index >= 0; index -= 1) {
    if (sorted[index].contributionCount > 0) {
      current += 1;
    } else {
      break;
    }
  }

  return { current, longest };
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function createCard({ total, current, longest }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="495" height="195" viewBox="0 0 495 195" role="img">
  <title>GitHub lifetime statistics</title>
  <rect width="495" height="195" rx="10" fill="#0d1117" stroke="#30363d"/>
  <text x="247.5" y="38" fill="#58a6ff" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="18" font-weight="700" text-anchor="middle">GitHub Lifetime Statistics</text>
  <line x1="165" y1="65" x2="165" y2="165" stroke="#30363d"/>
  <line x1="330" y1="65" x2="330" y2="165" stroke="#30363d"/>
  <g font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" text-anchor="middle">
    <text x="82.5" y="105" fill="#39d353" font-size="31" font-weight="700">${escapeXml(total.toLocaleString())}</text>
    <text x="82.5" y="132" fill="#c9d1d9" font-size="14" font-weight="600">Total Contributions</text>
    <text x="247.5" y="105" fill="#58a6ff" font-size="31" font-weight="700">${escapeXml(current)}</text>
    <text x="247.5" y="132" fill="#c9d1d9" font-size="14" font-weight="600">Current Streak</text>
    <text x="247.5" y="151" fill="#8b949e" font-size="12">${escapeXml(current)} days</text>
    <text x="412.5" y="105" fill="#58a6ff" font-size="31" font-weight="700">${escapeXml(longest)}</text>
    <text x="412.5" y="132" fill="#c9d1d9" font-size="14" font-weight="600">Longest Streak</text>
    <text x="412.5" y="151" fill="#8b949e" font-size="12">${escapeXml(longest)} days</text>
  </g>
</svg>`;
}

export async function GET() {
  if (!process.env.GITHUB_TOKEN) {
    return new Response("GitHub streak is unavailable.", {
      status: 503,
      headers: { "Content-Type": "text/plain" },
    });
  }

  try {
    const now = new Date();
    const initial = await fetchCalendar(
      new Date(Date.UTC(now.getUTCFullYear() - 1, now.getUTCMonth(), now.getUTCDate())),
      now,
    );
    const createdAt = new Date(initial.createdAt);
    const lifetimeDays = new Map();

    for (
      let rangeStart = new Date(Date.UTC(createdAt.getUTCFullYear(), createdAt.getUTCMonth(), createdAt.getUTCDate()));
      rangeStart < now;
      rangeStart = new Date(rangeStart.getTime() + 365 * 24 * 60 * 60 * 1000)
    ) {
      const rangeEnd = new Date(Math.min(rangeStart.getTime() + 365 * 24 * 60 * 60 * 1000, now.getTime()));
      const user = await fetchCalendar(rangeStart, rangeEnd);
      for (const week of user.contributionsCollection.contributionCalendar.weeks) {
        for (const day of week.contributionDays) {
          lifetimeDays.set(day.date, day);
        }
      }
    }

    const days = [...lifetimeDays.values()];
    const streaks = calculateStreaks(days);
    const total = days.reduce((sum, day) => sum + day.contributionCount, 0);

    return new Response(createCard({ total, ...streaks }), {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Unable to generate GitHub lifetime streak card", error);
    return new Response("GitHub streak is temporarily unavailable.", {
      status: 503,
      headers: { "Content-Type": "text/plain", "Cache-Control": "no-store" },
    });
  }
}
