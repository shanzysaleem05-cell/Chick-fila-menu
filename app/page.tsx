import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, User, ArrowRight, Award, Heart, Utensils, Coffee, Sun, ClipboardList, ChevronDown } from "lucide-react";
import { menuCategories } from "@/lib/menu-data";
import MenuTable from "@/components/MenuTable";
import AdUnit from "@/components/AdUnit";
import FAQAccordion from "@/components/FAQAccordion";
import ByTheNumbers from "@/components/ByTheNumbers";

export const metadata: Metadata = {
  title: "Chick-fil-A Menu 2026: Prices, Calories & Full Item List",
  description: "Browse the full Chick-fil-A menu with 2026 prices, calories & protein for every item. Updated weekly.",
  keywords: "chick-fil-a menu, chick fil a prices, chick-fil-a calories, cfa menu 2026",
  alternates: {
    canonical: "https://chick-fila-menus.com/",
  },
  openGraph: {
    title: "Chick-fil-A Menu Prices & Calories (2026)",
    description: "Complete Chick-fil-A menu breakdown - prices, calories, protein.",
    type: "website",
    url: "https://chick-fila-menus.com/",
    images: [{ url: "/Spicy-Deluxe-Sandwich.webp", width: 1200, height: 630 }],
  },
};

export const revalidate = 86400;

const recentBlogs = [
  {
    slug: "healthiest-items",
    title: "10 Healthiest Items on the Chick-fil-A Menu (2026)",
    description: "Looking to eat healthy at Chick-fil-A? We've ranked the 10 best low-calorie options.",
    category: "Nutrition",
    readTime: "6 min read",
    image: "/10-Healthiest-Items-on-the-Chick-fil-A-Menu-(2026).webp",
  },
  {
    slug: "breakfast-guide",
    title: "Chick-fil-A Breakfast Hours & Best Breakfast Items",
    description: "Everything you need to know about Chick-fil-A breakfast - hours, menu items, calories.",
    category: "Breakfast",
    readTime: "5 min read",
    image: "/Chick-fil-A-Breakfast-Hours-&-Best-Breakfast-Items-(2026).webp",
  },
  {
    slug: "cheapest-ways-to-order",
    title: "How to Order Chick-fil-A the Cheapest Way",
    description: "Get the most value out of every Chick-fil-A visit - tips on meal combos and deals.",
    category: "Ordering Tips",
    readTime: "4 min read",
    image: "/How-to-Order-Chick-fil-A-the-Cheapest-Way.webp",
  },
];

const homeFaqs = [
  {
    question: "What is the cheapest menu item at Chick-fil-A?",
    answer: "The cheapest menu item at Chick-fil-A is typically a side like the Hash Browns ($1.85) or a Buttered Biscuit ($2.15).",
  },
  {
    question: "What time does Chick-fil-A stop serving breakfast?",
    answer: "Chick-fil-A stops serving breakfast at exactly 10:30 AM every Monday through Saturday.",
  },
  {
    question: "Does Chick-fil-A have any grilled or low-calorie options?",
    answer: "Yes, Chick-fil-A offers several healthy choices like the Grilled Chicken Sandwich and Market Salad.",
  },
  {
    question: "What is the most popular Chick-fil-A sandwich?",
    answer: "The classic Chick-fil-A Chicken Sandwich is their signature and most popular menu item.",
  },
];

export default function HomePage() {
  const allItems = menuCategories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat }))
  );

  const popularSlugs = [
    "spicy-chicken-sandwich",
    "hash-browns",
    "chocolate-milkshake"
  ];
  const popularItems = popularSlugs
    .map(slug => allItems.find(i => i.slug === slug))
    .filter(Boolean) as typeof allItems;

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-20 text-[#2B1B15]">
      {/* Hero Section (Wendy's-style Card Layout - Compact) */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-4 sm:pb-6">
        <div className="bg-[#EFE7DA] border border-[#DECDB8] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Information & CTAs */}
          <div className="lg:col-span-7 p-5 sm:p-7 md:p-8 lg:py-6 lg:px-8 xl:py-7 xl:px-10 flex flex-col justify-center">
            {/* Meta / Badge Line */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-wider text-[#943828] uppercase mb-2 sm:mb-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C8102E] shrink-0" />
              <span>PRICE GUIDE &bull; DATA COLLECTED NOVEMBER 2026</span>
            </div>

            {/* Main Headline (Compact single-line on desktop) */}
            <h1 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[28px] xl:text-[32px] text-[#1E140F] leading-tight tracking-tight mb-2 sm:mb-3">
              Chick-fil-A Menu Prices, <span className="text-[#C8102E]">2026</span>
            </h1>

            {/* Description */}
            <p className="text-[#45372E] text-xs sm:text-[13px] md:text-sm leading-relaxed mb-2 sm:mb-2.5 max-w-xl font-normal">
              An independent Chick-fil-A menu and price guide featuring current menu items, sampled prices, published nutrition information, value deals, and practical ordering tips.
            </p>

            {/* Disclaimer */}
            <p className="text-[10px] sm:text-[11px] text-[#7F7065] leading-normal mb-4 sm:mb-5 max-w-lg">
              Prices and promotional availability are determined locally by independent franchisees and may vary by restaurant.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#A30C23] !text-white font-bold text-[11px] sm:text-xs tracking-wider uppercase px-4 sm:px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              >
                <ClipboardList className="w-3.5 h-3.5 shrink-0" />
                <span>FULL 2026 MENU &amp; PRICES</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
              <a
                href="#categories"
                className="inline-flex items-center justify-center gap-1.5 bg-[#F6F0E5] hover:bg-[#EAE0D1] text-[#2B1B15] border border-[#D5C3AE] font-bold text-[11px] sm:text-xs tracking-wider uppercase px-4 sm:px-5 py-2.5 rounded-full shadow-sm hover:border-[#BFAF9C] transition-all duration-200"
              >
                <span>BROWSE BY CATEGORY</span>
                <ChevronDown className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Food Photography */}
          <div className="lg:col-span-5 relative h-[220px] sm:h-[260px] lg:h-full min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] w-full overflow-hidden bg-[#E8DEC9]">
            <Image
              src="/chick-fil-a-hero-sandwich.jpg"
              alt="Chick-fil-A Deluxe Chicken Sandwich and Waffle Fries"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-2 mb-10">
        <AdUnit type="leaderboard" />
      </div>

      {/* Popular Items / Nutrition Guide Promo */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mb-1">
          <p className="font-serif italic font-semibold text-2xl text-[#C8102E]">Featured</p>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <h2 className="font-display font-black text-3xl text-[#1A1A1A]">Popular Options</h2>
          <div className="h-[2px] flex-grow bg-[#EADCC8] ml-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Dark Promo Box */}
          <div className="bg-[#2C1914] text-white p-8 rounded-2xl flex-shrink-0 lg:w-[350px] flex flex-col justify-center">
            <h3 className="font-display font-black text-3xl mb-4 leading-tight !text-white" style={{ color: 'white' }}>
              Chick-fil-A Nutrition Guide
            </h3>
            <p className="text-gray-300 mb-8 text-sm leading-relaxed">
              Find out exactly what's in your favorite meals. We track calories, protein, and allergens so you can order with confidence.
            </p>
            <Link href="/calories" className="bg-[#C8102E] hover:bg-[#A80020] text-white text-center font-bold py-3 px-6 rounded-full transition-colors self-start">
              View Nutrition
            </Link>
          </div>

          {/* Popular Items Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-grow">
            {popularItems.map((item) => (
              <Link 
                key={item.slug} 
                href={`/menu/${item.category.slug}/${item.slug}`}
                className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8DFD0] hover:shadow-md transition-shadow flex flex-col group"
              >
                <div className="relative aspect-[4/3] w-full bg-[#FAF7F2] rounded-xl overflow-hidden mb-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                  />
                </div>
                <h4 className="font-bold text-[#1A1A1A] leading-tight mb-2 flex-grow group-hover:text-[#C8102E] transition-colors">{item.name}</h4>
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#F0EBE0]">
                  <span className="font-bold text-[#C8102E]">{item.price}</span>
                  <span className="text-xs font-semibold text-gray-500">{item.nutrition.calories} cal</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* The Chick-fil-A Promise Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#1A1A1A] mb-4">The Chick-fil-A Difference</h2>
          <p className="text-[#594E48] max-w-2xl mx-auto text-base md:text-lg">
            Discover what makes the Chick-fil-A experience truly unique, from our freshly prepared food to our legendary customer service.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-[#E8DFD0] text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#F9E6E9] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Utensils className="w-8 h-8 text-[#C8102E]" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-3">Fresh Ingredients</h3>
            <p className="text-[#594E48] text-sm leading-relaxed">
              Our chicken is 100% real, whole, boneless breast of chicken that has never been ground or separated. Freshly breaded in our kitchens every day.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-[#E8DFD0] text-center hover:shadow-lg transition-shadow transform md:-translate-y-4 shadow-sm">
            <div className="w-16 h-16 bg-[#F9E6E9] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-[#C8102E]" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-3">Original Recipe</h3>
            <p className="text-[#594E48] text-sm leading-relaxed">
              Created by Truett Cathy in 1964, our signature chicken sandwich has been made the exact same way for over 50 years. A true classic.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-[#E8DFD0] text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#F9E6E9] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-[#C8102E]" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-3">Legendary Service</h3>
            <p className="text-[#594E48] text-sm leading-relaxed">
              "My pleasure." We believe in serving communities and treating every guest with honor, dignity, and respect inside and outside our restaurants.
            </p>
          </div>
        </div>
      </div>

      {/* Explore by Category Section */}
      <div id="categories" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 scroll-mt-24">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[#C8102E] italic font-semibold mb-2 text-lg">Explore</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DFD0] pb-6">
            <div>
              <h2 className="font-display font-black text-4xl text-[#1A1A1A] mb-3">
                The Chick-fil-A Menu by Category
              </h2>
              <p className="text-[#594E48] text-sm md:text-base">
                {menuCategories.length} sections, {allItems.length} items tracked, with current national price ranges.
              </p>
            </div>
            <Link 
              href="/menu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D5CEC4] text-[#2B1B15] text-xs font-bold uppercase tracking-wider hover:bg-[#EAE3D5] transition-colors shrink-0"
            >
              THE FULL MENU <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Categories Grid/Scroll */}
        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 scrollbar-hide">
          {menuCategories.map((cat) => {
            const prices = cat.items.flatMap(i => {
              const match = i.price.match(/\$?(\d+\.\d{2})/g);
              return match ? match.map(m => parseFloat(m.replace('$', ''))) : [];
            });
            const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
            const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;
            const priceString = prices.length > 0 ? `$${minPrice.toFixed(2)}-$${maxPrice.toFixed(2)}` : "Prices vary";

            return (
              <Link
                key={cat.slug}
                href={`/menu/${cat.slug}`}
                className="flex-shrink-0 w-[260px] sm:w-auto bg-[#F0EBE0] border border-[#E8DFD0] rounded-2xl overflow-hidden group hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative h-[180px] w-full bg-white border-b border-[#E8DFD0] flex items-center justify-center p-6">
                  <Image 
                    src={cat.image || "/Spicy-Deluxe-Sandwich.webp"} 
                    alt={cat.name} 
                    fill 
                    sizes="(max-width: 768px) 260px, 25vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg text-[#1A1A1A] mb-3 group-hover:text-[#C8102E] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#594E48] line-clamp-3 mb-6 leading-relaxed flex-grow">
                    {cat.description || `Browse all the delicious items in the ${cat.name} category.`}
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-[#C8102E] text-base mb-1">{priceString}</p>
                    <p className="text-[0.7rem] text-[#8C8279] uppercase font-bold tracking-wider">{cat.items.length} items</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Breakfast Spotlight Section */}
      <div className="bg-white border-y border-[#E8DFD0] py-16 mb-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#FFF8E7] p-2.5 rounded-xl border border-[#FDEBBE]">
                  <Sun className="w-6 h-6 text-[#D99A29]" />
                </div>
                <h2 className="font-display font-black text-3xl md:text-4xl text-[#1A1A1A]">Breakfast Spotlight</h2>
              </div>
              <p className="text-[#594E48] text-base md:text-lg max-w-2xl">
                Start your morning right. Breakfast is served daily from 6:30 AM to 10:30 AM at participating locations.
              </p>
            </div>
            <Link 
              href="/menu/breakfast"
              className="bg-[#FAF7F2] border border-[#E8DFD0] hover:bg-[#EAE3D5] text-[#2B1B15] font-bold py-2.5 px-6 rounded-full transition-colors text-sm whitespace-nowrap self-start md:self-auto"
            >
              View Full Breakfast
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allItems.filter(item => item.category.slug === 'breakfast').slice(0, 4).map(item => (
              <Link 
                key={item.slug} 
                href={`/menu/breakfast/${item.slug}`}
                className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#E8DFD0] hover:shadow-md transition-shadow group flex flex-col"
              >
                <div className="relative aspect-square w-full bg-white rounded-xl overflow-hidden mb-4 border border-[#F0EBE0]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-bold text-[#1A1A1A] text-lg leading-tight mb-2 flex-grow group-hover:text-[#C8102E] transition-colors">{item.name}</h4>
                <div className="flex items-center justify-between pt-3 border-t border-[#EAE3D5] mt-auto">
                  <span className="font-bold text-[#C8102E]">{item.price}</span>
                  <span className="text-xs font-semibold text-gray-500 bg-white px-2 py-1 rounded-md border border-[#EAE3D5]">{item.nutrition.calories} cal</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Catering & Events Promo */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#1A1A1A] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center border border-[#333]">
          <div className="p-10 md:p-14 md:w-1/2 flex flex-col justify-center">
            <h2 className="font-display font-black text-3xl md:text-5xl !text-white mb-4 leading-tight">
              Catering for <br className="hidden md:block"/> Any Occasion
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-md leading-relaxed">
              From party trays to boxed meals, make your next event a success with Chick-fil-A Catering. Available for pickup or delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/catering"
                className="bg-[#C8102E] hover:bg-[#A80020] !text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Explore Catering
              </Link>
              <Link 
                href="/menu"
                className="bg-transparent border-2 border-white !text-white hover:bg-white hover:!text-[#1A1A1A] font-bold py-3 px-8 rounded-full transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[400px] bg-[#2B1B15]">
            {/* We can use a generic catering image or fallback to a known large item */}
            <Image
              src="/Chick-fil-A-Nuggets-(30-ct).webp"
              alt="Chick-fil-A Catering Tray"
              fill
              className="object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
          </div>
        </div>
      </div>

      {/* Full Menu Prices Table */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="font-display font-black text-3xl text-[#1A1A1A]">Chick-fil-A Menu Prices</h2>
          <div className="h-[2px] flex-grow bg-[#EADCC8] ml-4"></div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-[#E8DFD0] overflow-hidden p-1">
          <MenuTable items={allItems} showCategory={true} showSearch={true} />
        </div>
      </div>

      {/* By The Numbers & Home FAQs */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ByTheNumbers />
        
        <div className="mt-20">
          <FAQAccordion 
            kicker="Good to Know"
            title="Chick-fil-A Menu & Prices, FAQ"
            description="Straight answers to the questions readers ask most, built from the same data as the tables above."
            items={[
              {
                question: "What are Chick-fil-A's menu prices in 2026?",
                answer: "Chick-fil-A's sampled menu prices in 2026 range from around $2.15 for drinks or basic sides, up to $119.50 for large catering platters. Prices reflect sampled observations and may vary slightly by franchise."
              },
              {
                question: "What is the lowest-priced item on the Chick-fil-A menu?",
                answer: "Items like the Chocolate Chunk Cookie or small soft drinks are among the lowest-priced options on the menu, typically averaging under $2.50 depending on the location."
              },
              {
                question: "When does Chick-fil-A stop serving breakfast?",
                answer: "Chick-fil-A normally stops serving breakfast at 10:30 AM. After this time, the restaurants switch to their standard lunch and dinner menus."
              },
              {
                question: "Does Chick-fil-A offer any vegetarian options?",
                answer: "While famous for chicken, you can enjoy several vegetarian-friendly options like the Waffle Potato Fries, Mac & Cheese, Fruit Cup, side salads, and breakfast biscuits (without meat)."
              }
            ]}
          />
        </div>
      </div>

      {/* Latest Blogs Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-black text-3xl text-[#1A1A1A]">Latest Blogs</h2>
          <Link href="/blog" className="text-[#C8102E] font-bold text-sm hover:underline hidden sm:block">
            View All
          </Link>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentBlogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E8DFD0] hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-2">
                  {post.category}
                </span>
                <h3 className="font-display font-bold text-lg text-[#1A1A1A] mb-2 leading-tight group-hover:text-[#C8102E] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
                  {post.description}
                </p>
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 pt-3 border-t border-[#F0EBE0]">
                  <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</div>
                  <div className="flex items-center gap-1"><User className="w-3.5 h-3.5" />Admin</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FAQAccordion items={homeFaqs} title="Frequently Asked Questions" />
      </div>
    </div>
  );
}
