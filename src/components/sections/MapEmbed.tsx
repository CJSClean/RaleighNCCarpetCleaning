import { Section, SectionHeading, type Tone } from "./Section";

interface MapEmbedProps {
  query: string;
  title: string;
  intro?: string;
  tone?: Tone;
}

export default function MapEmbed({ query, title, intro, tone = "canvas" }: MapEmbedProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="On the map" title={title} intro={intro} />
      <div className="overflow-hidden rounded-xl border border-line">
        <iframe
          src={src}
          title={`Map of ${query}`}
          width="100%"
          height="420"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full"
        />
      </div>
    </Section>
  );
}
