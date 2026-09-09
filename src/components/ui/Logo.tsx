interface LogoProps {
  tone?: "dark" | "light";
  className?: string;
}

// Oak leaf mark (City of Oaks) with a two-line wordmark.
export default function Logo({ tone = "dark", className = "h-11" }: LogoProps) {
  const ink = tone === "dark" ? "#1f4a3d" : "#ffffff";
  const sub = tone === "dark" ? "#4f5f57" : "#c9d8d1";
  return (
    <svg
      viewBox="0 0 320 56"
      className={`${className} w-auto`}
      role="img"
      aria-label="Raleigh NC Carpet Cleaning"
    >
      <g transform="translate(2 2)">
        <path
          d="M26 2c9 6 15 15 12 27-2 8-7 13-12 19-5-6-10-11-12-19C11 17 17 8 26 2z"
          fill={ink}
        />
        <path d="M26 10v34" stroke="#c8672e" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M26 20c-3-2-6-2-9-1M26 20c3-2 6-2 9-1M26 30c-3-2-6-2-8-1M26 30c3-2 6-2 8-1"
          stroke="#c8672e"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M6 51h40" stroke={ink} strokeWidth="2" strokeLinecap="round" />
      </g>
      <text
        x="64"
        y="27"
        fontFamily="var(--font-bricolage), system-ui, sans-serif"
        fontWeight="700"
        fontSize="24"
        fill={ink}
      >
        Raleigh NC
      </text>
      <text
        x="64"
        y="47"
        fontFamily="var(--font-figtree), system-ui, sans-serif"
        fontWeight="600"
        fontSize="13.5"
        letterSpacing="2.2"
        fill={sub}
      >
        CARPET CLEANING
      </text>
    </svg>
  );
}
