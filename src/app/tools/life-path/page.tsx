"use client";

import React, { useMemo, useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { calculateLifePath } from '@/lib/numerology';

interface NumerologyTraits {
  title: string;
  positive: string[];
  negative: string[];
}

const lifePathTraits: Record<number, NumerologyTraits> = {
  1: {
    title: 'Numerology 1',
    positive: ['Ambitious', 'Determined', 'Pioneering', 'Athletic', 'Bold', 'Independent', 'Creative', 'Original'],
    negative: ['Over-Achiever', 'Insensitive', 'Egotistical', 'Impulsive', 'Violent', 'Controlling', 'Self-Centered', 'Impatient']
  },
  2: {
    title: 'Numerology 2',
    positive: ['Cooperative', 'Adaptable', 'Intuitive', 'Romantic', 'Diplomatic', 'Warm', 'Peaceful', 'Sensitive'],
    negative: ['Overly-Sensitive', 'Withdrawn', 'Easily-Offended', 'Doormat', 'Self-Deprecating', 'Dishonest', 'Wimpy', 'Resentful']
  },
  3: {
    title: 'Numerology 3',
    positive: ['Expressive', 'Verbal', 'Sociable', 'Artistic', 'Jovial', 'Optimistic', 'Creative'],
    negative: ['Scattered', 'Unrealistic', 'Overly-Talkative', 'Critical', 'Moody', 'Show-Off', 'Undisciplined', 'Sarcastic']
  },
  4: {
    title: 'Numerology 4',
    positive: ['Traditional', 'Orderly', 'Helpful', 'Persevering', 'Steady', 'Logical', 'Self-Disciplined', 'Practical'],
    negative: ['Closed-Minded', 'Neurotic', 'Demanding', 'Boring', 'Compulsive', 'Perfectionist', 'Rude', 'Moralistic']
  },
  5: {
    title: 'Numerology 5',
    positive: ['Expansive', 'Visionary', 'Adventurous', 'Magnetic', 'Witty', 'Adaptable', 'Resourceful', 'Curious'],
    negative: ['Unstable', 'Addictive', 'Ever-Changing', 'Indiscriminate', 'Rebellious', 'Impatient', 'Disorganized', 'Irresponsible']
  },
  6: {
    title: 'Numerology 6',
    positive: ['Responsible', 'Protective', 'Nurturing', 'Stable', 'Balanced', 'Sympathetic', 'Compassionate', 'Loving'],
    negative: ['Overly-Responsible', 'Suffocating', 'Homebody', 'Doormat', 'Predictable', 'Boring', 'Overly-Protective', 'Savior Complex']
  },
  7: {
    title: 'Numerology 7',
    positive: ['Analytical', 'Logical', 'Reserved', 'Inventive', 'Knowledgeable', 'Studious', 'Introspective', 'Intuitive'],
    negative: ['Calculating', 'Withdrawn', 'Cynical', 'Egotistical', 'Overly-Analytical', 'Insensitive', 'Aloof', 'Distrusting']
  },
  8: {
    title: 'Numerology 8',
    positive: ['Ambitious', 'Big Thinker', 'Successful', 'Leading', 'Authoritative', 'Courageous', 'Influential'],
    negative: ['Domineering', 'Materialistic', 'Greedy', 'Insensitive', 'Workaholic', 'Unavailable', 'Controlling', 'Arrogant']
  },
  9: {
    title: 'Numerology 9',
    positive: ['Giving', 'Humanitarian', 'Selfless', 'Sophisticated', 'Idealistic', 'Creative', 'Expressive'],
    negative: ['Drama Queen', 'Dissatisfied', 'Unrealistic', 'Impractical', 'Blaming', 'Egotistical', 'Ungrateful', 'Moody']
  },
  11: {
    title: 'Numerology 11',
    positive: ['Intuitive', 'Inspirational', 'Dreamer', 'Illuminated', 'Considerate', 'Sensitive', 'Understanding'],
    negative: ['Shy', 'Withdrawn', 'Self-Conscious', 'Self-Critical', 'Unconfident', 'Impractical', 'Vindictive', 'Misunderstood']
  },
  22: {
    title: 'Numerology 22',
    positive: ['Logical', 'Intuitive', 'Master Builder', 'Powerful Force', 'Leader', 'Achiever', 'Resourceful'],
    negative: ['Inflexible', 'Conflicted', 'Frustrated', 'Overly-Stressed', 'Demanding', 'Controlling', 'Superior', 'Manipulative']
  }
};

const LifePathPage: React.FC = () => {
  const [lifePathDate, setLifePathDate] = useState('');

  const lifePathNumber = useMemo(() => calculateLifePath(lifePathDate), [lifePathDate]);

  const lifePathLabel = useMemo(() => {
    if (!lifePathNumber) return '';
    if (lifePathNumber === 11) return '11 / 2';
    if (lifePathNumber === 22) return '22 / 4';
    return String(lifePathNumber);
  }, [lifePathNumber]);

  return (
    <div className="px-6 py-12 animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Life Path Calculator" subtitle="Numerology" />
        <div className="bg-(--panel) border border-(--border) p-8 md:p-12">
          <p className="text-(--muted) font-light mb-8">Enter your birth date to reveal your Life Path number.</p>

          <div className="space-y-6">
            <div>
              <label className="text-[10px] uppercase tracking-widest text-(--accent) mb-3 block font-bold">Birth Date</label>
              <input
                type="date"
                value={lifePathDate}
                onChange={(e) => setLifePathDate(e.target.value)}
                className="w-full bg-(--panel) border border-(--border) px-6 py-4 text-(--app-fg) focus:outline-none focus:border-(--accent) transition-all font-light"
              />
            </div>

            <div className="border border-(--border) p-6 bg-(--panel-strong)">
              <div className="text-[10px] uppercase tracking-[0.3em] text-(--muted-strong)">Your Life Path</div>
              <div className="text-5xl font-serif text-(--accent) mt-2">{lifePathNumber ? lifePathLabel : '-'}</div>
              <p className="text-(--muted) font-light mt-4">
                {lifePathNumber
                  ? 'Use this as your blueprint for alignment, communication, and relationship choices.'
                  : 'Select your birth date to calculate your Life Path number.'}
              </p>
            </div>
          </div>

          {lifePathNumber && lifePathTraits[lifePathNumber] && (
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-(--muted-strong) mb-3">Strengths</div>
                <ul className="space-y-2 text-sm text-(--muted) font-light">
                  {lifePathTraits[lifePathNumber].positive.map((trait) => (
                    <li key={trait} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--accent)" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-(--muted-strong) mb-3">Shadow</div>
                <ul className="space-y-2 text-sm text-(--muted) font-light">
                  {lifePathTraits[lifePathNumber].negative.map((trait) => (
                    <li key={trait} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <details className="mt-8 border-t border-(--border) pt-6 text-sm text-(--muted)">
            <summary className="cursor-pointer uppercase tracking-[0.3em] text-[10px] text-(--accent)">How it&apos;s calculated</summary>
            <div className="mt-4 space-y-3 font-light">
              <p>Group Month, Day, and Year separately, reducing each group to a single digit unless 11 or 22 appears.</p>
              <p>Add the three group totals together, then reduce to a single digit unless 11 or 22 remains in the final result.</p>
              <p>Example: May 4, 1977 -&gt; (5) + (4) + (1+9+7+7=24-&gt;6) -&gt; 5+4+6=15 -&gt; 1+5=6.</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default LifePathPage;
