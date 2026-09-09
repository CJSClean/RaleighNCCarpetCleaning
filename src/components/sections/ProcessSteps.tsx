import { processSteps } from "@/lib/data/process";
import { Section, SectionHeading, type Tone } from "./Section";

interface ProcessStepsProps {
  title: string;
  intro?: string;
  tone?: Tone;
  /** Show only the first N steps (home page teaser). */
  limit?: number;
}

export default function ProcessSteps({ title, intro, tone = "paper", limit }: ProcessStepsProps) {
  const steps = limit ? processSteps.slice(0, limit) : processSteps;
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="Our process" title={title} intro={intro} />
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.name} className="relative rounded-xl border border-line bg-canvas p-6 pt-8">
            <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-forest text-sm font-bold text-white">
              {i + 1}
            </span>
            <h3 className="text-base font-semibold text-forest">{s.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
