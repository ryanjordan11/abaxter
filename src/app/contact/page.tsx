"use client";

import SectionHeader from '@/components/SectionHeader';

const ContactPage = () => (
  <div className="px-6 py-12 text-center animate-in fade-in duration-700">
    <div className="max-w-xl mx-auto">
      <SectionHeader title="Ready for Clarity?" subtitle="Request Guidance" />
      <p className="text-gray-400 font-light mb-12 -mt-10">If you feel called, reach out.</p>

      <form className="space-y-8 text-left" onSubmit={(event) => event.preventDefault()}>
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

export default ContactPage;
