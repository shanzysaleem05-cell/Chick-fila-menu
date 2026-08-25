"use client";

import { useEffect, useState } from "react";

export default function AdSlot({ 
  className = "", 
  minHeight = "250px" 
}: { 
  className?: string;
  minHeight?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // In a real AdSense implementation, you would push to adsbygoogle here
    // Example: (window.adsbygoogle = window.adsbygoogle || []).push({});
    const timer = setTimeout(() => setIsLoaded(true), 1000); // Simulate ad load
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`w-full bg-[#f8f9fa] border border-[#e9ecef] flex flex-col items-center justify-center my-8 rounded-lg overflow-hidden ${className}`}
      style={{ minHeight }}
      aria-label="Advertisement"
    >
      {!isLoaded ? (
        <span className="text-gray-400 text-sm font-medium animate-pulse">Loading Advertisement...</span>
      ) : (
        <div className="text-center p-4">
          <span className="text-gray-400 text-[10px] uppercase tracking-wider block mb-2">Advertisement</span>
          {/* Real ad unit would go here */}
          <div className="text-gray-300 font-medium">AdSense Placement</div>
        </div>
      )}
    </div>
  );
}
