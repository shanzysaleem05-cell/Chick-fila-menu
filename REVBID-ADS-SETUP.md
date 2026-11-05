# RevBid production setup and troubleshooting

This project contains RevBid containers, but ad containers alone cannot produce ads. RevBid must approve the exact domain, enable demand, issue the placement codes, and see its production script on the deployed site.

## Current approved code supplied for this project

```html
<div data-placement-id="revbid-square" id="revbid-square-16422" style="min-width:300px;min-height:250px;text-align:center"></div>

<div data-placement-id="revbid-big-leaderboard" id="revbid-big-leaderboard-6309" style="min-width:468px;min-height:60px;text-align:center"></div>
```

The corresponding wrapper script is:

```html
<script async src="https://prebid.revbid.net/23503/revbid.js"></script>
```

The project renders these through `components/AdUnit.tsx` and loads the wrapper through `components/ConsentScripts.tsx` after advertising consent.

## 1. Deploy the correct application first

Deploy this repository to the production host and attach `chick-fila-menus.com` to that deployment. Confirm that the domain serves this Next.js application before troubleshooting ad fill.

After deployment, verify all of the following:

- View Source contains `prebid.revbid.net/23503/revbid.js` after accepting advertising cookies.
- The Elements panel contains `revbid-square-16422` on an article and `revbid-big-leaderboard-6309` on the homepage.
- `https://chick-fila-menus.com/ads.txt` returns HTTP 200 as plain text.
- `https://chick-fila-menus.com/robots.txt` and `/sitemap.xml` return HTTP 200.
- Only one production host is canonical. Redirect `www` and any old domain to `https://chick-fila-menus.com` with HTTP 301.

## 2. Confirm the RevBid account and domain

In the RevBid dashboard, confirm:

1. The site is exactly `chick-fila-menus.com`, not an old domain or staging URL.
2. Site status is approved/active and demand is enabled.
3. Publisher/script ID is `23503`.
4. Square placement `16422` and big-leaderboard placement `6309` are active.
5. The placements allow the sizes used by the site.
6. No domain, category, geo, floor-price, traffic-quality, or policy restriction is blocking demand.
7. RevBid's current ads.txt file matches the deployed `/ads.txt` file.

Ask the RevBid account manager to confirm the two zone IDs are attached to `chick-fila-menus.com`. RevBid placements require account-side approval; code cannot activate an unapproved zone.

## 3. Do not clone an HTML id

An HTML `id` must be unique on a page. Do not paste `revbid-square-16422` or `revbid-big-leaderboard-6309` multiple times into the same page.

For additional simultaneous positions, create separate placements in the RevBid dashboard and use the exact code generated for each one. Recommended inventory:

- One responsive leaderboard near the first natural content break.
- One 300×250 in-content unit after several paragraphs or cards.
- One desktop right-rail 300×600 unit on long articles.
- One dismissible anchor, only if explicitly enabled/supplied by RevBid.
- One below-article unit on long pages.

Do not use arbitrary IDs such as `revbid-home-mid` unless RevBid confirms its wrapper supports custom element IDs for that placement. The safest implementation is the exact dashboard code.

## 4. Consent behavior in this project

Advertising and Analytics load only after the visitor selects **Accept All**. This is intentional. A user who previously declined can select **Privacy choices** at the bottom-left and change the decision.

For testing only:

1. Open a private/incognito window.
2. Disable ad blockers and browser tracking protection for the site.
3. Open the deployed page.
4. Select **Accept All**.
5. Reload once and wait for the auction.

Do not remove consent controls merely to increase impressions. For EEA/UK traffic, use a Google-certified/IAB TCF-compatible CMP and configure RevBid's consent integration with the account manager.

## 5. Browser diagnostics

Open DevTools after accepting consent.

### Network tab

Search for `revbid` and confirm:

- `https://prebid.revbid.net/23503/revbid.js` returns 200.
- Requests are not marked `blocked:other`, `ERR_BLOCKED_BY_CLIENT`, CSP-blocked, or CORS-failed.
- Bid/ad-server requests occur after the wrapper loads.

If the script is 200 but no auction request occurs, send RevBid support the production URL, placement IDs, timestamp, browser, country, and a HAR file.

### Elements tab

Confirm the placement div is visible, has a unique ID, has non-zero dimensions, and is not inside `display:none`. Mobile CSS intentionally hides skyscraper formats.

### Console

Check for JavaScript errors, duplicate IDs, Content Security Policy errors, consent errors, and ad-server errors.

## 6. Common reasons for blank inventory

- The new Next.js project has not been deployed to the live domain.
- The visitor declined advertising consent or an old decline choice remains stored.
- An ad blocker, DNS filter, antivirus, Brave Shields, or browser tracking protection blocks the wrapper.
- RevBid has not approved the domain or enabled demand for the placement.
- The placement ID was copied incorrectly or duplicated.
- The account's ads.txt does not match the deployed ads.txt.
- Bid floors are too high, geo demand is low, or no bidder returns an eligible bid.
- A placement is below the fold and RevBid lazy loading has not requested it yet.
- Traffic-quality/IVT review, policy review, or account/payment verification has paused serving.
- Another header-bidding wrapper conflicts with RevBid.

## 7. Safe revenue optimization

Measure by device and placement for at least 7–14 days before changing layout:

- Ad requests
- Fill rate
- Viewable impressions
- Viewability percentage
- eCPM/RPM
- Revenue per session
- Bounce rate and pages per session
- Core Web Vitals, especially CLS and INP

Prioritize the placements with high viewability and session RPM. More slots do not automatically create more revenue; they can reduce bid density, viewability, retention, and advertiser value.

Never click your own ads, ask visitors to click ads, buy bot/incentivized traffic, auto-refresh without RevBid approval, stack units, hide ads, or disguise them as navigation. RevBid's terms permit suspension and revenue reversal for artificial impressions/clicks or excessive clustering.

## 8. Support message template

```text
Subject: No fill on approved placements for chick-fila-menus.com

Hello RevBid AdOps,

Publisher script: 23503
Domain: https://chick-fila-menus.com
Placements: revbid-square-16422 and revbid-big-leaderboard-6309
Test URL(s): [paste exact production URLs]
Test date/time and timezone: [paste]
Country/device/browser: [paste]

The wrapper returns HTTP 200 after consent, and the placement divs are visible with unique IDs, but no creative renders. Please confirm domain approval, placement/zone activation, allowed sizes, demand status, floor settings, ads.txt status, policy/IVT status, and whether the supplied tags can be used on a Next.js SPA navigation.

Attached: screenshots, console output, and HAR file.
```

## 9. Launch checklist

- [ ] Correct Next.js project deployed to `chick-fila-menus.com`
- [ ] HTTPS and one canonical host
- [ ] RevBid domain approved and active
- [ ] Script ID `23503` confirmed
- [ ] Placement IDs confirmed by RevBid
- [ ] ads.txt is current and HTTP 200
- [ ] Consent accepted during testing
- [ ] Ad blocker disabled during testing
- [ ] Wrapper request returns 200
- [ ] Each placement ID is unique
- [ ] No console/CSP error
- [ ] Mobile and desktop tested separately
- [ ] RevBid AdOps confirms demand/fill
- [ ] Search Console sitemap submitted
- [ ] Analytics and RevBid reporting checked after 24–48 hours
