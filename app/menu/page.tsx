import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import MenuCard from "@/components/MenuCard";
import MenuTable from "@/components/MenuTable";
import AdUnit from "@/components/AdUnit";
import { menuCategories } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Chick-fil-A Menu & Prices 2026 — Complete Price List",
  description: "See every Chick-fil-A menu item with 2026 prices and calories. Browse visual menu cards or view the complete table with all prices, calories, and nutrition facts.",
  alternates: {
    canonical: "https://chick-fila-menus.com/menu",
  },
  openGraph: {
    title: "Chick-fil-A Menu & Prices 2026",
    url: "https://chick-fila-menus.com/menu",
  },
};

export const revalidate = 86400;

export default function MenuPage() {
  const allItemsWithCategory = menuCategories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat }))
  );

  const menuJsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Chick-fil-A Full Menu & Prices",
    description: "Complete Chick-fil-A menu with prices and calories.",
    url: `${process.env.SITE_URL || "https://chick-fila-menus.com"}/menu`,
    hasMenuSection: menuCategories.map((cat) => ({
      "@type": "MenuSection",
      name: cat.name,
      description: cat.description,
      url: `${process.env.SITE_URL || "https://chick-fila-menus.com"}/menu/${cat.slug}`,
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
            { label: "Menu & Prices", href: "/menu" },
          ]}
        />
        
        <AdUnit type="leaderboard" />

        <div className="mt-8 mb-12">
          <h1 className="font-display font-black text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            Chick-fil-A Menu & Prices (2026)
          </h1>
          <p className="text-[#4a4a4a] text-lg max-w-3xl">
            Browse our complete selection of freshly prepared meals, sides, and beverages. View items by category below, or scroll down for the complete prices table.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link href="#full-prices-table" className="text-sm font-semibold bg-[#DD0033] text-white px-5 py-2.5 rounded-full hover:bg-[#B8002A] transition-colors shadow-sm">
              View Prices Table &darr;
            </Link>
            <Link href="/hours" className="text-sm font-semibold bg-[#F5F5F5] px-4 py-2.5 rounded-full hover:bg-[#EAE3D5] text-[#1A1A1A] transition-colors border border-gray-200">
              Serving Hours
            </Link>
            <Link href="/calories" className="text-sm font-semibold bg-[#F5F5F5] px-4 py-2.5 rounded-full hover:bg-[#EAE3D5] text-[#1A1A1A] transition-colors border border-gray-200">
              Nutrition Guide
            </Link>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {menuCategories.map((cat) => (
              <Link key={cat.slug} href={`#${cat.slug}`} className="text-sm font-semibold bg-[#FAF7F2] px-4 py-2 rounded-full hover:bg-[#EAE3D5] text-[#1A1A1A] transition-colors border border-[#EAE3D5]">
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

        {/* --- CARDS SECTION --- */}
        <div className="space-y-24 mb-24">
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
                      <p className="text-gray-600 mt-2 max-w-3xl">{category.description}</p>
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

                {/* Items Grid (Cards) */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.items.map((item) => (
                    <MenuCard key={item.slug} item={item} categorySlug={category.slug} />
                  ))}
                </div>

                <div className="mt-6 sm:hidden">
                  <Link 
                    href={`/menu/${category.slug}`}
                    className="inline-flex w-full justify-center items-center gap-1 bg-[#FAF7F2] border border-[#EAE3D5] text-[#1A1A1A] font-semibold py-3 rounded-xl hover:bg-[#EAE3D5] transition-colors"
                  >
                    View All {category.name}
                  </Link>
                </div>

                {/* Category-Specific Nutrition Table */}
                <div className="mt-10 bg-white rounded-2xl shadow-sm border border-[#E8DFD0] overflow-hidden">
                  <div className="bg-[#2C1914] text-white px-6 py-4 flex items-center justify-between">
                    <h3 className="font-display font-bold text-lg m-0" style={{ color: 'white' }}>
                      {category.name} Nutrition Details
                    </h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr className="bg-[#FAF7F2] border-b border-[#E8DFD0] text-xs text-[#594E48] uppercase tracking-wider">
                          <th className="p-4 font-bold">Item Name</th>
                          <th className="p-4 font-bold">Calories</th>
                          <th className="p-4 font-bold">Protein</th>
                          <th className="p-4 font-bold">Carbs</th>
                          <th className="p-4 font-bold">Fat</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8DFD0]">
                        {category.items.map(item => (
                          <tr key={item.slug} className="hover:bg-[#FAF7F2] transition-colors">
                            <td className="p-4 text-sm font-semibold text-[#1A1A1A]">{item.name}</td>
                            <td className="p-4 text-sm text-[#C8102E] font-medium">{item.nutrition.calories}</td>
                            <td className="p-4 text-sm text-[#594E48]">{item.nutrition.protein ? `${item.nutrition.protein}g` : '-'}</td>
                            <td className="p-4 text-sm text-[#594E48]">{item.nutrition.carbs ? `${item.nutrition.carbs}g` : '-'}</td>
                            <td className="p-4 text-sm text-[#594E48]">{item.nutrition.fat ? `${item.nutrition.fat}g` : '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              {/* Mid-Content Ad after the 3rd category */}
              {index === 2 && (
                <div className="mt-12">
                  <AdUnit type="responsive" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- TABLE SECTION --- */}
        <div id="full-prices-table" className="scroll-mt-28 pt-8 border-t-2 border-[#EAE3D5]">
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl text-[#1A1A1A] mb-4">
              Complete Prices & Nutrition Table
            </h2>
            <p className="text-gray-600">
              Prefer a quick list? Search or filter through the complete Chick-fil-A menu below to quickly find prices, calories, and protein info.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-sm border border-[#EAE3D5] p-1 overflow-hidden">
            <MenuTable items={allItemsWithCategory} />
          </div>
        </div>
      </div>
    </>
  );
}
