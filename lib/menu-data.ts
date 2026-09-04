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
        image: "/1%-Milk.webp",
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
