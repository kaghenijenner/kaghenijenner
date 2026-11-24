'use client';
import { useEffect, useState } from "react";
import "../styles/githubstats.scss";
import GitHubContributions from "./GitHubContributions";

const GitHubStats = () => {
    const username = "kaghenijenner";
    const theme = "discord_old_blurple";
    const summaryTheme = "github_dark";
    const [streaks, setStreaks] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        fetch("/api/github-contributions", { signal: controller.signal })
            .then((response) => response.ok ? response.json() : Promise.reject(new Error()))
            .then((calendar) => setStreaks({
                current: calendar.currentStreak,
                longest: calendar.longestStreak,
            }))
            .catch((error) => {
                if (error.name !== "AbortError") setStreaks(null);
            });

        return () => controller.abort();
    }, []);

    return (
        <div className="github-stats">
            <div className="github-stats-header">
                <h2>GitHub <span>Statistics</span></h2>
                <p>A snapshot of my open-source activity and contributions.</p>
            </div>
            <GitHubContributions />
            <div className="stats-grid">
                <div className="stat-card streak-card" aria-live="polite">
                    <span className="streak-icon" aria-hidden="true">🔥</span>
                    <div>
                        <strong>{streaks ? streaks.current.toLocaleString() : "—"}</strong>
                        <span>day current streak</span>
                        {streaks && (
                            <small>Longest: {streaks.longest.toLocaleString()} days</small>
                        )}
                    </div>
                </div>
                <div className="stat-card">
                    <img
                        src={`https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username}&theme=${summaryTheme}`}
                        alt="GitHub Stats"
                    />
                </div>
                <div className="stat-card">
                    <img
                        src={`https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${username}&theme=${summaryTheme}`}
                        alt="Top Languages"
                    />
                </div>

                <div className="stat-card profile-summary">
                    <img
                        src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=${summaryTheme}`}
                        alt="Profile Summary"
                    />
                </div>

                <div className="stat-card trophy">
                    <img
                        src={`https://trophy.ryglcloud.net/?username=${username}&theme=onedark`}
                        alt="GitHub Trophies"
                    />
                </div>
            </div>

            <div className="profile-views">
                <img
                    src={`https://komarev.com/ghpvc/?username=${username}&label=Profile%20views&color=0e75b6&style=flat`}
                    alt="Profile Views"
                />
            </div>
        </div>
    );
};

export default GitHubStats;
