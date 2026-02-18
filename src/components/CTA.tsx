import Link from 'next/link';

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

const CTA = ({
  title = 'Ready for Clear Alignment?',
  subtitle = 'Book a reading or request guidance today.',
  primaryHref = '/contact',
  primaryLabel = 'Request Guidance',
  secondaryHref = '/services',
  secondaryLabel = 'View Services'
}: CTAProps) => (
  <section className="px-6">
    <div className="max-w-5xl mx-auto bg-(--panel) border border-(--border) p-10 md:p-14 text-center">
      <h2 className="text-3xl md:text-4xl font-serif mb-4">{title}</h2>
      <p className="text-(--muted) font-light mb-8">{subtitle}</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <Link
          href={primaryHref}
          className="bg-(--accent) text-(--accent-contrast) px-10 py-4 uppercase tracking-[0.25em] text-[10px] hover:bg-[#c4a030] transition-all inline-block"
        >
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="border border-(--accent) text-(--accent) px-10 py-4 uppercase tracking-[0.25em] text-[10px] hover:bg-(--accent) hover:text-(--accent-contrast) transition-all inline-block"
        >
          {secondaryLabel}
        </Link>
      </div>
    </div>
  </section>
);

export default CTA;
