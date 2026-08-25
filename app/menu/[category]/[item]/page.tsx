import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ShoppingCart, AlertTriangle, ArrowRight, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdUnit";
import { menuCategories, getItemBySlug, getAllItems } from "@/lib/menu-data";
import { formatPrice, getLastUpdated } from "@/lib/utils";

export const revalidate = 86400;

export async function generateStaticParams() {
  const params: { category: string; item: string }[] = [];
  for (const cat of menuCategories) {
    for (const item of cat.items) {
      params.push({ category: cat.slug, item: item.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; item: string }>;
}): Promise<Metadata> {
  const { category: categorySlug, item: itemSlug } = await params;
  const data = getItemBySlug(categorySlug, itemSlug);
  if (!data) return {};
  const { item, category } = data;
  return {
    title: `Chick-fil-A ${item.name} Price, Calories & Nutrition (${new Date().getFullYear()})`,
    description: `Complete guide to Chick-fil-A ${item.name}. Priced at ${formatPrice(item.price)} with ${item.nutrition.calories} calories. Read our review, nutrition facts, and FAQs!`,
    alternates: {
      canonical: `/menu/${categorySlug}/${itemSlug}`,
    },
    openGraph: {
      title: `${item.name} — ${formatPrice(item.price)} | ${item.nutrition.calories} cal`,
      url: `/menu/${categorySlug}/${itemSlug}`,
    },
  };
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ category: string; item: string }>;
}) {
  const { category: categorySlug, item: itemSlug } = await params;
  const data = getItemBySlug(categorySlug, itemSlug);
  if (!data) notFound();

  const { item, category } = data;
  const lastUpdated = getLastUpdated();

  // Related items
  let relatedItems: any[] = [];
  if (item.relatedItemSlugs && item.relatedItemSlugs.length > 0) {
    const allItems = getAllItems();
    relatedItems = item.relatedItemSlugs
      .map((slug) => allItems.find((i) => i.slug === slug))
      .filter(Boolean);
  } else {
    relatedItems = category.items
      .filter((i) => i.slug !== item.slug)
      .slice(0, 3);
  }

  // Base Menu Item Schema
  const itemJsonLd: any = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        url: `${process.env.SITE_URL || "https://chickfilamenu.info"}/menu/${category.slug}/${item.slug}`,
        offers: {
          "@type": "Offer",
          price: item.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        nutrition: {
          "@type": "NutritionInformation",
          calories: `${item.nutrition.calories} calories`,
          proteinContent: item.nutrition.protein ? `${item.nutrition.protein} g` : undefined,
          carbohydrateContent: item.nutrition.carbs ? `${item.nutrition.carbs} g` : undefined,
          fatContent: item.nutrition.fat ? `${item.nutrition.fat} g` : undefined,
          saturatedFatContent: item.nutrition.saturatedFat ? `${item.nutrition.saturatedFat} g` : undefined,
          sodiumContent: item.nutrition.sodium ? `${item.nutrition.sodium} mg` : undefined,
        },
        suitableForDiet:
          item.nutrition.calories < 300
            ? ["https://schema.org/LowCalorieDiet"]
            : undefined,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Menu", item: `${process.env.SITE_URL || "https://chickfilamenu.info"}/menu` },
          { "@type": "ListItem", position: 2, name: category.name, item: `${process.env.SITE_URL || "https://chickfilamenu.info"}/menu/${category.slug}` },
          { "@type": "ListItem", position: 3, name: item.name, item: `${process.env.SITE_URL || "https://chickfilamenu.info"}/menu/${category.slug}/${item.slug}` },
        ]
      }
    ]
  };

  // Add FAQ Schema if present
  if (item.faqs && item.faqs.length > 0) {
    itemJsonLd["@graph"].push({
      "@type": "FAQPage",
      mainEntity: item.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemJsonLd) }}
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: "Menu", href: "/menu" },
            { label: category.name, href: `/menu/${category.slug}` },
            { label: item.name, href: `/menu/${category.slug}/${item.slug}` },
          ]}
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-4">
          {/* Left: Item Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Header */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Link
                  href={`/menu/${category.slug}`}
                  className="text-sm font-medium text-brand-gray-text hover:text-[#DD0033] transition-colors"
                >
                  {category.name}
                </Link>
                <span className="text-gray-300">/</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-[#1A1A1A] mb-3">{item.name}</h1>
              
              {/* Main Item Image */}
              <div className="my-6 aspect-[4/3] md:aspect-[2/1] relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm flex items-center justify-center p-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>

              <p className="text-xs text-brand-gray-text mt-2 font-medium">Last updated: {lastUpdated}</p>
            </div>



            {/* Price & Calories Highlight */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-4 text-center shadow-sm">
                <p className="text-xs text-[#DD0033] font-bold uppercase tracking-wider mb-1">Price</p>
                <p className="font-display font-bold text-2xl text-[#1A1A1A]">{formatPrice(item.price)}</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-center shadow-sm">
                <p className="text-xs text-gray-600 font-bold uppercase tracking-wider mb-1">Calories</p>
                <p className="font-display font-bold text-2xl text-[#1A1A1A]">{item.nutrition.calories}</p>
              </div>
              {item.nutrition.protein !== undefined && (
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-center shadow-sm">
                  <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider mb-1">Protein</p>
                  <p className="font-display font-bold text-2xl text-[#1A1A1A]">{item.nutrition.protein}g</p>
                </div>
              )}
              {item.nutrition.fat !== undefined && (
                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 text-center shadow-sm">
                  <p className="text-xs text-orange-700 font-bold uppercase tracking-wider mb-1">Total Fat</p>
                  <p className="font-display font-bold text-2xl text-[#1A1A1A]">{item.nutrition.fat}g</p>
                </div>
              )}
            </div>

            {/* Unique Description / Long-form content */}
            <article className="max-w-none text-[#1A1A1A] leading-relaxed space-y-4">
              {item.uniqueDescription ? (
                item.uniqueDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed mb-4">{paragraph}</p>
                ))
              ) : (
                <p className="leading-relaxed mb-4">{item.description}</p>
              )}
            </article>

            {/* Full Nutrition Table */}
            <div>
              <h2 className="font-display font-bold text-2xl text-[#1A1A1A] mb-4">
                {item.name} Nutrition Facts
              </h2>
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-gray-50 text-[#1A1A1A] px-5 py-4 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-500 uppercase">Nutrition Facts</p>
                  <p className="text-xl font-display font-bold">{item.name}</p>
                </div>
                <table className="w-full" aria-label={`${item.name} nutrition facts`}>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="px-5 py-3">
                        <span className="text-sm font-bold text-[#1A1A1A]">Calories</span>
                      </td>
                      <td className="px-5 py-3 text-right">
                        <span className="text-xl font-black text-[#1A1A1A]">{item.nutrition.calories}</span>
                      </td>
                    </tr>
                    {[
                      { label: "Total Fat", value: item.nutrition.fat, unit: "g" },
                      { label: "Saturated Fat", value: item.nutrition.saturatedFat, unit: "g", indent: true },
                      { label: "Sodium", value: item.nutrition.sodium, unit: "mg" },
                      { label: "Total Carbohydrate", value: item.nutrition.carbs, unit: "g" },
                      { label: "Dietary Fiber", value: item.nutrition.fiber, unit: "g", indent: true },
                      { label: "Total Sugars", value: item.nutrition.sugar, unit: "g", indent: true },
                      { label: "Protein", value: item.nutrition.protein, unit: "g" },
                    ]
                      .filter((row) => row.value !== undefined)
                      .map((row) => (
                        <tr key={row.label} className="border-b border-gray-100 bg-white hover:bg-gray-50">
                          <td className={`px-5 py-2.5 text-sm ${row.indent ? "pl-10 text-gray-600" : "font-bold text-[#1A1A1A]"}`}>
                            {row.label}
                          </td>
                          <td className="px-5 py-2.5 text-right text-sm font-medium text-[#1A1A1A]">
                            {row.value}{row.unit}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>



            {/* FAQs */}
            {item.faqs && item.faqs.length > 0 && (
              <div className="mt-8">
                <h2 className="font-display font-bold text-2xl text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {item.faqs.map((faq, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                      <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Allergens */}
            {item.allergens && item.allergens.length > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <h2 className="font-bold text-amber-900">Allergen Information</h2>
                </div>
                <p className="text-sm text-amber-800 mb-3">
                  <strong>{item.name}</strong> contains the following allergens:
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.allergens.map((allergen) => (
                    <span
                      key={allergen}
                      className="px-3 py-1 bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold rounded-full"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Sidebar */}
          <div className="w-full lg:w-[300px] flex-shrink-0 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-display font-bold text-xl mb-2 text-[#1A1A1A]">Ready to Order?</h3>
              <p className="text-gray-600 text-sm mb-5">
                Find a Chick-fil-A near you to order the {item.name}.
              </p>
              <div className="space-y-3">
                <a
                  href="https://www.chick-fil-a.com/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#DD0033] hover:bg-[#B8002A] text-white font-bold py-3 rounded-lg shadow-sm transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Order Online
                </a>
                <Link
                  href={`/menu/${category.slug}`}
                  className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-[#DD0033] hover:text-[#DD0033] text-[#1A1A1A] font-bold py-2.5 rounded-lg transition-colors"
                >
                  View More {category.name}
                </Link>
              </div>
            </div>

            {/* Sidebar Ad */}
            <AdUnit type="rectangle" />
          </div>
        </div>

        {/* Bottom Content Ad */}
        <AdUnit type="leaderboard" />

        {/* Related Items */}
        {relatedItems.length > 0 && (
          <div className="mt-8">
            <h2 className="font-display font-bold text-2xl text-[#1A1A1A] mb-6">
              You Might Also Like
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedItems.map((related) => (
                <Link
                  key={related.slug}
                  href={`/menu/${related.category?.slug || category.slug}/${related.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                   <div className="aspect-[4/3] flex items-center justify-center p-4 relative overflow-hidden bg-white border-b border-gray-200">
                      <img 
                        src={related.image} 
                        alt={related.name} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-[#1A1A1A] group-hover:text-[#DD0033] transition-colors mb-2">
                        {related.name}
                      </h3>
                      <div className="flex justify-center items-center gap-3 text-sm text-gray-600">
                        <span className="font-bold text-[#DD0033]">${parseFloat(related.price).toFixed(2)}</span>
                        <span>•</span>
                        <span>{related.nutrition.calories} cal</span>
                      </div>
                    </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-12 p-5 bg-gray-50 border border-gray-200 rounded-xl text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Disclaimer:</strong> Prices are US national average estimates and may vary by location. 
            Nutrition data is sourced from official public nutrition pages. This site is independently operated and is not affiliated with, endorsed by, or sponsored by Chick-fil-A, Inc. All trademarks belong to their respective owners.{" "}
            <Link href="/disclaimer" className="text-[#DD0033] hover:underline">Read our full disclaimer</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
