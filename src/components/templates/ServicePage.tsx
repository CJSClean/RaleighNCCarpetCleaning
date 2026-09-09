import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import { Prose } from "@/components/sections/Section";
import WhatIncluded from "@/components/sections/WhatIncluded";
import WhenToBook from "@/components/sections/WhenToBook";
import Plans from "@/components/sections/Plans";
import WhyChoose from "@/components/sections/WhyChoose";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreas from "@/components/sections/ServiceAreas";
import MapEmbed from "@/components/sections/MapEmbed";
import FAQ from "@/components/sections/FAQ";
import CTABand from "@/components/sections/CTABand";
import { allServiceAreas } from "@/lib/data/locations";
import type { Service } from "@/lib/data/types";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, SchemaScript } from "@/lib/schema";

export default function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <SchemaScript
        schema={[
          generateServiceSchema({
            name: service.name,
            description: service.metaDescription,
            url: service.href,
          }),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#services" },
            { name: service.name, url: service.href },
          ]),
          generateFAQSchema(service.faqs),
        ]}
      />
      <PageShell>
        <Hero
          eyebrow={service.name}
          title={service.h1}
          subtitle={service.subtitle}
          highlights={service.highlights}
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: service.name, href: service.href },
          ]}
          defaultService={service.key}
        />
        <TrustStrip />
        <Prose eyebrow="Overview" title={service.introTitle} paragraphs={service.intro} />
        <WhatIncluded
          title={service.includedTitle}
          intro={service.includedIntro}
          sections={service.included}
          notIncluded={service.notIncluded}
        />
        <WhenToBook title={service.scenariosTitle} scenarios={service.scenarios} />
        {service.showPlans && <Plans />}
        <WhyChoose title={service.benefitsTitle} benefits={service.benefits} />
        <Testimonials filter={service.testimonialFilter} />
        <ServiceAreas
          title={`${service.name} across the Triangle`}
          intro="Local pages with neighborhood notes and answers to common questions for each area we serve."
          areas={allServiceAreas}
          tone="paper"
        />
        <MapEmbed query="Raleigh, NC" title={`${service.name} across Raleigh and Wake County`} />
        <FAQ title={`${service.name} questions`} items={service.faqs} />
        <CTABand title={service.ctaTitle} description={service.ctaDescription} defaultService={service.key} />
      </PageShell>
    </>
  );
}
