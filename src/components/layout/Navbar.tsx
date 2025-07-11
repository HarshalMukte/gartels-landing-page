'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
// import DarkModeToggle from '../DarkModeToggle';
import { ThemeSwitch } from '../ui/theme-switch-button';


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="w-full fixed top-0 inset-x-0 z-50">
      <header
    className={`transition-all duration-700 pointer-events-auto
      mx-auto  w-full 
      ${scrolled
        ? 'translate-y-8 bg-background/80 shadow-lg border border-foreground/10 backdrop-blur rounded-[50px] py-2 max-w-2xl'
        : 'max-w-7xl py-4'
      }`}
  >
      <div className="px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/home" className="text-xl font-bold text-foreground">
          Gartels
        </Link>

        {/* Navigation Links */}
        <nav className="relative flex space-x-4 text-sm font-medium text-foreground">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-1 rounded-full transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute left-0 top-0 w-full h-full bg-primary/20 rounded-full z-0"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Toggle + CTA */}
        <div className="flex items-center gap-3">
          {/* <DarkModeToggle /> */}
          <ThemeSwitch />
          <Link
            href="/contact"
            className="px-4 py-1 rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
    </div>
  );
}
