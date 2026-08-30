import type { Metadata } from "next";
import Link from "next/link";
import MenuTable from "@/components/MenuTable";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import { getAllItems, menuCategories } from "@/lib/menu-data";
import { getLastUpdated } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Chick-fil-A Calories 2026: Full Nutrition for Every Menu Item",
  description:
    "Full Chick-fil-A calorie count for every menu item (2026). Lowest: 0 cal (water). Highest: 1,230 cal. Find healthy options under 300 cal, keto picks and full macro breakdown.",
  alternates: {
    canonical: "https://chick-fila-menus.com/calories",
  },
  openGraph: {
    title: "Chick-fil-A Calories 2026 — Nutrition for Every Item",
    url: "https://chick-fila-menus.com/calories",
  },
};

const caloriesFaqs = [
  {
    question: "What is the lowest calorie item at Chick-fil-A?",
    answer: "The lowest calorie options at Chick-fil-A are: DASANI Bottled Water (0 cal), Unsweetened Tea (0 cal), Hot Coffee (0 cal), Zesty Buffalo Sauce (25 cal), and Fruit Cup (70 cal). For a full meal, the Grilled Nuggets 8ct at 130 calories is the best low-calorie protein option.",
  },
  {
    question: "How many calories are in a Chick-fil-A Chicken Sandwich?",
    answer: "The classic Chick-fil-A Chicken Sandwich has 420 calories, 29g protein, 41g carbs, and 18g fat. The Grilled version has 390 calories. The Spicy version has 450 calories.",
  },
  {
    question: "What is the healthiest item at Chick-fil-A?",
    answer: "The healthiest full-meal options at Chick-fil-A are: (1) Grilled Nuggets 8ct — 130 cal, 25g protein; (2) Egg White Grill — 300 cal, 26g protein; (3) Grilled Chicken Sandwich — 390 cal, 28g protein; (4) Market Salad — 550 cal, 35g protein; (5) Kale Crunch Side — 170 cal.",
  },
  {
    question: "How many calories are in Chick-fil-A Waffle Fries?",
    answer: "Chick-fil-A Waffle Potato Fries calories: Small — 320 cal, Medium — 420 cal, Large — 600 cal.",
  },
  {
    question: "Does Chick-fil-A have low-calorie options?",
    answer: "Yes! Chick-fil-A has several low-calorie options under 300 calories: Grilled Nuggets 8ct (130 cal), Icedream Cup (140 cal), Diet Lemonade (60 cal), Kale Crunch Side (170 cal), 1% Milk (90 cal), Bacon Egg & Cheese Muffin (300 cal), and Egg White Grill (300 cal).",
  },
];

export default function CaloriesPage() {
  const allItems = getAllItems();
  const lastUpdated = getLastUpdated();

  const siteUrl = "https://chick-fila-menus.com";

  const caloriesJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: caloriesFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Calories & Nutrition", item: `${siteUrl}/calories` },
        ],
      },
    ],
  };

  // Sort by calories for insights
  const byCalories = [...allItems].sort((a, b) => a.nutrition.calories - b.nutrition.calories);
  const lowest5 = byCalories.slice(0, 5);
  const highest5 = byCalories.slice(-5).reverse();
  const healthyItems = allItems.filter((i) => i.nutrition.calories < 300);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caloriesJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Calories & Nutrition", href: "/calories" }]} />

      <div className="mb-10">
        <h1 className="section-title">Chick-fil-A Calories &amp; Nutrition (2026)</h1>
        <p className="section-subtitle">
          Complete calorie counts and nutrition info for every Chick-fil-A menu item.
          Find the healthiest options or plan your meal with full macro data.
        </p>
        <p className="text-xs text-brand-gray-text mt-3">
          Last updated: {lastUpdated} · Calories sourced from official Chick-fil-A nutrition data.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center">
          <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wider mb-1">Lowest Calorie</p>
          <p className="font-display font-bold text-3xl text-emerald-700">0</p>
          <p className="text-sm text-emerald-600 mt-1">Water / Unsweetened Tea</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center">
          <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">Avg. Entree</p>
          <p className="font-display font-bold text-3xl text-blue-700">470</p>
          <p className="text-sm text-blue-600 mt-1">Calories per item</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-center">
          <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider mb-1">Under 300 cal</p>
          <p className="font-display font-bold text-3xl text-amber-700">{healthyItems.length}</p>
          <p className="text-sm text-amber-600 mt-1">Low-calorie items</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 text-center">
          <p className="text-xs text-red-600 font-semibold uppercase tracking-wider mb-1">Highest</p>
          <p className="font-display font-bold text-3xl text-red-700">{Math.max(...allItems.map(i => i.nutrition.calories))}</p>
          <p className="text-sm text-red-600 mt-1">Max calories</p>
        </div>
      </div>

      {/* Lowest & Highest */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="font-display font-bold text-xl mb-4 text-emerald-700">
            🥗 Lowest Calorie Options
          </h2>
          <div className="space-y-2">
            {lowest5.map((item) => (
              <Link
                key={`${item.category.slug}-${item.slug}`}
                href={`/menu/${item.category.slug}/${item.slug}`}
                className="flex justify-between items-center p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors"
              >
                <div>
                  <p className="font-medium text-sm text-brand-dark">{item.name}</p>
                  <p className="text-xs text-brand-gray-text">{item.category.name}</p>
                </div>
                <span className="font-bold text-emerald-700">{item.nutrition.calories} cal</span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display font-bold text-xl mb-4 text-red-600">
            🔥 Highest Calorie Items
          </h2>
          <div className="space-y-2">
            {highest5.map((item) => (
              <Link
                key={`${item.category.slug}-${item.slug}`}
                href={`/menu/${item.category.slug}/${item.slug}`}
                className="flex justify-between items-center p-3 rounded-xl bg-red-50 hover:bg-red-100 transition-colors"
              >
                <div>
                  <p className="font-medium text-sm text-brand-dark">{item.name}</p>
                  <p className="text-xs text-brand-gray-text">{item.category.name}</p>
                </div>
                <span className="font-bold text-red-600">{item.nutrition.calories} cal</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Healthy Options Highlight */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-12" id="allergens">
        <h2 className="font-display font-bold text-xl text-emerald-800 mb-2">
          Healthiest Chick-fil-A Options (Under 300 Calories)
        </h2>
        <p className="text-sm text-emerald-700 mb-4">
          {healthyItems.length} menu items under 300 calories. Great for calorie-conscious ordering.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {healthyItems.slice(0, 9).map((item) => (
            <Link
              key={`${item.category.slug}-${item.slug}`}
              href={`/menu/${item.category.slug}/${item.slug}`}
              className="flex justify-between items-center p-3 bg-white rounded-xl hover:border-emerald-300 border border-emerald-100 transition-colors"
            >
              <span className="text-sm font-medium text-brand-dark">{item.name}</span>
              <span className="text-xs font-bold text-emerald-700 ml-2 flex-shrink-0">{item.nutrition.calories} cal</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Full Table */}
      <h2 className="font-display font-bold text-2xl mb-5">Full Chick-fil-A Nutrition Table</h2>
      <MenuTable items={allItems} showCategory showSearch showFilter />

      {/* FAQ */}
      <div className="mt-16">
        <FAQAccordion
          items={caloriesFaqs}
          title="Chick-fil-A Calories — FAQs"
        />
      </div>
    </div>
  );
}
