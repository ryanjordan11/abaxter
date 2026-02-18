import React from 'react';
import { Compass, MessageCircle, Moon, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-24 border-t border-(--border) text-center">
      <div className="text-2xl font-serif text-(--accent) tracking-[0.3em] mb-6">SCOTT BAXTER</div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-(--muted-strong) mb-6">
        LifePath Career &amp; Relationship Coach
      </div>
      <div className="flex justify-center space-x-6 mb-8 text-(--muted)">
        <Star size={16} strokeWidth={1} />
        <Moon size={16} strokeWidth={1} />
        <Compass size={16} strokeWidth={1} />
      </div>
      <div className="text-[10px] uppercase tracking-[0.4em] text-(--muted-strong) max-w-xs mx-auto leading-loose">
        <div>1102 Post Oak St.</div>
        <div>Hearne, TX 77859</div>
        <div>baxtersd@gmail.com</div>
        <div>(254)654-1671</div>
        <div className="mt-3 flex items-center justify-center gap-2">
          <MessageCircle size={12} strokeWidth={1.5} />
          <a
            href="https://wa.me/12546541671"
            className="hover:text-(--accent) transition-colors"
            aria-label="Chat on WhatsApp"
          >
            WhatsApp: 12546541671
          </a>
        </div>
      </div>
      <div className="text-[10px] uppercase tracking-[0.4em] text-(--muted-strong) max-w-xs mx-auto leading-loose mt-6">
        &copy; 1974-{year} Scott Baxter <br />
        The Stars Are Your Roadmap
      </div>
    </footer>
  );
};

export default Footer;
