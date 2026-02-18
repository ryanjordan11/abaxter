import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import { ChevronRight } from 'lucide-react';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import LeadMagnetForm from '@/components/LeadMagnetForm';

export const metadata: Metadata = {
  title: 'LifePath Coaching',
  description: 'Soul-deep clarity through numerology, astrology, and personality alignment. Online readings and compatibility insight.',
  keywords: [
    'life path coaching',
    'numerology reading',
    'astrology reading',
    'relationship compatibility',
    'personality typing'
  ]
};

const HomePage = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 font-serif leading-tight">
        You Don&apos;t Have Relationship Problems.<br />
        <span className="text-(--accent) italic">You Have Clarity Problems.</span>
      </h1>
      <p className="max-w-2xl text-lg md:text-xl font-light leading-relaxed text-(--muted) mb-10">
        When you understand your soul blueprint, love becomes aligned. Career becomes intentional. Communication becomes effortless.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <Link
          href="/services"
          className="border border-(--accent) text-(--accent) px-8 py-3 uppercase tracking-widest text-[11px] hover:bg-(--accent) hover:text-(--accent-contrast) transition-all"
        >
          Discover Your Blueprint
        </Link>
        <Link
          href="/relationships"
          className="border border-(--accent) text-(--accent) px-8 py-3 uppercase tracking-widest text-[11px] hover:bg-(--accent) hover:text-(--accent-contrast) transition-all"
        >
          Find Your Soul Match
        </Link>
      </div>
      <div className="mt-20 text-[10px] uppercase tracking-[0.4em] text-(--muted-strong) font-light italic flex items-center gap-4">
        <div className="w-12 h-px bg-(--border)"></div>
        Deciphering destiny since 1974
        <div className="w-12 h-px bg-(--border)"></div>
      </div>
    </section>

    <section className="py-24 bg-(--panel) border-y border-(--border) px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif mb-6">The Cycle Ends Here.</h2>
          <p className="text-(--muted) font-light mb-6">You&apos;ve done the therapy. You&apos;ve read the books. You&apos;ve tried to &ldquo;manifest.&rdquo; Yet you still ask why you attract the same patterns.</p>
          <p className="text-(--accent) font-serif text-2xl mb-8">Because you&apos;re guessing.</p>
          <Link href="/contact" className="flex items-center gap-3 text-(--accent) uppercase tracking-widest text-xs hover:gap-5 transition-all">
            Request Guidance <ChevronRight size={14} />
          </Link>
        </div>
        <div className="space-y-8">
          {[
            { label: 'Architecture', desc: 'Personality architecture and decoded astrological design.' },
            { label: 'Legacy', desc: 'Karmic patterns and multi-system compatibility measurement.' },
            { label: 'Precision', desc: 'Structured soul analysis beyond vague spirituality.' }
          ].map((item) => (
            <div key={item.label} className="group">
              <h4 className="text-[10px] uppercase tracking-widest text-(--accent) mb-1 opacity-60 group-hover:opacity-100 transition-opacity">{item.label}</h4>
              <p className="text-sm font-light text-(--muted)">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="The Oracle&apos;s Path" subtitle="Five Decades of Devotion" />
        <div className="space-y-6 text-(--muted) font-light leading-relaxed text-lg">
          <p>This is not a hobby. This is five decades of devotion. Astrology studied since 1974. Personality systems practiced for nearly 40 years.</p>
          <p>Scott Baxter&apos;s work exists for one reason: To help you see yourself clearly enough that your outer world reorganizes around truth.</p>
          <p>We are not here to predict your future. We are here to reveal your design.</p>
        </div>
      </div>
    </section>

    <HowItWorks />
    <Testimonials />
    <LeadMagnetForm />
    <FAQ />
  </div>
);

export default HomePage;
