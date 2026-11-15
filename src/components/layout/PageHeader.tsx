import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  /** Optional full-bleed photographic background — layered under the Deep Forest Green glow overlay. */
  backgroundImage?: string;
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
  image,
  backgroundImage,
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
    <div className="relative overflow-hidden bg-[#153B27] text-white border-b border-[#0C1912]/40 pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20">
      {/* Full-bleed photographic background + Deep Forest Green glow overlay */}
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0F291B]/95 via-[#153B27]/88 to-[#153B27]/75"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(12,25,18,0)_0%,rgba(12,25,18,0.55)_100%)]"
          />
        </>
      )}

      {/* Subtle atmospheric ambient glow */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#C8A96E]/12 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-[#0C1912]/50 blur-3xl pointer-events-none" />

      {/* Decorative Crest Watermark */}
      <div className="absolute right-6 -bottom-10 w-72 h-72 opacity-[0.04] pointer-events-none hidden lg:block">
        <img src="/uos-logo-circle.png" alt="" className="w-full h-full object-contain invert" />
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        {/* Clean Integrated Breadcrumb Trail (inside container, below navbar) */}
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
          <ol className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-white/70 flex-wrap">
            {crumbs.map((crumb, idx) => {
              const isLast = idx === crumbs.length - 1;
              return (
                <React.Fragment key={idx}>
                  {idx > 0 && <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/45 shrink-0" />}
                  <li className="min-w-0">
                    {isLast || !crumb.href ? (
                      <span className="text-amber-300 font-semibold truncate max-w-[200px] sm:max-w-none inline-block align-bottom" aria-current="page">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="hover:text-white transition-colors truncate max-w-[140px] sm:max-w-none inline-block align-bottom"
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
        <div
          className={
            image
              ? 'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center'
              : 'flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6'
          }
        >
          <div className={image ? 'lg:col-span-8' : undefined}>
            <div className="flex items-center gap-2 sm:gap-2.5 mb-2.5 sm:mb-3.5">
              <span className="h-0.5 w-5 sm:w-7 bg-[#C8A96E]" />
              <span className="text-[10.5px] sm:text-xs uppercase tracking-widest text-[#C8A96E] font-bold">
                {displayEyebrow}
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight leading-[1.15] sm:leading-[1.12]">
              {title}
            </h1>

            {displayDescription && image && (
              <p className="mt-4 sm:mt-5 font-sans text-sm sm:text-base text-stone-200 max-w-xl leading-relaxed">
                {displayDescription}
              </p>
            )}
          </div>

          {!image && displayDescription && (
            <p className="font-sans text-sm sm:text-base text-stone-200 max-w-lg lg:text-right leading-relaxed">
              {displayDescription}
            </p>
          )}

          {image && (
            <figure className="lg:col-span-4">
              <div className="relative w-full h-56 sm:h-72 lg:h-auto lg:aspect-[3/2] overflow-hidden rounded-lg border border-white/15 bg-[#0C1912]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0C1912]/45 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
              {image.caption && (
                <figcaption className="mt-3 text-[10px] uppercase tracking-[0.16em] text-white/55 font-semibold">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          )}
        </div>

        {children && <div className="mt-8 sm:mt-10">{children}</div>}
      </div>
    </div>
  );
}
