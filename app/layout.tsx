import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdUnit from "@/components/AdUnit";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.SITE_URL || "https://chick-fila-menus.com"
  ),
  title: {
    default: "Chick-fil-A Menu 2026: Prices, Calories & Full Item List",
    template: "%s | Chick-fil-A Menu Guide 2026",
  },
  description: "Browse the complete Chick-fil-A menu with 2026 prices, calories & protein for every item. ✓ Breakfast ✓ Sandwiches ✓ Salads ✓ Sides — Updated weekly.",
  keywords: [
    "chick-fil-a menu",
    "chick-fil-a menu prices",
    "chick-fil-a calories",
    "chick-fil-a nutrition",
    "chick-fil-a menu 2026",
    "chick fil a prices",
    "chick fil a menu with prices",
  ],
  authors: [{ name: "CFA Menu Guide" }],
  creator: "CFA Menu Guide",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Chick-fil-A Menu Guide",
    images: [
      {
        url: "/Spicy-Deluxe-Sandwich.webp",
        width: 1200,
        height: 630,
        alt: "Chick-fil-A Menu Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chick-fil-A Menu 2026: Prices, Calories & Full Item List",
    description: "Browse the complete Chick-fil-A menu with 2026 prices, calories & protein for every item.",
    images: ["/Spicy-Deluxe-Sandwich.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4953411501541980" 
          crossOrigin="anonymous"
        ></script>
      </head>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", backgroundColor: "#FAF7F2", color: "#2B1B15" }}>
        <Header />
        <main id="main-content">{children}</main>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <AdUnit type="responsive" />
        </div>
        <Footer />
        <CookieConsent />
        <GoogleAnalytics gaId="G-3X1V1Y7Y7G" />
      </body>
    </html>
  );
}
