const siteUrl = "https://kaghenijenner.com";

export default function sitemap() {
  return ["", "/about", "/projects", "/certificates", "/contact", "/resume"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.8,
    }),
  );
}
