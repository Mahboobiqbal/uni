import HeroSection from "@/components/home/HeroSection";
import ViceChancellorSection from "@/components/home/ViceChancellorSection";
import InstitutionalPillarsMarquee from "@/components/home/InstitutionalPillarsMarquee";
import EditorialStorytelling from "@/components/home/EditorialStorytelling";
import FacultyProgramsGrid from "@/components/home/FacultyProgramsGrid";
import CampusBulletin from "@/components/home/CampusBulletin";
import CampusTourBanner from "@/components/home/CampusTourBanner";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import RankingSection from "@/components/home/RankingSection";
import CampusLifeHeritage from "@/components/home/CampusLifeHeritage";
import StudentAlumniSuccess from "@/components/home/StudentAlumniSuccess";
import AdmissionsInquiryFunnel from "@/components/home/AdmissionsInquiryFunnel";
import CampusPhotoRibbon from "@/components/home/CampusPhotoRibbon";

export default function HomePage() {
  return (
    <>
      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. HeroSection with 3 crimson overlap cards */}
        <HeroSection />

        {/* 2. ViceChancellorSection with 3D tilt portrait and discourse */}
        <ViceChancellorSection />

        {/* 2.5 Institutional pillars & heritage marquee separator */}
        <InstitutionalPillarsMarquee />

        {/* 3. [NEW] Editorial Storytelling Rows (Alpine campus & frontier research) */}
        <EditorialStorytelling />

        {/* 4. FacultyProgramsGrid + [NEW] Flagship Degree Spotlight */}
        <FacultyProgramsGrid />

        {/* 5. CampusBulletin (Master-detail live statutory notice board) */}
        <CampusBulletin />

        {/* 6. [NEW] Panoramic Campus Tour Callout Banner */}
        <CampusTourBanner />

        {/* 7. [NEW] Upcoming Campus Events & Calendar Carousel */}
        <UpcomingEvents />

        {/* 8. RankingSection (Institutional Scorecard & Quality Audit Registry) */}
        <RankingSection />

        {/* 9. CampusLifeHeritage (5-tile bento campus gallery) */}
        <CampusLifeHeritage />

        {/* 10. [NEW] Student & Alumni Success Stories & Outcomes */}
        <StudentAlumniSuccess />

        {/* 11. [NEW] Interactive Admissions Inquiry Funnel */}
        <AdmissionsInquiryFunnel />

        {/* 12. [NEW] Campus Life Photo Ribbon */}
        <CampusPhotoRibbon />
      </main>
    </>
  );
}
