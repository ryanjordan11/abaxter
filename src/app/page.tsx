"use client";

import React, { useMemo, useState } from 'react';
import {
  Compass,
  Menu,
  X,
  Star,
  Moon,
  ChevronRight,
  Sparkles
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'services' | 'relationships' | 'membership' | 'about' | 'contact' | 'tools';

interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  description: string;
  cta: string;
  recommended?: boolean;
}

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

const reduceWithMasters = (value: number): number => {
  let current = value;
  while (current > 9 && current !== 11 && current !== 22) {
    current = String(current)
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return current;
};

const calculateLifePath = (dateValue: string): number | null => {
  if (!dateValue) return null;
  const [yearStr, monthStr, dayStr] = dateValue.split('-');
  if (!yearStr || !monthStr || !dayStr) return null;

  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);
  if (!year || !month || !day) return null;

  const monthGroup = reduceWithMasters(month);
  const dayGroup = reduceWithMasters(day);
  const yearGroup = reduceWithMasters(
    String(year)
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0)
  );

  return reduceWithMasters(monthGroup + dayGroup + yearGroup);
};

const letterValue = (char: string): number => {
  const map: Record<string, number> = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
    J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
    S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
  };
  return map[char] || 0;
};

const calculateExpression = (nameValue: string): number | null => {
  const cleaned = nameValue.toUpperCase().replace(/[^A-Z]/g, '');
  if (!cleaned) return null;
  const total = cleaned.split('').reduce((sum, char) => sum + letterValue(char), 0);
  return reduceWithMasters(total);
};

// --- Components ---

const Navbar: React.FC<{ activePage: Page; setPage: (p: Page) => void }> = ({ activePage, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'tools', label: 'Tools' },
    { id: 'relationships', label: 'Relationships' },
    { id: 'membership', label: 'Membership' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (id: Page) => {
    setPage(id);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
      <>
        <nav className="fixed w-full z-50 bg-[#05070A]/90 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <div
                className="text-2xl font-light tracking-widest text-[#D4AF37] cursor-pointer font-serif"
                onClick={() => handleNav('home')}
            >
              LIFEPATH
            </div>

            <div className="hidden md:flex space-x-8 text-[11px] uppercase tracking-[0.2em] font-light">
              {navLinks.map((link) => (
                  <button
                      key={link.id}
                      onClick={() => handleNav(link.id)}
                      className={`relative transition-colors duration-300 hover:text-[#D4AF37] ${
                          activePage === link.id ? 'text-[#D4AF37]' : 'text-gray-300'
                      }`}
                  >
                    {link.label}
                    {activePage === link.id && (
                        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#D4AF37]" />
                    )}
                  </button>
              ))}
            </div>

            <button className="md:hidden text-[#D4AF37]" onClick={() => setIsMenuOpen(true)}>
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="fixed inset-0 bg-[#05070A] z-[60] flex flex-col items-center justify-center space-y-8 text-xl uppercase tracking-widest font-light font-serif animate-in fade-in duration-300">
              <button className="absolute top-10 right-10 text-[#D4AF37]" onClick={() => setIsMenuOpen(false)}>
                <X size={32} strokeWidth={1} />
              </button>
              {navLinks.map((link) => (
                  <button key={link.id} onClick={() => handleNav(link.id)} className="hover:text-[#D4AF37]">
                    {link.label}
                  </button>
              ))}
            </div>
        )}
      </>
  );
};

const SectionHeader: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
    <div className="text-center mb-16">
      <h2 className={`text-4xl md:text-5xl font-serif mb-4 ${light ? 'text-[#05070A]' : 'text-white'}`}>{title}</h2>
      {subtitle && <p className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-medium">{subtitle}</p>}
    </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    if (typeof window === 'undefined') return 'home';
    const hash = window.location.hash.replace('#', '') as Page;
    return ['home', 'services', 'tools', 'relationships', 'membership', 'about', 'contact'].includes(hash) ? hash : 'home';
  });
  const [lifePathDate, setLifePathDate] = useState('');
  const [expressionName, setExpressionName] = useState('');

  const lifePathNumber = useMemo(() => calculateLifePath(lifePathDate), [lifePathDate]);
  const expressionNumber = useMemo(() => calculateExpression(expressionName), [expressionName]);

  const lifePathLabel = useMemo(() => {
    if (!lifePathNumber) return '';
    if (lifePathNumber === 11) return '11 / 2';
    if (lifePathNumber === 22) return '22 / 4';
    return String(lifePathNumber);
  }, [lifePathNumber]);

  const expressionLabel = useMemo(() => {
    if (!expressionNumber) return '';
    if (expressionNumber === 11) return '11 / 2';
    if (expressionNumber === 22) return '22 / 4';
    return String(expressionNumber);
  }, [expressionNumber]);

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

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
              {/* Hero */}
              <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 font-serif leading-tight">
                  You Don’t Have Relationship Problems.<br />
                  <span className="text-[#D4AF37] italic">You Have Clarity Problems.</span>
                </h1>
                <p className="max-w-2xl text-lg md:text-xl font-light leading-relaxed text-gray-400 mb-10">
                  When you understand your soul blueprint, love becomes aligned. Career becomes intentional. Communication becomes effortless.
                </p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                  <button
                      onClick={() => setCurrentPage('services')}
                      className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 uppercase tracking-widest text-[11px] hover:bg-[#D4AF37] hover:text-[#05070A] transition-all"
                  >
                    Discover Your Blueprint
                  </button>
                  <button
                      onClick={() => setCurrentPage('relationships')}
                      className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 uppercase tracking-widest text-[11px] hover:bg-[#D4AF37] hover:text-[#05070A] transition-all"
                  >
                    Find Your Soul Match
                  </button>
                </div>
                <div className="mt-20 text-[10px] uppercase tracking-[0.4em] text-gray-500 font-light italic flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-gray-800"></div>
                  Deciphering destiny since 1974
                  <div className="w-12 h-[1px] bg-gray-800"></div>
                </div>
              </section>

              {/* Why LifePath */}
              <section className="py-24 bg-white/[0.02] border-y border-white/5 px-6">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-4xl font-serif mb-6">The Cycle Ends Here.</h2>
                    <p className="text-gray-400 font-light mb-6">You’ve done the therapy. You’ve read the books. You’ve tried to “manifest.” Yet you still ask why you attract the same patterns.</p>
                    <p className="text-[#D4AF37] font-serif text-2xl mb-8">Because you’re guessing.</p>
                    <button onClick={() => setCurrentPage('contact')} className="flex items-center gap-3 text-[#D4AF37] uppercase tracking-widest text-xs hover:gap-5 transition-all">
                      Request Guidance <ChevronRight size={14} />
                    </button>
                  </div>
                  <div className="space-y-8">
                    {[
                      { label: 'Architecture', desc: 'Personality architecture and decoded astrological design.' },
                      { label: 'Legacy', desc: 'Karmic patterns and multi-system compatibility measurement.' },
                      { label: 'Precision', desc: 'Structured soul analysis beyond vague spirituality.' }
                    ].map((item, i) => (
                        <div key={i} className="group">
                          <h4 className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-1 opacity-60 group-hover:opacity-100 transition-opacity">{item.label}</h4>
                          <p className="text-sm font-light text-gray-300">{item.desc}</p>
                        </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
        );

      case 'services':
        return (
            <div className="px-6 py-12 animate-in fade-in duration-700">
              <div className="max-w-6xl mx-auto">
                <SectionHeader title="Personal Blueprint Readings" subtitle="Unlocking the Secrets of Your Soul" />
                <div className="grid lg:grid-cols-3 gap-8">
                  {services.map((s) => (
                      <div
                          key={s.id}
                          className={`p-10 flex flex-col items-center text-center border transition-all duration-500 ${
                              s.recommended
                                  ? 'bg-[#0A0D12] border-[#D4AF37]/50 shadow-[0_0_40px_rgba(212,175,55,0.08)]'
                                  : 'bg-white/5 border-white/10 hover:border-[#D4AF37]/30'
                          }`}
                      >
                        {s.recommended && <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-4 font-bold">Most Comprehensive</div>}
                        <h3 className="font-serif text-3xl mb-4">{s.title}</h3>
                        <div className="text-[#D4AF37] text-3xl font-serif mb-6">${s.price}</div>
                        <p className="text-sm text-gray-400 font-light mb-10 leading-relaxed">{s.description}</p>
                        <button className={`mt-auto w-full py-4 uppercase tracking-widest text-[10px] border transition-all ${
                            s.recommended ? 'bg-[#D4AF37] text-[#05070A] border-[#D4AF37]' : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#05070A]'
                        }`}>
                          {s.cta}
                        </button>
                      </div>
                  ))}
                </div>
              </div>
            </div>
        );

      case 'tools':
        return (
            <div className="px-6 py-12 animate-in fade-in duration-700">
              <div className="max-w-6xl mx-auto">
                <SectionHeader title="Tools" subtitle="Personality • Astrology • Numerology" />

                <div className="grid lg:grid-cols-2 gap-10">
                  <div className="bg-white/[0.03] border border-white/10 p-8 md:p-12">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-serif text-3xl">Life Path Calculator</h3>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">Numerology</span>
                    </div>
                    <p className="text-gray-400 font-light mb-8">Enter your birth date to reveal your Life Path number.</p>

                    <div className="space-y-6">
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3 block font-bold">Birth Date</label>
                        <input
                            type="date"
                            value={lifePathDate}
                            onChange={(e) => setLifePathDate(e.target.value)}
                            className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all font-light"
                        />
                      </div>

                      <div className="border border-white/10 p-6 bg-[#0A0D12]">
                        <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Your Life Path</div>
                        <div className="text-5xl font-serif text-[#D4AF37] mt-2">{lifePathNumber ? lifePathLabel : '—'}</div>
                        <p className="text-gray-400 font-light mt-4">
                          {lifePathNumber
                            ? 'Use this as your blueprint for alignment, communication, and relationship choices.'
                            : 'Select your birth date to calculate your Life Path number.'}
                        </p>
                      </div>
                    </div>

                    {lifePathNumber && lifePathTraits[lifePathNumber] && (
                      <div className="mt-8 grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-3">Strengths</div>
                          <ul className="space-y-2 text-sm text-gray-300 font-light">
                            {lifePathTraits[lifePathNumber].positive.map((trait) => (
                              <li key={trait} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                                {trait}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-3">Shadow</div>
                          <ul className="space-y-2 text-sm text-gray-300 font-light">
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

                    <details className="mt-8 border-t border-white/10 pt-6 text-sm text-gray-400">
                      <summary className="cursor-pointer uppercase tracking-[0.3em] text-[10px] text-[#D4AF37]">How it’s calculated</summary>
                      <div className="mt-4 space-y-3 font-light">
                        <p>Group Month, Day, and Year separately, reducing each group to a single digit unless 11 or 22 appears.</p>
                        <p>Add the three group totals together, then reduce to a single digit unless 11 or 22 remains in the final result.</p>
                        <p>Example: May 4, 1977 → (5) + (4) + (1+9+7+7=24→6) → 5+4+6=15 → 1+5=6.</p>
                      </div>
                    </details>
                  </div>

                  <div className="bg-white/[0.03] border border-white/10 p-8 md:p-12">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-serif text-3xl">Destiny / Expression</h3>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">Personality</span>
                    </div>
                    <p className="text-gray-400 font-light mb-8">Calculated from your full birth name. Reveals how you express your gifts.</p>

                    <div className="space-y-6">
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3 block font-bold">Full Name</label>
                        <input
                            type="text"
                            value={expressionName}
                            onChange={(e) => setExpressionName(e.target.value)}
                            placeholder="First Middle Last"
                            className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all font-light"
                        />
                      </div>

                      <div className="border border-white/10 p-6 bg-[#0A0D12]">
                        <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Your Expression</div>
                        <div className="text-5xl font-serif text-[#D4AF37] mt-2">{expressionNumber ? expressionLabel : '—'}</div>
                        <p className="text-gray-400 font-light mt-4">
                          {expressionNumber
                            ? 'This number describes how your gifts naturally manifest in the world.'
                            : 'Enter your full birth name to calculate your Expression number.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );

      case 'relationships':
        return (
            <div className="px-6 py-12 animate-in fade-in duration-700">
              <div className="max-w-4xl mx-auto">
                <section className="text-center mb-16">
                  <h1 className="text-5xl font-serif mb-6">Stop Wondering If They’re “The One.”</h1>
                  <p className="text-3xl font-serif italic text-[#D4AF37]">Know.</p>
                </section>

                <div className="bg-white/[0.03] border border-white/10 p-8 md:p-16">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                    <div>
                      <h2 className="font-serif text-4xl mb-2">Soul Mate Connections</h2>
                      <p className="text-gray-500 uppercase tracking-widest text-[10px]">Full Synastry & Soul Synthesis</p>
                    </div>
                    <div className="text-[#D4AF37] text-5xl font-serif mt-4 md:mt-0">$299</div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
                    {[
                      "Individual soul blueprints", "Planetary inter-aspects", "House overlays (Intimacy/Career)",
                      "Composite relationship energy", "Karmic & nodal contracts", "Growth triggers & shadow mapping",
                      "Compatibility scoring", "Relational strategy"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center text-sm font-light text-gray-400 gap-3">
                          <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                          {item}
                        </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-12 text-center">
                    <p className="font-serif text-2xl mb-10 italic text-gray-400 max-w-lg mx-auto leading-relaxed">
                      Where it flows. Where it friction-tests you. Whether it’s sacred growth or misalignment.
                    </p>
                    <button className="bg-transparent border border-[#D4AF37] text-[#D4AF37] px-12 py-4 uppercase tracking-widest text-[11px] hover:bg-[#D4AF37] hover:text-[#05070A] transition-all">
                      Book Compatibility Reading
                    </button>
                  </div>
                </div>
              </div>
            </div>
        );

      case 'membership':
        return (
            <div className="px-6 py-12 text-center animate-in fade-in duration-700">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-6xl font-serif mb-6">Date With Discernment.</h1>
                <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs mb-16">Lifetime Membership</p>

                <div className="bg-[#D4AF37] p-12 md:p-20 text-[#05070A] text-left relative overflow-hidden">
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

                  <button className="bg-[#05070A] text-white px-12 py-5 uppercase tracking-[0.2em] text-[10px] hover:bg-slate-900 transition-all">
                    Join Lifetime Membership
                  </button>
                </div>

                <p className="mt-16 text-gray-500 font-light text-lg">
                  Instead of asking, “Is this right?” <span className="text-[#D4AF37] italic">You’ll know when it is.</span>
                </p>
              </div>
            </div>
        );

      case 'about':
        return (
            <div className="px-6 py-12 animate-in fade-in duration-700">
              <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-1/2">
                  <SectionHeader title="The Oracle’s Path" subtitle="Five Decades of Devotion" />
                  <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
                    <p>This is not a hobby. This is five decades of devotion. Astrology studied since 1974. Personality systems practiced for nearly 40 years.</p>
                    <p>LifePath exists for one reason: To help you see yourself clearly enough that your outer world reorganizes around truth.</p>
                    <p>We are not here to predict your future. We are here to reveal your design.</p>
                  </div>
                  <div className="mt-12 p-8 border-l border-[#D4AF37] bg-white/[0.02]">
                    <p className="font-serif text-3xl italic leading-snug">Clarity first. Alignment second. Love and success follow naturally.</p>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-[4/5] border border-white/10 relative flex items-center justify-center bg-white/[0.02]">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-transparent to-transparent"></div>
                    <div className="relative text-center p-12 border border-[#D4AF37]/20">
                      <Sparkles className="text-[#D4AF37] mx-auto mb-6 opacity-40" size={48} strokeWidth={0.5} />
                      <div className="font-serif text-9xl text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none">1974</div>
                      <p className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold">The Legacy of Alignment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );

      case 'contact':
        return (
            <div className="px-6 py-12 text-center animate-in fade-in duration-700">
              <div className="max-w-xl mx-auto">
                <SectionHeader title="Ready for Clarity?" subtitle="Request Guidance" />
                <p className="text-gray-400 font-light mb-12 -mt-10">If you feel called, reach out.</p>

                <form className="space-y-8 text-left" onSubmit={(e) => e.preventDefault()}>
                  {[
                    { label: 'Name', type: 'text', placeholder: 'Your Name' },
                    { label: 'Email', type: 'email', placeholder: 'email@example.com' }
                  ].map((field) => (
                      <div key={field.label}>
                        <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3 block font-bold">{field.label}</label>
                        <input
                            type={field.type}
                            className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all font-light"
                            placeholder={field.placeholder}
                        />
                      </div>
                  ))}
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3 block font-bold">Message</label>
                    <textarea
                        className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-white h-40 focus:outline-none focus:border-[#D4AF37] transition-all font-light resize-none"
                        placeholder="How can we guide you?"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full py-5 bg-[#D4AF37] text-[#05070A] uppercase tracking-[0.3em] text-[11px] font-bold hover:bg-[#c4a030] transition-all">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
        );
    }
  };

  return (
      <div className="min-h-screen bg-[#05070A] text-[#F8F8F8] font-sans selection:bg-[#D4AF37] selection:text-[#05070A]">
        {/* Background Effect */}
        <div className="fixed inset-0 pointer-events-none opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.05)_0%,_transparent_70%)]"></div>
        </div>

        <Navbar activePage={currentPage} setPage={setCurrentPage} />

        <main className="pt-32 pb-20">
          {renderPage()}
        </main>

        <footer className="py-24 border-t border-white/5 text-center">
          <div className="text-2xl font-serif text-[#D4AF37] tracking-[0.3em] mb-6">LIFEPATH</div>
          <div className="flex justify-center space-x-6 mb-8 text-gray-500">
            <Star size={16} strokeWidth={1} />
            <Moon size={16} strokeWidth={1} />
            <Compass size={16} strokeWidth={1} />
          </div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-gray-600 max-w-xs mx-auto leading-loose">
            &copy; 1974–2024 LifePath Soul Analysis <br />
            The Stars Are Your Roadmap
          </div>
        </footer>
      </div>
  );
};

export default App;
