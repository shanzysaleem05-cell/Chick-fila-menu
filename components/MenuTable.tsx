"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpDown, ArrowUp, ArrowDown, Search, Filter } from "lucide-react";
import type { MenuItem, MenuCategory } from "@/lib/menu-data";
import { formatPrice } from "@/lib/utils";

type SortKey = "name" | "price" | "calories";
type SortDir = "asc" | "desc";

interface MenuTableProps {
  items: (MenuItem & { category: MenuCategory })[];
  showCategory?: boolean;
  showSearch?: boolean;
  showFilter?: boolean;
  headerColor?: "default" | "dark";
}

export default function MenuTable({
  items,
  showCategory = false,
  showSearch = false,
  showFilter = false,
  headerColor = "default",
}: MenuTableProps) {
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = useMemo(
    () => [
      "all",
      ...Array.from(new Set(items.map((i) => i.category.slug))),
    ],
    [items]
  );

  const filtered = useMemo(() => {
    return items
      .filter((item) => {
        const matchesQuery =
          query === "" ||
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.name.toLowerCase().includes(query.toLowerCase());
        const matchesCat =
          selectedCategory === "all" || item.category.slug === selectedCategory;
        return matchesQuery && matchesCat;
      })
      .sort((a, b) => {
        let aVal: string | number;
        let bVal: string | number;
        if (sortKey === "price") {
          aVal = parseFloat(a.price);
          bVal = parseFloat(b.price);
        } else if (sortKey === "calories") {
          aVal = a.nutrition.calories;
          bVal = b.nutrition.calories;
        } else {
          aVal = a.name.toLowerCase();
          bVal = b.name.toLowerCase();
        }
        if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
        if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
  }, [items, query, sortKey, sortDir, selectedCategory]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <ArrowUpDown className="w-3.5 h-3.5 opacity-40" />;
    return sortDir === "asc" ? (
      <ArrowUp className={`w-3.5 h-3.5 ${headerColor === "dark" ? "text-white" : "text-brand-red"}`} />
    ) : (
      <ArrowDown className={`w-3.5 h-3.5 ${headerColor === "dark" ? "text-white" : "text-brand-red"}`} />
    );
  };

  return (
    <div>
      {/* Controls */}
      {(showSearch || showFilter) && (
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          {showSearch && (
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray-text" />
              <input
                type="search"
                placeholder="Search menu items..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-brand-gray-mid focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 outline-none text-sm transition-all"
                aria-label="Search menu items"
              />
            </div>
          )}
          {showFilter && (
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray-text" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-9 pr-8 py-2.5 rounded-xl border border-brand-gray-mid focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 outline-none text-sm bg-white transition-all appearance-none cursor-pointer"
                aria-label="Filter by category"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}

      {/* Results count */}
      <p className="text-sm text-brand-gray-text mb-3">
        Showing <strong>{filtered.length}</strong> items
      </p>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-brand-gray-mid">
        <table className="w-full text-sm menu-table" aria-label="Menu items table">
          <thead>
            <tr className={headerColor === "dark" ? "bg-[#3A1818] text-white font-semibold text-sm uppercase tracking-wider" : "table-header"}>
              {showCategory && (
                <th className="px-4 py-3 text-left">Category</th>
              )}
              <th className="px-4 py-3 text-left">
                <button
                  className="flex items-center gap-1 hover:text-brand-red transition-colors"
                  onClick={() => handleSort("name")}
                  aria-label="Sort by name"
                >
                  Item Name <SortIcon col="name" />
                </button>
              </th>
              <th className="px-4 py-3 text-right">
                <button
                  className="flex items-center gap-1 ml-auto hover:text-brand-red transition-colors"
                  onClick={() => handleSort("price")}
                  aria-label="Sort by price"
                >
                  Price <SortIcon col="price" />
                </button>
              </th>
              <th className="px-4 py-3 text-right">
                <button
                  className="flex items-center gap-1 ml-auto hover:text-brand-red transition-colors"
                  onClick={() => handleSort("calories")}
                  aria-label="Sort by calories"
                >
                  Calories <SortIcon col="calories" />
                </button>
              </th>
              <th className="px-4 py-3 text-right hidden md:table-cell">Protein</th>
              <th className="px-4 py-3 text-right hidden lg:table-cell">Carbs</th>
              <th className="px-4 py-3 text-right hidden lg:table-cell">Fat</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={showCategory ? 7 : 6}
                  className="px-4 py-12 text-center text-brand-gray-text"
                >
                  No items found matching your search.
                </td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr
                  key={`${item.category.slug}-${item.slug}`}
                  className="border-b border-brand-gray-mid/50 hover:bg-brand-red/5 transition-colors"
                >
                  {showCategory && (
                    <td className="px-4 py-3">
                      <Link
                        href={`/menu/${item.category.slug}`}
                        className="text-brand-gray-text hover:text-brand-red transition-colors text-xs"
                      >
                        {item.category.name}
                      </Link>
                    </td>
                  )}
                  <td className="px-4 py-3">
                    <Link
                      href={`/menu/${item.category.slug}/${item.slug}`}
                      className="font-medium text-brand-dark hover:text-brand-red transition-colors"
                    >
                      {item.name}
                      {item.popular && (
                        <span className="ml-2 badge-red text-xs py-0.5">Popular</span>
                      )}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-brand-dark">
                    {formatPrice(item.price)}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="font-medium text-brand-dark">{item.nutrition.calories}</span>
                    <span className="text-brand-gray-text text-xs ml-1">cal</span>
                  </td>
                  <td className="px-4 py-3 text-right text-brand-gray-text hidden md:table-cell">
                    {item.nutrition.protein !== undefined ? `${item.nutrition.protein}g` : "—"}
                  </td>
                  <td className="px-4 py-3 text-right text-brand-gray-text hidden lg:table-cell">
                    {item.nutrition.carbs !== undefined ? `${item.nutrition.carbs}g` : "—"}
                  </td>
                  <td className="px-4 py-3 text-right text-brand-gray-text hidden lg:table-cell">
                    {item.nutrition.fat !== undefined ? `${item.nutrition.fat}g` : "—"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
