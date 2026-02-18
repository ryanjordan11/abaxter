import type { Metadata } from 'next';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CALENDLY_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Relationships',
  description: 'Structured compatibility analysis integrating astrology, numerology, and personality systems.',
  keywords: ['compatibility reading', 'synastry analysis', 'relationship alignment', 'soul mate connections']
};

export const metadata: Metadata = {
  title: 'Relationships',
  description: 'Structured compatibility analysis integrating astrology, numerology, and personality systems.',
  keywords: ['compatibility reading', 'synastry analysis', 'relationship alignment', 'soul mate connections']
};

const RelationshipsPage = () => (
  <div className="px-6 py-12 animate-in fade-in duration-700">
    <div className="max-w-5xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-serif mb-4">Soul Mate Connections</h1>
        <p className="text-(--accent) uppercase tracking-[0.3em] text-xs mb-4">Full Synastry &amp; Soul Synthesis for Conscious Partnership</p>
        <div className="text-4xl md:text-5xl font-serif text-(--accent)">$299</div>
      </section>

      <div className="bg-(--panel) border border-(--border) p-8 md:p-14">
        <div className="space-y-6 text-(--muted) font-light leading-relaxed text-lg">
          <p>Not fate. Not fantasy. Clarity.</p>
          <p>
            This is a structured, in-depth compatibility analysis integrating astrology, numerology, and personality systems to reveal
            how two individuals align, activate, and challenge each other.
          </p>
          <p>
            It is designed for couples seeking deeper understanding or individuals who want to recognize true resonance before committing.
          </p>
        </div>
      </div>

      <section className="mt-16 space-y-12 text-(--muted) font-light leading-relaxed text-lg">
        <div>
          <h2 className="text-3xl font-serif text-(--accent) mb-4">What You Receive</h2>
          <p>A fully personalized 30–40 page PDF including:</p>

          <div className="mt-6 space-y-8 text-sm">
            <div>
              <p className="text-(--app-fg) font-medium">Individual Soul Blueprints (Both Partners)</p>
              <ul className="space-y-1 mt-3">
                <li>Core personality archetype and relational style</li>
                <li>Dominant planetary themes and life focus</li>
                <li>Life Path and numerological essence</li>
                <li>Emotional needs and attachment patterns</li>
                <li>Shadow triggers and growth edges</li>
              </ul>
            </div>

            <div>
              <p className="text-(--app-fg) font-medium">Synastry &amp; Relational Dynamics</p>
              <ul className="space-y-1 mt-3">
                <li>Key planetary inter-aspects affecting chemistry, communication, and polarity</li>
                <li>House overlays showing life-area activation</li>
                <li>Nodal connections highlighting karmic growth themes</li>
                <li>Composite relationship energy overview</li>
              </ul>
            </div>

            <div>
              <p className="text-(--app-fg) font-medium">Integration &amp; Practical Guidance</p>
              <ul className="space-y-1 mt-3">
                <li>Where harmony flows naturally</li>
                <li>Where friction becomes growth</li>
                <li>Communication alignment strategy</li>
                <li>Intimacy and polarity dynamics</li>
                <li>Evolutionary potential of the bond</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-serif text-(--accent) mb-4">Who This Is For</h2>
          <ul className="space-y-2 text-sm">
            <li>Committed partners refining their union</li>
            <li>New couples assessing long-term compatibility</li>
            <li>Singles preparing to recognize aligned partnership</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-serif text-(--accent) mb-4">What This Is Not</h2>
          <p>This is not a prediction of destiny. It does not guarantee outcomes. It is a clarity framework for conscious decision-making and relational growth.</p>
        </div>

        <p className="text-center text-(--accent) font-serif text-2xl">
          Sacred mirror. Structured insight. Conscious partnership.
        </p>
      </section>

      <div className="mt-14 text-center">
        <Link
          className="bg-transparent border border-(--accent) text-(--accent) px-12 py-4 uppercase tracking-widest text-[11px] hover:bg-(--accent) hover:text-(--accent-contrast) transition-all inline-block"
          href={CALENDLY_URL}
        >
          Book Compatibility Reading
        </Link>
      </div>
    </div>
  </div>
);

export default RelationshipsPage;
