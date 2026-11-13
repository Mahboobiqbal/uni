/** Shared TypeScript types for the University of Swat website. */

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}
