import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { SITE_CONFIG, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Pricing, stain limitations, drying, guarantee, and cancellation terms for Raleigh NC Carpet Cleaning, covering carpet, upholstery, rug, and tile cleaning.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

interface Section {
  heading: string;
  body?: string[];
  bullets?: string[];
}

const sections: Section[] = [
  {
    heading: "Scope of Services",
    body: [
      `${SITE_CONFIG.name} provides residential and commercial carpet cleaning, upholstery cleaning, area rug cleaning, pet stain and odor treatment, and tile and grout cleaning in Raleigh and the surrounding Triangle. Work is performed using hot water extraction and related professional methods selected by the technician for the fiber and condition in front of them. Services not listed on our website, including hardwood refinishing, water damage restoration, carpet repair or stretching, and mold remediation, are outside our scope unless agreed in writing.`,
    ],
  },
  {
    heading: "Walkthrough Pricing",
    body: [
      "Quotes given by phone, email, or through our website are estimates based on the information you provide. The final price is confirmed by the technician on a walkthrough at the start of the appointment, after counting the areas, identifying the fiber, and assessing the condition. No equipment is brought in until you approve that price. If the walkthrough reveals materially more area, heavier soiling, pet contamination, or a fiber that requires a different process than the estimate assumed, the technician will explain the difference and confirm the adjusted price before starting. You may decline the work at that point at no charge.",
    ],
  },
  {
    heading: "Stain and Soil Limitations",
    body: [
      "Professional cleaning removes most soil and many stains, but not all. By booking you acknowledge the following limitations:",
    ],
    bullets: [
      "We do not guarantee that every stain will be removed. Some substances, including bleach, dyes, mustard, rust, permanent marker, and stains that have been set by heat or prior home treatment, may be lightened but not eliminated.",
      "Pre-existing damage, including wear patterns, matting, fraying, seam separation, delamination, sun fading, and furniture crush, is not corrected by cleaning and is not our responsibility.",
      "Wicking can occur when a deep stain or spill that has soaked into the pad or backing rises back to the surface as the carpet dries. We will re-treat a wicked spot under the guarantee below, but some spots may return more than once.",
      "Dye loss, browning, or color migration can occur on natural fibers, older carpet, and some imported rugs even with proper technique. The technician tests for dye stability before cleaning wool or natural-fiber items and will advise you of any risk before proceeding.",
      "Odors that have penetrated the pad, subfloor, or upholstery frame may not be fully eliminated by surface cleaning. Where pad or subfloor treatment is required, the technician will explain what is and is not possible on the walkthrough.",
      "Furniture that is not moved is cleaned around, not under. See the furniture section below.",
    ],
  },
  {
    heading: "Furniture Moving",
    body: [
      "Technicians move sofas, chairs, ottomans, and small tables, and place foam blocks or plastic tabs under the legs of anything set back onto damp carpet. We do not move beds, dressers, china cabinets, pianos, entertainment centers, aquariums, safes, or any furniture holding electronics, glass, or breakables. If you want the carpet beneath a heavy item cleaned, move it before the appointment and tell your coordinator so the quote reflects it. We are not responsible for damage to furniture that was unstable, previously damaged, or that we were asked to move against our recommendation.",
    ],
  },
  {
    heading: "Drying and Furniture Tabs",
    body: [
      "Carpet cleaned with hot water extraction is damp for approximately four to eight hours depending on the fiber, the soil level, and indoor humidity. Upholstery and area rugs may take longer. You are responsible for keeping the air conditioning or heat running and for limiting foot traffic until the carpet is dry. Foam blocks and tabs must remain under furniture legs for 24 hours. We are not responsible for rust rings, wood stain transfer, or re-soiling caused by removing tabs early, walking on damp carpet in street shoes, or turning off climate control while the carpet dries.",
    ],
  },
  {
    heading: "Seven-Day Satisfaction Guarantee",
    body: [
      "We stand behind every job. If a treated spot returns, a traffic lane does not meet the standard, or any cleaned area falls short within seven days of the appointment, contact us and we will return to re-treat it at no charge. Photos of the area help us schedule the right technician and treatment. The guarantee covers the areas and services on the invoice. It does not cover the stain and soil limitations listed above, pre-existing wear or damage, new spills or soiling after the appointment, or conditions that cleaning cannot correct. Re-treatment is the remedy under this guarantee; refunds are not issued in place of a return visit. Claims made after seven days are handled at our discretion.",
    ],
  },
  {
    heading: "Cancellation and Rescheduling",
    body: [
      "We plan technicians, equipment, and travel around your appointment, so notice matters.",
    ],
    bullets: [
      "More than 24 hours' notice: no charge. You may reschedule or cancel freely.",
      "Less than 24 hours' notice: a rescheduling fee applies.",
      "Same-day cancellation, no-show, or lockout: the appointment may be billed.",
    ],
  },
  {
    heading: "Access, Water, and Power",
    body: [
      "You are responsible for providing safe and legal access to the property at the scheduled time, whether by being present, leaving a key or lockbox, or sharing a code, and for access to a working water source and a standard electrical outlet so the extraction unit and air movers can run. If the technician cannot get in, the visit is treated as a lockout under the cancellation terms above. If running water or electricity is not available at the property, the technician may be unable to complete the work and the visit may be treated as a same-day cancellation.",
    ],
  },
  {
    heading: "Right to Refuse or Stop Service",
    body: [
      "Our technicians may decline to begin or continue a job when conditions are unsafe or outside the scope of professional cleaning. This includes, but is not limited to, unsecured aggressive animals, biohazards beyond ordinary pet accidents, sewage or flood water, active pest or rodent infestations, hoarding conditions, carpet that is delaminating or so worn that cleaning would cause further damage, and situations where the technician cannot work safely. If a technician arrives and cannot proceed, the visit is treated as a same-day cancellation.",
    ],
  },
  {
    heading: "Pets",
    body: [
      `We treat pet stains and odors every day and are comfortable working around animals. For everyone's safety, please secure dogs and cats in a closed room or crate during the visit, since the technician moves in and out with equipment and the extraction unit is loud. ${SITE_CONFIG.name} is not responsible for pets that escape while a door is open for the technician or equipment.`,
    ],
  },
  {
    heading: "Damage Claims",
    body: [
      "We carry general liability insurance. Please report any suspected damage within 48 hours of the appointment so we can inspect it. We are not responsible for pre-existing wear or damage, conditions listed under the stain and soil limitations above, items that were not moved off the carpet as requested on our preparation page, damage to furniture we were asked to move against our recommendation, or fading and dye issues on items whose fiber content or prior treatment was not disclosed.",
    ],
  },
  {
    heading: "Changes to Requested Services",
    body: [
      "Any change to the scope of a booked cleaning, including adding rooms, upholstery, rugs, or tile, is confirmed with the technician on the walkthrough and priced before work begins. Once the job is in progress, additional areas may be added only if time and equipment allow, and the added price is confirmed before the technician proceeds.",
    ],
  },
  {
    heading: "Commercial Accounts",
    body: [
      "Offices, medical suites, churches, and other commercial customers are quoted per visit or on a recurring schedule agreed in writing. Certificates of insurance are available on request. Recurring commercial rates assume the agreed frequency and may be revised if visits are skipped or the scope changes.",
    ],
  },
  {
    heading: "Use of After Photos",
    body: [
      "Our technicians may photograph before-and-after results to document the work and for use on our website and social media. Photos never include addresses, mail, family photos, or personal documents. If you prefer that no photos of your home be used, tell us in writing and we will honor that request.",
    ],
  },
  {
    heading: "Privacy",
    body: [
      "Your personal information is used only to quote, schedule, and perform service, process payment, and communicate about your account. We do not sell or share customer information with third parties for marketing. See our Privacy Policy for full details.",
    ],
  },
  {
    heading: "Governing Law",
    body: [
      `These terms are governed by the laws of the State of North Carolina, without regard to its conflict of law rules. Any dispute arising from services provided by ${SITE_CONFIG.name} will be brought in the state courts of Wake County, North Carolina.`,
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may update these terms from time to time. Changes are posted on this page and, for material changes, communicated by email. Continued use of our services after an update indicates acceptance of the revised terms.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about these terms can be sent to ${SITE_CONFIG.email} or through our contact page.`],
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Legal</p>
          <h1 className="font-display mt-2 text-4xl font-semibold text-forest">Terms of Service</h1>
          <p className="mt-3 text-sm text-muted">Effective September 9, 2026</p>
          <p className="mt-6 leading-relaxed text-ink/85">
            These terms apply to every carpet, upholstery, rug, and tile cleaning booked with {SITE_CONFIG.name},
            whether a single visit or a recurring commercial schedule, anywhere in our Raleigh and Triangle service
            area. By booking, you agree to the terms below. For a practical list of what to do before we arrive, see{" "}
            <Link href="/preparing-for-your-cleaning" className="font-semibold text-clay hover:underline">
              Preparing for Your Cleaning
            </Link>
            , and for what each cleaning includes, see{" "}
            <Link href="/our-process" className="font-semibold text-clay hover:underline">
              Our Process
            </Link>
            .
          </p>
          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-2xl font-semibold text-forest">{s.heading}</h2>
                <div className="prose-body mt-3 leading-relaxed text-ink/85">
                  {s.body?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {s.bullets && (
                    <ul className="mt-3 list-disc space-y-1.5 pl-6">
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
