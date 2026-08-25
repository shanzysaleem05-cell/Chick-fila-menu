import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Avoid duplicating "Home" if it's already the first item in the array
  const isHomeFirst = items.length > 0 && items[0].href === "/";
  const allItems = isHomeFirst ? items : [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${process.env.SITE_URL || "https://chickfilamenu.info"}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1">
              {index === 0 && <Home className="w-3.5 h-3.5 text-brand-gray-text" />}
              {index < allItems.length - 1 ? (
                <>
                  <Link
                    href={item.href}
                    className="text-brand-gray-text hover:text-brand-red transition-colors"
                  >
                    {item.label}
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gray-mid" />
                </>
              ) : (
                <span className="text-brand-dark font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
