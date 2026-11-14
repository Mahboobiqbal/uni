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
      className="py-18 sm:py-24 bg-gradient-to-b from-[#F9FAFB] via-white to-[#F9FAFB] relative overflow-hidden"
      data-purpose="vice-chancellor-section"
      id="vice-chancellor"
    >
      {/* Top Ambient Green Glow Spillover from Bento Section */}
      <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_75%_120px_at_50%_0%,rgba(52,211,153,0.18),rgba(47,62,41,0.08),transparent_75%)] blur-2xl pointer-events-none" />

      {/* Subtle Background Accent Lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#1D3523]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#731C1C]/5 blur-3xl pointer-events-none" />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#111827] text-white text-xs px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 border border-white/10 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="w-full max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: React Bits <ProfileCard /> with 3D Tilt & Holographic Foil */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Subtle Ambient Glow behind card */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#1D3523]/20 via-[#731C1C]/15 to-amber-500/10 blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <ProfileCard
                avatarUrl="/vc-portrait.jpg"
                iconUrl="/pattern-crest.svg"
                miniAvatarUrl="/uos-logo-circle.png"
                name="Prof. Dr. Hassan Sher"
                title="Vice Chancellor · University of Swat"
                handle="vc_uoswat"
                status="Office of the VC"
                statusColor="#22c55e"
                contactText="Email VC"
                showUserInfo={true}
                theme="light"
                backdropColor="#1D3523"
                radius={20}
                holo={0.85}
                glare={0.65}
                tiltStrength={14}
                parallax={10}
                enableTilt={true}
                intro={true}
                onContactClick={handleContactClick}
                className="mx-auto"
              />
            </div>

            {/* Sub-card Official Status Tag */}
            <div className="mt-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs text-slate-600 font-medium shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Office of the Vice Chancellor · Charbagh Campus</span>
            </div>
          </div>

          {/* Right: Leadership Message & Discourse */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Section Tag */}
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="h-0.5 w-7 bg-[#731C1C]" />
                <span className="text-xs sm:text-[12.5px] uppercase tracking-wider text-[#731C1C] font-bold">
                  Leadership Discourse
                </span>
              </div>

              {/* Section Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#111827] font-bold tracking-[-0.025em] leading-[1.14] mb-5">
                Voice of the Vice Chancellor
              </h2>

              {/* Subtitle / Creed */}
              <p className="font-sans text-emerald-900 font-semibold text-sm sm:text-base mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                Cultivating analytical inquiry, regional stewardship &amp; transformative education.
              </p>

              {/* Message Body with Editorial Styling */}
              <div className="space-y-4 text-slate-700 text-[15px] sm:text-base lg:text-[16.5px] leading-[1.74] font-normal">
                <p>
                  &ldquo;Welcome to the University of Swat, an academy steeped in historical veneration
                  and energized by modern academic zeal. Our institutional ambition is not merely granting
                  diplomas, but cultivating analytical thinkers who illuminate solutions for climate resilience,
                  biodiversity conservation, digital technologies, and societal harmony.&rdquo;
                </p>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-[1.72]">
                  &ldquo;With our sprawling Charbagh main campus, state-of-the-art research laboratories,
                  and collaborative linkages across the globe, we are positioned to offer student generations
                  an empowering space where intellect transforms into human service and sustainable progress.&rdquo;
                </p>
              </div>

              {/* Key Executive Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-7 pt-6 border-t border-slate-200/90">
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/70 flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-emerald-950">D.Sc &amp; Post-Doc</span>
                    <span className="text-[11px] text-emerald-800/80 leading-tight">Meritorious Academic</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200/70 flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-indigo-950">200+ Publications</span>
                    <span className="text-[11px] text-indigo-800/80 leading-tight">High-Impact Research</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/70 flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-amber-950">PAS Fellow</span>
                    <span className="text-[11px] text-amber-800/80 leading-tight">Pakistan Academy of Sciences</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature, Institutional Title & Quick Links */}
            <div className="pt-6 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-serif italic text-2xl sm:text-[26px] text-[#1D3523] font-bold tracking-tight">
                  Prof. Dr. Hassan Sher
                </div>
                <div className="text-xs text-slate-500 font-sans font-medium mt-0.5">
                  Vice Chancellor, University of Swat
                </div>
              </div>

              {/* Quick Action Links */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                <Link
                  href="#locations-mega"
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-[#1D3523]/10 text-[#1D3523] hover:bg-[#1D3523]/15 transition-colors"
                >
                  <span>Campuses &amp; Locations</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="#about-uni"
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
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
