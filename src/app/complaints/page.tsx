import type { Metadata } from 'next';
import ComplaintPortal from '@/components/complaints/ComplaintPortal';

export const metadata: Metadata = {
  title: 'Complaints & Feedback | University of Swat',
  description:
    'Submit a complaint or suggestion to the University of Swat — reviewed directly by the University Administration & Proctorial Office.',
};

export default function ComplaintsPage() {
  return <ComplaintPortal />;
}
