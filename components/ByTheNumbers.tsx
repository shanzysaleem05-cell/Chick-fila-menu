"use client";

import { menuCategories } from "@/lib/menu-data";

export default function ByTheNumbers() {
  // Try to find a few low price items and a few high price items dynamically
  const allItems = menuCategories.flatMap(c => c.items);
  
  // Extract number from price string (e.g. "$1.19" -> 1.19)
  const extractPrice = (priceStr: string) => {
    const match = priceStr.match(/\d+\.\d{2}/);
    return match ? parseFloat(match[0]) : 999; // 999 if no price to sink it
  };

  const sortedItems = [...allItems].sort((a, b) => extractPrice(a.price) - extractPrice(b.price));
  
  // Get 5 cheapest
  const under3Items = sortedItems.slice(0, 5).map(item => ({
    name: item.name,
    price: item.price.includes("$") ? item.price : `$${item.price}`
  }));

  // Get 5 expensive (Premium)
  const premiumItems = sortedItems.filter(item => extractPrice(item.price) < 999).slice(-5).reverse().map(item => ({
    name: item.name,
    price: item.price.includes("$") ? item.price : `$${item.price}`
  }));

  return (
    <section className="mb-16">
      {/* Header */}
      <div className="mb-8">
        <h3 className="italic text-[#C8102E] font-serif text-xl mb-1">
          By the Numbers
        </h3>
        <h2 className="font-display font-black text-3xl md:text-4xl text-[#2B1B15]">
          Where the Money Actually Goes
        </h2>
        <div className="w-12 h-1 bg-[#C8102E] my-4 rounded-full"></div>
        <p className="text-[#594E48] text-sm max-w-2xl leading-relaxed">
          National price analytics, reviewed regularly.
        </p>
      </div>

      {/* Tables/Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* Under $3 Card */}
        <div className="bg-[#FAF7F2] rounded-2xl border border-[#EAE3D5] p-6 shadow-sm flex flex-col">
          <div className="border-b border-[#EAE3D5] pb-4 mb-4">
            <span className="text-[#C8102E] text-xs font-bold uppercase tracking-widest">
              UNDER $3
            </span>
          </div>
          <div className="flex flex-col gap-0">
            {under3Items.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between py-4 border-b border-[#EAE3D5] last:border-0 last:pb-0"
              >
                <span className="font-display font-bold text-[#2B1B15] text-[15px] pr-4">
                  {item.name}
                </span>
                <span className="font-bold text-[#C8102E] text-[15px] whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Card */}
        <div className="bg-[#FAF7F2] rounded-2xl border border-[#EAE3D5] p-6 shadow-sm flex flex-col">
          <div className="border-b border-[#EAE3D5] pb-4 mb-4">
            <span className="text-[#C8102E] text-xs font-bold uppercase tracking-widest">
              PREMIUM
            </span>
          </div>
          <div className="flex flex-col gap-0">
            {premiumItems.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between py-4 border-b border-[#EAE3D5] last:border-0 last:pb-0"
              >
                <span className="font-display font-bold text-[#2B1B15] text-[15px] pr-4">
                  {item.name}
                </span>
                <span className="font-bold text-[#C8102E] text-[15px] whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
