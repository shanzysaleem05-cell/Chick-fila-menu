import type { Metadata } from "next";
import Link from "next/link";
import { Tag, Search, Smartphone, Gift, MapPin } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdUnit";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Chick-fil-A Coupons & Promo Codes (2026)",
  description:
    "Find the latest Chick-fil-A coupons, promo codes, and learn how to get free food using the Chick-fil-A One rewards program.",
  openGraph: {
    title: "Chick-fil-A Coupons & Promo Codes",
    url: "/coupons",
  },
};

const couponFaqs = [
  {
    question: "Does Chick-fil-A accept physical coupons?",
    answer:
      "Some local Chick-fil-A operators may mail out physical coupons (like free sandwich cards) or calendar cards for promotional events. These are generally accepted only at participating locations.",
  },
  {
    question: "How do I use a promo code on the Chick-fil-A App?",
    answer:
      "Open the Chick-fil-A App, go to 'Rewards', and select 'News & Offers'. If a digital promo code or offer is available, it will appear here and can be redeemed directly to your mobile order.",
  },
  {
    question: "Do Chick-fil-A locations accept competitor coupons?",
    answer:
      "No, Chick-fil-A restaurants are franchised, and they do not accept coupons from other fast-food competitors.",
  },
  {
    question: "How do I get free Chick-fil-A?",
    answer:
      "The easiest way to get free food is by downloading the Chick-fil-A App and joining the Chick-fil-A One rewards program. You earn points on every purchase, which can be redeemed for free menu items.",
  },
];

export default function CouponsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: couponFaqs.map((faq) => ({
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
            { label: "Coupons", href: "/coupons" },
          ]}
        />

        <AdUnit type="leaderboard" />

        {/* Page Header */}
        <div className="mt-8 mb-12">
          <h1 className="font-display font-black text-4xl md:text-5xl text-[#1A1A1A] mb-4 flex items-center gap-3">
            <Tag className="w-10 h-10 text-[#DD0033]" />
            Coupons & Promo Codes
          </h1>
          <p className="text-[#4a4a4a] text-lg max-w-3xl">
            Looking for ways to save on your favorite chicken sandwich? Find the
            best deals, digital offers, and learn how to earn free food with
            Chick-fil-A One.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content Area */}
          <div className="flex-1 space-y-8">
            {/* Active Promo Codes */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-bold text-3xl text-[#1A1A1A]">
                  August 2026 Promo Codes
                </h2>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Verified Active
                </span>
              </div>

              <div className="space-y-4">
                {/* Coupon 1 */}
                <div className="bg-white border border-[#EAE3D5] rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DD0033]"></div>
                  <div className="pl-2">
                    <h3 className="font-bold text-lg text-[#1A1A1A] mb-1">
                      50% off total order
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Special Chick-fil-A coupon code for 50% off your entire
                      order.
                    </p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-400 font-medium">
                      <span className="flex items-center gap-1">
                        <span className="text-emerald-500">✓</span> 100% Success
                      </span>
                      <span>Used 59 times today</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <div className="border-2 border-dashed border-[#DD0033] bg-red-50 text-[#DD0033] font-mono font-bold px-4 py-2 rounded-lg text-center cursor-pointer hover:bg-red-100 transition-colors w-full md:w-auto">
                      SAVE50
                    </div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                      Ends Soon
                    </span>
                  </div>
                </div>

                {/* Coupon 2 */}
                <div className="bg-white border border-[#EAE3D5] rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DD0033]"></div>
                  <div className="pl-2">
                    <h3 className="font-bold text-lg text-[#1A1A1A] mb-1">
                      $5 Off Chick-Fil-a Orders
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Limited offer coupon code for $5 off your next purchase.
                    </p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-400 font-medium">
                      <span className="flex items-center gap-1">
                        <span className="text-emerald-500">✓</span> 100% Success
                      </span>
                      <span>Used 15 times today</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <div className="border-2 border-dashed border-[#DD0033] bg-red-50 text-[#DD0033] font-mono font-bold px-4 py-2 rounded-lg text-center cursor-pointer hover:bg-red-100 transition-colors w-full md:w-auto">
                      5OFFCFA
                    </div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                      Ends Soon
                    </span>
                  </div>
                </div>

                {/* Coupon 3 */}
                <div className="bg-white border border-[#EAE3D5] rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DD0033]"></div>
                  <div className="pl-2">
                    <h3 className="font-bold text-lg text-[#1A1A1A] mb-1">
                      30% Off at Chick-Fil-a
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Promotion code for 30% off your purchase sitewide.
                    </p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-400 font-medium">
                      <span className="flex items-center gap-1">
                        <span className="text-emerald-500">✓</span> 100% Success
                      </span>
                      <span>Used 62 times today</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <div className="border-2 border-dashed border-[#DD0033] bg-red-50 text-[#DD0033] font-mono font-bold px-4 py-2 rounded-lg text-center cursor-pointer hover:bg-red-100 transition-colors w-full md:w-auto">
                      CFA30
                    </div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                      Ends Soon
                    </span>
                  </div>
                </div>

                {/* Coupon 4 */}
                <div className="bg-white border border-[#EAE3D5] rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DD0033]"></div>
                  <div className="pl-2">
                    <h3 className="font-bold text-lg text-[#1A1A1A] mb-1">
                      20% Off Your Purchase
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Special deal coupon code for 20% off at Chick-Fil-a.
                    </p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-400 font-medium">
                      <span className="flex items-center gap-1">
                        <span className="text-emerald-500">✓</span> 100% Success
                      </span>
                      <span>Used 58 times today</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <div className="border-2 border-dashed border-[#DD0033] bg-red-50 text-[#DD0033] font-mono font-bold px-4 py-2 rounded-lg text-center cursor-pointer hover:bg-red-100 transition-colors w-full md:w-auto">
                      CFA20
                    </div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                      Ends Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="font-display font-bold text-3xl text-[#1A1A1A] pt-4">
              Best Ways to Save in 2026
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Method 1 */}
              <div className="bg-white border border-[#EAE3D5] rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-[#DD0031]" />
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-xl mb-2">
                  Chick-fil-A One App
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Earn points on every purchase and redeem them for free food.
                  Plus, get a special birthday reward every year!
                </p>
                <a
                  href="https://www.chick-fil-a.com/one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DD0031] font-semibold text-sm hover:underline"
                >
                  Download the app &rarr;
                </a>
              </div>

              {/* Method 2 */}
              <div className="bg-white border border-[#EAE3D5] rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#DD0031]" />
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-xl mb-2">
                  Local Operator Offers
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Many local restaurants send free food rewards directly to your
                  app if you have your location services turned on.
                </p>
                <a
                  href="https://www.chick-fil-a.com/locations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DD0031] font-semibold text-sm hover:underline"
                >
                  Find your local restaurant &rarr;
                </a>
              </div>

              {/* Method 3 */}
              <div className="bg-white border border-[#EAE3D5] rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-[#DD0031]" />
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-xl mb-2">
                  Receipt Surveys
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Check your physical receipt! Sometimes, completing a quick
                  customer experience survey will grant you a free original
                  chicken sandwich.
                </p>
                <span className="text-gray-400 text-sm italic">
                  Keep an eye on your receipt.
                </span>
              </div>
            </div>

            <AdUnit type="responsive" />

            <div className="mt-12">
              <FAQAccordion items={couponFaqs} title="Coupon FAQs" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[320px] xl:w-[360px] flex-shrink-0 space-y-6">
            <div className="bg-white border border-[#EAE3D5] rounded-2xl p-6 sticky top-24 shadow-sm">
              <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-4">
                Trending Deals
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-xs font-bold text-[#DD0031] uppercase tracking-wider mb-1">
                    Ongoing
                  </div>
                  <h4 className="font-semibold text-[#1A1A1A] text-sm mb-1">
                    Free Birthday Reward
                  </h4>
                  <p className="text-xs text-gray-500">
                    Join Chick-fil-A One and add your birthday to receive a free
                    reward every year.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-xs font-bold text-[#DD0031] uppercase tracking-wider mb-1">
                    In-Store Only
                  </div>
                  <h4 className="font-semibold text-[#1A1A1A] text-sm mb-1">
                    Receipt Survey Sandwich
                  </h4>
                  <p className="text-xs text-gray-500">
                    Get a free sandwich when you complete a customer survey
                    found at the bottom of select receipts.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#EAE3D5]">
                <AdUnit type="rectangle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
