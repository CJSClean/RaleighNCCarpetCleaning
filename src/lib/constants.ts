export const SITE_URL = "https://raleighnccarpetcleaning.com";

export const SITE_CONFIG = {
  name: "Raleigh NC Carpet Cleaning",
  legalName: "Raleigh NC Carpet Cleaning",
  tagline: "Carpet, upholstery, rug, and tile cleaning across the Triangle",
  // TODO: replace with the real business line once it is provisioned. While
  // phoneHref points at /contact the UI shows a "Contact us" button instead of
  // a phone number.
  phone: "Phone coming soon",
  phoneHref: "/contact",
  email: "contact@raleighnccarpetcleaning.com",
  // Leave streetAddress empty to omit the address from schema and the footer.
  // Raleigh runs as a service-area business until a street address exists.
  streetAddress: "",
  city: "Raleigh",
  state: "NC",
  postalCode: "",
  addressLine: "Serving Raleigh, NC and the Triangle",
  hours: "Open 7 days a week, 7am to 8pm",
  hoursShort: "Open 7 days",
  rating: "5.0",
  reviewCount: "New",
  // Google Business Profile CID goes here once the listing is verified. Embed
  // by CID rather than a name+address query: the query form renders a search
  // and surfaces competing cleaners inside our own pages.
  googleMapsCid: "",
  geo: { latitude: 35.7796, longitude: -78.6382 },
};

export const HAS_PHONE = SITE_CONFIG.phoneHref.startsWith("tel:");

// Only entries that are full URLs are rendered in the footer and schema.
export const SOCIAL_LINKS = {
  instagram: "",
  facebook: "",
  linkedin: "",
  x: "",
  nextdoor: "",
  google: "",
  yelp: "",
};

export const SOCIAL_PROFILES = Object.entries(SOCIAL_LINKS)
  .filter(([, url]) => url.startsWith("http"))
  .map(([name, url]) => ({ name, url }));

export const NAV_LINKS = {
  services: [
    { name: "Carpet Cleaning", href: "/services/carpet-cleaning-raleigh-nc" },
    { name: "Upholstery Cleaning", href: "/services/upholstery-cleaning-raleigh-nc" },
    { name: "Area Rug Cleaning", href: "/services/area-rug-cleaning-raleigh-nc" },
    { name: "Pet Stain & Odor Removal", href: "/services/pet-stain-odor-removal-raleigh-nc" },
    { name: "Tile & Grout Cleaning", href: "/services/tile-and-grout-cleaning-raleigh-nc" },
    { name: "Commercial Carpet Cleaning", href: "/services/commercial-carpet-cleaning-raleigh-nc" },
  ],
  locationsByCounty: [
    {
      county: "Wake County",
      href: "/service-areas/wake-county-nc",
      cities: [
        { name: "Raleigh", href: "/" },
        { name: "North Raleigh", href: "/service-areas/carpet-cleaning-north-raleigh-nc" },
        { name: "Cary", href: "/service-areas/carpet-cleaning-cary-nc" },
        { name: "Apex", href: "/service-areas/carpet-cleaning-apex-nc" },
        { name: "Morrisville", href: "/service-areas/carpet-cleaning-morrisville-nc" },
        { name: "Wake Forest", href: "/service-areas/carpet-cleaning-wake-forest-nc" },
        { name: "Garner", href: "/service-areas/carpet-cleaning-garner-nc" },
        { name: "Knightdale", href: "/service-areas/carpet-cleaning-knightdale-nc" },
        { name: "Holly Springs", href: "/service-areas/carpet-cleaning-holly-springs-nc" },
        { name: "Fuquay-Varina", href: "/service-areas/carpet-cleaning-fuquay-varina-nc" },
      ],
    },
    {
      county: "Durham County",
      href: "/service-areas/durham-county-nc",
      cities: [{ name: "Durham", href: "/service-areas/carpet-cleaning-durham-nc" }],
    },
    {
      county: "Johnston County",
      href: "/service-areas/johnston-county-nc",
      cities: [{ name: "Clayton", href: "/service-areas/carpet-cleaning-clayton-nc" }],
    },
  ],
  main: [
    { name: "Our Process", href: "/our-process" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};
