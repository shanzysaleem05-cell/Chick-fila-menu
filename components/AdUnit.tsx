import React from "react";

interface AdUnitProps {
  type?: "leaderboard" | "rectangle" | "responsive";
  className?: string;
}

export default function AdUnit({ type = "responsive", className = "" }: AdUnitProps) {
  // Define base dimensions based on ad type to prevent layout shift (CLS)
  // Removed gray background and borders to make it a seamless spacer
  // Removed artificial min-heights and margins so it doesn't create huge empty gaps
  // When an actual ad is loaded, it will take up its natural space.
  let baseClasses = "flex flex-col items-center justify-center overflow-hidden w-full";
  
  if (type === "leaderboard") {
    baseClasses += " max-w-[728px] mx-auto";
  } else if (type === "rectangle") {
    baseClasses += " max-w-[300px] mx-auto";
  }

  return (
    <div className={`${baseClasses} ${className}`} aria-label="Advertisement Space">
      {/* 
        NOTE TO DEVELOPER: 
        Replace this div entirely or inject the Google AdSense <ins> tag inside.
      */}
    </div>
  );
}
