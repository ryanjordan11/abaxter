"use client";

import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="px-6 py-12 text-center animate-in fade-in duration-700">
      <div className="max-w-xl mx-auto">
        <SectionHeader title="Ready for Clarity?" subtitle="Request Guidance" />
        <p className="text-(--muted) font-light mb-12 -mt-10">If you feel called, reach out.</p>

        <form className="space-y-8 text-left" onSubmit={onSubmit}>
          {[
            { label: 'Name', type: 'text', placeholder: 'Your Name', name: 'name' },
            { label: 'Email', type: 'email', placeholder: 'email@example.com', name: 'email' }
          ].map((field) => (
            <div key={field.label}>
              <label
                className="text-[10px] uppercase tracking-widest text-(--accent) mb-3 block font-bold"
                htmlFor={field.name}
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={form[field.name as 'name' | 'email']}
                onChange={onChange}
                className="w-full bg-(--panel) border border-(--border) px-6 py-4 text-(--app-fg) focus:outline-none focus:border-(--accent) transition-all font-light"
                placeholder={field.placeholder}
                required
              />
            </div>
          ))}
          <div>
            <label
              className="text-[10px] uppercase tracking-widest text-(--accent) mb-3 block font-bold"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={onChange}
              className="w-full bg-(--panel) border border-(--border) px-6 py-4 text-(--app-fg) h-40 focus:outline-none focus:border-(--accent) transition-all font-light resize-none"
              placeholder="How can we guide you?"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-5 bg-(--accent) text-(--accent-contrast) uppercase tracking-[0.3em] text-[11px] font-bold hover:bg-[#c4a030] transition-all disabled:opacity-60"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-(--accent)">Message sent.</p>
        )}
        {status === 'error' && (
          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-red-300">{error}</p>
        )}

        <div className="mt-12 border-t border-(--border) pt-10 text-left">
          <div className="text-[10px] uppercase tracking-[0.3em] text-(--accent) font-bold mb-4">
            LifePath Career &amp; Relationship Coach
          </div>
          <div className="space-y-6 text-(--muted) font-light">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-(--muted-strong) mb-2">Location</div>
              <p>1102 Post Oak St.</p>
              <p>Hearne, TX 77859</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-(--muted-strong) mb-2">Contact</div>
              <p>baxtersd@gmail.com</p>
              <p>(254)654-1671</p>
              <a
                href="https://wa.me/12546541671"
                className="inline-flex items-center gap-2 text-(--accent) hover:text-(--app-fg) transition-colors mt-2"
                aria-label="Chat on WhatsApp"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.4 8.4 0 0 1-3.6-.8L3 21l1.9-5.3a8.4 8.4 0 0 1-.9-3.9 8.4 8.4 0 0 1 8.4-8.3 8.4 8.4 0 0 1 8.6 8z" />
                  <path d="M9 12a1 1 0 0 0 1 1h.5c.3 0 .6-.2.7-.4l.6-.9c.1-.2.3-.2.5-.1l1.4.7c.2.1.3.3.2.5l-.2 1.1c-.1.3-.4.6-.7.6-2.1.4-4.3-1.7-4.8-3.8 0-.3.2-.6.5-.7l1.1-.2c.2 0 .4.1.5.3l.7 1.4c.1.2 0 .4-.1.5l-.9.6c-.2.1-.4.4-.4.7V12z" />
                </svg>
                WhatsApp: 12546541671
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
