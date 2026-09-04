"use client";

import { useState } from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import type { CateringItem } from "@/lib/catering-data";

export default function CateringItemCard({ item, categorySlug }: { item: CateringItem, categorySlug: string }) {
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(0);
  const currentSize = item.sizes?.[selectedSizeIdx];

  if (!item.sizes || item.sizes.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col bg-white border border-[#EAE3D5] hover:shadow-lg transition-shadow duration-300">
      
      {/* Image Container */}
      <Link href={`/catering/${categorySlug}/${item.slug}`} className="group relative w-full bg-[#F9F7F4] overflow-hidden flex items-center justify-center p-0 aspect-[4/3] border-b border-[#EAE3D5] block">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      
      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/catering/${categorySlug}/${item.slug}`} className="group mb-4 block">
          <h3 className="font-display font-black text-[#1A1A1A] text-xl leading-tight group-hover:text-[#DD0033] transition-colors">
            {item.name}
          </h3>
        </Link>
        
        {/* Price & Calories */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#DD0033] font-bold text-[15px]">
            Starting at {formatPrice(currentSize.priceFrom.toString())}
          </span>
          {item.caloriesPerServing && (
            <span className="text-gray-900 text-[15px]">
              {item.caloriesPerServing} cal
            </span>
          )}
        </div>

        {/* Divider */}
        <hr className="border-[#EAE3D5] mb-5" />

        <p className="text-[#666666] text-[15px] mb-5 flex-grow line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Size Selector */}
        <div className="mb-0">
          <label className="block text-[10px] font-bold text-[#666666] uppercase tracking-wider mb-2">
            Select Size
          </label>
          <div className="relative">
            <select 
              value={selectedSizeIdx}
              onChange={(e) => setSelectedSizeIdx(Number(e.target.value))}
              className="w-full appearance-none bg-white border border-[#EAE3D5] text-[#1A1A1A] text-[13px] rounded-none focus:ring-[#DD0033] focus:border-[#DD0033] block pl-3 pr-8 py-2 font-medium cursor-pointer"
            >
              {item.sizes.map((size, idx) => (
                <option key={idx} value={idx}>
                  {size.label} {size.servesApprox ? `(Serves ${size.servesApprox})` : ''}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-[#1A1A1A]">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
