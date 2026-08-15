import { NextResponse } from "next/server";

const username = "kaghenijenner";

const query = `
  query ContributionCalendar($username: String!) {
    user(login: $username) {
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

export async function GET() {
  if (!process.env.GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "GitHub contributions are not configured." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
        "User-Agent": "kaghenijenner-portfolio",
      },
      body: JSON.stringify({ query, variables: { username } }),
      next: { revalidate: 3600 },
    });

    const payload = await response.json();

    if (!response.ok || payload.errors || !payload.data?.user) {
      console.error("GitHub contribution request failed", payload.errors ?? response.status);
      return NextResponse.json(
        { error: "GitHub contributions are temporarily unavailable." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      payload.data.user.contributionsCollection.contributionCalendar,
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
      { status: 502 },
    );
  }
}
