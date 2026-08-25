import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdUnit";
import CateringItemCard from "@/components/CateringItemCard";
import FAQAccordion from "@/components/FAQAccordion";
import { cateringCategories } from "@/lib/catering-data";

export const metadata: Metadata = {
  title: "Chick-fil-A Catering Menu & Prices (2026) | Order Trays & Meals",
  description:
    "Complete Chick-fil-A catering menu with prices for 2026. Order nugget trays, breakfast, packaged meals, and beverages for your next event or meeting.",
};

const cateringFaqs = [
  {
    question: "How far in advance do I need to place a catering order?",
    answer:
      "We recommend placing your catering order at least 24 hours in advance. For very large orders or specific event needs, 48 hours notice is preferred. However, some restaurants may be able to accommodate same-day orders depending on their current volume.",
  },
  {
    question: "Do you offer catering delivery?",
    answer:
      "Yes, many Chick-fil-A locations offer catering delivery! Delivery availability, fees, and minimum order requirements vary by restaurant. Please check with your local operator when placing the order.",
  },
  {
    question: "Are prices the same at all locations?",
    answer:
      "No. Chick-fil-A restaurants are individually owned and operated, so catering prices and availability may vary slightly by location. The prices shown here are national averages to help you plan.",
  },
  {
    question: "What comes with a catering tray?",
    answer:
      "Most hot catering trays come with your choice of 8oz dipping sauces. Plates, napkins, and serving utensils are generally provided upon request. Be sure to ask your local restaurant what is included when you finalize your order.",
  },
];

export default function CateringLandingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cateringFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Catering", href: "/catering" },
          ]}
        />

        <AdUnit type="leaderboard" />

        <div className="mt-8 mb-12">
          <h1 className="font-display font-black text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            Catering Menu
          </h1>
          <p className="text-[#4a4a4a] text-lg max-w-3xl">
            From morning meetings to evening parties, Chick-fil-A Catering has
            you covered with crowd-pleasing trays, packaged meals, and sweet
            treats.
          </p>
        </div>

        <div className="space-y-24">
          {cateringCategories.map((category, index) => (
            <div key={category.slug}>
              <div id={category.slug} className="scroll-mt-28">
                {/* Category Header */}
                <div className="mb-8 pb-4 border-b border-[#EAE3D5]">
                  <div>
                    <h2 className="font-display font-bold text-3xl text-[#1A1A1A]">
                      {category.name}
                    </h2>
                    {category.description && (
                      <p className="text-gray-600 mt-2">
                        {category.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Items Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
                  {category.items.length > 0 ? (
                    <>
                      {category.items.map((item) => (
                        <CateringItemCard
                          key={item.slug}
                          item={item}
                          categorySlug={category.slug}
                        />
                      ))}
                    </>
                  ) : (
                    <div className="col-span-full py-12 text-center bg-gray-50 rounded-2xl border border-gray-100">
                      <p className="text-gray-500 font-medium">
                        More {category.name.toLowerCase()} coming soon!
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Mid-Content Ad after the 3rd category */}
              {index === 2 && <AdUnit type="responsive" />}
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="mt-20">
          <FAQAccordion items={cateringFaqs} title="Catering FAQs" />
        </div>
      </div>
    </>
  );
}
