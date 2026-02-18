import type { Metadata } from 'next';
import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import { CALENDLY_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Personal blueprint readings, stellium alignment, and integrative oracle sessions for clarity and alignment.',
  keywords: ['personal blueprint reading', 'stellium alignment', 'numerology', 'astrology reading']
};

export const metadata: Metadata = {
  title: 'Services',
  description: 'Personal blueprint readings, stellium alignment, and integrative oracle sessions for clarity and alignment.',
  keywords: ['personal blueprint reading', 'stellium alignment', 'numerology', 'astrology reading']
};

interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  description: string;
  cta: string;
  recommended?: boolean;
}

const services: ServiceItem[] = [
  {
    id: 'blueprint',
    title: 'The Operating System',
    subtitle: 'Personal Blueprint Reading',
    price: 65,
    description: 'Understand your core motivations, relational style, gifts, blind spots, and energetic wiring.',
    cta: 'Claim My Reading'
  },
  {
    id: 'stellium',
    title: 'Stellium & Alignment',
    subtitle: 'Divine Concentration',
    price: 65,
    description: 'Where is your divine concentration of power? Find the pressure points of destiny.',
    cta: 'Begin My Alignment'
  },
  {
    id: 'divine',
    title: 'I Am That I Am',
    subtitle: 'The Integrated Synthesis',
    price: 125,
    description: 'Personality + Astrology + Numerology. Meet the version of yourself beneath conditioning.',
    cta: 'Reveal My Divine Self',
    recommended: true
  }
];

const ServicesPage = () => (
  <div className="px-6 py-12 animate-in fade-in duration-700">
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="Personal Blueprint Readings" subtitle="Unlocking the Secrets of Your Soul" />
      <div className="grid lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className={`p-10 flex flex-col items-center text-center border transition-all duration-500 ${
              service.recommended
                ? 'bg-(--panel-strong) border-(--accent) shadow-[0_0_40px_rgba(212,175,55,0.08)]'
                : 'bg-(--panel) border-(--border) hover:border-[#D4AF37]/30'
            }`}
          >
            {service.recommended && (
              <div className="text-[10px] uppercase tracking-[0.3em] text-(--accent) mb-4 font-bold">
                Most Comprehensive
              </div>
            )}
            <h3 className="font-serif text-3xl mb-4">{service.title}</h3>
            <div className="text-(--accent) text-3xl font-serif mb-6">${service.price}</div>
            <p className="text-sm text-(--muted) font-light mb-10 leading-relaxed">{service.description}</p>
            <Link
              className={`mt-auto w-full py-4 uppercase tracking-widest text-[10px] border transition-all text-center ${
                service.recommended
                ? 'bg-(--accent) text-(--accent-contrast) border-(--accent)'
                : 'border-(--accent) text-(--accent) hover:bg-(--accent) hover:text-(--accent-contrast)'
              }`}
              href={CALENDLY_URL}
            >
              {service.cta}
            </Link>
          </div>
        ))}
      </div>

      <section className="mt-20 border-t border-(--border) pt-16">
        <div className="text-center mb-12">
          <p className="text-(--accent) uppercase tracking-[0.3em] text-xs font-medium">Empowering You</p>
          <h2 className="text-4xl md:text-5xl font-serif mt-4">Coach Services</h2>
        </div>

        <div className="space-y-16 text-(--muted) font-light leading-relaxed text-lg">
          <div>
            <div className="text-(--accent) uppercase tracking-[0.3em] text-xs font-medium mb-3">
              Unlocking the Secrets of Your Soul: Personality Typing
            </div>
            <div className="text-3xl font-serif text-(--accent) mb-4">$65</div>
            <p>For over four decades, Scott has studied the architecture of personality, not as a trend, but as a sacred language.</p>
            <p className="mt-4">
              This session reveals the deeper pattern beneath your behaviors. Through personality typing and motivational analysis,
              Scott decodes how you think, what drives you, where you withdraw, and where you shine.
            </p>
            <div className="mt-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-(--muted-strong) mb-3">You Will Discover</div>
              <ul className="space-y-2 text-sm">
                <li>Your cognitive and emotional wiring</li>
                <li>Your core motivational pattern</li>
                <li>Stress and shadow tendencies</li>
                <li>Relationship and communication style</li>
                <li>Natural vocational alignment</li>
              </ul>
            </div>
            <p className="mt-6">Clarity replaces confusion. You begin operating from design, not guesswork.</p>
          </div>

          <div>
            <div className="text-(--accent) uppercase tracking-[0.3em] text-xs font-medium mb-3">
              Unlocking the Divine: Gifts to Serve You in This Incarnation
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-(--muted-strong) mb-3">Stellium &amp; Planetary Alignment Focus</p>
            <div className="text-3xl font-serif text-(--accent) mb-4">$65</div>
            <p>Since 1974, astrology has been a lifelong devotion for Scott, not prediction, but revelation.</p>
            <p className="mt-4">
              This reading focuses on concentrated planetary energy, stelliums, and dominant alignments that define your soul&apos;s
              gifts and service path.
            </p>
            <div className="mt-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-(--muted-strong) mb-3">You Will Receive</div>
              <ul className="space-y-2 text-sm">
                <li>Stellium interpretation (if present)</li>
                <li>Dominant planetary influence analysis</li>
                <li>Element and modality balance</li>
                <li>Core life themes</li>
                <li>Inherent strengths and spiritual gifts</li>
              </ul>
            </div>
            <p className="mt-6">You will see where your energy gathers power and how to consciously direct it.</p>
          </div>

          <div>
            <div className="text-(--accent) uppercase tracking-[0.3em] text-xs font-medium mb-3">
              I Am That I Am: The Divine You
            </div>
            <div className="text-3xl font-serif text-(--accent) mb-4">$125</div>
            <p>This is Scott&apos;s integrative oracle session.</p>
            <p className="mt-4">
              Personality architecture and astrological blueprint are woven together into one cohesive map. Psychological depth meets
              cosmic design.
            </p>
            <div className="mt-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-(--muted-strong) mb-3">You Will Receive</div>
              <ul className="space-y-2 text-sm">
                <li>Personality synthesis</li>
                <li>Astrological blueprint overview</li>
                <li>Core wound and core gift integration</li>
                <li>Incarnation theme clarification</li>
                <li>Practical embodiment guidance</li>
              </ul>
            </div>
            <p className="mt-6">This is not surface insight. It is a return to the eternal &quot;I Am&quot; within you.</p>
          </div>
        </div>

        <p className="mt-12 text-(--accent) font-serif text-2xl text-center">Clarity begins within.</p>
      </section>
    </div>
  </div>
);

export default ServicesPage;
