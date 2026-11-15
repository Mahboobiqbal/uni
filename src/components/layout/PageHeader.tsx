import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  subtitle?: string;
  tag?: string;
  backHref?: string;
  backLabel?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  subtitle,
  tag,
  backHref = '/',
  backLabel,
  breadcrumbs,
  children,
}: PageHeaderProps) {
  const displayDescription = description || subtitle;
  const displayEyebrow = tag || eyebrow;

  // Build breadcrumb items if not explicitly passed
  const crumbs: BreadcrumbItem[] = breadcrumbs || [
    { label: 'Home', href: '/' },
    ...(backLabel && backHref !== '/' ? [{ label: backLabel, href: backHref }] : []),
    { label: title },
  ];

  return (
    <div className="relative overflow-hidden bg-[#153B27] text-white border-b border-[#0C1912]/40 pt-32 sm:pt-40 pb-16 sm:pb-20">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#C8A96E]/12 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-[#0C1912]/50 blur-3xl pointer-events-none" />

      {/* Decorative Crest Watermark */}
      <div className="absolute right-6 -bottom-10 w-72 h-72 opacity-[0.04] pointer-events-none hidden lg:block">
        <img src="/uos-logo-circle.png" alt="" className="w-full h-full object-contain invert" />
      </div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Clean Integrated Breadcrumb Trail (inside container, below navbar) */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-medium text-stone-300 flex-wrap">
            {crumbs.map((crumb, idx) => {
              const isLast = idx === crumbs.length - 1;
              return (
                <React.Fragment key={idx}>
                  {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />}
                  <li>
                    {isLast || !crumb.href ? (
                      <span className="text-amber-300 font-semibold" aria-current="page">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="hover:text-white transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                </React.Fragment>
              );
            })}
          </ol>
        </nav>

        {/* Section Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="h-0.5 w-7 bg-[#C8A96E]" />
              <span className="text-xs uppercase tracking-widest text-[#C8A96E] font-bold">
                {displayEyebrow}
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight leading-[1.12]">
              {title}
            </h1>
          </div>

          {displayDescription && (
            <p className="font-sans text-sm sm:text-base text-stone-200 max-w-lg lg:text-right leading-relaxed">
              {displayDescription}
            </p>
          )}
        </div>

        {children && <div className="mt-8 sm:mt-10">{children}</div>}
      </div>
    </div>
  );
}
