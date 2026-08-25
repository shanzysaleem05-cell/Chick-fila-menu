import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { MenuItem } from "@/lib/menu-data";

interface MenuCardProps {
  item: MenuItem;
  categorySlug: string;
}

export default function MenuCard({ item, categorySlug }: MenuCardProps) {
  return (
    <Link
      href={`/menu/${categorySlug}/${item.slug}`}
      className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#EAE3D5] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
    >
      {/* Image Container */}
      <div className="relative w-full bg-[#F9F7F4] overflow-hidden flex items-center justify-center p-6 border-b border-[#EAE3D5] min-h-[220px]">
        {/* Floating Badges */}
        <div className="absolute top-3 left-3 z-10">
          <div className="bg-white text-[#1A1A1A] font-extrabold text-sm px-3.5 py-1.5 rounded-full shadow-sm border border-gray-100 tracking-tight">
            {formatPrice(item.price)}
          </div>
        </div>
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-white text-gray-600 font-medium text-sm px-3.5 py-1.5 rounded-full shadow-sm border border-gray-100 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-[#DD0033]" />
            {item.nutrition.calories} cal
          </div>
        </div>

        {/* Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain max-h-[160px] transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-display font-black text-[#1A1A1A] text-[1.1rem] leading-tight mb-2 group-hover:text-[#DD0033] transition-colors">
          {item.name}
        </h3>

        {/* Short Teaser */}
        <p className="text-[#666666] text-[0.9rem] leading-relaxed line-clamp-3 mb-6 flex-grow">
          {item.description ||
            `Enjoy our classic ${item.name.toLowerCase()} made fresh daily.`}
        </p>

        {/* Custom CTA */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-[#DD0033] font-bold text-[0.95rem] hover:underline underline-offset-2">
            View Details
          </span>
          <div className="w-9 h-9 rounded-full bg-[#DD0033] flex items-center justify-center shadow-sm group-hover:bg-[#B8002A] transition-colors">
            <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </Link>
  );
}
