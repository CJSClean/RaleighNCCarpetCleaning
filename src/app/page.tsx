import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import { Prose } from "@/components/sections/Section";
import ServicesGrid from "@/components/sections/ServicesGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import ProcessSteps from "@/components/sections/ProcessSteps";
import WhyChoose from "@/components/sections/WhyChoose";
import Plans from "@/components/sections/Plans";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import MapEmbed from "@/components/sections/MapEmbed";
import CTABand from "@/components/sections/CTABand";
import { allServiceAreas } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/constants";
import { generateFAQSchema, generateLocalBusinessSchema, SchemaScript } from "@/lib/schema";

const TITLE = "Raleigh NC Carpet Cleaning | Carpet, Upholstery & Rug Cleaning in Raleigh, NC";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description:
    "Professional carpet cleaning in Raleigh, NC. Truck-mounted hot water extraction for carpet, upholstery, rugs, pet stains, and tile across Wake County. Upfront quotes, same-week slots.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: TITLE,
    description:
      "Carpet, upholstery, rug, pet stain, and tile cleaning across Raleigh and the Triangle. Walkthrough pricing, dry in hours, seven-day satisfaction guarantee.",
    url: SITE_URL,
    type: "website",
  },
};

const faqs = [
  {
    question: "What areas does Raleigh NC Carpet Cleaning cover?",
    answer:
      "All of Raleigh, including North Raleigh, Midtown, downtown, and the neighborhoods inside and outside the Beltline, plus Cary, Apex, Morrisville, Wake Forest, Garner, Knightdale, Holly Springs, and Fuquay-Varina in Wake County, Durham, and Clayton. If your address sits just outside those areas, send us the zip code and we will confirm whether a technician can reach you.",
  },
  {
    question: "How is the price calculated?",
    answer:
      "By the room or area, with stairs, hallways, and add-ons such as pet treatment or fiber protector listed as separate line items. The quote you receive before booking is confirmed by the technician on the walkthrough before any equipment comes in, so the invoice matches the number you agreed to.",
  },
  {
    question: "What cleaning method do you use?",
    answer:
      "Hot water extraction, sometimes called steam cleaning, using truck-mounted equipment for most homes. The carpet is vacuumed, pre-treated, agitated, rinsed with heated water under pressure, and the water is recovered immediately. It is the method most carpet manufacturers require to keep a warranty valid.",
  },
  {
    question: "How long does carpet take to dry?",
    answer:
      "Most rooms are dry to the touch in four to eight hours. Triangle humidity can push that toward the longer end in summer, so we place air movers and recommend running the air conditioning afterward. Upholstery dries in two to six hours and tile in about an hour.",
  },
  {
    question: "Do I need to move furniture?",
    answer:
      "No. We move sofas, chairs, and small tables and put them back on foam blocks so the legs do not wick moisture. Beds, dressers, entertainment centers, and pianos stay where they are and we clean around them. Small items, toys, and anything fragile on the floor should be picked up before we arrive.",
  },
  {
    question: "Can you remove pet urine odor?",
    answer:
      "Usually, yes. We locate the spots with UV light, treat the carpet and the pad underneath with an enzyme product, and neutralize the odor rather than masking it. Where urine has soaked into the pad repeatedly over years, we will tell you honestly whether pad replacement is the better fix.",
  },
  {
    question: "Are your products safe for children and pets?",
    answer:
      "Yes. Our standard pre-sprays are fiber-safe and rinse out completely during extraction, so nothing is left behind in the carpet. We also carry a fragrance-free, plant-based line for households that prefer it. Ask when you book and it becomes a standing note on your account.",
  },
  {
    question: "What if a spot comes back or I am not happy?",
    answer:
      "Every job is backed by a seven-day satisfaction guarantee. Tell us within seven days and we return to re-treat the area at no charge. We would rather come back than have you settle for a result you are not happy with.",
  },
  {
    question: "How far in advance do I need to book?",
    answer:
      "We can usually place a first appointment within the same week, often within two or three days. Late spring after pollen season and the last week of any month, when leases turn over, fill quickly, so book those a week or two ahead.",
  },
  {
    question: "Do you clean offices and commercial spaces?",
    answer:
      "Yes. Offices, medical and dental suites, churches, retail, and apartment common areas across the Triangle, usually after hours so the carpet is dry before opening. Recurring monthly or quarterly programs are available with direct invoicing for facilities managers.",
  },
];

const benefits = [
  {
    title: "Extraction that reaches the backing",
    description:
      "Bonnet and dry-foam methods polish the top of the pile and leave the soil underneath. We rinse the carpet down to the backing and recover the water so nothing is left to attract new dirt.",
  },
  {
    title: "Technicians who know Triangle carpet",
    description:
      "Builder-grade polyester in the new subdivisions, dense nylon in 1990s two-stories, wool inside the Beltline. The fiber is identified on the walkthrough and the chemistry, heat, and pressure are matched to it.",
  },
  {
    title: "Insured, trained, and accountable",
    description:
      "Every technician who enters your home is insured, trained on our process, and walks the finished rooms with you before leaving. If something is not right, it gets fixed then or within seven days at no charge.",
  },
  {
    title: "Real availability, seven days a week",
    description:
      "Evenings, Saturdays, and the day before guests land. Coordinators reply the same day and most first appointments happen within the week.",
  },
];

const introParagraphs = [
  "Raleigh carpet has a hard life. Spring brings six weeks of pine and oak pollen that rides in on every shoe and settles into the pile. Summer humidity keeps it damp enough to bond. Red clay tracks in from the yard, the ballfield, and the construction site down the street, and dogs bring in a little of everything. By the time the hallway looks gray, the base of the carpet is holding far more than you can see. Raleigh NC Carpet Cleaning was built for exactly that carpet and that climate.",
  "We clean wall-to-wall carpet, upholstery, area rugs, and tile and grout in houses, townhomes, condos, and apartments across Raleigh and the Triangle, and we treat pet stains and odor as its own service rather than an afterthought. The method is truck-mounted hot water extraction: a thorough dry vacuum, a fiber-safe pre-spray worked into the pile, a heated rinse under pressure, and immediate recovery of the water so the carpet is dry in hours rather than days. It is the process most carpet manufacturers require to keep a warranty valid, and it is the one that actually removes soil instead of hiding it.",
  "We keep our promises simple. The price is quoted by the room before you book and confirmed by the technician on the walkthrough before any equipment comes in. Stairs, pet treatment, and fiber protector are line items you approve up front, not surprises on the invoice. The technicians are insured and trained on fiber identification, and every job is backed by a seven-day satisfaction guarantee: if a spot returns or an area does not look right, we come back and re-treat it at no charge.",
  "Whether you need the whole house done after pollen season, a move-out cleaning with a receipt for the property manager, a sectional that has survived two kids and a cat, or an office hallway cleaned after hours, there is a service built for it below. Read what each one includes, check the area page for your town, and request a quote when you are ready. Most first appointments are placed within the same week.",
];

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={[generateLocalBusinessSchema(), generateFAQSchema(faqs)]} />
      <PageShell>
        <Hero
          eyebrow="Serving Raleigh, Wake County, and the Triangle"
          title="Professional Carpet Cleaning in Raleigh, NC"
          subtitle="Truck-mounted hot water extraction for carpet, upholstery, area rugs, pet stains, and tile. Walkthrough pricing, dry in hours, and a seven-day satisfaction guarantee from a locally operated team."
          highlights={[
            "Truck-mounted hot water extraction",
            "Price confirmed before we start",
            "Insured, trained technicians",
            "Same-week appointments, 7 days",
          ]}
        />
        <TrustStrip />

        <Prose
          eyebrow="Carpet cleaners near you"
          title="A Raleigh carpet cleaning company built for Raleigh carpet"
          paragraphs={introParagraphs}
        />

        <ServicesGrid
          id="services"
          title="Six services, one standard"
          intro="Every job follows the same published process. Pick the service that fits your situation and see exactly what is included on its page."
        />

        <HowItWorks />

        <ProcessSteps
          title="What happens on cleaning day"
          intro="Eight steps, in this order, on every carpet job. The full breakdown, and how deep cleaning and pet treatment differ, is on our process page."
        />

        <WhyChoose
          title="Why households across the Triangle keep our number"
          intro="There is no shortage of carpet cleaners in Wake County. These are the four reasons customers tell us they stayed."
          benefits={benefits}
        />

        <Plans />

        <Testimonials />

        <ServiceAreas
          id="areas"
          title="Towns and neighborhoods we cover"
          intro="Dedicated pages for each area include local notes, neighborhoods served, and frequently asked questions."
          areas={allServiceAreas}
          tone="forest"
        />

        <MapEmbed
          query="Raleigh, NC"
          title="Where we work across the Triangle"
          intro="Technicians are dispatched across Raleigh, Wake County, Durham, and Clayton seven days a week."
        />

        <FAQ
          title="Common questions about our Raleigh carpet cleaning"
          intro="Straight answers on pricing, method, drying, and policies. Anything else, send us the form."
          items={faqs}
        />

        <CTABand
          title="Ready for carpet that looks like it did on move-in day?"
          description="Request a quote now and a coordinator will reply with an upfront price and open times, usually the same day."
        />
      </PageShell>
    </>
  );
}
