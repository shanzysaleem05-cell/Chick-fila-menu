"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="w-full bg-white z-50 border-b border-gray-200 shadow-sm relative">
      {/* Top Bar */}
      <div className="border-b border-gray-100 hidden sm:block">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-[0.8rem] font-medium text-[#666666]">
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#DD0033] cursor-pointer transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-[#DD0033] cursor-pointer transition-colors">
              Disclaimer
            </Link>
            <Link href="/dmca" className="hover:text-[#DD0033] cursor-pointer transition-colors">
              DMCA
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/contact" className="hover:text-[#DD0033] cursor-pointer transition-colors">
              Contact Us
            </Link>
            <Search className="w-4 h-4 cursor-pointer hover:text-[#DD0033] transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4 lg:gap-10">
          
          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button 
            className="md:hidden p-2 -ml-2 text-gray-700 hover:text-[#DD0033]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <img 
              src="/apple-touch-icon.png" 
              alt="CFA Menu Guide Logo" 
              className="w-11 h-11 sm:w-12 sm:h-12 transform group-hover:scale-105 transition-transform duration-300 rounded-xl"
            />
          </Link>
          
          {/* Nav (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 font-bold text-[#00587C] text-[0.95rem]">
            <Link href="/menu" className="hover:text-[#DD0033] transition-colors">Menu & Prices</Link>
            <Link href="/catering" className="hover:text-[#DD0033] transition-colors">Catering</Link>
            <Link href="/calories" className="hover:text-[#DD0033] transition-colors">Calories & Nutrition</Link>
            <Link href="/blog" className="hover:text-[#DD0033] transition-colors">Blog</Link>
            <span className="text-gray-300 font-light">|</span>
            <Link href="/hours" className="hover:text-[#DD0033] transition-colors">Hours</Link>
          </nav>
        </div>

        {/* Order Now */}
        <Link 
          href="/coupons" 
          className="bg-[#DD0033] hover:bg-[#B8002A] !text-white text-[#ffffff] font-bold text-sm px-5 py-2.5 sm:px-7 sm:py-3 rounded-full transition-colors shadow-sm"
        >
          Coupons Code
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-200 md:hidden flex flex-col py-2 px-4 z-50">
            <Link href="/menu" className="py-3 border-b border-gray-100 font-bold text-[#00587C] hover:text-[#DD0033]">Menu & Prices</Link>
            <Link href="/catering" className="py-3 border-b border-gray-100 font-bold text-[#00587C] hover:text-[#DD0033]">Catering</Link>
          <Link href="/calories" className="py-3 border-b border-gray-100 font-bold text-[#00587C] hover:text-[#DD0033]">Calories & Nutrition</Link>
          <Link href="/blog" className="py-3 border-b border-gray-100 font-bold text-[#00587C] hover:text-[#DD0033]">Blog</Link>
          <Link href="/hours" className="py-3 border-b border-gray-100 font-bold text-[#00587C] hover:text-[#DD0033]">Hours</Link>
          <div className="py-4 flex flex-col gap-3">
            <Link href="/privacy-policy" className="flex items-center gap-2 text-sm font-medium text-gray-600">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="flex items-center gap-2 text-sm font-medium text-gray-600">
              Disclaimer
            </Link>
            <Link href="/dmca" className="flex items-center gap-2 text-sm font-medium text-gray-600">
              DMCA
            </Link>
            <Link href="/contact" className="flex items-center gap-2 text-sm font-medium text-gray-600">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
