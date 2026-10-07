import type { Metadata } from "next";
import Link from "next/link";
import {
  Star,
  Gift,
  Smartphone,
  Coffee,
  ChevronRight,
  Award,
  Crown,
  Shield,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdUnit";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Chick-fil-A Rewards Program (Chick-fil-A One®) Guide",
  description:
    "Learn how the Chick-fil-A One® rewards program works. Discover points, benefits, tiers (Member, Silver, Red, Signature), and how to redeem free food.",
};

const tiers = [
  {
    name: "Member",
    icon: <Star className="w-6 h-6 text-gray-500" />,
    color: "bg-gray-100",
    description:
      "All users start at the Member level. Earn points on qualifying purchases and redeem them for available rewards through the app or website.",
  },
  {
    name: "Silver Member",
    icon: <Shield className="w-6 h-6 text-gray-400" />,
    color: "bg-slate-100",
    description:
      "Reached after earning a set number of points, offering a slightly higher points earning rate along with access to additional rewards and features.",
  },
  {
    name: "Red Member",
    icon: <Award className="w-6 h-6 text-[#DD0033]" />,
    color: "bg-red-50",
    description:
      "Receive increased points per dollar spent and unlock more reward options. This tier reflects higher engagement with the rewards program.",
  },
  {
    name: "Signature Member",
    icon: <Crown className="w-6 h-6 text-yellow-500" />,
    color: "bg-yellow-50",
    description:
      "The highest tier providing the most benefits, including higher point earning rates and access to exclusive rewards not available at lower tiers.",
  },
];

const faqs = [
  {
    question: "How do I join the Chick-fil-A rewards program?",
    answer:
      "You can join for free by downloading the Chick-fil-A app from the App Store or Google Play, or by creating an account on the official Chick-fil-A website.",
  },
  {
    question: "How many points do you earn per dollar at Chick-fil-A?",
    answer:
      "Regular Members earn 10 points per dollar spent. Silver Members earn 11 points, Red Members earn 12 points, and Signature Members earn 13 points per dollar spent.",
  },
  {
    question: "Can I get points without using the app?",
    answer:
      "Yes! If you place an order in-store without using the app, you can still collect points by scanning the QR code on your physical receipt using the Chick-fil-A app later.",
  },
  {
    question: "What can Chick-fil-A points be used for?",
    answer:
      "Points can be redeemed for a variety of food and beverage items on the menu, ranging from Hash Browns and Waffle Potato Chips to full entrées like the Chick-fil-A Chicken Sandwich and Salads.",
  },
  {
    question: "Do Chick-fil-A rewards expire?",
    answer:
      "Your points do not expire as long as your account remains active. However, specific reward offers (like birthday rewards or promotional items sent by your local restaurant) usually have an expiration date attached to them.",
  },
];

export default function RewardsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Rewards", href: "/rewards" },
          ]}
        />

        <AdUnit type="leaderboard" />

        <div className="mt-8 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-[#DD0033] font-bold text-sm mb-6 border border-red-100">
            <Star className="w-4 h-4 fill-current" />
            Chick-fil-A One®
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6 leading-tight">
            Chick-fil-A Rewards Program <br className="hidden md:block" />{" "}
            Points, Benefits & Tiers
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed">
            The Chick-fil-A rewards program, known as Chick-fil-A One®, allows
            customers to earn points on qualifying purchases and redeem them for
            free food rewards. With every order placed through the app or
            in-store, users can collect points that can be used for items
            ranging from sides to full entrées.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            {/* Section 1 */}
            <section className="max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                The program also includes multiple membership tiers, where
                benefits increase as more points are earned. This guide provides
                a clear breakdown of how Chick-fil-A rewards work, including
                points, tiers, and available benefits, making it easier to
                understand the system.
              </p>

              <h2 className="font-display font-bold text-3xl text-[#1A1A1A] mt-10 mb-4">
                What Is Chick-fil-A One Rewards Program?
              </h2>
              <p>
                The Chick-fil-A One® rewards program is a free loyalty system
                that allows customers to earn points on eligible purchases and
                redeem them for food rewards. It is available through the
                Chick-fil-A mobile app and website, where users can track their
                points and access available rewards.
              </p>
              <p>
                Members earn points based on their spending, which can later be
                used to claim menu items such as sides, desserts, or entrées.
                The program is designed to reward repeat purchases while
                providing a simple way to manage orders and rewards in one
                place.
              </p>

              <h2 className="font-display font-bold text-3xl text-[#1A1A1A] mt-10 mb-4">
                How Chick-fil-A Rewards Points Work
              </h2>
              <p>
                In the Chick-fil-A One® program, members earn points for every
                qualifying purchase made through the app, website, or in-store
                when linked to their account. Points are typically awarded based
                on the total amount spent, allowing users to accumulate rewards
                over time.
              </p>
              <p>
                Even if an order is placed in-store without using the app,
                points can still be added later by scanning the receipt. Once
                enough points are collected, they can be redeemed for available
                food rewards, with different items requiring different point
                amounts.
              </p>
            </section>

            {/* How to Earn steps */}
            <section>
              <h2 className="font-display font-bold text-3xl text-[#1A1A1A] mb-8">
                How to Earn Rewards Points
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#FAF7F2] border border-[#EAE3D5] rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                    <Smartphone className="w-8 h-8 text-[#DD0033]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#1A1A1A]">
                    Place an Order
                  </h3>
                  <p className="text-sm text-gray-600">
                    Customers can place an order through the app, website, or
                    in-store to qualify. Orders linked to an account are
                    eligible.
                  </p>
                </div>
                <div className="bg-[#FAF7F2] border border-[#EAE3D5] rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                    <Star className="w-8 h-8 text-[#DD0033]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#1A1A1A]">
                    Earn Points
                  </h3>
                  <p className="text-sm text-gray-600">
                    Points are earned based on the total amount spent. Once the
                    order is completed, points are added to the account.
                  </p>
                </div>
                <div className="bg-[#FAF7F2] border border-[#EAE3D5] rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                    <Gift className="w-8 h-8 text-[#DD0033]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#1A1A1A]">
                    Redeem Rewards
                  </h3>
                  <p className="text-sm text-gray-600">
                    Accumulated points can be used to redeem available food
                    rewards directly through the app or website.
                  </p>
                </div>
              </div>
            </section>

            {/* Tiers */}
            <section>
              <h2 className="font-display font-bold text-3xl text-[#1A1A1A] mb-8">
                Rewards Tiers & Benefits
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`rounded-2xl p-6 border border-black/5 ${tier.color}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-white p-2.5 rounded-xl shadow-sm">
                        {tier.icon}
                      </div>
                      <h3 className="font-display font-bold text-xl text-[#1A1A1A]">
                        {tier.name}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Remaining Prose Content */}
            <section className="max-w-none text-gray-700 leading-relaxed space-y-4">
              <h2 className="font-display font-bold text-3xl text-[#1A1A1A] mt-10 mb-4">
                Chick-fil-A Rewards Benefits
              </h2>
              <p>
                The Chick-fil-A One® rewards program offers a range of benefits
                beyond just earning points. Members can redeem points for free
                food items, receive occasional rewards from participating
                locations, and access exclusive offers through the app.
              </p>
              <p>
                Additional benefits may include birthday rewards, the ability to
                gift rewards to others, and early access to certain menu updates
                or promotions depending on membership tier. These features make
                the program more flexible while providing added value for
                regular customers.
              </p>

              <h2 className="font-display font-bold text-3xl text-[#1A1A1A] mt-10 mb-4">
                How to Redeem
              </h2>
              <p>
                Redeeming rewards in the Chick-fil-A One® program is done
                through the app or website. Once enough points are available,
                users can select a reward from the rewards section and apply it
                to their order during checkout.
              </p>
              <p>
                Rewards can be used for various menu items depending on the
                number of points required. After selecting a reward, it is added
                to the order and redeemed at the time of purchase, making the
                process quick and easy to complete.
              </p>

              <h2 className="font-display font-bold text-3xl text-[#1A1A1A] mt-10 mb-4">
                Points Value (Is It Worth It?)
              </h2>
              <p>
                The value of points in the Chick-fil-A One® rewards program
                depends on how they are redeemed, as different rewards require
                different point amounts. In general, points can be exchanged for
                items like sides, desserts, or entrées, with lower-cost items
                requiring fewer points and larger items requiring more.
              </p>
              <p>
                Since points are earned based on spending, the overall value
                comes from how frequently rewards are redeemed compared to total
                purchases. For regular customers, the program can provide
                consistent value over time, especially when points are used on
                higher-value rewards.
              </p>

              <h2 className="font-display font-bold text-3xl text-[#1A1A1A] mt-10 mb-4">
                Final Words
              </h2>
              <p>
                The Chick-fil-A One® rewards program offers a simple way to earn
                points and redeem them for food items across the menu. With a
                structured system based on spending and tier progression, it
                provides a clear overview of how rewards are accumulated and
                used.
              </p>
              <p>
                Understanding how points, tiers, and rewards work makes it
                easier to decide how to use the program effectively. Whether
                ordering occasionally or regularly, having access to this
                information helps in making better use of available rewards.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <AdUnit type="rectangle" />

              <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#EAE3D5]">
                <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/menu"
                      className="flex items-center text-[#DD0033] hover:text-[#B8002A] font-medium transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mr-1" /> Browse Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/catering"
                      className="flex items-center text-[#DD0033] hover:text-[#B8002A] font-medium transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mr-1" /> Order Catering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/coupons"
                      className="flex items-center text-[#DD0033] hover:text-[#B8002A] font-medium transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mr-1" /> View Coupons
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <AdUnit type="leaderboard" />

        <div className="mt-16 max-w-4xl">
          <FAQAccordion items={faqs} title="Rewards FAQs" />
        </div>
      </div>
    </>
  );
}
