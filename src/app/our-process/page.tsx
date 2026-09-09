import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import { Prose } from "@/components/sections/Section";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ComparisonTable from "@/components/sections/ComparisonTable";
import WhyChoose from "@/components/sections/WhyChoose";
import FAQ from "@/components/sections/FAQ";
import CTABand from "@/components/sections/CTABand";
import { processSteps } from "@/lib/data/process";
import { SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema, generateFAQSchema, generateHowToSchema, SchemaScript } from "@/lib/schema";

const PATH = "/our-process";

export const metadata: Metadata = {
  title: "Our Carpet Cleaning Process",
  description:
    "The eight-step hot water extraction process Raleigh NC Carpet Cleaning follows on every job, and how a standard clean compares with deep cleaning and pet treatment.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const intro = [
  "Most carpet cleaning complaints come down to one of three things: the carpet re-soiled within weeks, it took two days to dry, or a spot came back. All three are process failures, not bad luck. Detergent left in the pile attracts new dirt. Too much water and too little recovery leaves the pad wet. A stain that was never treated below the surface wicks back up as the carpet dries. We built our process to close each of those gaps, and we publish it so you can hold us to it.",
  "The method is hot water extraction, which is what carpet manufacturers mean when they say professional cleaning. Heated water and a fiber-safe cleaning agent are applied under pressure and recovered immediately by a vacuum on the same wand. The steps before and after that rinse are what separate a thorough job from a quick one: dry soil removal so grit is not turned into mud, pre-treatment and agitation so the rinse has something to lift, and grooming and air movement so the carpet dries evenly and fast.",
  "Every technician follows the same eight steps in the same order, whether the job is one bedroom in Garner or a whole house in Wake Forest. Deep cleaning and pet treatment add steps on top of the standard sequence rather than replacing it, and the table below shows exactly which ones. If you are comparing quotes from different companies, ask them for a list like this. If they cannot produce one, that tells you something.",
];

const promises = [
  {
    title: "Nothing left in the carpet",
    description:
      "The extraction pass rinses out the pre-spray along with the soil. Carpet that has been properly rinsed does not feel stiff, does not smell of product, and does not re-soil faster than before.",
  },
  {
    title: "Dry the same day",
    description:
      "Strong vacuum recovery is the first defense. Air movers are the second. Most rooms are dry to the touch in four to eight hours, and we tell you if humidity is going to push that.",
  },
  {
    title: "Honest about what will not come out",
    description:
      "Bleach spots, dye loss, and burns are damage, not dirt. The technician points those out on the walkthrough so you know before we start what to expect and what not to.",
  },
  {
    title: "Seven-day guarantee on every job",
    description:
      "If a spot wicks back or an area does not look right within seven days, we come back and re-treat it at no charge. It is written into every invoice.",
  },
];

const faqs = [
  {
    question: "Is hot water extraction the same as steam cleaning?",
    answer:
      "In everyday use, yes. The water is heated but delivered as hot water under pressure rather than true steam, which would be too hot for most carpet fibers. When a manufacturer's warranty asks for professional steam cleaning, hot water extraction is what they mean.",
  },
  {
    question: "Why do you vacuum first if you are about to wash the carpet?",
    answer:
      "Dry soil is easy to remove with a vacuum and very hard to remove once it is wet. Skipping this step turns grit into mud that the extraction pass has to fight through. It is the single most skipped step in the industry and one of the most important.",
  },
  {
    question: "How is a deep clean different from a standard clean?",
    answer:
      "A deep clean adds whole-room heavy-soil pre-treatment, corner and edge detailing along the baseboards, and a second extraction pass on traffic lanes. It is the right choice if the carpet has not been professionally cleaned in a few years or has heavy buildup.",
  },
  {
    question: "What does pet treatment add?",
    answer:
      "A UV inspection to map every urine spot, including the ones you cannot see, an enzyme product applied to the carpet and the pad beneath it, extra dwell time, and an odor neutralizer. Surface cleaning alone leaves the uric acid in the pad, which is why the smell comes back on humid days.",
  },
  {
    question: "Will you move my furniture?",
    answer:
      "Sofas, chairs, and small tables, yes, and we set them back on foam blocks or tabs while the carpet dries. Beds, dressers, entertainment centers, pianos, and anything with electronics stay in place. Move those beforehand if you want the carpet under them cleaned.",
  },
  {
    question: "Do you use the same process on upholstery and rugs?",
    answer:
      "The principles are the same, but the tools and chemistry change. Upholstery is cleaned with a hand tool and lower moisture, and delicate fabrics may be dry-cleaned. Wool and hand-knotted rugs are picked up and washed offsite. Each service page describes its own process.",
  },
  {
    question: "How hot is the water, and is it safe for every type of carpet?",
    answer:
      "Our professional extraction unit heats its own water well above what a rental machine can produce, and the technician adjusts both heat and pressure to the fiber identified on the walkthrough. Synthetic fibers like nylon, polyester, and olefin take the full heat. Wool and some blends get a cooler rinse and a milder pre-spray so the fiber does not felt or lose its dye. The temperature is chosen for the carpet in front of us, not set once and left alone.",
  },
  {
    question: "How much water is left in the carpet when you finish?",
    answer:
      "Very little. The wand recovers water in the same stroke that applies it, and the unit's strong vacuum pulls most of it back out before the technician moves to the next section. The carpet feels damp on the surface, not wet through, and the pad underneath should stay dry. That is why most rooms are dry to the touch in four to eight hours. If a carpet is soaking after a cleaning, too much water went in or too little came out.",
  },
  {
    question: "Why does the technician walk the rooms with me before starting?",
    answer:
      "The walkthrough is where the job is actually planned. The technician identifies the fiber, counts the areas so the price can be confirmed, and looks at each spot you point out to decide how to treat it. It is also where damage gets named. Bleach spots, dye loss, burns, and fraying are not dirt and will not clean out, so you hear that before we start rather than after. Everything the technician finds is noted on the invoice.",
  },
  {
    question: "What does fiber protector do, and is it worth adding?",
    answer:
      "Fiber protector is a clear finish applied after the rinse that coats each fiber so spills bead up and soil sits on top instead of bonding. It does not make carpet stain-proof, but it buys you time to blot a spill and makes the next cleaning more effective. It wears off in traffic lanes over a year or so and can be reapplied. It is a line item you approve on the quote, never added at the door.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <SchemaScript
        schema={[
          generateHowToSchema(
            "How Raleigh NC Carpet Cleaning cleans carpet",
            "The eight-step hot water extraction process followed on every carpet cleaning job.",
            processSteps
          ),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Our Process", url: PATH },
          ]),
          generateFAQSchema(faqs),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow="Our process"
          withForm={false}
          title="How we clean carpet, step by step"
          subtitle="The exact sequence every technician follows, and a side-by-side of what a standard clean, a deep clean, and a pet treatment each include. No mystery, no upsell at the door."
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Our Process", href: PATH },
          ]}
        />
        <TrustStrip />
        <Prose eyebrow="Why publish it" title="A process you can read before you book" paragraphs={intro} />
        <ProcessSteps title="The eight steps on every carpet job" intro="In this order, every time." tone="canvas" />
        <ComparisonTable />
        <WhyChoose title="What the process guarantees" benefits={promises} />
        <FAQ title="Questions about how we clean" items={faqs} tone="canvas" />
        <CTABand
          title="See the process in your own living room"
          description="Tell us the rooms and what you are dealing with. A quote and open times come back the same day."
        />
      </PageShell>
    </>
  );
}
