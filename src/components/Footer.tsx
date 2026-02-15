import React from 'react';
import { Compass, Moon, Star } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="py-24 border-t border-white/5 text-center">
    <div className="text-2xl font-serif text-[#D4AF37] tracking-[0.3em] mb-6">LIFEPATH</div>
    <div className="flex justify-center space-x-6 mb-8 text-gray-500">
      <Star size={16} strokeWidth={1} />
      <Moon size={16} strokeWidth={1} />
      <Compass size={16} strokeWidth={1} />
    </div>
    <div className="text-[10px] uppercase tracking-[0.4em] text-gray-600 max-w-xs mx-auto leading-loose">
      &copy; 1974–2024 LifePath Soul Analysis <br />
      The Stars Are Your Roadmap
    </div>
  </footer>
);

export default Footer;
