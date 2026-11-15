'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Award, Briefcase, GraduationCap, Quote, Star, Users } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  degree: string;
  year: string;
  quote: string;
  image: string;
  faculty: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'asim-khan',
    name: 'Asim Khan',
    role: 'Senior Software Engineer',
    company: 'Techlogix Global',
    degree: 'BS Software Engineering',
    year: 'Class of 2022',
    quote:
      'The rigorous algorithms training and mentorship from the computing faculty gave me the exact technical edge required to clear international engineering interviews. Studying in the peaceful alpine surroundings of Charbagh provided unmatched focus.',
    image: '/campus-shot-2.jpg',
    faculty: 'Computing & IT',
  },
  {
    id: 'sana-jamil',
    name: 'Dr. Sana Jamil',
    role: 'Alpine Hydrology Researcher',
    company: 'National Water Policy Institute',
    degree: 'BS Environmental Sciences',
    year: 'Class of 2021',
    quote:
      'We were not just reading textbooks—we were taking hydrological samples from Swat River tributaries and studying glacial melt firsthand. That authentic fieldwork foundation made my postgraduate admissions seamless.',
    image: '/campus-shot-3.jpg',
    faculty: 'Sciences',
  },
  {
    id: 'bilal-ahmed',
    name: 'Muhammad Bilal',
    role: 'Co-Founder & Operations Lead',
    company: 'Malakand AgroLogistics',
    degree: 'BBA (Honors)',
    year: 'Class of 2023',
    quote:
      'Through ORIC’s entrepreneurship incubation, our student team was able to validate and pilot a cold-chain logistics platform for regional fruit growers. University of Swat truly believes in empowering local enterprise.',
    image: '/campus-shot-4.jpg',
    faculty: 'Management Sciences',
  },
];

export default function StudentAlumniSuccess() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="alumni-success"
      data-purpose="student-alumni-success"
      className="py-20 sm:py-28 bg-[#F6F5F0] relative overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-0.5 w-6 bg-[#7F1D1D]" />
            <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
              Alumni Outcomes &amp; Social Proof
            </span>
            <span className="h-0.5 w-6 bg-[#7F1D1D]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#14291D] font-bold tracking-[-0.025em] leading-[1.14] mb-4">
            Where Ambition Meets Proven Real-World Impact
          </h2>
          <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed">
            Our graduates lead engineering teams, author high-impact scientific publications,
            and launch ventures that reshape the socio-economic landscape of Pakistan and beyond.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((item, idx) => (
            <article
              key={item.id}
              className="relative flex flex-col rounded-2xl bg-white border border-stone-200/90 p-8 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Quote icon watermark */}
              <div className="absolute top-6 right-6 text-stone-200 group-hover:text-[#153B27]/15 transition-colors">
                <Quote className="w-10 h-10 stroke-1" />
              </div>

              {/* Star rating */}
              <div className="flex items-center gap-1 text-amber-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-sans text-stone-700 text-sm sm:text-base leading-[1.7] italic mb-8 relative z-10 flex-1">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author attribution row */}
              <div className="flex items-center gap-4 pt-6 border-t border-stone-100 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-stone-200 shrink-0 bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#14291D] leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#153B27] font-semibold mt-0.5">
                    {item.role} · {item.company}
                  </p>
                  <p className="text-[11px] text-stone-400 font-sans mt-0.5">
                    {item.degree} ({item.year})
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom 4 Metric Stat Counters (Matching reference Section 7) */}
        <div className="rounded-2xl bg-white border border-stone-200/90 shadow-sm p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-stone-100">
            <div className="text-center pt-4 lg:pt-0">
              <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153B27] tracking-tight">
                92.6%
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#14291D] mt-2">
                Graduate Employability
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5">
                Employed or in postgrad within 6 months
              </p>
            </div>

            <div className="text-center pt-6 lg:pt-0 lg:pl-8">
              <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7F1D1D] tracking-tight">
                10,130+
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#14291D] mt-2">
                Enrolled Scholars
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5">
                Across 28 degree-awarding departments
              </p>
            </div>

            <div className="text-center pt-6 lg:pt-0 lg:pl-8">
              <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B48A3E] tracking-tight">
                PKR 45M+
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#14291D] mt-2">
                Scholarships Awarded
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5">
                HEC Need-Based, Ehsaas &amp; Merit Aid
              </p>
            </div>

            <div className="text-center pt-6 lg:pt-0 lg:pl-8">
              <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14291D] tracking-tight">
                15,000+
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#14291D] mt-2">
                Alumni Network
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5">
                Scholars active across 18 countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
