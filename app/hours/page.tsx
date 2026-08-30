import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, Info, MapPin } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdUnit";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Chick-fil-A Hours 2026: Open & Close Times, Breakfast & Holidays",
  description:
    "Chick-fil-A opens 6:30 AM Mon–Sat, breakfast ends 10:30 AM, closes ~9 PM. Closed Sundays. See holiday hours, drive-thru times & location finder. 2026 guide.",
  alternates: {
    canonical: "https://chick-fila-menus.com/hours",
  },
  openGraph: {
    title: "Chick-fil-A Hours 2026: Open & Close Times Near You",
    url: "https://chick-fila-menus.com/hours",
  },
};

const hoursFaqs = [
  {
    question: "What are Chick-fil-A hours today?",
    answer:
      "Most Chick-fil-A restaurants operate from 6:30 AM to 9:00 PM Monday through Saturday, but exact hours vary by location. Some drive-thrus remain open until 10:00 PM. The official Chick-fil-A app or restaurant locator provides the location-specific schedule.",
  },
  {
    question: "What time does Chick-fil-A breakfast end?",
    answer:
      "Chick-fil-A breakfast typically ends at 10:30 AM, Monday through Saturday. After this cutoff, the restaurant switches from its breakfast menu to lunch and dinner selections.",
  },
  {
    question: "Is Chick-fil-A open on Thanksgiving?",
    answer:
      "No. Chick-fil-A restaurants across the U.S. are closed on Thanksgiving Day. If you need Chick-fil-A around the holiday, Christmas Eve and other holiday schedules should be checked with your local restaurant because hours may vary.",
  },
  {
    question: "Is Chick-fil-A open on Christmas?",
    answer:
      "No. All U.S. Chick-fil-A restaurants are closed on Christmas Day. Christmas Eve is generally open, although restaurants may use reduced hours.",
  },
  {
    question: "Is Chick-fil-A open on July 4?",
    answer:
      "Yes, Chick-fil-A restaurants are generally open on July 4, but hours vary by location. Checking the local restaurant before visiting is recommended.",
  },
  {
    question: "Is Chick-fil-A open on Labor Day?",
    answer:
      "Yes. Chick-fil-A states that U.S. restaurants are open on Labor Day, although operating hours can vary by location.",
  },
  {
    question: "Can Chick-fil-A hours change during holidays?",
    answer:
      "Yes. Individual restaurants may adjust their schedules for holidays and special circumstances. Chick-fil-A recommends checking the local restaurant for the latest information.",
  },
  {
    question: "Can you order Chick-fil-A breakfast on the app?",
    answer:
      "Yes. Breakfast items can generally be ordered through the Chick-fil-A app while the selected restaurant is serving breakfast.",
  },
];

export default function HoursPage() {
  const siteUrl = "https://chick-fila-menus.com";

  const hoursJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        name: "Chick-fil-A",
        url: siteUrl,
        description: "Chick-fil-A restaurant hours guide — open Mon–Sat 6:30 AM to 9 PM. Closed Sundays.",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "06:30",
            closes: "21:00",
          },
        ],
        specialOpeningHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            validFrom: "2026-11-26",
            validThrough: "2026-11-26",
            opens: "00:00",
            closes: "00:00",
            description: "Closed on Thanksgiving Day",
          },
          {
            "@type": "OpeningHoursSpecification",
            validFrom: "2026-12-25",
            validThrough: "2026-12-25",
            opens: "00:00",
            closes: "00:00",
            description: "Closed on Christmas Day",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: hoursFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Hours", item: `${siteUrl}/hours` },
        ],
      },
    ],
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hoursJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Hours", href: "/hours" },
        ]}
      />

      <AdUnit type="leaderboard" />

      {/* Hero Section */}
      <div className="mt-8 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-sm mb-6 border border-emerald-100">
          <Clock className="w-4 h-4" />
          Hours Guide
        </div>
        <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-4 leading-tight max-w-4xl">
          Chick-fil-A Hours: Breakfast, Lunch & Holiday Times (Guide 2026)
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-4xl leading-relaxed">
          Chick-fil-A restaurants are generally open Monday through Saturday
          from 6:30 AM to 9:00 PM, with some locations offering later service.
          The drive-thru may remain open until 10:00 PM, while breakfast runs
          until 10:30 AM and lunch begins immediately afterward.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12 flex gap-4 items-start">
        <Info className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-amber-800 text-sm leading-relaxed">
          <strong>Important Note:</strong> Chick-fil-A restaurants are closed
          every Sunday, Thanksgiving Day, and Christmas Day. Because individual
          restaurant schedules can vary, the Chick-fil-A app or official
          location finder is the best way to confirm today's hours before
          visiting.
        </p>
      </div>

      {/* Content Sections */}
      <article className="max-w-none text-[#1A1A1A] leading-relaxed space-y-6 text-lg">
        <h2 className="font-display font-bold text-3xl mt-12 mb-4">
          Chick-fil-A Hours
        </h2>
        <p>
          For most U.S. restaurants, regular Chick-fil-A hours begin at 6:30 AM
          Monday through Saturday and continue until 9:00 PM. Some restaurants
          offer service later than the minimum operating schedule, and the
          drive-thru can remain open until approximately 10:00 PM at locations
          that provide those extended hours.
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-[#EAE3D5] overflow-hidden my-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#FCFAF5] border-b border-[#EAE3D5] text-xs text-gray-600 uppercase tracking-wider">
                  <th className="py-4 px-4 font-bold text-[#1A1A1A] whitespace-nowrap">
                    Day
                  </th>
                  <th className="py-4 px-4 font-bold text-[#1A1A1A] whitespace-nowrap">
                    Restaurant Hours
                  </th>
                  <th className="py-4 px-4 font-bold text-[#1A1A1A] whitespace-nowrap">
                    Breakfast Hours
                  </th>
                  <th className="py-4 px-4 font-bold text-[#1A1A1A] whitespace-nowrap">
                    Lunch & Dinner
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#1A1A1A] text-sm">
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ].map((day) => (
                  <tr
                    key={day}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 font-bold text-gray-800">{day}</td>
                    <td className="py-3 px-4">6:30 AM–9:00 PM*</td>
                    <td className="py-3 px-4">6:30–10:30 AM</td>
                    <td className="py-3 px-4">10:30 AM–close</td>
                  </tr>
                ))}
                <tr className="bg-red-50 text-[#DD0033] border-t border-[#EAE3D5]">
                  <td className="py-3 px-4 font-bold">Sunday</td>
                  <td className="py-3 px-4 font-semibold">Closed</td>
                  <td className="py-3 px-4 font-semibold">Closed</td>
                  <td className="py-3 px-4 font-semibold">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-sm text-gray-500 italic">
          *These are the standard minimum operating hours Chick-fil-A publishes;
          individual restaurants can have different schedules or extended
          service.
        </p>
        <p>
          The most important point is that these are typical hours rather than a
          guarantee for every restaurant. Airports, malls, college campuses,
          hospitals, food courts, and other nontraditional locations can follow
          different schedules.
        </p>

        <AdUnit type="responsive" />

        <h2 className="font-display font-bold text-3xl mt-12 mb-4">
          Chick-fil-A Breakfast Hours
        </h2>
        <p>
          <Link
            href="/menu/breakfast"
            className="text-[#DD0033] font-semibold hover:underline"
          >
            Chick-fil-A breakfast
          </Link>{" "}
          is served Monday through Saturday, typically from 6:30 AM to 10:30 AM.
          Breakfast ends at 10:30 AM when the menu changes to lunch.
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-[#EAE3D5] overflow-hidden my-8 max-w-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[300px]">
              <thead>
                <tr className="bg-[#FCFAF5] border-b border-[#EAE3D5] text-xs text-gray-600 uppercase tracking-wider">
                  <th className="py-4 px-4 font-bold text-[#1A1A1A] whitespace-nowrap">
                    Day
                  </th>
                  <th className="py-4 px-4 font-bold text-[#1A1A1A] whitespace-nowrap">
                    Breakfast Hours
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#1A1A1A] text-sm">
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-800">
                    Monday–Saturday
                  </td>
                  <td className="py-3 px-4">6:30 AM – 10:30 AM</td>
                </tr>
                <tr className="bg-red-50 text-[#DD0033] border-t border-[#EAE3D5]">
                  <td className="py-3 px-4 font-bold">Sunday</td>
                  <td className="py-3 px-4 font-semibold">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>
          These are the standard breakfast hours, but individual locations may
          vary. Check your local restaurant before visiting, especially on
          holidays or at nontraditional locations.
        </p>

        <h2 className="font-display font-bold text-3xl mt-12 mb-4">
          Chick-fil-A Lunch Hours
        </h2>
        <p>
          Chick-fil-A lunch begins at 10:30 AM, immediately after breakfast
          ends. Unlike breakfast, there is no separate afternoon lunch cutoff;
          lunch and dinner items are generally served from 10:30 AM until the
          restaurant closes.
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-[#EAE3D5] overflow-hidden my-8 max-w-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[300px]">
              <thead>
                <tr className="bg-[#FCFAF5] border-b border-[#EAE3D5] text-xs text-gray-600 uppercase tracking-wider">
                  <th className="py-4 px-4 font-bold text-[#1A1A1A] whitespace-nowrap">
                    Service
                  </th>
                  <th className="py-4 px-4 font-bold text-[#1A1A1A] whitespace-nowrap">
                    Typical Time
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#1A1A1A] text-sm">
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-800">
                    Breakfast
                  </td>
                  <td className="py-3 px-4">6:30 AM–10:30 AM</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-800">Lunch</td>
                  <td className="py-3 px-4">10:30 AM–close</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-800">Dinner</td>
                  <td className="py-3 px-4">10:30 AM–close</td>
                </tr>
                <tr className="border-t border-[#EAE3D5] hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-800">
                    Drive-thru
                  </td>
                  <td className="py-3 px-4">Usually until 10:00 PM*</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-sm text-gray-500 italic">
          *Some locations have different drive-thru hours.
        </p>

        <p>
          The lunch menu includes popular choices such as the Chicken Sandwich,
          Spicy Chicken Sandwich, Deluxe Sandwich, Nuggets, Grilled Nuggets,
          Chick-n-Strips, Cool Wrap, salads, waffle fries, mac & cheese, and
          other sides. Chick-fil-A states that lunch and dinner use the same
          general menu, so customers do not have to wait for a separate dinner
          service.
        </p>

        <AdUnit type="rectangle" />

        <h2 className="font-display font-bold text-3xl mt-12 mb-4">
          Chick-fil-A Holiday Hours
        </h2>
        <p>
          Holiday schedules can differ from regular weekly hours. Chick-fil-A
          confirms that all U.S. restaurants are closed on Thanksgiving Day and
          Christmas Day. Other holidays may have normal or reduced hours
          depending on the restaurant.
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-[#EAE3D5] overflow-hidden my-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#FCFAF5] border-b border-[#EAE3D5] text-xs text-gray-600 uppercase tracking-wider">
                  <th className="py-4 px-4 font-bold text-[#1A1A1A] whitespace-nowrap">
                    Holiday
                  </th>
                  <th className="py-4 px-4 font-bold text-[#1A1A1A] whitespace-nowrap">
                    Typical Status
                  </th>
                  <th className="py-4 px-4 font-bold text-[#1A1A1A] whitespace-nowrap">
                    Important Note
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#1A1A1A] text-sm">
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-800">
                    New Year's Day
                  </td>
                  <td className="py-3 px-4 text-emerald-600 font-medium">
                    Open
                  </td>
                  <td className="py-3 px-4">
                    Some locations may use limited hours
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-800">
                    New Year's Eve
                  </td>
                  <td className="py-3 px-4 text-emerald-600 font-medium">
                    Open
                  </td>
                  <td className="py-3 px-4">Limited hours may apply</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-800">
                    Martin Luther King Jr. Day
                  </td>
                  <td className="py-3 px-4 text-emerald-600 font-medium">
                    Open
                  </td>
                  <td className="py-3 px-4">Location schedules can vary</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-800">
                    Presidents' Day
                  </td>
                  <td className="py-3 px-4 text-emerald-600 font-medium">
                    Open
                  </td>
                  <td className="py-3 px-4">
                    Some locations may have limited hours
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-800">
                    Memorial Day
                  </td>
                  <td className="py-3 px-4 text-emerald-600 font-medium">
                    Usually open
                  </td>
                  <td className="py-3 px-4">Confirm local hours</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-800">July 4</td>
                  <td className="py-3 px-4 text-emerald-600 font-medium">
                    Open
                  </td>
                  <td className="py-3 px-4">Hours vary by restaurant</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-800">
                    Labor Day
                  </td>
                  <td className="py-3 px-4 text-emerald-600 font-medium">
                    Open
                  </td>
                  <td className="py-3 px-4">Hours vary by restaurant</td>
                </tr>
                <tr className="bg-red-50 text-[#DD0033] border-t border-[#EAE3D5]">
                  <td className="py-3 px-4 font-bold">Thanksgiving Day</td>
                  <td className="py-3 px-4 font-bold">Closed</td>
                  <td className="py-3 px-4 font-semibold">
                    All U.S. restaurants closed
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-800">
                    Christmas Eve
                  </td>
                  <td className="py-3 px-4 text-emerald-600 font-medium">
                    Usually open
                  </td>
                  <td className="py-3 px-4">May have reduced hours</td>
                </tr>
                <tr className="bg-red-50 text-[#DD0033] border-t border-[#EAE3D5]">
                  <td className="py-3 px-4 font-bold">Christmas Day</td>
                  <td className="py-3 px-4 font-bold">Closed</td>
                  <td className="py-3 px-4 font-semibold">
                    All U.S. restaurants closed
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>
          Chick-fil-A's official holiday guidance states that New Year's Day and
          New Year's Eve are generally open unless the holiday falls on a
          Sunday, while July 4 and Labor Day are also generally open with
          location-specific schedules. Christmas Eve is generally open unless it
          falls on Sunday, but reduced hours may apply.
        </p>
        <p>
          Holiday schedules deserve extra attention because a restaurant that
          normally operates until 9:00 PM may close earlier for a holiday or
          local event.
        </p>

        <h3 className="font-display font-bold text-2xl mt-10 mb-3">
          Is Chick-fil-A Open on Sunday?
        </h3>
        <p>
          No. Chick-fil-A restaurants are normally closed every Sunday. Sunday
          closure is part of the company's long-standing operating practice, so
          customers should not expect regular restaurant, drive-thru, mobile
          ordering, or standard catering service on Sunday.
        </p>
        <p>
          This also matters when a holiday falls on Sunday. A restaurant does
          not shift its normal Sunday schedule simply because another holiday
          would ordinarily be an operating day. The safest approach is to check
          the specific restaurant before planning a Sunday meal or event.
        </p>

        <h3 className="font-display font-bold text-2xl mt-10 mb-3">
          Chick-fil-A Hours Near Me
        </h3>
        <p>
          The most reliable way to find Chick-fil-A hours near you is to use the
          official Chick-fil-A restaurant locator or the Chick-fil-A app. The
          location search lets customers enter an address, city, state, ZIP
          code, or use their current location to identify nearby restaurants.
        </p>
        <p>
          This is more accurate than relying on a general nationwide schedule
          because nearby restaurants can have different hours. A location inside
          a shopping center, airport, hospital, university, or another special
          venue may operate on a different timetable.
        </p>

        <h3 className="font-display font-bold text-2xl mt-10 mb-3">
          What Time Does Chick-fil-A Open?
        </h3>
        <p>
          Most Chick-fil-A restaurants open at 6:30 AM Monday through Saturday.
          This is also the usual starting time for breakfast service.
          Chick-fil-A describes 6:30 AM as the minimum opening time for its
          standard restaurants, although individual locations can vary.
        </p>

        <h3 className="font-display font-bold text-2xl mt-10 mb-3">
          What Time Does Chick-fil-A Close?
        </h3>
        <p>
          The standard restaurant closing time is generally 9:00 PM Monday
          through Saturday, although some locations operate later. Chick-fil-A's
          official support information notes that some restaurants offer
          services beyond the standard schedule.
        </p>
        <p>
          The drive-thru may remain available until 10:00 PM, but that is not
          universal. A restaurant's dining room, drive-thru, delivery, and
          mobile ordering services can have different availability.
        </p>

        <h3 className="font-display font-bold text-2xl mt-10 mb-3">
          Does Chick-fil-A Have Different Drive-Thru Hours?
        </h3>
        <p>
          Yes. Drive-thru hours can extend beyond the restaurant's standard
          dining-room schedule. Chick-fil-A says that the drive-thru remains
          open until 10:00 PM Monday through Saturday at locations offering that
          service, while restaurant hours can vary by location.
        </p>

        <h3 className="font-display font-bold text-2xl mt-10 mb-3">
          Can You Order Chick-fil-A Breakfast After 10:30 AM?
        </h3>
        <p>
          Generally, no. Chick-fil-A breakfast ends at 10:30 AM, and lunch
          begins at the same time. The company specifically confirms that
          breakfast is served until 10:30 AM.
        </p>

        <h3 className="font-display font-bold text-2xl mt-10 mb-3">
          What Time Does Chick-fil-A Start Serving Lunch?
        </h3>
        <p>
          Lunch starts at 10:30 AM. Chick-fil-A describes lunch as beginning
          immediately after breakfast service ends.
        </p>
      </article>

      {/* FAQs */}
      <div className="mt-16 border-t border-[#EAE3D5] pt-12">
        <FAQAccordion items={hoursFaqs} />
      </div>

      <div className="mt-16 bg-[#FCFAF5] rounded-2xl p-8 border border-[#EAE3D5] text-center">
        <h2 className="font-display font-bold text-2xl text-[#1A1A1A] mb-4">
          Final Thoughts
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
          Knowing the regular Chick-fil-A schedule makes it easier to plan
          breakfast, lunch, dinner, or a late drive-thru visit without arriving
          after service has ended. Most restaurants open at 6:30 AM, stop
          breakfast at 10:30 AM, serve lunch and dinner through the afternoon
          and evening, and close around 9:00 PM.
        </p>
        <a
          href="https://www.chick-fil-a.com/locations"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#DD0033] hover:bg-[#B8002A] text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-sm"
        >
          Find Your Local Restaurant
        </a>
      </div>
    </div>
  );
}
