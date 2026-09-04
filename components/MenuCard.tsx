import Link from "next/link";
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
      className="group flex flex-col bg-white border border-[#EAE3D5] hover:shadow-lg transition-all duration-300"
    >
      {/* Image Container */}
      <div className="w-full bg-[#F9F7F4] overflow-hidden flex items-center justify-center p-0 aspect-[4/3] border-b border-[#EAE3D5]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display font-black text-[#1A1A1A] text-xl mb-4 group-hover:text-[#DD0033] transition-colors leading-tight">
          {item.name}
        </h3>

        {/* Price and Calories */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#DD0033] font-bold text-[15px]">
            {formatPrice(item.price)}
          </span>
          <span className="text-gray-900 text-[15px]">
            {item.nutrition.calories} cal
          </span>
        </div>

        {/* Divider */}
        <hr className="border-[#EAE3D5] mb-5" />

        {/* Description */}
        <p className="text-[#666666] text-[15px] leading-relaxed flex-grow">
          {item.description ||
            `Enjoy our classic ${item.name.toLowerCase()} made fresh daily.`}
        </p>
      </div>
    </Link>
  );
}
