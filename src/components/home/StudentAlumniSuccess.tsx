'use client';

import React from 'react';
import { Quote, Star } from 'lucide-react';

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
      'The computing faculty\'s rigorous training helped me clear international engineering interviews. And the calm surroundings at Charbagh kept me focused.',
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
      'We didn\'t just read about rivers. We took water samples from Swat tributaries and studied melting glaciers ourselves. That fieldwork made my postgraduate applications easier.',
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
      'With ORIC\'s help, our team built and tested a cold-chain platform for local fruit growers. The university really backs local enterprise.',
    image: '/campus-shot-4.jpg',
    faculty: 'Management Sciences',
  },
];

export default function StudentAlumniSuccess() {
  return (
    <section
      id="alumni-success"
      data-purpose="student-alumni-success"
      className="py-20 sm:py-28 bg-[#F6F5F0] relative overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-0.5 w-6 bg-[#7F1D1D]" />
            <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
              Alumni Outcomes &amp; Social Proof
            </span>
            <span className="h-0.5 w-6 bg-[#7F1D1D]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#14291D] font-bold tracking-[-0.025em] leading-[1.14] mb-4">
            Where our graduates go
          </h2>
          <p className="font-sans text-stone-600 text-sm sm:text-lg leading-relaxed">
            Our alumni lead engineering teams, publish research, and start businesses across Pakistan and beyond.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="relative flex flex-col rounded-2xl bg-white border border-stone-300 p-5 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-200 ease-out hover:-translate-y-[2px] group"
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
              <div className="flex items-center gap-4 pt-6 border-t border-stone-200 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-stone-200 shrink-0 bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.025] transition-transform duration-300 ease-out"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#14291D] leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#153B27] font-semibold mt-0.5">
                    {item.role} · {item.company}
                  </p>
                  <p className="text-[11px] text-stone-600 font-sans mt-0.5">
                    {item.degree} ({item.year})
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
