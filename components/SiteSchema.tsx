const siteUrl = process.env.SITE_URL || "https://chick-fila-menus.com";

export default function SiteSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "CFA Menu Guide",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/apple-touch-icon.png`,
          width: 180,
          height: 180,
        },
        description: "An independent editorial guide to Chick-fil-A menu prices, nutrition, catering and restaurant news.",
        email: "admin@cfamenuguide.com",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "CFA Menu Guide",
        inLanguage: "en-US",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
