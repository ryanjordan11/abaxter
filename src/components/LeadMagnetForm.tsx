"use client";

import { useState } from 'react';

const LeadMagnetForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setStatus('loading');
    setError('');

    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto text-center border border-(--border) bg-(--panel) p-10 md:p-14">
        <p className="text-(--accent) uppercase tracking-[0.3em] text-xs font-medium">Lead Magnet</p>
        <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-4">Free Mini Reading</h2>
        <p className="text-(--muted) font-light mb-8">
          Receive a short, focused insight to help you move with clarity. Delivered by email.
        </p>

        <form className="flex flex-col md:flex-row gap-4 items-center justify-center" onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-96 bg-(--panel-strong) border border-(--border) px-5 py-3 text-(--app-fg) focus:outline-none focus:border-(--accent) transition-all font-light"
            required
          />
          <button
            type="submit"
            className="bg-(--accent) text-(--accent-contrast) px-8 py-3 uppercase tracking-[0.25em] text-[10px] hover:bg-[#c4a030] transition-all"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Get My Reading'}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-(--accent)">Sent. Check your inbox.</p>
        )}
        {status === 'error' && (
          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-red-300">{error}</p>
        )}
      </div>
    </section>
  );
};

export default LeadMagnetForm;
