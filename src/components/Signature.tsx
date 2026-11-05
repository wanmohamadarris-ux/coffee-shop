"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SIGNATURE_DRINKS } from "@/data/menu";
import { useCart } from "./CartContext";
import Reveal from "./Reveal";

export default function Signature() {
  const { addItem } = useCart();

  return (
    <section className="relative overflow-hidden bg-olive-dark py-24 md:py-32 texture-overlay">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-sage/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            House Signatures
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-cream md:text-5xl">
            Drinks With a <span className="italic text-gold">Story</span> to Tell
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/70">
            These aren't on the menu everywhere — they're ours. Born in our
            kitchen, perfected over hundreds of tastings, and impossible to
            find anywhere else.
          </p>
        </Reveal>

        <div className="mt-14 space-y-6">
          {SIGNATURE_DRINKS.map((drink, i) => (
            <Reveal key={drink.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article className="group grid overflow-hidden rounded-3xl border border-cream/10 bg-olive/40 backdrop-blur-sm transition-all duration-500 hover:border-gold/40 md:grid-cols-[1fr_1.4fr]">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[280px]">
                  <Image
                    src={drink.image}
                    alt={drink.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/60 to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-7 md:p-10">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-gold" />
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                      Signature No. {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-3xl font-semibold text-cream md:text-4xl">
                    {drink.name}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-cream/70">
                    {drink.description}
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <span className="font-serif text-2xl font-bold text-gold">
                      RM {drink.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addItem(drink)}
                      className="group/btn inline-flex items-center gap-2 rounded-full border border-gold/60 px-6 py-2.5 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-olive-dark"
                    >
                      Add to Order
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
