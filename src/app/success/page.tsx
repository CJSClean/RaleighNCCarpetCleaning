import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { HAS_PHONE, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request Received",
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <PageShell>
      <section className="flex min-h-[60vh] items-center bg-canvas py-20">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-moss text-forest">
            <CheckIcon className="h-10 w-10" />
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest sm:text-4xl">We have your request</h1>
          <p className="mt-4 text-lg text-muted">
            A coordinator will reply with an upfront quote and available times, usually the same day.
            {HAS_PHONE ? ` Need something sooner? Call ${SITE_CONFIG.phone}.` : ` Need something sooner? Email ${SITE_CONFIG.email}.`}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/" variant="forest">Back to home</ButtonLink>
            <ButtonLink href="/preparing-for-your-cleaning" variant="outline">How to prepare</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
