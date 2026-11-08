"use client";

import { useState } from "react";
import AdUnit from "@/components/AdUnit";

export default function StickyAd() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <aside className="fixed inset-x-0 bottom-0 z-40 flex justify-center border-t border-[#DECDB8] bg-[#FAF7F2]/95 px-10 py-1 shadow-[0_-4px_18px_rgba(0,0,0,.12)] backdrop-blur-sm" aria-label="Advertisement">
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-[#DECDB8] bg-white h-8 w-8 text-lg leading-none text-[#594E48] hover:text-[#C8102E]"
        aria-label="Close advertisement"
      >
        ×
      </button>
      <AdUnit type="mobile" id="revbid-mobile-3755" />
    </aside>
  );
}
