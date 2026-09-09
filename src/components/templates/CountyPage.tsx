import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import { Prose } from "@/components/sections/Section";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Neighborhoods from "@/components/sections/Neighborhoods";
import WhyChoose from "@/components/sections/WhyChoose";
import MapEmbed from "@/components/sections/MapEmbed";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQ from "@/components/sections/FAQ";
import CTABand from "@/components/sections/CTABand";
import { getLocationsByCounty, type CountyPage as County } from "@/lib/data/locations";
import type { CountyContent } from "@/lib/data/types";
import { generateBreadcrumbSchema, generateFAQSchema, generateLocalBusinessSchema, SchemaScript } from "@/lib/schema";

export default function CountyPage({ county, content }: { county: County; content: CountyContent }) {
  const towns = getLocationsByCounty(county.name);
  const related = [
    ...(county.name === "Wake County" ? [{ name: "Raleigh", href: "/" }] : []),
    ...towns.map((t) => ({ name: t.name, href: t.href })),
  ];
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/#areas" },
    { name: county.name, href: county.href },
  ];
  return (
    <>
      <SchemaScript
        schema={[
          generateLocalBusinessSchema([`${county.name}, NC`, ...towns.map((t) => `${t.name}, NC`)]),
          generateBreadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: c.href }))),
          generateFAQSchema(content.faqs),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow={content.eyebrow}
          title={`Carpet Cleaning in ${county.name}, NC`}
          subtitle={content.subtitle}
          highlights={content.highlights}
          breadcrumbs={crumbs}
        />
        <TrustStrip />
        <Prose eyebrow={`Carpet cleaning in ${county.name}`} title={content.introTitle} paragraphs={content.intro} />
        <ServicesGrid
          title={`Cleaning services across ${county.name}`}
          intro="Every service is available in every community we cover. Open one for details and answers to common questions."
        />
        <Neighborhoods
          title={`${county.name} communities we serve`}
          intro="Dedicated pages exist for the areas linked below; the rest of the county is covered too."
          items={content.communities}
        />
        <WhyChoose title={`Why ${county.name} households choose us`} benefits={content.benefits} />
        <MapEmbed query={county.mapQuery} title={`Our ${county.name} coverage`} />
        <Testimonials tone="paper" />
        <FAQ title={`${county.name} carpet cleaning questions`} items={content.faqs} tone="canvas" />
        <ServiceAreas title={`${county.name} area pages`} areas={related} tone="forest" />
        <CTABand title={content.ctaTitle} description={content.ctaDescription} />
      </PageShell>
    </>
  );
}
