import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CampusBulletin from "@/components/home/CampusBulletin";
import FacultyProgramsGrid from "@/components/home/FacultyProgramsGrid";
import CampusLifeHeritage from "@/components/home/CampusLifeHeritage";
import ViceChancellorSection from "@/components/home/ViceChancellorSection";
import RankingSection from "@/components/home/RankingSection";

export default function HomePage() {
  return (
    <>
      {/* Modern Transparent Overlay Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <HeroSection />
        <ViceChancellorSection />
        <CampusBulletin />
        <FacultyProgramsGrid />
        <CampusLifeHeritage />
        <RankingSection />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </>
  );
}
