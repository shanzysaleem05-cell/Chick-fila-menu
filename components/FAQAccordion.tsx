"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQAccordion({
  items,
  title = "Frequently Asked Questions",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
    <section aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2
        id="faq-heading"
        className="section-title mb-8 text-center"
      >
        {title}
      </h2>
      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "rounded-2xl border transition-all duration-200",
              openIndex === index
                ? "border-brand-red/30 shadow-sm"
                : "border-brand-gray-mid"
            )}
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
              id={`faq-btn-${index}`}
              aria-controls={`faq-panel-${index}`}
            >
              <span className="font-semibold text-brand-dark">{item.question}</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-brand-gray-text flex-shrink-0 transition-transform duration-200",
                  openIndex === index && "rotate-180 text-brand-red"
                )}
              />
            </button>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-btn-${index}`}
              className={cn(
                "overflow-hidden transition-all duration-300",
                openIndex === index ? "max-h-96" : "max-h-0"
              )}
            >
              <div className="px-6 pb-5 text-brand-gray-text text-sm leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
