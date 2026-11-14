import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Share2, Tag, User, Building } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { officialNewsArticles } from '@/data/newsData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return officialNewsArticles.map((art) => ({
    slug: art.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = officialNewsArticles.find((a) => a.id === slug);
  if (!article) return { title: 'News Not Found | University of Swat' };
  return {
    title: `${article.title} | University of Swat`,
    description: article.summary,
  };
}

export default async function NewsArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = officialNewsArticles.find((a) => a.id === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag={article.category}
        title={article.title}
        subtitle={article.summary}
        eyebrow="Media Cell &amp; Public Relations"
      />

      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        
        {/* Back link */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-[#153B27] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All News</span>
          </Link>

          <span className="text-xs font-mono text-stone-400">
            Published: {article.date}
          </span>
        </div>

        {/* Article Container */}
        <article className="p-8 sm:p-14 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-10">
          
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-stone-100 gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#153B27] font-semibold border border-emerald-200">
                {article.category}
              </span>
              <span className="text-stone-500">
                Authorized by: <strong className="text-stone-800">{article.author}</strong>
              </span>
            </div>
            <span className="text-stone-400 font-mono">
              University of Swat Press Release
            </span>
          </div>

          {/* Lead Image */}
          <div className="relative w-full aspect-16/9 sm:aspect-21/9 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Paragraphs */}
          <div className="font-sans text-stone-700 text-base sm:text-lg leading-relaxed space-y-6 pt-4">
            {article.content.map((p, idx) => (
              <p key={idx} className={idx === 0 ? "font-serif text-xl sm:text-2xl text-stone-900 leading-snug" : ""}>
                {p}
              </p>
            ))}
          </div>

          {/* Signoff & Share */}
          <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-stone-500">
              <strong className="block text-stone-800 font-semibold mb-0.5">University of Swat Media Cell</strong>
              Public Relations Office, Charbagh Main Campus, Swat, KP
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/news"
                className="px-5 py-2.5 rounded-xl bg-stone-100 text-stone-700 text-xs font-semibold hover:bg-stone-200 transition-colors"
              >
                More Announcements
              </Link>
            </div>
          </div>

        </article>

      </div>
    </div>
  );
}
