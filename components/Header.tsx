"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push('/menu');
    }
  };

  return (
    <header className="w-full bg-[#FAF7F2] z-50 relative flex flex-col font-sans border-b border-[#E8DFD0]">
      {/* Tier 1: Top Bar (Desktop Only) */}
      <div className="hidden lg:block border-b border-[#E8DFD0] bg-[#FAF7F2]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between text-[10px] font-bold text-[#8C8279] uppercase tracking-[0.15em]">
          <div>
            INDEPENDENT GUIDE &middot; NOT AFFILIATED WITH CHICK-FIL-A
          </div>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-[#C8102E] transition-colors">ABOUT</Link>
            <span>&middot;</span>
            <Link href="/blog" className="hover:text-[#C8102E] transition-colors">BLOG</Link>
            <span>&middot;</span>
            <Link href="/recipes" className="hover:text-[#C8102E] transition-colors">RECIPES</Link>
            <span>&middot;</span>
            <Link href="/coupons" className="hover:text-[#C8102E] transition-colors">DEALS</Link>
            <span>&middot;</span>
            <Link href="/contact" className="hover:text-[#C8102E] transition-colors">CONTACT</Link>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Logo, Search, and Action Buttons */}
      <div className="border-b border-[#E8DFD0] bg-[#FAF7F2]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between gap-4 md:gap-8">
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 -ml-2 text-[#2B1B15] hover:text-[#C8102E]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image 
                src="/apple-touch-icon.png" 
                alt="Logo"
                fill
                sizes="56px"
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-black text-xl md:text-2xl text-[#C8102E] leading-none tracking-tight">
                CFA MENU
              </span>
              <span className="font-display font-bold text-sm text-[#1A1A1A] leading-none tracking-widest mt-1">
                GUIDE USA
              </span>
            </div>
          </Link>

          {/* Centered Search Bar (Desktop Only) */}
          <form 
            onSubmit={handleSearch}
            className="hidden lg:flex flex-grow max-w-3xl items-center bg-[#F0EBE0] rounded-full h-12 px-4 border border-transparent focus-within:border-[#C8102E] focus-within:bg-white transition-all shadow-inner"
          >
            <Search className="w-5 h-5 text-[#8C8279] mr-3 shrink-0" />
            <input 
              type="text" 
              placeholder="Search menus, nutrition, locations..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow bg-transparent border-none outline-none text-sm text-[#1A1A1A] placeholder-[#8C8279]"
            />
            <button 
              type="submit"
              className="bg-[#C8102E] hover:bg-[#A80020] w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ml-2"
            >
              <Search className="w-4 h-4 text-white" />
            </button>
          </form>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <Link 
              href="/coupons"
              className="hidden sm:flex items-center justify-center px-6 py-2.5 rounded-full border border-[#D5CEC4] hover:bg-[#F0EBE0] !text-[#1A1A1A] text-[11px] font-bold uppercase tracking-widest transition-colors"
            >
              DEALS
            </Link>
            <Link 
              href="/menu"
              className="flex items-center justify-center px-5 py-2.5 md:px-7 md:py-3 rounded-full bg-[#C8102E] hover:bg-[#A80020] !text-white text-[11px] md:text-xs font-bold uppercase tracking-widest transition-colors shadow-sm"
            >
              FULL MENU
            </Link>
          </div>
        </div>
      </div>

      {/* Tier 3: Navigation Links (Desktop Only) */}
      <div className="hidden lg:flex justify-center bg-[#FAF7F2]">
        <nav className="max-w-[1400px] w-full px-8 h-14 flex items-center justify-center gap-10">
          <Link href="/menu" className="flex items-center gap-1.5 text-[#2B1B15] hover:text-[#C8102E] text-xs font-bold uppercase tracking-widest transition-colors">
            MENU & PRICES <ChevronDown className="w-3.5 h-3.5 text-[#8C8279]" />
          </Link>
          <Link href="/calories" className="flex items-center gap-1.5 text-[#2B1B15] hover:text-[#C8102E] text-xs font-bold uppercase tracking-widest transition-colors">
            NUTRITION <ChevronDown className="w-3.5 h-3.5 text-[#8C8279]" />
          </Link>
          <Link href="/catering" className="flex items-center gap-1.5 text-[#2B1B15] hover:text-[#C8102E] text-xs font-bold uppercase tracking-widest transition-colors">
            CATERING <ChevronDown className="w-3.5 h-3.5 text-[#8C8279]" />
          </Link>
          <Link href="/blog" className="flex items-center gap-1.5 text-[#2B1B15] hover:text-[#C8102E] text-xs font-bold uppercase tracking-widest transition-colors">
            BLOGS <ChevronDown className="w-3.5 h-3.5 text-[#8C8279]" />
          </Link>
          <Link href="/hours" className="flex items-center gap-1.5 text-[#2B1B15] hover:text-[#C8102E] text-xs font-bold uppercase tracking-widest transition-colors">
            HOURS
          </Link>
          <Link href="/coupons" className="flex items-center gap-1.5 text-[#2B1B15] hover:text-[#C8102E] text-xs font-bold uppercase tracking-widest transition-colors">
            DEALS
          </Link>
          <div className="flex items-center gap-1.5 text-[#2B1B15] hover:text-[#C8102E] text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer group relative">
            MORE <ChevronDown className="w-3.5 h-3.5 text-[#8C8279]" />
          </div>
        </nav>
      </div>

      {/* Mobile Search Bar (Visible only on Mobile) */}
      <div className="lg:hidden px-4 py-3 bg-[#FAF7F2] border-t border-[#E8DFD0]">
        <form 
          onSubmit={handleSearch}
          className="flex flex-grow w-full items-center bg-[#F0EBE0] rounded-full h-11 px-4 border border-transparent focus-within:border-[#C8102E] focus-within:bg-white transition-all shadow-inner"
        >
          <Search className="w-4 h-4 text-[#8C8279] mr-2 shrink-0" />
          <input 
            type="text" 
            placeholder="Search menus, nutrition..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow bg-transparent border-none outline-none text-sm text-[#1A1A1A] placeholder-[#8C8279]"
          />
        </form>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full h-screen bg-[#FAF7F2] shadow-xl md:hidden flex flex-col py-2 z-[60] overflow-y-auto">
          <div className="px-6 flex flex-col">
            <Link href="/menu" className="py-4 border-b border-[#E8DFD0] font-bold text-[#2B1B15] hover:text-[#C8102E] text-lg uppercase tracking-wider flex justify-between items-center">
              Menu & Prices <ChevronDown className="w-5 h-5 text-[#8C8279] -rotate-90" />
            </Link>
            <Link href="/calories" className="py-4 border-b border-[#E8DFD0] font-bold text-[#2B1B15] hover:text-[#C8102E] text-lg uppercase tracking-wider flex justify-between items-center">
              Nutrition <ChevronDown className="w-5 h-5 text-[#8C8279] -rotate-90" />
            </Link>
            <Link href="/catering" className="py-4 border-b border-[#E8DFD0] font-bold text-[#2B1B15] hover:text-[#C8102E] text-lg uppercase tracking-wider flex justify-between items-center">
              Catering <ChevronDown className="w-5 h-5 text-[#8C8279] -rotate-90" />
            </Link>
            <Link href="/blog" className="py-4 border-b border-[#E8DFD0] font-bold text-[#2B1B15] hover:text-[#C8102E] text-lg uppercase tracking-wider flex justify-between items-center">
              Blogs <ChevronDown className="w-5 h-5 text-[#8C8279] -rotate-90" />
            </Link>
            <Link href="/hours" className="py-4 border-b border-[#E8DFD0] font-bold text-[#2B1B15] hover:text-[#C8102E] text-lg uppercase tracking-wider">
              Hours
            </Link>
            <Link href="/recipes" className="py-4 border-b border-[#E8DFD0] font-bold text-[#2B1B15] hover:text-[#C8102E] text-lg uppercase tracking-wider">
              Recipes
            </Link>
            <Link href="/coupons" className="py-4 border-b border-[#E8DFD0] font-bold text-[#2B1B15] hover:text-[#C8102E] text-lg uppercase tracking-wider">
              Deals
            </Link>
          </div>
          <div className="mt-8 px-6 pb-32 flex flex-col gap-4 bg-[#F0EBE0] py-6">
            <Link href="/about" className="text-sm font-bold text-[#594E48] tracking-widest uppercase">About</Link>
            <Link href="/privacy-policy" className="text-sm font-bold text-[#594E48] tracking-widest uppercase">Privacy Policy</Link>
            <Link href="/disclaimer" className="text-sm font-bold text-[#594E48] tracking-widest uppercase">Disclaimer</Link>
            <Link href="/contact" className="text-sm font-bold text-[#594E48] tracking-widest uppercase">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
}
