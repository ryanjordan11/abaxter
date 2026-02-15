import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';

const AboutPage = () => (
  <div className="px-6 py-12 animate-in fade-in duration-700">
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-20">
      <div className="lg:w-1/2">
        <SectionHeader title="The Oracle’s Path" subtitle="Five Decades of Devotion" />
        <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
          <p>This is not a hobby. This is five decades of devotion. Astrology studied since 1974. Personality systems practiced for nearly 40 years.</p>
          <p>Scott Baxter's work exists for one reason: To help you see yourself clearly enough that your outer world reorganizes around truth.</p>
          <p>We are not here to predict your future. We are here to reveal your design.</p>
        </div>
        <div className="mt-12 p-8 border-l border-[#D4AF37] bg-white/[0.02]">
          <p className="font-serif text-3xl italic leading-snug">Clarity first. Alignment second. Love and success follow naturally.</p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <div className="aspect-[4/5] border border-white/10 relative overflow-hidden bg-white/[0.02]">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-transparent to-transparent"></div>
          <Image
            src="/images/scott-baxter.png"
            alt="Scott Baxter"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
