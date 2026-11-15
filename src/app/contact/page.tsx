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

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-14 py-12 sm:py-20 space-y-12 sm:space-y-16">
        
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-stone-300 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#153B27]/10 text-[#153B27] flex items-center justify-center mb-5 sm:mb-6">
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

          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#7F1D1D] text-white border border-[#661717] shadow-[0_24px_48px_-22px_rgba(102,23,23,0.5)]">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#E5CD9B] border border-white/20 flex items-center justify-center mb-5 sm:mb-6">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">
              Telephone Exchanges
            </h3>
            <div className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed mb-3 space-y-1">
              <p><strong>VC Secretariat:</strong> <a href="tel:0946730510" className="hover:underline">0946-730510</a></p>
              <p><strong>Registrar Office:</strong> <a href="tel:0946730511" className="hover:underline">0946-730511</a></p>
              <p><strong>Admissions Helpline:</strong> <a href="tel:0946730514" className="hover:underline">0946-730514</a></p>
            </div>
            <span className="text-xs font-semibold text-[#E5CD9B] block">
              Official Exchange Landlines
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-stone-300 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#B48A3E]/10 text-[#B48A3E] flex items-center justify-center mb-5 sm:mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
              Official Email Portals
            </h3>
            <div className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed mb-3 space-y-1">
              <p><strong>General Inquiries:</strong> <a href="mailto:info@uswat.edu.pk" className="hover:text-[#7F1D1D] underline">info@uswat.edu.pk</a></p>
              <p><strong>Admissions Desk:</strong> <a href="mailto:admissions@uswat.edu.pk" className="hover:text-[#7F1D1D] underline">admissions@uswat.edu.pk</a></p>
              <p><strong>Examinations:</strong> <a href="mailto:controller@uswat.edu.pk" className="hover:text-[#7F1D1D] underline">controller@uswat.edu.pk</a></p>
            </div>
            <span className="text-xs font-semibold text-[#B48A3E] block">
              24-Hour Digital Helpdesk
            </span>
          </div>
        </div>

        {/* Complete Administrative Contact Directory */}
        <div className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-stone-300 shadow-xs">
          <div className="pb-4 border-b border-stone-200 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
                Institutional Directory
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Key Administrative Extensions &amp; Contacts
              </h2>
            </div>
            <span className="text-xs text-stone-500 font-mono">
              University of Swat Exchange
            </span>
          </div>

          {/* Mobile Card Layout (phones) */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {directory.map((row, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3">
                <div>
                  <h3 className="font-serif font-bold text-base text-stone-900">{row.office}</h3>
                  <p className="text-xs text-stone-600 mt-0.5">{row.officer}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-500">
                  <MapPin className="w-3.5 h-3.5 text-[#153B27] shrink-0" />
                  <span>{row.location}</span>
                </div>
                <div className="pt-2 border-t border-stone-200/80 flex items-center gap-2">
                  <a
                    href={`tel:${row.phone.replace(/[^0-9]/g, '')}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#153B27] text-white text-xs font-semibold hover:bg-[#0F2D1E] active:scale-[0.98] transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{row.phone}</span>
                  </a>
                  <a
                    href={`mailto:${row.email}`}
                    className="inline-flex items-center justify-center p-2 rounded-lg border border-stone-300 text-stone-700 hover:bg-white active:scale-[0.98] transition-all"
                    title={`Email ${row.email}`}
                  >
                    <Mail className="w-4 h-4 text-[#7F1D1D]" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table (tablet and up) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-stone-200 text-stone-600 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3">Office / Directorate</th>
                  <th className="py-3">Officer in Charge</th>
                  <th className="py-3">Telephone</th>
                  <th className="py-3">Email</th>
                  <th className="py-3">Campus Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700 font-medium">
                {directory.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                    <td className="py-4 font-serif font-bold text-stone-900">
                      {row.office}
                    </td>
                    <td className="py-4 text-xs text-stone-600">
                      {row.officer}
                    </td>
                    <td className="py-4 font-mono font-semibold text-[#153B27]">
                      <a href={`tel:${row.phone.replace(/[^0-9]/g, '')}`} className="hover:underline">
                        {row.phone}
                      </a>
                    </td>
                    <td className="py-4 font-mono text-xs">
                      <a href={`mailto:${row.email}`} className="text-stone-600 hover:text-[#7F1D1D]">
                        {row.email}
                      </a>
                    </td>
                    <td className="py-4 text-xs text-stone-600">
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
