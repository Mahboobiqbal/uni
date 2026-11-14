'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProfileCard from '@/components/ui/ProfileCard';
import { Award, Building2, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function ViceChancellorSection() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleContactClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'mailto:vc@uswat.edu.pk';
      showToast('Opening email client for: vc@uswat.edu.pk');
    }
  };

  return (
    <section
      className="py-20 sm:py-28 bg-[#F8F7F4] relative overflow-hidden"
      data-purpose="vice-chancellor-section"
      id="vice-chancellor"
    >
      {/* Subtle Background Accent Lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#153B27]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#7F1D1D]/5 blur-3xl pointer-events-none" />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0C1912] text-white text-xs px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 border border-white/10 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="w-full max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: React Bits <ProfileCard /> with 3D Tilt & Holographic Foil */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full flex justify-center">
              {/* Subtle ambient shadow behind card */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#153B27]/15 via-[#7F1D1D]/10 to-[#B48A3E]/10 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />
              
              <ProfileCard
                avatarUrl="/vc-portrait.jpg"
                iconUrl="/pattern-crest.svg"
                miniAvatarUrl="/uos-logo-circle.png"
                name="Prof. Dr. Hassan Sher"
                title="Vice Chancellor · University of Swat"
                caption="Prof. Dr. Hassan Sher — Vice Chancellor, University of Swat"
                contactText="Email VC"
                showUserInfo={true}
                theme="light"
                backdropColor="#153B27"
                width={420}
                radius={22}
                holo={0.85}
                glare={0.65}
                tiltStrength={14}
                parallax={10}
                enableTilt={true}
                intro={true}
                onContactClick={handleContactClick}
                className="mx-auto shadow-md"
              />
            </div>

            {/* Sub-card Institutional Location Caption */}
            <div className="mt-4 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-stone-200/90 text-xs text-stone-600 font-medium shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#153B27]" />
              <span>Office of the Vice Chancellor · Charbagh Main Campus</span>
            </div>
          </div>

          {/* Right: Leadership Message & Discourse */}
          <div className="lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-4">
            <div>
              {/* Section Tag */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-0.5 w-7 bg-[#7F1D1D]" />
                <span className="text-xs sm:text-[12.5px] uppercase tracking-wider text-[#7F1D1D] font-bold">
                  Leadership Discourse
                </span>
              </div>

              {/* Section Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-stone-900 font-bold tracking-[-0.025em] leading-[1.12] mb-5">
                Voice of the Vice Chancellor
              </h2>

              {/* Concise, Inspiring Leadership Statement */}
              <blockquote className="font-sans text-stone-700 text-base sm:text-lg lg:text-[19px] leading-[1.68] font-normal mb-8 border-l-2 border-[#153B27]/40 pl-5 italic">
                &ldquo;Our institutional ambition is not merely granting diplomas, but cultivating analytical
                thinkers who illuminate solutions for climate resilience, digital technology, and societal harmony.
                At Swat, we empower generations where intellect transforms into human service.&rdquo;
              </blockquote>

              {/* Executive Academic Credentials (Clean, Unified Stone & Brand Accents) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-stone-300 transition-colors flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#153B27]/10 text-[#153B27] shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-stone-900">D.Sc &amp; Post-Doc</span>
                    <span className="text-[11px] text-stone-600">Meritorious Professor</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-stone-300 transition-colors flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#7F1D1D]/10 text-[#7F1D1D] shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-stone-900">200+ Papers</span>
                    <span className="text-[11px] text-stone-600">High-Impact Research</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-stone-300 transition-colors flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#B48A3E]/10 text-[#B48A3E] shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-stone-900">PAS Fellow</span>
                    <span className="text-[11px] text-stone-600">Pakistan Academy of Sci.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature, Institutional Title & Quick Links */}
            <div className="pt-6 border-t border-stone-200/90 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-serif italic text-2xl sm:text-[28px] text-[#153B27] font-bold tracking-tight">
                  Prof. Dr. Hassan Sher
                </div>
                <div className="text-xs text-stone-500 font-sans font-medium mt-0.5">
                  Vice Chancellor, University of Swat
                </div>
              </div>

              {/* Quick Action Links */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                <Link
                  href="#locations-mega"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#153B27] text-white hover:bg-[#153B27]/90 transition-colors shadow-xs"
                >
                  <span>Campuses &amp; Locations</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="#about-uni"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors shadow-xs"
                >
                  <span>Statutory Regulations</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
