import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Clock, User, ArrowRight } from "lucide-react";
import { getAllItems, menuCategories } from "@/lib/menu-data";
import { formatPrice } from "@/lib/utils";

export const revalidate = 86400;

const POST_META: Record<string, { title: string; description: string; date: string; readTime: string; category: string; image: string }> = {
  "healthiest-items": {
    title: "10 Healthiest Items on the Chick-fil-A Menu (2026)",
    description: "Looking for healthy options at Chick-fil-A? We ranked the top 10 low-calorie, high-protein menu items with full nutrition data so you can eat smart every visit.",
    date: "August 2026",
    readTime: "8 min read",
    category: "Nutrition",
    image: "/10-Healthiest-Items-on-the-Chick-fil-A-Menu-(2026).webp",
  },
  "breakfast-guide": {
    title: "Chick-fil-A Breakfast: Hours, Menu Items & Best Picks (2026)",
    description: "Complete guide to Chick-fil-A breakfast — including hours, every breakfast item with price and calories, and our picks for the best morning meals.",
    date: "August 2026",
    readTime: "7 min read",
    category: "Breakfast",
    image: "/Chick-fil-A-Breakfast-Hours-&-Best-Breakfast-Items-(2026).webp",
  },
  "cheapest-ways-to-order": {
    title: "How to Order Chick-fil-A the Cheapest Way (2026 Guide)",
    description: "Save money on every Chick-fil-A visit with these proven strategies — from app rewards to smart combo swaps. Here's how to get the best value at CFA.",
    date: "August 2026",
    readTime: "6 min read",
    category: "Money Saving",
    image: "/How-to-Order-Chick-fil-A-the-Cheapest-Way.webp",
  },
  "chicken-sandwich-comparison": {
    title: "Chick-fil-A vs. Popeyes vs. Wendy's Chicken Sandwich (2026)",
    description: "The Chicken Sandwich Wars continue. We compare the big three head-to-head on price, calories, protein, taste, and overall value to declare a definitive winner.",
    date: "August 2026",
    readTime: "6 min read",
    category: "Comparison",
    image: "/Chick-fil-A-vs-Popeyes-vs-Wendy's-Which-Has-the-Best-Chicken-Sandwich.webp",
  },
  "secret-menu-items": {
    title: "Chick-fil-A Secret Menu Items & Hacks (2026)",
    description: "Discover the best off-menu Chick-fil-A items and ordering hacks that regular customers swear by. These aren't on the board, but they're very real.",
    date: "August 2026",
    readTime: "7 min read",
    category: "Ordering Tips",
    image: "/Chick-fil-A Secret-Menu-Items-&-Hacks-You-Should-Try.webp",
  },
  "keto-friendly-options": {
    title: "Chick-fil-A Keto Options: What to Eat Low-Carb (2026)",
    description: "Following a keto diet? Here's your complete guide to navigating the Chick-fil-A menu low-carb — including the best items, what to avoid, and sample meal plans.",
    date: "August 2026",
    readTime: "8 min read",
    category: "Nutrition",
    image: "/Chick-fil-A-Keto-Options-What-You-Can-Eat-Low-Carb.webp",
  },
};

export async function generateStaticParams() {
  return Object.keys(POST_META).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POST_META[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://chick-fila-menus.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://chick-fila-menus.com/blog/${slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!POST_META[slug]) notFound();

  const allItems = getAllItems();
  const breakfastCat = menuCategories.find((c) => c.slug === "breakfast");
  const entreesCat = menuCategories.find((c) => c.slug === "entrees");
  const post = POST_META[slug];

  const healthyItems = allItems
    .filter((i) => i.nutrition.calories < 400 && i.nutrition.protein && i.nutrition.protein > 10)
    .sort((a, b) => (b.nutrition.protein || 0) - (a.nutrition.protein || 0))
    .slice(0, 10);

  const contentMap: Record<string, React.ReactNode> = {
    "healthiest-items": (
      <article>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Chick-fil-A has a reputation as one of the better fast food chains for nutrition — and
          that reputation is earned. Unlike most quick-service restaurants, they offer genuinely
          grilled (not just &quot;grilled-style&quot;) chicken, several salad options with real vegetables, and
          lighter sides beyond the standard fries. But with over 85 items on the menu, knowing
          which ones are actually healthy requires knowing the numbers.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          This guide ranks the 10 best low-calorie, high-protein options at Chick-fil-A using
          official nutrition data published by Chick-fil-A, Inc. Whether you&apos;re tracking macros,
          cutting calories, or just trying to make a smarter choice, these are the items to order.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">The #1 Rule: Grilled Over Fried</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Before getting into the list, here&apos;s the single most impactful thing you can do at
          Chick-fil-A: <strong>choose grilled over fried every time.</strong> The difference is
          dramatic. A fried Chick-fil-A Chicken Sandwich has 420 calories and 19g of fat. The
          Grilled Chicken Sandwich has 390 calories and only 9g of fat — with the same 28g of
          protein. That&apos;s a 10-calorie and 10-fat-gram savings on one swap.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          The pattern holds across every item category. Grilled Nuggets vs. Fried Nuggets: 130 vs.
          250 calories for an 8-count. The grilled options aren&apos;t a consolation prize — they&apos;re
          genuinely delicious and are one of the reasons Chick-fil-A stands apart in the
          nutritional landscape of fast food.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 mt-8">The 10 Healthiest Chick-fil-A Items</h2>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">#1 — Grilled Nuggets (8 ct) — 130 calories</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          The undisputed healthiest item on the entire Chick-fil-A menu. Eight pieces of
          marinated, grilled chicken breast for just 130 calories with a remarkable 25g of protein
          and only 3g of fat. For fitness-minded eaters, this is the gold standard of fast food
          protein sources. The 12-count version scales to 200 calories and 38g of protein. No
          other fast food chain offers grilled chicken this lean at this price point.
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">#2 — Egg White Grill — 300 calories</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          A breakfast powerhouse that punches well above its weight class. The Egg White Grill
          contains 26g of protein in just 300 calories, with 7g of fat on a toasted English
          muffin. It&apos;s one of the few items at any fast food chain where you genuinely feel like
          you&apos;re eating something designed with health in mind. If you&apos;re eating breakfast at
          Chick-fil-A and trying to stay under 400 calories, this is the move.
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">#3 — Fruit Cup — 70 calories</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          The lightest food item on the Chick-fil-A menu. At 70 calories, it&apos;s a side of fresh
          seasonal fruit — strawberries, blueberries, mandarin oranges, and apples — that makes
          an excellent breakfast side or afternoon snack. Compared to Waffle Fries (320 cal for a
          small), this swap saves you 250 calories.
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">#4 — Side Salad — 80 calories</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Romaine lettuce, red cabbage, carrots, and a side of dressing. Order it with the Light
          Balsamic Vinaigrette (45 cal) instead of the Avocado Lime Ranch (310 cal) and you have
          a 125-calorie side that&apos;s far more nutritious than anything fried.
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">#5 — Kale Crunch Side — 170 calories</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          One of Chick-fil-A&apos;s most underrated menu items. A blend of curly kale and green
          cabbage topped with roasted almonds and an apple cider and Dijon mustard vinaigrette.
          At 170 calories, it contains 3g of fiber and provides real nutritional value — much more
          than Waffle Fries at 320 cal for a small.
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">#6 — Grilled Chicken Sandwich — 390 calories</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          If you want a full sandwich experience and want to stay relatively light, the Grilled
          Chicken Sandwich is the best bet. At 390 calories with 28g of protein and 9g of fat, it&apos;s
          far cleaner than most competitors&apos; sandwiches. Add Zesty Buffalo Sauce (25 cal) instead
          of Honey Mustard (140 cal) to keep it lean.
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">#7 — Market Salad — 340 calories (with Light Balsamic)</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Market Salad is Chick-fil-A&apos;s most substantial healthy option — a full meal with
          grilled chicken, mixed greens, blue cheese crumbles, apple slices, strawberries, and
          harvest nut granola. Order it with the Light Balsamic Vinaigrette (45 cal) for a
          complete meal at around 340 calories. Skip the granola to cut another 40 calories.
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">#8 — Grilled Chicken Cool Wrap — 350 calories</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          A flaxseed flatbread filled with grilled chicken, green leaf lettuce, red cabbage,
          carrots, and a blend of cheeses. At 350 calories and 42g of protein, it has one of the
          best protein-to-calorie ratios on the entire menu. This is a high-protein, moderate-carb
          meal that keeps you full for hours.
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">#9 — Cobb Salad — 430 calories (with Light Balsamic)</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Grilled chicken, mixed greens, bacon, hard-boiled eggs, blue cheese, and corn. Heavier
          than the Market Salad at 430 calories, but with 44g of protein, it&apos;s an incredibly
          filling and complete meal. Great for higher-protein dietary targets.
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">#10 — Berry Parfait — 270 calories</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Vanilla Greek yogurt layered with fresh strawberries and blueberries and a granola
          topping. At 270 calories, it makes a solid breakfast or snack that&apos;s substantially lighter
          than any biscuit or sandwich option.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 mt-10">Full Rankings Table</h2>
        <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead className="bg-[#1A1A1A] text-white">
              <tr>
                <th className="px-4 py-3 text-left">Item</th>
                <th className="px-4 py-3 text-right">Calories</th>
                <th className="px-4 py-3 text-right">Protein</th>
                <th className="px-4 py-3 text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {healthyItems.map((item, i) => (
                <tr key={item.slug} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <td className="px-4 py-3">
                    <Link href={`/menu/${item.category.slug}/${item.slug}`} className="font-medium text-[#DD0033] hover:underline">
                      {item.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-right">{item.nutrition.calories}</td>
                  <td className="px-4 py-3 text-right font-medium">{item.nutrition.protein}g</td>
                  <td className="px-4 py-3 text-right font-semibold">{formatPrice(item.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">5 Key Tips for Eating Healthy at Chick-fil-A</h2>
        <div className="space-y-3 mb-8">
          {[
            { tip: "Always choose grilled over fried", detail: "Saves 100–200 calories per item. The grilled chicken at CFA is genuinely good quality." },
            { tip: "Watch your dressing", detail: "The Avocado Lime Ranch has 310 calories. The Light Balsamic has 45. That's a 265-calorie difference on your salad." },
            { tip: "Swap Waffle Fries for Kale Crunch or Fruit Cup", detail: "Save 150–250 calories and add real nutritional value to your meal." },
            { tip: "Order water or unsweetened tea", detail: "Lemonade (medium) has 200 calories. Unsweetened tea has 5. Water has 0." },
            { tip: "Go sauce-light", detail: "Chick-fil-A Sauce = 140 calories per packet. Zesty Buffalo = 25 calories. Your dipping choice matters more than most people realize." },
          ].map(({ tip, detail }) => (
            <div key={tip} className="flex gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
              <span className="text-emerald-600 font-bold mt-0.5 flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold text-[#1A1A1A] text-sm">{tip}</p>
                <p className="text-gray-600 text-sm mt-0.5">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Bottom Line</h2>
        <p className="text-gray-600 leading-relaxed">
          Eating healthy at Chick-fil-A is genuinely possible — arguably more so than at most
          comparable fast food chains. The key is knowing the right items and making smart swaps.
          Grilled Nuggets remain the undisputed best value per protein gram on the menu, and the
          salad lineup is legitimately good. Armed with the numbers above, you can hit your calorie
          and protein targets even on a fast food run.
        </p>
      </article>
    ),

    "breakfast-guide": (
      <article>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Chick-fil-A&apos;s breakfast menu is one of the most underrated in fast food. While the chain
          is best known for its lunch and dinner chicken sandwiches, the morning lineup — available
          until <strong>10:30 AM, Monday through Saturday</strong> — offers some genuinely
          excellent options for everything from a quick grab-and-go to a sit-down meal.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">Chick-fil-A Breakfast Hours</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Chick-fil-A serves breakfast from store open — typically <strong>6:00 AM to 6:30 AM</strong>{" "}
          depending on location — until exactly <strong>10:30 AM local time</strong>. At 10:30 AM
          sharp, the breakfast menu is taken down and the regular lunch menu begins. There is no
          overlap period and no exceptions.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Key breakfast hours facts:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
          <li><strong>Monday – Saturday:</strong> Breakfast served from ~6:00–6:30 AM to 10:30 AM</li>
          <li><strong>Sunday:</strong> All Chick-fil-A locations are closed — no breakfast or lunch</li>
          <li><strong>Drive-thru:</strong> Same breakfast cutoff applies at 10:30 AM</li>
          <li><strong>Delivery apps:</strong> Breakfast ordering via apps typically ends at 10:00–10:15 AM to account for delivery time</li>
        </ul>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
          <p className="text-amber-800 font-medium text-sm">
            ⏰ <strong>Pro Tip:</strong> Chick-fil-A is one of the strictest fast food chains about
            their breakfast cutoff. Unlike some competitors who will honor a breakfast order if you&apos;re
            already in line, CFA kitchen staff typically begin transitioning to lunch items by 10:25 AM.
            Arrive by 10:20 AM to safely get breakfast.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Best Chick-fil-A Breakfast Items — Our Top Picks</h2>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Best Overall: Chick-n-Minis (4 ct)</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Chick-n-Minis are the most iconic item on the Chick-fil-A breakfast menu — and for good
          reason. Mini chicken strips seasoned with honey butter nestled inside warm miniature
          yeast rolls. At 360 calories and around $4.95, they strike the perfect balance between
          indulgent and reasonable. They&apos;re finger-food sized, making them easy for on-the-go
          eating, and the honey butter rolls are genuinely one of the best bread items in fast food.
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Best Healthy Choice: Egg White Grill</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          A grilled chicken breast with folded egg whites and American cheese on a toasted multigrain
          English muffin. Just 300 calories with an impressive 26g of protein. If you&apos;re counting
          macros or watching your calorie intake, this is by far the best breakfast choice — not just
          at Chick-fil-A, but in fast food generally.
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Best Filling Option: Hash Brown Scramble Bowl</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Hash Browns, scrambled eggs, a blend of cheeses, and your choice of sausage or chicken —
          all in a bowl. At 470–570 calories depending on protein choice, this is the most
          substantial breakfast item. It&apos;s genuinely filling for 3–4 hours, making it a smart
          choice if you won&apos;t get a chance to eat again until late afternoon.
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Best Value: Chick-fil-A Chicken Biscuit</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          The original. A fried chicken breast on a warm, buttery biscuit. At around $4.65, it&apos;s
          one of the most affordable items on the breakfast menu and delivers on the core
          Chick-fil-A promise: great fried chicken. 460 calories.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 mt-10">Complete Breakfast Menu with Prices &amp; Calories</h2>
        {breakfastCat && (
          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-[#1A1A1A] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Item</th>
                  <th className="px-4 py-3 text-right">Price</th>
                  <th className="px-4 py-3 text-right">Calories</th>
                </tr>
              </thead>
              <tbody>
                {breakfastCat.items.map((item, i) => (
                  <tr key={item.slug} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-4 py-3">
                      <Link href={`/menu/breakfast/${item.slug}`} className="font-medium text-[#DD0033] hover:underline">
                        {item.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold">{formatPrice(item.price)}</td>
                    <td className="px-4 py-3 text-right">{item.nutrition.calories} cal</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Breakfast vs. Lunch: What Changes?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The breakfast menu at Chick-fil-A is entirely separate from the lunch menu. At 10:30 AM,
          all biscuits, Chick-n-Minis, scramble bowls, and breakfast-specific items come down.
          The lunch menu replaces them with the Chicken Sandwich lineup, Nuggets, Waffle Fries,
          and salads.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          One key note: the <strong>Hash Browns</strong> are a breakfast-only item. You cannot get
          them at lunch. Similarly, Waffle Fries are only available on the lunch menu. If you want
          both, you&apos;ll need two separate visits.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Bottom Line</h2>
        <p className="text-gray-600 leading-relaxed">
          Chick-fil-A breakfast is worth going out of your way for, especially the Chick-n-Minis
          and the Egg White Grill. Arrive by 10:20 AM to be safe, remember they&apos;re closed
          Sundays, and check your local store for exact opening times since a small number of
          locations open at 7:00 AM rather than 6:30 AM.
        </p>
      </article>
    ),

    "cheapest-ways-to-order": (
      <article>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Chick-fil-A is known for quality — but that quality comes at a premium compared to
          budget fast food. The good news is that with a few smart strategies, you can eat at
          Chick-fil-A regularly without breaking your budget. Here are the best, most practical
          ways to save money on every CFA visit in 2026.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">1. Use the Chick-fil-A One App (It&apos;s Free)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The single best way to save money at Chick-fil-A is the <strong>Chick-fil-A One rewards
          app</strong>. It&apos;s completely free to download and join, and it gives you points for every
          dollar you spend. Points can be redeemed for free food — including free sandwiches, free
          Waffle Fries, and free Icedream cones.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          The app also delivers <strong>exclusive offers</strong> regularly — free items for
          specific purchases, birthday rewards, and seasonal promotions that aren&apos;t available
          at the counter. If you eat at Chick-fil-A even once a month, you&apos;re leaving free food
          on the table by not using the app.
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
          <p className="text-emerald-800 font-medium text-sm">
            💡 <strong>How points work:</strong> You earn 10 points per dollar spent as a Member.
            Silver members earn 11 points/dollar, Red members earn 12. A free entree typically
            costs 1,200–2,500 points, meaning regular visitors can earn free meals in 2–4 weeks.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">2. Order À La Carte Instead of Combos</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Chick-fil-A combo meals aren&apos;t always the best value — especially if you don&apos;t want or
          need a drink. Compare the math:
        </p>
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 mb-4">
          <p className="font-bold text-[#1A1A1A] mb-3">Combo vs. À La Carte Example</p>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between"><span>Chicken Sandwich + Small Waffle Fries + Medium Drink combo</span><span className="font-bold">~$11.50</span></div>
            <div className="flex justify-between"><span>Chicken Sandwich (à la carte)</span><span>$4.95</span></div>
            <div className="flex justify-between"><span>Small Waffle Fries (à la carte)</span><span>$2.35</span></div>
            <div className="flex justify-between"><span>Water (free)</span><span>$0.00</span></div>
            <div className="flex justify-between font-bold text-emerald-700 pt-2 border-t border-gray-200 mt-2"><span>À La Carte Total</span><span>$7.30</span></div>
          </div>
          <p className="text-emerald-700 font-bold text-sm mt-3">💰 Savings: ~$4.20 per meal</p>
        </div>
        <p className="text-gray-600 leading-relaxed mb-8">
          Over a month of weekly visits, that&apos;s over $16 saved just by ordering water. Chick-fil-A
          will give you a free cup of water at the counter — always ask for it.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">3. The Absolute Cheapest Full Meal</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          If you want the most food for the least money at Chick-fil-A, here&apos;s the optimal order:
        </p>
        <ul className="list-none space-y-2 mb-6">
          {[
            { item: "4-count Grilled Nuggets", price: "~$5.19", cal: "65 cal" },
            { item: "Small Waffle Fries", price: "~$2.35", cal: "320 cal" },
            { item: "Water (free)", price: "$0.00", cal: "0 cal" },
          ].map(({ item, price, cal }) => (
            <li key={item} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm">
              <span className="font-medium text-[#1A1A1A]">{item}</span>
              <div className="flex gap-4 text-gray-500">
                <span>{cal}</span>
                <span className="font-bold text-[#DD0033]">{price}</span>
              </div>
            </li>
          ))}
          <li className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-sm font-bold">
            <span className="text-[#1A1A1A]">Total</span>
            <span className="text-emerald-700">~$7.54</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">4. Best Value by Price-Per-Calorie</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          If sheer caloric value per dollar is your goal (useful for feeding growing teenagers or
          anyone with a high metabolism), here are the standout items:
        </p>
        <div className="space-y-3 mb-8">
          {[
            { item: "Waffle Potato Fries (Large)", price: "$3.45", cal: 480, ratio: "139 cal/$1" },
            { item: "Icedream Cone", price: "$1.79", cal: 180, ratio: "101 cal/$1" },
            { item: "Mac & Cheese (Medium)", price: "$4.45", cal: 440, ratio: "99 cal/$1" },
            { item: "Chick-n-Strips 4ct", price: "$5.19", cal: 340, ratio: "65 cal/$1" },
          ].map(({ item, price, cal, ratio }) => (
            <div key={item} className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-200 text-sm">
              <span className="font-medium text-[#1A1A1A]">{item}</span>
              <div className="flex gap-6 text-gray-500">
                <span>{price}</span>
                <span>{cal} cal</span>
                <span className="font-bold text-[#DD0033]">{ratio}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">5. Don&apos;t Pay for Sauces You Don&apos;t Need</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Each extra dipping sauce at Chick-fil-A costs $0.35. With a nugget order, you typically
          get 1 free sauce — make sure to ask for it if the cashier doesn&apos;t automatically include
          it. If you&apos;re ordering multiple sauces regularly, that adds $1–2 per visit, or
          $50–100 per year for regular visitors.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Bottom Line</h2>
        <p className="text-gray-600 leading-relaxed">
          The biggest savings at Chick-fil-A come from two simple habits: using the free
          Chick-fil-A One app to earn points, and ordering water instead of a combo drink.
          Combined, these two changes can save you $5–8 per visit — which adds up to significant
          money over time for regular CFA customers.
        </p>
      </article>
    ),

    "chicken-sandwich-comparison": (
      <article>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          The Chicken Sandwich Wars started in 2019 when Popeyes launched their legendary
          chicken sandwich and the internet broke. Since then, virtually every major fast food
          chain has upgraded or launched a chicken sandwich. In 2026, the competition is fiercer
          than ever — but three chains consistently top the rankings: Chick-fil-A, Popeyes, and
          Wendy&apos;s. We&apos;re putting them head-to-head on what actually matters.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 mt-8">The Contenders</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { name: "Chick-fil-A Classic Sandwich", price: "$4.95", cal: 420, protein: "29g", fat: "19g" },
            { name: "Popeyes Chicken Sandwich", price: "~$5.49", cal: 699, protein: "28g", fat: "42g" },
            { name: "Wendy's Classic Chicken", price: "~$5.19", cal: 490, protein: "29g", fat: "19g" },
          ].map(({ name, price, cal, protein, fat }) => (
            <div key={name} className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-3">{name}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Price</span><span className="font-bold text-[#DD0033]">{price}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Calories</span><span className="font-bold">{cal}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Protein</span><span className="font-bold">{protein}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Total Fat</span><span className="font-bold">{fat}</span></div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Round 1: Calories &amp; Nutrition — Winner: Chick-fil-A</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The calorie gap between these sandwiches is enormous. Chick-fil-A comes in at 420
          calories. Wendy&apos;s Classic is 490. But Popeyes is a shocking 699 calories — nearly 70%
          more than Chick-fil-A. The fat content tells the same story: Popeyes packs 42g of fat
          compared to Chick-fil-A&apos;s 19g.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          For calorie-conscious customers, Chick-fil-A wins this round decisively. Wendy&apos;s is
          respectable at 490. Popeyes is a treat, not a daily choice.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Round 2: Price — Winner: Chick-fil-A</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          At approximately $4.95, Chick-fil-A&apos;s Classic Sandwich is the most affordable of the
          three premium chicken sandwiches. Wendy&apos;s Classic Chicken runs about $5.19, and
          Popeyes is $5.49. In an era of significant fast food price inflation, CFA&apos;s pricing
          remains notably competitive for the quality delivered.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Round 3: Taste &amp; Quality — It&apos;s Complicated</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          This is where personal preference dominates, but we can identify objective differences:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-6">
          <li>
            <strong>Chick-fil-A:</strong> Consistently marinated, perfectly seasoned breast meat
            with signature pickle chips on a butter-toasted bun. The most consistent experience
            across all locations.
          </li>
          <li>
            <strong>Popeyes:</strong> Thick, crunchy, spicy breading that delivers a more indulgent
            experience. The buttery brioche bun is excellent. But inconsistency across locations
            is a known issue — some Popeyes sandwiches are transcendent, others disappointing.
          </li>
          <li>
            <strong>Wendy&apos;s:</strong> Fresh (never frozen) chicken that&apos;s reliably good, though
            typically missing the flavour complexity of CFA&apos;s marination or Popeyes&apos; crunch.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Round 4: Consistency — Winner: Chick-fil-A</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Chick-fil-A&apos;s operational standards are among the highest in fast food. Their kitchen
          procedures, training, and quality control result in a remarkably consistent product
          across thousands of locations. When you order a Chicken Sandwich at CFA in Atlanta vs.
          Los Angeles vs. Chicago, you get the same sandwich. This consistency is one of the brand&apos;s
          most underrated strengths.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">The Verdict</h2>
        <div className="bg-[#DD0033] text-white rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-3">Overall Winner: Chick-fil-A</h3>
          <p className="text-white/90 leading-relaxed">
            Chick-fil-A wins on price, nutrition, and consistency. Their Classic Chicken Sandwich
            delivers the best overall value — lower calories, lower fat, lower price, and the most
            reliable experience. Popeyes wins on sheer indulgence and crunch. Wendy&apos;s is a solid
            daily driver. But for most customers, most of the time, Chick-fil-A is the right answer.
          </p>
        </div>
      </article>
    ),

    "secret-menu-items": (
      <article>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Chick-fil-A doesn&apos;t officially publish a &quot;secret menu&quot; — but their team members are
          famously accommodating and trained to make guests happy. That culture of service has
          produced a long list of off-menu items and modifications that regular customers swear
          by. None of these are guaranteed at every location, but most Chick-fil-A restaurants
          will honor them if you ask politely.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">The Official Disclaimer</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          These items are customer-discovered modifications, not official Chick-fil-A menu items.
          Success depends on the individual location and its team members. Always be polite when
          requesting off-menu customizations — CFA staff are not obligated to fulfill them.
          Pricing may vary.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">1. Double Chicken Sandwich</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Ask for two chicken filets on a standard Chicken Sandwich. Most locations will add a
          second filet for an additional charge (typically $3–4 extra). The result is a
          double-stacked sandwich with 840 calories and 58g of protein. It&apos;s not on the board,
          but it&apos;s one of the most commonly fulfilled special requests.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">2. Peach Milkshake (Year-Round)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Chick-fil-A&apos;s Peach Milkshake is technically a seasonal item, but some locations will
          blend a Peach Milkshake year-round if they have peach syrup in stock (they keep it for
          the Peach Frosted Lemonade). Worth asking at the counter rather than the drive-thru.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">3. Lemonade + Peach Syrup</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Ask for peach syrup added to your regular lemonade. This is a lighter, fresher version
          of the Peach Frosted Lemonade without the ice cream. Most locations can do this. It&apos;s a
          fantastic summer drink that&apos;s 150–200 fewer calories than the frosted version.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">4. Spicy Grilled Chicken Sandwich</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The menu has a Spicy Chicken Sandwich (fried) and a Grilled Chicken Sandwich, but no
          Spicy Grilled Chicken Sandwich. Ask your team member to put a grilled filet on a Spicy
          Deluxe bun or to season a grilled filet with spicy seasoning. Some locations can do
          this, giving you a significantly lower-fat spicy option.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">5. Nuggets in a Biscuit (Breakfast Only)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          During breakfast hours, ask for nuggets served inside a Buttery Biscuit. Some locations
          will accommodate this, creating an off-menu Chicken Biscuit made with nuggets instead of
          a whole filet. It&apos;s a slightly different texture experience — the nuggets&apos; breading
          against the biscuit is a fan favourite.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">6. The &quot;Gold Standard&quot; Sauce Mix</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Mix equal parts Chick-fil-A Sauce and Polynesian Sauce in your dipping cup. The result
          is a sweet-savory-smoky-tangy combination that many regulars consider superior to either
          sauce alone. Both are available as dipping sauces with any order.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">7. Grilled Chicken Strips</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Chick-fil-A sells Chick-n-Strips as fried only. But some locations will grill the chicken
          strips on request. This is less common than other secret items but worth asking — you&apos;ll
          get the strip format with significantly fewer calories.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">8. Saucy Nuggets</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Ask your team member to toss your nuggets in sauce before plating rather than serving
          the sauce on the side. Common sauce choices: Chick-fil-A Sauce, Polynesian, or Buffalo.
          This is especially popular with Grilled Nuggets tossed in Buffalo sauce.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Bottom Line</h2>
        <p className="text-gray-600 leading-relaxed">
          The key to success with Chick-fil-A secret menu items is attitude — ask politely and
          understand that not every location will fulfill every request. The double sandwich and
          the sauce mix are the most reliably available. The seasonal milkshake year-round is hit
          or miss. But given CFA&apos;s service culture, it&apos;s almost always worth asking.
        </p>
      </article>
    ),

    "keto-friendly-options": (
      <article>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Navigating Chick-fil-A on a ketogenic diet is more straightforward than most fast food
          chains — if you know what to look for. The challenge is that many of CFA&apos;s signature
          items are breaded and served on buns, adding significant carbs to otherwise keto-friendly
          proteins. With the right modifications and item choices, however, you can put together
          very solid keto meals at Chick-fil-A.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">What is Keto? (Quick Reminder)</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          A ketogenic diet typically limits net carbohydrate intake to <strong>20–50g per day</strong>{" "}
          to maintain ketosis. Net carbs = Total Carbs – Fiber. At Chick-fil-A, the biggest sources
          of carbs are buns, biscuits, breading, Waffle Fries, and sweet beverages. Avoiding or
          modifying these gets you most of the way there.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">The Best Keto Items at Chick-fil-A</h2>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">🏆 #1: Grilled Nuggets (8 ct) — 1g net carbs</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          The crown jewel of keto-friendly Chick-fil-A. Eight grilled chicken breast pieces with
          just 1g of net carbs, 25g of protein, 3g of fat, and only 130 calories. This is one of
          the most macro-efficient items in all of fast food — period. For keto dieters, this
          should be a near-daily staple when visiting CFA.
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">2. Grilled Chicken Sandwich (No Bun) — ~5g net carbs</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Order the Grilled Chicken Sandwich and ask them to hold the bun. You get the marinated
          grilled filet, lettuce, and tomato wrapped in the lettuce or on the side. Approximately
          5g of net carbs, 28g of protein, 9g of fat.
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">3. Cobb Salad (No Croutons) — ~8g net carbs</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Cobb Salad without croutons is an excellent full keto meal — mixed greens, grilled
          chicken, bacon pieces, hard-boiled egg, Colby Jack cheese, and corn. With the Light
          Balsamic Vinaigrette (45 cal, ~6g carbs), total net carbs come to approximately 8g and
          protein hits 44g. This is a complete meal.
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">4. Market Salad (No Granola, Light Balsamic) — ~15g net carbs</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Market Salad with granola removed and Light Balsamic on the side. The apple slices
          and seasonal berries add some natural sugar, bringing net carbs to approximately 15g —
          acceptable for most keto dieters eating one moderate-carb meal per day.
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">5. Grilled Cool Wrap (No Ranch) — ~28g net carbs</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          The flaxseed flatbread adds ~28g of net carbs, which may be too high for strict keto
          but works for low-carb eaters following a more flexible approach. Skip the Avocado Lime
          Ranch (high carb sauce) and the protein-to-carb ratio is excellent at 42g protein.
        </p>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 mt-8">Keto-Friendly Sauces</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {[
            { sauce: "Zesty Buffalo Sauce", carbs: "1g", verdict: "✅ Best keto choice" },
            { sauce: "Garden Herb Ranch", carbs: "1g", verdict: "✅ Great choice" },
            { sauce: "Honey Mustard (packet)", carbs: "6g", verdict: "⚠️ Use sparingly" },
            { sauce: "Chick-fil-A Sauce", carbs: "6g", verdict: "⚠️ Use sparingly" },
            { sauce: "Polynesian Sauce", carbs: "13g", verdict: "❌ Skip on strict keto" },
            { sauce: "Honey Roasted BBQ", carbs: "11g", verdict: "❌ Too many carbs" },
          ].map(({ sauce, carbs, verdict }) => (
            <div key={sauce} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm">
              <span className="font-medium text-[#1A1A1A]">{sauce}</span>
              <div className="flex gap-3 items-center">
                <span className="text-gray-500">{carbs} carbs</span>
                <span className="text-xs">{verdict}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">What to Avoid on Keto</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
          <li><strong>All biscuits and muffins</strong> (30–40g carbs each)</li>
          <li><strong>Waffle Potato Fries</strong> (43g carbs for small, 67g for large)</li>
          <li><strong>Breaded chicken sandwiches</strong> (the breading alone adds ~20g carbs)</li>
          <li><strong>Lemonade and sweet beverages</strong> (medium lemonade = 56g sugar)</li>
          <li><strong>Milkshakes and Frosted Lemonade</strong> (70–90g carbs)</li>
          <li><strong>Mac &amp; Cheese</strong> (28g carbs for small)</li>
          <li><strong>Hash Browns</strong> (30g carbs)</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Sample Keto Meals at Chick-fil-A</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "High-Protein Keto Meal (130 cal)",
              items: ["Grilled Nuggets 8ct (1g net carbs)", "Water (0 cal)", "Zesty Buffalo Sauce (1g carbs)"],
              total: "~2g net carbs | 25g protein | 130 cal",
            },
            {
              title: "Full Keto Lunch (~430 cal)",
              items: ["Cobb Salad, no croutons (44g protein)", "Light Balsamic Vinaigrette", "Unsweetened Iced Tea (0 cal)"],
              total: "~8g net carbs | 44g protein | ~430 cal",
            },
          ].map(({ title, items, total }) => (
            <div key={title} className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A1A1A] mb-3">{title}</h3>
              <ul className="space-y-1 mb-3">
                {items.map((item) => (
                  <li key={item} className="text-gray-600 text-sm flex gap-2">
                    <span className="text-emerald-600">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-emerald-700 font-bold text-sm">{total}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Bottom Line</h2>
        <p className="text-gray-600 leading-relaxed">
          Chick-fil-A is genuinely one of the better fast food options for keto dieters. The
          Grilled Nuggets are a near-perfect keto food. The salads (without croutons and with
          light dressing) are complete, satisfying meals. The main things to avoid are obvious:
          buns, breading, Waffle Fries, and sweet beverages. Master those swaps and you can eat
          at CFA regularly on a strict ketogenic diet.
        </p>
      </article>
    ),
  };

  const content = contentMap[slug];
  if (!content) notFound();

  // Related posts
  const relatedPosts = Object.entries(POST_META)
    .filter(([s]) => s !== slug)
    .slice(0, 3);

  const siteUrl = "https://chick-fila-menus.com";

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteUrl}/blog/${slug}#article`,
        headline: post.title,
        description: post.description,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}${post.image}`,
        },
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Organization",
          name: "CFA Menu Guide",
          url: siteUrl,
        },
        publisher: {
          "@type": "Organization",
          name: "CFA Menu Guide",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/icon.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteUrl}/blog/${slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${siteUrl}/blog/${slug}` },
        ],
      },
    ],
  };

  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${slug}` },
        ]}
      />

      <div className="mt-8 grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Article Header */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#EAE3D5] overflow-hidden mb-6">
            {/* Hero Image */}
            {post.image && (
              <div className="aspect-[16/7] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6 md:p-8">
              <span className="inline-block bg-[#DD0033]/10 text-[#DD0033] text-xs font-bold px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="font-display font-black text-2xl md:text-3xl text-[#1A1A1A] mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-gray-600 leading-relaxed mb-5">{post.description}</p>
              <div className="flex items-center gap-5 text-sm text-gray-500 border-t border-gray-100 pt-4">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  <span>CFA Menu Guide Editorial Team</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <span>{post.date}</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#EAE3D5] p-6 md:p-8 text-[#1A1A1A]">
            {content}
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-500">
            <strong>Disclaimer:</strong> CFA Menu Guide is an independent fan site and is not
            affiliated with Chick-fil-A, Inc. Prices shown are US national average estimates.
            Nutrition data sourced from official Chick-fil-A nutrition publications. Always verify
            prices and nutrition at your local restaurant.
          </div>

          <div className="mt-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#DD0033] font-bold hover:underline">
              ← Back to All Articles
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Related Posts */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#EAE3D5] p-5">
            <h3 className="font-bold text-[#1A1A1A] mb-4">More Articles</h3>
            <div className="space-y-3">
              {relatedPosts.map(([relSlug, relPost]) => (
                <Link
                  key={relSlug}
                  href={`/blog/${relSlug}`}
                  className="block p-3 rounded-xl hover:bg-[#FCFAF5] border border-transparent hover:border-[#EAE3D5] transition-all group"
                >
                  <span className="text-xs font-bold text-[#DD0033] uppercase tracking-wider">{relPost.category}</span>
                  <p className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#DD0033] mt-1 leading-snug">{relPost.title}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                    <Clock className="w-3 h-3" />
                    <span>{relPost.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#EAE3D5] p-5">
            <h3 className="font-bold text-[#1A1A1A] mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: "Full Menu with Prices", href: "/menu" },
                { label: "Nutrition Guide", href: "/nutrition" },
                { label: "Coupons & Deals", href: "/coupons" },
                { label: "CFA Hours", href: "/hours" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#FCFAF5] text-sm text-gray-600 hover:text-[#DD0033] transition-colors"
                >
                  <span>{label}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
