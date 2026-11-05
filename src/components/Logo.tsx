type LogoProps = {
  /** Use light text colors (for dark backgrounds like the hero/footer). */
  light?: boolean;
  className?: string;
  /** Hide the wordmark, show only the mark. */
  markOnly?: boolean;
};

export default function Logo({ light = false, className = "", markOnly = false }: LogoProps) {
  const wordColor = light ? "text-cream" : "text-olive";
  const subColor = light ? "text-cream/60" : "text-olive/60";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Mark: coffee cup with a leaf */}
      <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" aria-hidden="true">
        {/* Leaf */}
        <path
          d="M24 3c5.5 4.5 5.5 11.5 0 16-5.5-4.5-5.5-11.5 0-16z"
          fill="#EFC475"
        />
        <path
          d="M24 6.5v10"
          stroke="#5C5B2B"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Cup body */}
        <path
          d="M10 27h26v2.5a10.5 10.5 0 0 1-10.5 10.5h-5A10.5 10.5 0 0 1 10 29.5V27z"
          fill="none"
          stroke={light ? "#FAF7F0" : "#5C5B2B"}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        {/* Handle */}
        <path
          d="M36 29h3.5a4.5 4.5 0 0 1 0 9H36"
          fill="none"
          stroke={light ? "#FAF7F0" : "#5C5B2B"}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {/* Saucer */}
        <path
          d="M14 44.5h20"
          stroke={light ? "#FAF7F0" : "#5C5B2B"}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>

      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span className={`font-serif text-xl font-bold tracking-wide ${wordColor}`}>
            Leaf<span className="text-gold"> Coffee</span>
          </span>
          <span className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.25em] ${subColor}`}>
            Specialty Coffee
          </span>
        </span>
      )}
    </span>
  );
}
