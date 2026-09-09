import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icons";
import { Section, SectionHeading, type Tone } from "./Section";

interface CityMapGridProps {
  title: string;
  intro?: string;
  cities: { name: string; href: string; mapQuery: string }[];
  tone?: Tone;
}

/** One lazy-loaded Google Maps embed per city, each linking to that city's page. */
export default function CityMapGrid({ title, intro, cities, tone = "paper" }: CityMapGridProps) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="City by city" title={title} intro={intro} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((c) => (
          <div key={c.href} className="overflow-hidden rounded-xl border border-line bg-canvas">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(c.mapQuery)}&output=embed`}
              title={`Map of ${c.mapQuery}`}
              width="100%"
              height="220"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
            <Link
              href={c.href}
              className="group flex items-center justify-between px-4 py-3 text-sm font-semibold text-forest hover:text-clay"
            >
              Carpet cleaning in {c.name}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
