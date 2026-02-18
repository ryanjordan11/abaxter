const faqs = [
  {
    q: 'What do I need to provide for a reading?',
    a: 'Your full name and birth details (date, time if known, and location). If birth time is unknown, the reading is adjusted.'
  },
  {
    q: 'Is this therapy or counseling?',
    a: 'No. These sessions are interpretive tools for clarity, alignment, and decision-making, not clinical or psychological treatment.'
  },
  {
    q: 'How long does a session take?',
    a: 'Most sessions run 60–90 minutes, with written summaries when applicable.'
  },
  {
    q: 'Are sessions held online?',
    a: 'Yes. All services are remote and available worldwide.'
  },
  {
    q: 'How soon can I book?',
    a: 'Availability varies. Use the contact form to request the next open slot.'
  }
];

const FAQ = () => (
  <section className="px-6 py-16">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-(--accent) uppercase tracking-[0.3em] text-xs font-medium">FAQ</p>
        <h2 className="text-4xl md:text-5xl font-serif mt-4">Common Questions</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.q} className="border border-(--border) bg-(--panel) p-6">
            <summary className="cursor-pointer text-(--app-fg) font-medium">{faq.q}</summary>
            <p className="text-(--muted) font-light mt-3 leading-relaxed">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
