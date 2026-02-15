"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const toolLinks = [
  { href: '/tools/life-path', label: 'Life Path' },
  { href: '/tools/expression', label: 'Expression' },
  { href: '/tools/love-languages', label: 'Love Languages' }
];

const navLinksBeforeTools = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' }
];

const navLinksAfterTools = [
  { href: '/relationships', label: 'Relationships' },
  { href: '/membership', label: 'Membership' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMobileToolsOpen, setIsMobileToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLDivElement | null>(null);

  const toolsActive = useMemo(() => pathname?.startsWith('/tools') ?? false, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!toolsRef.current) return;
      if (!toolsRef.current.contains(event.target as Node)) {
        setIsToolsOpen(false);
      }
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsToolsOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setIsToolsOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-[#05070A]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link
            className="text-2xl font-light tracking-widest text-[#D4AF37] cursor-pointer font-serif"
            href="/"
          >
            SCOTT BAXTER
          </Link>

          <div className="hidden md:flex space-x-8 text-[11px] uppercase tracking-[0.2em] font-light">
            {navLinksBeforeTools.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`relative transition-colors duration-300 hover:text-[#D4AF37] ${
                  pathname === link.href ? 'text-[#D4AF37]' : 'text-gray-300'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#D4AF37]" />
                )}
              </Link>
            ))}

            <div className="relative" ref={toolsRef}>
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={isToolsOpen}
                onClick={() => setIsToolsOpen((prev) => !prev)}
                className={`relative transition-colors duration-300 hover:text-[#D4AF37] ${
                  toolsActive ? 'text-[#D4AF37]' : 'text-gray-300'
                }`}
              >
                Tools
                {toolsActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#D4AF37]" />
                )}
              </button>
              {isToolsOpen && (
                <div
                  role="menu"
                  className="absolute top-10 right-0 w-56 border border-white/10 bg-[#05070A] shadow-lg"
                >
                  {toolLinks.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={handleNavClick}
                      className={`block px-4 py-3 text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-[#D4AF37] ${
                        pathname === tool.href ? 'text-[#D4AF37]' : 'text-gray-300'
                      }`}
                    >
                      {tool.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinksAfterTools.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`relative transition-colors duration-300 hover:text-[#D4AF37] ${
                  pathname === link.href ? 'text-[#D4AF37]' : 'text-gray-300'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#D4AF37]" />
                )}
              </Link>
            ))}
          </div>

          <button className="md:hidden text-[#D4AF37]" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#05070A] z-[60] flex flex-col items-center justify-center space-y-8 text-xl uppercase tracking-widest font-light font-serif animate-in fade-in duration-300">
          <button className="absolute top-10 right-10 text-[#D4AF37]" onClick={() => setIsMenuOpen(false)}>
            <X size={32} strokeWidth={1} />
          </button>

          {navLinksBeforeTools.map((link) => (
            <Link key={link.href} href={link.href} onClick={handleNavClick} className="hover:text-[#D4AF37]">
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => setIsMobileToolsOpen((prev) => !prev)}
            className="hover:text-[#D4AF37]"
          >
            Tools
          </button>
          {isMobileToolsOpen && (
            <div className="flex flex-col items-center space-y-4 text-sm uppercase tracking-[0.4em]">
              {toolLinks.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={handleNavClick}
                  className="text-gray-300 hover:text-[#D4AF37]"
                >
                  {tool.label}
                </Link>
              ))}
            </div>
          )}

          {navLinksAfterTools.map((link) => (
            <Link key={link.href} href={link.href} onClick={handleNavClick} className="hover:text-[#D4AF37]">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
