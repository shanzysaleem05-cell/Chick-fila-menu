export interface CateringItemSize {
  label: string;
  servesApprox: string;
  priceFrom: number;
}

export interface CateringItem {
  name: string;
  slug: string;
  description: string;
  uniqueDescription?: string;
  image: string;
  sizes: CateringItemSize[];
  caloriesPerServing?: number | string;
  allergens?: string[];
  faqs?: { question: string; answer: string }[];
  relatedItemSlugs?: string[];
}

export interface CateringCategory {
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  image: string;
  items: CateringItem[];
}

export const cateringCategories: CateringCategory[] = [
  {
    name: "Trays",
    slug: "trays",
    description: "Perfect for parties and gatherings. Choose from Nuggets, Strips, or Wraps.",
    longDescription: "Our catering trays are the centerpiece of any great gathering. Whether you are hosting a corporate luncheon, a family reunion, or a birthday party, our freshly prepared trays are designed to satisfy everyone. The Chick-fil-A Nugget Tray is a fan favorite, featuring bite-sized pieces of tender chicken breast, perfectly seasoned and cooked in 100% refined peanut oil. For a lighter option, consider our Cool Wrap Tray or a refreshing Fruit Tray. When ordering, keep in mind that our Small trays typically serve 8-10 people, Medium serves 15-18, and Large serves 25-30. Please note that prices and availability may vary by location, and we recommend placing your catering order at least 24 hours in advance to ensure availability.",
    image: "/Chick-fil-A-Nuggets-(30-ct).webp",
    items: [
      {
        name: "Chick-fil-A® Nugget Tray",
        slug: "nugget-tray",
        description: "Bite-sized pieces of tender chicken breast, seasoned to perfection.",
        uniqueDescription: "Our Nugget Trays are the ultimate crowd-pleaser. Whether you are hosting a tailgate, a birthday party, or a corporate lunch, these bite-sized pieces of tender chicken breast are always a hit. Each nugget is carefully breaded by hand and pressure-cooked in 100% refined peanut oil to ensure a golden, crispy outside and a juicy, flavorful inside.",
        image: "/Chick-fil-A-Nuggets-(30-ct).webp",
        caloriesPerServing: 260,
        sizes: [
          { label: "Small (64-count)", servesApprox: "8", priceFrom: 41.50 },
          { label: "Medium (120-count)", servesApprox: "15", priceFrom: 74.00 },
          { label: "Large (200-count)", servesApprox: "25", priceFrom: 119.50 }
        ],
        allergens: ["Wheat", "Egg", "Milk", "Soy", "Peanut"],
        faqs: [
          { question: "How many nuggets should I order per person?", answer: "We generally recommend planning for about 8 nuggets per person for a standard meal, or 5-6 per person if it's just a snack or appetizer." },
          { question: "Are sauces included with the tray?", answer: "Yes! When you order a tray, you get to choose from our selection of signature sauces. An 8oz squeeze bottle is usually provided for larger trays." }
        ],
        relatedItemSlugs: ["chick-n-strips-tray", "cool-wrap-tray", "mac-and-cheese-tray"]
      },
      {
        name: "Chick-n-Strips™ Tray",
        slug: "chick-n-strips-tray",
        description: "Made from the most tender part of the chicken breast.",
        uniqueDescription: "The Chick-n-Strips™ Tray is perfect for those who want a hearty, satisfying chicken option. Made from the most tender part of the chicken breast, these strips are marinated in special seasonings, hand-breaded, and pressure-cooked in 100% refined peanut oil. They pair perfectly with our signature Chick-fil-A Sauce or Honey Mustard.",
        image: "/Chick-n-Strips-(10-ct).webp",
        caloriesPerServing: 310,
        sizes: [
          { label: "Small (24-count)", servesApprox: "8", priceFrom: 41.50 },
          { label: "Medium (45-count)", servesApprox: "15", priceFrom: 74.00 },
          { label: "Large (75-count)", servesApprox: "25", priceFrom: 119.50 }
        ],
        allergens: ["Wheat", "Egg", "Milk", "Soy", "Peanut"],
        relatedItemSlugs: ["nugget-tray", "mac-and-cheese-tray"]
      },
      {
        name: "Grilled Chicken Cool Wrap® Tray",
        slug: "cool-wrap-tray",
        description: "Sliced grilled chicken breast nestled in a fresh mix of green leaf lettuce.",
        uniqueDescription: "For a lighter, refreshing catering option, the Grilled Chicken Cool Wrap® Tray is an excellent choice. It features sliced grilled chicken breast nestled in a fresh mix of green leaf lettuce, tightly rolled in a flaxseed flour flatbread. We recommend pairing these with our Avocado Lime Ranch dressing.",
        image: "/Chick-fil-A-Cool-Wrap.webp",
        caloriesPerServing: 350,
        sizes: [
          { label: "Small (6 wrap halves)", servesApprox: "6", priceFrom: 31.00 },
          { label: "Medium (10 wrap halves)", servesApprox: "10", priceFrom: 48.00 },
          { label: "Large (14 wrap halves)", servesApprox: "14", priceFrom: 62.50 }
        ],
        allergens: ["Wheat", "Milk", "Soy"],
        relatedItemSlugs: ["fruit-tray", "garden-salad-tray"]
      }
    ]
  },
  {
    name: "Sides",
    slug: "sides",
    description: "Complement your main dish with Mac & Cheese, Fruit, or Salads.",
    image: "/Mac-&-Cheese-(Large).webp",
    items: [
      {
        name: "Mac & Cheese Tray",
        slug: "mac-and-cheese-tray",
        description: "A classic macaroni and cheese recipe featuring a special blend of cheeses.",
        uniqueDescription: "No gathering is complete without our Mac & Cheese. Baked in-restaurant every day, this classic side dish features a special blend of cheeses including Parmesan, Cheddar, and Romano. The top is baked to a golden brown, creating a crispy, cheesy crust that everyone loves.",
        image: "/Mac-&-Cheese-(Medium).webp",
        caloriesPerServing: 270,
        sizes: [
          { label: "Small Pan", servesApprox: "10", priceFrom: 38.00 },
          { label: "Large Pan", servesApprox: "20", priceFrom: 72.00 }
        ],
        allergens: ["Wheat", "Egg", "Milk", "Soy"],
        relatedItemSlugs: ["nugget-tray", "chick-n-strips-tray"]
      },
      {
        name: "Fruit Tray",
        slug: "fruit-tray",
        description: "A great-tasting, nutritious fruit mix made with mandarin oranges, fresh strawberries, red and green apple pieces.",
        image: "/Fruit-Cup.webp",
        caloriesPerServing: 60,
        sizes: [
          { label: "Small", servesApprox: "12", priceFrom: 34.00 },
          { label: "Large", servesApprox: "26", priceFrom: 65.00 }
        ],
        relatedItemSlugs: ["cool-wrap-tray", "garden-salad-tray"]
      }
    ]
  },
  {
    name: "Breakfast",
    slug: "breakfast",
    description: "Start the day right with Chick-n-Minis or Biscuit trays.",
    image: "/Breakfast.webp",
    items: [
      {
        name: "Chick-n-Minis™ Tray",
        slug: "chick-n-minis-tray",
        description: "Bite-sized Chick-fil-A® Nuggets nestled in warm, mini yeast rolls.",
        uniqueDescription: "The perfect morning treat. Bite-sized Chick-fil-A® Nuggets nestled in warm, mini yeast rolls that are lightly brushed with a honey butter spread. Perfect for early morning meetings or weekend family breakfasts.",
        image: "/Chick-n-Minis-(10-ct).webp",
        caloriesPerServing: 90,
        sizes: [
          { label: "Small (20-count)", servesApprox: "5", priceFrom: 22.00 },
          { label: "Large (40-count)", servesApprox: "10", priceFrom: 43.50 }
        ],
        allergens: ["Wheat", "Egg", "Milk", "Soy", "Peanut"],
        faqs: [
          { question: "Can I order Chick-n-Minis all day?", answer: "No, Chick-n-Minis and all breakfast catering items are only available during morning breakfast hours (typically until 10:30 AM)." }
        ]
      }
    ]
  },
  {
    name: "Entrées",
    slug: "entrees",
    description: "Our classic sandwiches available in bulk for any occasion.",
    image: "/Chick-fil-A-Chicken-Sandwich.webp",
    items: [
      {
        name: "Chick-fil-A® Chicken Sandwich",
        slug: "chicken-sandwich",
        description: "A boneless breast of chicken seasoned to perfection, freshly breaded, pressure cooked in 100% refined peanut oil.",
        uniqueDescription: "The classic Chick-fil-A® Chicken Sandwich that started it all, now available in bulk for your catering needs. A boneless breast of chicken seasoned to perfection, freshly breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttery bun with dill pickle chips.",
        image: "/Chick-fil-A-Chicken-Sandwich.webp",
        caloriesPerServing: 420,
        sizes: [
          { label: "Individual", servesApprox: "1", priceFrom: 4.85 },
          { label: "10-Pack", servesApprox: "10", priceFrom: 48.50 }
        ],
        allergens: ["Wheat", "Egg", "Milk", "Soy", "Peanut"]
      },
      {
        name: "Spicy Chicken Sandwich",
        slug: "spicy-chicken-sandwich",
        description: "A boneless breast of chicken seasoned with a spicy blend of peppers.",
        image: "/Spicy-Chicken-Sandwich.webp",
        caloriesPerServing: 450,
        sizes: [
          { label: "Individual", servesApprox: "1", priceFrom: 5.15 },
          { label: "10-Pack", servesApprox: "10", priceFrom: 51.50 }
        ],
        allergens: ["Wheat", "Egg", "Milk", "Soy", "Peanut"]
      }
    ]
  },
  {
    name: "Salads & Wraps",
    slug: "salads",
    description: "Freshly prepared salads and wraps made daily.",
    image: "/Salads.webp",
    items: [
      {
        name: "Cobb Salad",
        slug: "cobb-salad",
        description: "Chick-fil-A® Nuggets, freshly breaded and pressure-cooked, sliced and served on a fresh bed of mixed greens.",
        image: "/Cobb-Salad.webp",
        caloriesPerServing: 850,
        sizes: [
          { label: "Individual Salad", servesApprox: "1", priceFrom: 9.75 }
        ],
        allergens: ["Wheat", "Egg", "Milk", "Soy", "Peanut"]
      }
    ]
  },
  {
    name: "Sides & Treats",
    slug: "treats",
    description: "Waffle potato chips and delicious baked treats.",
    image: "/Treats.webp",
    items: [
      {
        name: "Chocolate Chunk Cookie Tray",
        slug: "cookie-tray",
        description: "Our large, warm, gooey chocolate chunk cookies.",
        image: "/Chocolate-Chunk-Cookie.webp",
        caloriesPerServing: 350,
        sizes: [
          { label: "Small (12-count)", servesApprox: "12", priceFrom: 19.50 },
          { label: "Large (24-count)", servesApprox: "24", priceFrom: 37.50 }
        ],
        allergens: ["Wheat", "Egg", "Milk", "Soy"]
      },
      {
        name: "Waffle Potato Chips",
        slug: "waffle-chips",
        description: "Kettle-cooked waffle potato chips.",
        image: "/Waffle-Potato-Chips.webp",
        caloriesPerServing: 220,
        sizes: [
          { label: "Individual Bag", servesApprox: "1", priceFrom: 2.15 }
        ]
      }
    ]
  },
  {
    name: "Beverages",
    slug: "beverages",
    description: "Gallon-sized beverages including Iced Tea and Lemonade.",
    image: "/Beverages.webp",
    items: [
      {
        name: "Gallon Freshly-Brewed Iced Tea",
        slug: "gallon-iced-tea",
        description: "Freshly-brewed each day from a premium blend of tea leaves.",
        image: "/Sweet-Tea-(Medium).webp",
        caloriesPerServing: 120,
        sizes: [
          { label: "1 Gallon", servesApprox: "10", priceFrom: 7.25 }
        ]
      },
      {
        name: "Gallon Chick-fil-A® Lemonade",
        slug: "gallon-lemonade",
        description: "Classic Chick-fil-A Lemonade, made from real lemon juice, sugar, and water.",
        image: "/Chick-fil-A-Lemonade-(Medium).webp",
        caloriesPerServing: 220,
        sizes: [
          { label: "1 Gallon", servesApprox: "10", priceFrom: 11.50 }
        ]
      }
    ]
  },
  {
    name: "Packaged Meals",
    slug: "packaged-meals",
    description: "Individual boxed meals complete with entrees and sides.",
    image: "/Chick-fil-A-Chicken-Sandwich.webp",
    items: [
      {
        name: "Chick-fil-A® Chicken Sandwich Packaged Meal",
        slug: "chicken-sandwich-meal",
        description: "Includes a Chick-fil-A® Chicken Sandwich, Waffle Potato Chips, and a Chocolate Chunk Cookie.",
        image: "/Chick-fil-A-Chicken-Sandwich.webp",
        caloriesPerServing: 990,
        sizes: [
          { label: "Individual Meal", servesApprox: "1", priceFrom: 8.50 }
        ],
        allergens: ["Wheat", "Egg", "Milk", "Soy", "Peanut"]
      }
    ]
  }
];

export function getCateringCategoryBySlug(slug: string): CateringCategory | undefined {
  return cateringCategories.find((c) => c.slug === slug);
}

export function getCateringItemBySlug(categorySlug: string, itemSlug: string): { item: CateringItem; category: CateringCategory } | undefined {
  const category = getCateringCategoryBySlug(categorySlug);
  if (!category) return undefined;
  
  const item = category.items.find((i) => i.slug === itemSlug);
  if (!item) return undefined;

  return { item, category };
}

export function getAllCateringItems(): (CateringItem & { category: CateringCategory })[] {
  const all: (CateringItem & { category: CateringCategory })[] = [];
  cateringCategories.forEach((cat) => {
    cat.items.forEach((item) => {
      all.push({ ...item, category: cat });
    });
  });
  return all;
}
