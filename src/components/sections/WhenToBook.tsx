import { Section, SectionHeading, type Tone } from "./Section";
import type { Scenario } from "@/lib/data/types";

export type { Scenario } from "@/lib/data/types";

interface WhenToBookProps {
  title: string;
  intro?: string;
  scenarios: Scenario[];
  tone?: Tone;
}

export default function WhenToBook({ title, intro, scenarios, tone = "moss" }: WhenToBookProps) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="When to book" title={title} intro={intro} />
      <div className="grid gap-4 sm:grid-cols-2">
        {scenarios.map((s) => (
          <div key={s.title} className="rounded-xl border-l-4 border-clay bg-paper p-6 shadow-sm">
            <h3 className="text-base font-semibold text-forest">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
