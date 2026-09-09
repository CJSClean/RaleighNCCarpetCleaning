import type { ServiceIcon } from "@/lib/data/types";

type Props = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function PhoneIcon({ className = "w-5 h-5" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5" }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function ClockIcon({ className = "w-5 h-5" }: Props) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function PinIcon({ className = "w-5 h-5" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s-6-5.3-6-11a6 6 0 1 1 12 0c0 5.7-6 11-6 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function CheckIcon({ className = "w-5 h-5" }: Props) {
  return (
    <svg {...base} strokeWidth={2.2} className={className}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function ChevronIcon({ className = "w-4 h-4" }: Props) {
  return (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowIcon({ className = "w-4 h-4" }: Props) {
  return (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export function ShieldIcon({ className = "w-6 h-6" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6l-8-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function DropletIcon({ className = "w-6 h-6" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
      <path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" />
    </svg>
  );
}

export function StarIcon({ className = "w-4 h-4" }: Props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className={className}>
      <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L10 14.9l-5.3 2.8 1.1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
    </svg>
  );
}

export function MenuIcon({ className = "w-6 h-6" }: Props) {
  return (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "w-6 h-6" }: Props) {
  return (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function ServiceGlyph({ icon, className = "w-8 h-8" }: { icon: ServiceIcon; className?: string }) {
  switch (icon) {
    case "carpet":
      // Rolled carpet with pile lines
      return (
        <svg {...base} className={className}>
          <path d="M3 17h13" />
          <path d="M3 17c0-3 1.5-4.5 4-4.5h9" />
          <circle cx="18" cy="15" r="3" />
          <path d="M18 15h.01" />
          <path d="M5 9h9M5 6h9" />
        </svg>
      );
    case "sofa":
      return (
        <svg {...base} className={className}>
          <path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
          <path d="M3 13a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2h10v-2a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5H3z" />
          <path d="M5 18v2m14-2v2" />
        </svg>
      );
    case "rug":
      return (
        <svg {...base} className={className}>
          <rect x="5" y="4" width="14" height="16" rx="1" />
          <path d="M8 7h8M8 17h8" />
          <path d="M12 10.5 13.5 12 12 13.5 10.5 12z" />
          <path d="M5 4 3 3m2 18-2 1M19 4l2-1m-2 18 2 1" />
        </svg>
      );
    case "paw":
      return (
        <svg {...base} className={className}>
          <ellipse cx="12" cy="15.5" rx="4" ry="3.5" />
          <circle cx="7" cy="10" r="1.7" />
          <circle cx="17" cy="10" r="1.7" />
          <circle cx="9.5" cy="6.5" r="1.7" />
          <circle cx="14.5" cy="6.5" r="1.7" />
        </svg>
      );
    case "tile":
      return (
        <svg {...base} className={className}>
          <rect x="4" y="4" width="7" height="7" rx="0.5" />
          <rect x="13" y="4" width="7" height="7" rx="0.5" />
          <rect x="4" y="13" width="7" height="7" rx="0.5" />
          <rect x="13" y="13" width="7" height="7" rx="0.5" />
        </svg>
      );
    case "office":
      return (
        <svg {...base} className={className}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M8 7h2m4 0h2M8 11h2m4 0h2M8 15h2m4 0h2M10 21v-3h4v3" />
        </svg>
      );
  }
}

export function InstagramIcon({ className = "w-5 h-5" }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-5 h-5" }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7v.5M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </svg>
  );
}

export function XIcon({ className = "w-5 h-5" }: Props) {
  return (
    <svg {...base} strokeWidth={1.8} className={className}>
      <path d="M4 4l16 16M20 4 4 20" />
    </svg>
  );
}

export function GoogleIcon({ className = "w-5 h-5" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M20.4 12.4a8.4 8.4 0 1 1-2.3-5.9" />
      <path d="M20.5 12.4h-8.1" />
    </svg>
  );
}

export function NextdoorIcon({ className = "w-5 h-5" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 11.3 12 4.6l8.5 6.7" />
      <path d="M6.2 10.7v8.2a.6.6 0 0 0 .6.6h10.4a.6.6 0 0 0 .6-.6v-8.2" />
    </svg>
  );
}

export function YelpIcon({ className = "w-5 h-5" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M11 3v9l-4-1.5M9.5 15 5 17M13.5 13.5 19 12M13 16.5l4 4M12.5 10.5 16 5" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-5 h-5" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M14 8h2.5V5H14a3.5 3.5 0 0 0-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V8.8c0-.5.3-.8.5-.8z" />
    </svg>
  );
}
