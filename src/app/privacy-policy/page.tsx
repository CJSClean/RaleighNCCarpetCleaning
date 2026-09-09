import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import { SITE_CONFIG, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Raleigh NC Carpet Cleaning collects, uses, and protects the information you share through our quote form, email, and website in North Carolina.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "What we collect",
    body: [
      `When you request a quote through our website, the form asks for your name, phone number, email address, zip code, the service you are interested in, how you found us, and an optional message. When you book a cleaning we also collect the service address and details about the rooms, fibers, and condition of the carpet or upholstery that are needed to price and perform the work. If you pay by card, payment details are processed by our payment provider and are never stored on ${SITE_CONFIG.name} systems.`,
      "Our website records standard technical information such as IP address, browser type, pages visited, and referring site. We use this to keep the site working and to understand which pages are useful.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "Your information is used to respond to your request, prepare a quote, schedule and perform cleanings, send appointment confirmations and reminders, process payment, and follow up on service quality, including any claim under our seven-day satisfaction guarantee. The \"how you found us\" answer is used only to understand which of our listings and referrals are working. With your permission we may send occasional service reminders or offers; you can opt out at any time by replying STOP to a text or clicking unsubscribe in an email.",
    ],
  },
  {
    heading: "Who we share it with",
    body: [
      "We share only what is needed with providers that help us operate: scheduling software, payment processing, text and email delivery, and website hosting. We do not sell or rent customer information to anyone. We will disclose information if required by law or to protect the safety of our technicians and customers.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "This site uses essential cookies to function and may use analytics cookies to measure traffic. You can disable cookies in your browser; the site will continue to work but some features may be limited.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can ask to see, correct, or delete the personal information we hold about you by emailing us. We will respond within 30 days. Booking history needed for tax, insurance, or legal records may be retained for the period required by law.",
    ],
  },
  {
    heading: "North Carolina residents",
    body: [
      `${SITE_CONFIG.name} operates in North Carolina and this policy is governed by North Carolina law. If we ever experience a security breach involving your personal information, we will notify you as required by the North Carolina Identity Theft Protection Act.`,
    ],
  },
  {
    heading: "Changes and contact",
    body: [
      `This policy may be updated as our services change. The current version is always posted on this page. Questions can be sent to ${SITE_CONFIG.email}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Legal</p>
          <h1 className="font-display mt-2 text-4xl font-semibold text-forest">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted">Effective September 9, 2026</p>
          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-2xl font-semibold text-forest">{s.heading}</h2>
                <div className="prose-body mt-3 leading-relaxed text-ink/85">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
