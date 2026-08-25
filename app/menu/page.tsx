import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import MenuCard from "@/components/MenuCard";
import AdUnit from "@/components/AdUnit";
import { menuCategories } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Chick-fil-A Full Menu with Prices & Calories (2026)",
  description:
    "Complete Chick-fil-A menu — all items with prices and calories. Breakfast, sandwiches, nuggets, salads, sides, drinks, and more.",
  openGraph: {
    title: "Chick-fil-A Full Menu with Prices & Calories (2026)",
    url: "/menu",
  },
};

export const revalidate = 86400;

export default function MenuPage() {
  const menuJsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Chick-fil-A Full Menu",
    description: "Complete Chick-fil-A menu with prices and calories.",
    url: `${process.env.SITE_URL || "https://chickfilamenu.info"}/menu`,
    hasMenuSection: menuCategories.map((cat) => ({
      "@type": "MenuSection",
      name: cat.name,
      description: cat.description,
      url: `${process.env.SITE_URL || "https://chickfilamenu.info"}/menu/${cat.slug}`,
      hasMenuItem: cat.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price,
          priceCurrency: "USD",
        },
        nutrition: {
          "@type": "NutritionInformation",
          calories: `${item.nutrition.calories} calories`,
        },
      })),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Menu", href: "/menu" },
          ]}
        />
        
        <AdUnit type="leaderboard" />

        <div className="mt-8 mb-12">
          <h1 className="font-display font-black text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            Full Menu
          </h1>
          <p className="text-[#4a4a4a] text-lg max-w-3xl">
            Browse our complete selection of freshly prepared meals, sides, and beverages.
          </p>
        </div>

        <div className="space-y-24">
          {menuCategories.map((category, index) => (
            <div key={category.slug}>
              <div id={category.slug} className="scroll-mt-28">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EAE3D5]">
                  <div>
                    <h2 className="font-display font-bold text-3xl text-[#1A1A1A]">
                      {category.name}
                    </h2>
                    {category.description && (
                      <p className="text-gray-600 mt-2">{category.description}</p>
                    )}
                  </div>
                  <Link 
                    href={`/menu/${category.slug}`}
                    className="hidden sm:inline-flex items-center gap-1 text-[#DD0033] font-semibold hover:text-[#B8002A] transition-colors"
                  >
                    View All {category.name}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>

                {/* Items Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.items.map((item) => (
                    <MenuCard key={item.slug} item={item} categorySlug={category.slug} />
                  ))}
                </div>

                <div className="mt-6 sm:hidden">
                  <Link 
                    href={`/menu/${category.slug}`}
                    className="inline-flex w-full justify-center items-center gap-1 bg-[#FCFAF5] border border-[#EAE3D5] text-[#1A1A1A] font-semibold py-3 rounded-xl hover:bg-[#EAE3D5] transition-colors"
                  >
                    View All {category.name}
                  </Link>
                </div>
              </div>
              
              {/* Mid-Content Ad after the 3rd category */}
              {index === 2 && (
                <AdUnit type="responsive" />
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-20 p-6 bg-amber-50 border border-amber-200 rounded-3xl">
          <p className="text-sm text-amber-800">
            <strong>⚠️ Price Disclaimer:</strong> Prices shown are US national
            average estimates based on delivery platform data. Actual Chick-fil-A
            prices vary by location, franchise owner, and may change at any time.
            Always confirm current prices at your local restaurant.{" "}
            <Link href="/disclaimer" className="underline font-medium">
              Read full disclaimer
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
