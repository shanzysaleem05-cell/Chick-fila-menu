import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact CFA Menu Guide",
  description: "Contact the CFA Menu Guide team for corrections, suggestions, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <div className="mt-6">
        <h1 className="section-title mb-4">Contact Us</h1>
        <p className="text-brand-gray-text mb-8">
          Have a correction, source update, copyright concern or question? Email our editorial team and include the page URL plus supporting details. We normally review messages within two business days.
        </p>
        <div className="rounded-2xl border border-[#EAE3D5] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-2">Editorial and general inquiries</h2>
          <a href="mailto:admin@cfamenuguide.com" className="text-[#C8102E] font-bold hover:underline">admin@cfamenuguide.com</a>
          <p className="mt-4 text-sm text-gray-600">For price or nutrition corrections, please include the restaurant location, date checked and a link or photo showing the updated information.</p>
        </div>
        <p className="mt-6 text-sm text-gray-600">Copyright notices can also follow our <Link href="/dmca" className="text-[#C8102E] underline">DMCA process</Link>. We are an independent guide and cannot handle restaurant orders, refunds or Chick-fil-A account support.</p>
      </div>
    </div>
  );
}
