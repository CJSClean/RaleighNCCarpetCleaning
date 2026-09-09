"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import QuoteButton from "@/components/ui/QuoteButton";
import { ButtonLink } from "@/components/ui/Button";
import { ChevronIcon, ClockIcon, CloseIcon, MailIcon, MenuIcon, PhoneIcon, PinIcon, ServiceGlyph } from "@/components/ui/Icons";
import { HAS_PHONE, NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { services } from "@/lib/data/services";

function Dropdown({
  label,
  children,
  wide = false,
}: {
  label: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 py-2 text-sm font-medium text-ink hover:text-clay"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <ChevronIcon className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 ${wide ? "w-[640px]" : "w-[420px]"}`}
        >
          <div className="rounded-xl border border-line bg-paper p-4 shadow-xl">{children}</div>
        </div>
      )}
    </div>
  );
}

type County = (typeof NAV_LINKS.locationsByCounty)[number];

function CountyBlock({ county, columns = 1 }: { county: County; columns?: 1 | 2 }) {
  return (
    <div>
      <Link
        href={county.href}
        className="group mb-2 flex items-center justify-between whitespace-nowrap text-sm font-semibold text-forest hover:text-clay"
      >
        {county.county}
        <ChevronIcon className="h-3.5 w-3.5 -rotate-90 text-muted transition-colors group-hover:text-clay" />
      </Link>
      <ul className={columns === 2 ? "grid grid-cols-2 gap-x-4" : ""}>
        {county.cities.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-ink hover:bg-canvas hover:text-forest"
            >
              <PinIcon className="h-3.5 w-3.5 shrink-0 text-clay/70" />
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40">
      {/* Utility bar */}
      <div className="bg-forest text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-1.5 sm:flex">
              <ClockIcon className="h-3.5 w-3.5 text-clay-soft" /> {SITE_CONFIG.hoursShort}
            </span>
            <span className="hidden items-center gap-1.5 md:flex">
              <PinIcon className="h-3.5 w-3.5 text-clay-soft" /> Serving Raleigh, Cary, Apex, Wake Forest, Durham &amp; the Triangle
            </span>
          </div>
          {HAS_PHONE ? (
            <a href={SITE_CONFIG.phoneHref} className="flex items-center gap-1.5 font-semibold hover:text-clay-soft">
              <PhoneIcon className="h-3.5 w-3.5" /> {SITE_CONFIG.phone}
            </a>
          ) : (
            <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-1.5 font-semibold hover:text-clay-soft">
              <MailIcon className="h-3.5 w-3.5" /> {SITE_CONFIG.email}
            </a>
          )}
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Raleigh NC Carpet Cleaning home" className="shrink-0">
            <Logo className="h-11" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            <Dropdown label="Services" wide>
              <div className="grid grid-cols-2 gap-1">
                {services.map((s) => (
                  <Link
                    key={s.key}
                    href={s.href}
                    className="flex items-start gap-3 rounded-lg p-3 hover:bg-canvas"
                  >
                    <span className="mt-0.5 text-clay">
                      <ServiceGlyph icon={s.icon} className="h-6 w-6" />
                    </span>
                    <span className="block self-center text-sm font-semibold text-forest">{s.name}</span>
                  </Link>
                ))}
              </div>
            </Dropdown>

            <Dropdown label="Service Areas" wide>
              <div className="grid grid-cols-3 gap-x-6 gap-y-5">
                <div className="col-span-2 border-r border-line pr-6">
                  <CountyBlock county={NAV_LINKS.locationsByCounty[0]} columns={2} />
                </div>
                <div className="space-y-5">
                  <CountyBlock county={NAV_LINKS.locationsByCounty[1]} />
                  <CountyBlock county={NAV_LINKS.locationsByCounty[2]} />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-lg bg-canvas px-4 py-2.5 text-xs text-muted">
                <span>Just outside these areas? Send your zip code and we will confirm.</span>
                <Link href="/contact" className="font-semibold text-clay hover:underline">
                  Check my address
                </Link>
              </div>
            </Dropdown>

            {NAV_LINKS.main.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium hover:text-clay ${pathname === l.href ? "text-clay" : "text-ink"}`}
              >
                {l.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2.5 lg:flex">
              <QuoteButton label="Get a Quote" className="px-5 py-2.5" />
              {HAS_PHONE ? (
                <ButtonLink href={SITE_CONFIG.phoneHref} variant="forest" className="px-5 py-2.5">
                  <PhoneIcon className="h-4 w-4" /> Call Now
                </ButtonLink>
              ) : (
                <ButtonLink href="/contact" variant="forest" className="px-5 py-2.5">
                  <MailIcon className="h-4 w-4" /> Contact
                </ButtonLink>
              )}
            </div>
            {HAS_PHONE && (
              <a
                href={SITE_CONFIG.phoneHref}
                aria-label={`Call ${SITE_CONFIG.phone}`}
                className="rounded-lg bg-forest p-2 text-white lg:hidden"
              >
                <PhoneIcon className="h-5 w-5" />
              </a>
            )}
            <button
              className="rounded-lg border border-line p-2 text-forest lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-paper lg:hidden">
          <div className="flex h-[72px] items-center justify-between border-b border-line px-4">
            <Logo className="h-10" />
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="rounded-lg border border-line p-2 text-forest"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="h-[calc(100vh-72px)] overflow-y-auto px-4 pb-10 pt-4">
            <p className="eyebrow mb-2">Services</p>
            <ul className="mb-6 divide-y divide-line rounded-xl border border-line">
              {services.map((s) => (
                <li key={s.key}>
                  <Link href={s.href} onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-ink">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="eyebrow mb-2">Service areas</p>
            <div className="mb-6 grid grid-cols-2 gap-2">
              {NAV_LINKS.locationsByCounty.flatMap((c) => c.cities).map((c) => (
                <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)} className="rounded-lg border border-line px-3 py-2 text-sm text-ink">
                  {c.name}
                </Link>
              ))}
            </div>

            <ul className="mb-8 space-y-1">
              {NAV_LINKS.main.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={() => setMobileOpen(false)} className="block py-2 text-base font-semibold text-forest">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>

            {HAS_PHONE && (
              <a
                href={SITE_CONFIG.phoneHref}
                className="mb-3 flex items-center justify-center gap-2 rounded-lg bg-forest px-6 py-3.5 text-sm font-semibold text-white"
              >
                <PhoneIcon className="h-4 w-4" /> Call {SITE_CONFIG.phone}
              </a>
            )}
            <QuoteButton className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
