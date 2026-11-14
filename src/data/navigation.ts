export interface MegaMenuLink {
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  title: string;
  links: MegaMenuLink[];
}

export interface LocationCard {
  title: string;
  description: string;
  badge: string;
}

export interface PortalLink {
  label: string;
  href: string;
  dotColor: string;
}

export const programsMegaData: {
  columns: MegaMenuColumn[];
  banner: {
    tag: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
} = {
  columns: [
    {
      title: "Undergraduate",
      links: [
        { label: "BS Computer Science", href: "#" },
        { label: "BS Software Engineering", href: "#" },
        { label: "Doctor of Pharmacy (Pharm-D)", href: "#" },
        { label: "BS Environmental Sciences", href: "#" },
        { label: "BBA (Honors)", href: "#" },
      ],
    },
    {
      title: "Postgraduate / MS",
      links: [
        { label: "MS Management Sciences", href: "#" },
        { label: "M.Phil Archaeology & Heritage", href: "#" },
        { label: "MS Information Technology", href: "#" },
        { label: "M.Phil Mathematics", href: "#" },
        { label: "MS Microbiology", href: "#" },
      ],
    },
    {
      title: "Doctoral (Ph.D.)",
      links: [
        { label: "Ph.D. Computer Science", href: "#" },
        { label: "Ph.D. Zoology & Wildlife", href: "#" },
        { label: "Ph.D. Economics", href: "#" },
        { label: "Ph.D. Botany & Herbal Studies", href: "#" },
      ],
    },
  ],
  banner: {
    tag: "Fall Admission Cycle",
    title: "Admissions Open 2026-27",
    description: "Undergraduate and Graduate entrance tests schedule has been promulgated officially.",
    ctaText: "View Eligibility Criteria →",
    ctaHref: "#admissions-desk",
  },
};

export const departmentsMegaData: MegaMenuColumn[] = [
  {
    title: "Sciences & IT",
    links: [
      { label: "Institute of Chemical Sciences", href: "#" },
      { label: "Dept of Computer Sciences & Software Eng", href: "#" },
      { label: "Centre for Biotechnology and Microbiology", href: "#" },
      { label: "Dept of Earth and Environmental Sciences", href: "#" },
    ],
  },
  {
    title: "Arts & Social Sciences",
    links: [
      { label: "Center for Gandhara & Uddiyana Studies", href: "#" },
      { label: "Dept of Economics & Development", href: "#" },
      { label: "Dept of Law and Sharia Studies", href: "#" },
      { label: "Dept of Media & Communication Studies", href: "#" },
    ],
  },
  {
    title: "Management & Allied",
    links: [
      { label: "Institute of Management Sciences (IMS)", href: "#" },
      { label: "Centre for Tourism & Hospitality Management", href: "#" },
      { label: "Department of Applied Psychology", href: "#" },
    ],
  },
];

export const locationsMegaData: LocationCard[] = [
  {
    title: "Main Campus Charbagh",
    description: "Central Administration, Central Library, Engineering & IT Blocks.",
    badge: "Charbagh Bypass Rd, Swat",
  },
  {
    title: "Kanju Sub-Campus",
    description: "Faculty of Social Sciences, Gandhara Research wing, Law Campus.",
    badge: "Kanju Township, Swat",
  },
  {
    title: "Shangla Satellite Campus",
    description: "Outreach Academic Center for Regional Rural Education.",
    badge: "Alpuri, Dist Shangla",
  },
];

export const portalsMegaData: PortalLink[] = [
  { label: "Student LMS Portal", href: "#", dotColor: "bg-emerald-600" },
  { label: "Faculty CMS Portal", href: "#", dotColor: "bg-blue-600" },
  { label: "Online Fee Slip Generation", href: "#", dotColor: "bg-amber-500" },
  { label: "Digital Research Repository", href: "#", dotColor: "bg-purple-600" },
];

