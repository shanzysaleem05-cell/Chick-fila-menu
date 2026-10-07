import type { Metadata } from "next";
import Link from "next/link";
import { Tag, Search, Smartphone, Gift, MapPin, Scissors, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdUnit";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Chick-fil-A Coupons, Deals & Promo Codes (2026)",
  description:
    "Find the latest Chick-fil-A coupons, promo codes, and learn how to get free food using the Chick-fil-A One rewards program in 2026.",
  openGraph: {
    title: "Chick-fil-A Coupons & Promo Codes",
    url: "/coupons",
  },
};

const couponFaqs = [
  {
    question: "Does Chick-fil-A accept physical coupons?",
    answer:
      "Some local Chick-fil-A operators may mail out physical coupons (like free sandwich cards) or calendar cards for promotional events. These are generally accepted only at participating locations. National promos are mostly digital.",
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
      <div className="bg-[#FAF7F2] min-h-screen pb-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Deals & Coupons", href: "/coupons" },
            ]}
          />

          <div className="mt-8 mb-12">
            <AdUnit type="leaderboard" />
          </div>

          {/* Page Header */}
          <div className="mb-10 md:mb-14">
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-4 md:mb-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
              <span className="bg-[#C8102E] p-2 md:p-3 rounded-2xl shadow-sm w-fit">
                <Tag className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </span>
              Chick-fil-A Deals
            </h1>
            <p className="text-[#594E48] text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed">
              Looking for ways to save on your favorite chicken sandwich? Find the
              best deals, digital offers, and learn how to earn free food with
              Chick-fil-A One in 2026.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content Area */}
            <div className="flex-1 space-y-12">
              
              {/* Active Promo Codes */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <h2 className="font-display font-black text-2xl md:text-3xl text-[#1A1A1A]">
                    Verified Offers
                  </h2>
                  <span className="bg-[#EAE3D5] text-[#2B1B15] text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-full flex items-center w-fit gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Working Today
                  </span>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Get Free Food with Chick-fil-A One",
                      description: "Earn 10 points for every dollar spent. Redeem points for free sandwiches, fries, and treats.",
                      code: "JOIN APP",
                      uses: 4592,
                      expires: "Ongoing",
                    },
                    {
                      title: "Free Birthday Reward",
                      description: "Add your birthday to your Chick-fil-A One account and receive a special free reward every year.",
                      code: "NO CODE REQUIRED",
                      uses: 1126,
                      expires: "Ongoing",
                    },
                    {
                      title: "Receipt Survey Sandwich",
                      description: "Check the bottom of your receipt! Complete a quick online survey to receive a free Original Chicken Sandwich.",
                      code: "CHECK RECEIPT",
                      uses: 843,
                      expires: "Ongoing",
                    },
                    {
                      title: "Catering Trays for Events",
                      description: "Planning a party? Save by ordering large nugget or sandwich trays instead of individual meals.",
                      code: "VIEW CATERING",
                      uses: 532,
                      expires: "Ongoing",
                    }
                  ].map((deal, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white border border-[#EAE3D5] rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-6 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#C8102E]"></div>
                      <div className="pl-4 flex-1">
                        <h3 className="font-display font-bold text-xl md:text-2xl text-[#1A1A1A] mb-2 group-hover:text-[#C8102E] transition-colors">
                          {deal.title}
                        </h3>
                        <p className="text-[#594E48] text-base leading-relaxed mb-4">
                          {deal.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                          <span className="flex items-center gap-1.5 bg-green-50 text-green-700 px-2 py-1 rounded-md">
                            <CheckCircle2 className="w-4 h-4" /> 100% Success
                          </span>
                          <span>Used {deal.uses} times today</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-3 shrink-0 md:min-w-[180px]">
                        <div className="w-full relative border-2 border-dashed border-[#C8102E] bg-[#FAF7F2] text-[#C8102E] font-bold px-6 py-3.5 rounded-xl text-center cursor-pointer hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
                          <Scissors className="w-4 h-4 text-[#8C8279] absolute -left-2.5 -top-2.5 bg-white p-0.5 rounded-full" />
                          {deal.code}
                        </div>
                        <span className="text-[11px] text-[#8C8279] uppercase tracking-widest font-bold">
                          {deal.expires}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Ways to Save */}
              <div className="pt-6">
                <div className="mb-8">
                  <h3 className="italic text-[#C8102E] font-serif text-xl mb-1">
                    Smart Spending
                  </h3>
                  <h2 className="font-display font-black text-2xl md:text-3xl text-[#1A1A1A]">
                    Best Ways to Save in 2026
                  </h2>
                  <div className="w-12 h-1 bg-[#C8102E] my-4 rounded-full"></div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Method 1 */}
                  <div className="bg-white border border-[#EAE3D5] rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-[#FAF7F2] border border-[#EAE3D5] rounded-2xl flex items-center justify-center mb-5 md:mb-6">
                      <Smartphone className="w-7 h-7 text-[#C8102E]" />
                    </div>
                    <h3 className="font-display font-bold text-[#1A1A1A] text-xl mb-3">
                      Chick-fil-A One App
                    </h3>
                    <p className="text-[#594E48] text-[15px] leading-relaxed mb-6">
                      Earn points on every purchase and redeem them for free food.
                      Plus, get a special birthday reward every year!
                    </p>
                    <a
                      href="https://www.chick-fil-a.com/one"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#C8102E] font-bold text-sm tracking-wide hover:underline"
                    >
                      DOWNLOAD THE APP &rarr;
                    </a>
                  </div>

                  {/* Method 2 */}
                  <div className="bg-white border border-[#EAE3D5] rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-[#FAF7F2] border border-[#EAE3D5] rounded-2xl flex items-center justify-center mb-5 md:mb-6">
                      <MapPin className="w-7 h-7 text-[#C8102E]" />
                    </div>
                    <h3 className="font-display font-bold text-[#1A1A1A] text-xl mb-3">
                      Local Operator Offers
                    </h3>
                    <p className="text-[#594E48] text-[15px] leading-relaxed mb-6">
                      Many local restaurants send free food rewards directly to your
                      app if you have your location services turned on.
                    </p>
                    <a
                      href="https://www.chick-fil-a.com/locations"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#C8102E] font-bold text-sm tracking-wide hover:underline"
                    >
                      FIND LOCAL RESTAURANT &rarr;
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <AdUnit type="responsive" />
              </div>

              {/* FAQs using global component */}
              <div className="pt-4">
                <FAQAccordion 
                  items={couponFaqs} 
                  title="Coupons & Offers FAQ"
                  kicker="Helpful Info"
                  description="Everything you need to know about applying coupons and scoring free Chick-fil-A."
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-[320px] xl:w-[350px] flex-shrink-0 space-y-6">
              <div className="bg-white border border-[#EAE3D5] rounded-3xl p-6 sticky top-24 shadow-sm">
                <h3 className="font-display font-black text-2xl text-[#1A1A1A] mb-6">
                  Trending Tricks
                </h3>

                <div className="space-y-4">
                  <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#EAE3D5]">
                    <div className="text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-2">
                      App Hack
                    </div>
                    <h4 className="font-display font-bold text-[#1A1A1A] text-[15px] mb-2 leading-tight">
                      Check "News & Offers" Regularly
                    </h4>
                    <p className="text-sm text-[#594E48] leading-relaxed">
                      Chick-fil-A frequently pushes random freebies (like a free breakfast biscuit) straight to the app. Check it weekly!
                    </p>
                  </div>

                  <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#EAE3D5]">
                    <div className="text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-2">
                      In-Store Only
                    </div>
                    <h4 className="font-display font-bold text-[#1A1A1A] text-[15px] mb-2 leading-tight">
                      Receipt Survey Sandwich
                    </h4>
                    <p className="text-sm text-[#594E48] leading-relaxed">
                      Get a free sandwich when you complete a customer survey
                      found at the bottom of select receipts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
