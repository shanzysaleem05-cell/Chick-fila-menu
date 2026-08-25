import type { Metadata } from "next";
import Link from "next/link";
import MenuTable from "@/components/MenuTable";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import { getAllItems, menuCategories } from "@/lib/menu-data";
import { getLastUpdated } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Chick-fil-A Menu with Prices (2026) — Every Item Listed",
  description:
    "Complete Chick-fil-A prices list for 2026 — every menu item with its price. Breakfast, chicken sandwiches, nuggets, salads, sides, drinks, and treats. US national average estimates.",
  openGraph: {
    title: "Chick-fil-A Menu Prices (2026) — All Items Listed",
    url: "/prices",
  },
};

export const revalidate = 86400;

const pricesFaqs = [
  {
    question: "How much does a Chick-fil-A Chicken Sandwich cost?",
    answer: "The Chick-fil-A Chicken Sandwich costs approximately $4.95 (US national average estimate). Prices vary by location — some areas may charge slightly more or less.",
  },
  {
    question: "What is the cheapest item on the Chick-fil-A menu?",
    answer: "The cheapest items at Chick-fil-A are the dipping sauces at $0.35 each. For a standalone food item, the Icedream Cone at $1.79 is one of the lowest-priced items.",
  },
  {
    question: "Does Chick-fil-A publish its prices?",
    answer: "Chick-fil-A does not list prices on its official website or app. Prices vary by location and franchise owner. The prices on this site are US national average estimates compiled from delivery platforms and crowdsourced data.",
  },
  {
    question: "How much is a Chick-fil-A combo meal?",
    answer: "A typical Chick-fil-A combo meal (sandwich + medium waffle fries + medium drink) costs approximately $9–$12 depending on which sandwich you choose and your location.",
  },
  {
    question: "Are Chick-fil-A prices higher than other fast food?",
    answer: "Chick-fil-A is generally priced slightly higher than McDonald's or Burger King but is comparable to Wendy's or Popeyes. The quality of ingredients and customer service is widely considered to justify the pricing.",
  },
];

export default function PricesPage() {
  const allItems = getAllItems();
  const lastUpdated = getLastUpdated();

  // Price ranges per category
  const categoryPrices = menuCategories.map((cat) => ({
    ...cat,
    minPrice: Math.min(...cat.items.map((i) => parseFloat(i.price))),
    maxPrice: Math.max(...cat.items.map((i) => parseFloat(i.price))),
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Prices", href: "/prices" }]} />

      <div className="mb-10">
        <h1 className="section-title">Chick-fil-A Menu with Prices (2026)</h1>
        <p className="section-subtitle">
          All Chick-fil-A prices in one place — sorted, searchable, and updated for 2026.
          Find the price of every item from breakfast biscuits to milkshakes.
        </p>
        <p className="text-xs text-brand-gray-text mt-3">
          Last updated: {lastUpdated} · US national average estimates · Prices vary by location
        </p>
      </div>

      {/* Price Range by Category */}
      <div className="mb-10">
        <h2 className="font-display font-bold text-2xl mb-5">Price Ranges by Category</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoryPrices.map((cat) => (
            <Link
              key={cat.slug}
              href={`/menu/${cat.slug}`}
              className="group card p-4 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-2">

                <span className="font-semibold text-sm text-brand-dark group-hover:text-brand-red transition-colors">
                  {cat.name}
                </span>
              </div>
              <p className="text-brand-gray-text text-xs mb-2">{cat.items.length} items</p>
              <p className="font-bold text-brand-red">
                ${cat.minPrice.toFixed(2)} – ${cat.maxPrice.toFixed(2)}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Full Price Table */}
      <h2 className="font-display font-bold text-2xl mb-5">Complete Chick-fil-A Price List</h2>
      <MenuTable items={allItems} showCategory showSearch showFilter />

      {/* FAQ */}
      <div className="mt-16">
        <FAQAccordion
          items={pricesFaqs}
          title="Chick-fil-A Prices — Frequently Asked Questions"
        />
      </div>

      {/* Disclaimer */}
      <div className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-2xl">
        <p className="text-sm text-amber-800">
          <strong>⚠️ Price Disclaimer:</strong> All prices on this page are US national average estimates
          based on delivery platform data (DoorDash, Uber Eats, Grubhub) and crowdsourced information.
          Actual Chick-fil-A prices vary significantly by location, franchise owner, and may change
          at any time without notice. Chick-fil-A does not publish official prices on its website.
          Always verify current prices at your local restaurant or the Chick-fil-A app.{" "}
          <Link href="/disclaimer" className="underline">Read our full disclaimer</Link>.
        </p>
      </div>
    </div>
  );
}
