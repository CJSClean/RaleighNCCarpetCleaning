import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import { Section, SectionHeading } from "@/components/sections/Section";
import MapEmbed from "@/components/sections/MapEmbed";
import FAQ from "@/components/sections/FAQ";
import QuoteForm from "@/components/ui/QuoteForm";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { HAS_PHONE, SITE_CONFIG, SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema, generateContactPageSchema, generateFAQSchema, SchemaScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Raleigh NC Carpet Cleaning",
  description:
    "Send a quick form or email Raleigh NC Carpet Cleaning for an upfront carpet, upholstery, rug, or tile cleaning quote. Coordinators reply the same day, 7 days a week.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

const contactFaqs = [
  {
    question: "How quickly will I hear back?",
    answer:
      "A coordinator typically responds the same day, usually within a few hours during operating hours. Requests sent overnight are answered first thing in the morning.",
  },
  {
    question: "Can I get a quote without a walkthrough?",
    answer:
      "Yes. Almost all quotes are given from the details in the form: the rooms or pieces you want cleaned, any stairs, pets, and the condition of the carpet. The technician confirms the number on the walkthrough before starting, and photos help if something needs extra attention.",
  },
  {
    question: "Do you take card payments?",
    answer:
      "We accept all major credit and debit cards. You are charged after the cleaning is complete and you have walked the rooms with the technician, never before.",
  },
  {
    question: "What if I need to change my appointment?",
    answer:
      "Contact us at least 24 hours ahead and we will move it at no charge. Inside 24 hours a rescheduling fee may apply, and same-day cancellations or lockouts may be billed because the technician has already been dispatched. Our Preparing for Your Cleaning page has the details.",
  },
  {
    question: "What should I include in the form for an accurate quote?",
    answer:
      "List the rooms, stairs, and hallways you want cleaned, or the pieces of furniture and rugs, and give a rough size for the larger areas. Mention pets, the type of carpet if you know it, and how long it has been since the last professional cleaning. Photos of problem spots help. Add your zip code and the days and times that work for you, and the first number back will be very close to the final one.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "Someone needs to let the technician in and walk the rooms at the start, since that is when the price is confirmed and problem spots are pointed out. After that you are free to leave, work in another room, or stay and watch. We ask that an adult be reachable by email or text while the job is running in case a question comes up, and back at the end if you want to walk the finished rooms.",
  },
  {
    question: "Can you use a key, lockbox, or door code if I cannot be there?",
    answer:
      "Yes, and this is common for rentals, move-outs, and homes where the owner works during the day. Tell your coordinator how the technician will get in and where the lockbox or code is, and note anything we should know about alarms or pets. The technician sends you the confirmed price by text or email before starting, waits for your approval, and locks up on the way out. Photos of the finished rooms are sent on request.",
  },
  {
    question: "What happens after I send the form?",
    answer:
      "A coordinator reads it, works out a price by the room or piece, and replies with that number and the open appointment times that fit your request. Once you pick a slot you receive a confirmation with the date, arrival window, and what to have ready. We send a reminder the day before and a message when the technician is on the way, so nothing about the visit is a surprise.",
  },
  {
    question: "Do you serve my address if it is outside the towns listed?",
    answer:
      "Often, yes. The towns on the site are the ones we reach most, but technicians routinely go a little beyond them, especially along the main corridors out of Raleigh. Put your zip code in the form and the coordinator will tell you straight away whether we can get a technician to you and whether the drive changes the schedule. If we cannot reach you, we will say so rather than guess.",
  },
];

const details = [
  ...(HAS_PHONE
    ? [{ icon: PhoneIcon, label: "Call or text", value: SITE_CONFIG.phone, href: SITE_CONFIG.phoneHref, sub: "Fastest way to reach a coordinator" }]
    : []),
  { icon: MailIcon, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}`, sub: "Replies the same day" },
  { icon: ClockIcon, label: "Hours", value: SITE_CONFIG.hours, sub: "Cleanings and coordinator support" },
  { icon: PinIcon, label: "Service area", value: SITE_CONFIG.addressLine, sub: "Wake County, Durham, and Clayton" },
];

export default function ContactPage() {
  return (
    <>
      <SchemaScript
        schema={[
          generateContactPageSchema(),
          generateFAQSchema(contactFaqs),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow="Contact"
          withForm={false}
          title="Contact Raleigh NC Carpet Cleaning"
          subtitle="Send the form or email us. Tell us the rooms or pieces you want cleaned and what you are dealing with, and you will have an upfront price and open time slots shortly after."
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]}
        />

        <Section tone="paper">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Reach us" title="Every way to get in touch" />
              <ul className="space-y-5">
                {details.map(({ icon: Icon, label, value, href, sub }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-moss text-forest">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</p>
                      {href ? (
                        <a href={href} className="text-lg font-semibold text-forest hover:text-clay">
                          {value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-forest">{value}</p>
                      )}
                      <p className="text-sm text-muted">{sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-line bg-canvas p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-forest">Request a quote</h2>
                <p className="mb-6 mt-1 text-sm text-muted">
                  The more you tell us about the rooms and the carpet, the more accurate the first number will be.
                </p>
                <QuoteForm submitLabel="Send my request" />
              </div>
            </div>
          </div>
        </Section>

        <MapEmbed
          query="Raleigh, NC"
          title="Our service area"
          intro="Technicians are dispatched across Raleigh, Wake County, Durham, and Clayton every day of the week."
        />

        <FAQ title="Before you reach out" items={contactFaqs} />
      </PageShell>
    </>
  );
}
