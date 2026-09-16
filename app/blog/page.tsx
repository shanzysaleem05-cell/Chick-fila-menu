import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Chick-fil-A Blog — Ordering Tips, Nutrition Guides & More",
  description:
    "Expert guides on Chick-fil-A — healthiest menu items, ordering tips, secret menu hacks, calorie breakdowns, and how to get the best value from Chick-fil-A.",
  openGraph: {
    title: "Chick-fil-A Blog — Tips, Nutrition & Ordering Guides",
    url: "/blog",
  },
};

const blogPosts = [
  {
    slug: "healthiest-items",
    title: "10 Healthiest Items on the Chick-fil-A Menu (2026)",
    description: "Looking to eat healthy at Chick-fil-A? We've ranked the 10 best low-calorie, high-protein options on the menu — from grilled nuggets to salads.",
    category: "Nutrition",
    readTime: "6 min read",
    date: "2026-01-15",
    image: "/10-Healthiest-Items-on-the-Chick-fil-A-Menu-(2026).webp",
  },
  {
    slug: "breakfast-guide",
    title: "Chick-fil-A Breakfast Hours & Best Breakfast Items (2026)",
    description: "Everything you need to know about Chick-fil-A breakfast — hours, menu items, calories, and our picks for the best breakfast sandwiches.",
    category: "Breakfast",
    readTime: "5 min read",
    date: "2026-01-22",
    image: "/Chick-fil-A-Breakfast-Hours-&-Best-Breakfast-Items-(2026).webp",
  },
  {
    slug: "cheapest-ways-to-order",
    title: "How to Order Chick-fil-A the Cheapest Way",
    description: "Get the most value out of every Chick-fil-A visit — tips on meal combos, using the app, getting free items, and the best deals.",
    category: "Ordering Tips",
    readTime: "4 min read",
    date: "2026-02-01",
    image: "/How-to-Order-Chick-fil-A-the-Cheapest-Way.webp",
  },
  {
    slug: "chicken-sandwich-comparison",
    title: "Chick-fil-A vs. Popeyes vs. Wendy's: Which Has the Best Chicken Sandwich?",
    description: "We compare the most iconic fast food chicken sandwiches side by side — taste, price, calories, and value. Who wins?",
    category: "Comparison",
    readTime: "7 min read",
    date: "2026-02-10",
    image: "/Chick-fil-A-vs-Popeyes-vs-Wendy's-Which-Has-the-Best-Chicken-Sandwich.webp",
  },
  {
    slug: "secret-menu-items",
    title: "Chick-fil-A Secret Menu Items & Hacks You Should Try",
    description: "From the Double Chicken Sandwich to the Lemonade with Peach Syrup, discover the off-menu items that regulars swear by.",
    category: "Hacks",
    readTime: "5 min read",
    date: "2026-02-20",
    image: "/Chick-fil-A Secret-Menu-Items-&-Hacks-You-Should-Try.webp",
  },
  {
    slug: "keto-friendly-options",
    title: "Chick-fil-A Keto Options: What to Eat Low-Carb (2026)",
    description: "Following a keto diet? Here's your complete guide to navigating the Chick-fil-A menu low-carb — including the best items, what to avoid, and sample meal plans.",
    category: "Nutrition",
    readTime: "8 min read",
    date: "2026-08-15",
    image: "/Chick-fil-A-Keto-Options-What-You-Can-Eat-Low-Carb.webp",
  },
  {
    slug: "best-sauces-ranked",
    title: "Every Chick-fil-A Sauce Ranked: The Definitive Guide (2026)",
    description: "From the iconic Chick-fil-A Sauce to the tangy Polynesian and fiery Buffalo — we rank and review all 9 Chick-fil-A sauces so you know exactly which one to grab.",
    category: "Ordering Tips",
    readTime: "7 min read",
    date: "2026-09-02",
    image: "/Every-Chick-fil-A-Sauce-Ranked-The-Definitive-Guide-(2026).jpeg",
  },
  {
    slug: "family-meal-ideas",
    title: "Best Chick-fil-A Family Meal Ideas & Deals (2026)",
    description: "Feeding the whole family at Chick-fil-A? We break down the best family meal combinations, how to use the app for deals, and which items kids love most.",
    category: "Family",
    readTime: "6 min read",
    date: "2026-09-05",
    image: "/Best-Chick-fil-A-Family-Meal-Ideas-&-Deal-(2026).jpeg",
  },
  {
    slug: "high-protein-meals",
    title: "Highest Protein Items at Chick-fil-A: Build Your Meal (2026)",
    description: "Trying to hit your protein goals at Chick-fil-A? We rank every item by protein content and show you how to build the highest-protein meals possible.",
    category: "Nutrition",
    readTime: "8 min read",
    date: "2026-09-08",
    image: "/Highest-Protein-Items-at-Chick-fil-A-Build-Your-Meal-(2026).jpeg",
  },
  {
    slug: "ultimate-catering-guide",
    title: "The Ultimate Chick-fil-A Catering Guide for Events (2026)",
    description: "Planning a party or office lunch? Learn exactly how much food to order, tray sizes, pricing estimates, and the best catering menu combinations.",
    category: "Guides",
    readTime: "7 min read",
    date: "2026-09-12",
    image: "/The-Ultimate-Chick-fil-A-Catering-Guide-for-Events-(2026).jpeg",
  },
  {
    slug: "gluten-free-menu-guide",
    title: "Chick-fil-A Gluten-Free Menu: What's Safe to Eat? (2026)",
    description: "A complete guide to eating gluten-free at Chick-fil-A. We cover the GF bun, dedicated fryers for waffle fries, safe sauces, and cross-contamination risks.",
    category: "Nutrition",
    readTime: "9 min read",
    date: "2026-09-14",
    image: "/Chick-fil-A-Gluten-Free-Menu-What's-Safe-to-Eat-(2026).jpeg",
  },
  {
    slug: "vegetarian-vegan-options",
    title: "Vegetarian & Vegan Options at Chick-fil-A (2026 Guide)",
    description: "Yes, you can eat meatless at a chicken restaurant. Discover the best vegetarian meals, vegan-friendly sides, and secret menu salad hacks.",
    category: "Nutrition",
    readTime: "6 min read",
    date: "2026-09-16",
    image: "/Vegetarian-&-Vegan-Options-at-Chick-fil-A-(2026 Guide).jpeg",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

      <div className="mb-10">
        <h1 className="section-title">Chick-fil-A Blog</h1>
        <p className="section-subtitle">
          Expert guides, nutrition breakdowns, ordering tips, and everything you
          need to get the most out of your Chick-fil-A visit.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group card flex flex-col hover:-translate-y-1 transition-all duration-300"
          >
            {/* Thumbnail Image */}
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge-red text-xs">{post.category}</span>
              </div>
              <h2 className="font-display font-bold text-lg text-brand-dark group-hover:text-brand-red transition-colors mb-3 leading-snug">
                {post.title}
              </h2>
              <p className="text-brand-gray-text text-sm leading-relaxed flex-1 mb-4">
                {post.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-brand-gray-text">
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5" />
                  CFA Menu Guide
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
