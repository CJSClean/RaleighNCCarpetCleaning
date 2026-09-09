import { Section, SectionHeading, type Tone } from "./Section";
import QuoteButton from "@/components/ui/QuoteButton";

const steps = [
  {
    title: "Tell us the rooms",
    text: "How many areas, any stairs, pets, or stains you want treated, and your zip code. Photos help if something needs extra attention.",
  },
  {
    title: "Get a firm quote",
    text: "A coordinator replies the same day with an upfront price and open time slots. Add-ons like pet treatment or fiber protector are listed as line items, not sprung on you at the door.",
  },
  {
    title: "We clean, you inspect",
    text: "The technician walks the rooms with you, confirms the price, cleans, and walks them again with you before leaving. Not right? We re-treat within seven days at no charge.",
  },
];

export default function HowItWorks({ tone = "moss" }: { tone?: Tone }) {
  return (
    <Section tone={tone}>
      <div className="grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="How it works"
            title="Three steps to a booked cleaning"
            intro="Most first-time customers go from quote to confirmed appointment in under ten minutes."
          />
          <QuoteButton />
        </div>
        <ol className="grid gap-4 sm:grid-cols-3 lg:col-span-8">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-xl border border-line bg-paper p-6 pt-8">
              <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-clay text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="text-base font-semibold text-forest">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
