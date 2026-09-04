import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CateringCategory } from "@/lib/catering-data";

export default function CateringCategoryCard({ category }: { category: CateringCategory }) {
  return (
    <Link
      href={`/catering/${category.slug}`}
      className="group flex flex-col bg-white border border-[#EAE3D5] hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[4/3] w-full bg-[#F9F7F4] overflow-hidden flex items-center justify-center p-0 border-b border-[#EAE3D5]">
        <img
          src={category.image}
          alt={`${category.name} Catering`}
          className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display font-black text-[#1A1A1A] text-xl mb-4 group-hover:text-[#DD0033] transition-colors leading-tight">
          {category.name}
        </h3>
        
        {/* Divider */}
        <hr className="border-[#EAE3D5] mb-5" />

        <p className="text-[#666666] text-[15px] mb-5 flex-grow leading-relaxed">
          {category.description}
        </p>

        <div className="flex items-center justify-between text-[#DD0033] font-bold text-[15px]">
          <span>View Options</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
