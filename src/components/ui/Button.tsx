import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "clay" | "forest" | "outline" | "ghost-light";

const styles: Record<Variant, string> = {
  clay:
    "bg-clay text-white hover:bg-clay-dark shadow-[0_8px_20px_-10px_rgba(239,111,60,0.7)]",
  forest: "bg-forest text-white hover:bg-forest-soft",
  outline: "border border-line bg-paper text-forest hover:border-forest",
  "ghost-light": "border border-white/30 text-white hover:bg-white/10",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-colors";

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({
  href,
  variant = "clay",
  className = "",
  children,
  external,
}: CommonProps & { href: string; external?: boolean }) {
  const cls = `${baseClass} ${styles[variant]} ${className}`;
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "clay",
  className = "",
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${baseClass} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
