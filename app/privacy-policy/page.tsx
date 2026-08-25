import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "CFA Menu Guide privacy policy — how we collect, use, and protect your data. Includes Google AdSense and Google Analytics disclosures.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />

      <div className="mt-8 bg-white rounded-2xl shadow-sm border border-[#EAE3D5] overflow-hidden p-6 md:p-10">
        <h1 className="font-display font-black text-3xl md:text-4xl text-[#1A1A1A] mb-2">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          <strong>Last Updated:</strong> August 24, 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">1. Introduction</h2>
            <p>
              CFA Menu Guide (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website{" "}
              <strong>cfamenuguide.com</strong>. This Privacy Policy explains what information we
              collect when you visit our site, how we use it, and your rights regarding your
              personal data.
            </p>
            <p className="mt-3">
              This site is an <strong>independent, fan-operated guide</strong> and is not affiliated
              with, endorsed by, or sponsored by Chick-fil-A, Inc. in any way.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Usage Data:</strong> Pages visited, time on site, referring URLs, browser
                type, device type, and IP address — collected automatically via Google Analytics.
              </li>
              <li>
                <strong>Contact Information:</strong> If you submit our contact form, we collect
                your name and email address to respond to your inquiry.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies and similar tracking technologies for
                analytics, site functionality, and to serve personalized advertisements (see
                Section 5 for details).
              </li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To operate and improve the website and user experience</li>
              <li>To respond to inquiries submitted via the contact form</li>
              <li>To analyze site traffic and content performance via Google Analytics</li>
              <li>
                To serve relevant advertisements through Google AdSense (see Section 5 for full
                disclosure)
              </li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">4. Cookies &amp; Tracking Technologies</h2>
            <p className="mb-3">
              Cookies are small text files placed on your device. We use them in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Strictly Necessary Cookies:</strong> Required for the site to function
                correctly (e.g., cookie consent preferences).
              </li>
              <li>
                <strong>Analytics Cookies (Google Analytics):</strong> We use Google Analytics to
                understand how visitors use our site. Google Analytics collects data such as pages
                visited, session duration, and device type. This data is anonymized and does not
                personally identify you. You can opt out via the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DD0033] hover:underline"
                >
                  Google Analytics Opt-Out Browser Add-on
                </a>
                .
              </li>
              <li>
                <strong>Advertising Cookies (Google AdSense):</strong> We use Google AdSense to
                display advertisements on this site (see Section 5 below for full disclosure).
              </li>
            </ul>
            <p className="mt-3">
              You can manage or delete cookies at any time through your browser settings. Note that
              disabling cookies may impact site functionality.
            </p>
          </section>

          {/* Google AdSense Disclosure */}
          <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">
              5. Advertising — Google AdSense Disclosure
            </h2>
            <p className="mb-3">
              This website uses <strong>Google AdSense</strong>, a third-party advertising service
              provided by Google LLC, to display advertisements. Google AdSense may use cookies,
              web beacons, and similar tracking technologies to serve ads based on your prior
              visits to this website and other websites.
            </p>
            <p className="mb-3">
              Google&apos;s use of advertising cookies enables it and its partners to serve ads to
              you based on your visit to our site and/or other sites on the Internet. You may opt
              out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DD0033] hover:underline"
              >
                Google Ads Settings
              </a>
              .
            </p>
            <p className="mb-3">
              <strong>Google DoubleClick DART Cookie:</strong> Google, as a third-party vendor, uses
              the DART cookie to serve ads to our site visitors based upon their visit to our site
              and other sites on the Internet. Users may opt out of the use of the DART cookie by
              visiting the{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DD0033] hover:underline"
              >
                Google advertising and content network Privacy Policy
              </a>
              .
            </p>
            <p>
              For more information about how Google uses data when you use our site, visit:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DD0033] hover:underline"
              >
                Google Privacy Policy
              </a>
              .
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (including the official
              Chick-fil-A website). We are not responsible for the privacy practices or content of
              those sites. We encourage you to review the privacy policies of any third-party sites
              you visit.
            </p>
          </section>

          {/* GDPR / Your Rights */}
          <section>
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">
              7. Your Rights (GDPR &amp; CCPA)
            </h2>
            <p className="mb-3">
              Depending on your location, you may have the following rights regarding your personal
              data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Right to Access:</strong> Request a copy of the personal data we hold about
                you.
              </li>
              <li>
                <strong>Right to Erasure:</strong> Request deletion of your personal data.
              </li>
              <li>
                <strong>Right to Opt-Out:</strong> Opt out of personalized advertising (see Section
                5).
              </li>
              <li>
                <strong>Right to Object:</strong> Object to the processing of your personal data for
                direct marketing purposes.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us via our{" "}
              <Link href="/contact" className="text-[#DD0033] hover:underline">
                Contact page
              </Link>
              .
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">8. Children&apos;s Privacy</h2>
            <p>
              This website is not directed at children under the age of 13. We do not knowingly
              collect personal information from children. If you believe a child has provided us
              personal data, please contact us immediately.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &quot;Last Updated&quot; date
              at the top of this page will reflect any changes. Continued use of the site after
              updates constitutes acceptance of the revised policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">10. Contact Us</h2>
            <p>
              Questions about this Privacy Policy? Reach out via our{" "}
              <Link href="/contact" className="text-[#DD0033] hover:underline">
                Contact page
              </Link>{" "}
              or email us at{" "}
              <a
                href="mailto:privacy@cfamenuguide.com"
                className="text-[#DD0033] hover:underline"
              >
                privacy@cfamenuguide.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
