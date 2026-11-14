'use client';

import Link from 'next/link';
import CardNav, { type CardNavItem } from '@/components/ui/CardNav';

const universityNavItems: CardNavItem[] = [
  {
    label: 'Programs',
    description: 'Comprehensive degree offerings across Undergraduate, Postgraduate, and Doctoral levels.',
    links: [
      { label: 'BS Computer Science', href: '#' },
      { label: 'BS Software Engineering', href: '#' },
      { label: 'Doctor of Pharmacy (Pharm-D)', href: '#' },
      { label: 'BS Environmental Sciences', href: '#' },
      { label: 'BBA (Honors) Management Sciences', href: '#' },
      { label: 'MS Management Sciences', href: '#' },
      { label: 'M.Phil Archaeology & Heritage Studies', href: '#' },
      { label: 'MS Information Technology', href: '#' },
      { label: 'M.Phil Mathematics & Applied Analytics', href: '#' },
      { label: 'Ph.D. Computer Science', href: '#' },
      { label: 'Ph.D. Botany & High-Altitude Flora', href: '#' },
      { label: 'Ph.D. Zoology & Regional Wildlife', href: '#' }
    ]
  },
  {
    label: 'Departments',
    description: 'Specialized institutes, faculties, and research cells driving regional socioeconomic innovation.',
    links: [
      { label: 'Institute of Chemical Sciences', href: '#' },
      { label: 'Dept of Computer Science & Software Engineering', href: '#' },
      { label: 'Centre for Biotechnology and Microbiology', href: '#' },
      { label: 'Dept of Earth and Environmental Sciences', href: '#' },
      { label: 'Center for Gandhara & Uddiyana Studies', href: '#' },
      { label: 'Dept of Economics & Development Policy', href: '#' },
      { label: 'Dept of Law and Sharia Jurisprudence', href: '#' },
      { label: 'Dept of Media & Communication Studies', href: '#' },
      { label: 'Institute of Management Sciences (IMS)', href: '#' },
      { label: 'Centre for Tourism & Hospitality Management', href: '#' },
      { label: 'Department of Applied Psychology', href: '#' },
      { label: 'Department of Mathematics & Statistics', href: '#' }
    ]
  },
  {
    label: 'Campuses',
    description: 'State-of-the-art academic campuses and satellite centers across the historic Swat Valley.',
    links: [
      { label: 'Main Campus Charbagh — Central Administration & IT Complex', href: '#locations-mega' },
      { label: 'Kanju Sub-Campus — Social Sciences & Gandhara Wing', href: '#locations-mega' },
      { label: 'Shangla Satellite Campus — Regional Educational Outreach', href: '#locations-mega' },
      { label: 'Central University Library & Digital Scholarly Archives', href: '#' },
      { label: 'Student Resident Hostels & Commuter Transit Points', href: '#' },
      { label: 'Campus Bus Shuttle Schedules (Mingora - Charbagh)', href: '#announcements-section' }
    ]
  },
  {
    label: 'Portals',
    description: 'Integrated digital services and online portals for students, faculty, and administrative staff.',
    links: [
      { label: 'Student LMS Portal — Courseware & Attendance Records', href: '#' },
      { label: 'Faculty CMS Portal — Grade Management & Research Repository', href: '#' },
      { label: 'Online Fee Slip & Bank Challan Generation System', href: '#' },
      { label: 'Digital Research Repository & ORIC International Publications', href: '#' },
      { label: 'Controller of Examinations & Semester Date Sheets', href: '#announcements-section' },
      { label: 'Official University Gazette & Circular Notifications', href: '#announcements-section' }
    ]
  }
];

export default function Navbar() {
  const brandLogo = (
    <div className="flex items-center gap-3.5 sm:gap-4 py-1 group">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-1.5 bg-white border border-slate-200/90 shadow-[0_1px_3px_rgba(15,23,42,0.06)] flex items-center justify-center shrink-0 overflow-hidden group-hover:border-emerald-600/40 transition-all duration-300">
        <img
          src="/ODF.jpg"
          alt="University of Swat Crest"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col text-left leading-tight">
        <span className="font-serif font-bold text-lg sm:text-xl md:text-2xl tracking-tight text-slate-900 uppercase group-hover:text-emerald-700 transition-colors">
          University of Swat
        </span>
        <span className="text-[10px] sm:text-xs tracking-wider text-emerald-700 font-sans font-bold uppercase mt-0.5">
          Khyber Pakhtunkhwa, Pakistan
        </span>
      </div>
    </div>
  );

  return (
    <div className="sticky top-0 z-50 w-full transition-all duration-300">
      <CardNav
        logo={brandLogo}
        logoAlt="University of Swat"
        logoHref="/"
        items={universityNavItems}
        cta={{
          label: 'Apply Now',
          href: '#admissions-desk'
        }}
        theme="light"
        surface="glass"
        accentColor="#059669"
        cardEffect="rise"
        openOn="click"
        maxWidth="100%"
        cardHeight={200}
        linkComponent={Link}
      />
    </div>
  );
}
