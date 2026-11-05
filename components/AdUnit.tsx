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
  | "footer"
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
  // 1. Mobile Banner (300x100 / 320x50)
  if (type === "mobile") {
    const elId = id || "revbid-mobile-3755";
    return (
      <aside
        aria-label="Advertisement"
        className={`flex justify-center items-center my-4 overflow-hidden w-full ${className}`}
      >
        <div
          data-placement-id="revbid-mobile"
          id={elId}
          style={{ minWidth: "300px", minHeight: "100px", textAlign: "center" }}
        />
      </aside>
    );
  }

  // 2. Square / MPU (300x250, 336x280) - Best for In-Content and Mobile
  if (type === "square" || type === "rectangle") {
    const elId = id || "revbid-square-16362";
    return (
      <aside
        aria-label="Advertisement"
        className={`flex justify-center items-center my-6 overflow-hidden w-full ${className}`}
      >
        <div
          data-placement-id="revbid-square"
          id={elId}
          style={{ minWidth: "300px", minHeight: "250px", textAlign: "center" }}
        />
      </aside>
    );
  }

  // 3. Large Skyscraper / Half-page (300x600) - Highest CPM
  if (type === "big-skyscraper") {
    const elId = id || "revbid-big-skyscraper-5316";
    return (
      <aside
        aria-label="Advertisement"
        className={`flex justify-center items-center my-6 overflow-hidden w-full ${className}`}
      >
        <div
          data-placement-id="revbid-big-skyscraper"
          id={elId}
          style={{ minWidth: "160px", minHeight: "600px", textAlign: "center" }}
        />
      </aside>
    );
  }

  // 4. Skyscraper (160x600 / 120x600)
  if (type === "skyscraper") {
    const elId = id || "revbid-skyscraper-3254";
    return (
      <aside
        aria-label="Advertisement"
        className={`flex justify-center items-center my-6 overflow-hidden w-full ${className}`}
      >
        <div
          data-placement-id="revbid-skyscraper"
          id={elId}
          style={{ minWidth: "120px", minHeight: "600px", textAlign: "center" }}
        />
      </aside>
    );
  }

  // 5. Billboard / Big Leaderboard (970x250 / 728x90)
  if (type === "big-leaderboard" || type === "billboard") {
    const elId = id || "revbid-big-leaderboard-6270";
    return (
      <aside
        aria-label="Advertisement"
        className={`flex justify-center items-center my-6 overflow-hidden w-full ${className}`}
      >
        <div
          data-placement-id="revbid-big-leaderboard"
          id={elId}
          style={{ minWidth: "320px", minHeight: "90px", textAlign: "center" }}
        />
      </aside>
    );
  }

  // 6. Sticky Footer Anchor
  if (type === "footer") {
    const elId = id || "revbid-footer-anchor";
    return (
      <aside
        aria-label="Advertisement"
        className={`w-full flex justify-center items-center ${className}`}
      >
        <div
          data-placement-id="revbid-footer"
          id={elId}
          style={{ minWidth: "320px", minHeight: "50px", textAlign: "center" }}
        />
      </aside>
    );
  }

  // 7. Responsive Leaderboard:
  // Universal single-container placement that handles 970x250, 728x90 on desktop, and 320x50/320x100 on mobile
  // WITHOUT hiding any duplicate divs that ruin viewability!
  const elId = id || (type === "leaderboard" ? "revbid-leaderboard-main" : "revbid-big-leaderboard-6270");
  const placementId = type === "leaderboard" ? "revbid-leaderboard" : "revbid-big-leaderboard";

  return (
    <aside
      aria-label="Advertisement"
      className={`flex justify-center items-center my-6 overflow-hidden w-full ${className}`}
    >
      <div
        data-placement-id={placementId}
        id={elId}
        style={{ minWidth: "300px", minHeight: "90px", textAlign: "center" }}
      />
    </aside>
  );
}
