import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MenuCategory } from "@/lib/menu-data";

interface CategoryCardProps {
  category: MenuCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/menu/${category.slug}`}
      className="group flex flex-col bg-white border border-[#EAE3D5] hover:shadow-lg transition-all duration-300"
      aria-label={`View ${category.name} menu`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-gray to-gray-200 overflow-hidden border-b border-[#EAE3D5]">
        <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 select-none">
          {category.emoji}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="badge-red text-xs">{category.items.length} items</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h2 className="font-display font-black text-xl text-[#1A1A1A] group-hover:text-[#DD0033] transition-colors mb-4 leading-tight">
          {category.name}
        </h2>
        
        {/* Divider */}
        <hr className="border-[#EAE3D5] mb-5" />

        <p className="text-[#666666] text-[15px] leading-relaxed flex-1 mb-5">
          {category.description}
        </p>

        <div className="flex items-center justify-between text-[#DD0033] font-bold text-[15px]">
          <span>View Menu</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
