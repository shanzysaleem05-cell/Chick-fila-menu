import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
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
          Have a correction, suggestion, or question? Fill out the form below or email us directly at <strong>admin@cfamenuguide.com</strong> and
          we&apos;ll get back to you as soon as possible.
        </p>
        <form className="space-y-5">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-semibold text-brand-dark mb-1">
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-brand-gray-mid focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-semibold text-brand-dark mb-1">
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-brand-gray-mid focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="contact-subject" className="block text-sm font-semibold text-brand-dark mb-1">
              Subject
            </label>
            <select
              id="contact-subject"
              className="w-full px-4 py-3 rounded-xl border border-brand-gray-mid focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 outline-none transition-all bg-white"
            >
              <option>Price Correction</option>
              <option>Nutrition Data Error</option>
              <option>New Item Suggestion</option>
              <option>Partnership Inquiry</option>
              <option>General Question</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-semibold text-brand-dark mb-1">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              placeholder="Tell us what's on your mind..."
              className="w-full px-4 py-3 rounded-xl border border-brand-gray-mid focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 outline-none transition-all resize-none"
            />
          </div>
          <button type="submit" className="btn-primary w-full justify-center">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
