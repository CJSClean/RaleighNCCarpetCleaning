import Link from "next/link";
import { services } from "@/lib/data/services";
import { ArrowIcon, ServiceGlyph } from "@/components/ui/Icons";
import { Section, SectionHeading, type Tone } from "./Section";

interface ServicesGridProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Appended to each card title, e.g. "in Cary". */
  locationName?: string;
  tone?: Tone;
  id?: string;
}

export default function ServicesGrid({
  eyebrow = "What we clean",
  title,
  intro,
  locationName,
  tone = "canvas",
  id,
}: ServicesGridProps) {
  return (
    <Section tone={tone} id={id}>
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.key}
            href={s.href}
            className="group flex flex-col rounded-xl border border-line bg-paper p-6 transition-all hover:-translate-y-0.5 hover:border-forest hover:shadow-lg"
          >
            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-moss text-forest group-hover:bg-forest group-hover:text-white">
              <ServiceGlyph icon={s.icon} className="h-6 w-6" />
            </span>
            <h3 className="font-display text-xl font-semibold text-forest">
              {s.name}
              {locationName ? ` in ${locationName}` : ""}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.shortDescription}</p>
            <span className="mt-5 flex items-center gap-1 text-sm font-semibold text-clay">
              See details <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
