"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Soluciones", href: "#solutions" },
  { label: "Cómo", href: "#process" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // If we land on "/" carrying a hash (e.g. coming from another page),
  // scroll to that section once the home page's content is mounted.
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash;
      const t = setTimeout(() => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);

    if (pathname !== "/") {
      // Sections like #solutions only exist on the homepage —
      // navigate there first; the effect above handles the scroll.
      router.push(`/${href}`);
      return;
    }

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
        <nav className={`py-3 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-background/90 backdrop-blur-md hairline-border border-b' : ''
    }`}>
      <div className="max-w-350 mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <button
            onClick={() => (pathname === '/' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : router.push('/'))}
            className="flex items-center cursor-pointer"
          >
            <span className="block dark:hidden">
              <Image src="/brand/duna-logo-horizontal.svg" alt="Duna" width={116} height={40} priority />
            </span>
            <span className="hidden dark:block">
              <Image src="/brand/duna-logo-horizontal-negative.svg" alt="Duna" width={116} height={40} priority />
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            <ThemeToggle />

            <button
              onClick={() => scrollTo('#contact')}
              className="font-mono text-[11px] tracking-widest uppercase px-5 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
            >
              Hablemos
            </button>
          </div>

          {/* Mobile: Theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 cursor-pointer">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background hairline-border border-b overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="block font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#contact')}
                className="block font-mono text-xs tracking-widest uppercase px-5 py-2 border border-primary text-primary w-full text-center"
              >
                Hablemos
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;