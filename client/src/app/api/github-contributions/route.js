import { NextResponse } from "next/server";

const username = "kaghenijenner";

const query = `
  query ContributionCalendar($username: String!) {
    user(login: $username) {
      createdAt
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              color
              contributionCount
              contributionLevel
              date
              weekday
            }
          }
        }
      }
    }
  }
`;

const lifetimeQuery = `
  query LifetimeContributionCalendar($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
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

const fetchContributionCalendar = async (calendarQuery, variables) => {
  let lastError;

  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
          "User-Agent": "kaghenijenner-portfolio",
        },
        body: JSON.stringify({ query: calendarQuery, variables }),
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(5000),
      });

      const payload = await response.json();
      if (!response.ok || payload.errors || !payload.data?.user) {
        throw new Error(
          Array.isArray(payload.errors)
            ? payload.errors.map((item) => item.message).join("; ")
            : `GitHub returned ${response.status}`,
        );
      }

      return payload.data.user;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
};

const calculateStreaks = (days) => {
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
  let currentIndex = sorted.length - 1;
  if (currentIndex >= 0 && sorted[currentIndex].contributionCount === 0) {
    currentIndex -= 1;
  }
  for (; currentIndex >= 0; currentIndex -= 1) {
    if (sorted[currentIndex].contributionCount > 0) {
      current += 1;
    } else {
      break;
    }
  }

  return { current, longest };
};

export async function GET() {
  if (!process.env.GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "GitHub contributions are not configured." },
      { status: 503 },
    );
  }

  try {
    const user = await fetchContributionCalendar(query, { username });
    const calendar =
      user.contributionsCollection.contributionCalendar;
    const createdAt = new Date(user.createdAt);
    const now = new Date();
    const lifetimeDays = new Map();

    for (
      let rangeStart = new Date(
        Date.UTC(createdAt.getUTCFullYear(), createdAt.getUTCMonth(), createdAt.getUTCDate()),
      );
      rangeStart < now;
      rangeStart = new Date(rangeStart.getTime() + 365 * 24 * 60 * 60 * 1000)
    ) {
      const rangeEnd = new Date(
        Math.min(
          rangeStart.getTime() + 365 * 24 * 60 * 60 * 1000,
          now.getTime(),
        ),
      );
      const lifetimeUser = await fetchContributionCalendar(lifetimeQuery, {
        username,
        from: rangeStart.toISOString(),
        to: rangeEnd.toISOString(),
      });
      const lifetimeCalendar =
        lifetimeUser.contributionsCollection.contributionCalendar;

      for (const week of lifetimeCalendar.weeks) {
        for (const day of week.contributionDays) {
          lifetimeDays.set(day.date, day);
        }
      }
    }

    const lifetime = [...lifetimeDays.values()];
    const streaks = calculateStreaks(lifetime);
    const allTimeContributions = lifetime.reduce(
      (total, day) => total + day.contributionCount,
      0,
    );

    return NextResponse.json(
      {
        ...calendar,
        allTimeContributions,
        currentStreak: streaks.current,
        longestStreak: streaks.longest,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch (error) {
    console.error("Unable to fetch GitHub contributions", error);
    return NextResponse.json(
      { error: "GitHub contributions are temporarily unavailable." },
      {
        status: 503,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }
}
