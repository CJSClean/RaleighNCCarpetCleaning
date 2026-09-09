import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import { Section, SectionHeading } from "@/components/sections/Section";
import FAQ from "@/components/sections/FAQ";
import CTABand from "@/components/sections/CTABand";
import { CheckIcon } from "@/components/ui/Icons";
import { ButtonLink } from "@/components/ui/Button";
import { SITE_CONFIG, SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema, generateFAQSchema, SchemaScript } from "@/lib/schema";

const PATH = "/preparing-for-your-cleaning";

export const metadata: Metadata = {
  title: "Preparing for Your Carpet Cleaning",
  description:
    "How to get your Raleigh home ready for carpet cleaning: clearing floors, pets, parking for the van, drying times, furniture tabs, and our cancellation policy.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const beforeWeArrive = [
  {
    title: "Pick up small items and toys",
    text: "Clear shoes, toys, cords, laundry baskets, and anything small off the carpet in the rooms being cleaned. The technician cleans around large furniture and moves sofas, chairs, and small tables, but small loose items slow the job down and can be missed under the wand.",
  },
  {
    title: "Vacuuming is not required",
    text: "Our technician vacuums every area with a commercial machine before pre-treatment, so you do not need to. If you want to run your own vacuum first, it does no harm, but it is not part of the preparation we ask for.",
  },
  {
    title: "Move fragile items and electronics",
    text: "Take lamps, plants, framed photos, and anything breakable off the carpeted floor and off low tables in the work area. Move televisions, game consoles, speakers, and cords out of the rooms or onto a hard surface. Hoses and air movers run through these spaces and we do not want anything knocked over or damp.",
  },
  {
    title: "Secure your pets",
    text: "Please keep dogs and cats in a closed room, a crate, or with you during the visit. The truck-mounted unit is loud, the front door stays open for the hose, and a secured pet keeps both your pet and our technician safe. Tell us about any animal that should never be let outside.",
  },
  {
    title: "Note the spots you want treated",
    text: "Walk the rooms before we arrive and note any stain, pet spot, or traffic lane you are concerned about. Point them out on the walkthrough, or tell your coordinator when you book. Knowing what caused a spot helps the technician pick the right treatment the first time.",
  },
  {
    title: "Clear a parking spot for the van",
    text: "The truck-mounted unit stays in the van and runs hoses into the house, so the van needs to park within about 100 feet of the door we will use. Leave a driveway space or curb spot open. If you are in a townhome or apartment with assigned parking, send your coordinator a note on where the van can sit.",
  },
  {
    title: "Keep the air conditioning on",
    text: "Carpet dries fastest with cool, dry air moving across it. Leave the AC running at its normal setting on the day of the cleaning and for the rest of the day afterward, especially in summer. Do not turn the system off to save energy while the carpet is drying.",
  },
];

const afterWeLeave = [
  {
    title: "Stay off the carpet until it is dry",
    text: "Carpet is usually dry to the touch in four to eight hours, depending on the fiber, the humidity, and how heavily it was soiled. Keep foot traffic to a minimum during that time. If you must walk on it, wear clean socks or the shoe covers the technician leaves, since shoes track new soil into damp fiber.",
  },
  {
    title: "Leave the foam blocks and tabs in place",
    text: "The technician places foam blocks and plastic tabs under the legs of furniture that sits on cleaned carpet. Leave them in place for 24 hours. They keep wood stain and metal from transferring into damp carpet and prevent rust rings. Remove them the next day once the carpet is fully dry.",
  },
  {
    title: "Keep the air moving",
    text: "Leave the AC on, open interior doors, and run ceiling fans in the cleaned rooms. In humid months this can cut drying time noticeably. If a room still feels damp after eight hours, move a box fan into it and contact us if it has not dried by the next morning.",
  },
];

const cancellation = [
  { notice: "More than 24 hours' notice", fee: "No fee. Free reschedule or cancellation." },
  { notice: "Less than 24 hours' notice", fee: "A rescheduling fee applies." },
  { notice: "Same-day cancellation or lockout", fee: "May be billed for the appointment." },
];

const faqs = [
  {
    question: "Do I need to vacuum before you arrive?",
    answer:
      "No. The technician vacuums every area with a commercial machine before pre-treatment, and that step is part of every job, not an extra. Dry soil is far easier to remove before the carpet is wet, which is why we never skip it. If you enjoy running your own vacuum first, go ahead, it does no harm. What actually helps is picking up small items so the technician's vacuum and wand can reach the whole floor.",
  },
  {
    question: "Should I move furniture before the cleaning?",
    answer:
      "Only the heavy pieces you want cleaned under. The technician moves sofas, chairs, and small tables and sets them back on foam blocks. Beds, dressers, china cabinets, pianos, entertainment centers, and anything with electronics on it stay where they are, and we clean around them. If you want the carpet under one of those cleaned, move it before we arrive and tell your coordinator so the quote reflects the extra area.",
  },
  {
    question: "What should I do with my pets during the visit?",
    answer:
      "Keep dogs and cats in a closed room, a crate, or with you for the whole visit. The front door stays open for the hose, the truck-mounted unit is loud, and a nervous animal can slip out or get underfoot. Tell your coordinator or the technician about any pet that must never go outside. If you are booking pet treatment, note where the accidents happened so the technician can check those spots under UV light.",
  },
  {
    question: "Where should the van park, and how far can the hose run?",
    answer:
      "As close to the door we will use as possible, ideally in the driveway or at the curb directly out front. Hoses run from the van into the house and cover roughly 100 feet comfortably, with longer runs possible on request. For townhomes and apartments with assigned parking, a gate, or an elevator, send your coordinator a note before the visit so the technician arrives with the right length of hose.",
  },
  {
    question: "Do you need water or power from the house?",
    answer:
      "Usually not. The truck-mounted unit carries its own fresh water and heats it in the van, and the recovered water is held in a tank on the truck, not dumped on your property. On a long job or a very large home the technician may ask to refill from an outside spigot. We plug in air movers to speed drying, which use a standard outlet. Nothing else from the house is required.",
  },
  {
    question: "How long until I can walk on the carpet and put furniture back?",
    answer:
      "Carpet is usually dry to the touch in four to eight hours, depending on fiber, humidity, and how much soil came out. Light traffic in clean socks is fine once it feels dry. Wait until the next day, a full 24 hours, before setting furniture back on the carpet without blocks, since the base of the pile dries last. Rugs and upholstery follow their own times, and the technician tells you before leaving.",
  },
  {
    question: "What are the foam blocks and tabs under the furniture legs for?",
    answer:
      "They lift wood and metal legs off the damp carpet so stain, finish, or rust cannot transfer into the fibers and leave a mark. Leave them in place for 24 hours, then remove them once the carpet is fully dry. If a block gets kicked out early, slide it back under. You can throw them away afterward or keep them for the next cleaning. They are included in every job.",
  },
  {
    question: "Can I stay home during the cleaning?",
    answer:
      "Yes, and most customers do. You need to be there for the walkthrough at the start, when the price is confirmed and spots are pointed out, and we like to walk the finished rooms with you at the end. In between, you can work in another room, keep the kids and pets in a closed space, or step out. If you cannot be present at all, a key, lockbox, or door code arrangement is fine, just tell your coordinator.",
  },
  {
    question: "How do I reschedule or cancel?",
    answer:
      "Send the form on the contact page or email us as early as you can, and include the date of the appointment. With more than 24 hours' notice we move or cancel it at no charge. Inside 24 hours a rescheduling fee may apply, and a same-day cancellation or a lockout, where the technician arrives and cannot get in, may be billed. If weather or illness comes up, tell us right away and we will do what we can.",
  },
];

export default function PreparingPage() {
  return (
    <>
      <SchemaScript
        schema={[
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Preparing for Your Cleaning", url: PATH },
          ]),
          generateFAQSchema(faqs),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow="Cleaning day prep"
          title="Preparing for Your Cleaning"
          subtitle="A little preparation goes a long way. Here is everything to take care of before our technician arrives at your Raleigh home, and what to do after we leave so the carpet dries quickly and stays clean."
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Preparing for Your Cleaning", href: PATH },
          ]}
        />
        <TrustStrip />

        <Section tone="paper" narrow>
          <div className="rounded-xl border-l-4 border-clay bg-clay-soft/60 p-6 sm:p-7">
            <h2 className="font-display text-xl font-semibold text-forest">Drying time and furniture notice</h2>
            <p className="mt-3 leading-relaxed text-ink/85">
              Carpet cleaned with hot water extraction is <strong>damp for four to eight hours</strong> after we leave.
              Plan the appointment for a day when the rooms can sit unused for that long, and keep the air conditioning
              running. The technician moves sofas, chairs, and small tables, but does not move beds, dressers, china
              cabinets, pianos, entertainment centers, or anything with electronics on it. If you want the carpet under
              a heavy piece cleaned, move it before we arrive, and tell your coordinator so the quote reflects it.
            </p>
          </div>
        </Section>

        <Section tone="canvas">
          <SectionHeading
            eyebrow="Before we arrive"
            title="Please take care of these before your scheduled time"
            intro="Each item takes a few minutes and lets the technician spend the visit cleaning instead of working around things."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {beforeWeArrive.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-xl border border-line bg-paper p-6">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-moss text-forest">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-forest">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="moss">
          <SectionHeading
            eyebrow="After we leave"
            title="Three things that protect the result"
            intro="The cleaning is finished when the technician drives away, but the carpet is not fully dry. These three steps make the difference between a clean carpet and one with rust rings and re-tracked soil."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {afterWeLeave.map((item, i) => (
              <div key={item.title} className="rounded-xl border border-line bg-paper p-6">
                <p className="eyebrow">Step {i + 1}</p>
                <h3 className="font-display mt-1 text-xl font-semibold text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="paper" narrow>
          <SectionHeading
            eyebrow="Cancellation policy"
            title="Rescheduling and cancellations"
            intro="We plan technicians, trucks, and travel around your appointment, so notice matters. Here is exactly what applies."
          />
          <div className="overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead className="bg-forest text-white">
                <tr>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider">Notice given</th>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider">What applies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-paper">
                {cancellation.map((row) => (
                  <tr key={row.notice}>
                    <td className="px-5 py-4 font-semibold text-forest">{row.notice}</td>
                    <td className="px-5 py-4 text-ink">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm text-muted">
            To cancel or reschedule, contact us as early as possible through the{" "}
            <Link href="/contact" className="font-semibold text-clay hover:underline">
              contact page
            </Link>{" "}
            or at{" "}
            <a href={`mailto:${SITE_CONFIG.email}`} className="font-semibold text-clay hover:underline">
              {SITE_CONFIG.email}
            </a>
            . A lockout, meaning the technician arrives and cannot get in, is treated as a same-day cancellation. Full
            details are in our{" "}
            <Link href="/terms" className="font-semibold text-clay hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </Section>

        <Section tone="canvas" narrow>
          <SectionHeading
            eyebrow="Have questions?"
            title="We are happy to walk you through anything before your first cleaning"
            align="center"
          />
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="forest">Contact us</ButtonLink>
            <ButtonLink href="/our-process" variant="outline">See our process</ButtonLink>
          </div>
        </Section>

        <FAQ
          title="Questions about cleaning day"
          intro="What to expect before the van arrives, during the visit, and while the carpet dries."
          items={faqs}
        />

        <CTABand
          title="Ready to book your Raleigh carpet cleaning?"
          description="Send the form with your rooms and zip code. A coordinator replies with an upfront quote and open times the same day."
        />
      </PageShell>
    </>
  );
}
