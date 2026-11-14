import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
    <body className="bg-[#F6F5F0] text-[#14291D] selection:bg-[#153B27] selection:text-white min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[#153B27] focus:text-white focus:px-4 focus:py-2.5 focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
);
}
