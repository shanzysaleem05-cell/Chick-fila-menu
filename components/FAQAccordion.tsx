"use client";

import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  kicker?: string;
  description?: string;
}

export default function FAQAccordion({
  items,
  title = "Frequently Asked Questions",
  kicker = "Good to Know",
  description = "Straight answers to the questions readers ask most, built from our latest menu data.",
}: FAQAccordionProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Header Area */}
      <div className="mb-8">
        <h3 className="italic text-[#C8102E] font-serif text-xl mb-1">
          {kicker}
        </h3>
        <h2
          id="faq-heading"
          className="font-display font-black text-3xl md:text-4xl text-[#2B1B15]"
        >
          {title}
        </h2>
        <div className="w-12 h-1 bg-[#C8102E] my-4 rounded-full"></div>
        {description && (
          <p className="text-[#594E48] text-sm max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* FAQs Card */}
      <div className="bg-[#FAF7F2] rounded-2xl border border-[#EAE3D5] p-6 md:p-10 shadow-sm">
        {items.map((item, index) => (
          <div
            key={index}
            className="mb-6 pb-6 border-b border-[#EAE3D5] last:mb-0 last:pb-0 last:border-0"
          >
            <h4 className="font-display font-bold text-xl text-[#2B1B15] mb-3">
              {item.question}
            </h4>
            <div className="text-[#594E48] text-[15px] leading-relaxed">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
