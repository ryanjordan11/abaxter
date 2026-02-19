import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Your payment was received. We will be in touch shortly.',
  keywords: ['thank you', 'payment received', 'next steps']
};

const ThankYouPage = () => (
  <div className="px-6 py-20 text-center animate-in fade-in duration-700">
    <div className="max-w-2xl mx-auto">
      <p className="text-(--accent) uppercase tracking-[0.3em] text-xs font-medium">Thank You</p>
      <h1 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Payment Received</h1>
      <p className="text-(--muted) font-light text-lg mb-10">
        We have received your payment. You will receive a confirmation email shortly with next steps.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="border border-(--accent) text-(--accent) px-8 py-3 uppercase tracking-widest text-[11px] hover:bg-(--accent) hover:text-(--accent-contrast) transition-all"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="bg-(--accent) text-(--accent-contrast) px-8 py-3 uppercase tracking-widest text-[11px] hover:bg-[#c4a030] transition-all"
        >
          Request Guidance
        </Link>
      </div>
    </div>
  </div>
);

export default ThankYouPage;
