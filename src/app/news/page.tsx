import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Calendar, User, Tag, Sparkles } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { officialNewsArticles } from '@/data/newsData';

export const metadata: Metadata = {
  title: 'Official News & Press Releases | University of Swat',
  description: 'Latest institutional announcements, research breakthroughs, academic milestones, and press releases from the University of Swat.',
};

export default function NewsPage() {
  const featured = officialNewsArticles.filter((n) => n.featured);
  const remaining = officialNewsArticles.filter((n) => !n.featured);

  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Media Cell &amp; Public Relations"
        title="University News &amp; Press Releases"
        subtitle="Stay informed with authentic updates on academic achievements, international research partnerships, campus development, and administrative milestones."
        eyebrow="Newsroom · University of Swat"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20 space-y-16">
        
        {/* Featured News Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-6 bg-[#7F1D1D]" />
            <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
              Featured Headlines
            </span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-8">
            Top Institutional Stories
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featured.map((article) => (
              <article
                key={article.id}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between group hover:border-[#153B27]/40 hover:shadow-md transition-all"
              >
                <div>
                  <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden mb-6 bg-stone-100 border border-stone-200">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center gap-3 text-xs text-stone-500 font-sans mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#153B27] font-semibold border border-emerald-200">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      {article.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-[#153B27] transition-colors mb-3 leading-snug">
                    <Link href={`/news/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-400 font-medium">
                    By {article.author}
                  </span>
                  <Link
                    href={`/news/${article.id}`}
                    className="font-semibold text-xs text-[#153B27] hover:underline flex items-center gap-1"
                  >
                    <span>Read Full Story</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Recent News Grid */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-6 bg-[#153B27]" />
            <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
              Press Archive
            </span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-8">
            More News &amp; Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remaining.map((article) => (
              <article
                key={article.id}
                className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between group hover:border-[#7F1D1D]/40 hover:shadow-md transition-all"
              >
                <div>
                  <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden mb-4 bg-stone-100 border border-stone-200">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-stone-500 font-sans mb-2.5">
                    <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-semibold border border-stone-200 text-[10px]">
                      {article.category}
                    </span>
                    <span className="text-[11px] font-mono text-stone-400">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#7F1D1D] transition-colors mb-2.5 leading-snug">
                    <Link href={`/news/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="font-sans text-xs text-stone-600 leading-relaxed mb-4 line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-400 text-[11px]">
                    {article.author}
                  </span>
                  <Link
                    href={`/news/${article.id}`}
                    className="font-semibold text-[#7F1D1D] hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
