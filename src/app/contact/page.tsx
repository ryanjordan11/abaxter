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
    } catch (submitError) {
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
      </div>
    </div>
  );
};

export default ContactPage;
