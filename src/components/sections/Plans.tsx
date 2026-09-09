import { Section, SectionHeading, type Tone } from "./Section";
import QuoteButton from "@/components/ui/QuoteButton";

const plans = [
  {
    name: "Every 6 months",
    tag: "Pets, kids, allergies",
    fit: "Households with shedding pets, toddlers, or anyone with pollen allergies. Soil never reaches the base of the pile.",
  },
  {
    name: "Every 12 months",
    tag: "Most homes",
    fit: "The manufacturer-recommended interval for most carpet warranties. One visit after pollen season resets the whole house.",
    popular: true,
  },
  {
    name: "Every 18 months",
    tag: "Low traffic",
    fit: "Guest rooms, formal living rooms, and homes without pets where the carpet stays clean between visits.",
  },
  {
    name: "Quarterly",
    tag: "Commercial",
    fit: "Offices, medical suites, and retail entries where traffic is constant and the carpet has to look right every morning.",
  },
];

interface PlansProps {
  title?: string;
  intro?: string;
  tone?: Tone;
}

export default function Plans({
  title = "How often should carpet be cleaned?",
  intro = "The right interval depends on who walks on it. Recurring customers keep the same technician and a standing slot, and we remind you when the next visit is due.",
  tone = "cream",
}: PlansProps) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="Maintenance plans" title={title} intro={intro} />
      <div className="grid gap-4 md:grid-cols-4">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-xl border p-6 ${
              p.popular ? "border-forest bg-forest text-white" : "border-line bg-paper"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-6 rounded-full bg-clay px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                Recommended
              </span>
            )}
            <h3 className={`font-display text-2xl font-semibold ${p.popular ? "text-white" : "text-forest"}`}>{p.name}</h3>
            <p className={`mt-1 text-sm font-semibold ${p.popular ? "text-clay-soft" : "text-clay"}`}>{p.tag}</p>
            <p className={`mt-4 text-sm leading-relaxed ${p.popular ? "text-white/80" : "text-muted"}`}>{p.fit}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <QuoteButton label="Ask about recurring rates" variant="forest" />
      </div>
    </Section>
  );
}
