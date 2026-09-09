// Shared content shapes. Service and area copy files import from here so the
// page templates can stay generic.

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface Scenario {
  title: string;
  description: string;
}

export interface IncludedSection {
  title: string;
  items: string[];
}

export type ServiceIcon = "carpet" | "sofa" | "rug" | "paw" | "tile" | "office";

export interface Service {
  /** Short key used in form values and lookups, e.g. "carpet-cleaning". */
  key: string;
  name: string;
  /** Full page slug, e.g. "carpet-cleaning-raleigh-nc". */
  slug: string;
  href: string;
  icon: ServiceIcon;
  /** One or two sentences used on service cards. */
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  highlights: string[];
  introTitle: string;
  intro: string[];
  includedTitle: string;
  includedIntro?: string;
  included: IncludedSection[];
  notIncluded?: string[];
  scenariosTitle: string;
  scenarios: Scenario[];
  benefitsTitle: string;
  benefits: Benefit[];
  faqs: FAQItem[];
  ctaTitle: string;
  ctaDescription: string;
  /** Show the maintenance-plan section. Off for one-off services. */
  showPlans?: boolean;
  /** Testimonials whose service field includes this text sort first. */
  testimonialFilter?: string;
}

export interface AreaContent {
  /** Matches Location.key in locations.ts. */
  key: string;
  eyebrow: string;
  subtitle: string;
  highlights: string[];
  introTitle: string;
  intro: string[];
  servicesIntro: string;
  neighborhoodsIntro: string;
  benefits: Benefit[];
  faqs: FAQItem[];
  ctaTitle: string;
  ctaDescription: string;
}

export interface CountyContent {
  /** Matches CountyPage.key in locations.ts. */
  key: string;
  eyebrow: string;
  subtitle: string;
  highlights: string[];
  introTitle: string;
  intro: string[];
  /** Towns and communities named on the page, including ones without their own page. */
  communities: string[];
  benefits: Benefit[];
  faqs: FAQItem[];
  ctaTitle: string;
  ctaDescription: string;
}
