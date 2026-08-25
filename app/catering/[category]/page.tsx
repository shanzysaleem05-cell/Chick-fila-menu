import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdUnit";
import CateringItemCard from "@/components/CateringItemCard";
import { cateringCategories, getCateringCategoryBySlug } from "@/lib/catering-data";

export const revalidate = 86400;

export async function generateStaticParams() {
  return cateringCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCateringCategoryBySlug(categorySlug);
  
  if (!category) return {};
  
  return {
    title: `Chick-fil-A ${category.name} Catering Menu & Prices (2026)`,
    description: category.longDescription || category.description,
    openGraph: {
      title: `Chick-fil-A ${category.name} Catering`,
      url: `/catering/${categorySlug}`,
    },
  };
}

export default async function CateringCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCateringCategoryBySlug(categorySlug);
  
  if (!category) notFound();

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Catering", href: "/catering" },
          { label: category.name, href: `/catering/${category.slug}` },
        ]}
      />

      <AdUnit type="leaderboard" />

      {/* Category Header */}
      <div className="mt-8 mb-12">
        <h1 className="font-display font-black text-4xl md:text-5xl text-[#1A1A1A] mb-6">
          {category.name} Catering
        </h1>
        
        {/* SEO Unique Content block (300+ words generally expected from data layer) */}
        <div className="text-gray-600 max-w-4xl leading-relaxed space-y-4">
          <p className="leading-relaxed">
            {category.longDescription || category.description}
          </p>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {category.items.length > 0 ? (
          category.items.map((item) => (
            <CateringItemCard key={item.slug} item={item} categorySlug={category.slug} />
          ))
        ) : (
          <div className="col-span-full py-16 text-center bg-gray-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Items coming soon</h3>
            <p className="text-gray-500">We are currently updating our catering menu for this category.</p>
          </div>
        )}
      </div>

      <AdUnit type="responsive" />
    </div>
  );
}
