import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BookOpen, Users, Target, Shield, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — CFA Menu Guide",
  description:
    "CFA Menu Guide is an independent Chick-fil-A fan resource built by food enthusiasts. We provide complete menu prices, nutrition data, and ordering guides — no affiliation with Chick-fil-A, Inc.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />

      {/* Hero */}
      <div className="mt-8 bg-white rounded-2xl shadow-sm border border-[#EAE3D5] overflow-hidden p-6 md:p-10 mb-6">
        <span className="inline-block bg-[#DD0033]/10 text-[#DD0033] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
          Independent Fan Site
        </span>
        <h1 className="font-display font-black text-3xl md:text-4xl text-[#1A1A1A] mb-4">
          About CFA Menu Guide
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          CFA Menu Guide is a free, independent resource built by Chick-fil-A fans, for
          Chick-fil-A fans. We are <strong>not affiliated with, endorsed by, or sponsored by
          Chick-fil-A, Inc.</strong> in any way. Our mission is simple: give every customer the
          information they need to make a smart, informed order — before they even walk in the door.
        </p>
      </div>

      {/* Why We Built This */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#EAE3D5] overflow-hidden p-6 md:p-10 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#DD0033]/10 p-2 rounded-lg">
            <Target className="w-5 h-5 text-[#DD0033]" />
          </div>
          <h2 className="text-xl font-bold text-[#1A1A1A]">Why We Built This Site</h2>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Chick-fil-A is one of America&apos;s most beloved fast food chains — but their official
          website does not display menu prices. That means millions of customers have to guess what
          they&apos;ll pay before they order, or rely on third-party delivery apps (which charge
          inflated prices) to see the numbers.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          We built CFA Menu Guide to solve that problem. Our team regularly cross-references prices
          from multiple sources — including DoorDash, Uber Eats, Grubhub listings, and
          crowdsourced data from real customers — to give you the most accurate US national
          average estimates available.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Beyond prices, we also provide complete, official nutrition data (sourced directly from
          Chick-fil-A&apos;s published nutrition PDFs), allergen information, and in-depth ordering
          guides so you can eat smarter at Chick-fil-A every visit.
        </p>
      </div>

      {/* Author / Team Bio */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#EAE3D5] overflow-hidden p-6 md:p-10 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#DD0033]/10 p-2 rounded-lg">
            <Users className="w-5 h-5 text-[#DD0033]" />
          </div>
          <h2 className="text-xl font-bold text-[#1A1A1A]">Our Team &amp; Expertise</h2>
        </div>

        {/* Author Card */}
        <div className="flex items-start gap-5 p-5 bg-[#FAF7F2] rounded-xl border border-[#EAE3D5]">
          <div className="w-16 h-16 rounded-full bg-[#DD0033] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-display font-black text-xl">CFA</span>
          </div>
          <div>
            <h3 className="font-bold text-[#1A1A1A] text-lg">The CFA Menu Guide Editorial Team</h3>
            <p className="text-[#DD0033] text-sm font-semibold mb-2">Food Researchers &amp; Nutrition Enthusiasts</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our editorial team consists of food writers, nutrition researchers, and dedicated
              Chick-fil-A regulars who visit locations across the United States. We have been
              tracking Chick-fil-A menu prices and nutrition data since 2023, cross-checking
              information from multiple verified sources including official nutrition publications,
              third-party delivery platforms, and direct in-store price verification. All content
              is reviewed for accuracy before publication and updated whenever menu changes are
              announced.
            </p>
          </div>
        </div>

        <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
          <p className="text-emerald-800 text-sm font-medium">
            ✅ <strong>Our Commitment to Accuracy:</strong> Nutrition data on this site comes
            directly from Chick-fil-A&apos;s official nutrition information page. Price estimates
            are US national averages and may vary by location — we always recommend verifying at
            your local restaurant.
          </p>
        </div>
      </div>

      {/* What We Provide */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#EAE3D5] overflow-hidden p-6 md:p-10 mb-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-[#DD0033]/10 p-2 rounded-lg">
            <BookOpen className="w-5 h-5 text-[#DD0033]" />
          </div>
          <h2 className="text-xl font-bold text-[#1A1A1A]">What We Cover</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Full Menu with Prices",
              desc: "Every Chick-fil-A menu item with US national average price estimates, updated regularly.",
            },
            {
              title: "Complete Nutrition Facts",
              desc: "Calories, protein, carbs, fat, sodium, and fiber for all 85+ menu items, sourced from official data.",
            },
            {
              title: "Allergen Information",
              desc: "Detailed allergen tables for every item covering gluten, dairy, peanuts, soy, shellfish, and more.",
            },
            {
              title: "Ordering Guides & Tips",
              desc: "Expert guides on eating healthy, going keto, saving money, and navigating the secret menu.",
            },
            {
              title: "Catering Menu",
              desc: "Full Chick-fil-A catering menu with tray sizes, pricing tiers, and serving estimates.",
            },
            {
              title: "Hours & Holiday Info",
              desc: "Operating hours by day, breakfast cutoff times, and holiday closing schedules.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 p-4 bg-[#FAF7F2] rounded-xl border border-[#EAE3D5]">
              <div className="w-2 h-2 rounded-full bg-[#DD0033] mt-2 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data Sources */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#EAE3D5] overflow-hidden p-6 md:p-10 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#DD0033]/10 p-2 rounded-lg">
            <Shield className="w-5 h-5 text-[#DD0033]" />
          </div>
          <h2 className="text-xl font-bold text-[#1A1A1A]">Our Data Sources</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-[#DD0033] font-bold mt-0.5">→</span>
            <p className="text-gray-600 text-sm">
              <strong className="text-[#1A1A1A]">Nutrition &amp; Allergens:</strong> Official
              Chick-fil-A nutrition information (chick-fil-a.com/nutrition-allergens) — the same
              data published by Chick-fil-A, Inc.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#DD0033] font-bold mt-0.5">→</span>
            <p className="text-gray-600 text-sm">
              <strong className="text-[#1A1A1A]">Prices:</strong> US national average estimates
              aggregated from DoorDash, Uber Eats, and Grubhub restaurant listings, plus
              crowdsourced in-store price data. Prices are estimates only — actual prices vary by
              location.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#DD0033] font-bold mt-0.5">→</span>
            <p className="text-gray-600 text-sm">
              <strong className="text-[#1A1A1A]">Menu Items:</strong> Cross-referenced with the
              official Chick-fil-A app and website to ensure all items are current and accurately
              categorized.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
        <h2 className="text-lg font-bold text-[#1A1A1A] mb-2">⚠️ Important Disclaimer</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          CFA Menu Guide is a completely independent website. We are NOT affiliated with,
          endorsed by, or connected to Chick-fil-A, Inc. in any capacity. &quot;Chick-fil-A&quot; is a
          registered trademark of CFA Properties, Inc. All trademark rights belong to their
          respective owners. This site provides educational information about the Chick-fil-A
          menu for consumer reference purposes only.{" "}
          <Link href="/disclaimer" className="text-[#DD0033] hover:underline font-medium">
            Read our full disclaimer →
          </Link>
        </p>
      </div>

      {/* Contact CTA */}
      <div className="bg-[#DD0033] rounded-2xl p-6 md:p-8 text-center text-white">
        <Mail className="w-8 h-8 mx-auto mb-3 opacity-90" />
        <h2 className="text-xl font-bold mb-2">Get In Touch</h2>
        <p className="text-white/80 text-sm mb-4">
          Found a price error? Have a question? Want to suggest a new guide topic?
          We&apos;d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-[#DD0033] font-bold px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
