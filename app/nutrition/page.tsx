import type { Metadata } from "next";
import Link from "next/link";
import { Info, Leaf, Heart } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdUnit";
import FAQAccordion from "@/components/FAQAccordion";
import {
  breakfastNutrition,
  entreesNutrition,
  saladsNutrition,
  sidesNutrition,
  treatsNutrition,
  drinksNutrition,
  saucesNutrition,
} from "@/lib/nutrition-data";

export const metadata: Metadata = {
  title: "Chick-fil-A Nutrition Menu with Calories (2026 Updated)",
  description:
    "Complete Chick-fil-A nutrition facts including calories, fat, protein, carbs, and sugar for all menu items. Find healthy options and detailed info.",
};

const faqs = [
  {
    question: "How many calories are in a Chick-fil-A Chicken Sandwich?",
    answer:
      "A classic Chick-fil-A Chicken Sandwich contains 420 calories, with 18g of fat, 41g of carbs, and 29g of protein.",
  },
  {
    question: "What is the lowest calorie item at Chick-fil-A?",
    answer:
      "The Fruit Cup (70 calories) and Buddy Fruits Apple Sauce (45 calories) are among the lowest calorie food items. For entrees, the 8-count Grilled Nuggets are the lowest at just 130 calories.",
  },
  {
    question: "Which Chick-fil-A items have the highest calories?",
    answer:
      "The Cobb Salad (830 calories with dressing), Hash Brown Scramble Burrito (700 calories), and Peppermint Chip Milkshake (670 calories) are among the highest calorie items on the menu.",
  },
  {
    question: "Do Chick-fil-A sauces add extra calories?",
    answer:
      "Yes, sauces can significantly increase the calorie count of your meal. For example, a packet of Chick-fil-A Sauce adds 140 calories, while Zesty Buffalo Sauce adds only 25 calories.",
  },
  {
    question: "Are Chick-fil-A nutrition values the same at every location?",
    answer:
      "Nutrition values are standardized, but slight variations may occur due to hand-preparation methods, local ingredient sourcing, and specific custom orders.",
  },
];

const healthyOptions = [
  { name: "Fruit Cup", cals: "70 Calories" },
  { name: "Grilled Nuggets (8-ct)", cals: "130 Calories" },
  { name: "Market Salad", cals: "550 Calories" },
  { name: "Kale Crunch Side", cals: "170 Calories" },
  { name: "Icedream Cone", cals: "180 Calories" },
];

function NutritionTable({
  title,
  description,
  data,
  hasFiber = true,
  link,
}: {
  title: string;
  description: string;
  data: any[];
  hasFiber?: boolean;
  link?: string;
}) {
  return (
    <div className="mb-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
        <div>
          <h2 className="font-display font-bold text-3xl text-[#1A1A1A]">
            {title}
          </h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
        {link && (
          <Link
            href={link}
            className="text-[#DD0033] font-bold hover:underline whitespace-nowrap"
          >
            View Complete Menu &rarr;
          </Link>
        )}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-[#EAE3D5] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#FCFAF5] border-b border-[#EAE3D5] text-xs text-gray-600 uppercase tracking-wider">
                <th className="py-4 px-4 font-bold text-[#1A1A1A] whitespace-nowrap">Item</th>
                <th className="py-4 px-3 font-bold text-center whitespace-nowrap">Calories</th>
                <th className="py-4 px-3 font-bold text-center whitespace-nowrap">Fat (g)</th>
                <th className="py-4 px-3 font-bold text-center whitespace-nowrap">Sat Fat (g)</th>
                <th className="py-4 px-3 font-bold text-center whitespace-nowrap">Chol (mg)</th>
                <th className="py-4 px-3 font-bold text-center whitespace-nowrap">Sodium (mg)</th>
                <th className="py-4 px-3 font-bold text-center whitespace-nowrap">Carbs (g)</th>
                {hasFiber && (
                  <th className="py-4 px-3 font-bold text-center whitespace-nowrap">Fiber (g)</th>
                )}
                <th className="py-4 px-3 font-bold text-center whitespace-nowrap">Sugar (g)</th>
                <th className="py-4 px-3 font-bold text-center whitespace-nowrap">Protein (g)</th>
              </tr>
            </thead>
            <tbody className="text-[#1A1A1A] text-sm">
              {data.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 font-bold text-gray-800">
                    {item.name}
                  </td>
                  <td className="py-3 px-3 text-center font-bold text-[#DD0033]">
                    {item.cal}
                  </td>
                  <td className="py-3 px-3 text-center">{item.fat}</td>
                  <td className="py-3 px-3 text-center">{item.satFat}</td>
                  <td className="py-3 px-3 text-center">{item.chol}</td>
                  <td className="py-3 px-3 text-center">{item.sod}</td>
                  <td className="py-3 px-3 text-center">{item.carb}</td>
                  {hasFiber && (
                    <td className="py-3 px-3 text-center">{item.fiber}</td>
                  )}
                  <td className="py-3 px-3 text-center">{item.sugar}</td>
                  <td className="py-3 px-3 text-center font-bold">
                    {item.protein}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function NutritionPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Nutrition", href: "/nutrition" },
        ]}
      />

      <AdUnit type="leaderboard" />

      {/* Hero Section */}
      <div className="mt-8 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-sm mb-6 border border-emerald-100">
          <Leaf className="w-4 h-4 fill-current" />
          Nutrition Guide
        </div>
        <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-4 leading-tight max-w-4xl">
          Chick-fil-A Nutrition Menu with Calories (2026 Updated)
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-4xl leading-relaxed">
          The Chick-fil-A nutrition menu makes it easier to understand the
          calories and nutritional values of your favorite menu items without
          any guesswork. Whether you’re checking calories for a sandwich,
          nuggets, or a milkshake, having clear nutrition information helps you
          make more informed choices.
        </p>
      </div>

      <div className="w-full">
        <div className="max-w-none text-gray-700 mb-12 leading-relaxed space-y-4">
          <h2 className="font-display font-bold text-3xl text-[#1A1A1A]">
            Chick-fil-A Nutrition Overview
          </h2>
          <p>
            The Chick-fil-A nutrition menu includes calorie information for a
            wide range of items, from chicken sandwiches and nuggets to sides,
            drinks, and desserts. Each item comes with its own calorie count,
            allowing customers to quickly compare options and understand the
            nutritional value of their meal.
          </p>
          <p>
            Below is a complete overview of Chick-fil-A menu items along with
            their calories, making it easier to find accurate nutrition details
            in one place.
          </p>

          <h2 className="font-display font-bold text-3xl text-[#1A1A1A] mt-10">
            Chick-fil-A Nutrition Facts by Menu Category
          </h2>
          <p>
            The menu at Chick-fil-A features a wide range of items, with calorie
            counts and nutrition varying across different categories. From
            lighter grilled options to more filling sandwiches and indulgent
            desserts, each section offers something different in terms of
            calories and nutrients. Below is a breakdown of Chick-fil-A
            nutrition by major menu categories.
          </p>
        </div>

        <AdUnit type="responsive" />
        <div className="mt-12"></div>

        {/* Tables */}
        <NutritionTable
          title="Breakfast Nutrition"
          description="Breakfast items at Chick-fil-A show a noticeable range in calories depending on portion size and ingredients."
          data={breakfastNutrition}
          link="/menu/breakfast"
        />

        <NutritionTable
          title="Entrées Nutrition"
          description="Entrées vary in calories mainly due to preparation style (fried vs grilled) and serving size."
          data={entreesNutrition}
          link="/menu/entrees"
        />

        <NutritionTable
          title="Salads Nutrition"
          description="Salads can vary widely in calories based on included ingredients like fried chicken and dressing choice."
          data={saladsNutrition}
          link="/menu/salads"
        />

        <NutritionTable
          title="Sides Nutrition"
          description="Side items vary from lighter options like fruit cups to heavier choices like Mac & Cheese."
          data={sidesNutrition}
          link="/menu/sides"
        />

        <NutritionTable
          title="Treats Nutrition"
          description="Treats are typically among the higher-calorie items, though Icedream cups offer lighter alternatives."
          data={treatsNutrition}
          link="/menu/treats"
        />

        <NutritionTable
          title="Drinks Nutrition"
          description="Beverages show a wide calorie range depending on added sugars versus diet or unsweetened options."
          data={drinksNutrition}
          link="/menu/beverages"
        />

        <NutritionTable
          title="Sauces Nutrition"
          description="Sauces may be served in small portions, but their calorie impact can add up quickly."
          data={saucesNutrition}
          hasFiber={false}
        />

        {/* More Prose */}
        <div className="max-w-none text-gray-700 mb-12 leading-relaxed space-y-4">
          <h2 className="font-display font-bold text-3xl text-[#1A1A1A]">
            Popular Chick-fil-A Items and Their Calories
          </h2>
          <p>
            Several items on the Chick-fil-A menu are consistently popular, and
            their calorie counts can vary depending on ingredients and
            preparation. Items like the Chick-fil-A Chicken Sandwich and Waffle
            Fries are among the most commonly ordered, typically falling in the
            mid to higher calorie range, while options such as Grilled Nuggets
            provide a lighter alternative with lower calorie values.
          </p>
          <p>
            Milkshakes and desserts are also widely ordered but tend to be
            higher in calories due to added sugar and fat, whereas simpler menu
            items generally contain fewer calories. Reviewing the nutrition
            details of these popular items helps give a better understanding of
            how different choices can impact overall calorie intake.
          </p>

          <h2 className="font-display font-bold text-3xl text-[#1A1A1A] mt-10">
            Chick-fil-A Nutrition Facts & Information
          </h2>
          <p>
            The Chick-fil-A nutrition information is based on standard serving
            sizes, but actual values may vary slightly depending on location,
            preparation, and customization. Factors such as added sauces, extra
            toppings, or portion changes can affect the final calorie and
            nutrient content of each item.
          </p>
          <p>
            Chick-fil-A provides detailed nutrition data for its menu, including
            calories, fat, protein, and other key values, allowing customers to
            review accurate information before placing an order. Checking
            official nutrition sources or in-store details can help ensure the
            most up-to-date and reliable information.
          </p>

          <h2 className="font-display font-bold text-3xl text-[#1A1A1A] mt-10">
            Final Words
          </h2>
          <p>
            The Chick-fil-A nutrition menu provides a clear overview of calories
            and key nutrition details across all major categories, including
            breakfast, entrées, salads, sides, drinks, and sauces. With a wide
            range of options available, calorie values can vary significantly
            depending on the item and portion size.
          </p>
          <p>
            Reviewing Chick-fil-A calories and nutrition information makes it
            easier to compare menu items and understand what you’re ordering.
            Whether choosing a full meal or a single item, having access to
            accurate nutrition data helps in making more informed decisions.
          </p>
        </div>

        <div className="mt-16">
          <FAQAccordion items={faqs} title="Nutrition FAQs" />
        </div>
      </div>
    </div>
  );
}
