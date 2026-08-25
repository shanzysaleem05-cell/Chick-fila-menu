import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Disclaimer — CFA Menu Guide",
  description: "Important disclaimer about Chick-fil-A menu prices and nutrition data on CFA Menu Guide. Prices are estimates and not official.",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Disclaimer", href: "/disclaimer" }]} />
      <div className="max-w-none mt-6 text-gray-700 space-y-6 leading-relaxed">
        <h1 className="text-3xl font-bold text-[#1A1A1A]">Disclaimer</h1>
        <p><strong>Last Updated:</strong> August 2026</p>

        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-6 my-6">
          <p className="font-bold text-amber-900 text-lg mb-2">⚠️ Important Notice</p>
          <p className="text-amber-800">
            CFA Menu Guide is an <strong>independent fan website</strong> and is <strong>NOT</strong> affiliated
            with, endorsed by, or sponsored by Chick-fil-A, Inc. We are not an official source
            of Chick-fil-A information.
          </p>
        </div>

        <h2>Price Disclaimer</h2>
        <p>
          All prices displayed on this website are <strong>US national average estimates</strong>.
          They are derived from delivery platform data (DoorDash, Uber Eats, Grubhub),
          crowdsourced user reports, and periodic price checks. They are <strong>NOT official prices</strong>.
        </p>
        <p>Actual Chick-fil-A prices vary significantly by:</p>
        <ul>
          <li>Geographic location (city, state, region)</li>
          <li>Individual franchise owner decisions</li>
          <li>Economic conditions and cost of living in your area</li>
          <li>Time — prices change and may not reflect current pricing</li>
        </ul>
        <p>
          <strong>Always verify current prices</strong> at your local Chick-fil-A restaurant,
          the official Chick-fil-A app, or by calling your location directly.
          Chick-fil-A does not publish prices on its official website.
        </p>

        <h2>Nutrition & Calorie Disclaimer</h2>
        <p>
          Calorie and nutrition data on this website is sourced from the{" "}
          <strong>official Chick-fil-A nutrition page</strong> (chick-fil-a.com/nutrition-allergens).
          While we strive for accuracy, nutrition values may change when menu items are updated.
          Always check the official Chick-fil-A nutrition page or consult with restaurant staff
          for the most current information, especially if you have dietary restrictions or allergies.
        </p>

        <h2>Allergen Disclaimer</h2>
        <p>
          Allergen information is provided for general guidance only. Cross-contamination may
          occur in restaurant environments. If you have a severe food allergy, always speak
          directly with Chick-fil-A staff at your local restaurant before ordering.
        </p>

        <h2>No Official Affiliation</h2>
        <p>
          &quot;Chick-fil-A&quot; is a registered trademark of CFA Properties, Inc. This website uses
          the name solely for informational and descriptive purposes. We make no claim of
          trademark rights and this site is not sponsored by or affiliated with Chick-fil-A, Inc.
        </p>

        <h2>Accuracy</h2>
        <p>
          We make every effort to keep information accurate and up to date. However,
          we make no guarantees of accuracy, completeness, or timeliness. Use this
          information as a general guide only.
        </p>
      </div>
    </div>
  );
}
