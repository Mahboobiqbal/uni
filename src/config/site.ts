export const siteConfig = {
  name: "University of Swat",
  shortName: "UoS",
  description:
    "The official website of the University of Swat — a public research university committed to excellence in education, research, and community development.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://uswat.edu.pk",
  locale: "en",
  founded: 2001,
  contact: {
    email: "info@uswat.edu.pk",
    phone: "+92-946-710532",
    address: "Charbagh, Swat, Khyber Pakhtunkhwa, Pakistan",
  },
  social: {
    facebook: "https://facebook.com/uswat.edu.pk",
    twitter: "https://twitter.com/uswat_edu",
    youtube: "https://youtube.com/@uswatedu",
  },
} as const;

export type SiteConfig = typeof siteConfig;
