interface LogoProps {
  tone?: "dark" | "light";
  className?: string;
}

// Wave-and-sparkle mark (clean water sweeping across carpet pile) with a
// two-line wordmark. tone="light" is for use on the blue footer/hero.
export default function Logo({ tone = "dark", className = "h-11" }: LogoProps) {
  const ink = tone === "dark" ? "#17408b" : "#ffffff";
  const sub = tone === "dark" ? "#ef6f3c" : "#ffc3a8";
  const disc = tone === "dark" ? "#17408b" : "#ffffff";
  const wave = tone === "dark" ? "#ffffff" : "#17408b";
  return (
    <svg
      viewBox="0 0 320 56"
      className={`${className} w-auto`}
      role="img"
      aria-label="Raleigh NC Carpet Cleaning"
    >
      <circle cx="27" cy="28" r="25" fill={disc} />
      <path
        d="M9 32c6-15 13-15 18-4s12 11 18-5"
        fill="none"
        stroke={wave}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M13 41c5-9 10-9 14-3s9 6 13-3"
        fill="none"
        stroke={wave}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M41 10l1.6 4.4L47 16l-4.4 1.6L41 22l-1.6-4.4L35 16l4.4-1.6z"
        fill="#ef6f3c"
      />
      <text
        x="64"
        y="27"
        fontFamily="var(--font-bricolage), system-ui, sans-serif"
        fontWeight="700"
        fontSize="24"
        letterSpacing="-0.3"
        fill={ink}
      >
        Raleigh NC
      </text>
      <text
        x="65"
        y="47"
        fontFamily="var(--font-figtree), system-ui, sans-serif"
        fontWeight="700"
        fontSize="12.5"
        letterSpacing="3"
        fill={sub}
      >
        CARPET CLEANING
      </text>
    </svg>
  );
}
