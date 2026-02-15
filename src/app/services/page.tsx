import SectionHeader from '@/components/SectionHeader';

interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  description: string;
  cta: string;
  recommended?: boolean;
}

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

const ServicesPage = () => (
  <div className="px-6 py-12 animate-in fade-in duration-700">
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="Personal Blueprint Readings" subtitle="Unlocking the Secrets of Your Soul" />
      <div className="grid lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className={`p-10 flex flex-col items-center text-center border transition-all duration-500 ${
              service.recommended
                ? 'bg-[#0A0D12] border-[#D4AF37]/50 shadow-[0_0_40px_rgba(212,175,55,0.08)]'
                : 'bg-white/5 border-white/10 hover:border-[#D4AF37]/30'
            }`}
          >
            {service.recommended && (
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-4 font-bold">
                Most Comprehensive
              </div>
            )}
            <h3 className="font-serif text-3xl mb-4">{service.title}</h3>
            <div className="text-[#D4AF37] text-3xl font-serif mb-6">${service.price}</div>
            <p className="text-sm text-gray-400 font-light mb-10 leading-relaxed">{service.description}</p>
            <button
              className={`mt-auto w-full py-4 uppercase tracking-widest text-[10px] border transition-all ${
                service.recommended
                  ? 'bg-[#D4AF37] text-[#05070A] border-[#D4AF37]'
                  : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#05070A]'
              }`}
              type="button"
            >
              {service.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ServicesPage;
