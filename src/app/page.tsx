import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import { ChevronRight } from 'lucide-react';

const HomePage = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 font-serif leading-tight">
        You Don’t Have Relationship Problems.<br />
        <span className="text-[#D4AF37] italic">You Have Clarity Problems.</span>
      </h1>
      <p className="max-w-2xl text-lg md:text-xl font-light leading-relaxed text-gray-400 mb-10">
        When you understand your soul blueprint, love becomes aligned. Career becomes intentional. Communication becomes effortless.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <Link
          href="/services"
          className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 uppercase tracking-widest text-[11px] hover:bg-[#D4AF37] hover:text-[#05070A] transition-all"
        >
          Discover Your Blueprint
        </Link>
        <Link
          href="/relationships"
          className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 uppercase tracking-widest text-[11px] hover:bg-[#D4AF37] hover:text-[#05070A] transition-all"
        >
          Find Your Soul Match
        </Link>
      </div>
      <div className="mt-20 text-[10px] uppercase tracking-[0.4em] text-gray-500 font-light italic flex items-center gap-4">
        <div className="w-12 h-[1px] bg-gray-800"></div>
        Deciphering destiny since 1974
        <div className="w-12 h-[1px] bg-gray-800"></div>
      </div>
    </section>

    <section className="py-24 bg-white/[0.02] border-y border-white/5 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif mb-6">The Cycle Ends Here.</h2>
          <p className="text-gray-400 font-light mb-6">You’ve done the therapy. You’ve read the books. You’ve tried to “manifest.” Yet you still ask why you attract the same patterns.</p>
          <p className="text-[#D4AF37] font-serif text-2xl mb-8">Because you’re guessing.</p>
          <Link href="/contact" className="flex items-center gap-3 text-[#D4AF37] uppercase tracking-widest text-xs hover:gap-5 transition-all">
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
              <h4 className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-1 opacity-60 group-hover:opacity-100 transition-opacity">{item.label}</h4>
              <p className="text-sm font-light text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="The Oracle’s Path" subtitle="Five Decades of Devotion" />
        <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
          <p>This is not a hobby. This is five decades of devotion. Astrology studied since 1974. Personality systems practiced for nearly 40 years.</p>
          <p>Scott Baxter's work exists for one reason: To help you see yourself clearly enough that your outer world reorganizes around truth.</p>
          <p>We are not here to predict your future. We are here to reveal your design.</p>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
