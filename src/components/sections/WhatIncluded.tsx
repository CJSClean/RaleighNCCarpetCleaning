import Link from "next/link";
import { CheckIcon } from "@/components/ui/Icons";
import { Section, SectionHeading, type Tone } from "./Section";
import type { IncludedSection } from "@/lib/data/types";

interface WhatIncludedProps {
  title: string;
  intro?: string;
  sections: IncludedSection[];
  notIncluded?: string[];
  tone?: Tone;
}

export default function WhatIncluded({ title, intro, sections, notIncluded, tone = "paper" }: WhatIncludedProps) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="What is included" title={title} intro={intro} />
      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((s) => (
          <div key={s.title} className="rounded-xl border border-line bg-canvas p-6">
            <h3 className="font-display text-xl font-semibold text-forest">{s.title}</h3>
            <ul className="mt-4 grid gap-2">
              {s.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink/85">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {notIncluded && notIncluded.length > 0 && (
        <div className="mt-8 rounded-xl border border-dashed border-line p-6">
          <h3 className="text-base font-semibold text-forest">Not part of the standard service</h3>
          <p className="mt-1 text-sm text-muted">
            Some of these are separate services or optional add-ons; others are outside what we do. Ask when you book.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {notIncluded.map((n) => (
              <li key={n} className="rounded-full bg-canvas px-3 py-1.5 text-xs font-medium text-muted">
                {n}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className="mt-6 text-sm text-muted">
        See every step, and how a standard clean compares with a deep clean and pet treatment, on our{" "}
        <Link href="/our-process" className="font-semibold text-clay hover:underline">
          process page
        </Link>
        .
      </p>
    </Section>
  );
}
