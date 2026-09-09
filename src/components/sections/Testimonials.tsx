import { testimonials } from "@/lib/data/testimonials";
import { StarIcon } from "@/components/ui/Icons";
import { Section, SectionHeading, type Tone } from "./Section";

interface TestimonialsProps {
  title?: string;
  /** Quotes whose area or service includes this text (case-insensitive) sort first. */
  filter?: string;
  count?: number;
  tone?: Tone;
}

export default function Testimonials({
  title = "What neighbors say after the first visit",
  filter,
  count = 3,
  tone = "canvas",
}: TestimonialsProps) {
  let picks = testimonials;
  if (filter) {
    const f = filter.toLowerCase();
    const matched = testimonials.filter(
      (t) => t.area.toLowerCase().includes(f) || t.service.toLowerCase().includes(f)
    );
    const rest = testimonials.filter((t) => !matched.includes(t));
    picks = [...matched, ...rest];
  }
  picks = picks.slice(0, count);

  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="Reviews" title={title} />
      <div className="grid gap-5 md:grid-cols-3">
        {picks.map((t) => (
          <figure key={t.name} className="flex flex-col rounded-xl border border-line bg-paper p-6">
            <span className="flex text-amber-400">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink/85">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-line pt-4 text-sm">
              <span className="block font-semibold text-forest">{t.name}</span>
              <span className="block text-muted">
                {t.area} &middot; {t.service}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
