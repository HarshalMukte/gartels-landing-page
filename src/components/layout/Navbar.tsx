"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeSwitch } from "../ui/theme-switch-button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); // close on route change
  }, [pathname]);

  return (
    <div className="w-full fixed top-0 inset-x-0 z-50">
      <header
        className={`transition-all duration-700 pointer-events-auto mx-auto w-full px-6 backdrop-blur ${
          scrolled 
            ? "translate-y-0 md:translate-y-8 bg-background/80 shadow-lg border border-foreground/10 backdrop-blur py-2 max-w-2xl"
            : "max-w-7xl py-4"
        } ${isMobileMenuOpen ? "h-dvh" : " md:rounded-[50px]"}`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-foreground tracking-tight">
            Gartels
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4 text-sm font-medium text-foreground">
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
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        duration: 0.4,
                      }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeSwitch />
            <Link
              href="/contact"
              className="px-4 py-1 rounded-md border border-primary text-primary dark:hover:text-black hover:bg-primary hover:text-white transition"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md border border-border text-foreground"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 px-6 text-sm font-medium text-foreground backdrop-blur-xl rounded-xl shadow-xl border border-border bg-background/80 py-4 space-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-md hover:bg-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between px-4 pt-4 border-t border-border">
              <ThemeSwitch />
              <Link
                href="/contact"
                className="text-primary hover:underline text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Call
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      </header>

    </div>
  );
}
