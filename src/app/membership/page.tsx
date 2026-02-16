import Link from 'next/link';
import { Compass } from 'lucide-react';
import { PAYPAL_URL } from '@/lib/links';

const MembershipPage = () => (
  <div className="px-6 py-12 text-center animate-in fade-in duration-700">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-6xl font-serif mb-6">Date With Discernment.</h1>
      <p className="text-[var(--accent)] uppercase tracking-[0.4em] text-xs mb-16">Lifetime Membership</p>

      <div className="bg-[var(--accent)] p-12 md:p-20 text-[var(--accent-contrast)] text-left relative overflow-hidden">
        <div className="absolute -right-20 -top-20 opacity-10">
          <Compass size={400} strokeWidth={0.5} />
        </div>

        <h2 className="font-serif text-5xl mb-6">Soul Mate Searching</h2>
        <p className="text-xl mb-10 font-light italic leading-relaxed">
          Bring every potential partner. Receive unlimited compatibility analysis. No expiration. No limit.
        </p>
        <div className="text-6xl font-serif mb-12">$999</div>

        <div className="grid grid-cols-2 gap-y-6 gap-x-10 text-[10px] uppercase tracking-widest mb-12 font-bold">
          <div className="border-b border-black/20 pb-2">Unlimited Reports</div>
          <div className="border-b border-black/20 pb-2">Red Flag Clarity</div>
          <div className="border-b border-black/20 pb-2">Ongoing Coaching</div>
          <div className="border-b border-black/20 pb-2">Timing Alignment</div>
        </div>

        <Link
          className="bg-[var(--accent-contrast)] text-[var(--app-fg)] px-12 py-5 uppercase tracking-[0.2em] text-[10px] hover:bg-slate-900 transition-all inline-block"
          href={PAYPAL_URL}
        >
          Join Lifetime Membership
        </Link>
      </div>

      <p className="mt-16 text-[var(--muted-strong)] font-light text-lg">
        Instead of asking, “Is this right?” <span className="text-[var(--accent)] italic">You’ll know when it is.</span>
      </p>
    </div>
  </div>
);

export default MembershipPage;
