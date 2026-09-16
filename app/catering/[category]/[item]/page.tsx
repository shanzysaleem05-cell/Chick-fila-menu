import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, Info, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdUnit";
import FAQAccordion from "@/components/FAQAccordion";
import { cateringCategories, getCateringItemBySlug, getAllCateringItems } from "@/lib/catering-data";
import { formatPrice } from "@/lib/utils";

export const revalidate = 86400;

export async function generateStaticParams() {
  const params: { category: string; item: string }[] = [];
  for (const cat of cateringCategories) {
    for (const item of cat.items) {
      params.push({ category: cat.slug, item: item.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; item: string }>;
}): Promise<Metadata> {
  const { category: categorySlug, item: itemSlug } = await params;
  const data = getCateringItemBySlug(categorySlug, itemSlug);
  
  if (!data) return {};
  
  const { item, category } = data;
  return {
    title: `Chick-fil-A ${item.name} Catering Price & Size Guide`,
    description: `Order the ${item.name} for your next event. View sizes, prices, calories per serving, and allergen info for Chick-fil-A catering.`,
    openGraph: {
      title: `Chick-fil-A ${item.name} Catering`,
      url: `/catering/${categorySlug}/${itemSlug}`,
    },
  };
}

export default async function CateringItemPage({
  params,
}: {
  params: Promise<{ category: string; item: string }>;
}) {
  const { category: categorySlug, item: itemSlug } = await params;
  const data = getCateringItemBySlug(categorySlug, itemSlug);
  
  if (!data) notFound();

  const { item, category } = data;

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Catering", href: "/catering" },
          { label: category.name, href: `/catering/${category.slug}` },
          { label: item.name, href: `/catering/${category.slug}/${item.slug}` },
        ]}
      />

      <AdUnit type="leaderboard" />

      <div className="flex flex-col lg:flex-row gap-10 mt-8">
        {/* Main Content Area */}
        <div className="flex-1 max-w-4xl">
          <h1 className="font-display font-black text-4xl md:text-5xl text-[#1A1A1A] mb-6">
            {item.name}
          </h1>

          {/* Hero Image */}
          <div className="aspect-[16/9] w-full bg-white rounded-3xl overflow-hidden flex items-center justify-center p-8 border border-[#EAE3D5] shadow-sm mb-10">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <article className="text-gray-700 max-w-none mb-12 leading-relaxed space-y-4">
            {item.uniqueDescription ? (
              item.uniqueDescription.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))
            ) : (
              <>
                <p className="leading-relaxed text-lg">{item.description}</p>
                <p className="leading-relaxed text-lg">
                  Catering for a crowd? The {item.name} is a fantastic choice from our {category.name} menu. 
                  Whether you&apos;re planning a corporate event, a birthday party, or a family gathering, it provides that authentic Chick-fil-A flavor scaled up for your entire group.
                </p>
                <p className="leading-relaxed text-lg">
                  Available in multiple sizes to accommodate your guest count, this item starts at approximately ${item.sizes[0]?.priceFrom.toFixed(2)}. 
                  Be sure to pair it with our signature sauces, sides, and sweet tea to complete the ultimate catering spread.
                </p>
              </>
            )}
          </article>

          {/* Sizing Table */}
          <h2 className="font-display font-bold text-3xl text-[#1A1A1A] mb-6">Tray Sizes & Pricing</h2>
          <div className="bg-white border border-[#EAE3D5] rounded-2xl overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FCFAF5] border-b border-[#EAE3D5] text-sm text-gray-600 uppercase tracking-wider">
                    <th className="py-4 px-6 font-bold text-[#1A1A1A]">Size</th>
                    <th className="py-4 px-6 font-bold text-[#1A1A1A]">Serves Approx.</th>
                    <th className="py-4 px-6 font-bold text-[#1A1A1A]">Starting Price</th>
                  </tr>
                </thead>
                <tbody className="text-[#1A1A1A]">
                  {item.sizes.map((size, idx) => (
                    <tr key={idx} className="border-b border-[#EAE3D5] last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-lg">{size.label}</td>
                      <td className="py-4 px-6 font-medium">{size.servesApprox} people</td>
                      <td className="py-4 px-6 font-bold text-[#DD0033] text-lg">{formatPrice(size.priceFrom.toString())}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t border-[#EAE3D5] text-sm text-gray-500 flex items-start gap-2">
              <Info className="w-5 h-5 flex-shrink-0 text-gray-400" />
              <p>Prices and availability vary by location. Please start an order to view pricing for your specific local restaurant. Serving sizes are approximate.</p>
            </div>
          </div>

          <AdUnit type="responsive" />

          {/* FAQs */}
          <div className="mt-12">
            <FAQAccordion 
              items={item.faqs && item.faqs.length > 0 ? item.faqs : [
                {
                  question: `How many people does the ${item.name} serve?`,
                  answer: `The ${item.name} is available in multiple sizes. ${item.sizes.map(s => `The ${s.label} serves approximately ${s.servesApprox}`).join('; ')}.`
                },
                {
                  question: `How far in advance should I order the ${item.name}?`,
                  answer: "We recommend placing catering orders at least 24 hours in advance to ensure availability, though some locations may accommodate same-day orders depending on volume."
                },
                {
                  question: `Are sauces included with the ${item.name}?`,
                  answer: "Most hot catering trays come with your choice of 8oz dipping sauces. Plates, napkins, and serving utensils are generally provided upon request."
                }
              ]} 
              title={`${item.name} FAQs`} 
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[360px] flex-shrink-0 space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-[#EAE3D5] shadow-sm sticky top-28">
            <h3 className="font-display font-bold text-2xl mb-3 text-[#1A1A1A]">Start Order</h3>
            <p className="text-gray-600 text-sm mb-6">
              Ready to cater your event? Select your location to view exact pricing and place your order.
            </p>
            <a
              href="https://www.chick-fil-a.com/catering"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#DD0033] hover:bg-[#B8002A] text-white font-bold py-4 rounded-xl shadow-md transition-colors mb-4"
            >
              Order Online
            </a>
            
            <div className="w-full h-[1px] bg-gray-200 my-6"></div>

            <div className="space-y-4">
              {item.caloriesPerServing && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Nutrition</h4>
                  <p className="text-[#1A1A1A] font-medium">{item.caloriesPerServing} calories per serving</p>
                </div>
              )}
              {item.allergens && item.allergens.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" /> Allergens
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.allergens.map(a => (
                      <span key={a} className="bg-amber-100 text-amber-900 border border-amber-200 px-2 py-1 rounded-md text-xs font-bold">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <AdUnit type="rectangle" />
        </div>
      </div>
    </div>
  );
}
