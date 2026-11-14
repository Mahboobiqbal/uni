import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import UniversityOverview from "@/components/home/UniversityOverview";
import ViceChancellorDesk from "@/components/home/ViceChancellorDesk";
import UniversityQuote from "@/components/home/UniversityQuote";
import AnnouncementsBoard from "@/components/home/AnnouncementsBoard";
import FeaturedSpotlight from "@/components/home/FeaturedSpotlight";
import DiamondFeaturesGrid from "@/components/home/DiamondFeaturesGrid";
import RankingSection from "@/components/home/RankingSection";

export default function HomePage() {
  return (
    <>
      {/* Modern Transparent Overlay Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <UniversityOverview />
        <ViceChancellorDesk />
        <UniversityQuote />
        <AnnouncementsBoard />
        <FeaturedSpotlight />
        <DiamondFeaturesGrid />
        <RankingSection />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </>
  );
}
