"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=900&auto=format&fit=crop",
    alt: "Barista pouring latte art",
    caption: "Latte Art in Progress",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=900&auto=format&fit=crop",
    alt: "Fresh roasted coffee beans",
    caption: "Freshly Roasted Beans",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=900&auto=format&fit=crop",
    alt: "Café interior seating",
    caption: "The Reading Corner",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=900&auto=format&fit=crop",
    alt: "Coffee preparation close-up",
    caption: "Slow Bar Method",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=900&auto=format&fit=crop",
    alt: "Guests enjoying coffee",
    caption: "Golden Hour Regulars",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=900&auto=format&fit=crop",
    alt: "Espresso being pulled",
    caption: "Pulling the Perfect Shot",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=900&auto=format&fit=crop",
    alt: "Barista working at counter",
    caption: "Behind the Bar",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=900&auto=format&fit=crop",
    alt: "Heart latte art",
    caption: "A Little Heart",
    tall: true,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="A Day at Ember & Oak"
          description="The beans, the bar, the people — here's what a morning here looks like."
        />

        {/* Masonry-style asymmetric grid */}
        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {PHOTOS.map((photo, i) => (
            <Reveal key={photo.src} delay={((i % 3) + 1) as 1 | 2 | 3} className="break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-2xl">
                <div
                  className={
                    photo.tall
                      ? "relative aspect-[3/4]"
                      : "relative aspect-[4/3]"
                  }
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-4 left-4 translate-y-2 font-serif text-sm italic text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
