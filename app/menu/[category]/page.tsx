import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import MenuTable from "@/components/MenuTable";
import MenuCard from "@/components/MenuCard";
import AdUnit from "@/components/AdUnit";
import { menuCategories, getCategoryBySlug, getAllItems } from "@/lib/menu-data";
import { formatPrice, getLastUpdated } from "@/lib/utils";

export const revalidate = 86400;

export async function generateStaticParams() {
  return menuCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};
  return {
    title: `Chick-fil-A ${category.name} Menu with Prices & Calories (2026)`,
    description: `Chick-fil-A ${category.name} menu — all ${category.items.length} items with prices and calories. ${category.description}`,
    openGraph: {
      title: `Chick-fil-A ${category.name} Menu — Prices & Calories 2026`,
      url: `/menu/${categorySlug}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const itemsWithCat = category.items.map((item) => ({ ...item, category }));
  const lastUpdated = getLastUpdated();

  const menuSectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "MenuSection",
    name: `Chick-fil-A ${category.name} Menu`,
    description: category.description,
    url: `${process.env.SITE_URL || "https://chickfilamenu.info"}/menu/${category.slug}`,
    hasMenuItem: category.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      description: item.description,
      url: `${process.env.SITE_URL || "https://chickfilamenu.info"}/menu/${category.slug}/${item.slug}`,
      offers: {
        "@type": "Offer",
        price: item.price,
        priceCurrency: "USD",
      },
      nutrition: {
        "@type": "NutritionInformation",
        calories: `${item.nutrition.calories} calories`,
        proteinContent: item.nutrition.protein ? `${item.nutrition.protein}g` : undefined,
        carbohydrateContent: item.nutrition.carbs ? `${item.nutrition.carbs}g` : undefined,
        fatContent: item.nutrition.fat ? `${item.nutrition.fat}g` : undefined,
      },
    })),
  };

  // Related categories
  const relatedCats = menuCategories
    .filter((c) => c.slug !== category.slug)
    .slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSectionJsonLd) }}
      />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: "Menu", href: "/menu" },
            { label: category.name, href: `/menu/${category.slug}` },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-10 mt-6">
          {/* Left Sidebar Navigation */}
          <div className="w-full lg:w-[240px] flex-shrink-0">
            <nav className="flex flex-col gap-1">
              {menuCategories.map((cat) => {
                const isActive = cat.slug === category.slug;
                return (
                  <Link
                    key={cat.slug}
                    href={`/menu/${cat.slug}`}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all ${
                      isActive
                        ? "border-2 border-brand-red text-brand-red"
                        : "text-[#00587C] hover:bg-[#f4f4f4]"
                    }`}
                  >

                    <span>{cat.name}</span>
                  </Link>
                );
              })}
              <Link
                href="/menu"
                className="mt-4 px-4 py-2 text-[#00587C] font-bold text-sm hover:underline"
              >
                Explore all
              </Link>
              <Link
                href="/calories"
                className="mt-8 px-4 py-2 text-[#666666] text-xs hover:underline"
              >
                View nutrition & allergens
              </Link>
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-[#f9f9f9] rounded-3xl p-6 md:p-10">
            {/* Header / Title */}
            <div className="text-center mb-10">
              <h1 className="font-display font-bold text-[#00587C] text-[2.75rem] mb-2 tracking-tight">
                {category.name}
              </h1>
              <p className="text-[#666666] text-sm">
                Prices vary by location
              </p>
            </div>

            {/* Category Nutrition & Prices Table */}
            <div className="bg-white border border-[#EAE3D5] rounded-xl mb-12 overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-[#EAE3D5]">
                <h2 className="font-display font-bold text-[#1A1A1A] text-xl">
                  {category.name} Nutrition & Prices
                </h2>
              </div>
              <div className="px-6 py-3 border-b border-[#EAE3D5] bg-gray-50/50">
                <p className="text-sm text-[#666666]">
                  Showing <span className="font-semibold">{category.items.length}</span> items
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-[#3B1E1E] text-white text-sm">
                      <th className="py-3 px-6 font-semibold w-1/3">Item Name &uarr;</th>
                      <th className="py-3 px-6 font-semibold">Price &uarr;&darr;</th>
                      <th className="py-3 px-6 font-semibold">Calories &uarr;&darr;</th>
                      <th className="py-3 px-6 font-semibold text-right">PROTEIN</th>
                      <th className="py-3 px-6 font-semibold text-right">CARBS</th>
                      <th className="py-3 px-6 font-semibold text-right">FAT</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-[#1A1A1A]">
                    {category.items.map((item, index) => (
                      <tr 
                        key={item.slug} 
                        className={`border-b border-[#EAE3D5] last:border-0 hover:bg-brand-red/5 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}
                      >
                        <td className="py-4 px-6 font-medium">
                          <Link href={`/menu/${category.slug}/${item.slug}`} className="hover:text-[#DD0033] hover:underline">
                            {item.name}
                          </Link>
                        </td>
                        <td className="py-4 px-6 font-bold">{formatPrice(item.price)}</td>
                        <td className="py-4 px-6 font-bold">
                          {item.nutrition.calories} <span className="text-xs font-normal text-gray-500">cal</span>
                        </td>
                        <td className="py-4 px-6 text-right text-gray-600">{item.nutrition.protein !== undefined ? `${item.nutrition.protein}g` : '-'}</td>
                        <td className="py-4 px-6 text-right text-gray-600">{item.nutrition.carbs !== undefined ? `${item.nutrition.carbs}g` : '-'}</td>
                        <td className="py-4 px-6 text-right text-gray-600">{item.nutrition.fat !== undefined ? `${item.nutrition.fat}g` : '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Above Items Ad */}
            <AdUnit type="leaderboard" />

            {/* Item Cards Grid */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
              {category.items.map((item) => (
                <MenuCard key={item.slug} item={item} categorySlug={category.slug} />
              ))}
            </div>
          </div>
        </div>

        {/* Related Categories */}
        <div className="mt-12">
          <h2 className="font-display font-bold text-2xl mb-5">Browse Other Categories</h2>
          <div className="flex flex-wrap gap-3">
            {relatedCats.map((cat) => (
              <Link
                key={cat.slug}
                href={`/menu/${cat.slug}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-gray hover:bg-brand-red/10 hover:text-brand-red font-medium text-sm transition-colors"
              >
                {cat.name}
                <span className="text-xs text-brand-gray-text">({cat.items.length})</span>
              </Link>
            ))}
            <Link
              href="/menu"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-red text-white font-medium text-sm hover:bg-brand-red-dark transition-colors"
            >
              All Categories <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-2xl">
          <p className="text-sm text-amber-800">
            <strong>⚠️ Disclaimer:</strong> Prices shown are US national average estimates.
            Actual prices vary by location. This site is not affiliated with Chick-fil-A, Inc.{" "}
            <Link href="/disclaimer" className="underline">Read full disclaimer</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
