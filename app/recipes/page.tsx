import type { Metadata } from "next";
import Link from "next/link";
import { Utensils, Clock, Users, Flame, ChefHat } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdUnit";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Copycat Chick-fil-A Recipes | Make It At Home",
  description:
    "Love Chick-fil-A? Learn how to make the famous Chicken Sandwich, Chick-fil-A Sauce, Nuggets, and more right in your own kitchen with these 5 authentic copycat recipes.",
  openGraph: {
    title: "5 Best Copycat Chick-fil-A Recipes",
    url: "/recipes",
  },
};

const recipes = [
  {
    id: "chicken-sandwich",
    title: "Copycat Chick-fil-A Chicken Sandwich",
    description: "The classic crispy, juicy chicken breast with pickle juice brine and toasted buttery buns.",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: 4,
    calories: "450 cal",
    ingredients: [
      "2 boneless, skinless chicken breasts (halved)",
      "1/2 cup pickle juice (for brining)",
      "1 cup all-purpose flour",
      "2 tbsp powdered sugar",
      "1 tsp paprika",
      "1 tsp salt & 1/2 tsp black pepper",
      "1 large egg + 1/2 cup milk (for egg wash)",
      "Peanut oil (for frying)",
      "4 Hamburger buns (buttered & toasted)",
      "Sliced dill pickles"
    ],
    instructions: [
      "Marinate the chicken halves in pickle juice for 30-60 minutes.",
      "Whisk egg and milk in one bowl. In another, mix flour, powdered sugar, paprika, salt, and pepper.",
      "Dip chicken into egg wash, then coat thoroughly in the flour mixture.",
      "Heat peanut oil in a large skillet to 350°F (175°C). Fry chicken for 4-5 minutes per side until golden brown and cooked through (165°F internal temp).",
      "Toast the buttered buns. Place 2 pickle slices on the bottom bun, add the fried chicken, and cover with the top bun."
    ]
  },
  {
    id: "chick-fil-a-sauce",
    title: "Homemade Chick-fil-A Sauce",
    description: "That sweet, smoky, and tangy magic sauce that goes perfectly with everything.",
    prepTime: "5 mins",
    cookTime: "0 mins",
    servings: 8,
    calories: "140 cal",
    ingredients: [
      "1/2 cup mayonnaise",
      "2 tsp Dijon mustard",
      "2 tsp lemon juice",
      "2 tbsp BBQ sauce (smoky flavor preferred)",
      "2 tbsp honey"
    ],
    instructions: [
      "In a small mixing bowl, combine mayonnaise, Dijon mustard, lemon juice, BBQ sauce, and honey.",
      "Whisk all ingredients together until smooth and well blended.",
      "Cover and refrigerate for at least 1 hour to let the flavors meld together before serving.",
      "Store in an airtight container in the fridge for up to 2 weeks."
    ]
  },
  {
    id: "chicken-nuggets",
    title: "Copycat Chick-fil-A Nuggets",
    description: "Bite-sized pieces of perfection, brined and fried to golden crispiness.",
    prepTime: "30 mins",
    cookTime: "10 mins",
    servings: 4,
    calories: "250 cal",
    ingredients: [
      "2 boneless, skinless chicken breasts (cut into bite-sized pieces)",
      "1/2 cup pickle juice + 1/2 cup milk (for brining)",
      "1 cup all-purpose flour",
      "2 tbsp powdered sugar",
      "1/2 tsp paprika, 1/2 tsp salt, 1/4 tsp pepper",
      "1 egg + 1/4 cup milk",
      "Peanut oil for frying"
    ],
    instructions: [
      "Soak the chicken pieces in the pickle juice and milk mixture for 30 minutes in the fridge.",
      "Drain the chicken. Dip pieces into the egg/milk wash.",
      "Toss them in the flour mixture (flour, powdered sugar, spices) until evenly coated.",
      "Fry in 350°F peanut oil for 3-4 minutes until golden brown and crispy.",
      "Drain on a paper towel and serve hot with homemade Chick-fil-A sauce!"
    ]
  },
  {
    id: "mac-and-cheese",
    title: "Copycat Mac & Cheese",
    description: "A rich, creamy, multi-cheese baked macaroni just like the restaurant's famous side.",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: 6,
    calories: "450 cal",
    ingredients: [
      "8 oz elbow macaroni",
      "1/4 cup butter",
      "2 tbsp all-purpose flour",
      "1 cup whole milk + 1/2 cup heavy cream",
      "1 cup shredded sharp cheddar cheese",
      "1/2 cup shredded Parmesan cheese",
      "1/2 cup shredded Romano cheese",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Boil macaroni according to package instructions until al dente. Drain.",
      "In a saucepan, melt butter over medium heat. Whisk in flour and cook for 1 minute.",
      "Gradually pour in milk and heavy cream, whisking constantly until the mixture thickens.",
      "Remove from heat and stir in the cheddar, Parmesan, and Romano cheeses until melted.",
      "Fold the macaroni into the cheese sauce. Transfer to a baking dish, top with a little extra cheddar, and bake at 350°F for 15-20 minutes until bubbly."
    ]
  },
  {
    id: "frosted-lemonade",
    title: "Copycat Frosted Lemonade",
    description: "The ultimate refreshing summer treat blending classic lemonade and vanilla ice cream.",
    prepTime: "5 mins",
    cookTime: "0 mins",
    servings: 2,
    calories: "330 cal",
    ingredients: [
      "1/2 cup fresh lemon juice (about 3-4 lemons)",
      "1/4 cup granulated sugar",
      "1/2 cup water",
      "3 cups premium vanilla ice cream"
    ],
    instructions: [
      "First, make the lemonade base by stirring the fresh lemon juice, sugar, and water until the sugar is completely dissolved.",
      "Add the lemonade mixture and the vanilla ice cream to a blender.",
      "Blend on medium-high until perfectly smooth and creamy.",
      "Pour into chilled glasses and garnish with a lemon slice if desired. Serve immediately with a straw."
    ]
  }
];

const recipeFaqs = [
  {
    question: "Why do copycat recipes use powdered sugar in the breading?",
    answer: "Powdered sugar helps the chicken brown perfectly in the hot oil and gives it that signature slightly sweet crust that balances out the salty and savory flavors."
  },
  {
    question: "Do I really need to use peanut oil for frying?",
    answer: "Chick-fil-A famously fries its chicken in 100% refined peanut oil. While you can use canola or vegetable oil, peanut oil gives you the most authentic taste and has a high smoke point perfect for frying."
  },
  {
    question: "Can I air fry these recipes instead?",
    answer: "Yes! For the nuggets or chicken sandwich, spray the breaded chicken generously with cooking oil spray and air fry at 375°F for 10-12 minutes, flipping halfway, until golden and cooked through."
  }
];

export default function RecipesPage() {
  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": recipes.map((recipe, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://chick-fila-menus.com/recipes#${recipe.id}`,
      "name": recipe.title
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }}
      />
      <div className="bg-[#FAF7F2] min-h-screen pb-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Recipes", href: "/recipes" },
            ]}
          />

          <div className="mt-8 mb-12">
            <AdUnit type="leaderboard" />
          </div>

          {/* Page Header */}
          <div className="mb-14">
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-4 md:mb-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
              <span className="bg-[#C8102E] p-2 md:p-3 rounded-2xl shadow-sm w-fit">
                <ChefHat className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </span>
              Copycat Recipes
            </h1>
            <p className="text-[#594E48] text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed">
              Craving Chick-fil-A on a Sunday? We've got you covered. Discover 5 of the most authentic, tried-and-true copycat recipes so you can make your favorite meals right at home.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content Area */}
            <div className="flex-1 space-y-12">
              
              <div className="space-y-12">
                {recipes.map((recipe, idx) => (
                  <div 
                    key={recipe.id}
                    id={recipe.id}
                    className="bg-white border border-[#EAE3D5] rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-2 bg-[#C8102E]"></div>
                    
                    <div className="mb-6">
                      <h2 className="font-display font-black text-2xl md:text-3xl text-[#1A1A1A] mb-3">
                        {idx + 1}. {recipe.title}
                      </h2>
                      <p className="text-[#594E48] text-lg leading-relaxed">
                        {recipe.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 md:gap-8 bg-[#FAF7F2] p-4 rounded-2xl border border-[#EAE3D5] mb-8">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#2B1B15]">
                        <Clock className="w-4 h-4 text-[#C8102E]" /> Prep: {recipe.prepTime}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold text-[#2B1B15]">
                        <Flame className="w-4 h-4 text-[#C8102E]" /> Cook: {recipe.cookTime}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold text-[#2B1B15]">
                        <Users className="w-4 h-4 text-[#C8102E]" /> Yields: {recipe.servings}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold text-[#2B1B15]">
                        <Utensils className="w-4 h-4 text-[#C8102E]" /> {recipe.calories}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Ingredients */}
                      <div className="md:col-span-1 bg-[#F9E6E9] bg-opacity-30 rounded-2xl p-6 border border-[#FDEBBE]">
                        <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-4">Ingredients</h3>
                        <ul className="space-y-3">
                          {recipe.ingredients.map((ing, i) => (
                            <li key={i} className="flex items-start gap-2 text-[#594E48] text-sm">
                              <span className="text-[#C8102E] mt-0.5">•</span>
                              <span className="leading-snug">{ing}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Instructions */}
                      <div className="md:col-span-2">
                        <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-4">Instructions</h3>
                        <ol className="space-y-4">
                          {recipe.instructions.map((step, i) => (
                            <li key={i} className="flex gap-4">
                              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#EAE3D5] text-[#C8102E] font-bold flex items-center justify-center text-sm">
                                {i + 1}
                              </span>
                              <p className="text-[#594E48] text-base leading-relaxed pt-1">
                                {step}
                              </p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <AdUnit type="responsive" />
              </div>

              {/* FAQs using global component */}
              <div className="pt-4">
                <FAQAccordion 
                  items={recipeFaqs} 
                  title="Recipe FAQ"
                  kicker="Helpful Info"
                  description="Tips and tricks for making the best copycat Chick-fil-A recipes at home."
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-[320px] xl:w-[350px] flex-shrink-0 space-y-6">
              <div className="bg-white border border-[#EAE3D5] rounded-3xl p-6 sticky top-24 shadow-sm">
                <h3 className="font-display font-black text-2xl text-[#1A1A1A] mb-6">
                  Pro Tips
                </h3>

                <div className="space-y-4">
                  <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#EAE3D5]">
                    <div className="text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-2">
                      The Secret Brine
                    </div>
                    <h4 className="font-display font-bold text-[#1A1A1A] text-[15px] mb-2 leading-tight">
                      Don't Skip the Pickle Juice!
                    </h4>
                    <p className="text-sm text-[#594E48] leading-relaxed">
                      Marinating the chicken in dill pickle juice is the biggest secret to getting that authentic Chick-fil-A tenderness and flavor profile.
                    </p>
                  </div>

                  <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#EAE3D5]">
                    <div className="text-[10px] font-bold text-[#C8102E] uppercase tracking-widest mb-2">
                      Frying Oil
                    </div>
                    <h4 className="font-display font-bold text-[#1A1A1A] text-[15px] mb-2 leading-tight">
                      Use Peanut Oil
                    </h4>
                    <p className="text-sm text-[#594E48] leading-relaxed">
                      For the true restaurant taste, fry in 100% refined peanut oil. It doesn't transfer flavors and fries super crisp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
