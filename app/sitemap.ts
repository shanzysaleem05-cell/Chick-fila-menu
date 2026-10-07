import { MetadataRoute } from "next";
import { menuCategories } from "@/lib/menu-data";
import { cateringCategories } from "@/lib/catering-data";

const siteUrl = process.env.SITE_URL || "https://chick-fila-menus.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${siteUrl}/menu`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/prices`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/calories`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/hours`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/catering`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/rewards`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/coupons`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/recipes`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${siteUrl}/privacy-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${siteUrl}/disclaimer`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${siteUrl}/dmca`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  // Blog posts
  const blogSlugs = [
    "healthiest-items",
    "breakfast-guide",
    "cheapest-ways-to-order",
    "chicken-sandwich-comparison",
    "secret-menu-items",
    "keto-friendly-options",
  ];
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = menuCategories.map((cat) => ({
    url: `${siteUrl}/menu/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
    images: cat.image ? [`${siteUrl}${cat.image}`] : undefined,
  }));

  // Item detail pages
  const itemPages: MetadataRoute.Sitemap = menuCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      url: `${siteUrl}/menu/${cat.slug}/${item.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
      images: item.image ? [`${siteUrl}${item.image}`] : undefined,
    }))
  );

  // Catering category pages
  const cateringCategoryPages: MetadataRoute.Sitemap = cateringCategories.map((cat) => ({
    url: `${siteUrl}/catering/${cat.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
    images: cat.image ? [`${siteUrl}${cat.image}`] : undefined,
  }));

  // Catering item pages
  const cateringItemPages: MetadataRoute.Sitemap = cateringCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      url: `${siteUrl}/catering/${cat.slug}/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      images: item.image ? [`${siteUrl}${item.image}`] : undefined,
    }))
  );

  return [...staticPages, ...blogPages, ...categoryPages, ...itemPages, ...cateringCategoryPages, ...cateringItemPages];
}
