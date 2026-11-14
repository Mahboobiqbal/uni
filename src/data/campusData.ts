/**
 * University of Swat — Campuses & Facilities Architecture
 * Extracted from official university records (2026)
 */

export interface CampusLocation {
  id: string;
  name: string;
  type: "Main Campus" | "Specialized Campus" | "Sub-Campus";
  location: string;
  overview: string;
  facilities: string[];
  departmentsHoused: string[];
  image: string;
}

export const universityCampuses: CampusLocation[] = [
  {
    id: "main-campus-charbagh",
    name: "Charbagh Main Campus",
    type: "Main Campus",
    location: "Charbagh, District Swat, Khyber Pakhtunkhwa",
    overview: "Spread across hundreds of kanals along the pristine banks of the Swat River, Charbagh Main Campus serves as the administrative, research, and central scholastic hub of the university, featuring state-of-the-art academic blocks, central library, and 100% solarized power infrastructure.",
    facilities: [
      "Academic Block C & Science Laboratories",
      "Executive Vice Chancellor's Secretariat & Administration Block",
      "Central Automated Library & Reading Halls",
      "Directorate of Works & Engineering Command",
      "Modern Multipurpose Sports Complex & Cricket Ground",
      "Campus Solarization Photovoltaic Array (Green Energy)",
      "ORIC Business Incubation & Technology Transfer Center",
    ],
    departmentsHoused: [
      "Department of Computer and Software Technology",
      "Department of Chemistry",
      "Department of Physics",
      "Department of Mathematics & Statistics",
      "Department of Environmental Sciences",
      "Department of Management & Commerce",
      "Department of Law & Shariah",
      "Department of English and Foreign Languages",
    ],
    image: "/images/campus/charbagh-campus.jpg",
  },
  {
    id: "women-campus",
    name: "Women Campus & College of Home Sciences",
    type: "Specialized Campus",
    location: "Swat City Center, Khyber Pakhtunkhwa",
    overview: "Dedicated exclusively to female higher education in Malakand division, the Women Campus houses the College of Home Sciences, modern biology labs, and provides an empowering, safe scholastic environment for women leaders in academia and healthcare.",
    facilities: [
      "College of Home Sciences Demonstration Kitchens & Studios",
      "Dedicated Female Student Library & Study Spaces",
      "Biotechnology & Microbiology Research Labs",
      "Campus Medical Dispensary & Counseling Cell",
      "Secure Dedicated Transport Fleet",
    ],
    departmentsHoused: [
      "College of Home Sciences (Food, Nutrition & Textile)",
      "Department of Botany (Women Section)",
      "Department of Zoology (Women Section)",
      "Department of Psychological Studies (Women Section)",
    ],
    image: "/images/campus/women-campus.jpg",
  },
  {
    id: "sangota-campus",
    name: "Sangota Campus",
    type: "Specialized Campus",
    location: "Sangota, Swat",
    overview: "Set in a tranquil foothill grove, Sangota Campus provides specialized seminar halls, administrative annexes, and faculty residential accommodation.",
    facilities: [
      "Faculty Residential Enclave",
      "Conference & Academic Training Hall",
      "Guest Suites for Visiting Researchers & International Scholars",
    ],
    departmentsHoused: ["Department of Education & Staff Training"],
    image: "/images/campus/main-campus-gate.jpeg",
  },
];
