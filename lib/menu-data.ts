// lib/menu-data.ts
// Chick-fil-A Menu Data — US National Average Prices (2026)
// Calories: official Chick-fil-A nutrition page
// Prices: US national average estimates; actual prices vary by location

export interface NutritionInfo {
  calories: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  saturatedFat?: number;
  sodium?: number;
  fiber?: number;
  sugar?: number;
}

export interface MenuItem {
  name: string;
  slug: string;
  price: string;
  nutrition: NutritionInfo;
  allergens?: string[];
  description: string;
  image: string;
  popular?: boolean;
  tags?: string[];
  uniqueDescription?: string;
  faqs?: { question: string; answer: string }[];
  relatedItemSlugs?: string[];
}

export interface MenuCategory {
  name: string;
  slug: string;
  description: string;
  image: string;
  emoji: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: "Breakfast",
    slug: "breakfast",
    emoji: "🍳",
    description:
      "Start your morning right with Chick-fil-A's breakfast menu, available until 10:30 AM. From fluffy biscuits to hearty scramble bowls, there's something for everyone.",
    image: "/Breakfast.webp",
    items: [
      {
        name: "Chick-fil-A® Chicken Biscuit",
        slug: "chicken-biscuit",
        price: "$5.09-$5.79",
        nutrition: { calories: 460, protein: 23, carbs: 44, fat: 20, sodium: 1350 },
        allergens: ["Milk", "Soy", "Wheat"],
        description:
          "A tender boneless breast of chicken nestled in a buttermilk biscuit. A classic Chick-fil-A breakfast staple.",
        image: "/Chick-fil-A-Chicken-Biscuit.webp",
        popular: true,
        tags: ["breakfast", "sandwich", "biscuit"],
        uniqueDescription: `The Chick-fil-A® Chicken Biscuit is one of the most iconic breakfast items in all of fast food. If you've never started your morning with one of these, you're genuinely missing out. At its core, this sandwich features a tender, boneless breast of chicken — the same pressure-cooked, seasoned chicken that made Chick-fil-A famous — nestled inside a flaky, golden buttermilk biscuit that's baked fresh every morning at each location.

What sets this biscuit apart is the quality of every component. The chicken breast is marinated in a blend of seasonings, giving it a subtle savory flavor that pairs beautifully with the buttery, layered biscuit. Unlike many fast-food breakfast sandwiches that use processed chicken patties, Chick-fil-A uses a whole filet — you can actually taste the difference. The biscuit itself is soft on the inside and slightly crispy on the outside, with a rich butter flavor that doesn't feel greasy.

At approximately 460 calories and 23 grams of protein, the Chick-fil-A Chicken Biscuit is a filling breakfast choice that gives you the energy to power through your morning. The sodium content (around 1,350mg) is on the higher side, which is worth noting if you're watching your intake, but for an occasional indulgence, it's hard to beat.

Price-wise, you can expect to pay between $5.09 and $5.79 depending on your location — a reasonable price for a breakfast that will keep you satisfied for hours. It pairs wonderfully with a Chick-fil-A coffee, sweet tea, or freshly squeezed lemonade.

Breakfast is only served until 10:30 AM at most Chick-fil-A locations, so make sure to set your alarm. This is the kind of breakfast that makes waking up early worth it. Countless Chick-fil-A fans cite the Chicken Biscuit as their all-time favorite menu item — and it's easy to see why.`,
        faqs: [
          { question: "What time does Chick-fil-A stop serving breakfast?", answer: "Chick-fil-A serves breakfast until 10:30 AM Monday through Saturday. Chick-fil-A is closed on Sundays." },
          { question: "How many calories are in the Chick-fil-A Chicken Biscuit?", answer: "The Chick-fil-A Chicken Biscuit contains 460 calories, with 23g of protein, 44g of carbohydrates, and 20g of fat." },
          { question: "Does the Chick-fil-A Chicken Biscuit contain gluten?", answer: "Yes, the Chicken Biscuit contains wheat and soy allergens. It is not suitable for those with gluten intolerance. Chick-fil-A does offer some gluten-free breakfast options like the Hash Brown Scramble Bowl." },
          { question: "Can I customize the Chick-fil-A Chicken Biscuit?", answer: "Yes! You can add items like cheese, butter, or honey. You can also request no butter on the biscuit. Use the Chick-fil-A app to customize your order." },
          { question: "Is the Chick-fil-A Chicken Biscuit the same chicken as the sandwich?", answer: "Yes! Chick-fil-A uses the same style of whole chicken filet in their breakfast biscuits as they do in their famous Chicken Sandwich." }
        ],
      },

      {
        name: "Spicy Chicken Biscuit",
        slug: "spicy-chicken-biscuit",
        price: "$5.29-$5.99",
        nutrition: { calories: 450, protein: 23, carbs: 44, fat: 19, sodium: 1440 },
        allergens: ["Milk", "Soy", "Wheat"],
        description:
          "A spicy boneless breast of chicken, seasoned to perfection, served on a warm buttermilk biscuit.",
        image: "/Spicy-Chicken-Biscuit.webp",
        tags: ["breakfast", "spicy", "biscuit"],
        uniqueDescription: `The Chick-fil-A Spicy Chicken Biscuit is the perfect way to start the day for those who like a kick in their morning meal. This fan-favorite features the same tender, boneless chicken breast found in the classic Chicken Biscuit, but with an added bold spice blend that delivers satisfying heat without overwhelming your palate.

The spicy chicken filet is pressure-cooked and seasoned with a blend of peppers that creates a slow-building warmth — not sharp or aggressive, but a pleasant tingle that lingers in all the right ways. It's tucked inside Chick-fil-A's signature fresh-baked buttermilk biscuit, which provides a buttery, flaky counterbalance to the heat. The combination is genuinely satisfying: creamy, spicy, and hearty all at once.

Nutritionally, the Spicy Chicken Biscuit comes in at 450 calories with 23 grams of protein — a solid breakfast count that will keep you fueled well into mid-morning. The sodium content is around 1,440mg, and the price ranges from $5.29 to $5.99 depending on location.

If you're a spice lover, the Spicy Chicken Biscuit pairs exceptionally well with a cool, sweet drink like the Chick-fil-A Frosted Lemonade or a classic sweet tea to balance out the heat. Many fans enjoy adding a drizzle of honey on top — the sweet-heat combination is truly next-level.

Remember, like all Chick-fil-A breakfast items, this is only available until 10:30 AM. Don't hesitate because of the spice level — it's well-calibrated and enjoyable for most spice tolerances.`,
        faqs: [{"question":"How spicy is the Chick-fil-A Spicy Chicken Biscuit?","answer":"The Spicy Chicken Biscuit has a mild-to-medium heat level. It has more kick than the regular Chicken Biscuit but is not overwhelmingly hot. Most people with average spice tolerance enjoy it comfortably."},{"question":"How many calories are in the Spicy Chicken Biscuit?","answer":"The Spicy Chicken Biscuit contains 450 calories, with 23g of protein, 44g of carbohydrates, and 19g of fat."},{"question":"Is the Spicy Chicken Biscuit available all day?","answer":"No, like all Chick-fil-A breakfast items, the Spicy Chicken Biscuit is only available until 10:30 AM Monday through Saturday."},{"question":"What allergens are in the Spicy Chicken Biscuit?","answer":"The Spicy Chicken Biscuit contains Milk, Soy, and Wheat allergens. Always check with your local restaurant if you have specific dietary concerns."}],
      },
      {
        name: "Chick-n-Minis® (4 ct)",
        slug: "chick-n-minis-4ct",
        price: "$6.09-$6.99",
        nutrition: { calories: 360, protein: 21, carbs: 37, fat: 13, sodium: 740 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Bite-sized nuggets of tender chicken nestled in warm, honey-butter brushed mini rolls. Perfect for on-the-go mornings.",
        image: "/Chick-n-Minis-(4-ct).webp",
        popular: true,
        tags: ["breakfast", "nuggets", "mini"],
        uniqueDescription: `Chick-n-Minis® are one of those foods that instantly put a smile on your face. These tiny, bite-sized breakfast sandwiches feature miniature versions of Chick-fil-A's famous nuggets, each cradled inside a warm, pillowy dinner roll brushed with honey butter. The result is a breakfast item that's sweet, savory, and utterly addictive.

The 4-count Chick-n-Minis is the perfect on-the-go breakfast option. Each piece is just a couple of bites, making them easy to eat while commuting or heading into a morning meeting. The chicken nuggets are tender and juicy — the same quality you'd expect from any Chick-fil-A chicken product. But it's the honey-butter glaze on the soft rolls that makes these truly special. The sweetness of the honey butter complements the savory chicken in a way that feels genuinely crave-worthy.

The 4-count serving delivers 360 calories and an impressive 21 grams of protein — solid nutrition for a breakfast that feels like a treat. Carbs are 37 grams for a quick energy boost, with 13 grams of fat and a moderate 740mg sodium.

Priced between $6.09 and $6.99, the 4-count Chick-n-Minis is excellent value for the unique experience they offer. If you need something more substantial, there's also a 10-count option available.

Chick-n-Minis are consistently one of the most-ordered breakfast items at Chick-fil-A. Once you've tried them, going back to a standard breakfast sandwich feels like a downgrade.`,
        faqs: [{"question":"What are Chick-n-Minis made of?","answer":"Chick-n-Minis are bite-sized chicken nuggets nestled inside small, warm dinner rolls brushed with honey butter. The chicken is the same quality as Chick-fil-A's regular nuggets."},{"question":"How many calories are in 4 Chick-n-Minis?","answer":"A 4-count serving of Chick-n-Minis has 360 calories, 21g of protein, 37g of carbohydrates, and 13g of fat."},{"question":"Can you get Chick-n-Minis in larger quantities?","answer":"Yes! Chick-fil-A also offers a 10-count Chick-n-Minis serving for those who want a heartier breakfast or are sharing."},{"question":"Are Chick-n-Minis available all day?","answer":"No, Chick-n-Minis are a breakfast-only item available until 10:30 AM, Monday through Saturday."}],
      },
      {
        name: "Chick-n-Minis® (10 ct)",
        slug: "chick-n-minis-10ct",
        price: "7.95",
        nutrition: { calories: 910, protein: 53, carbs: 93, fat: 33, sodium: 1850 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Ten bite-sized nuggets of tender chicken in warm, honey-butter brushed mini rolls. Great for sharing.",
        image: "/Chick-n-Minis-(10-ct).webp",
        tags: ["breakfast", "nuggets", "mini", "sharing"],
      },
      {
        name: "Egg White Grill",
        slug: "egg-white-grill",
        price: "$6.25-$6.99",
        nutrition: { calories: 300, protein: 26, carbs: 31, fat: 7, sodium: 970 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "A grilled chicken breast, egg whites, and American cheese served on a toasted multigrain English muffin. A lighter breakfast option.",
        image: "/Egg-White-Grill.webp",
        popular: true,
        tags: ["breakfast", "healthy", "low-calorie", "grilled"],
        uniqueDescription: `The Egg White Grill is proof that eating healthy at a fast-food restaurant doesn't mean settling for something bland or unsatisfying. This is arguably Chick-fil-A's best value meal from a nutrition standpoint, and it's a go-to for calorie-conscious breakfast seekers who still want something genuinely delicious.

The sandwich features a grilled chicken breast — not fried, but grilled — along with fluffy egg whites and American cheese, all served on a toasted multigrain English muffin. The grilled chicken is lean and flavorful, seasoned with a blend that complements the clean taste of the egg whites perfectly. The multigrain muffin adds a subtle nuttiness and more fiber than a standard white biscuit.

At just 300 calories with an impressive 26 grams of protein, the Egg White Grill is one of the most protein-efficient meals on the entire Chick-fil-A menu. Fat content is a very low 7 grams, and carbs are 31 grams from the multigrain muffin for sustained energy. Sodium is 970mg — moderate for a fast-food item.

Priced between $6.25 and $6.99, it's slightly pricier than the biscuit options, but the superior nutrition profile makes it outstanding value for health-focused diners. Whether you're tracking macros, on a high-protein diet, or just want to feel good about your breakfast, the Egg White Grill delivers.

If you're at the gym, counting calories, or just want a smart morning meal, the Egg White Grill is the clear choice. It's satisfying without the guilt — a rare feat for fast-food breakfast.`,
        faqs: [{"question":"Is the Egg White Grill a healthy option at Chick-fil-A?","answer":"Yes! With only 300 calories and 26g of protein, the Egg White Grill is one of the healthiest items on the Chick-fil-A breakfast menu. It uses grilled (not fried) chicken and egg whites instead of whole eggs."},{"question":"What is in the Chick-fil-A Egg White Grill?","answer":"It contains a grilled chicken filet, egg whites, American cheese, served on a toasted multigrain English muffin."},{"question":"Does the Egg White Grill have gluten?","answer":"Yes, the multigrain English muffin contains wheat. If you need gluten-free options, consider the Hash Brown Scramble Bowl instead."},{"question":"How many grams of protein are in the Egg White Grill?","answer":"The Egg White Grill has an impressive 26 grams of protein, making it one of the highest protein-per-calorie breakfast items at Chick-fil-A."}],
      },
      {
        name: "Chicken, Egg & Cheese Biscuit",
        slug: "chicken-egg-cheese-biscuit",
        price: "5.35",
        nutrition: { calories: 550, protein: 27, carbs: 46, fat: 28, sodium: 1560 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "A tender chicken breast with a folded egg and American cheese on a warm buttermilk biscuit.",
        image: "/Chicken,-Egg-&-Cheese-Biscuit.webp",
        tags: ["breakfast", "biscuit", "egg", "cheese"],
      },
      {
        name: "Bacon, Egg & Cheese Biscuit",
        slug: "bacon-egg-cheese-biscuit",
        price: "$3.79-$5.49",
        nutrition: { calories: 420, protein: 18, carbs: 40, fat: 22, sodium: 1090 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Crispy bacon, a folded egg, and American cheese on a warm buttermilk biscuit.",
        image: "/Bacon,-Egg-&-Cheese-Biscuit.webp",
        tags: ["breakfast", "bacon", "biscuit", "egg"],
      },
      {
        name: "Sausage, Egg & Cheese Biscuit",
        slug: "sausage-egg-cheese-biscuit",
        price: "$3.79-$5.39",
        nutrition: { calories: 620, protein: 23, carbs: 40, fat: 40, sodium: 1240 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Savory sausage, a folded egg, and American cheese on a warm buttermilk biscuit.",
        image: "/Sausage,-Egg-&-Cheese-Biscuit.webp",
        tags: ["breakfast", "sausage", "biscuit", "egg"],
      },
      {
        name: "Chicken, Egg & Cheese Muffin",
        slug: "chicken-egg-cheese-muffin",
        price: "5.25",
        nutrition: { calories: 410, protein: 26, carbs: 33, fat: 18, sodium: 1280 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "A grilled chicken breast, folded egg, and American cheese on a toasted English muffin.",
        image: "/Chicken,-Egg-&-Cheese-Muffin.webp",
        tags: ["breakfast", "muffin", "egg", "cheese"],
      },
      {
        name: "Bacon, Egg & Cheese Muffin",
        slug: "bacon-egg-cheese-muffin",
        price: "4.75",
        nutrition: { calories: 300, protein: 18, carbs: 28, fat: 13, sodium: 790 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Crispy bacon, a folded egg, and American cheese on a toasted English muffin. A lighter breakfast choice.",
        image: "/Bacon,-Egg-&-Cheese-Muffin.webp",
        tags: ["breakfast", "bacon", "muffin", "egg"],
      },
      {
        name: "Sausage, Egg & Cheese Muffin",
        slug: "sausage-egg-cheese-muffin",
        price: "4.75",
        nutrition: { calories: 490, protein: 22, carbs: 28, fat: 31, sodium: 940 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Savory sausage, a folded egg, and American cheese on a toasted English muffin.",
        image: "/Sausage,-Egg-&-Cheese-Muffin.webp",
        tags: ["breakfast", "sausage", "muffin", "egg"],
      },
      {
        name: "Hash Brown Scramble Burrito",
        slug: "hash-brown-scramble-burrito",
        price: "$6.19-$7.29",
        nutrition: { calories: 700, protein: 29, carbs: 57, fat: 39, sodium: 1310 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Hash browns, scrambled eggs, sausage, cheese, and Jalapeño Salsa rolled up in a warm flour tortilla.",
        image: "/Hash-Brown-Scramble-Burrito.webp",
        tags: ["breakfast", "burrito", "scramble"],
        uniqueDescription: `The Hash Brown Scramble Burrito is Chick-fil-A's most substantial and filling breakfast option — a hearty, flavor-packed wrap that will keep you full well into the afternoon. If you're someone who needs a serious breakfast to fuel a long or demanding day, this is your order.

Inside a warm, soft flour tortilla you'll find a generous helping of Chick-fil-A's crispy hash brown bites (which add an excellent crispy-soft texture), fluffy scrambled eggs, savory sausage, shredded cheese, and a drizzle of Jalapeño Salsa for a spicy kick. Every component is satisfying on its own, but together they create a breakfast that genuinely rivals the best breakfast burritos from dedicated breakfast restaurants.

Nutritionally, this is the most calorie-dense breakfast item at 700 calories, with 29 grams of protein, 57 grams of carbohydrates, and 39 grams of fat. The sodium is 1,310mg. This is clearly an indulgent meal, but the combination of protein, fat, and carbs means it provides sustained energy and genuine satiety.

Priced between $6.19 and $7.29, the Hash Brown Scramble Burrito offers excellent value given its size and the quality of ingredients. You can also customize it with grilled nuggets instead of sausage for a slightly lighter version.

This burrito is only available during breakfast hours until 10:30 AM. If you're heading into a big day and need maximum fuel from your first meal, this is the Chick-fil-A order that delivers.`,
        faqs: [{"question":"What is in the Chick-fil-A Hash Brown Scramble Burrito?","answer":"It contains hash brown bites, scrambled eggs, sausage, shredded cheese, and Jalapeño Salsa, all wrapped in a warm flour tortilla."},{"question":"How many calories are in the Hash Brown Scramble Burrito?","answer":"700 calories, with 29g of protein, 57g of carbs, and 39g of fat — the most calorie-dense item on the Chick-fil-A breakfast menu."},{"question":"Can I substitute the sausage in the Hash Brown Scramble Burrito?","answer":"Yes! You can substitute the sausage with grilled chicken nuggets for a slightly lighter protein option. Ask when ordering or customize through the Chick-fil-A app."},{"question":"Is the Hash Brown Scramble Burrito gluten-free?","answer":"No, the flour tortilla contains wheat. For a gluten-friendly option, try the Hash Brown Scramble Bowl instead, which swaps the tortilla for a bowl."}],
      },
      {
        name: "Hash Brown Scramble Bowl",
        slug: "hash-brown-scramble-bowl",
        price: "$6.09-$7.19",
        nutrition: { calories: 470, protein: 22, carbs: 34, fat: 28, sodium: 1120 },
        allergens: ["Milk", "Egg", "Soy"],
        description:
          "Hash browns, scrambled eggs, sausage, cheese, and Jalapeño Salsa in a bowl. Gluten-free option available.",
        image: "/Hash-Brown-Scramble-Bowl.webp",
        tags: ["breakfast", "bowl", "scramble", "gluten-friendly"],
        uniqueDescription: `The Hash Brown Scramble Bowl is a brilliant solution for those who love the flavors of the Hash Brown Scramble Burrito but want to skip the tortilla — whether for gluten-related reasons, a lower-carb preference, or simply to have a more fork-friendly breakfast experience.

All the same great components are here: crispy hash brown bites, fluffy scrambled eggs, savory sausage, shredded cheese, and Jalapeño Salsa — just served in a bowl instead of wrapped in a flour tortilla. Without the tortilla, you can taste each ingredient more individually, and the crispy hash browns remain crisper since they're not trapped in a wrap.

At 470 calories with 22 grams of protein, it's significantly lighter than the burrito version (700 cal) thanks to the absence of the tortilla. Carbohydrates are 34 grams, fat is 28 grams, and sodium is 1,120mg. It's priced at $6.09 to $7.19.

This bowl is also a popular choice for those following lower-carb diets, as you can easily request fewer hash browns or skip them entirely to reduce the carb count further. The combination of eggs, protein, and cheese still makes for a satisfying meal.

The Hash Brown Scramble Bowl is a consistently underrated item on the Chick-fil-A breakfast menu — it deserves much more attention than it typically gets. Try it once and you'll understand why it has such a devoted following among regular Chick-fil-A breakfast visitors.`,
        faqs: [{"question":"Is the Hash Brown Scramble Bowl gluten-free?","answer":"Unlike the Burrito version, the Bowl is gluten-friendly since it doesn't include a flour tortilla. However, always confirm with your restaurant about cross-contamination risks."},{"question":"How many calories are in the Hash Brown Scramble Bowl?","answer":"470 calories, with 22g of protein, 34g of carbs, and 28g of fat — significantly lower than the Burrito version."},{"question":"What is the difference between the Scramble Burrito and the Scramble Bowl?","answer":"The Bowl contains the same filling as the Burrito (hash browns, eggs, sausage, cheese, Jalapeño Salsa) but is served in a bowl instead of a flour tortilla, making it lower in carbs and gluten-friendly."}],
      },
      {
        name: "Buttery Biscuit",
        slug: "buttery-biscuit",
        price: "$1.49-$2.19",
        nutrition: { calories: 290, protein: 5, carbs: 37, fat: 14, sodium: 670 },
        allergens: ["Milk", "Soy", "Wheat"],
        description:
          "A warm, flaky, buttery biscuit — simple and delicious on its own.",
        image: "/Buttery-Biscuit.webp",
        tags: ["breakfast", "biscuit", "side"],
      },
      {
        name: "Hash Browns (small)",
        slug: "hash-browns",
        price: "$1.55-$2.49",
        nutrition: { calories: 270, protein: 3, carbs: 33, fat: 14, sodium: 360 },
        allergens: ["Soy"],
        description:
          "Seasoned golden hash browns — the perfect crispy breakfast side.",
        image: "/Hash-Browns-(small).webp",
        tags: ["breakfast", "side", "potato"],
      },
      {
        name: "Berry Parfait",
        slug: "berry-parfait",
        price: "$4.75-$6.19",
        nutrition: { calories: 270, protein: 5, carbs: 54, fat: 4, sodium: 95 },
        allergens: ["Milk", "Wheat"],
        description:
          "Greek yogurt layered with fresh mixed berries and granola. A refreshing and light breakfast option.",
        image: "/Berry-Parfait.webp",
        popular: true,
        tags: ["breakfast", "healthy", "yogurt", "low-calorie"],
      },
      {
        name: "Fruit Cup",
        slug: "fruit-cup",
        price: "$3.99-$5.19",
        nutrition: { calories: 70, protein: 1, carbs: 17, fat: 0, sodium: 5 },
        allergens: [],
        description:
          "A medley of fresh seasonal fruit — mandarin oranges, strawberries, blueberries, and apples.",
        image: "/Fruit-Cup.webp",
        tags: ["breakfast", "side", "healthy", "vegan", "low-calorie"],
      },
    ],
  },
  {
    name: "Entrées",
    slug: "entrees",
    emoji: "🍗",
    description:
      "Chick-fil-A's signature chicken sandwiches, nuggets, and wraps — the items that made this brand famous. Hand-breaded and pressure-cooked to perfection.",
    image: "/Entrées.webp",
    items: [
      {
        name: "Chick-fil-A® Chicken Sandwich",
        slug: "chicken-sandwich",
        price: "$4.85-$7.00",
        nutrition: { calories: 420, protein: 29, carbs: 41, fat: 18, sodium: 1400 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "The original. A boneless breast of chicken, hand-breaded, pressure-cooked in 100% refined peanut oil, served on a toasted, buttered bun with dill pickle chips.",
        uniqueDescription: `The Chick-fil-A® Chicken Sandwich is the legendary menu item that put Chick-fil-A on the map. Widely regarded as the industry standard for fast-food chicken sandwiches, it features a perfectly seasoned, boneless breast of chicken that is meticulously hand-breaded and pressure-cooked in 100% refined peanut oil. This cooking method not only locks in the moisture but gives the chicken its signature golden crust. Served simply on a freshly toasted and buttered bun with two crucial dill pickle chips, the simplicity of the sandwich is what makes it so beloved.

At approximately $4.95 (prices vary by location), it offers exceptional value. Nutritionally, the sandwich contains 420 calories, making it a balanced lunch option. With 29 grams of protein, it's highly satisfying and keeps you full throughout the afternoon. However, those watching their sodium intake should note it contains 1400mg of sodium. 

When comparing the classic sandwich to the Spicy Chicken Sandwich, the original offers a savory, savory-sweet profile that pairs perfectly with the iconic Chick-fil-A Sauce, whereas the spicy version brings a noticeable heat. It remains the ultimate comfort food and the most popular item across the entire menu year after year.`,
        faqs: [
          {
            question: "How many calories are in a Chick-fil-A Chicken Sandwich?",
            answer: "The classic Chick-fil-A Chicken Sandwich contains 420 calories. If you choose to add sauces like the signature Chick-fil-A Sauce, be aware that it will add an additional 140 calories per packet."
          },
          {
            question: "What kind of oil does Chick-fil-A use for their chicken?",
            answer: "Chick-fil-A pressure cooks their classic Chicken Sandwich in 100% refined peanut oil, which gives it a unique flavor and crispy texture."
          },
          {
            question: "Can I order the Chicken Sandwich without pickles?",
            answer: "Yes, you can easily customize your order to remove the pickles, or even request extra pickles at no additional charge."
          }
        ],
        relatedItemSlugs: ["spicy-chicken-sandwich", "deluxe-sandwich", "waffle-potato-fries-medium"],
        image: "/Chick-fil-A-Chicken-Sandwich.webp",
        popular: true,
        tags: ["signature", "sandwich", "classic"],
      },
      {
        name: "Chick-fil-A® Deluxe Sandwich",
        slug: "deluxe-sandwich",
        price: "$5.55-$7.19",
        nutrition: { calories: 490, protein: 31, carbs: 43, fat: 22, sodium: 1450 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "The classic Chicken Sandwich topped with Colby-Jack cheese, lettuce, tomato, and pickles on a toasted, buttered bun.",
        image: "/Chick-fil-A-Deluxe-Sandwich.webp",
        popular: true,
        tags: ["sandwich", "deluxe", "cheese"],
        uniqueDescription: `The Chick-fil-A® Deluxe Sandwich takes the beloved original and elevates it with fresh additions that transform a classic into a more complete, restaurant-quality meal. For those who want more than just chicken and pickles, the Deluxe is the natural upgrade.

The Deluxe Sandwich features the same crispy, pressure-cooked chicken filet from the original, but adds green leaf lettuce, a ripe tomato slice, and American cheese. These additions dramatically change the eating experience. The lettuce adds fresh crunch, the tomato provides juicy acidity, and the cheese contributes creamy meltiness that ties everything together. Combined with the buttered toasted bun and dill pickles, the Deluxe is a genuinely satisfying, well-rounded sandwich.

At 490 calories with 28 grams of protein, the Deluxe gives you more food for slightly more money. The added cheese and toppings bring carbs to 41 grams and fat to 23 grams. Sodium is approximately 1,130mg. Priced between $5.55 and $7.19.

The Deluxe is also a great canvas for customization. Adding Honey Mustard, Buffalo, or Chick-fil-A Sauce takes it to another level.

If you find the original Chicken Sandwich a bit minimal, the Deluxe is exactly what you need. It's the same great chicken with enough additional toppings to make it feel like a full, satisfying restaurant meal.`,
        faqs: [{"question":"What's the difference between the Chick-fil-A Chicken Sandwich and the Deluxe?","answer":"The Deluxe Sandwich adds green leaf lettuce, tomato, and American cheese to the original chicken sandwich. The chicken, bun, and pickles remain the same."},{"question":"How many calories are in the Chick-fil-A Deluxe Sandwich?","answer":"490 calories, with 28g of protein, 41g of carbs, and 23g of fat."},{"question":"Can I add or remove toppings on the Deluxe Sandwich?","answer":"Yes! You can customize through the Chick-fil-A app or by requesting modifications at the counter. Add extra sauce, swap cheese types, or remove any topping."}],
      },
      {
        name: "Spicy Chicken Sandwich",
        slug: "spicy-chicken-sandwich",
        price: "$5.25-$7.29",
        nutrition: { calories: 450, protein: 28, carbs: 41, fat: 20, sodium: 1670 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "A boneless breast of chicken with a spicy seasoning blend, served on a toasted, buttered bun with dill pickle chips.",
        image: "/Spicy-Chicken-Sandwich.webp",
        popular: true,
        tags: ["spicy", "sandwich"],
        uniqueDescription: `The Spicy Chicken Sandwich is the bold, fiery sibling of Chick-fil-A's classic original — and for a large segment of fans, it's actually the preferred version. This sandwich has developed its own devoted following and regularly tops polls of fan-favorite Chick-fil-A items.

The foundation is the same as the original: a whole boneless breast of chicken, pressure-cooked in 100% refined peanut oil. But the spicy version uses a special spice blend incorporated directly into the chicken before cooking, resulting in heat that permeates the meat rather than just coating the surface. This creates a more authentic, deeper spicy experience. It's served on a toasted, buttered bun with two dill pickle chips.

The heat level is genuinely spicy by fast-food standards — real kick, especially compared to other chains' mild 'spicy' offerings. However, it's not tongue-scorching. It's the kind of heat that builds pleasantly with each bite and pairs beautifully with a creamy sauce or cold drink.

Nutritionally: 450 calories, 27 grams of protein, 41 grams of carbs, and 19 grams of fat. Sodium is around 1,370mg. Prices range from $5.25 to $7.29.

A particularly popular combination is the Spicy Sandwich paired with Chick-fil-A's Honey Mustard sauce, which provides a sweet-tangy balance to the heat. The contrast is genuinely exceptional. If you haven't tried this combination, make it your next order.`,
        faqs: [{"question":"How spicy is the Chick-fil-A Spicy Chicken Sandwich?","answer":"The Spicy Chicken Sandwich is genuinely spicy by fast-food standards — medium-hot. The spice is built into the marinade so heat is consistent throughout the chicken."},{"question":"What's the difference between the Spicy and original Chicken Sandwich?","answer":"The difference is the seasoning blend. The spicy version has a pepper-based spice blend that creates real heat. The bun, pickles, and cooking method are identical."},{"question":"What sauce goes best with the Spicy Chicken Sandwich?","answer":"Honey Mustard is the fan-favorite pairing because the sweetness and creaminess balance the heat perfectly. Chick-fil-A Sauce is also excellent."},{"question":"How many calories are in the Spicy Chicken Sandwich?","answer":"450 calories, with 27g of protein, 41g of carbs, and 19g of fat."}],
      },
      {
        name: "Spicy Deluxe Sandwich",
        slug: "spicy-deluxe-sandwich",
        price: "$5.95-$7.99",
        nutrition: { calories: 540, protein: 31, carbs: 43, fat: 26, sodium: 1720 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Spicy chicken with Colby-Jack cheese, lettuce, tomato, and pickles on a toasted, buttered bun.",
        image: "/Spicy-Deluxe-Sandwich.webp",
        tags: ["spicy", "sandwich", "deluxe"],
        uniqueDescription: `The Spicy Deluxe Sandwich is where Chick-fil-A's signature heat meets fresh, vibrant toppings — creating what many fans consider the ultimate Chick-fil-A sandwich experience. If you love the kick of the Spicy Chicken Sandwich but want something more complete and satisfying, this is your answer.

The sandwich features Chick-fil-A's specially-seasoned spicy chicken filet — marinated in a signature blend of peppers and pressure-cooked in refined peanut oil — topped with green leaf lettuce, a fresh tomato slice, and American cheese. Served on a toasted, butter-brushed bun with dill pickle chips. The contrast between the fiery chicken and the cool, crisp lettuce and juicy tomato is outstanding. The cheese adds creamy mildness that rounds out the heat beautifully.

With 540 calories, 29 grams of protein, 41 grams of carbohydrates, and 25 grams of fat, the Spicy Deluxe is the most substantial of Chick-fil-A's classic sandwich lineup. Sodium is around 1,250mg. Priced at $5.95 to $7.99.

For spice enthusiasts, this is arguably the best value on the menu. The toppings help manage the heat while making the sandwich more balanced. Pair it with a cool Frosted Lemonade for a combination that's genuinely memorable.

The Spicy Deluxe is also a fantastic base for customization — adding Honey Mustard or Chick-fil-A Sauce creates complex, layered flavors that make each bite different from the last.`,
        faqs: [{"question":"What is in the Chick-fil-A Spicy Deluxe Sandwich?","answer":"The Spicy Deluxe has a spicy crispy chicken filet, American cheese, green leaf lettuce, tomato, and dill pickles on a toasted, buttered bun."},{"question":"How spicy is the Spicy Deluxe Sandwich?","answer":"It has a genuine medium-to-hot spice level. The toppings (lettuce, tomato, cheese) help temper the heat slightly compared to eating the spicy chicken alone."},{"question":"How many calories are in the Spicy Deluxe?","answer":"540 calories, 29g of protein, 41g of carbs, and 25g of fat."}],
      },
      {
        name: "Grilled Chicken Sandwich",
        slug: "grilled-chicken-sandwich",
        price: "$6.49-$8.99",
        nutrition: { calories: 390, protein: 28, carbs: 43, fat: 11, sodium: 820 },
        allergens: ["Milk", "Soy", "Wheat"],
        description:
          "A lemon-herb marinated boneless breast of chicken grilled for a leaner option, served on a toasted, multigrain bun with lettuce and tomato.",
        image: "/Grilled-Chicken-Sandwich.webp",
        popular: true,
        tags: ["grilled", "healthy", "sandwich", "low-calorie"],
      },
      {
        name: "Grilled Chicken Club",
        slug: "grilled-chicken-club",
        price: "$8.19-$9.79",
        nutrition: { calories: 520, protein: 43, carbs: 44, fat: 19, sodium: 1220 },
        allergens: ["Milk", "Soy", "Wheat"],
        description:
          "Grilled chicken with Colby-Jack cheese, crispy bacon, lettuce, and tomato on a toasted, multigrain bun.",
        image: "/Grilled-Chicken-Club.webp",
        tags: ["grilled", "club", "bacon", "sandwich"],
      },
      {
        name: "Honey Pepper Pimento Chicken Sandwich",
        slug: "honey-pepper-pimento-chicken-sandwich",
        price: "$6.99-$8.49",
        nutrition: { calories: 600, protein: 32, carbs: 60, fat: 27, sodium: 1590 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "A bold new take — Chick-fil-A chicken with pimento cheese, honey pepper sauce, and crispy pickles on a toasted bun.",
        image: "/Honey-Pepper-Pimento-Chicken-Sandwich.webp",
        popular: true,
        tags: ["sandwich", "special", "sweet", "spicy"],
      },
      {
        name: "Chick-fil-A Cool Wrap®",
        slug: "cool-wrap",
        price: "$7.79-$9.99",
        nutrition: { calories: 660, protein: 43, carbs: 54, fat: 27, sodium: 1360 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Sliced grilled chicken breast nestled in a flaxseed flour flatbread with lettuce, red cabbage, carrots, and Colby-Jack cheese.",
        image: "/Chick-fil-A-Cool-Wrap.webp",
        tags: ["wrap", "grilled", "healthy"],
        uniqueDescription: `The Chick-fil-A Cool Wrap® is one of the chain's most underrated menu items — a substantial, satisfying wrap that delivers a full meal's worth of nutrition in a format that's easy to eat on the go. If you typically overlook the Cool Wrap in favor of a sandwich, it's time to reconsider.

The Cool Wrap features sliced, grilled chicken breast wrapped inside a flaxseed flour flatbread (which gives it a subtly nutty flavor and a boost of fiber) along with green leaf lettuce, a blend of shredded red cabbage and carrot, and Monterey Jack and cheddar cheeses. The flatbread itself is notable — it's not a standard flour tortilla but denser, chewier, and more flavorful, adding real character to every bite.

With approximately 660 calories, 43 grams of protein, 52 grams of carbohydrates, and 26 grams of fat, the Cool Wrap is one of the most protein-dense items on the Chick-fil-A menu. Sodium is around 1,350mg. Priced at $7.79 to $9.99.

The recommended pairing is Zesty Apple Cider Vinaigrette or Avocado Lime Ranch dressing, served on the side for dipping. The Cool Wrap is also available in a Spicy version at some locations.

For busy days when you need to eat on the move without sacrificing quality or nutrition, the Cool Wrap is the ideal Chick-fil-A order. It's complete, balanced, and genuinely delicious — the kind of meal that makes you feel good about your choice.`,
        faqs: [{"question":"What is in the Chick-fil-A Cool Wrap?","answer":"The Cool Wrap contains sliced grilled chicken, green leaf lettuce, red cabbage and carrot blend, Monterey Jack and cheddar cheeses, all wrapped in a flaxseed flatbread."},{"question":"How many calories are in the Chick-fil-A Cool Wrap?","answer":"The Cool Wrap contains approximately 660 calories, with 43g of protein, 52g of carbs, and 26g of fat."},{"question":"Is the Cool Wrap healthy?","answer":"It's one of the higher-protein options with 43g of protein. The flaxseed flatbread adds fiber. It's a solid choice for those looking for a protein-rich meal."},{"question":"What dressing goes best with the Cool Wrap?","answer":"Zesty Apple Cider Vinaigrette and Avocado Lime Ranch are both excellent. Request dressing on the side for better portion control."}],
      },
      {
        name: "Chick-fil-A® Nuggets (8 ct)",
        slug: "nuggets-8ct",
        price: "$4.85-$6.09",
        nutrition: { calories: 250, protein: 27, carbs: 12, fat: 11, sodium: 760 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Bite-sized pieces of boneless chicken breast, seasoned and breaded in a special recipe and pressure-cooked in 100% refined peanut oil.",
        image: "/Chick-fil-A-Nuggets-(8-ct).webp",
        popular: true,
        tags: ["nuggets", "finger food", "kids"],
        uniqueDescription: `Chick-fil-A Nuggets are one of the most beloved fast-food items in America — and for very good reason. The 8-count is the perfect single-serving size, whether as a meal with a side or a snack. These aren't ordinary nuggets: Chick-fil-A uses whole, boneless pieces of chicken breast — not reformed or processed chicken — seasoned and coated in a seasoned flour dredge, then pressure-cooked to golden-brown perfection.

The quality difference compared to other fast-food nuggets is immediately apparent. The coating is thin and crispy, never thick or doughy, and the chicken inside is genuinely juicy and flavorful. Each nugget is a different shape because they're cut from real chicken breast — exactly as it should be.

The 8-count nuggets contain 250 calories and an impressive 28 grams of protein, making them one of the best protein-to-calorie options in fast food. Total fat is 11 grams, carbs are 11 grams, and sodium is around 980mg. Priced at $4.85 to $6.09.

Pairing matters with nuggets. The Chick-fil-A Sauce is the iconic choice — a creamy blend of honey mustard and barbecue that's almost as famous as the nuggets themselves. Polynesian Sauce, Buffalo Sauce, and Honey Mustard are also excellent options.

The 8-count is popular for kids' meals and a go-to for anyone on a high-protein diet. It's versatile, portable, and consistently excellent — the kind of item that never disappoints.`,
        faqs: [{"question":"Are Chick-fil-A Nuggets made from real chicken?","answer":"Yes! Chick-fil-A Nuggets are made from whole pieces of boneless chicken breast, not processed or reformed chicken. The irregular shape of each piece confirms they're hand-cut from real chicken."},{"question":"How many calories in Chick-fil-A 8-count Nuggets?","answer":"250 calories, 28g of protein, 11g of carbs, and 11g of fat."},{"question":"What is the best sauce for Chick-fil-A Nuggets?","answer":"Chick-fil-A Sauce is the fan-favorite iconic pairing. Polynesian Sauce and Honey Mustard are also very popular. It really comes down to personal preference!"},{"question":"Are Chick-fil-A Nuggets gluten-free?","answer":"No, the standard nuggets contain wheat in their coating. Chick-fil-A does offer Grilled Nuggets as a gluten-free and lower-calorie alternative."},{"question":"How much do 8-count Chick-fil-A Nuggets cost?","answer":"Prices typically range from $4.85 to $6.09 depending on location."}],
      },
      {
        name: "Chick-fil-A® Nuggets (12 ct)",
        slug: "nuggets-12ct",
        price: "$7.19-$8.99",
        nutrition: { calories: 380, protein: 40, carbs: 18, fat: 17, sodium: 1140 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Twelve bite-sized pieces of boneless chicken breast, seasoned, breaded, and pressure-cooked to perfection.",
        image: "/Chick-fil-A-Nuggets-(12-ct).webp",
        tags: ["nuggets", "sharing"],
        uniqueDescription: `The 12-count Chick-fil-A Nuggets are the meal-sized version of the chain's most iconic menu item — perfect when the 8-count just won't cut it. Whether you're extra hungry, sharing with someone, or simply know that Chick-fil-A Nuggets are worth going all in on, the 12-count delivers in every way.

Everything that makes the 8-count nuggets exceptional applies here in greater quantity: whole boneless chicken breast pieces, seasoned with Chick-fil-A's signature blend, coated in a thin, crispy dredge, and pressure-cooked in refined peanut oil to golden-brown perfection.

Nutritionally, the 12-count contains 380 calories and an outstanding 42 grams of protein — one of the single best high-protein meals available in fast food, period. Fat content is 17 grams, carbs are 16 grams, and sodium is approximately 1,470mg.

Priced between $7.19 and $8.99 depending on location, the 12-count is excellent value considering both quality and protein content. Pair with a Kale Crunch Side or Fruit Cup to add fiber and freshness, creating a legitimately solid balanced meal.

The 12-count is popular for office lunches, families, and anyone following a protein-forward eating plan. With Chick-fil-A's wide range of dipping sauces, you can keep the experience varied and exciting even if nuggets are your regular order.`,
        faqs: [{"question":"How many calories are in 12 Chick-fil-A Nuggets?","answer":"The 12-count Nuggets contain 380 calories, 42g of protein, 16g of carbs, and 17g of fat."},{"question":"How much do 12 Chick-fil-A Nuggets cost?","answer":"Prices range from $7.19 to $8.99 depending on your location."},{"question":"Is the 12-count Nuggets a good option for a high-protein diet?","answer":"Absolutely! With 42 grams of protein and only 380 calories, the 12-count nuggets are one of the best protein-per-calorie fast-food options available."}],
      },
      {
        name: "Chick-fil-A® Nuggets (30 ct)",
        slug: "nuggets-30ct",
        price: "$17.49-$20.99",
        nutrition: { calories: 950, protein: 100, carbs: 45, fat: 43, sodium: 2850 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Thirty bite-sized nuggets — perfect for sharing or game day gatherings.",
        image: "/Chick-fil-A-Nuggets-(30-ct).webp",
        tags: ["nuggets", "sharing", "party"],
        uniqueDescription: "The 30-count Chick-fil-A Nuggets are the ultimate shareable — perfect for parties, group events, family dinners, or whenever you need a crowd-pleasing centerpiece. This massive order delivers the same exceptional quality you get from a single-serving nugget, just multiplied thirty times over.\n\nThirty whole, boneless pieces of chicken breast, each individually seasoned, coated in Chick-fil-A's signature thin, crispy dredge, and pressure-cooked in 100% refined peanut oil. The result is a generous platter of golden, juicy nuggets that disappear remarkably fast in any group setting.\n\nAt approximately 950 calories for the full 30-count, this is clearly meant for sharing. The protein content is outstanding — around 105 grams — making it an excellent option for athletic teams, fitness groups, or anyone trying to feed a crowd while keeping protein high.\n\nPriced between $17.49 and $20.99, the 30-count represents the best per-nugget value on the Chick-fil-A menu. Order several sauces alongside — Chick-fil-A Sauce, Honey Mustard, Polynesian, Buffalo, and Garden Herb Ranch are all excellent group choices.\n\nWhen ordering for a group, pair the 30-count nuggets with multiple large Waffle Fry orders, a couple of Mac & Cheese sides, and a variety of dipping sauces for the ultimate Chick-fil-A spread that will impress everyone.",
        faqs: [
          { question: "How many people does a 30-count Chick-fil-A Nuggets serve?", answer: "A 30-count typically serves 3 to 5 people as a main course. With sides, it can comfortably feed a group of 6 or more." },
          { question: "How much do 30-count Chick-fil-A Nuggets cost?", answer: "Prices range from $17.49 to $20.99 depending on your location, making it the best per-nugget value on the menu." },
          { question: "Can I order 30-count nuggets for a party?", answer: "Absolutely! The 30-count nuggets are one of Chick-fil-A's most popular choices for group events. For larger gatherings, check out Chick-fil-A's catering trays." },
        ],
      },
      {
        name: "Grilled Nuggets (8 ct)",
        slug: "grilled-nuggets-8ct",
        price: "$5.69-$8.09",
        nutrition: { calories: 130, protein: 25, carbs: 1, fat: 3, sodium: 530 },
        allergens: ["Milk", "Soy"],
        description:
          "A healthier twist — bite-sized pieces of grilled boneless chicken breast with no breading. High protein, low calorie.",
        image: "/Grilled-Nuggets-(8-ct).webp",
        popular: true,
        tags: ["nuggets", "grilled", "healthy", "low-calorie", "high-protein"],
        uniqueDescription: `For those who love Chick-fil-A's nuggets but want a lighter, cleaner option, the Grilled Nuggets are an outstanding alternative that has converted many die-hard fried nugget fans. These are not a compromise — they're genuinely excellent in their own right.

The Grilled Nuggets use the same whole, boneless chicken breast pieces as the original fried nuggets, but instead of being coated and pressure-fried, they're marinated in a citrus herb blend and grilled. The result is a juicy, flavorful nugget with distinct grill marks and a clean, savory taste profile that's very different from the fried version but equally satisfying.

The 8-count Grilled Nuggets contain just 130 calories with an impressive 25 grams of protein — one of the most macronutrient-efficient foods available in fast food, period. Fat is only 3 grams, carbs are just 1 gram, and sodium is approximately 730mg. They're naturally gluten-free, making them accessible to those with gluten sensitivity.

Priced at $5.69 to $8.09, they're slightly pricier per piece than fried nuggets, but the nutrition profile justifies the cost for health-conscious diners.

Pair the grilled nuggets with Honey Mustard or Zesty Buffalo Sauce for excellent flavor without significant added calories. They're also a popular protein addition to Chick-fil-A salads.`,
        faqs: [{"question":"How many calories are in Chick-fil-A Grilled Nuggets (8 count)?","answer":"Only 130 calories! The 8-count Grilled Nuggets have 25g of protein, just 1g of carbs, and 3g of fat — making them one of the lowest-calorie, highest-protein options in fast food."},{"question":"Are Chick-fil-A Grilled Nuggets gluten-free?","answer":"Yes! The Grilled Nuggets are gluten-free. Always confirm with your local restaurant regarding cross-contamination if you have celiac disease."},{"question":"How do Grilled Nuggets compare to fried nuggets in taste?","answer":"The grilled nuggets have a completely different but equally delicious profile. They're marinated in a citrus-herb blend with a juicy, savory, clean flavor. The fried version has a crispy coating. Both are excellent — it depends on preference."},{"question":"Are Grilled Nuggets available all day?","answer":"Yes, Grilled Nuggets are available from 10:30 AM onward during regular menu hours."}],
      },
      {
        name: "Chick-n-Strips® (4 ct)",
        slug: "chick-n-strips-4ct",
        price: "$7.19-$8.99",
        nutrition: { calories: 410, protein: 36, carbs: 26, fat: 17, sodium: 1050 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Four hearty strips of boneless chicken breast, seasoned and breaded in a special recipe.",
        image: "/Chick-n-Strips-(4-ct).webp",
        tags: ["strips", "finger food"],
      },
      {
        name: "Chick-n-Strips® (10 ct)",
        slug: "chick-n-strips-10ct",
        price: "16.09",
        nutrition: { calories: 1020, protein: 90, carbs: 65, fat: 43, sodium: 2625 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Ten hearty strips of boneless chicken breast — great for sharing or a serious appetite.",
        image: "/Chick-n-Strips-(10-ct).webp",
        tags: ["strips", "sharing"],
      },
    ],
  },
  {
    name: "Salads",
    slug: "salads",
    emoji: "🥗",
    description:
      "Fresh, crisp salads featuring grilled or crispy chicken. A lighter way to enjoy Chick-fil-A without sacrificing flavor.",
    image: "/Salads.webp",
    items: [
      {
        name: "Cobb Salad",
        slug: "cobb-salad",
        price: "$9.49-$12.09",
        nutrition: { calories: 830, protein: 44, carbs: 35, fat: 57, sodium: 1700 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "A bed of mixed greens topped with crispy chicken, crumbled bacon, hard-boiled eggs, corn, tomatoes, and Colby-Jack cheese. Rich and satisfying.",
        image: "/Cobb-Salad.webp",
        popular: true,
        tags: ["salad", "cobb", "high-protein"],
      },
      {
        name: "Spicy Southwest Salad",
        slug: "spicy-southwest-salad",
        price: "$9.69-$12.49",
        nutrition: { calories: 680, protein: 35, carbs: 58, fat: 32, sodium: 1420 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Spicy grilled chicken on a blend of mixed greens with roasted corn, black beans, peppers, cheese, and tortilla strips.",
        image: "/Spicy-Southwest-Salad.webp",
        tags: ["salad", "spicy", "southwest"],
      },
      {
        name: "Market Salad",
        slug: "market-salad",
        price: "$9.69-$12.49",
        nutrition: { calories: 550, protein: 35, carbs: 54, fat: 22, sodium: 1010 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Fresh apple and berry toppings on mixed greens with grilled chicken, blue cheese crumbles, and granola oat crunch.",
        image: "/Market-Salad.webp",
        popular: true,
        tags: ["salad", "healthy", "fresh", "low-calorie"],
        uniqueDescription: `The Market Salad is Chick-fil-A's flagship healthy option — a genuinely impressive fast-food salad that could compete with entries from dedicated salad bars. If you've been skeptical about ordering a salad from a chicken sandwich chain, the Market Salad will change your perspective.

The salad features a base of green leaf lettuce, romaine, baby kale, and red cabbage. On top sits grilled or fried chicken breast, sliced strawberries, blueberries, mandarin orange segments, and crumbled blue cheese. It's finished with toasted almonds for crunch and comes with your choice of dressing, with Zesty Apple Cider Vinaigrette being the recommended pairing.

With grilled chicken, the Market Salad contains approximately 340 calories (with vinaigrette), 28 grams of protein, 29 grams of carbohydrates, and 13 grams of fat. Fiber content is high thanks to the variety of vegetables and fruits. Sodium is around 1,050mg.

Priced at $9.69 to slug: "market-salad",
        price: "$9.69-$12.49",
        nutrition: { calories: 550, protein: 35, carbs: 54, fat: 22, sodium: 1010 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "Fresh apple and berry toppings on mixed greens with grilled chicken, blue cheese crumbles, and granola oat crunch.",
        image: "/Market-Salad.webp",
        popular: true,
        tags: ["salad", "healthy", "fresh", "low-calorie"],2.49, it's one of the pricier menu items, but the portion size and quality of ingredients justify the cost. You're getting restaurant-quality produce assembled with genuine care.

The combination of sweet fruit, savory chicken, sharp blue cheese, and crunchy almonds creates a genuinely complex and satisfying flavor profile. This is a salad you won't feel disappointed about — it's actually something to look forward to.`,
        faqs: [{"question":"What is in the Chick-fil-A Market Salad?","answer":"The Market Salad contains green leaf lettuce, romaine, baby kale, red cabbage, grilled or fried chicken, strawberries, blueberries, mandarin oranges, crumbled blue cheese, and toasted almonds."},{"question":"How many calories are in the Chick-fil-A Market Salad?","answer":"With grilled chicken and Zesty Apple Cider Vinaigrette, approximately 340-550 calories depending on the dressing used."},{"question":"What is the best dressing for the Market Salad?","answer":"Chick-fil-A recommends the Zesty Apple Cider Vinaigrette, which complements the sweet fruits and savory chicken beautifully."},{"question":"Can I get the Market Salad with fried chicken instead of grilled?","answer":"Yes! You can request fried (crispy) chicken instead of grilled. Note this will add additional calories to the meal."}],
      },
      {
        name: "Side Salad",
        slug: "side-salad",
        price: "$3.99-$5.29",
        nutrition: { calories: 470, protein: 22, carbs: 40, fat: 25, sodium: 910 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "A smaller salad with mixed greens, cherry tomatoes, and Colby-Jack cheese. A great side for any meal.",
        image: "/Side-Salad.webp",
        tags: ["salad", "side"],
      },
    ],
  },
  {
    name: "Sides",
    slug: "sides",
    emoji: "🍟",
    description:
      "Complete your meal with Chick-fil-A's famous waffle fries, mac & cheese, soups, and more. Something for every craving.",
    image: "/Sides.webp",
    items: [
      {
        name: "Waffle Potato Fries® (Small)",
        slug: "waffle-fries-small",
        price: "2.35",
        nutrition: { calories: 320, protein: 4, carbs: 43, fat: 15, sodium: 270 },
        allergens: ["Soy"],
        description:
          "Crunchy on the outside, soft on the inside — Chick-fil-A's iconic waffle-cut potato fries. Cooked in canola oil.",
        image: "/Waffle-Potato-Fries-(Small).webp",
        popular: true,
        tags: ["fries", "side", "classic"],
      },
      {
        name: "Waffle Potato Fries® (Medium)",
        slug: "waffle-potato-fries-medium",
        price: "$2.35-$3.79",
        nutrition: { calories: 420, protein: 5, carbs: 45, fat: 24, sodium: 240 },
        allergens: [],
        description:
          "Waffle-cut potatoes cooked in canola oil until crispy outside and tender inside. Sprinkled with sea salt.",
        uniqueDescription: `The Medium Waffle Potato Fries® are arguably the most iconic side dish in the fast-food industry. Chick-fil-A takes real potatoes, cuts them into their signature waffle shape, and cooks them in pure canola oil until they achieve the perfect balance: a crispy, golden-brown exterior and a soft, tender interior. Finally, they are sprinkled with just the right amount of sea salt. 

Priced around $2.55 for a medium serving, these fries are designed to be the ultimate vehicle for dipping sauces. The unique waffle cut maximizes surface area, allowing you to scoop up generous amounts of Chick-fil-A Sauce, Polynesian Sauce, or Garden Herb Ranch. 

Nutritionally, a medium order contains 420 calories, 45g of carbohydrates, and 24g of fat. Notably, because they are cooked in canola oil and simply salted, they are naturally vegan-friendly and contain no major allergens, making them a safe and delicious option for many dietary preferences. Compared to traditional shoestring fries found at competitors, Waffle Fries retain their heat better and offer a more substantial, satisfying potato bite.`,
        faqs: [
          {
            question: "Are Chick-fil-A Waffle Fries vegan?",
            answer: "Yes, the Waffle Potato Fries are considered vegan. They are made from just potatoes, canola oil, and sea salt, and do not contain any animal products."
          },
          {
            question: "How many calories are in a medium Waffle Fry?",
            answer: "A medium order of Waffle Potato Fries contains 420 calories. The small has 320 calories, while the large has 600 calories."
          },
          {
            question: "What oil are the Waffle Fries cooked in?",
            answer: "Unlike the chicken (which is cooked in peanut oil), Chick-fil-A cooks their Waffle Potato Fries in canola oil."
          }
        ],
        relatedItemSlugs: ["chicken-sandwich", "chick-fil-a-sauce", "mac-and-cheese"],
        image: "/Waffle-Potato-Fries-(Medium).webp",
        popular: true,
        tags: ["side", "fries", "potato", "signature"],
      },
      {
        name: "Waffle Potato Fries® (Large)",
        slug: "waffle-fries-large",
        price: "3.45",
        nutrition: { calories: 600, protein: 8, carbs: 81, fat: 28, sodium: 510 },
        allergens: ["Soy"],
        description:
          "Go large with Chick-fil-A's famous waffle-cut fries. Perfect for sharing or a hearty appetite.",
        image: "/Waffle-Potato-Fries-(Large).webp",
        tags: ["fries", "side", "large"],
      },
      {
        name: "Mac & Cheese (Small)",
        slug: "mac-cheese-small",
        price: "3.19",
        nutrition: { calories: 270, protein: 11, carbs: 28, fat: 13, sodium: 590 },
        allergens: ["Milk", "Wheat"],
        description:
          "A rich and creamy mac & cheese made with a special blend of cheeses. A comfort food classic.",
        image: "/Mac-&-Cheese-(Small).webp",
        popular: true,
        tags: ["mac cheese", "side", "comfort food", "kids"],
      },
      {
        name: "Mac & Cheese (Medium)",
        slug: "mac-cheese-medium",
        price: "$3.99-$5.29",
        nutrition: { calories: 450, protein: 18, carbs: 46, fat: 22, sodium: 980 },
        allergens: ["Milk", "Wheat"],
        description:
          "The medium serving of Chick-fil-A's rich and creamy mac & cheese.",
        image: "/Mac-&-Cheese-(Medium).webp",
        tags: ["mac cheese", "side"],
        uniqueDescription: `When Chick-fil-A added Mac & Cheese to their permanent menu, it was genuinely big news — and after trying it, it's easy to see why. This is not your average drive-through mac and cheese. This is a rich, indulgent, multi-cheese side dish that can hold its own against sit-down restaurant versions.

The Mac & Cheese is made with a blend of cheeses including cheddar, parmesan, and romano, creating a sauce that's deeply flavorful, sharp, and creamy without being heavy. The pasta is cooked to the right consistency: tender but not mushy. The whole thing is finished in the oven with a slightly browned, cheese-crusted top that adds wonderful textural contrast.

A medium serving contains 450 calories, 18 grams of protein, 46 grams of carbohydrates, and 22 grams of fat. Sodium is around 980mg. Priced between $3.99 and $5.29.

Mac & Cheese pairs particularly well with Grilled Nuggets or Grilled Chicken Sandwich if you want to balance an indulgent side with a lighter protein. It's also a guaranteed crowd-pleaser for kids and anyone who considers mac and cheese a comfort food staple.

Note: Mac & Cheese contains dairy and wheat allergens, so it's not suitable for those with lactose intolerance or gluten sensitivity. For everyone else, it's one of the most satisfying sides Chick-fil-A has to offer.`,
        faqs: [{"question":"What cheeses are in Chick-fil-A Mac & Cheese?","answer":"Chick-fil-A's Mac & Cheese features a blend of cheddar, parmesan, and romano cheeses, creating a rich, multi-dimensional cheese sauce."},{"question":"How many calories are in Chick-fil-A Mac & Cheese (medium)?","answer":"450 calories, 18g of protein, 46g of carbs, and 22g of fat."},{"question":"Is Chick-fil-A Mac & Cheese gluten-free?","answer":"No, the Mac & Cheese contains wheat pasta and dairy. It's not suitable for those with gluten or dairy allergies."},{"question":"Is Mac & Cheese available at all Chick-fil-A locations?","answer":"Mac & Cheese is available at most US Chick-fil-A locations, though availability can vary. Check the Chick-fil-A app for your local menu."}],
      },
      {
        name: "Kale Crunch Side",
        slug: "kale-crunch-side",
        price: "3.19",
        nutrition: { calories: 170, protein: 3, carbs: 15, fat: 12, sodium: 150 },
        allergens: ["Tree Nuts", "Wheat"],
        description:
          "A blend of curly kale and green cabbage tossed in an Apple Cider and Dijon mustard dressing, topped with salted almonds.",
        image: "/Kale-Crunch-Side.webp",
        tags: ["side", "healthy", "kale", "low-calorie"],
      },
      {
        name: "Chicken Noodle Soup (Cup)",
        slug: "chicken-noodle-soup-cup",
        price: "$3.85-$5.19",
        nutrition: { calories: 190, protein: 11, carbs: 20, fat: 6, sodium: 900 },
        allergens: ["Soy", "Wheat"],
        description:
          "A hearty soup with shredded chicken, egg noodles, carrots, and celery in a savory broth.",
        image: "/Chicken-Noodle-Soup-(Cup).webp",
        tags: ["soup", "side", "comfort food"],
      },
      {
        name: "Chicken Noodle Soup (Bowl)",
        slug: "chicken-noodle-soup-bowl",
        price: "$3.85-$5.19",
        nutrition: { calories: 320, protein: 19, carbs: 33, fat: 10, sodium: 1500 },
        allergens: ["Soy", "Wheat"],
        description:
          "A larger serving of the hearty chicken noodle soup — shredded chicken, egg noodles, and veggies in a rich broth.",
        image: "/Chicken-Noodle-Soup-(Bowl).webp",
        tags: ["soup", "comfort food"],
      },
      {
        name: "Chicken Tortilla Soup",
        slug: "chicken-tortilla-soup",
        price: "4.29",
        nutrition: { calories: 280, protein: 15, carbs: 30, fat: 12, sodium: 1070 },
        allergens: ["Milk", "Soy", "Wheat"],
        description:
          "A flavorful blend of chicken, black beans, corn, and peppers in a smoky tomato-based broth, topped with tortilla strips.",
        image: "/Chicken-Tortilla-Soup.webp",
        tags: ["soup", "side", "southwest"],
      },
      {
        name: "Waffle Potato Chips",
        slug: "waffle-potato-chips",
        price: "$2.09-$2.79",
        nutrition: { calories: 220, protein: 2, carbs: 28, fat: 12, sodium: 190 },
        allergens: ["Soy"],
        description:
          "Thin, crispy waffle-cut potato chips — a crunchy snack or side option.",
        image: "/Waffle-Potato-Chips.webp",
        tags: ["chips", "side", "snack"],
      },
    ],
  },
  {
    name: "Treats",
    slug: "treats",
    emoji: "🍰",
    description:
      "Save room for dessert! From milkshakes to cookies, Chick-fil-A's treats menu is the perfect sweet ending to any meal.",
    image: "/Treats.webp",
    items: [
      {
        name: "Chocolate Chunk Cookie",
        slug: "chocolate-chunk-cookie",
        price: "$1.65-$2.19",
        nutrition: { calories: 370, protein: 4, carbs: 49, fat: 19, sodium: 240 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "A warm, gooey chocolate chunk cookie baked fresh daily. A classic treat.",
        image: "/Chocolate-Chunk-Cookie.webp",
        tags: ["dessert", "cookie", "sweet"],
      },
      {
        name: "Chocolate Fudge Brownie",
        slug: "chocolate-fudge-brownie",
        price: "$2.25-$2.99",
        nutrition: { calories: 370, protein: 5, carbs: 50, fat: 18, sodium: 160 },
        allergens: ["Milk", "Egg", "Soy", "Wheat"],
        description:
          "A rich, fudgy chocolate brownie made with real cocoa — dense, moist, and indulgent.",
        image: "/Chocolate-Fudge-Brownie.webp",
        tags: ["dessert", "brownie", "chocolate"],
      },
      {
        name: "Icedream® Cone",
        slug: "icedream-cone",
        price: "$1.69-$2.29",
        nutrition: { calories: 180, protein: 5, carbs: 30, fat: 5, sodium: 130 },
        allergens: ["Milk", "Wheat"],
        description:
          "Chick-fil-A's signature soft serve ice cream in a crispy wafer cone. A refreshing classic.",
        image: "/Icedream-Cone.webp",
        popular: true,
        tags: ["ice cream", "dessert", "sweet", "low-calorie"],
      },
      {
        name: "Icedream® Cup",
        slug: "icedream-cup",
        price: "$1.35-$1.99",
        nutrition: { calories: 140, protein: 4, carbs: 25, fat: 4, sodium: 110 },
        allergens: ["Milk"],
        description:
          "Chick-fil-A's soft serve ice cream served in a cup. Light and creamy.",
        image: "/Icedream-Cup.webp",
        tags: ["ice cream", "dessert", "low-calorie"],
      },
      {
        name: "Chocolate Milkshake",
        slug: "chocolate-milkshake",
        price: "$4.45-$6.09",
        nutrition: { calories: 600, protein: 15, carbs: 85, fat: 24, sodium: 370 },
        allergens: ["Milk", "Wheat"],
        description:
          "A hand-spun milkshake made with Icedream® and rich chocolate syrup, topped with whipped cream.",
        image: "/Chocolate-Milkshake.webp",
        popular: true,
        tags: ["milkshake", "dessert", "chocolate"],
        uniqueDescription: `The Chick-fil-A Chocolate Milkshake is a nostalgic, indulgent treat made the right way — with real Icedream® vanilla soft serve blended with rich chocolate syrup, topped with whipped cream. This is a thick, creamy, genuinely satisfying milkshake that delivers every single time.

What distinguishes this milkshake is the quality of the Icedream base. Unlike fast-food ice cream products that are often thin or overly sweet, Chick-fil-A's Icedream has a clean, dairy-forward taste with a texture that's creamy but not gummy. The chocolate blending is substantial — you get a deep chocolate flavor, not a wimpy hint of it.

The milkshake is incredibly thick and must be consumed through a straw — and you'll want to take your time with it. It's the kind of treat that makes the entire meal feel special.

Nutritionally, the Chocolate Milkshake contains approximately 590 calories, 15 grams of protein, 85 grams of carbohydrates, and 24 grams of fat. It's an obvious indulgence, but a well-worth-it occasional one. Sodium is around 370mg. Prices range from $4.45 to $6.09.

The milkshake lineup also includes Cookies & Cream and Peach (seasonal) varieties. For pure chocolate satisfaction, the classic Chocolate Milkshake is hard to beat. Pair it with a Chicken Sandwich meal for the ultimate Chick-fil-A experience.`,
        faqs: [{"question":"What is Chick-fil-A's milkshake made with?","answer":"Chick-fil-A milkshakes are made with their signature Icedream® vanilla soft-serve blended with flavored syrups, topped with whipped cream."},{"question":"How many calories are in a Chick-fil-A Chocolate Milkshake?","answer":"Approximately 590 calories for a standard size, with 15g of protein, 85g of carbs, and 24g of fat."},{"question":"What milkshake flavors does Chick-fil-A have?","answer":"Regular flavors include Chocolate, Cookies & Cream, and Vanilla. Peach Milkshake is a popular seasonal flavor available during summer."},{"question":"Is the Chick-fil-A milkshake available year-round?","answer":"Chocolate and Cookies & Cream milkshakes are available year-round. The Peach Milkshake is seasonal, typically available in summer months."}],
      },
      {
        name: "Vanilla Milkshake",
        slug: "vanilla-milkshake",
        price: "4.19",
        nutrition: { calories: 580, protein: 14, carbs: 81, fat: 24, sodium: 330 },
        allergens: ["Milk", "Wheat"],
        description:
          "A hand-spun vanilla milkshake made with Icedream®, topped with whipped cream.",
        image: "/Vanilla-Milkshake.webp",
        tags: ["milkshake", "dessert", "vanilla"],
      },
      {
        name: "Strawberry Milkshake",
        slug: "strawberry-milkshake",
        price: "4.19",
        nutrition: { calories: 560, protein: 12, carbs: 81, fat: 21, sodium: 280 },
        allergens: ["Milk", "Wheat"],
        description:
          "A hand-spun strawberry milkshake with fresh strawberry puree and Icedream®, topped with whipped cream.",
        image: "/Strawberry-Milkshake.webp",
        tags: ["milkshake", "dessert", "strawberry"],
      },
      {
        name: "Cookies & Cream Milkshake",
        slug: "cookies-cream-milkshake",
        price: "$4.45-$6.09",
        nutrition: { calories: 630, protein: 14, carbs: 90, fat: 25, sodium: 400 },
        allergens: ["Milk", "Wheat"],
        description:
          "A fan-favorite — hand-spun with Icedream® and chunks of Oreo® cookies, topped with whipped cream.",
        image: "/Cookies-&-Cream-Milkshake.webp",
        popular: true,
        tags: ["milkshake", "dessert", "oreo"],
      },
      {
        name: "Peach Milkshake",
        slug: "peach-milkshake",
        price: "$5.49-$6.49",
        nutrition: { calories: 600, protein: 12, carbs: 87, fat: 23, sodium: 290 },
        allergens: ["Milk", "Wheat"],
        description:
          "A seasonal favorite — hand-spun with real peach puree and Icedream®, topped with whipped cream.",
        image: "/Peach-Milkshake.webp",
        tags: ["milkshake", "dessert", "peach", "seasonal"],
      },
      {
        name: "Frosted Lemonade",
        slug: "frosted-lemonade",
        price: "$4.99-$6.29",
        nutrition: { calories: 350, protein: 7, carbs: 62, fat: 9, sodium: 130 },
        allergens: ["Milk"],
        description:
          "A refreshing blend of Chick-fil-A's signature lemonade and Icedream®. The ultimate summer treat.",
        image: "/Frosted-Lemonade.webp",
        popular: true,
        tags: ["frosted", "lemonade", "dessert", "seasonal"],
        uniqueDescription: `If there's one Chick-fil-A menu item that has developed a cult-like following beyond even the chicken sandwich, it might be the Frosted Lemonade. This legendary drink is deceptively simple in concept — hand-squeezed lemonade blended with Icedream® vanilla soft serve — but the result is something completely unique and addictive.

The balance is the key. The lemonade provides a bright, tart, citrusy punch, while the Icedream adds creaminess and sweetness. Blended together, the two elements don't just combine — they transform into something greater than the sum of their parts. It's simultaneously refreshing and indulgent, tangy and sweet, cold and creamy. It makes hot summer days significantly more bearable.

A standard Frosted Lemonade contains approximately 350 calories and 7 grams of protein. Carbohydrates are around 62 grams, mostly from natural sugars in the lemon and soft serve. Fat is approximately 9 grams and sodium is 130mg. Prices range from $4.35 to $6.09.

The Frosted Lemonade is also available in a Peach variety — a seasonal favorite that adds luscious, fruity sweetness to the already-excellent original. For the best experience, drink it through a straw and enjoy it before it melts.

This is the drink that turns first-time Chick-fil-A visitors into regulars. It's genuinely one of the most unique and enjoyable beverages in all of fast food.`,
        faqs: [{"question":"What is Chick-fil-A Frosted Lemonade made of?","answer":"Frosted Lemonade is made by blending Chick-fil-A's hand-squeezed lemonade with their signature Icedream® vanilla soft-serve ice cream."},{"question":"How many calories are in a Frosted Lemonade?","answer":"Approximately 350 calories for a standard serving, with 7g of protein, 62g of carbs, and 9g of fat."},{"question":"Is there a Peach Frosted Lemonade?","answer":"Yes! The Peach Frosted Lemonade adds real peach flavoring to the classic recipe. It's a seasonal menu item typically available in summer months."},{"question":"Is Chick-fil-A's lemonade hand-squeezed?","answer":"Yes! Chick-fil-A prides itself on using hand-squeezed lemonade made fresh at each restaurant, giving it a noticeably fresh, authentic flavor."}],
      },
      {
        name: "Peach Frosted Lemonade",
        slug: "peach-frosted-lemonade",
        price: "$4.99-$6.29",
        nutrition: { calories: 440, protein: 7, carbs: 80, fat: 9, sodium: 130 },
        allergens: ["Milk"],
        description:
          "Chick-fil-A lemonade with real peach puree blended with Icedream®. Sweet, tart, and refreshing.",
        image: "/Peach-Frosted-Lemonade.webp",
        tags: ["frosted", "lemonade", "peach", "seasonal"],
      },
      {
        name: "Frosted Coffee",
        slug: "frosted-coffee",
        price: "$2.19-$3.49",
        nutrition: { calories: 260, protein: 7, carbs: 44, fat: 8, sodium: 150 },
        allergens: ["Milk"],
        description:
          "Cold-brewed coffee blended with Icedream® — a creamy, coffee-lover's dream.",
        image: "/Frosted-Coffee.webp",
        tags: ["frosted", "coffee", "dessert"],
      },
    ],
  },
  {
    name: "Beverages",
    slug: "beverages",
    emoji: "🥤",
    description:
      "Refresh yourself with Chick-fil-A's signature lemonades, iced teas, sodas, and more. Fresh-squeezed lemonade is the crowd favorite.",
    image: "/Beverages.webp",
    items: [
      {
        name: "Chick-fil-A® Lemonade (Medium)",
        slug: "lemonade-medium",
        price: "$2.55-$3.79",
        nutrition: { calories: 260, protein: 0, carbs: 67, fat: 0, sodium: 25 },
        allergens: [],
        description:
          "Fresh-squeezed lemonade made with real lemon juice. A Chick-fil-A classic.",
        image: "/Chick-fil-A-Lemonade-(Medium).webp",
        popular: true,
        tags: ["beverage", "lemonade", "fresh"],
      },
      {
        name: "Diet Lemonade (Medium)",
        slug: "diet-lemonade-medium",
        price: "$2.55-$3.79",
        nutrition: { calories: 60, protein: 0, carbs: 16, fat: 0, sodium: 25 },
        allergens: [],
        description:
          "All the freshness of Chick-fil-A's lemonade with fewer calories — sweetened with Splenda®.",
        image: "/Diet-Lemonade-(Medium).webp",
        tags: ["beverage", "lemonade", "diet", "low-calorie"],
      },
      {
        name: "Sweet Tea (Medium)",
        slug: "sweet-tea-medium",
        price: "$2.19-$3.29",
        nutrition: { calories: 120, protein: 0, carbs: 32, fat: 0, sodium: 10 },
        allergens: [],
        description:
          "Southern-style sweet iced tea brewed fresh throughout the day.",
        image: "/Sweet-Tea-(Medium).webp",
        popular: true,
        tags: ["beverage", "tea", "sweet"],
      },
      {
        name: "Unsweetened Tea (Medium)",
        slug: "unsweetened-tea-medium",
        price: "$2.19-$3.29",
        nutrition: { calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 10 },
        allergens: [],
        description:
          "Classic unsweetened iced tea — brewed fresh for a clean, refreshing taste.",
        image: "/Unsweetened-Tea-(Medium).webp",
        tags: ["beverage", "tea", "zero-calorie"],
      },
      {
        name: "Coca-Cola® (Medium)",
        slug: "coca-cola-medium",
        price: "$2.19-$3.29",
        nutrition: { calories: 170, protein: 0, carbs: 45, fat: 0, sodium: 30 },
        allergens: [],
        description: "A classic Coca-Cola served ice cold.",
        image: "/Coca-Cola-(Medium).webp",
        tags: ["beverage", "soda", "cola"],
      },
      {
        name: "Dr Pepper® (Medium)",
        slug: "dr-pepper-medium",
        price: "$2.19-$3.29",
        nutrition: { calories: 170, protein: 0, carbs: 44, fat: 0, sodium: 50 },
        allergens: [],
        description: "The bold, 23-flavor taste of Dr Pepper served ice cold.",
        image: "/Dr-Pepper-(Medium).webp",
        tags: ["beverage", "soda"],
      },
      {
        name: "Sunjoy® (Medium)",
        slug: "sunjoy-medium",
        price: "$2.19-$3.29",
        nutrition: { calories: 240, protein: 0, carbs: 62, fat: 0, sodium: 20 },
        allergens: [],
        description:
          "Chick-fil-A's signature blend of lemonade and iced tea — the perfect combination.",
        image: "/Sunjoy-(Medium).webp",
        popular: true,
        tags: ["beverage", "lemonade", "tea", "signature"],
      },
      {
        name: "Simply Orange®",
        slug: "simply-orange",
        price: "2.65",
        nutrition: { calories: 160, protein: 2, carbs: 37, fat: 0, sodium: 0 },
        allergens: [],
        description: "Premium 100% pure-squeezed orange juice.",
        image: "/Simply-Orange.webp",
        tags: ["beverage", "juice", "breakfast"],
      },
      {
        name: "1% Milk",
        slug: "1-percent-milk",
        price: "2.15",
        nutrition: { calories: 90, protein: 8, carbs: 11, fat: 2, sodium: 100 },
        allergens: ["Milk"],
        description: "Cold 1% milk — a wholesome, classic beverage.",
        image: "/1-Percent-Milk.webp",
        tags: ["beverage", "milk", "kids"],
      },
      {
        name: "DASANI® Bottled Water",
        slug: "dasani-water",
        price: "2.15",
        nutrition: { calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 0 },
        allergens: [],
        description: "Pure, refreshing DASANI® purified bottled water.",
        image: "/DASANI-Bottled-Water.webp",
        tags: ["beverage", "water", "zero-calorie", "healthy"],
      },
    ],
  },
  {
    name: "Coffee",
    slug: "coffee",
    emoji: "☕",
    description:
      "Fuel your day with Chick-fil-A's handcrafted coffee drinks — from rich hot coffee to creamy cold brews.",
    image: "/Coffee.webp",
    items: [
      {
        name: "Hot Coffee",
        slug: "hot-coffee",
        price: "$2.19-$3.49",
        nutrition: { calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 0 },
        allergens: [],
        description:
          "A classic hot brewed coffee — smooth and satisfying.",
        image: "/Hot-Coffee.webp",
        tags: ["coffee", "hot", "zero-calorie"],
      },
      {
        name: "Iced Coffee",
        slug: "iced-coffee",
        price: "$2.19-$3.49",
        nutrition: { calories: 180, protein: 3, carbs: 30, fat: 6, sodium: 85 },
        allergens: ["Milk"],
        description:
          "Cold-brewed coffee poured over ice — refreshing and energizing.",
        image: "/Iced-Coffee.webp",
        popular: true,
        tags: ["coffee", "iced", "cold brew"],
      },
      {
        name: "Vanilla Iced Coffee",
        slug: "vanilla-iced-coffee",
        price: "$2.19-$3.49",
        nutrition: { calories: 210, protein: 3, carbs: 36, fat: 6, sodium: 85 },
        allergens: ["Milk"],
        description:
          "Cold-brewed coffee with a hint of vanilla sweetness, poured over ice.",
        image: "/Vanilla-Iced-Coffee.webp",
        tags: ["coffee", "iced", "vanilla"],
      },
      {
        name: "Caramel Iced Coffee",
        slug: "caramel-iced-coffee",
        price: "$2.19-$3.49",
        nutrition: { calories: 260, protein: 3, carbs: 44, fat: 8, sodium: 135 },
        allergens: ["Milk"],
        description:
          "Cold-brewed coffee with rich caramel flavor, poured over ice. Sweet and smooth.",
        image: "/Caramel-Iced-Coffee.webp",
        tags: ["coffee", "iced", "caramel"],
      },
      {
        name: "Mocha Iced Coffee",
        slug: "mocha-iced-coffee",
        price: "$2.19-$3.49",
        nutrition: { calories: 200, protein: 3, carbs: 34, fat: 6, sodium: 95 },
        allergens: ["Milk"],
        description:
          "Cold-brewed coffee blended with rich chocolate mocha syrup, poured over ice.",
        image: "/Mocha-Iced-Coffee.webp",
        tags: ["coffee", "iced", "mocha", "chocolate"],
      },
      {
        name: "Cream Cold Brew",
        slug: "cream-cold-brew",
        price: "3.79",
        nutrition: { calories: 445, protein: 4, carbs: 41, fat: 30, sodium: 95 },
        allergens: ["Milk"],
        description:
          "Rich, slow-steeped cold brew coffee topped with a creamy foam for an indulgent coffee experience.",
        image: "/Cream-Cold-Brew.webp",
        popular: true,
        tags: ["coffee", "cold brew", "cream"],
      },
      {
        name: "Caramel Cream Cold Brew",
        slug: "caramel-cream-cold-brew",
        price: "3.99",
        nutrition: { calories: 520, protein: 4, carbs: 62, fat: 30, sodium: 120 },
        allergens: ["Milk"],
        description:
          "Slow-steeped cold brew with caramel syrup, topped with a sweet cream foam.",
        image: "/Caramel-Cream-Cold-Brew.webp",
        tags: ["coffee", "cold brew", "caramel", "cream"],
      },
    ],
  },
  {
    name: "Sauces & Dressings",
    slug: "sauces",
    emoji: "🍯",
    description:
      "Elevate your meal with Chick-fil-A's legendary dipping sauces and fresh salad dressings. The Chick-fil-A Sauce is a fan obsession.",
    image: "/Sauces-&-Dressings.webp",
    items: [
      {
        name: "Chick-fil-A® Sauce",
        slug: "chick-fil-a-sauce",
        price: "0.35",
        nutrition: { calories: 140, protein: 0, carbs: 7, fat: 13, sodium: 170 },
        allergens: ["Egg", "Soy"],
        description:
          "The sauce that started a cult following — a blend of honey mustard, barbecue, and ranch. Available at grocery stores too!",
        image: "/Chick-fil-A-Sauce.webp",
        popular: true,
        tags: ["sauce", "dipping", "signature", "fan-favorite"],
      },
      {
        name: "Barbeque Sauce",
        slug: "barbeque-sauce",
        price: "0.35",
        nutrition: { calories: 45, protein: 0, carbs: 11, fat: 0, sodium: 180 },
        allergens: [],
        description: "A sweet and smoky classic BBQ dipping sauce.",
        image: "/Barbeque-Sauce.webp",
        tags: ["sauce", "dipping", "bbq"],
      },
      {
        name: "Honey Mustard Sauce",
        slug: "honey-mustard-sauce",
        price: "0.35",
        nutrition: { calories: 50, protein: 0, carbs: 12, fat: 0, sodium: 125 },
        allergens: [],
        description: "A sweet and tangy honey mustard dipping sauce.",
        image: "/Honey-Mustard-Sauce.webp",
        tags: ["sauce", "dipping", "honey mustard"],
      },
      {
        name: "Polynesian Sauce",
        slug: "polynesian-sauce",
        price: "0.35",
        nutrition: { calories: 110, protein: 0, carbs: 13, fat: 6, sodium: 210 },
        allergens: ["Soy"],
        description:
          "A bold, sweet-and-sour sauce with a unique Polynesian-inspired flavor.",
        image: "/Polynesian-Sauce.webp",
        tags: ["sauce", "dipping", "sweet"],
      },
      {
        name: "Sweet & Spicy Sriracha Sauce",
        slug: "sriracha-sauce",
        price: "0.35",
        nutrition: { calories: 45, protein: 0, carbs: 11, fat: 0, sodium: 280 },
        allergens: [],
        description: "A fiery blend of sweet and spicy sriracha flavors.",
        image: "/Sweet-&-Spicy-Sriracha-Sauce.webp",
        tags: ["sauce", "dipping", "spicy", "sriracha"],
      },
      {
        name: "Garden Herb Ranch Sauce",
        slug: "garden-herb-ranch",
        price: "0.35",
        nutrition: { calories: 100, protein: 0, carbs: 2, fat: 11, sodium: 200 },
        allergens: ["Milk", "Egg"],
        description: "A creamy herb-infused ranch dipping sauce.",
        image: "/Garden-Herb-Ranch-Sauce.webp",
        tags: ["sauce", "dipping", "ranch"],
      },
      {
        name: "Zesty Buffalo Sauce",
        slug: "zesty-buffalo-sauce",
        price: "0.35",
        nutrition: { calories: 25, protein: 0, carbs: 1, fat: 2, sodium: 570 },
        allergens: ["Milk"],
        description: "A tangy, spicy buffalo sauce with a zesty kick.",
        image: "/Zesty-Buffalo-Sauce.webp",
        tags: ["sauce", "dipping", "spicy", "buffalo"],
      },
      {
        name: "Honey Roasted BBQ Sauce",
        slug: "honey-roasted-bbq",
        price: "0.35",
        nutrition: { calories: 60, protein: 0, carbs: 14, fat: 0, sodium: 210 },
        allergens: [],
        description: "A rich, smoky barbecue sauce with honey roasted flavor.",
        image: "/Honey-Roasted-BBQ-Sauce.webp",
        tags: ["sauce", "dipping", "honey", "bbq"],
      },
      {
        name: "Avocado Lime Ranch (Dressing)",
        slug: "avocado-lime-ranch-dressing",
        price: "0.75",
        nutrition: { calories: 310, protein: 1, carbs: 4, fat: 32, sodium: 390 },
        allergens: ["Egg", "Milk"],
        description: "A creamy avocado and lime dressing with a ranch finish.",
        image: "/Avocado-Lime-Ranch-(Dressing).webp",
        tags: ["dressing", "salad", "avocado"],
      },
      {
        name: "Light Balsamic Vinaigrette",
        slug: "light-balsamic-vinaigrette",
        price: "0.75",
        nutrition: { calories: 80, protein: 0, carbs: 12, fat: 3, sodium: 290 },
        allergens: [],
        description: "A light, tangy balsamic vinaigrette — great for salads.",
        image: "/Light-Balsamic-Vinaigrette.webp",
        tags: ["dressing", "salad", "low-calorie"],
      },
      {
        name: "Fat-Free Honey Mustard",
        slug: "fat-free-honey-mustard-dressing",
        price: "0.75",
        nutrition: { calories: 90, protein: 0, carbs: 22, fat: 0, sodium: 220 },
        allergens: [],
        description: "Fat-free honey mustard dressing — all the flavor, none of the fat.",
        image: "/Fat-Free-Honey-Mustard.webp",
        tags: ["dressing", "salad", "fat-free", "low-calorie"],
      },
    ],
  },
];

// Utility helpers
export function getAllItems(): (MenuItem & { category: MenuCategory })[] {
  return menuCategories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat }))
  );
}

export function getCategoryBySlug(slug: string): MenuCategory | undefined {
  return menuCategories.find((c) => c.slug === slug);
}

export function getItemBySlug(
  categorySlug: string,
  itemSlug: string
): { item: MenuItem; category: MenuCategory } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const item = category.items.find((i) => i.slug === itemSlug);
  if (!item) return undefined;
  return { item, category };
}

export function getPopularItems(): (MenuItem & { category: MenuCategory })[] {
  return getAllItems().filter((i) => i.popular);
}

export function searchItems(
  query: string
): (MenuItem & { category: MenuCategory })[] {
  const q = query.toLowerCase();
  return getAllItems().filter(
    (i) =>
      i.name.toLowerCase().includes(q) ||
      i.description.toLowerCase().includes(q) ||
      i.category.name.toLowerCase().includes(q) ||
      (i.tags && i.tags.some((t) => t.includes(q)))
  );
}
