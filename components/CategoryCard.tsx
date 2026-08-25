import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { MenuCategory } from "@/lib/menu-data";

interface CategoryCardProps {
  category: MenuCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/menu/${category.slug}`}
      className="group card flex flex-col hover:-translate-y-1 transition-all duration-300"
      aria-label={`View ${category.name} menu`}
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-brand-gray to-gray-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 select-none">

        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="badge-red text-xs">{category.items.length} items</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">

          <h2 className="font-display font-bold text-xl text-brand-dark group-hover:text-brand-red transition-colors">
            {category.name}
          </h2>
        </div>
        <p className="text-brand-gray-text text-sm leading-relaxed flex-1 line-clamp-2 mb-4">
          {category.description}
        </p>
        <div className="flex items-center gap-2 text-brand-red font-semibold text-sm group-hover:gap-3 transition-all duration-200">
          View Menu
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
