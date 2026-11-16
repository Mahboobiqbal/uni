'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export default function AdmissionsInquiryFunnel() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    degreeLevel: 'undergraduate',
    department: 'computing',
    applicantType: 'student',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="admissions-inquiry"
      data-purpose="admissions-inquiry-funnel"
      className="py-20 sm:py-28 bg-[#F6F5F0] relative overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-stone-300">

          {/* Left Column: University Crimson Authority & Contacts (5 cols) */}
          <div className="lg:col-span-5 bg-[#7F1D1D] text-white p-5 sm:p-10 lg:p-14 flex flex-col justify-between relative">
            {/* Watermark Crest */}
            <div className="absolute -bottom-16 -right-16 w-80 h-80 opacity-5 pointer-events-none">
              <img src="/uos-logo-circle.png" alt="" className="w-full h-full object-contain" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-0.5 w-6 bg-[#E5CD9B]" />
                <span className="text-xs uppercase tracking-widest text-[#E5CD9B] font-bold">
                  Directorate of Admissions
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.18]">
                Start your application today
              </h2>

              <p className="font-sans text-white/80 text-sm sm:text-base leading-relaxed">
                Admissions for Fall 2026 are officially open. Explore our 28 departments,
                review eligibility criteria, or reach out directly to our admissions counselors for personalized guidance.
              </p>

              {/* Contact Information */}
              <div className="space-y-4 pt-4 border-t border-white/20 text-xs sm:text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#E5CD9B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Telephone Helplines</p>
                    <p className="text-white/75">+92 (946) 920800 / 920815</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#E5CD9B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Admissions Secretariat</p>
                    <p className="text-white/75">admissions@uswat.edu.pk</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#E5CD9B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">In-Person Help Desk</p>
                    <p className="text-white/75">Admin Block, Charbagh Main Campus, Swat</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#E5CD9B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Office Hours</p>
                    <p className="text-white/75">Mon – Fri: 08:30 AM – 04:30 PM PKT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prospectus Download Card */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/20">
              <Link
                href="/admissions/fee-structure"
                className="group flex items-center justify-between p-4 rounded-xl bg-white/10 hover:bg-white/15 hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px border border-white/20 backdrop-blur-md transition-all duration-150"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#E5CD9B]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="font-semibold text-xs text-white">Download Prospectus 2026</p>
                    <p className="text-[11px] text-white/75">PDF Guide · Fee Schedules &amp; Quotas</p>
                  </div>
                </div>
                <Download className="w-4 h-4 text-[#E5CD9B] shrink-0 group-hover:translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Lead Capture Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-10 lg:p-14 flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#14291D]">
                  Inquiry Registered Successfully
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in the University of Swat. Our Directorate of Admissions
                  counselor has received your request and will reach out via email/phone within 24 hours.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-lg border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                  >
                    Submit Another Inquiry
                  </button>
                  <Link
                    href="/admissions"
                    className="px-5 py-2.5 rounded-lg bg-[#153B27] text-xs font-semibold text-white hover:bg-[#0F291C]"
                  >
                    Go to Admissions Hub
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7F1D1D] bg-[#7F1D1D]/10 px-2.5 py-1 rounded-full">
                    Fast Application &amp; Information Request
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] mt-3">
                    Request Admission Guidance
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Fill in your details below to receive official department prospectus, syllabus, and merit guidance.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        First Name <span className="text-[#7F1D1D]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="e.g. Asim"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-[16px] sm:text-xs text-[#14291D] placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#153B27] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Last Name <span className="text-[#7F1D1D]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="e.g. Khan"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-[16px] sm:text-xs text-[#14291D] placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#153B27] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Email Address <span className="text-[#7F1D1D]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="applicant@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-[16px] sm:text-xs text-[#14291D] placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#153B27] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        WhatsApp / Contact Mobile <span className="text-[#7F1D1D]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 1234567"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-[16px] sm:text-xs text-[#14291D] placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#153B27] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Program Level & Academic Faculty */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Desired Degree Level
                      </label>
                      <select
                        aria-label="Desired Degree Level"
                        value={formData.degreeLevel}
                        onChange={(e) => setFormData({ ...formData, degreeLevel: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-[16px] sm:text-xs text-[#14291D] bg-white focus:outline-none focus:ring-2 focus:ring-[#153B27] focus:border-transparent transition-all"
                      >
                        <option value="undergraduate">Undergraduate (4-Year BS / BBA / LLB)</option>
                        <option value="graduate">Graduate (MS / MPhil)</option>
                        <option value="doctorate">Doctorate (PhD)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Academic Faculty / Field
                      </label>
                      <select
                        aria-label="Academic Faculty / Field"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-[16px] sm:text-xs text-[#14291D] bg-white focus:outline-none focus:ring-2 focus:ring-[#153B27] focus:border-transparent transition-all"
                      >
                        <option value="computing">Computing &amp; IT (Computer Science, SE)</option>
                        <option value="sciences">Sciences (Chemistry, Environmental, Zoology)</option>
                        <option value="management">Management Sciences (BBA, Tourism)</option>
                        <option value="law">Law &amp; Legal Studies (LLB 5-Year)</option>
                        <option value="humanities">Humanities &amp; Social Sciences</option>
                      </select>
                    </div>
                  </div>

                  {/* Inquirer Type */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      I am an:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { id: 'student', label: 'Prospective Student' },
                        { id: 'parent', label: 'Parent / Guardian' },
                        { id: 'transfer', label: 'Transfer Applicant' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, applicantType: t.id })}
                          className={`py-2 px-2 text-center rounded-lg text-xs font-medium border flex items-center justify-center min-h-[44px] active:scale-[0.985] active:translate-y-px transition-all duration-150 ${formData.applicantType === t.id
                            ? 'bg-[#153B27] text-white border-[#153B27]'
                            : 'bg-stone-50 text-stone-600 border-stone-300 hover:bg-stone-100'
                            }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#7F1D1D] hover:bg-[#681818] hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px text-white text-sm font-semibold shadow-md transition-all duration-150 group disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Registering Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Admission Inquiry</span>
                          <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-stone-600 text-center flex items-center justify-center gap-1.5 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your information is confidential and used solely for official admissions communication.</span>
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
