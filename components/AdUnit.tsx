import React from "react";

export type AdPlacementType =
  | "leaderboard"
  | "billboard"
  | "big-leaderboard"
  | "rectangle"
  | "square"
  | "skyscraper"
  | "big-skyscraper"
  | "mobile"
  | "responsive";

interface AdUnitProps {
  type?: AdPlacementType;
  id?: string;
  className?: string;
}

export default function AdUnit({
  type = "responsive",
  id,
  className = "",
}: AdUnitProps) {
  // 1. Mobile Banner (300x100)
  if (type === "mobile") {
    return (
      <div className={`flex justify-center my-4 overflow-hidden w-full ${className}`}>
        <div
          data-placement-id="revbid-mobile"
          id={id || "revbid-mobile-3755"}
          style={{ minWidth: "300px", minHeight: "100px", textAlign: "center" }}
        />
      </div>
    );
  }

  // 2. Square / MPU (300x250)
  if (type === "square" || type === "rectangle") {
    return (
      <div className={`flex justify-center my-6 overflow-hidden w-full ${className}`}>
        <div
          data-placement-id="revbid-square"
          id={id || "revbid-square-16362"}
          style={{ minWidth: "300px", minHeight: "250px", textAlign: "center" }}
        />
      </div>
    );
  }

  // 3. Large Skyscraper / Half-page (300x600)
  if (type === "big-skyscraper") {
    return (
      <div className={`flex justify-center my-6 overflow-hidden w-full ${className}`}>
        <div
          data-placement-id="revbid-big-skyscraper"
          id={id || "revbid-big-skyscraper-5316"}
          style={{ minWidth: "120px", minHeight: "600px", textAlign: "center" }}
        />
      </div>
    );
  }

  // 4. Skyscraper (160x600)
  if (type === "skyscraper") {
    return (
      <div className={`flex justify-center my-6 overflow-hidden w-full ${className}`}>
        <div
          data-placement-id="revbid-skyscraper"
          id={id || "revbid-skyscraper-3254"}
          style={{ minWidth: "120px", minHeight: "600px", textAlign: "center" }}
        />
      </div>
    );
  }

  // 5. Explicit Big Leaderboard / Billboard
  if (type === "big-leaderboard" || type === "billboard") {
    return (
      <div className={`flex justify-center my-6 overflow-hidden w-full ${className}`}>
        <div
          data-placement-id="revbid-big-leaderboard"
          id={id || "revbid-big-leaderboard-6270"}
          style={{ minWidth: "468px", minHeight: "60px", textAlign: "center" }}
        />
      </div>
    );
  }

  // 6. Responsive / Leaderboard:
  // Shows Billboard on desktop/tablet, and Mobile Banner on phone screens for seamless responsive fit
  return (
    <div className={`flex flex-col items-center justify-center my-6 overflow-hidden w-full ${className}`}>
      {/* Desktop & Tablet Viewport */}
      <div className="hidden sm:block">
        <div
          data-placement-id="revbid-big-leaderboard"
          id={id || "revbid-big-leaderboard-6270"}
          style={{ minWidth: "468px", minHeight: "60px", textAlign: "center" }}
        />
      </div>
      {/* Mobile Viewport */}
      <div className="block sm:hidden">
        <div
          data-placement-id="revbid-mobile"
          id={id ? `${id}-mobile` : "revbid-mobile-3755"}
          style={{ minWidth: "300px", minHeight: "100px", textAlign: "center" }}
        />
      </div>
    </div>
  );
}
