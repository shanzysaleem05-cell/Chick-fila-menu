import Link from "next/link";

const footerLinks = {
  Menu: [
    { label: "Full Menu", href: "/menu" },
    { label: "Breakfast", href: "/menu/breakfast" },
    { label: "Entrées", href: "/menu/entrees" },
    { label: "Salads", href: "/menu/salads" },
    { label: "Sides", href: "/menu/sides" },
    { label: "Treats", href: "/menu/treats" },
    { label: "Beverages", href: "/menu/beverages" },
    { label: "Sauces", href: "/menu/sauces" },
  ],
  "Nutrition Info": [
    { label: "Menu with Prices", href: "/prices" },
    { label: "Calories Guide", href: "/calories" },
    { label: "Healthiest Items", href: "/blog/healthiest-items" },
    { label: "Breakfast Calories", href: "/menu/breakfast" },
    { label: "Allergen Info", href: "/calories#allergens" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "DMCA", href: "/dmca" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white mt-16">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <img 
                src="/apple-touch-icon.png" 
                alt="CFA Menu Guide Logo" 
                className="w-9 h-9 rounded-xl"
              />
              <span className="font-display font-bold text-xl">CFA Menu Guide</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your complete guide to Chick-fil-A&apos;s menu, prices, and nutrition info. Updated regularly with the latest items and prices.
            </p>

          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            ⚠️ <strong>Disclaimer:</strong> CFA Menu Guide is an independent fan site and is NOT affiliated with, endorsed by, or sponsored by Chick-fil-A, Inc. Prices shown are US national average estimates — actual prices vary by location. Calorie data sourced from official Chick-fil-A nutrition information. Always verify prices and nutrition at your local restaurant.{" "}
            <Link href="/disclaimer" className="underline hover:text-gray-300">Read full disclaimer</Link>.
          </p>
          <p className="text-xs text-gray-600 text-center mt-2">
            © {new Date().getFullYear()} CFA Menu Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
