import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import { Prose } from "@/components/sections/Section";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Neighborhoods from "@/components/sections/Neighborhoods";
import Plans from "@/components/sections/Plans";
import WhyChoose from "@/components/sections/WhyChoose";
import MapEmbed from "@/components/sections/MapEmbed";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQ from "@/components/sections/FAQ";
import CTABand from "@/components/sections/CTABand";
import { allServiceAreas, type Location } from "@/lib/data/locations";
import type { AreaContent } from "@/lib/data/types";
import { generateBreadcrumbSchema, generateFAQSchema, generateLocalBusinessSchema, SchemaScript } from "@/lib/schema";

export default function AreaPage({ location, content }: { location: Location; content: AreaContent }) {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/#areas" },
    { name: location.name, href: location.href },
  ];
  return (
    <>
      <SchemaScript
        schema={[
          generateLocalBusinessSchema([`${location.name}, NC`]),
          generateBreadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: c.href }))),
          generateFAQSchema(content.faqs),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow={content.eyebrow}
          title={`Carpet Cleaning in ${location.name}, NC`}
          subtitle={content.subtitle}
          highlights={content.highlights}
          breadcrumbs={crumbs}
        />
        <TrustStrip />
        <Prose eyebrow={`Carpet cleaning in ${location.name}`} title={content.introTitle} paragraphs={content.intro} />
        {/*
          Area pages link to the canonical Raleigh service pages rather than
          per-city service pages. A city x service matrix reads as doorway
          content to search engines, so the city pages funnel into one set of
          service pages instead.
        */}
        <ServicesGrid title={`Cleaning services available in ${location.name}`} intro={content.servicesIntro} />
        <Neighborhoods
          title={`${location.name} neighborhoods we serve`}
          intro={content.neighborhoodsIntro}
          items={location.neighborhoods}
          zipCodes={location.zipCodes}
        />
        <Plans title={`How often ${location.name} homes get their carpet cleaned`} />
        <WhyChoose title={`Why ${location.name} chooses Raleigh NC Carpet Cleaning`} benefits={content.benefits} />
        <MapEmbed query={location.mapQuery} title={`Where we work in ${location.name}`} />
        <Testimonials filter={location.name} tone="paper" />
        <FAQ title={`${location.name} carpet cleaning questions`} items={content.faqs} tone="canvas" />
        <ServiceAreas
          title="Other areas we serve"
          areas={allServiceAreas.filter((a) => a.href !== location.href)}
          tone="forest"
        />
        <CTABand title={content.ctaTitle} description={content.ctaDescription} />
      </PageShell>
    </>
  );
}
