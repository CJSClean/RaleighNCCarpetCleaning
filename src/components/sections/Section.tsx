import type { ReactNode } from "react";

// "sky", "seafoam", and "navy" are kept as aliases so pages ported from the
// sister sites keep working; prefer moss, cream, and forest in new code.
export type Tone = "canvas" | "paper" | "moss" | "cream" | "forest" | "sky" | "seafoam" | "navy";

const toneClass: Record<Tone, string> = {
  canvas: "bg-canvas",
  paper: "bg-paper",
  moss: "bg-moss",
  cream: "bg-cream",
  forest: "bg-forest text-white",
  sky: "bg-moss",
  seafoam: "bg-cream",
  navy: "bg-forest text-white",
};

export function isDarkTone(tone: Tone) {
  return tone === "forest" || tone === "navy";
}

interface SectionProps {
  tone?: Tone;
  id?: string;
  className?: string;
  children: ReactNode;
  narrow?: boolean;
}

export function Section({ tone = "canvas", id, className = "", children, narrow = false }: SectionProps) {
  return (
    <section id={id} className={`${toneClass[tone]} py-16 md:py-20 ${className}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${narrow ? "max-w-4xl" : "max-w-7xl"}`}>{children}</div>
    </section>
  );
}

interface HeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  as = "h2",
}: HeadingProps) {
  const Tag = as;
  const center = align === "center";
  return (
    <div className={`mb-10 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow mb-3 ${light ? "!text-clay-soft" : ""}`}>{eyebrow}</p>}
      <Tag
        className={`font-display rule text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${
          center ? "rule-center" : ""
        } ${light ? "text-white" : "text-forest"}`}
      >
        {title}
      </Tag>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-white/80" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}

/** Long-form copy block: heading on the left, paragraphs on the right. */
export function Prose({
  eyebrow,
  title,
  paragraphs,
  tone = "paper",
}: {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  tone?: Tone;
}) {
  return (
    <Section tone={tone}>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h2 className="font-display rule text-3xl font-semibold leading-tight tracking-tight text-forest sm:text-4xl lg:sticky lg:top-32">
            {title}
          </h2>
        </div>
        <div className="prose-body text-[1.05rem] leading-[1.75] text-ink/85 lg:col-span-8">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
