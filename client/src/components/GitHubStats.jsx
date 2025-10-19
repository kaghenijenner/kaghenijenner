import "../styles/githubstats.scss";

const GitHubStats = () => {
    const username = "jennermaxim";
    const theme = "discord_old_blurple";

    return (
        <div className="github-stats">
            <h2>GitHub Statistics</h2>
            <div className="stats-grid">
                <div className="stat-card">
                    <img
                        src={`https://github-readme-stats.vercel.app/api?username=${username}&theme=${theme}&show_icons=true`}
                        alt="GitHub Stats"
                    />
                </div>
                
                <div className="stat-card">
                    <img
                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}`}
                        alt="GitHub Streak"
                    />
                </div>

                <div className="stat-card">
                    <img
                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${theme}&layout=compact`}
                        alt="Top Languages"
                    />
                </div>

                <div className="stat-card">
                    <img
                        src={`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=${theme}`}
                        alt="Profile Summary"
                    />
                </div>

                <div className="stat-card trophy">
                    <img
                        src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=${theme}&row=2&column=3&margin-w=15&margin-h=15`}
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
