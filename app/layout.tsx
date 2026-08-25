import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
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
    default:
      "Chick-fil-A Menu with Prices & Calories (2026) | CFA Menu Guide",
    template: "%s | CFA Menu Guide",
  },
  description:
    "Complete Chick-fil-A menu with prices and calories for 2026. Browse all items including Breakfast, Sandwiches, Nuggets, Salads, Sides, and Drinks with full nutrition info.",
  keywords: [
    "chick-fil-a menu",
    "chick-fil-a menu prices",
    "chick-fil-a calories",
    "chick-fil-a nutrition",
    "chick-fil-a menu 2026",
  ],
  authors: [{ name: "CFA Menu Guide" }],
  creator: "CFA Menu Guide",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CFA Menu Guide",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chick-fil-A Menu with Prices & Calories 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
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
        <link rel="canonical" href={process.env.SITE_URL || "https://chickfilamenu.info"} />
      </head>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", backgroundColor: "#fff", color: "#1A1A1A" }}>
        <Header />
        <main id="main-content">{children}</main>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <AdUnit type="responsive" />
        </div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
