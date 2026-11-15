import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Building2, CheckCircle2, Mail, MapPin, Phone, ShieldCheck, UserCheck } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

interface OfficeDetail {
  slug: string;
  title: string;
  officerInCharge: string;
  designation: string;
  email: string;
  phone: string;
  location: string;
  overview: string;
  responsibilities: string[];
  staff: { name: string; designation: string; email?: string }[];
  image?: string;
}

const officesCatalog: OfficeDetail[] = [
  {
    slug: 'registeror-office',
    title: 'Office of the Registrar',
    officerInCharge: 'Dr. Arshad Ali Khan',
    designation: 'Registrar',
    email: 'registrar@uswat.edu.pk',
    phone: '+92-946-730511',
    location: 'Central Administration Block, Charbagh Main Campus',
    overview: 'The Office of the Registrar is the custodian of the university seal and statutory records, administering university Senate, Syndicate, and Academic Council meetings, academic affiliations, human resource appointments, and legal compliance.',
    responsibilities: [
      'Custody of university common seal, official records, statutes, and academic regulations.',
      'Organizing meetings of statutory university bodies (Senate, Syndicate, Academic Council, Selection Board).',
      'Overseeing faculty and officer recruitment, promotions, service rules, and employee benefits.',
      'Affiliation inspections and compliance for public and private sector affiliated colleges.',
      'Coordination with Higher Education Department KP and HEC Islamabad.',
    ],
    staff: [
      { name: 'Dr. Arshad Ali Khan', designation: 'Registrar', email: 'registrar@uswat.edu.pk' },
      { name: 'Mr. Tariq Kamal', designation: 'Assistant Registrar (Academics / Meetings)', email: 'tariq@uswat.edu.pk' },
      { name: 'Mr. Sadiq Ahmed', designation: 'Assistant Registrar (Establishment / HR)' },
      { name: 'Mr. Asghar Khan', designation: 'Superintendent (General Administration)' },
    ],
    image: '/images/leadership/registrar-dr-arshad-ali.jpeg',
  },
  {
    slug: 'treasurer-office',
    title: 'Treasurer’s Office',
    officerInCharge: 'Mr. Munir Ahmad',
    designation: 'Treasurer',
    email: 'treasurer@uswat.edu.pk',
    phone: '+92-946-730512',
    location: 'Ground Floor, Administration Block, Charbagh',
    overview: 'The Treasurer’s Office manages university finances, annual recurring and developmental budgets, student fee reconciliation, pension funds, government grants, and institutional financial audits.',
    responsibilities: [
      'Preparation of annual budget estimates and financial statements for Finance & Planning Committee.',
      'Disbursement of salaries, scholarships, vendor payments, and research grant funds.',
      'Collection and banking reconciliation of student tuition and examination fees.',
      'Audit compliance with Auditor General of Pakistan (AGP) and internal auditors.',
    ],
    staff: [
      { name: 'Mr. Munir Ahmad', designation: 'Treasurer', email: 'treasurer@uswat.edu.pk' },
      { name: 'Mr. Fazal Subhan', designation: 'Deputy Treasurer' },
      { name: 'Mr. Sher Ali', designation: 'Accountant (Fees & Reconciliation)' },
    ],
  },
  {
    slug: 'controller-of-examination-office',
    title: 'Controller of Examination Office',
    officerInCharge: 'Mr. Muhammad Riaz',
    designation: 'Controller of Examinations',
    email: 'controller@uswat.edu.pk',
    phone: '+92-946-730513',
    location: 'Examination Complex, Charbagh Main Campus',
    overview: 'Responsible for conduct of transparent semester and annual examinations, result tabulations, official degree issuance, convocation medals, and academic transcript verification.',
    responsibilities: [
      'Scheduling date sheets and appointing supervisory staff for campus and affiliated colleges.',
      'Security and printing of confidential question papers and computerized answer books.',
      'Issuance of official transcripts, provisional certificates, and verified degree diplomas.',
      'Conducting general convocations and awarding Gold Medals to academic toppers.',
    ],
    staff: [
      { name: 'Mr. Muhammad Riaz', designation: 'Controller of Examinations', email: 'controller@uswat.edu.pk' },
      { name: 'Mr. Zia Ullah', designation: 'Assistant Controller (Conduct & Secrecy)' },
      { name: 'Mr. Imran Khan', designation: 'Assistant Controller (Degree Verification)' },
    ],
    image: '/images/campus/exam-block.jpg',
  },
  {
    slug: 'provost-office',
    title: 'Provost Office',
    officerInCharge: 'Prof. Dr. Zahid Ullah',
    designation: 'University Provost',
    email: 'provost@uswat.edu.pk',
    phone: '+92-946-730515',
    location: 'Student Affairs Complex, Charbagh Main Campus',
    overview: 'The Provost Office manages student residential hostels, campus transportation, student welfare, dining halls, cafeteria hygiene, and on-campus disciplinary standards.',
    responsibilities: [
      'Hostel allotment, residential room allocation, and hostel warden supervision.',
      'University student bus transport routes covering Mingora, Saidu Sharif, Barikot, and Matta.',
      'Student counseling, campus cafeteria monitoring, and co-curricular recreational facilities.',
    ],
    staff: [
      { name: 'Prof. Dr. Zahid Ullah', designation: 'University Provost', email: 'provost@uswat.edu.pk' },
      { name: 'Mr. Rahim Dad', designation: 'Hostel Warden (Boys Hostels)' },
      { name: 'Ms. Salma Bibi', designation: 'Hostel Warden (Women Hostels)' },
    ],
  },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return officesCatalog.map((off) => ({
    slug: off.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const off = officesCatalog.find((o) => o.slug === slug);
  if (!off) return { title: 'Office Not Found | University of Swat' };
  return {
    title: `${off.title} | University of Swat`,
    description: off.overview,
  };
}

export default async function OfficeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const off = officesCatalog.find((o) => o.slug === slug);

  if (!off) {
    notFound();
  }

  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Statutory Administration"
        title={off.title}
        subtitle={off.overview}
        eyebrow="Leadership &amp; Administrative Governance"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        
        {/* Back link */}
        <div className="mb-10">
          <Link
            href="/leadership"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-[#153B27] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Leadership Directory</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-300 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                  Administrative Mandate
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
                Overview &amp; Purpose
              </h2>
              <p className="font-sans text-stone-700 text-base sm:text-lg leading-relaxed mb-8">
                {off.overview}
              </p>

              <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">
                Core Institutional Responsibilities
              </h3>
              <div className="space-y-3">
                {off.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#153B27] shrink-0 mt-0.5" />
                    <span className="font-sans text-stone-700 text-sm sm:text-base leading-relaxed">
                      {resp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Staff Directory */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-300 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                  Department Staff
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">
                Officers &amp; Administrative Roster
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {off.staff.map((s, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                    <h4 className="font-serif text-base font-bold text-stone-900">
                      {s.name}
                    </h4>
                    <span className="text-xs text-[#153B27] font-semibold block mt-0.5">
                      {s.designation}
                    </span>
                    {s.email && (
                      <a
                        href={`mailto:${s.email}`}
                        className="text-[11px] font-mono text-stone-600 hover:text-[#7F1D1D] flex items-center gap-1 mt-2"
                      >
                        <Mail className="w-3 h-3" />
                        {s.email}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-300 shadow-xs">
              {off.image && (
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mb-6 border border-stone-200">
                  <Image
                    src={off.image}
                    alt={off.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <h3 className="font-serif text-xl font-bold text-stone-900 pb-3 border-b border-stone-200 mb-4">
                Office Information
              </h3>

              <div className="space-y-4 text-xs sm:text-[13px]">
                <div>
                  <span className="text-stone-500 uppercase tracking-wider block font-bold text-[10px]">
                    Officer in Charge
                  </span>
                  <span className="font-semibold text-stone-900 text-sm">
                    {off.officerInCharge}
                  </span>
                  <span className="text-stone-600 block">{off.designation}</span>
                </div>

                <div>
                  <span className="text-stone-500 uppercase tracking-wider block font-bold text-[10px]">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${off.email}`}
                    className="font-mono text-stone-700 hover:text-[#7F1D1D] flex items-center gap-1.5 mt-0.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#7F1D1D]" />
                    {off.email}
                  </a>
                </div>

                <div>
                  <span className="text-stone-500 uppercase tracking-wider block font-bold text-[10px]">
                    Direct Telephone
                  </span>
                  <span className="font-mono text-stone-700 flex items-center gap-1.5 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-[#153B27]" />
                    {off.phone}
                  </span>
                </div>

                <div>
                  <span className="text-stone-500 uppercase tracking-wider block font-bold text-[10px]">
                    Campus Location
                  </span>
                  <span className="font-medium text-stone-700 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#153B27]" />
                    {off.location}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col gap-2">
                <Link
                  href="/leadership"
                  className="w-full py-3 rounded-xl bg-[#153B27] text-white font-semibold text-xs text-center hover:bg-[#153B27]/90 transition-colors"
                >
                  All Administrative Offices
                </Link>
                <Link
                  href="/portal"
                  className="w-full py-3 rounded-xl bg-stone-100 text-stone-700 font-semibold text-xs text-center hover:bg-stone-200 transition-colors"
                >
                  Access e-Office Portal
                </Link>
              </div>
            </div>

            {/* Other Offices */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-300 shadow-xs">
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-4">
                Other Executive Offices
              </h4>
              <div className="space-y-2 text-xs">
                {officesCatalog
                  .filter((o) => o.slug !== off.slug)
                  .map((other) => (
                    <Link
                      key={other.slug}
                      href={`/leadership/${other.slug}`}
                      className="block p-3 rounded-xl bg-stone-50 border border-stone-200 hover:border-stone-400 text-stone-700 hover:text-[#153B27] font-medium transition-colors"
                    >
                      {other.title}
                    </Link>
                  ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
