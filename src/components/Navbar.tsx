"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Moon, Sun, X } from 'lucide-react';

const THEME_KEY = 'theme';

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
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    return 'light';
  });
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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setIsToolsOpen(false);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    window.localStorage.setItem(THEME_KEY, nextTheme);
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-(--nav-bg) backdrop-blur-md border-b border-(--border)">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link
            className="text-2xl font-light tracking-widest text-(--accent) cursor-pointer font-serif"
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
                className={`relative transition-colors duration-300 hover:text-(--accent) ${
                  pathname === link.href ? 'text-(--accent)' : 'text-(--muted)'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-(--accent)" />
                )}
              </Link>
            ))}

            <div className="relative" ref={toolsRef}>
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={isToolsOpen}
                onClick={() => setIsToolsOpen((prev) => !prev)}
                className={`relative transition-colors duration-300 hover:text-(--accent) ${
                  toolsActive ? 'text-(--accent)' : 'text-(--muted)'
                }`}
              >
                Tools
                {toolsActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-(--accent)" />
                )}
              </button>
              {isToolsOpen && (
                <div
                  role="menu"
                  className="absolute top-10 right-0 w-56 border border-(--border) bg-(--panel-strong) shadow-lg"
                >
                  {toolLinks.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={handleNavClick}
                      className={`block px-4 py-3 text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-(--accent) ${
                        pathname === tool.href ? 'text-(--accent)' : 'text-(--muted)'
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
                className={`relative transition-colors duration-300 hover:text-(--accent) ${
                  pathname === link.href ? 'text-(--accent)' : 'text-(--muted)'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-(--accent)" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-(--muted) hover:text-(--accent) transition-colors"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <button className="md:hidden text-(--accent)" onClick={() => setIsMenuOpen(true)}>
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-(--app-bg) z-[60] flex flex-col items-center justify-center space-y-8 text-xl uppercase tracking-widest font-light font-serif animate-in fade-in duration-300">
          <button className="absolute top-10 right-10 text-(--accent)" onClick={() => setIsMenuOpen(false)}>
            <X size={32} strokeWidth={1} />
          </button>

          {navLinksBeforeTools.map((link) => (
            <Link key={link.href} href={link.href} onClick={handleNavClick} className="hover:text-(--accent)">
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => setIsMobileToolsOpen((prev) => !prev)}
            className="hover:text-(--accent)"
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
                  className="text-(--muted) hover:text-(--accent)"
                >
                  {tool.label}
                </Link>
              ))}
            </div>
          )}

          {navLinksAfterTools.map((link) => (
            <Link key={link.href} href={link.href} onClick={handleNavClick} className="hover:text-(--accent)">
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-(--muted) hover:text-(--accent) transition-colors"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
