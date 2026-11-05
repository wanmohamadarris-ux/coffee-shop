"use client";

import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-olive-dark texture-overlay">
      {/* Background image */}
      {!imgError && (
        <Image
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2000&auto=format&fit=crop"
          alt="Barista pouring latte art"
          fill
          priority
          className="object-cover opacity-45"
          onError={() => setImgError(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-olive-dark via-olive-dark/80 to-olive-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-olive-dark via-transparent to-olive-dark/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-36 md:px-8 lg:pt-40">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-olive/40 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Specialty Coffee · Est. 2018
            </span>
          </div>

          <h1 className="font-serif text-5xl font-bold leading-[1.08] text-cream sm:text-6xl lg:text-7xl">
            A Perfect Cup,
            <span className="block text-gold">A Better Day.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/80">
            Small-batch, single-origin coffee roasted with care and brewed by
            hands that love the craft. Step into Ember &amp; Oak — where every
            cup tells a story.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-olive-dark transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              Explore Our Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#story"
              className="group inline-flex items-center gap-3 rounded-full border border-cream/30 px-7 py-3.5 font-semibold text-cream backdrop-blur-sm transition-all hover:border-gold hover:text-gold"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cream/10 transition-colors group-hover:bg-gold/20">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Our Story
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-cream/15 pt-8">
            {[
              ["12+", "Single Origins"],
              ["40k", "Cups Served"],
              ["4.9", "Guest Rating"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-serif text-3xl font-bold text-gold">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-cream/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-cream/40 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
