const testimonials = [
  {
    quote: 'The clarity I received reshaped how I communicate and what I tolerate.',
    name: 'Maya T.',
    label: 'Relationship Reset'
  },
  {
    quote: 'Precise, grounded, and compassionate. It felt like a blueprint for my life.',
    name: 'Jordan P.',
    label: 'Life Path Reading'
  },
  {
    quote: 'The compatibility report was the most honest mirror I have seen.',
    name: 'Elena R.',
    label: 'Synastry Analysis'
  },
  {
    quote: 'I finally understood my patterns and the type of partner I need.',
    name: 'Caleb W.',
    label: 'Personal Blueprint'
  }
];

const Testimonials = () => (
  <section className="px-6 py-16 border-y border-(--border) bg-(--panel)">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-(--accent) uppercase tracking-[0.3em] text-xs font-medium">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-serif mt-4">Clarity in Real Words</h2>
      </div>

      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {[...testimonials, ...testimonials].map((item, idx) => (
            <div key={`${item.name}-${idx}`} className="testimonial-card">
              <p className="text-(--muted) font-light leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6 text-[11px] uppercase tracking-[0.3em] text-(--muted-strong)">
                {item.name} · {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
