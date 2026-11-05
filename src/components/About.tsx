"use client";

import Image from "next/image";
import { Coffee, Leaf, HeartHandshake, Timer } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const VALUES = [
  {
    icon: Coffee,
    title: "Roasted in Small Batches",
    text: "Every bean is roasted weekly in-house, never sitting on a shelf.",
  },
  {
    icon: Leaf,
    title: "Direct Trade",
    text: "We buy from farms we know by name — fair prices, better coffee.",
  },
  {
    icon: HeartHandshake,
    title: "Brewed with Care",
    text: "Every cup is pulled, poured and presented like it matters. Because it does.",
  },
  {
    icon: Timer,
    title: "Fresh, Always",
    text: "Milk steamed to order, pastries baked at dawn, nothing held over.",
  },
];

export default function About() {
  return (
    <section id="story" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Images */}
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-olive/15">
              <Image
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop"
                alt="Cozy café interior with warm lighting"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:block md:-right-8">
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop"
                  alt="Barista at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -left-4 top-8 rounded-full bg-gold px-5 py-3 font-serif text-sm font-semibold text-olive-dark shadow-lg md:-left-8">
              Est. 2018 · Kuala Lumpur
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="More Than Just Coffee."
              description="Ember & Oak began with a simple belief — that a great cup of coffee can slow down a day, warm a room, and bring people together. What started as a tiny cart by the river has grown into a neighbourhood café, but the obsession hasn't changed: coffee, done properly."
            />

            <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-ink/70">
              <p>
                We source beans from smallholder farms across Asia and Latin America,
                roast them in micro-batches, and brew to order — never from a pot
                that's been sitting for hours. Every pastry is made fresh each
                morning, and every drink is finished by a barista who actually
                cares how it tastes.
              </p>
              <p>
                Whether you're here for a quick espresso on the go or an hour at
                the window seat with a book, you'll find the same thing: coffee
                treated with the respect it deserves.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={(i % 2) as 1 | 2}>
                  <div className="group flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-light/60 text-olive transition-colors group-hover:bg-gold group-hover:text-olive-dark">
                      <v.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-olive">{v.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink/60">{v.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
