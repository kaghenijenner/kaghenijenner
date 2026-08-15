"use client";

import { useEffect, useState } from "react";

const dayLabels = [
  { label: "Mon", row: 2 },
  { label: "Wed", row: 4 },
  { label: "Fri", row: 6 },
];

const formatDate = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function getMonthLabel(week, index, weeks) {
  const firstDate = week.contributionDays[0]?.date;
  const previousDate = weeks[index - 1]?.contributionDays[0]?.date;
  if (!firstDate) return "";

  const month = firstDate.slice(0, 7);
  const previousMonth = previousDate?.slice(0, 7);
  if (index !== 0 && month === previousMonth) return "";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    timeZone: "UTC",
  }).format(new Date(`${firstDate}T00:00:00Z`));
}

export default function GitHubContributions() {
  const [calendar, setCalendar] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/github-contributions", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Contribution request failed");
        return response.json();
      })
      .then(setCalendar)
      .catch((requestError) => {
        if (requestError.name !== "AbortError") setError(true);
      });

    return () => controller.abort();
  }, []);

  if (error) {
    return (
      <div className="contributions-card contributions-message">
        Contribution activity is temporarily unavailable.{' '}
        <a href="https://github.com/kaghenijenner" target="_blank" rel="noreferrer">
          View it on GitHub
        </a>
        .
      </div>
    );
  }

  if (!calendar) {
    return (
      <div className="contributions-card contributions-message" aria-live="polite">
        Loading GitHub contributions…
      </div>
    );
  }

  return (
    <section className="contributions-card" aria-label="GitHub contribution calendar">
      <h3>{calendar.totalContributions.toLocaleString()} contributions in the last year</h3>

      <div className="contributions-scroll">
        <div className="contributions-chart">
          <div className="month-labels" aria-hidden="true">
            {calendar.weeks.map((week, index) => (
              <span key={week.contributionDays[0]?.date ?? index}>
                {getMonthLabel(week, index, calendar.weeks)}
              </span>
            ))}
          </div>

          <div className="day-labels" aria-hidden="true">
            {dayLabels.map(({ label, row }) => (
              <span key={label} style={{ gridRow: row }}>{label}</span>
            ))}
          </div>

          <div className="contribution-weeks">
            {calendar.weeks.map((week, weekIndex) => (
              <div className="contribution-week" key={week.contributionDays[0]?.date ?? weekIndex}>
                {week.contributionDays.map((day) => (
                  <span
                    className="contribution-day"
                    key={day.date}
                    style={{ backgroundColor: day.color }}
                    title={`${day.contributionCount} contribution${day.contributionCount === 1 ? "" : "s"} on ${formatDate.format(new Date(`${day.date}T00:00:00Z`))}`}
                    aria-label={`${day.contributionCount} contributions on ${day.date}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="contributions-footer">
        <a href="https://docs.github.com/account-and-profile/reference/contribution-graph-reference" target="_blank" rel="noreferrer">
          Learn how GitHub counts contributions
        </a>
        <div className="contribution-legend" aria-label="Contribution intensity from less to more">
          <span>Less</span>
          {["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"].map((color) => (
            <i key={color} style={{ backgroundColor: color }} />
          ))}
          <span>More</span>
        </div>
      </div>
    </section>
  );
}
