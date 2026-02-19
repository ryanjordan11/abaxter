import type { Metadata } from 'next';
import Link from 'next/link';
import { buildPaypalUrl } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Membership',
  description: 'Soul Mate Searching lifetime membership with ongoing compatibility analysis and guidance.',
  keywords: ['lifetime membership', 'compatibility analysis', 'relationship coaching', 'soul mate searching']
};

const MembershipPage = () => (
  <div className="px-6 py-12 animate-in fade-in duration-700">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-serif mb-4">Soul Mate Searching</h1>
        <p className="text-(--accent) uppercase tracking-[0.4em] text-xs mb-6">Lifetime Membership – $999</p>
        <p className="text-(--muted) font-light text-lg max-w-3xl mx-auto">
          Strategic Compatibility Guidance for Serious Singles
        </p>
      </div>

      <div className="bg-(--panel) border border-(--border) p-10 md:p-14">
        <div className="space-y-6 text-(--muted) font-light leading-relaxed text-lg">
          <p>Finding a life partner is not about fantasy. It is about alignment, discernment, and informed decision-making.</p>
          <p>
            Soul Mate Searching is a lifetime membership that provides structured compatibility analysis and ongoing guidance as you
            evaluate potential partners throughout your journey.
          </p>
          <p>This is not fortune-telling. This is multi-system relational insight applied with discipline.</p>
        </div>
      </div>

      <section className="mt-16 space-y-12 text-(--muted) font-light leading-relaxed text-lg">
        <div>
          <h2 className="text-3xl font-serif text-(--accent) mb-4">What You Receive</h2>
          <div className="space-y-8">
            <div>
              <p className="text-(--app-fg) font-medium">
                1. Unlimited Compatibility Evaluations (Reasonable Use)
              </p>
              <p>You may submit potential matches as they arise. For each evaluation, you receive:</p>
              <div className="mt-4 space-y-3 text-sm">
                <p className="text-(--app-fg) font-medium">Individual profile overview for both people</p>
                <ul className="space-y-1">
                  <li>Western astrology framework</li>
                  <li>Vedic indicators</li>
                  <li>Personality patterning</li>
                  <li>Core numerology themes</li>
                </ul>

                <p className="text-(--app-fg) font-medium mt-4">Synastry compatibility analysis</p>
                <ul className="space-y-1">
                  <li>Major aspects</li>
                  <li>Emotional dynamics</li>
                  <li>Communication patterns</li>
                  <li>Attraction factors</li>
                  <li>Long-term stability indicators</li>
                </ul>

                <p className="text-(--app-fg) font-medium mt-4">Structured compatibility breakdown across</p>
                <ul className="space-y-1">
                  <li>Emotional alignment</li>
                  <li>Conflict style</li>
                  <li>Values alignment</li>
                  <li>Long-term growth potential</li>
                </ul>

                <p className="text-(--app-fg) font-medium mt-4">Clear summary</p>
                <ul className="space-y-1">
                  <li>Strengths</li>
                  <li>Friction points</li>
                  <li>Areas requiring maturity</li>
                  <li>Overall compatibility assessment</li>
                </ul>
              </div>
              <p className="mt-4">Delivery format: Written PDF report (5–12 pages average)</p>
              <p>Turnaround time: 3–5 business days per submission</p>
              <p>Reasonable use applies (typically up to 2–3 new evaluations per month). Excessive submissions may be paced to maintain quality.</p>
            </div>

            <div>
              <p className="text-(--app-fg) font-medium">2. Ongoing Guidance</p>
              <ul className="space-y-1 text-sm mt-3">
                <li>Follow-up clarification via email</li>
                <li>Quick check-ins as dynamics evolve</li>
                <li>Strategic input before major relationship decisions</li>
              </ul>
              <p className="mt-4">Response time: within 48 business hours. This support does not expire.</p>
            </div>

            <div>
              <p className="text-(--app-fg) font-medium">3. Personal Alignment Strategy</p>
              <p>You also receive guidance on:</p>
              <ul className="space-y-1 text-sm mt-3">
                <li>Timing cycles (major transits &amp; personal year influences)</li>
                <li>Pattern awareness</li>
                <li>Red flag recognition</li>
                <li>Strengthening discernment</li>
                <li>Preparing for long-term partnership</li>
              </ul>
              <p className="mt-4">This ensures you are not only analyzing others — you are refining yourself.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-serif text-(--accent) mb-4">What This Is</h2>
          <ul className="space-y-2 text-sm">
            <li>A structured compatibility analysis system</li>
            <li>A discernment tool</li>
            <li>A strategic framework for evaluating relationship potential</li>
            <li>Ongoing lifetime guidance as you search</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-serif text-(--accent) mb-4">What This Is Not</h2>
          <ul className="space-y-2 text-sm">
            <li>Not a guarantee of marriage</li>
            <li>Not a prediction of “the one”</li>
            <li>Not therapy or psychological treatment</li>
            <li>Not legal or mental health advice</li>
          </ul>
          <p className="mt-4 text-sm">All insights are interpretive tools designed to support informed personal decisions.</p>
        </div>

        <div>
          <h2 className="text-3xl font-serif text-(--accent) mb-4">Data Requirements</h2>
          <p>For full analysis, the following is required for both individuals:</p>
          <ul className="space-y-2 text-sm mt-3">
            <li>Date of birth</li>
            <li>Exact birth time (if known)</li>
            <li>City and country of birth</li>
          </ul>
          <p className="mt-4 text-sm">If birth time is unknown, analysis will be adjusted accordingly. All personal data remains confidential.</p>
        </div>

        <div>
          <h2 className="text-3xl font-serif text-(--accent) mb-4">Why Lifetime?</h2>
          <p>
            Because real partnership often unfolds across multiple connections. Instead of repeating short-term readings or one-off
            reports, this membership provides continuity. You develop deeper relational clarity over time rather than starting over
            with each new person.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-serif text-(--accent) mb-4">Who This Is For</h2>
          <ul className="space-y-2 text-sm">
            <li>Singles serious about long-term partnership</li>
            <li>Individuals who value depth over surface attraction</li>
            <li>Those tired of emotional guesswork</li>
            <li>People who want clarity before investing deeply</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-serif text-(--accent) mb-4">Investment</h2>
          <p>$999 – One-Time Payment</p>
          <p>Lifetime access. No renewal fees.</p>
          <p className="text-sm mt-2">
            Due to the personalized nature of the service, all sales are final once the first compatibility report has been delivered.
          </p>
        </div>
      </section>

      <div className="mt-16 text-center">
        <Link
          className="bg-(--accent) text-(--accent-contrast) px-12 py-5 uppercase tracking-[0.2em] text-[10px] hover:bg-[#c4a030] transition-all inline-block"
          href={buildPaypalUrl()}
        >
          Join Lifetime Membership
        </Link>
      </div>
    </div>
  </div>
);

export default MembershipPage;
