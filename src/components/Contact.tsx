"use client";

import { useState, type FormEvent } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  CheckCircle2,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// PLACEHOLDER contact details — replace with real café information before launch.
const PLACEHOLDER = {
  address: "[Café Address — e.g. Lot 12, Jalan Example, Kuala Lumpur]",
  phone: "+60 XX-XXXX XXXX",
  email: "hello@leafcoffee.example",
  whatsapp: "60123456789", // digits only, no '+'
  hours: [
    ["Mon – Fri", "7:30 AM – 9:00 PM"],
    ["Sat – Sun", "8:30 AM – 10:00 PM"],
  ] as const,
};

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Twitter, label: "X / Twitter", href: "https://x.com" },
];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const INITIAL: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Please tell us your name.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.message.trim()) e.message = "A message helps us help you.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    // No backend wired yet — simulate submission and show confirmation.
    setSent(true);
    setForm(INITIAL);
    setTimeout(() => setSent(false), 6000);
  };

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const inputClass =
    "w-full rounded-xl border border-olive/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/30";
  const errorClass = "mt-1.5 text-xs text-red-600";

  return (
    <section id="contact" className="bg-olive-dark py-24 text-cream md:py-32 texture-overlay">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          dark
          eyebrow="Visit Us"
          title="Come Say Hello"
          description="Find us at the corner of good coffee and good company. We'd love to see you."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* Info column */}
          <div className="space-y-6 lg:col-span-2">
            <Reveal>
              <div className="rounded-2xl border border-cream/10 bg-olive/50 p-7 backdrop-blur-sm">
                <h3 className="font-serif text-xl font-semibold text-gold">Find Us</h3>

                <ul className="mt-5 space-y-5">
                  <li className="flex gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-sm font-medium text-cream/50">Address</p>
                      <p className="mt-0.5 text-sm text-cream/90">{PLACEHOLDER.address}</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-sm font-medium text-cream/50">Opening Hours</p>
                      <ul className="mt-1 space-y-1">
                        {PLACEHOLDER.hours.map(([day, time]) => (
                          <li key={day} className="flex justify-between gap-6 text-sm text-cream/90">
                            <span>{day}</span>
                            <span className="text-cream/60">{time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-sm font-medium text-cream/50">Phone</p>
                      <a href={`tel:${PLACEHOLDER.phone.replace(/\s/g, "")}`} className="text-sm text-cream/90 hover:text-gold">
                        {PLACEHOLDER.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-sm font-medium text-cream/50">Email</p>
                      <a href={`mailto:${PLACEHOLDER.email}`} className="text-sm text-cream/90 hover:text-gold">
                        {PLACEHOLDER.email}
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 flex gap-3 border-t border-cream/10 pt-6">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-all hover:bg-gold hover:text-olive-dark"
                    >
                      <s.icon className="h-4.5 w-4.5" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <a
                href={`https://wa.me/${PLACEHOLDER.whatsapp}?text=${encodeURIComponent(
                  "Hi Leaf Coffee! I'd like to place an order."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 font-semibold text-white shadow-lg transition-all hover:brightness-110"
              >
                <MessageCircle className="h-5 w-5" />
                Order via WhatsApp
              </a>
            </Reveal>
          </div>

          {/* Map + form column */}
          <div className="space-y-6 lg:col-span-3">
            {/* Google Maps embed — placeholder location */}
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-cream/10">
                <iframe
                  title="Café location map"
                  src="https://www.google.com/maps?q=Kuala+Lumpur&output=embed"
                  className="h-64 w-full grayscale-[35%] contrast-[1.05] md:h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>

            {/* Contact form */}
            <Reveal delay={1}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-cream/10 bg-olive/50 p-7 backdrop-blur-sm"
              >
                <h3 className="font-serif text-xl font-semibold text-gold">Send a Message</h3>

                {sent && (
                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-gold/15 px-4 py-3 text-sm text-gold">
                    <CheckCircle2 className="h-4 w-4" />
                    Thanks! Your message has been noted — we'll reply soon.
                  </div>
                )}

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cf-name" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-cream/60">
                      Name *
                    </label>
                    <input
                      id="cf-name"
                      type="text"
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your name"
                      className={inputClass}
                    />
                    {errors.name && <p className={errorClass}>{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="cf-email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-cream/60">
                      Email *
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="cf-subject" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-cream/60">
                    Subject
                  </label>
                  <select id="cf-subject" value={form.subject} onChange={set("subject")} className={inputClass}>
                    <option value="">General enquiry</option>
                    <option value="order">Order enquiry</option>
                    <option value="event">Private event / booking</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label htmlFor="cf-message" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-cream/60">
                    Message *
                  </label>
                  <textarea
                    id="cf-message"
                    rows={4}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="How can we help?"
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && <p className={errorClass}>{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 font-semibold text-olive-dark transition-all hover:bg-gold-light"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
