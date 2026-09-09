"use client";

import { useState } from "react";
import { ChevronIcon } from "@/components/ui/Icons";
import { Section, SectionHeading, type Tone } from "./Section";
import type { FAQItem } from "@/lib/data/types";

export type { FAQItem } from "@/lib/data/types";

interface FAQProps {
  title: string;
  intro?: string;
  items: FAQItem[];
  tone?: Tone;
}

export default function FAQ({ title, intro, items, tone = "paper" }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section tone={tone}>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="Questions" title={title} intro={intro} />
        </div>
        <div className="divide-y divide-line rounded-xl border border-line bg-paper lg:col-span-8">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-[0.95rem] font-semibold text-forest">{item.question}</span>
                  <ChevronIcon
                    className={`h-4 w-4 shrink-0 text-clay transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
