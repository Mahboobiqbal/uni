/**
 * University of Swat — Official Institutional Profile & Global Data
 * Extracted directly from uswat.edu.pk (2026)
 */

export interface UniversityProfile {
  name: string;
  nativeName: string;
  acronym: string;
  tagline: string;
  established: number;
  location: {
    city: string;
    valley: string;
    province: string;
    country: string;
    mainCampus: string;
    coordinates: string;
  };
  leadership: {
    chancellor: string;
    chancellorTitle: string;
    viceChancellor: string;
    vcTitle: string;
    vcEmail: string;
    registrar: string;
    registrarTitle: string;
  };
  accreditation: {
    hecCategory: string;
    hecScore: string;
    theRankings: string;
    greenMetric: string;
  };
  contact: {
    phone: string;
    email: string;
    admissionsEmail: string;
    website: string;
    address: string;
  };
}

export const universityData: UniversityProfile = {
  name: "University of Swat",
  nativeName: "د سوات پوهنتون",
  acronym: "UOS",
  tagline: "Aspiring for Quality Education with Relevance",
  established: 2010,
  location: {
    city: "Swat",
    valley: "Swat Valley",
    province: "Khyber Pakhtunkhwa",
    country: "Pakistan",
    mainCampus: "Charbagh, Swat",
    coordinates: "34°50'N, 72°26'E",
  },
  leadership: {
    chancellor: "Governor of Khyber Pakhtunkhwa",
    chancellorTitle: "Chancellor",
    viceChancellor: "Prof. Dr. Husnul Amin",
    vcTitle: "Vice Chancellor",
    vcEmail: "vc@uswat.edu.pk",
    registrar: "Dr. Arshad Ali Khan",
    registrarTitle: "Registrar",
  },
  accreditation: {
    hecCategory: "W-Category",
    hecScore: "91.4%",
    theRankings: "301–400 THE Impact Rankings",
    greenMetric: "Top 15 GreenMetric National",
  },
  contact: {
    phone: "+92-946-730510",
    email: "info@uswat.edu.pk",
    admissionsEmail: "admissions@uswat.edu.pk",
    website: "https://uswat.edu.pk",
    address: "Main Campus, Charbagh, District Swat, Khyber Pakhtunkhwa, Pakistan",
  },
};
