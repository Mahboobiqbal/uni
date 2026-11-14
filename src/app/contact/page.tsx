import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Building2, Send, ShieldAlert, Globe } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Contact Us & Administrative Directory | University of Swat',
  description: 'Official telephone directory, campus locations, admissions helpline, and department emails for University of Swat.',
};

const directory = [
  { office: 'Vice Chancellor’s Secretariat', officer: 'Prof. Dr. Husnul Amin (PS: Mr. Tariq Kamal)', phone: '0946-730510', email: 'vc@uswat.edu.pk', location: 'Executive Wing, Main Campus Charbagh' },
  { office: 'Office of the Registrar', officer: 'Dr. Arshad Ali Khan', phone: '0946-730511', email: 'registrar@uswat.edu.pk', location: 'Administration Block, Charbagh' },
  { office: 'Controller of Examination Office', officer: 'Mr. Muhammad Riaz', phone: '0946-730513', email: 'controller@uswat.edu.pk', location: 'Examination Complex, Charbagh' },
  { office: 'Directorate of Admissions', officer: 'Admissions Desk', phone: '0946-730514', email: 'admissions@uswat.edu.pk', location: 'Academic Block C, Charbagh' },
  { office: 'Treasurer Office', officer: 'Mr. Munir Ahmad', phone: '0946-730512', email: 'treasurer@uswat.edu.pk', location: 'Administration Block, Charbagh' },
  { office: 'Provost Office (Hostels & Transport)', officer: 'Prof. Dr. Zahid Ullah', phone: '0946-730515', email: 'provost@uswat.edu.pk', location: 'Student Affairs Complex' },
  { office: 'Directorate of Sports', officer: 'Dr. Amjad Ali', phone: '0946-730516', email: 'dsports@uswat.edu.pk', location: 'Sports Pavilion, Charbagh' },
  { office: 'Central Automated Library', officer: 'Dr. Wajid Rashid (Chief Librarian)', phone: '0946-730517', email: 'librarian@uswat.edu.pk', location: 'Central Library Building' },
  { office: 'ORIC (Research & Commercialization)', officer: 'Dr. Anwar Hussain', phone: '0946-730519', email: 'oric@uswat.edu.pk', location: 'Academic Block C' },
  { office: 'Directorate of IT & CMS Helpdesk', officer: 'IT Operations Team', phone: '0946-730520', email: 'dit@uswat.edu.pk', location: 'Data Center, Block C' },
];

export default function ContactPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Directory &amp; Inquiries"
        title="Contact the University of Swat"
        subtitle="Connect with university administrative offices, academic departments, admissions counselors, or visit our campuses in Swat."
        eyebrow="Communications &amp; Visitor Services"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20 space-y-16">
        
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#153B27]/10 text-[#153B27] flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
              Charbagh Main Campus
            </h3>
            <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
              Main Campus, Charbagh, District Swat, Khyber Pakhtunkhwa, Pakistan. Postal Code: 19120.
            </p>
            <span className="text-xs font-semibold text-[#153B27] block">
              Open Mon – Fri: 08:30 AM – 04:30 PM
            </span>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#7F1D1D]/10 text-[#7F1D1D] flex items-center justify-center mb-6">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
              Telephone Exchanges
            </h3>
            <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed mb-2">
              <strong>VC Secretariat:</strong> 0946-730510<br />
              <strong>Registrar Office:</strong> 0946-730511<br />
              <strong>Admissions Helpline:</strong> 0946-730514
            </p>
            <span className="text-xs font-semibold text-[#7F1D1D] block">
              Official Exchange Landlines
            </span>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#B48A3E]/10 text-[#B48A3E] flex items-center justify-center mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
              Official Email Portals
            </h3>
            <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed mb-2">
              <strong>General Inquiries:</strong> info@uswat.edu.pk<br />
              <strong>Admissions Desk:</strong> admissions@uswat.edu.pk<br />
              <strong>Examinations:</strong> controller@uswat.edu.pk
            </p>
            <span className="text-xs font-semibold text-[#B48A3E] block">
              24-Hour Digital Helpdesk
            </span>
          </div>
        </div>

        {/* Complete Administrative Contact Directory */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
          <div className="pb-4 border-b border-stone-100 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
                Institutional Directory
              </span>
              <h2 className="font-serif text-3xl font-bold text-stone-900">
                Key Administrative Extensions &amp; Contacts
              </h2>
            </div>
            <span className="text-xs text-stone-400 font-mono">
              University of Swat Exchange
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-stone-200 text-stone-400 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3">Office / Directorate</th>
                  <th className="py-3">Officer in Charge</th>
                  <th className="py-3">Telephone</th>
                  <th className="py-3">Email</th>
                  <th className="py-3">Campus Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700 font-medium">
                {directory.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                    <td className="py-4 font-serif font-bold text-stone-900">
                      {row.office}
                    </td>
                    <td className="py-4 text-xs text-stone-600">
                      {row.officer}
                    </td>
                    <td className="py-4 font-mono font-semibold text-[#153B27]">
                      {row.phone}
                    </td>
                    <td className="py-4 font-mono text-xs">
                      <a href={`mailto:${row.email}`} className="text-stone-600 hover:text-[#7F1D1D]">
                        {row.email}
                      </a>
                    </td>
                    <td className="py-4 text-xs text-stone-500">
                      {row.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
