"use client";

import React, { useMemo, useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { calculateExpression } from '@/lib/numerology';

const ExpressionPage: React.FC = () => {
  const [expressionName, setExpressionName] = useState('');

  const expressionNumber = useMemo(() => calculateExpression(expressionName), [expressionName]);

  const expressionLabel = useMemo(() => {
    if (!expressionNumber) return '';
    if (expressionNumber === 11) return '11 / 2';
    if (expressionNumber === 22) return '22 / 4';
    return String(expressionNumber);
  }, [expressionNumber]);

  return (
    <div className="px-6 py-12 animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Destiny / Expression" subtitle="Personality" />
        <div className="bg-white/[0.03] border border-white/10 p-8 md:p-12">
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
  );
};

export default ExpressionPage;
