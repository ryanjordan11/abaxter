import Link from 'next/link';
import { CALENDLY_URL } from '@/lib/links';

const RelationshipsPage = () => (
  <div className="px-6 py-12 animate-in fade-in duration-700">
    <div className="max-w-4xl mx-auto">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-serif mb-6">Stop Wondering If They’re “The One.”</h1>
        <p className="text-3xl font-serif italic text-[var(--accent)]">Know.</p>
      </section>

      <div className="bg-[var(--panel)] border border-[var(--border)] p-8 md:p-16">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div>
            <h2 className="font-serif text-4xl mb-2">Soul Mate Connections</h2>
            <p className="text-[var(--muted-strong)] uppercase tracking-widest text-[10px]">Full Synastry & Soul Synthesis</p>
          </div>
          <div className="text-[var(--accent)] text-5xl font-serif mt-4 md:mt-0">$299</div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
          {[
            'Individual soul blueprints',
            'Planetary inter-aspects',
            'House overlays (Intimacy/Career)',
            'Composite relationship energy',
            'Karmic & nodal contracts',
            'Growth triggers & shadow mapping',
            'Compatibility scoring',
            'Relational strategy'
          ].map((item) => (
            <div key={item} className="flex items-center text-sm font-light text-[var(--muted)] gap-3">
              <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
              {item}
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--border)] pt-12 text-center">
          <p className="font-serif text-2xl mb-10 italic text-[var(--muted)] max-w-lg mx-auto leading-relaxed">
            Where it flows. Where it friction-tests you. Whether it’s sacred growth or misalignment.
          </p>
          <Link
            className="bg-transparent border border-[var(--accent)] text-[var(--accent)] px-12 py-4 uppercase tracking-widest text-[11px] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] transition-all inline-block"
            href={CALENDLY_URL}
          >
            Book Compatibility Reading
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default RelationshipsPage;
