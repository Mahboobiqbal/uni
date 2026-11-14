import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

  const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    display: "swap",
  });

    const cormorantGaramond = Cormorant_Garamond({
      variable: "--font-serif",
      subsets: ["latin"],
      weight: ["400", "600", "700"],
      style: ["normal", "italic"],
      display: "swap",
    });

    export const metadata: Metadata = {
      metadataBase: new URL(siteConfig.url),
      title: "University of Swat | Khyber Pakhtunkhwa, Pakistan",
      description: siteConfig.description,
      keywords: [
        "University of Swat",
        "UoS",
        "higher education",
        "Swat",
        "Pakistan",
        "research university",
        "KPK",
      ],
      authors: [{ name: siteConfig.name, url: siteConfig.url }],
      creator: siteConfig.name,
      openGraph: {
        type: "website",
        locale: siteConfig.locale,
        url: siteConfig.url,
        title: "University of Swat | Khyber Pakhtunkhwa, Pakistan",
        description: siteConfig.description,
        siteName: siteConfig.name,
      },
      twitter: {
        card: "summary_large_image",
        title: "University of Swat | Khyber Pakhtunkhwa, Pakistan",
        description: siteConfig.description,
      },
      robots: {
        index: true,
        follow: true,
      },
    };

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
    return(
    <html
      lang = { siteConfig.locale }
      className = {`${plusJakartaSans.variable} ${cormorantGaramond.variable} scroll-smooth`}
  >
    <body className="bg-alpine-mesh text-slate-700 selection:bg-brand-emerald selection:text-white min-h-screen">
      {children}
    </body>
  </html>
);
}
