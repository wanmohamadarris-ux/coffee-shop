"use client";

import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const TESTIMONIALS = [
  {
    name: "Aisyah Rahman",
    role: "Regular since 2019",
    text: "The flat white here ruined all other flat whites for me. There's a reason I drive 20 minutes for it every Saturday.",
    rating: 5,
    initials: "AR",
    color: "bg-olive",
  },
  {
    name: "Daniel Lim",
    role: "Remote worker",
    text: "Best Wi-Fi and best coffee in the neighbourhood. The matcha cloud is dangerously good and the staff always learn your order.",
    rating: 5,
    initials: "DL",
    color: "bg-gold-dark",
  },
  {
    name: "Mei Ling Tan",
    role: "Food blogger",
    text: "As someone who reviews cafés for a living, Leaf Coffee is genuinely top-tier. The Basque cheesecake alone deserves five stars.",
    rating: 5,
    initials: "MT",
    color: "bg-sage-dark",
  },
  {
    name: "Hakim Ibrahim",
    role: "First-time visitor",
    text: "Walked in for a quick espresso, ended up staying two hours. The space is gorgeous and the pour over was the best I've had outside of Japan.",
    rating: 4,
    initials: "HI",
    color: "bg-olive-light",
  },
  {
    name: "Priya Nair",
    role: "Neighbourhood regular",
    text: "Cozy, warm, and the cardamom Danish is unreal. My go-to spot for slow mornings and catching up with friends.",
    rating: 5,
    initials: "PN",
    color: "bg-gold",
  },
  {
    name: "Wei Chen",
    role: "Coffee enthusiast",
    text: "They actually tell you where your beans came from. That level of transparency is rare — and the coffee lives up to it.",
    rating: 5,
    initials: "WC",
    color: "bg-sage",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating
              ? "h-4 w-4 fill-gold text-gold"
              : "h-4 w-4 fill-sage-light text-sage-light"
          }
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by the Neighbourhood"
          description="Don't take our word for it — here's what our regulars say."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-olive/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-olive/10">
                <Quote className="absolute right-6 top-6 h-8 w-8 text-gold/40" />
                <Stars rating={t.rating} />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/75">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-olive/10 pt-5">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full font-serif text-sm font-bold text-cream ${t.color}`}
                    aria-hidden
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-semibold text-olive">{t.name}</p>
                    <p className="text-xs text-ink/50">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
