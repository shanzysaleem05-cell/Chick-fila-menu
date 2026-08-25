"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getAllItems } from "@/lib/menu-data";
import { formatPrice } from "@/lib/utils";

interface SearchBarProps {
  onClose: () => void;
}

export default function SearchBar({ onClose }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const allItems = getAllItems();

  const results = query.length >= 2
    ? allItems
        .filter(
          (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.category.name.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 8)
    : [];

  useEffect(() => {
    inputRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-brand-gray-mid">
          <Search className="w-5 h-5 text-brand-gray-text flex-shrink-0" />
          <input
            ref={inputRef}
            type="search"
            placeholder="Search Chick-fil-A menu items..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-brand-dark placeholder-brand-gray-text outline-none text-lg"
            aria-label="Search all menu items"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-brand-gray text-brand-gray-text"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="max-h-[60vh] overflow-y-auto">
            {results.map((item) => (
              <Link
                key={`${item.category.slug}-${item.slug}`}
                href={`/menu/${item.category.slug}/${item.slug}`}
                onClick={onClose}
                className="flex items-center justify-between px-5 py-3 hover:bg-brand-red/5 transition-colors border-b border-brand-gray-mid/50 last:border-0 group"
              >
                <div>
                  <p className="font-medium text-brand-dark group-hover:text-brand-red transition-colors">
                    {item.name}
                  </p>
                  <p className="text-xs text-brand-gray-text">
                    {item.category.name}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <p className="font-semibold text-brand-dark">{formatPrice(item.price)}</p>
                    <p className="text-xs text-brand-gray-text">{item.nutrition.calories} cal</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-gray-text group-hover:text-brand-red transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {query.length >= 2 && results.length === 0 && (
          <div className="px-5 py-8 text-center text-brand-gray-text">
            <p>No items found for &quot;{query}&quot;</p>
            <Link
              href={`/menu?q=${encodeURIComponent(query)}`}
              onClick={onClose}
              className="text-brand-red text-sm mt-2 inline-block hover:underline"
            >
              View all menu items →
            </Link>
          </div>
        )}

        {query.length < 2 && (
          <div className="px-5 py-5">
            <p className="text-xs text-brand-gray-text uppercase tracking-wider font-semibold mb-3">
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {["Chicken Sandwich", "Waffle Fries", "Nuggets", "Frosted Lemonade", "Grilled"].map(
                (term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-full bg-brand-gray text-sm text-brand-dark hover:bg-brand-red/10 hover:text-brand-red transition-colors"
                  >
                    {term}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
