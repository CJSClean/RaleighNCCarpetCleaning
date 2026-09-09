import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import { Section, SectionHeading } from "@/components/sections/Section";
import MapEmbed from "@/components/sections/MapEmbed";
import FAQ from "@/components/sections/FAQ";
import QuoteForm from "@/components/ui/QuoteForm";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { HAS_PHONE, SITE_CONFIG, SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema, generateContactPageSchema, SchemaScript } from "@/lib/schema";

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
