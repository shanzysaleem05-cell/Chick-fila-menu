"use client";

import { useState } from "react";
import Link from "next/link";
import { Flame } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { CateringItem } from "@/lib/catering-data";

export default function CateringItemCard({ item, categorySlug }: { item: CateringItem, categorySlug: string }) {
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(0);
  const currentSize = item.sizes?.[selectedSizeIdx];

  if (!item.sizes || item.sizes.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col bg-white rounded-2xl border border-[#EAE3D5] hover:shadow-lg transition-shadow duration-300">
      
      {/* Image Container (Inset) */}
      <div className="p-3 pb-0">
        <Link href={`/catering/${categorySlug}/${item.slug}`} className="group relative block w-full h-44 sm:h-48 bg-[#F9F7F4] rounded-xl border border-[#EAE3D5]/50 flex items-center justify-center overflow-hidden">
          <div className="absolute top-2.5 right-2.5 z-10 flex flex-col gap-1">
            {item.caloriesPerServing && (
              <div className="bg-white text-[#1A1A1A] font-bold text-[11px] px-2 py-1 rounded shadow-sm border border-gray-100 flex items-center gap-1">
                <Flame className="w-3 h-3 text-[#DD0033]" />
                {item.caloriesPerServing} cal
              </div>
            )}
          </div>
          
          <img
            src={item.image}
            alt={item.name}
            className="w-[85%] h-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      
      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow">
        <Link href={`/catering/${categorySlug}/${item.slug}`} className="group mb-1">
          <h3 className="font-display font-black text-[#1A1A1A] text-[1.35rem] leading-tight group-hover:text-[#DD0033] transition-colors line-clamp-1">
            {item.name}
          </h3>
        </Link>
        <p className="text-[#666666] text-sm mb-6 flex-grow line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Size Selector */}
        <div className="mb-5">
          <label className="block text-[10px] font-bold text-[#666666] uppercase tracking-wider mb-2">
            Select Size
          </label>
          <div className="relative">
            <select 
              value={selectedSizeIdx}
              onChange={(e) => setSelectedSizeIdx(Number(e.target.value))}
              className="w-full appearance-none bg-white border border-[#EAE3D5] text-[#1A1A1A] text-xs rounded-md focus:ring-[#DD0033] focus:border-[#DD0033] block pl-3 pr-8 py-2 font-medium cursor-pointer"
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

        {/* Price & Action */}
        <div className="mb-4">
          <div className="text-[#666666] text-[10px] font-medium uppercase tracking-wider mb-0.5">Starting at</div>
          <div className="text-[#DD0033] font-display font-black text-[1.4rem] tracking-tight leading-none">
            {formatPrice(currentSize.priceFrom.toString())}
          </div>
        </div>

        <Link
          href={`/catering/${categorySlug}/${item.slug}`}
          className="w-full bg-white border border-[#DD0033] text-[#1A1A1A] hover:bg-gray-50 font-bold py-3 rounded-lg transition-colors text-center text-[0.95rem]"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
