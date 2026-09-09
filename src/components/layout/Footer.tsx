import Link from "next/link";
import Logo from "@/components/ui/Logo";
import {
  ClockIcon,
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  NextdoorIcon,
  PhoneIcon,
  PinIcon,
  XIcon,
  YelpIcon,
} from "@/components/ui/Icons";
import { HAS_PHONE, NAV_LINKS, SITE_CONFIG, SOCIAL_PROFILES } from "@/lib/constants";
import { services } from "@/lib/data/services";

function socialIcon(name: string) {
  const cls = "h-4 w-4";
  if (name === "instagram") return <InstagramIcon className={cls} />;
  if (name === "linkedin") return <LinkedInIcon className={cls} />;
  if (name === "x") return <XIcon className={cls} />;
  if (name === "nextdoor") return <NextdoorIcon className={cls} />;
  if (name === "google") return <GoogleIcon className={cls} />;
  if (name === "yelp") return <YelpIcon className={cls} />;
  return <FacebookIcon className={cls} />;
}

export default function Footer() {
  return (
    <footer className="border-t-4 border-forest bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo className="h-12" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Locally operated carpet, upholstery, rug, and tile cleaning for Raleigh and the Triangle.
              Professional hot water extraction, walkthrough pricing, and a seven-day satisfaction guarantee.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {HAS_PHONE && (
                <li>
                  <a href={SITE_CONFIG.phoneHref} className="flex items-center gap-2.5 text-ink hover:text-clay">
                    <PhoneIcon className="h-4 w-4 text-clay" /> {SITE_CONFIG.phone}
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2.5 text-ink hover:text-clay">
                  <MailIcon className="h-4 w-4 text-clay" /> {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted">
                <ClockIcon className="h-4 w-4 text-clay" /> {SITE_CONFIG.hours}
              </li>
              <li className="flex items-start gap-2.5 text-muted">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-clay" /> {SITE_CONFIG.addressLine}
              </li>
            </ul>
            {SITE_CONFIG.googleMapsCid && (
              <div className="mt-6 max-w-sm overflow-hidden rounded-xl border border-line">
                <iframe
                  src={`https://www.google.com/maps?cid=${SITE_CONFIG.googleMapsCid}&output=embed`}
                  title="Raleigh NC Carpet Cleaning on Google Maps"
                  width="100%"
                  height="200"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full"
                />
              </div>
            )}
            {SOCIAL_PROFILES.length > 0 && (
              <ul className="mt-6 flex items-center gap-3">
                {SOCIAL_PROFILES.map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Raleigh NC Carpet Cleaning on ${p.name === "x" ? "X" : p.name.charAt(0).toUpperCase() + p.name.slice(1)}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-forest transition-colors hover:border-forest hover:bg-forest hover:text-white"
                    >
                      {socialIcon(p.name)}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.key}>
                  <Link href={s.href} className="text-sm text-muted hover:text-clay">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/our-process" className="text-sm text-muted hover:text-clay">
                  Our Cleaning Process
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">Service Areas</h3>
            <div className="mt-4 space-y-4">
              {NAV_LINKS.locationsByCounty.map((county) => (
                <div key={county.county}>
                  <Link href={county.href} className="text-sm font-semibold text-ink hover:text-clay">
                    {county.county}
                  </Link>
                  <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
                    {county.cities.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="text-sm text-muted hover:text-clay">
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.main.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted hover:text-clay">
                    {l.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/preparing-for-your-cleaning" className="text-sm text-muted hover:text-clay">
                  Preparing for Your Cleaning
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted hover:text-clay">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted hover:text-clay">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.</p>
          <p>Insured. Serving Raleigh, Wake County, Durham, and Clayton, North Carolina.</p>
        </div>
      </div>
    </footer>
  );
}
