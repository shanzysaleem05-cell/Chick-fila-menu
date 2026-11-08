import AdUnit from "@/components/AdUnit";

export default function SitewideAds({ position }: { position: "header" | "rails" }) {
  if (position === "rails") {
    return (
      <div className="site-ad-rails" aria-label="Sponsored advertisements">
        <div className="site-ad-rail site-ad-rail--left">
          <AdUnit type="big-skyscraper" id="revbid-big-skyscraper-5316" />
        </div>
        <div className="site-ad-rail site-ad-rail--right">
          <AdUnit type="skyscraper" id="revbid-skyscraper-3254" />
        </div>
      </div>
    );
  }

  return (
    <div className={`sitewide-banner sitewide-banner--${position}`}>
      <AdUnit
        type="big-leaderboard"
        id="revbid-big-leaderboard-6309"
      />
    </div>
  );
}
