import { Coffee, MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Twitter, label: "X / Twitter", href: "https://x.com" },
];

export default function Footer() {
  return (
    <footer className="bg-olive-dark text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-olive-dark">
                <Coffee className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-xl font-bold">Ember &amp; Oak</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-cream/50">
                  Specialty Coffee
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              Small-batch specialty coffee, artisan pastries, and a warm corner
              of the neighbourhood. A perfect cup, a better day.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-all hover:bg-gold hover:text-olive-dark"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#menu" className="text-sm font-medium text-gold hover:text-gold-light">
                  Order Now →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-cream/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <span>[Café Address — placeholder]</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <span>+60 XX-XXXX XXXX</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <span>hello@emberandoak.example</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Hours
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold/70" />
                <span>Mon – Fri · 7:30 AM – 9:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold/70" />
                <span>Sat – Sun · 8:30 AM – 10:00 PM</span>
              </li>
            </ul>
            <p className="mt-6 rounded-xl border border-gold/25 bg-gold/10 p-4 text-xs leading-relaxed text-cream/70">
              Kitchen closes 30 minutes before closing. Last call for pastries
              is 8:30 PM daily.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Ember &amp; Oak Coffee. All rights reserved.</p>
          <p>Crafted with care in Kuala Lumpur · Placeholder content for demo</p>
        </div>
      </div>
    </footer>
  );
}
