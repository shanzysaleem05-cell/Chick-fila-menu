import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, Search } from "lucide-react";

const primaryLinks = [
  ["Menu & Prices", "/menu"],
  ["Nutrition", "/calories"],
  ["Catering", "/catering"],
  ["Blogs", "/blog"],
  ["Hours", "/hours"],
  ["Deals", "/coupons"],
] as const;

const utilityLinks = [
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Recipes", "/recipes"],
  ["Deals", "/coupons"],
  ["Contact", "/contact"],
] as const;

const megaMenus: Record<string, { heading: string; links: readonly (readonly [string, string])[] }[]> = {
  "Menu & Prices": [
    { heading: "Explore Menu", links: [["Full Menu & Prices", "/menu"], ["Breakfast", "/menu/breakfast"], ["Entrées", "/menu/entrees"], ["Sides", "/menu/sides"]] },
    { heading: "More Favorites", links: [["Salads", "/menu/salads"], ["Treats", "/menu/treats"], ["Beverages", "/menu/beverages"], ["Sauces & Dressings", "/menu/sauces-dressings"]] },
    { heading: "Popular Guides", links: [["Calories & Nutrition", "/calories"], ["Catering Menu", "/catering"], ["Latest Deals", "/coupons"], ["Restaurant Hours", "/hours"]] },
  ],
  Nutrition: [
    { heading: "Nutrition", links: [["Calories Guide", "/calories"], ["High-Protein Meals", "/blog/high-protein-meals"], ["Healthiest Items", "/blog/healthiest-items"], ["Keto Options", "/blog/keto-friendly-options"]] },
    { heading: "Dietary Guides", links: [["Gluten-Free Guide", "/blog/gluten-free-menu-guide"], ["Vegetarian & Vegan", "/blog/vegetarian-vegan-options"], ["Breakfast Guide", "/blog/breakfast-guide"], ["All Nutrition Articles", "/blog"]] },
  ],
  Catering: [
    { heading: "Catering", links: [["Catering Menu", "/catering"], ["Breakfast Catering", "/catering/breakfast"], ["Entrée Trays", "/catering/entrees"], ["Sides & Treats", "/catering/sides-treats"]] },
    { heading: "Planning Help", links: [["Catering Guide", "/blog/ultimate-catering-guide"], ["Family Meal Ideas", "/blog/family-meal-ideas"], ["Contact Our Guide", "/contact"], ["Menu Prices", "/menu"]] },
  ],
  Blogs: [
    { heading: "Latest", links: [["Nuggets & Strips Mix", "/blog/nuggets-and-strips-mix-2026"], ["White Plains Opening", "/blog/white-plains-opening-2026"], ["All Articles", "/blog"], ["Recipes", "/recipes"]] },
    { heading: "Popular", links: [["Best Sauces Ranked", "/blog/best-sauces-ranked"], ["Cheapest Ways to Order", "/blog/cheapest-ways-to-order"], ["Secret Menu Items", "/blog/secret-menu-items"], ["Family Meal Ideas", "/blog/family-meal-ideas"]] },
  ],
};

function SearchForm({ mobile = false }: { mobile?: boolean }) {
  return (
    <form
      action="/menu"
      role="search"
      className={mobile
        ? "flex w-full items-center rounded-full border border-transparent bg-[#F0EBE0] h-11 px-4 focus-within:border-[#C8102E] focus-within:bg-white"
        : "hidden lg:flex flex-grow max-w-3xl items-center rounded-full border border-transparent bg-[#F0EBE0] h-12 px-4 focus-within:border-[#C8102E] focus-within:bg-white"}
    >
      <Search aria-hidden="true" className="w-5 h-5 text-[#8C8279] mr-3 shrink-0" />
      <input
        type="search"
        name="q"
        placeholder="Search menus, nutrition, locations..."
        className="min-w-0 flex-grow bg-transparent border-none outline-none text-sm text-[#1A1A1A] placeholder-[#8C8279]"
      />
      <button type="submit" aria-label="Search menu" className="bg-[#C8102E] hover:bg-[#A80020] w-9 h-9 rounded-full flex items-center justify-center shrink-0 ml-2">
        <Search aria-hidden="true" className="w-4 h-4 text-white" />
      </button>
    </form>
  );
}

// This component deliberately stays server-rendered. The mobile navigation uses
// native details/summary and search uses a GET form, so the header ships no
// hydration JavaScript.
export default function Header() {
  return (
    <header className="w-full bg-[#FAF7F2] z-50 relative flex flex-col font-sans border-b border-[#E8DFD0]">
      <div className="hidden lg:block border-b border-[#E8DFD0]">
        <div className="max-w-[1400px] mx-auto px-8 h-8 flex items-center justify-between text-[10px] font-bold text-[#8C8279] uppercase tracking-[0.15em]">
          <span>Independent guide &middot; Not affiliated with Chick-fil-A</span>
          <nav aria-label="Utility navigation" className="flex items-center gap-4">
            {utilityLinks.map(([label, href], index) => (
              <span key={href} className="flex items-center gap-4">
                {index > 0 && <span aria-hidden="true">&middot;</span>}
                <Link href={href} className="hover:text-[#C8102E]">{label}</Link>
              </span>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-b border-[#E8DFD0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between gap-4 md:gap-8">
          <details className="mobile-nav relative lg:hidden">
            <summary aria-label="Open menu" className="list-none cursor-pointer p-2 -ml-2 text-[#2B1B15]">
              <Menu aria-hidden="true" className="w-7 h-7" />
            </summary>
            <nav aria-label="Mobile navigation" className="absolute top-[60px] -left-4 w-[100vw] min-h-screen bg-[#FAF7F2] shadow-xl px-6 py-3 z-[60]">
              {primaryLinks.map(([label, href]) => (
                <Link key={href} href={href} className="py-4 border-b border-[#E8DFD0] font-bold text-[#2B1B15] hover:text-[#C8102E] text-lg uppercase tracking-wider flex justify-between items-center">
                  {label}<ChevronDown aria-hidden="true" className="w-5 h-5 text-[#8C8279] -rotate-90" />
                </Link>
              ))}
            </nav>
          </details>

          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <Image src="/apple-touch-icon.png" alt="CFA Menu Guide" width={56} height={56} priority className="w-12 h-12 md:w-14 md:h-14 object-contain" />
            <span className="hidden sm:flex flex-col">
              <span className="font-display font-black text-xl md:text-2xl text-[#C8102E] leading-none tracking-tight">CFA MENU</span>
              <span className="font-display font-bold text-sm text-[#1A1A1A] leading-none tracking-widest mt-1">GUIDE USA</span>
            </span>
          </Link>

          <SearchForm />

          <div className="flex items-center gap-3 shrink-0">
            <Link href="/coupons" className="hidden sm:flex px-6 py-2.5 rounded-full border border-[#D5CEC4] hover:bg-[#F0EBE0] !text-[#1A1A1A] text-[11px] font-bold uppercase tracking-widest">Deals</Link>
            <Link href="/menu" className="px-5 py-2.5 md:px-7 md:py-3 rounded-full bg-[#C8102E] hover:bg-[#A80020] !text-white text-[11px] md:text-xs font-bold uppercase tracking-widest shadow-sm">Full Menu</Link>
          </div>
        </div>
      </div>

      <nav aria-label="Primary navigation" className="hidden lg:flex max-w-[1400px] w-full mx-auto px-8 h-14 items-stretch justify-center gap-10">
        {primaryLinks.map(([label, href]) => {
          const panels = megaMenus[label];
          return (
            <div key={href} className="group flex items-center">
              <Link href={href} className="flex h-full items-center gap-1.5 text-[#2B1B15] hover:text-[#C8102E] text-xs font-bold uppercase tracking-widest focus-visible:outline-2 focus-visible:outline-[#C8102E]">
                {label}{panels && <ChevronDown aria-hidden="true" className="w-3.5 h-3.5 text-[#8C8279] transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />}
              </Link>
              {panels && (
                <div className="invisible absolute inset-x-0 top-full z-50 translate-y-2 border-t border-[#E8DFD0] bg-white opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="mx-auto grid max-w-[1100px] gap-10 px-8 py-8" style={{ gridTemplateColumns: `repeat(${panels.length}, minmax(0, 1fr))` }}>
                    {panels.map((panel) => (
                      <section key={panel.heading} aria-label={panel.heading}>
                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[.18em] text-[#C8102E]">{panel.heading}</p>
                        <div className="grid gap-1">
                          {panel.links.map(([item, itemHref]) => (
                            <Link key={itemHref} href={itemHref} className="rounded-lg px-3 py-2 text-sm font-semibold text-[#2B1B15] hover:bg-[#FAF7F2] hover:text-[#C8102E] focus:bg-[#FAF7F2] focus:outline-none">{item}</Link>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="lg:hidden px-4 py-3 border-t border-[#E8DFD0]"><SearchForm mobile /></div>
    </header>
  );
}
