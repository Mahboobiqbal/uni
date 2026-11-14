import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, FlaskConical, Landmark, Leaf, Microscope, Newspaper } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Research | University of Swat',
  description: 'Research and innovation at the University of Swat — ORIC, centres, grants and publications.',
};

const centres = [
  {
    icon: <Landmark className="w-5 h-5" />,
    title: 'Centre for Gandhara & Uddiyana Studies',
    text: 'Archaeology, heritage conservation and digital documentation of Buddhist sites.',
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: 'High-Altitude Botany & Ecology',
    text: 'Alpine flora, ethnobotany and biopharmaceutical discovery in the Swat Valley.',
  },
  {
    icon: <Microscope className="w-5 h-5" />,
    title: 'Biotechnology & Microbiology Lab',
    text: 'Molecular biology, environmental microbiology and applied biotechnology.',
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    title: 'Chemical Sciences Institute',
    text: 'Synthesis, analytical chemistry and materials research.',
  },
];

const grants = [
  { title: 'ORIC Seed Grants', value: 'PKR 1.5M per project', note: 'Early-career faculty & postgraduate fellows' },
  { title: 'International Collaborative Grants', value: 'Varies', note: 'With European and South Asian partners' },
  { title: 'Gandharan Digital Heritage Project', value: 'Consortium', note: '3D scanning of Butkara stupas' },
];

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research & Innovation"
        title="Research"
        description="The Office of Research, Innovation and Commercialization (ORIC) supports discovery across the natural sciences, heritage and society."
      />

      <main className="py-14 lg:py-20 bg-[#F6F5F0]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 space-y-14 lg:space-y-20">
          <section>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#14291D] font-bold">
                Research Centres
              </h2>
              <p className="text-sm text-stone-500 max-w-md lg:text-right leading-[1.65]">
                Flagship centres where the university&rsquo;s research identity is built.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {centres.map(centre => (
                <article
                  key={centre.title}
                  className="p-6 rounded-xl bg-white border border-stone-200/90 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-[0_16px_36px_-18px_rgba(21,59,39,0.25)]"
                >
                  <span className="w-11 h-11 rounded-xl bg-[#153B27]/8 text-[#153B27] flex items-center justify-center mb-4">
                    {centre.icon}
                  </span>
                  <h3 className="font-serif text-lg text-[#14291D] font-bold mb-2">{centre.title}</h3>
                  <p className="text-sm text-stone-500 leading-[1.6]">{centre.text}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <section className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-white border border-stone-200/90 shadow-xs">
              <h2 className="font-serif text-2xl text-[#14291D] font-bold mb-5 flex items-center gap-3">
                <Newspaper className="w-5 h-5 text-[#7F1D1D]" />
                Funding & Projects
              </h2>
              <div className="divide-y divide-stone-100">
                {grants.map(g => (
                  <div key={g.title} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <p className="text-sm font-bold text-[#14291D]">{g.title}</p>
                      <span className="text-xs font-bold text-[#153B27] bg-[#153B27]/8 border border-[#153B27]/15 px-2.5 py-1 rounded-full">
                        {g.value}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 mt-1">{g.note}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-gradient-to-b from-[#153B27] to-[#14291D] text-white">
              <h2 className="font-serif text-2xl font-bold mb-4">Publication Highlights</h2>
              <p className="text-white/75 text-sm leading-[1.65] mb-6">
                Research output is indexed in Scopus and Web of Science, with 200+ high-impact
                papers contributed by the Vice Chancellor&rsquo;s research group alone.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { v: '200+', l: 'Impact papers' },
                  { v: '#1', l: 'Malakand citations' },
                  { v: 'HEC', l: 'W-Category 91.4%' },
                ].map(s => (
                  <div key={s.l}>
                    <p className="font-serif text-2xl font-bold text-[#E0C078]">{s.v}</p>
                    <p className="text-[11px] text-white/70 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/academics"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#E0C078] hover:text-white transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Library & digital resources
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
