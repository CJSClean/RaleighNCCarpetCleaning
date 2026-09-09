import { SITE_CONFIG, SITE_URL, SOCIAL_PROFILES, HAS_PHONE } from "./constants";

const ORG_ID = `${SITE_URL}/#organization`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_URL = `${SITE_URL}/logo.svg`;

function postalAddress() {
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: SITE_CONFIG.city,
    addressRegion: SITE_CONFIG.state,
    addressCountry: "US",
  };
  if (SITE_CONFIG.streetAddress) address.streetAddress = SITE_CONFIG.streetAddress;
  if (SITE_CONFIG.postalCode) address.postalCode = SITE_CONFIG.postalCode;
  return address;
}

function contactFields() {
  const fields: Record<string, string> = { email: SITE_CONFIG.email };
  if (HAS_PHONE) fields.telephone = SITE_CONFIG.phone;
  return fields;
}

const defaultAreas = [
  "Raleigh, NC",
  "North Raleigh, Raleigh, NC",
  "Cary, NC",
  "Apex, NC",
  "Morrisville, NC",
  "Wake Forest, NC",
  "Garner, NC",
  "Knightdale, NC",
  "Holly Springs, NC",
  "Fuquay-Varina, NC",
  "Durham, NC",
  "Clayton, NC",
];

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_CONFIG.name,
    url: SITE_URL,
    logo: LOGO_URL,
    ...contactFields(),
    address: postalAddress(),
    sameAs: SOCIAL_PROFILES.map((p) => p.url),
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_CONFIG.name,
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export function generateLocalBusinessSchema(areaServed?: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": BUSINESS_ID,
    name: SITE_CONFIG.name,
    image: LOGO_URL,
    url: SITE_URL,
    ...contactFields(),
    address: postalAddress(),
    sameAs: SOCIAL_PROFILES.map((p) => p.url),
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    priceRange: "$$",
    areaServed: (areaServed ?? defaultAreas).map((name) => ({ "@type": "Place", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Carpet and Upholstery Cleaning Services",
      itemListElement: [
        "Carpet Cleaning",
        "Upholstery Cleaning",
        "Area Rug Cleaning",
        "Pet Stain and Odor Removal",
        "Tile and Grout Cleaning",
        "Commercial Carpet Cleaning",
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
  };
}

export function generateServiceSchema({
  name,
  description,
  url,
  areaServed,
}: {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: areaServed
      ? { "@type": "Place", name: areaServed }
      : { "@type": "City", name: "Raleigh, NC" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD" },
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${SITE_CONFIG.name}`,
    url: `${SITE_URL}/about`,
    mainEntity: { "@id": ORG_ID },
  };
}

export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE_CONFIG.name}`,
    url: `${SITE_URL}/contact`,
    mainEntity: { "@id": BUSINESS_ID },
  };
}

export function generateHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s) => ({ "@type": "HowToStep", name: s.name, text: s.text })),
  };
}

export function SchemaScript({ schema }: { schema: object | object[] }) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
