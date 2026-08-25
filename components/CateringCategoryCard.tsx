import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CateringCategory } from "@/lib/catering-data";

export default function CateringCategoryCard({ category }: { category: CateringCategory }) {
  return (
    <Link
      href={`/catering/${category.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EAE3D5] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/9] w-full bg-white overflow-hidden flex items-center justify-center p-4 border-b border-[#EAE3D5]">
        <img
          src={category.image}
          alt={`${category.name} Catering`}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display font-bold text-[#1A1A1A] text-xl mb-2 group-hover:text-[#DD0033] transition-colors">
          {category.name}
        </h3>
        <p className="text-gray-500 text-sm mb-6 flex-grow">
          {category.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-[#DD0033] font-bold text-sm">View Options</span>
          <div className="w-8 h-8 rounded-full bg-[#f4f4f4] group-hover:bg-[#DD0033] flex items-center justify-center transition-colors">
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </Link>
  );
}
