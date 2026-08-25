import { MetadataRoute } from "next";

const siteUrl = process.env.SITE_URL || "https://chick-fila-menus.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ─── Search Engine Crawlers ─────────────────────────────────────────────
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "DuckAssistBot",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },

      // ─── AI / LLM Crawlers (Allow for AI answer engine visibility) ──────────
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "Perplexity-User",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "YouBot",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "Diffbot",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "AI2Bot",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "Timpibot",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "meta-externalagent",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },

      // ─── Social Preview Bots (Allow for link previews) ──────────────────────
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "Facebot",
        allow: "/",
      },
      {
        userAgent: "FacebookBot",
        allow: "/",
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
      {
        userAgent: "Slackbot",
        allow: "/",
      },
      {
        userAgent: "Slackbot-LinkExpanding",
        allow: "/",
      },
      {
        userAgent: "WhatsApp",
        allow: "/",
      },
      {
        userAgent: "TelegramBot",
        allow: "/",
      },
      {
        userAgent: "Discordbot",
        allow: "/",
      },
      {
        userAgent: "Pinterest",
        allow: "/",
      },

      // ─── Default: All other bots ─────────────────────────────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/", "/site-meta-audit/", "/api/"],
      },
    ],
    // ✅ CORRECT DOMAIN — chick-fila-menus.com
    sitemap: [
      `${siteUrl}/sitemap.xml`,
    ],
  };
}
