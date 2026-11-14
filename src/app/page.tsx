import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import UniversityOverview from "@/components/home/UniversityOverview";
import ViceChancellorSection from "@/components/home/ViceChancellorSection";
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
        <ViceChancellorSection />
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
