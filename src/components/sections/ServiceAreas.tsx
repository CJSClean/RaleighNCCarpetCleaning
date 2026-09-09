import Link from "next/link";
import { Section, SectionHeading, isDarkTone, type Tone } from "./Section";

interface ServiceAreasProps {
  title: string;
  intro?: string;
  areas: { name: string; href: string }[];
  tone?: Tone;
  id?: string;
}

export default function ServiceAreas({ title, intro, areas, tone = "canvas", id }: ServiceAreasProps) {
  const light = isDarkTone(tone);
  return (
    <Section tone={tone} id={id}>
      <SectionHeading eyebrow="Service areas" title={title} intro={intro} light={light} />
      <ul className="flex flex-wrap gap-2.5">
        {areas.map((a) => (
          <li key={a.href}>
            <Link
              href={a.href}
              className={`inline-flex items-center justify-center rounded-full border px-5 py-2 text-center text-sm font-medium transition-colors ${
                light
                  ? "border-white/25 text-white hover:bg-white hover:text-forest"
                  : "border-line bg-paper text-ink hover:border-forest hover:text-forest"
              }`}
            >
              {a.name}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
