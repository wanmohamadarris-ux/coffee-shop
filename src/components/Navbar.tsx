"use client";

import { useEffect, useState } from "react";
import { Coffee, Menu as MenuIcon, X, ShoppingBag } from "lucide-react";
import clsx from "clsx";
import { useCart } from "./CartContext";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(92,91,43,0.12)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 md:px-8" aria-label="Main navigation">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5">
          <span
            className={clsx(
              "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
              scrolled ? "bg-olive text-gold" : "bg-cream/15 text-gold backdrop-blur-sm"
            )}
          >
            <Coffee className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={clsx(
                "font-serif text-xl font-bold tracking-wide transition-colors",
                scrolled ? "text-olive" : "text-cream"
              )}
            >
              Ember &amp; Oak
            </span>
            <span
              className={clsx(
                "text-[10px] font-medium uppercase tracking-[0.25em] transition-colors",
                scrolled ? "text-olive/60" : "text-cream/70"
              )}
            >
              Specialty Coffee
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={clsx(
                  "nav-link text-sm font-medium tracking-wide transition-colors",
                  scrolled ? "text-ink/80 hover:text-olive" : "text-cream/90 hover:text-gold"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={openCart}
            aria-label="Open cart"
            className={clsx(
              "relative flex h-10 w-10 items-center justify-center rounded-full transition-colors",
              scrolled
                ? "bg-olive/10 text-olive hover:bg-olive hover:text-gold"
                : "bg-cream/15 text-cream backdrop-blur-sm hover:bg-cream/25"
            )}
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[11px] font-bold text-olive-dark">
                {count}
              </span>
            )}
          </button>

          <a
            href="#menu"
            className={clsx(
              "hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all md:inline-block",
              scrolled
                ? "bg-olive text-cream hover:bg-olive-dark"
                : "bg-gold text-olive-dark hover:bg-gold-light"
            )}
          >
            Order Now
          </a>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className={clsx(
              "flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
              scrolled ? "text-olive" : "text-cream"
            )}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={clsx(
          "fixed inset-0 top-[72px] z-40 bg-olive-dark/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={clsx(
          "fixed inset-x-0 top-[72px] z-50 origin-top bg-cream shadow-xl transition-all duration-300 lg:hidden",
          mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col px-6 py-6">
          {LINKS.map((link) => (
            <li key={link.href} className="border-b border-olive/10 last:border-0">
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-4 font-serif text-2xl text-olive transition-colors hover:text-gold-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href="#menu"
              onClick={() => setMobileOpen(false)}
              className="block rounded-full bg-gold py-3.5 text-center font-semibold text-olive-dark"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
