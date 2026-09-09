# Raleigh NC Carpet Cleaning

Marketing site for Raleigh NC Carpet Cleaning (raleighnccarpetcleaning.com).
Next.js 16 App Router, Tailwind CSS 4, deployed on Netlify with Netlify Forms.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

- `src/app` routes (home, services, service areas, our process, about, contact, legal)
- `src/lib/data/services/*` one file per service page (copy, FAQs, what is included)
- `src/lib/data/areas/*` one file per service-area and county page
- `src/lib/data/locations.ts` neighborhoods, zip codes, and page slugs
- `src/lib/constants.ts` phone, email, nav, and site URL
- `src/lib/schema.tsx` JSON-LD generators

## Before launch

- Set the phone number in `src/lib/constants.ts` (`phone` and `phoneHref` as `tel:+1...`). Until then the UI shows "Contact us" instead of a number.
- Replace the placeholder quotes in `src/lib/data/testimonials.ts` with real reviews.
- Add the Google Business Profile CID and social links in `src/lib/constants.ts` once they exist.
