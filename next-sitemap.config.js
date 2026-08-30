/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://chick-fila-menus.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    additionalSitemaps: [],
  },
  additionalPaths: async (config) => {
    return [
      { loc: "/", priority: 1.0, changefreq: "daily" },
      { loc: "/menu", priority: 0.9, changefreq: "weekly" },
      { loc: "/prices", priority: 0.9, changefreq: "weekly" },
      { loc: "/calories", priority: 0.9, changefreq: "weekly" },
      { loc: "/blog", priority: 0.8, changefreq: "weekly" },
    ];
  },
};
