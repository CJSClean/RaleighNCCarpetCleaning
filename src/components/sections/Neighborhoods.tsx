import { PinIcon } from "@/components/ui/Icons";
import { Section, SectionHeading, type Tone } from "./Section";

interface NeighborhoodsProps {
  title: string;
  intro?: string;
  items: string[];
  zipCodes?: string[];
  tone?: Tone;
}

export default function Neighborhoods({ title, intro, items, zipCodes, tone = "paper" }: NeighborhoodsProps) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="Where we work" title={title} intro={intro} />
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((n) => (
          <li key={n} className="flex items-center gap-2 rounded-lg border border-line bg-canvas px-4 py-3 text-sm font-medium text-ink">
            <PinIcon className="h-4 w-4 shrink-0 text-clay" />
            {n}
          </li>
        ))}
      </ul>
      {zipCodes && zipCodes.length > 0 && (
        <p className="mt-6 text-sm text-muted">
          Zip codes served: <span className="font-medium text-ink">{zipCodes.join(", ")}</span>
        </p>
      )}
    </Section>
  );
}
