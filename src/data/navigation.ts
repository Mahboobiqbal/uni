/**
 * University of Swat — Primary Navigation Model
 *
 * Single source of truth for the desktop mega menu and the mobile drawer.
 * Every destination is an existing route; every grouping follows the
 * institution's own academic structure (level → faculty → department).
 */

import type { LucideIcon } from 'lucide-react';
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  Code,
  Compass,
  Download,
  FlaskConical,
  Globe,
  GraduationCap,
  Landmark,
  Leaf,
  Mail,
  MapPin,
  Monitor,
  Newspaper,
  Phone,
  Scale,
  Users,
  Wallet,
} from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
  /** Short factual qualifier shown right-aligned (duration, office, campus). */
  meta?: string;
  icon: LucideIcon;
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

/** Editorial fact block pinned to the right edge of a mega panel. */
export interface NavRail {
  kicker: string;
  figure: string;
  caption: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface NavItem {
  label: string;
  href: string;
  /** Used for panel ids and aria-controls wiring. */
  anchor: string;
  /** Serif one-line description of what the panel holds. */
  summary: string;
  viewAllLabel: string;
  columns: 1 | 2 | 3;
  groups: NavGroup[];
  rail: NavRail;
  /** Render as a direct single-click link (no mega drawer / chevron). */
  direct?: boolean;
}

export const navItems: NavItem[] = [
  {
    label: 'Programs',
    href: '/programs',
    anchor: 'programs',
    summary: 'Undergraduate, graduate and doctoral study',
    viewAllLabel: 'All programs',
    columns: 3,
    groups: [
      {
        title: 'Undergraduate',
        links: [
          { label: 'BS Computer Science', href: '/programs/bs-computer-science', meta: '4 years', icon: Code },
          { label: 'BS Software Engineering', href: '/programs/bs-software-engineering', meta: '4 years', icon: Monitor },
          { label: 'BS Chemistry', href: '/programs/bs-chemistry', meta: '4 years', icon: FlaskConical },
          { label: 'BS Environmental Sciences', href: '/programs/bs-environmental-sciences', meta: '4 years', icon: Leaf },
          { label: 'BBA (Hons)', href: '/programs/bba-hons', meta: '4 years', icon: Briefcase },
          { label: 'LLB (Integrated)', href: '/programs/ba-llb-law-and-shariah', meta: '5 years', icon: Scale },
        ],
      },
      {
        title: 'Graduate programs',
        links: [
          { label: 'MS Computer Science', href: '/departments/computer-software-technology', meta: '2 yrs', icon: Code },
          { label: 'MBA / MS Management Sciences', href: '/departments/management-commerce', meta: '2 yrs', icon: Briefcase },
          { label: 'M.Phil Chemistry', href: '/departments/chemistry', meta: '2 yrs', icon: FlaskConical },
          { label: 'M.Phil Botany', href: '/departments/botany', meta: '2 yrs', icon: Leaf },
          { label: 'M.Phil Environmental Sciences', href: '/departments/environmental-sciences', meta: '2 yrs', icon: Leaf },
          { label: 'Browse all graduate programs', href: '/programs?level=graduate', meta: 'MS / MPhil / MBA', icon: GraduationCap },
        ],
      },
      {
        title: 'Doctoral programs',
        links: [
          { label: 'PhD Computer Science', href: '/departments/computer-software-technology', meta: 'PhD', icon: Code },
          { label: 'PhD Chemistry', href: '/departments/chemistry', meta: 'PhD', icon: FlaskConical },
          { label: 'PhD Environmental Sciences', href: '/departments/environmental-sciences', meta: 'PhD', icon: Leaf },
          { label: 'PhD Zoology', href: '/departments/zoology', meta: 'PhD', icon: Leaf },
          { label: 'PhD Islamic Studies', href: '/departments/islamic-arabic-studies', meta: 'PhD', icon: BookOpen },
          { label: 'Browse all doctoral programs', href: '/programs?level=doctoral', meta: 'PhD', icon: BookOpen },
        ],
      },
    ],
    rail: {
      kicker: 'Degree tracks',
      figure: '59',
      caption: 'Undergraduate, graduate and doctoral study across five faculties.',
      ctaLabel: 'Compare all programs',
      ctaHref: '/programs#faculty-directory',
    },
  },
  {
    label: 'Faculties',
    href: '/faculty',
    anchor: 'faculties',
    summary: 'Five faculties and their teaching departments',
    viewAllLabel: 'Academic structure',
    columns: 2,
    groups: [
      {
        title: 'Faculties',
        links: [
          {
            label: 'Physical, Numerical & Computational Sciences',
            href: '/faculty#physical-computational-sciences',
            meta: '4 depts',
            icon: Monitor,
          },
          {
            label: 'Chemical & Life Sciences',
            href: '/faculty#chemical-life-sciences',
            meta: '5 depts',
            icon: FlaskConical,
          },
          {
            label: 'Allied Health Sciences',
            href: '/faculty#allied-health-sciences',
            meta: '1 institute',
            icon: Award,
          },
          {
            label: 'Management & Social Sciences',
            href: '/faculty#management-social-sciences',
            meta: '5 depts',
            icon: Briefcase,
          },
          {
            label: 'Languages, Humanities & Law',
            href: '/faculty#languages-humanities-law',
            meta: '4 depts',
            icon: Scale,
          },
        ],
      },
    ],
    rail: {
      kicker: 'Academic structure',
      figure: '05',
      caption: 'Faculties, their teaching departments and research institutes.',
      ctaLabel: 'Browse the structure',
      ctaHref: '/faculty',
    },
  },
  {
    label: 'Academics',
    href: '/academics',
    anchor: 'academics',
    summary: 'Calendars, statutory forms and affiliation',
    viewAllLabel: 'Academics home',
    columns: 2,
    groups: [
      {
        title: 'Semester & records',
        links: [
          { label: 'Academic Calendar', href: '/academics/calendar', meta: '2026', icon: Calendar },
          { label: 'Downloads & Forms', href: '/academics/downloads', meta: 'PDF', icon: Download },
          { label: 'Academic Framework', href: '/academics', meta: 'Policies', icon: BookOpen },
        ],
      },
      {
        title: 'Institution',
        links: [
          { label: 'Affiliated Colleges', href: '/affiliated-colleges', meta: 'Registered', icon: Landmark },
        ],
      },
    ],
    rail: {
      kicker: 'Records & affiliation',
      figure: '2026',
      caption: 'Semester calendar, statutory proformas and affiliated colleges.',
      ctaLabel: 'Open academic calendar',
      ctaHref: '/academics/calendar',
    },
  },
  {
    label: 'Admissions',
    href: '/admissions',
    anchor: 'admissions',
    summary: 'The Fall 2026 admission cycle',
    viewAllLabel: 'Admissions 2026',
    columns: 2,
    direct: true,
    groups: [
      {
        title: 'Admission cycle',
        links: [
          { label: 'Admissions Overview', href: '/admissions', meta: 'Fall 2026', icon: GraduationCap },
          { label: 'Fee Structure', href: '/admissions/fee-structure', meta: 'Semester', icon: Wallet },
          { label: 'Merit Lists & Quotas', href: '/admissions/merit-lists', meta: 'Official', icon: Award },
        ],
      },
      {
        title: 'Funding & help',
        links: [
          { label: 'Scholarships & Financial Aid', href: '/admissions#scholarships-heading', meta: 'HEC', icon: Award },
          { label: 'Admissions Help Desk', href: '/contact', meta: 'Contact', icon: Phone },
        ],
      },
    ],
    rail: {
      kicker: 'Fall intake',
      figure: '2026',
      caption: 'Merit lists, semester fee schedules and financial aid.',
      ctaLabel: 'Apply for Fall 2026',
      ctaHref: '/admissions',
    },
  },
  {
    label: 'Campus Life',
    href: '/campus-life',
    anchor: 'campus-life',
    summary: 'Three campuses across the Swat valley',
    viewAllLabel: 'Campus life',
    columns: 2,
    groups: [
      {
        title: 'Campuses',
        links: [
          { label: 'Charbagh Main Campus', href: '/campuses/main-campus', meta: 'Swat', icon: Landmark },
          { label: 'Women Sub-Campus', href: '/campuses/women-campus', meta: 'Swat', icon: Users },
          { label: 'Shangla Sub-Campus', href: '/departments/shangla-subcampus', meta: 'Regional', icon: MapPin },
        ],
      },
      {
        title: 'Student life',
        links: [
          { label: 'Life & Facilities', href: '/campus-life', meta: 'Campuses', icon: Compass },
          { label: 'Events & Conferences', href: '/events', meta: 'Calendar', icon: Calendar },
        ],
      },
    ],
    rail: {
      kicker: 'Campuses',
      figure: '03',
      caption: 'Charbagh main campus, the Women sub-campus and Shangla.',
      ctaLabel: 'Visit the campuses',
      ctaHref: '/campus-life',
    },
  },
  {
    label: 'Research',
    href: '/research',
    anchor: 'research',
    summary: 'Research offices and advanced studies',
    viewAllLabel: 'Research home',
    columns: 1,
    groups: [
      {
        title: 'Research at UoS',
        links: [
          { label: 'Research Overview', href: '/research', meta: 'Focus areas', icon: Globe },
          { label: 'ORIC', href: '/research/oric', meta: 'Innovation', icon: Compass },
          { label: 'ASRB', href: '/research/asrb', meta: 'Advanced studies', icon: BookOpen },
        ],
      },
    ],
    rail: {
      kicker: 'Research & innovation',
      figure: 'ORIC',
      caption: 'Commercialization, grants and advanced studies oversight.',
      ctaLabel: 'Explore research',
      ctaHref: '/research',
    },
  },
  {
    label: 'University',
    href: '/about',
    anchor: 'university',
    summary: 'About, leadership, news and contact',
    viewAllLabel: 'About the university',
    columns: 2,
    groups: [
      {
        title: 'The institution',
        links: [
          { label: 'About the University', href: '/about', meta: 'Est. 2010', icon: Landmark },
          { label: 'Leadership & Governance', href: '/leadership', meta: 'Statutory', icon: Users },
          { label: "Vice Chancellor's Office", href: '/leadership/vice-chancellor', meta: 'Office', icon: Award },
        ],
      },
      {
        title: 'News & community',
        links: [
          { label: 'News & Press Releases', href: '/news', meta: 'Latest', icon: Newspaper },
          { label: 'Alumni Network', href: '/alumni', meta: 'Graduates', icon: GraduationCap },
          { label: 'Contact the University', href: '/contact', meta: 'Directory', icon: Mail },
        ],
      },
    ],
    rail: {
      kicker: 'Established',
      figure: '2010',
      caption: 'A public university in the Swat valley, Khyber Pakhtunkhwa.',
      ctaLabel: 'About the university',
      ctaHref: '/about',
    },
  },
];

/** Quick destinations shared by the header actions and the mobile drawer. */
export const primaryActions = {
  search: { label: 'Search the university', href: '/search' },
  portal: { label: 'Student Portal', href: '/portal' },
} as const;
