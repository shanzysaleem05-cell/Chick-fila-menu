export type AdPlacementType =
  | "leaderboard" | "billboard" | "big-leaderboard" | "rectangle"
  | "square" | "skyscraper" | "big-skyscraper" | "mobile"
  | "footer" | "responsive";

interface AdUnitProps {
  type?: AdPlacementType;
  id?: string;
  className?: string;
}

const placementByType: Record<AdPlacementType, string> = {
  mobile: "revbid-mobile",
  square: "revbid-square",
  rectangle: "revbid-square",
  skyscraper: "revbid-skyscraper",
  "big-skyscraper": "revbid-big-skyscraper",
  leaderboard: "revbid-leaderboard",
  responsive: "revbid-big-leaderboard",
  billboard: "revbid-big-leaderboard",
  "big-leaderboard": "revbid-big-leaderboard",
  footer: "revbid-footer",
};

const defaultIdByType: Record<AdPlacementType, string> = {
  mobile: "revbid-mobile-3755",
  square: "revbid-square-16422",
  rectangle: "revbid-square-16422",
  skyscraper: "revbid-skyscraper-3254",
  "big-skyscraper": "revbid-big-skyscraper-5316",
  leaderboard: "revbid-leaderboard-main",
  responsive: "revbid-big-leaderboard-6309",
  billboard: "revbid-big-leaderboard-6309",
  "big-leaderboard": "revbid-big-leaderboard-6309",
  footer: "revbid-footer-anchor",
};

export default function AdUnit({ type = "responsive", id, className = "" }: AdUnitProps) {
  return (
    <aside
      aria-label="Advertisement"
      data-ad-format={type}
      className={`ad-unit ad-unit--${type} ${className}`}
    >
      <span className="ad-unit__label" aria-hidden="true">Advertisement</span>
      <div
        className="ad-unit__slot"
        data-placement-id={placementByType[type]}
        id={id ?? defaultIdByType[type]}
      />
    </aside>
  );
}
