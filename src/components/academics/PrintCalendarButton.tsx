'use client';

import React from 'react';
import { Download } from 'lucide-react';

/** Triggers a clean, print-formatted calendar view (window.print). */
export default function PrintCalendarButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#153B27] text-white hover:bg-[#0F291B] text-xs font-bold uppercase tracking-[0.12em] transition-all active:scale-[0.985] shadow-[0_12px_24px_-14px_rgba(21,59,39,0.6)]"
    >
      <Download className="w-4 h-4 text-[#C8A96E]" />
      <span>Download Calendar PDF</span>
    </button>
  );
}
