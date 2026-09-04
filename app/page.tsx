import type { Metadata } from "next";
import Link from "next/link";
import { Utensils, Tag, MapPin, Clock, Search, Check } from "lucide-react";
import { menuCategories } from "@/lib/menu-data";
import MenuTable from "@/components/MenuTable";
import MenuCard from "@/components/MenuCard";
import AdUnit from "@/components/AdUnit";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Chick-fil-A Menu 2026: Prices, Calories & Full Item List",
  description: "Browse the full Chick-fil-A menu with 2026 prices, calories & protein for every item. ✓ Breakfast ✓ Sandwiches ✓ Salads ✓ Sides. Updated weekly — no guesswork.",
  keywords: "chick-fil-a menu, chick fil a prices, chick-fil-a calories, chick fil a nutrition, cfa menu 2026, chick fil a breakfast menu, chick-fil-a menu with prices",
  alternates: {
    canonical: "https://chick-fila-menus.com/",
  },
  openGraph: {
    title: "Chick-fil-A Menu Prices & Calories (2026)",
    description: "Complete Chick-fil-A menu breakdown — prices, calories, protein for every item including breakfast and entrées.",
    type: "website",
    url: "https://chick-fila-menus.com/",
    images: [
      {
        url: "/Spicy-Deluxe-Sandwich.webp",
        width: 1200,
        height: 630,
        alt: "Chick-fil-A Menu Guide 2026",
      },
    ],
  },
};

export const revalidate = 86400;

const homeFaqs = [
  {
    question: "What is the cheapest menu item at Chick-fil-A?",
    answer:
      "The cheapest menu item at Chick-fil-A is typically a side like the Hash Browns ($1.85) or a Buttered Biscuit ($2.15) for breakfast. Prices can vary slightly by location.",
  },
  {
    question: "What time does Chick-fil-A stop serving breakfast?",
    answer:
      "Chick-fil-A stops serving breakfast at exactly 10:30 AM every Monday through Saturday. The menu immediately switches to lunch items after this cutoff.",
  },
  {
    question: "Does Chick-fil-A have any grilled or low-calorie options?",
    answer:
      "Yes, Chick-fil-A offers several healthy choices. The Grilled Chicken Sandwich, 8-count Grilled Nuggets (only 130 calories), and the Market Salad are popular low-calorie items.",
  },
  {
    question: "What is the most popular Chick-fil-A sandwich?",
    answer:
      "The classic Chick-fil-A Chicken Sandwich is their signature and most popular menu item, featuring a hand-breaded chicken breast on a toasted bun with dill pickle chips.",
  },
  {
    question: "How much is the 30-count Chick-fil-A nuggets?",
    answer:
      "The 30-count Chick-fil-A nuggets platter typically costs around $21.50 depending on the location, making it a great value choice for feeding a group.",
  },
];

export default function HomePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://chick-fila-menus.com/#organization",
        name: "CFA Menu Guide",
        url: "https://chick-fila-menus.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://chick-fila-menus.com/icon.png",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://chick-fila-menus.com/#website",
        url: "https://chick-fila-menus.com/",
        name: "CFA Menu Guide",
        publisher: { "@id": "https://chick-fila-menus.com/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://chick-fila-menus.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Menu",
        "@id": "https://chick-fila-menus.com/#menu",
        name: "Chick-fil-A Menu",
        hasMenuSection: menuCategories.map((cat) => ({
          "@type": "MenuSection",
          name: cat.name,
          hasMenuItem: cat.items.map((item) => ({
            "@type": "MenuItem",
            name: item.name,
            description:
              item.description || `Delicious ${item.name} from Chick-fil-A.`,
            offers: {
              "@type": "Offer",
              price: item.price,
              priceCurrency: "USD",
            },
            nutrition: {
              "@type": "NutritionInformation",
              calories: `${item.nutrition?.calories || 0} calories`,
            },
          })),
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: homeFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-[#FCFAF5] min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* Hero Section */}
      <div className="bg-white border-b border-[#EAE3D5]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              <p className="text-[#DD0031] font-bold text-[0.9rem] tracking-wide mb-3 uppercase">
                Return of the fan faves
              </p>
              <h1 className="font-display font-black text-4xl md:text-5xl mb-8 tracking-tight text-[#DD0031] leading-[1.1] capitalize">
                Chick-fil-A menu <br />
                and prices 2026
              </h1>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/menu"
                  className="flex flex-col items-center justify-center gap-2 bg-white border border-[#f0f0f0] rounded-2xl w-24 h-24 shadow-sm hover:shadow-md hover:border-[#DD0031] transition-all group"
                >
                  <Utensils
                    className="w-7 h-7 text-[#DD0031] group-hover:-translate-y-1 transition-transform"
                    strokeWidth={1.5}
                  />
                  <span className="text-[#DD0031] font-bold text-[0.75rem] text-center leading-tight">
                    View
                    <br />
                    Full Menu
                  </span>
                </Link>
                <Link
                  href="/coupons"
                  className="flex flex-col items-center justify-center gap-2 bg-white border border-[#f0f0f0] rounded-2xl w-24 h-24 shadow-sm hover:shadow-md hover:border-[#DD0031] transition-all group"
                >
                  <Tag
                    className="w-7 h-7 text-[#DD0031] group-hover:-translate-y-1 transition-transform"
                    strokeWidth={1.5}
                  />
                  <span className="text-[#DD0031] font-bold text-[0.75rem] text-center leading-tight">
                    View
                    <br />
                    Coupons
                  </span>
                </Link>
                <Link
                  href="/hours"
                  className="flex flex-col items-center justify-center gap-2 bg-white border border-[#f0f0f0] rounded-2xl w-24 h-24 shadow-sm hover:shadow-md hover:border-[#DD0031] transition-all group"
                >
                  <Clock
                    className="w-7 h-7 text-[#DD0031] group-hover:-translate-y-1 transition-transform"
                    strokeWidth={1.5}
                  />
                  <span className="text-[#DD0031] font-bold text-[0.75rem] text-center leading-tight">
                    View
                    <br />
                    Hours
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Content - Single Image */}
            <div className="hidden md:flex flex-1 w-full max-w-lg lg:max-w-[550px] items-center justify-center mt-10 lg:mt-0">
              <img
                src="/Spicy-Deluxe-Sandwich.webp"
                alt="Chick-fil-A Meal"
                className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-4">
        {/* Top Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white border border-[#EAE3D5] rounded-xl overflow-hidden mb-8 shadow-sm">
          <div className="flex items-center gap-3 p-4 border-b sm:border-b-0 sm:border-r border-[#EAE3D5]">
            <Utensils className="w-5 h-5 text-[#DD0031]" />
            <span className="font-bold text-[#1A1A1A] text-sm">
              85+ menu items
            </span>
          </div>
          <div className="flex items-center gap-3 p-4 border-b lg:border-b-0 lg:border-r border-[#EAE3D5]">
            <Search className="w-5 h-5 text-[#DD0031]" />
            <span className="font-bold text-[#1A1A1A] text-sm">
              8 categories
            </span>
          </div>
          <div className="flex items-center gap-3 p-4 border-b sm:border-b-0 sm:border-r border-[#EAE3D5]">
            <Clock className="w-5 h-5 text-[#DD0031]" />
            <span className="font-bold text-[#1A1A1A] text-sm">
              Breakfast is morning only
            </span>
          </div>
          <div className="flex items-center gap-3 p-4">
            <MapPin className="w-5 h-5 text-[#DD0031]" />
            <span className="font-bold text-[#1A1A1A] text-sm">
              Prices vary by location
            </span>
          </div>
        </div>

        {/* Info Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="flex-1 space-y-5 text-gray-700 leading-relaxed">
            <p>
              Looking for <strong>Chick-fil-A menu prices 2026</strong>?
              Chick-fil-A's cheapest meal is the Buttery Biscuit at $2.15, while
              premium items like the Cobb Salad can cost up to $10.00+.
            </p>
            <p>
              This independent, fan-run menu guide gives you the full breakdown
              of prices, calories, and macros for every item. We carefully track
              the latest updates so you don't have to guess before you order.
            </p>
            <p className="text-sm text-gray-500">
              Since Chick-fil-A does not publish a single national price list,
              keep in mind that local franchise costs can vary slightly.
              Chick-fil-A explains how to find the exact local price in its{" "}
              <a
                href="https://www.chick-fil-a.com/customer-support"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DD0031] font-bold hover:underline"
              >
                official pricing help
              </a>
              .
            </p>
          </div>

          <div className="w-full lg:w-[400px] bg-white border border-[#EAE3D5] rounded-2xl p-6 shadow-sm">
            <h3 className="font-display font-black text-2xl text-[#1A1A1A] mb-5">
              Before you order
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#DD0031] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">
                  Choose a restaurant before comparing prices.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#DD0031] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">
                  Delivery menus can cost more than pickup.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#DD0031] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">
                  Breakfast availability ends during the morning.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#DD0031] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">
                  Seasonal items can sell out early.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Below Hero Ad */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <AdUnit type="leaderboard" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-24">
          {menuCategories.map((category, index) => {
            const itemsWithCat = category.items.map((item) => ({
              ...item,
              category,
            }));

            return (
              <div key={category.slug}>
                <div id={category.slug} className="scroll-mt-28">
                  {/* Category Header */}
                  <div className="text-center mb-12 flex flex-col items-center">
                    <div className="flex items-center justify-center gap-4 mb-3">
                      <div className="w-8 h-[1px] bg-[#C5A059]"></div>
                      <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest">
                        {category.name}
                      </span>
                      <div className="w-8 h-[1px] bg-[#C5A059]"></div>
                    </div>
                    <h2 className="font-display font-black text-[#1A1A1A] text-4xl mb-4">
                      {category.name}
                    </h2>

                    {/* AIO / Quick Answer Paragraph */}
                    <p className="text-gray-700 font-medium text-sm max-w-2xl mx-auto mb-3 bg-white p-3 border-l-4 border-[#DD0031] rounded-r-lg shadow-sm">
                      <strong>Quick Answer:</strong>{" "}
                      {category.name === "Breakfast"
                        ? "Chick-fil-A's breakfast is served from 6:30 AM to 10:30 AM. The cheapest breakfast item is the Hash Browns at $1.85, and the highest calorie item is the Hash Brown Scramble Burrito."
                        : category.name === "Entrées"
                          ? "Chick-fil-A's main entrées feature the classic Chicken Sandwich ($5.59) and nuggets. The cheapest entrée option is the 5-count nuggets."
                          : category.name === "Salads"
                            ? "Chick-fil-A offers three main salads made fresh daily. The Cobb Salad is the most popular, while the Market Salad is the healthiest option at 550 calories."
                            : category.name === "Sides"
                              ? "Popular Chick-fil-A sides include Waffle Potato Fries and Mac & Cheese. The Kale Crunch Side is the healthiest choice with only 170 calories."
                              : category.name === "Treats"
                                ? "Chick-fil-A treats include hand-spun milkshakes, Icedream cones, and cookies. The Icedream cone is the lowest-calorie treat at 180 calories."
                                : category.name === "Beverages"
                                  ? "Beverage options include Sunjoy, freshly brewed iced tea, and squeezed lemonade. A small iced tea is the most affordable drink at $1.99."
                                  : category.name === "Coffee"
                                    ? "Chick-fil-A serves specialty grade coffee, including cold brew and iced coffee. The standard hot coffee has 0 calories and costs around $2.19."
                                    : "Chick-fil-A offers a variety of signature sauces for free with your meal. The original Chick-fil-A Sauce and Polynesian Sauce are the top fan favorites."}
                    </p>

                    {category.description && (
                      <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
                        {category.description}
                      </p>
                    )}

                    <Link
                      href={`/menu/${category.slug}`}
                      className="text-[#DD0031] font-bold hover:underline inline-flex items-center gap-1 mt-3"
                    >
                      Explore the full {category.name} Menu <span>&rarr;</span>
                    </Link>
                  </div>

                  {/* Item Cards Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {category.items.map((item) => (
                      <MenuCard
                        key={item.slug}
                        item={item}
                        categorySlug={category.slug}
                      />
                    ))}
                  </div>

                  {/* Category Data Table */}
                  <div className="bg-white rounded-2xl shadow-sm border border-[#EAE3D5] overflow-hidden">
                    <div className="p-5 bg-[#FCFAF5] border-b border-[#EAE3D5]">
                      <h3 className="font-display font-bold text-xl text-[#1A1A1A]">
                        {category.name} Nutrition & Prices
                      </h3>
                    </div>
                    <div className="p-1">
                      <MenuTable items={itemsWithCat} headerColor="dark" />
                    </div>
                  </div>
                </div>

                {/* In-Feed Ad after the second category */}
                {index === 1 && <AdUnit type="responsive" />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Popular Searches & Quick Links (SEO Interlinking) */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-[#EAE3D5]">
        <h2 className="font-display font-black text-2xl text-[#1A1A1A] mb-6">Popular Chick-fil-A Searches</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/menu" className="p-4 bg-white border border-[#EAE3D5] rounded-xl hover:border-[#DD0031] hover:shadow-sm transition-all group">
            <span className="block font-bold text-[#1A1A1A] group-hover:text-[#DD0031]">Chick fil a menu</span>
            <span className="text-xs text-gray-500">View all items</span>
          </Link>
          <Link href="/hours" className="p-4 bg-white border border-[#EAE3D5] rounded-xl hover:border-[#DD0031] hover:shadow-sm transition-all group">
            <span className="block font-bold text-[#1A1A1A] group-hover:text-[#DD0031]">Chick fil a hours</span>
            <span className="text-xs text-gray-500">Open & close times</span>
          </Link>
          <Link href="/menu" className="p-4 bg-white border border-[#EAE3D5] rounded-xl hover:border-[#DD0031] hover:shadow-sm transition-all group">
            <span className="block font-bold text-[#1A1A1A] group-hover:text-[#DD0031]">CFA menu</span>
            <span className="text-xs text-gray-500">Quick browse</span>
          </Link>
          <Link href="/prices" className="p-4 bg-white border border-[#EAE3D5] rounded-xl hover:border-[#DD0031] hover:shadow-sm transition-all group">
            <span className="block font-bold text-[#1A1A1A] group-hover:text-[#DD0031]">Chick-fil-a menu prices</span>
            <span className="text-xs text-gray-500">2026 price list</span>
          </Link>
          <Link href="/menu/breakfast" className="p-4 bg-white border border-[#EAE3D5] rounded-xl hover:border-[#DD0031] hover:shadow-sm transition-all group">
            <span className="block font-bold text-[#1A1A1A] group-hover:text-[#DD0031]">Breakfast menu</span>
            <span className="text-xs text-gray-500">Morning favorites</span>
          </Link>
          <Link href="/calories" className="p-4 bg-white border border-[#EAE3D5] rounded-xl hover:border-[#DD0031] hover:shadow-sm transition-all group">
            <span className="block font-bold text-[#1A1A1A] group-hover:text-[#DD0031]">Chick fil a calories</span>
            <span className="text-xs text-gray-500">Nutrition facts</span>
          </Link>
          <Link href="/menu/entrees" className="p-4 bg-white border border-[#EAE3D5] rounded-xl hover:border-[#DD0031] hover:shadow-sm transition-all group">
            <span className="block font-bold text-[#1A1A1A] group-hover:text-[#DD0031]">Chicken sandwiches</span>
            <span className="text-xs text-gray-500">Classic & spicy</span>
          </Link>
          <Link href="/catering" className="p-4 bg-white border border-[#EAE3D5] rounded-xl hover:border-[#DD0031] hover:shadow-sm transition-all group">
            <span className="block font-bold text-[#1A1A1A] group-hover:text-[#DD0031]">Catering menu</span>
            <span className="text-xs text-gray-500">Trays & packages</span>
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FAQAccordion items={homeFaqs} />
      </div>
    </div>
  );
}
