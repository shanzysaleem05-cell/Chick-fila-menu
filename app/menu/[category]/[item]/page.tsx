import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ShoppingCart, AlertTriangle, ArrowRight, CheckCircle, ChevronRight, Star, Info } from "lucide-react";
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
    title: `Chick-fil-A ${item.name} — Price, Calories & Nutrition (${new Date().getFullYear()})`,
    description: `Chick-fil-A ${item.name}: priced at ${formatPrice(item.price)}, ${item.nutrition.calories} calories, ${item.nutrition.protein ?? 0}g protein. Full nutrition facts, allergens, FAQs and more.`,
    alternates: {
      canonical: `/menu/${categorySlug}/${itemSlug}`,
    },
    openGraph: {
      title: `${item.name} — ${formatPrice(item.price)} | ${item.nutrition.calories} cal`,
      description: item.description,
      url: `/menu/${categorySlug}/${itemSlug}`,
      images: item.image ? [{ url: item.image, alt: item.name }] : [],
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

  // Related items from same category
  let relatedItems: any[] = [];
  if (item.relatedItemSlugs && item.relatedItemSlugs.length > 0) {
    const allItems = getAllItems();
    relatedItems = item.relatedItemSlugs
      .map((slug) => allItems.find((i) => i.slug === slug))
      .filter(Boolean);
  } else {
    relatedItems = category.items
      .filter((i) => i.slug !== item.slug)
      .slice(0, 4);
  }

  // Other categories for internal linking
  const otherCategories = menuCategories.filter((c) => c.slug !== category.slug).slice(0, 5);

  // Popular items from other categories for cross-linking
  const popularFromOtherCats = menuCategories
    .filter((c) => c.slug !== category.slug)
    .flatMap((c) => c.items.filter((i) => i.popular).slice(0, 2))
    .slice(0, 6);

  // JSON-LD Schema
  const itemJsonLd: any = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        url: `${process.env.SITE_URL || "https://chick-fila-menus.com"}/menu/${category.slug}/${item.slug}`,
        image: item.image ? `${process.env.SITE_URL || "https://chick-fila-menus.com"}${item.image}` : undefined,
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
          { "@type": "ListItem", position: 1, name: "Home", item: `${process.env.SITE_URL || "https://chick-fila-menus.com"}` },
          { "@type": "ListItem", position: 2, name: "Menu", item: `${process.env.SITE_URL || "https://chick-fila-menus.com"}/menu` },
          { "@type": "ListItem", position: 3, name: category.name, item: `${process.env.SITE_URL || "https://chick-fila-menus.com"}/menu/${category.slug}` },
          { "@type": "ListItem", position: 4, name: item.name, item: `${process.env.SITE_URL || "https://chick-fila-menus.com"}/menu/${category.slug}/${item.slug}` },
        ],
      },
    ],
  };

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

  // Calorie context helpers
  const isLowCal = item.nutrition.calories < 300;
  const isHighProtein = (item.nutrition.protein ?? 0) > 25;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemJsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Menu", href: "/menu" },
            { label: category.name, href: `/menu/${category.slug}` },
            { label: item.name, href: `/menu/${category.slug}/${item.slug}` },
          ]}
        />

        {/* Jump to Section Nav */}
        <nav className="hidden md:flex gap-4 mt-4 mb-6 text-sm flex-wrap">
          {["Overview", "Nutrition Facts", item.faqs?.length ? "FAQs" : null, "Related Items"].filter(Boolean).map((section) => (
            <a
              key={section!}
              href={`#${section!.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[#DD0033] hover:underline font-medium"
            >
              {section}
            </a>
          ))}
        </nav>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* ── MAIN CONTENT ── */}
          <div className="space-y-10" id="overview">

            {/* Hero: Image + Title + Stats */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="aspect-square md:aspect-auto bg-[#FBF9F6] flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-100">
                  <img
                    src={item.image}
                    alt={`Chick-fil-A ${item.name}`}
                    className="w-full h-full object-contain drop-shadow-xl"
                    style={{ maxHeight: "320px" }}
                  />
                </div>

                {/* Title + Stats */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Link
                        href={`/menu/${category.slug}`}
                        className="text-xs font-bold uppercase tracking-widest text-[#DD0033] hover:underline"
                      >
                        {category.name}
                      </Link>
                      {item.popular && (
                        <span className="flex items-center gap-1 text-xs bg-amber-100 text-amber-700 font-bold px-2 py-0.5 rounded-full">
                          <Star className="w-3 h-3" /> Popular
                        </span>
                      )}
                    </div>
                    <h1 className="text-2xl md:text-3xl font-display font-bold text-[#1A1A1A] mb-2 leading-tight">
                      {item.name}
                    </h1>
                    <p className="text-sm text-gray-500 mb-4">Last updated: {lastUpdated}</p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {isLowCal && (
                        <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-1 rounded-full">
                          Low Calorie
                        </span>
                      )}
                      {isHighProtein && (
                        <span className="text-xs bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded-full">
                          High Protein
                        </span>
                      )}
                      {item.tags?.includes("gluten-friendly") && (
                        <span className="text-xs bg-purple-100 text-purple-700 font-bold px-2 py-1 rounded-full">
                          Gluten Friendly
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-center">
                      <p className="text-xs text-[#DD0033] font-bold uppercase tracking-wider mb-1">Price</p>
                      <p className="font-display font-bold text-xl text-[#1A1A1A]">{formatPrice(item.price)}</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Calories</p>
                      <p className="font-display font-bold text-xl text-[#1A1A1A]">{item.nutrition.calories}</p>
                    </div>
                    {item.nutrition.protein !== undefined && (
                      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-center">
                        <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider mb-1">Protein</p>
                        <p className="font-display font-bold text-xl text-[#1A1A1A]">{item.nutrition.protein}g</p>
                      </div>
                    )}
                    {item.nutrition.fat !== undefined && (
                      <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 text-center">
                        <p className="text-xs text-orange-500 font-bold uppercase tracking-wider mb-1">Total Fat</p>
                        <p className="font-display font-bold text-xl text-[#1A1A1A]">{item.nutrition.fat}g</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Ad */}
            <AdUnit type="leaderboard" />

            {/* Full Description */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="font-display font-bold text-xl text-[#1A1A1A] mb-4">
                About the {item.name}
              </h2>
              <article className="prose prose-gray max-w-none text-[#333] leading-relaxed space-y-4">
                {item.uniqueDescription ? (
                  item.uniqueDescription.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed mb-4 text-gray-700">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <>
                    <p className="leading-relaxed mb-4 text-gray-700">
                      {item.description}
                    </p>
                    <p className="leading-relaxed mb-4 text-gray-700">
                      The <strong>{item.name}</strong> is a standout choice on the Chick-fil-A {category.name.toLowerCase()} menu. 
                      Priced starting around {formatPrice(item.price)}, it offers a satisfying balance of signature flavor and quality ingredients that guests have come to expect.
                      Whether you&apos;re stopping by for a quick bite or planning a meal with the family, this item remains a reliable go-to option that pairs perfectly with Waffle Potato Fries and a refreshing beverage.
                    </p>
                    <p className="leading-relaxed mb-4 text-gray-700">
                      Nutritionally, this item contains <strong>{item.nutrition.calories} calories</strong>, with {item.nutrition.protein}g of protein, {item.nutrition.fat}g of fat, and {item.nutrition.carbs}g of carbohydrates. 
                      {item.nutrition.protein && item.nutrition.protein > 15 ? ` Providing a substantial ${item.nutrition.protein}g of protein, it's a great option to keep you fueled throughout your busy day.` : " It fits easily into a balanced fast-food meal when paired with lighter sides like a side salad or fruit cup."}
                    </p>
                    {item.allergens && item.allergens.length > 0 && (
                      <p className="leading-relaxed mb-4 text-gray-700">
                        <strong>Allergen Advisory:</strong> Please be aware that the {item.name} contains {item.allergens.join(", ")}. Chick-fil-A maintains strict protocols, but cross-contamination is always a possibility in active kitchens. Always check the latest nutrition information before placing your order.
                      </p>
                    )}
                  </>
                )}
              </article>

              {/* Internal links to related blog posts */}
              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Related Guides</p>
                <div className="flex flex-col gap-2">
                  <Link href="/blog/healthiest-items" className="flex items-center gap-2 text-sm text-[#DD0033] hover:underline font-medium">
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                    10 Healthiest Items on the Chick-fil-A Menu
                  </Link>
                  <Link href="/blog/cheapest-ways-to-order" className="flex items-center gap-2 text-sm text-[#DD0033] hover:underline font-medium">
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                    How to Order Chick-fil-A the Cheapest Way
                  </Link>
                  {category.slug === "breakfast" && (
                    <Link href="/blog/breakfast-guide" className="flex items-center gap-2 text-sm text-[#DD0033] hover:underline font-medium">
                      <ArrowRight className="w-4 h-4 flex-shrink-0" />
                      Complete Chick-fil-A Breakfast Guide
                    </Link>
                  )}
                  <Link href="/menu" className="flex items-center gap-2 text-sm text-[#DD0033] hover:underline font-medium">
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                    View All Chick-fil-A Prices
                  </Link>
                </div>
              </div>
            </div>

            {/* Nutrition Facts Table */}
            <div id="nutrition-facts">
              <h2 className="font-display font-bold text-2xl text-[#1A1A1A] mb-4">
                {item.name} — Nutrition Facts
              </h2>
              <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-[#1A1A1A] text-white px-6 py-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Nutrition Facts</p>
                  <p className="text-xl font-display font-bold">{item.name}</p>
                </div>
                <table className="w-full" aria-label={`${item.name} nutrition facts`}>
                  <tbody>
                    <tr className="border-b-4 border-gray-800 bg-white">
                      <td className="px-6 py-3">
                        <span className="text-sm font-bold text-gray-500">Calories per serving</span>
                      </td>
                      <td className="px-6 py-3 text-right">
                        <span className="text-3xl font-black text-[#1A1A1A]">{item.nutrition.calories}</span>
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
                      .map((row, i, arr) => (
                        <tr
                          key={row.label}
                          className={`${i !== arr.length - 1 ? "border-b border-gray-100" : ""} bg-white hover:bg-gray-50 transition-colors`}
                        >
                          <td className={`px-6 py-3 text-sm ${row.indent ? "pl-10 text-gray-500 font-normal" : "font-bold text-[#1A1A1A]"}`}>
                            {row.label}
                          </td>
                          <td className="px-6 py-3 text-right text-sm font-semibold text-[#1A1A1A]">
                            {row.value}{row.unit}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    * Percent Daily Values are based on a 2,000 calorie diet. Nutrition data sourced from official Chick-fil-A nutrition information. Values may vary by location.
                  </p>
                </div>
              </div>

              {/* Calorie comparison context */}
              <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-3">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-blue-800 mb-1">Calorie Context</p>
                  <p className="text-sm text-blue-700">
                    At {item.nutrition.calories} calories, the {item.name} represents{" "}
                    {Math.round((item.nutrition.calories / 2000) * 100)}% of a standard 2,000 calorie daily diet.{" "}
                    {item.nutrition.calories < 400
                      ? "This is a lighter option that fits well into a calorie-conscious meal plan."
                      : item.nutrition.calories < 700
                      ? "This is a moderate-calorie choice suitable as a main meal."
                      : "This is a hearty, high-energy option — great for sharing or an active day."}
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div id="faqs">
              <h2 className="font-display font-bold text-2xl text-[#1A1A1A] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {(item.faqs && item.faqs.length > 0 ? item.faqs : [
                  {
                    question: `How much does the ${item.name} cost?`,
                    answer: `The estimated starting price for the ${item.name} is ${formatPrice(item.price)}. Please note that prices may vary slightly by franchise location and delivery platform.`
                  },
                  {
                    question: `How many calories are in the ${item.name}?`,
                    answer: `The ${item.name} contains ${item.nutrition.calories} calories, making up ${Math.round((item.nutrition.calories / 2000) * 100)}% of a standard 2,000 calorie daily diet.`
                  },
                  {
                    question: `Does the ${item.name} contain any allergens?`,
                    answer: item.allergens && item.allergens.length > 0 
                      ? `Yes, the ${item.name} contains the following allergens: ${item.allergens.join(", ")}. If you have a severe allergy, please notify the restaurant staff when placing your order.`
                      : `Based on standard nutritional information, the ${item.name} does not contain the major FDA allergens. However, cross-contamination is possible in shared kitchens.`
                  }
                ]).map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                      <h3 className="font-bold text-[#1A1A1A] text-base flex items-start gap-2">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#DD0033] text-white text-xs font-black rounded-full flex items-center justify-center mt-0.5">
                          {idx + 1}
                        </span>
                        {faq.question}
                      </h3>
                    </div>
                    <div className="px-6 py-4 bg-white">
                      <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Allergens */}
            {item.allergens && item.allergens.length > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <h2 className="font-bold text-amber-900 text-lg">Allergen Information</h2>
                </div>
                <p className="text-sm text-amber-800 mb-3">
                  <strong>{item.name}</strong> contains the following allergens:
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.allergens.map((allergen) => (
                    <span
                      key={allergen}
                      className="px-3 py-1 bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold rounded-full"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-amber-700">
                  Always inform your server of any food allergies. Cross-contamination may occur. Contact your local Chick-fil-A for the most accurate allergen information.
                </p>
              </div>
            )}

            {/* Explore Other Menu Categories - Internal Links */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="font-display font-bold text-xl text-[#1A1A1A] mb-4">
                Explore More Chick-fil-A Menu
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {otherCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/menu/${cat.slug}`}
                    className="flex items-center gap-2 p-3 rounded-xl border border-gray-200 hover:border-[#DD0033] hover:bg-red-50 transition-all group"
                  >
                    <span className="text-xl">{cat.emoji}</span>
                    <div>
                      <p className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#DD0033] transition-colors leading-tight">
                        {cat.name}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#DD0033] ml-auto transition-colors" />
                  </Link>
                ))}
                <Link
                  href="/menu"
                  className="flex items-center gap-2 p-3 rounded-xl border border-[#DD0033] bg-red-50 hover:bg-[#DD0033] hover:text-white transition-all group col-span-2 sm:col-span-3"
                >
                  <span className="text-sm font-bold text-[#DD0033] group-hover:text-white transition-colors">
                    View Full Menu →
                  </span>
                </Link>
              </div>
            </div>

            {/* Bottom Ad */}
            <AdUnit type="leaderboard" />

            {/* Related Items */}
            {relatedItems.length > 0 && (
              <div id="related-items">
                <h2 className="font-display font-bold text-2xl text-[#1A1A1A] mb-6">
                  You Might Also Like
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {relatedItems.map((related: any) => (
                    <Link
                      key={related.slug}
                      href={`/menu/${related.category?.slug || category.slug}/${related.slug}`}
                      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#DD0033] transition-all"
                    >
                      <div className="aspect-square flex items-center justify-center p-4 bg-[#FBF9F6] border-b border-gray-100">
                        <img
                          src={related.image}
                          alt={related.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3 text-center">
                        <h3 className="font-bold text-sm text-[#1A1A1A] group-hover:text-[#DD0033] transition-colors mb-1 leading-tight">
                          {related.name}
                        </h3>
                        <div className="flex justify-center items-center gap-2 text-xs text-gray-500">
                          <span className="font-bold text-[#DD0033]">{formatPrice(related.price)}</span>
                          <span>•</span>
                          <span>{related.nutrition.calories} cal</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <div className="w-full flex flex-col gap-6">
            {/* Order CTA */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm sticky top-4">
              <h3 className="font-display font-bold text-lg mb-1 text-[#1A1A1A]">Ready to Order?</h3>
              <p className="text-gray-500 text-sm mb-4">
                Find a Chick-fil-A near you and order the {item.name} today.
              </p>
              <div className="space-y-3">
                <a
                  href="https://www.chick-fil-a.com/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#DD0033] hover:bg-[#B8002A] text-white font-bold py-3 rounded-xl shadow-sm transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Order Online
                </a>
                <Link
                  href={`/menu/${category.slug}`}
                  className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-[#DD0033] hover:text-[#DD0033] text-[#1A1A1A] font-bold py-2.5 rounded-xl transition-colors text-sm"
                >
                  View All {category.name}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="mt-5 pt-5 border-t border-gray-100 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Price Range</span>
                  <span className="font-bold text-[#1A1A1A]">{formatPrice(item.price)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Calories</span>
                  <span className="font-bold text-[#1A1A1A]">{item.nutrition.calories} cal</span>
                </div>
                {item.nutrition.protein !== undefined && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Protein</span>
                    <span className="font-bold text-[#1A1A1A]">{item.nutrition.protein}g</span>
                  </div>
                )}
                {item.nutrition.sodium !== undefined && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Sodium</span>
                    <span className="font-bold text-[#1A1A1A]">{item.nutrition.sodium}mg</span>
                  </div>
                )}
                {item.allergens && item.allergens.length > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Allergens</span>
                    <span className="font-bold text-[#1A1A1A] text-right text-xs">{item.allergens.slice(0, 3).join(", ")}{item.allergens.length > 3 ? "..." : ""}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Ad */}
            <AdUnit type="rectangle" />

            {/* Popular from Other Categories */}
            {popularFromOtherCats.length > 0 && (
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-4">
                  Fan Favorites
                </h3>
                <div className="space-y-3">
                  {popularFromOtherCats.map((pop: any) => {
                    const popCat = menuCategories.find((c) =>
                      c.items.some((i) => i.slug === pop.slug)
                    );
                    return (
                      <Link
                        key={pop.slug}
                        href={`/menu/${popCat?.slug || category.slug}/${pop.slug}`}
                        className="flex items-center gap-3 group hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors"
                      >
                        <div className="w-12 h-12 flex-shrink-0 bg-[#FBF9F6] rounded-lg flex items-center justify-center overflow-hidden">
                          <img
                            src={pop.image}
                            alt={pop.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#DD0033] transition-colors leading-tight truncate">
                            {pop.name}
                          </p>
                          <p className="text-xs text-gray-500">{formatPrice(pop.price)} · {pop.nutrition.calories} cal</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                      </Link>
                    );
                  })}
                </div>
                <Link
                  href="/menu"
                  className="mt-4 block text-center text-sm font-bold text-[#DD0033] hover:underline"
                >
                  View Full Menu →
                </Link>
              </div>
            )}

            {/* Quick Links */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-4">
                Useful Links
              </h3>
              <div className="space-y-2">
                {[
                  { href: "/menu", label: "Chick-fil-A Prices" },
                  { href: "/calories", label: "Calories & Nutrition" },
                  { href: "/blog/healthiest-items", label: "Healthiest Menu Items" },
                  { href: "/blog/keto-friendly-options", label: "Keto-Friendly Options" },
                  { href: "/catering", label: "Catering Menu" },
                  { href: "/hours", label: "Restaurant Hours" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#DD0033] transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 flex-shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
