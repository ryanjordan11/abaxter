const steps = [
  {
    title: 'Submit Your Details',
    text: 'Share your birth information and your focus area so the reading is tailored to your needs.'
  },
  {
    title: 'Receive Your Blueprint',
    text: 'We analyze astrology, numerology, and personality patterns to reveal alignment and blind spots.'
  },
  {
    title: 'Apply With Precision',
    text: 'Use the insights to make clear decisions in love, career, and personal growth.'
  }
];

const HowItWorks = () => (
  <section className="px-6 py-16">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-(--accent) uppercase tracking-[0.3em] text-xs font-medium">How It Works</p>
        <h2 className="text-4xl md:text-5xl font-serif mt-4">Clarity in Three Steps</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <div key={step.title} className="border border-(--border) bg-(--panel) p-8">
            <div className="text-[10px] uppercase tracking-[0.3em] text-(--accent) mb-3">Step {idx + 1}</div>
            <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
            <p className="text-(--muted) font-light leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
