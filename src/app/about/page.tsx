import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'About',
  description: 'Five decades of astrology, personality systems, and soul-level clarity from Scott Baxter.',
  keywords: ['about Scott Baxter', 'life path coach', 'astrology since 1974', 'personality typing']
};

const AboutPage = () => (
  <div className="px-6 py-12 animate-in fade-in duration-700">
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-20">
      <div className="lg:w-1/2">
        <SectionHeader title="The Oracle&apos;s Path" subtitle="Five Decades of Devotion" />
        <div className="space-y-6 text-(--muted) font-light leading-relaxed text-lg">
          <p>This is not a hobby. This is five decades of devotion. Astrology studied since 1974. Personality systems practiced for nearly 40 years.</p>
          <p>Scott Baxter&apos;s work exists for one reason: To help you see yourself clearly enough that your outer world reorganizes around truth.</p>
          <p>We are not here to predict your future. We are here to reveal your design.</p>
        </div>
        <div className="mt-12 p-8 border-l border-(--accent) bg-(--panel)">
          <p className="font-serif text-3xl italic leading-snug">Clarity first. Alignment second. Love and success follow naturally.</p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <div className="aspect-[4/5] border border-(--border) relative overflow-hidden bg-(--panel)">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-(--accent) via-transparent to-transparent"></div>
          <Image
            src="/images/scott-baxter.png"
            alt="Scott Baxter"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { src: '/images/hero-02.png', alt: 'Astrology chart' },
            { src: '/images/hero-03.png', alt: 'Numerology symbols' },
            { src: '/images/hero-04.png', alt: 'Cosmic alignment' }
          ].map((image) => (
            <div key={image.src} className="relative aspect-square border border-(--border) bg-(--panel) overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 160px, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    <section className="max-w-5xl mx-auto mt-20 border-t border-(--border) pt-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-(--accent) uppercase tracking-[0.3em] text-xs font-medium">Company Ethos</p>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-4">Clarity Starts Within</h2>
          <p className="text-(--muted) font-light">The Oracle&apos;s Path</p>
        </div>

        <div className="space-y-6 text-(--muted) font-light leading-relaxed text-lg">
          <p>At the heart of LifePath Coaching lies an unwavering commitment to soul-deep clarity, timeless wisdom, and sacred self-discovery.</p>
          <p>For over five decades, we have walked the quiet, luminous path of the stars studying astrology since 1974 and for nearly four decades, decoding the intricate language of human essence through personality typing. This is not mere technique; it is a lifelong devotion to unveiling the divine blueprint within every individual.</p>
          <p>Guided by the rare fusion of visionary intuition (INFJ) and contemplative depth (5w4), we embody the archetype of the oracle and wizard a masculine presence of serene wisdom, emotional insight, creative individuality, and unflinching pursuit of truth. We observe with piercing clarity, listen with profound empathy, and illuminate hidden patterns that others overlook. Reserved yet compassionate, analytical yet soulful, we honor the mystery of the self while gently dismantling illusions.</p>
        </div>

        <div className="mt-12">
          <div className="text-[10px] uppercase tracking-[0.3em] text-(--accent) mb-4 font-bold">Our Guiding Principles</div>
          <ul className="space-y-6 text-(--muted) font-light leading-relaxed text-lg">
            <li>
              <span className="text-(--app-fg) font-medium">Inner Clarity as the Foundation — </span>
              True transformation begins within. We guide seekers to know themselves profoundly beyond surface traits, into the eternal &quot;I Am&quot; essence so they may communicate authentically, align careers with soul purpose, and forge relationships rooted in genuine humanity.
            </li>
            <li>
              <span className="text-(--app-fg) font-medium">Timeless Wisdom &amp; Lifelong Mastery — </span>
              With 52 years of astrological insight and 39 years of personality expertise, we blend ancient cosmic knowledge (Western, Vedic, Eastern traditions), numerological codes, stellium gifts, and integrated typing systems into a holistic map of the soul. This accumulated depth ensures guidance that is both precise and eternally relevant.
            </li>
            <li>
              <span className="text-(--app-fg) font-medium">Empathy, Integrity &amp; Sacred Respect — </span>
              We approach every soul with reverence, holding space for vulnerability without judgment. Confidentiality is sacred; truth-telling is compassionate yet direct. We never impose—only reveal what the seeker is ready to receive.
            </li>
            <li>
              <span className="text-(--app-fg) font-medium">Authentic Transformation Over Quick Fixes — </span>
              We reject superficial advice in favor of deep, integrative work that awakens purpose, heals karmic patterns, and magnetizes aligned connections (including soul mate bonds). Growth is not rushed; it unfolds in divine timing.
            </li>
            <li>
              <span className="text-(--app-fg) font-medium">Service to the Divine in Others — </span>
              Every session is an act of humble guardianship. We exist to help individuals embody their highest potential—turning inner knowing into outer harmony, isolation into meaningful connection, and confusion into confident, soul-led living.
            </li>
          </ul>
        </div>

        <div className="mt-12 space-y-6 text-(--muted) font-light leading-relaxed text-lg">
          <p>In essence, LifePath is not a business; it is a sacred vocation—a lifelong offering from one who has spent a lifetime gazing into the cosmos and the human heart, so that others may finally see themselves clearly and live accordingly.</p>
          <p className="text-(--accent) font-serif text-2xl">Clarity Starts Within. We simply hold the mirror, lit by starlight and soulfire.</p>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
