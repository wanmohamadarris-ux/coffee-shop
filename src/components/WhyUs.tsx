"use client";

import { Bean, Flame, Award, Armchair, Wheat } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const REASONS = [
  {
    icon: Bean,
    title: "Premium Coffee Beans",
    text: "Specialty-grade beans, scored 84+ by certified cuppers, sourced from farms we visit personally.",
  },
  {
    icon: Flame,
    title: "Freshly Brewed Every Day",
    text: "Nothing sits in a warmer or a pot. Every drink is brewed to order, seconds before it reaches you.",
  },
  {
    icon: Award,
    title: "Expert Baristas",
    text: "Our team competes nationally — and still remembers your usual order by the second visit.",
  },
  {
    icon: Armchair,
    title: "Cozy Atmosphere",
    text: "Warm wood, soft light, curated playlists. A space designed for lingering, not rushing.",
  },
  {
    icon: Wheat,
    title: "Quality Ingredients",
    text: "Local dairy, stone-milled matcha, organic flour for pastries. If we wouldn't drink it, we won't serve it.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-sage-light/25 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Why Leaf Coffee"
          title="The Details Make the Difference"
          description="Anyone can serve coffee. We obsess over the hundred small decisions that turn a drink into a ritual."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal
              key={r.title}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-olive/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-olive/10">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/15 transition-transform duration-500 group-hover:scale-150" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-olive text-gold transition-colors group-hover:bg-gold group-hover:text-olive-dark">
                  <r.icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 font-serif text-xl font-semibold text-olive">{r.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink/65">{r.text}</p>
              </div>
            </Reveal>
          ))}

          {/* CTA card fills remaining grid space visually */}
          <Reveal delay={3}>
            <a
              href="#menu"
              className="group flex h-full min-h-[220px] flex-col justify-between rounded-2xl bg-olive p-7 text-cream transition-all duration-300 hover:bg-olive-dark"
            >
              <p className="font-serif text-2xl font-semibold leading-snug">
                Taste the difference
                <span className="block text-gold">yourself.</span>
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                Browse the menu
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
