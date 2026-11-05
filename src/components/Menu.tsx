"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Plus, Check } from "lucide-react";
import clsx from "clsx";
import { CATEGORIES, MENU_ITEMS, CategoryId, MenuItem } from "@/data/menu";
import { useCart } from "./CartContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const { addItem, lines } = useCart();
  const inCart = lines.some((l) => l.id === item.id);

  return (
    <Reveal delay={((index % 3) + 1) as 1 | 2 | 3}>
      <article className="card-zoom group flex h-full flex-col overflow-hidden rounded-2xl border border-olive/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-olive/10">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          {item.tag && (
            <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-olive-dark">
              {item.tag}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-lg font-semibold leading-snug text-olive">
              {item.name}
            </h3>
            <span className="shrink-0 font-semibold text-olive">RM {item.price.toFixed(2)}</span>
          </div>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{item.description}</p>
          <button
            onClick={() => addItem(item)}
            className={clsx(
              "mt-4 inline-flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-all",
              inCart
                ? "bg-sage text-olive-dark"
                : "bg-olive text-cream hover:bg-olive-dark"
            )}
          >
            {inCart ? (
              <>
                <Check className="h-4 w-4" /> In Cart
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" /> Add to Cart
              </>
            )}
          </button>
        </div>
      </article>
    </Reveal>
  );
}

export default function Menu() {
  const [active, setActive] = useState<CategoryId | "all">("all");
  const { openCart, count } = useCart();

  const filtered = useMemo(
    () => (active === "all" ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.category === active)),
    [active]
  );

  return (
    <section id="menu" className="bg-sage-light/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Our Menu"
          title="Crafted With Intention"
          description="From single-origin espresso to ceremonial matcha — every drink is built on quality beans and a little patience."
        />

        {/* Category filters */}
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={clsx(
                "rounded-full border px-5 py-2.5 text-sm font-medium transition-all",
                active === cat.id
                  ? "border-olive bg-olive text-cream shadow-md"
                  : "border-olive/20 bg-white/60 text-ink/70 hover:border-olive/50 hover:text-olive"
              )}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {count > 0 && (
          <Reveal className="mt-12 text-center">
            <button
              onClick={openCart}
              className="rounded-full bg-gold px-8 py-3.5 font-semibold text-olive-dark shadow-lg shadow-gold/25 transition-all hover:bg-gold-light hover:shadow-xl"
            >
              View Cart ({count} {count === 1 ? "item" : "items"})
            </button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
