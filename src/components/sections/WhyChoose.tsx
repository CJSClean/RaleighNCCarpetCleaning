import { Section, SectionHeading, type Tone } from "./Section";
import type { Benefit } from "@/lib/data/types";

export type { Benefit } from "@/lib/data/types";

interface WhyChooseProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  benefits: Benefit[];
  tone?: Tone;
}

export default function WhyChoose({
  eyebrow = "Why us",
  title,
  intro,
  benefits,
  tone = "paper",
}: WhyChooseProps) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
      <ol className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        {benefits.map((b, i) => (
          <li key={b.title} className="flex gap-5">
            <span className="font-display shrink-0 text-4xl font-semibold leading-none text-clay/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-forest">{b.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{b.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
