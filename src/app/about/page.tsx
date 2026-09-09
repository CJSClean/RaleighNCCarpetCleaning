import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import MapEmbed from "@/components/sections/MapEmbed";
import TrustStrip from "@/components/sections/TrustStrip";
import { Section, SectionHeading } from "@/components/sections/Section";
import ServiceAreas from "@/components/sections/ServiceAreas";
import CTABand from "@/components/sections/CTABand";
import { CheckIcon } from "@/components/ui/Icons";
import { allServiceAreas } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";
import { generateAboutPageSchema, generateBreadcrumbSchema, SchemaScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Raleigh NC Carpet Cleaning",
  description:
    "Locally operated carpet, upholstery, rug, and tile cleaning in Raleigh, NC, with truck-mounted extraction, walkthrough pricing, and a seven-day guarantee.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const stats = [
  { value: "Same-week", label: "appointments across the Triangle" },
  { value: "7 days", label: "open every week, morning to evening" },
  { value: "Seven-day", label: "satisfaction guarantee on every job" },
  { value: "Insured", label: "technicians on every visit" },
];

const values = [
  {
    title: "Identify the fiber first",
    text: "Nylon, polyester, olefin, wool, and blends all respond differently to heat and chemistry. Every technician is trained to identify the fiber on the walkthrough and adjust the process before the first pass, not after something goes wrong.",
  },
  {
    title: "Say the price on the walkthrough",
    text: "The technician walks the rooms, counts the areas, checks the condition, and confirms the price before any hose comes off the truck. The number you hear then is the number on the invoice.",
  },
  {
    title: "Rinse it all the way out",
    text: "Residue left in the pile attracts soil and makes carpet look dirty again within weeks. Truck-mounted hot water extraction rinses the pre-treatment out and recovers the water immediately, so the carpet dries clean instead of sticky.",
  },
  {
    title: "Own the result",
    text: "If a spot returns or an area does not meet the standard within seven days, tell us and we come back to re-treat it at no charge. That is what our seven-day satisfaction guarantee means. No forms, no arguing.",
  },
];

const promises = [
  "Insured technicians on every job",
  "Truck-mounted hot water extraction, not a rental machine",
  "Fiber identification and a confirmed price before equipment comes in",
  "Air movers and furniture tabs left in place to speed drying",
  "A coordinator you can actually reach, seven days a week",
];

export default function AboutPage() {
  return (
    <>
      <SchemaScript
        schema={[
          generateAboutPageSchema(),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
          ]),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow="About us"
          title="About Raleigh NC Carpet Cleaning"
          subtitle="We started Raleigh NC Carpet Cleaning because too many carpet cleaners in the Triangle quoted one price on the phone and another at the door, ran rental-grade equipment, and left carpet damp for days. We wanted to run the company we would hire ourselves."
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ]}
        />
        <TrustStrip />

        <Section tone="paper">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Our story" title="Built in Raleigh for Carolina carpet" />
            </div>
            <div className="prose-body text-[1.05rem] leading-[1.75] text-ink/85 lg:col-span-7">
              <p>
                We are a locally operated carpet cleaning company based in Raleigh. Our technicians start their day
                here and work across Wake County, into Durham, and down to Clayton in Johnston County. Most of what we
                clean is residential: bedrooms, stairs, bonus rooms, sofas, area rugs, and the tile in kitchens and
                bathrooms. We also handle offices, medical suites, and churches after hours.
              </p>
              <p>
                Working in the Triangle taught us what the carpet here actually needs. Spring pollen coats every entry,
                summer humidity keeps carpet from drying on its own, and red clay tracks in from yards and construction
                sites all year. Newer subdivisions have builder-grade polyester that mats in traffic lanes. Older
                neighborhoods inside the Beltline and around Duke have wool and dense nylon that need gentler chemistry.
                We built our process around those conditions, and our technicians are trained to identify the fiber in
                front of them before deciding how to clean it.
              </p>
              <p>
                We are not a franchise and we do not subcontract. When you contact us, you reach a coordinator who knows
                the technicians, the schedule, and the neighborhoods. The price is confirmed on a walkthrough before any
                equipment comes in, and every job is backed by a seven-day satisfaction guarantee. That is the version of
                a carpet cleaning company we wanted to exist in Raleigh, so we built it.
              </p>
            </div>
          </div>
        </Section>

        <section className="bg-forest py-14 text-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-clay pl-5">
                <p className="font-display text-4xl font-semibold sm:text-5xl">{s.value}</p>
                <p className="mt-1 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <Section tone="canvas">
          <SectionHeading
            eyebrow="What we stand for"
            title="Four rules every technician works by"
            intro="They are short on purpose. Customers notice when a company actually follows its own rules, and these are the ones that make the difference between carpet that looks clean for a week and carpet that stays clean."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-line bg-paper p-6">
                <h3 className="font-display text-xl font-semibold text-forest">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="cream">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Our promise"
                title="What you can count on every single visit"
                intro="These are not aspirations. They are the operating standard, and if we fall short on any of them, we want to hear about it."
              />
            </div>
            <ul className="space-y-3 lg:col-span-7">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-lg bg-paper px-5 py-4 text-[0.95rem] text-ink">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section tone="paper" narrow>
          <SectionHeading
            eyebrow="Transparency"
            title="See the process before you book"
            intro="We publish every step, from the walkthrough and fiber test to the final rinse and drying, along with what is included in a standard, deep, and pet cleaning. Most carpet cleaners do not, and we think that tells you something."
            align="center"
          />
          <div className="text-center">
            <Link href="/our-process" className="inline-flex items-center gap-2 rounded-lg bg-forest px-6 py-3.5 text-sm font-semibold text-white hover:bg-forest-soft">
              Our Process
            </Link>
          </div>
        </Section>

        <MapEmbed query="Raleigh, NC" title="Based in Raleigh, working across the Triangle" />

        <ServiceAreas title="Where our technicians work" areas={allServiceAreas} />

        <CTABand
          title="Want to see the difference for yourself?"
          description="Send the form with your rooms and zip code. A coordinator replies with an upfront quote and open times the same day."
        />
      </PageShell>
    </>
  );
}
