import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  subtitle?: string;
  tag?: string;
  backHref?: string;
  backLabel?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  subtitle,
  tag,
  backHref = '/',
  backLabel = 'Home',
}: PageHeaderProps) {
  const displayDescription = description || subtitle;
  const displayEyebrow = tag || eyebrow;
  return (
    <div className="relative overflow-hidden bg-[#F6F5F0] border-b border-stone-200/80">
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#C8A96E]/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-[#153B27]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-14 lg:py-20 relative z-10">
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-[#153B27] transition-colors mb-5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {backLabel}
        </Link>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-0.5 w-7 bg-[#7F1D1D]" />
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                {displayEyebrow}
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] text-[#14291D] font-bold tracking-[-0.025em] leading-[1.08]">
              {title}
            </h1>
          </div>
          {displayDescription && (
            <p className="font-sans text-sm sm:text-base text-stone-500 max-w-md lg:text-right leading-[1.68]">
              {displayDescription}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
