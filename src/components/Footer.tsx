import React from 'react';
import { Compass, Moon, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
  <footer className="py-24 border-t border-[var(--border)] text-center">
    <div className="text-2xl font-serif text-[var(--accent)] tracking-[0.3em] mb-6">SCOTT BAXTER</div>
    <div className="flex justify-center space-x-6 mb-8 text-[var(--muted)]">
        <Star size={16} strokeWidth={1} />
        <Moon size={16} strokeWidth={1} />
        <Compass size={16} strokeWidth={1} />
      </div>
    <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted-strong)] max-w-xs mx-auto leading-loose">
        &copy; 1974-{year} Scott Baxter <br />
        The Stars Are Your Roadmap
      </div>
    </footer>
  );
};

export default Footer;
