"use client";

import { useState } from "react";
import { comparison } from "@/lib/data/process";
import { CheckIcon } from "@/components/ui/Icons";
import { Section, SectionHeading } from "./Section";

type Col = "standard" | "deep" | "pet";
const cols: { key: Col; label: string }[] = [
  { key: "standard", label: "Standard" },
  { key: "deep", label: "Deep clean" },
  { key: "pet", label: "Pet treatment" },
];

export default function ComparisonTable() {
  const [group, setGroup] = useState(comparison[0].group);
  const active = comparison.find((c) => c.group === group)!;

  return (
    <Section tone="canvas">
      <SectionHeading
        eyebrow="Step by step"
        title="What each level of service includes"
        intro="Every technician works from this list. Pick a stage to compare a standard cleaning, a deep cleaning, and a pet treatment."
      />
      <div className="mb-5 flex flex-wrap gap-2">
        {comparison.map((c) => (
          <button
            key={c.group}
            onClick={() => setGroup(c.group)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              c.group === group ? "border-forest bg-forest text-white" : "border-line bg-paper text-ink hover:border-forest"
            }`}
          >
            {c.group}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-xl border border-line bg-paper">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-canvas">
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-forest">{active.group}</th>
              {cols.map((c) => (
                <th key={c.key} className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-forest">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {active.rows.map((row) => (
              <tr key={row.task}>
                <td className="px-5 py-3 text-ink/85">{row.task}</td>
                {cols.map((c) => {
                  const v = row[c.key];
                  return (
                    <td key={c.key} className="px-4 py-3 text-center">
                      {v === true ? (
                        <CheckIcon className="mx-auto h-4 w-4 text-clay" />
                      ) : v === "n/a" ? (
                        <span className="text-xs text-muted">n/a</span>
                      ) : (
                        <span className="text-muted/50">&mdash;</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-5 text-sm text-muted">
        <span className="font-semibold text-ink">Add-ons for any visit:</span> fiber protector, deodorizer, and stair cleaning. Each is quoted as a set line item when you book.
      </p>
    </Section>
  );
}
