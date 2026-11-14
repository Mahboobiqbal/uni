/**
 * University of Swat — Official Events & Public Lectures
 * Extracted from official university notices and announcements (uswat.edu.pk, 2026)
 */

export interface UniversityEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  organizer: string;
  description: string;
}

export const universityEvents: UniversityEvent[] = [
  {
    id: "one-planet-one-health-conference",
    title: "International Conference: One Planet, One Health – Nature, Climate, Humanity",
    date: "November 24–26, 2026",
    time: "09:30 AM – 04:30 PM",
    location: "Main Auditorium, Charbagh Campus",
    category: "International Conference",
    organizer: "Department of Environmental Sciences & ORIC",
    description:
      "Multidisciplinary research symposium addressing alpine climate resilience, glacier runoff dynamics, vector-borne disease models, and sustainable mountain ecosystem management.",
  },
  {
    id: "algorithmic-trading-fintech-seminar",
    title: "One-Day Seminar on Algorithmic Trading & Financial Technologies (Robot Trader)",
    date: "November 18, 2026",
    time: "10:00 AM – 01:00 PM",
    location: "Conference Hall, Academic Block C",
    category: "Fintech Seminar",
    organizer: "Department of Management & Commerce",
    description:
      "Practical training on algorithmic financial modeling, quantitative investing, and cryptocurrency market regulation for business scholars.",
  },
  {
    id: "swat-lectures-reclaiming-soul",
    title: "Swat Lectures Series (خطباتِ سوات): Reclaiming the Soul of the University",
    date: "October 30, 2026",
    time: "11:00 AM – 01:30 PM",
    location: "Central Library Hall",
    category: "Keynote Discourse",
    organizer: "Vice Chancellor's Secretariat",
    description:
      "Keynote philosophical lecture delivered by Vice Chancellor Prof. Dr. Husnul Amin exploring academic ethics, critical thinking, and institutional mission.",
  },
  {
    id: "allama-iqbal-day-colloquium",
    title: "Allama Iqbal Day & Literary Colloquium",
    date: "November 09, 2026",
    time: "10:00 AM – 02:00 PM",
    location: "Auditorium, Women Campus",
    category: "Literary & National Day",
    organizer: "Department of Urdu & Department of Pashto",
    description:
      "Recitation of classical philosophical poetry, panel discussions on national selfhood (Khudi), and student inter-departmental speech contests.",
  },
  {
    id: "annual-general-convocation-2026",
    title: "Annual General Convocation 2026",
    date: "December 18, 2026",
    time: "09:00 AM – 03:00 PM",
    location: "Convocation Arena, Charbagh Main Campus",
    category: "Commencement",
    organizer: "Controller of Examination Office",
    description:
      "Conferring degrees upon graduating scholars of BS, MA/MSc, MS/MPhil, and PhD batches 2022–2026 with Chancellor's and Vice Chancellor's Gold Medals.",
  },
];
