import Link from "next/link";
import QuoteForm from "@/components/ui/QuoteForm";
import QuoteButton from "@/components/ui/QuoteButton";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon, MailIcon, PhoneIcon, StarIcon } from "@/components/ui/Icons";
import { HAS_PHONE, SITE_CONFIG } from "@/lib/constants";

interface Crumb {
  name: string;
  href: string;
}

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  highlights?: string[];
  breadcrumbs?: Crumb[];
  withForm?: boolean;
  defaultService?: string;
}

function ContactButton() {
  if (HAS_PHONE) {
    return (
      <ButtonLink href={SITE_CONFIG.phoneHref} variant="ghost-light">
        <PhoneIcon className="h-4 w-4" /> Call or text {SITE_CONFIG.phone}
      </ButtonLink>
    );
  }
  return (
    <ButtonLink href="/contact" variant="ghost-light">
      <MailIcon className="h-4 w-4" /> Contact us
    </ButtonLink>
  );
}

export default function Hero({
  eyebrow,
  title,
  subtitle,
  highlights,
  breadcrumbs,
  withForm = true,
  defaultService,
}: HeroProps) {
  const hasReviews = SITE_CONFIG.reviewCount !== "New";
  return (
    <section className="weave relative overflow-hidden bg-forest text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-forest-soft/60 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/60">
            <ol className="flex flex-wrap items-center gap-1.5">
              {breadcrumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden>/</span>}
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-white/90">{c.name}</span>
                  ) : (
                    <Link href={c.href} className="hover:text-white">
                      {c.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={`grid items-center gap-12 ${withForm ? "lg:grid-cols-12" : ""}`}>
          <div className={withForm ? "lg:col-span-7" : "max-w-3xl"}>
            {eyebrow && <p className="eyebrow mb-4 !text-clay-soft">{eyebrow}</p>}
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{subtitle}</p>

            {highlights && highlights.length > 0 && (
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-white/90">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clay">
                      <CheckIcon className="h-3 w-3 text-white" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {!withForm && <QuoteButton defaultService={defaultService} />}
              <ContactButton />
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/70">
              <span className="flex text-amber-300">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              <span>
                {hasReviews
                  ? `${SITE_CONFIG.rating} rating from ${SITE_CONFIG.reviewCount} Triangle households`
                  : "Locally operated in Raleigh, serving Wake County and the Triangle"}
              </span>
            </div>
          </div>

          {withForm && (
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-paper p-6 text-ink shadow-2xl sm:p-7">
                <p className="eyebrow">Free quote in minutes</p>
                <h2 className="font-display mt-1 text-2xl font-semibold text-forest">
                  Get your price and a time slot
                </h2>
                <p className="mb-5 mt-1.5 text-sm text-muted">
                  Same-week availability across most of the Triangle.
                </p>
                <QuoteForm compact defaultService={defaultService} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
