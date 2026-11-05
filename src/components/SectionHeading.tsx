import Reveal from "./Reveal";
import clsx from "clsx";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, description, dark, align = "center" }: Props) {
  return (
    <Reveal
      className={clsx(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <p
        className={clsx(
          "text-xs font-semibold uppercase tracking-[0.3em]",
          dark ? "text-gold" : "text-olive"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={clsx(
          "mt-3 font-serif text-4xl md:text-5xl font-semibold leading-tight",
          dark ? "text-cream" : "text-olive"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={clsx("mt-4 text-base leading-relaxed", dark ? "text-sage-light/80" : "text-ink/70")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
