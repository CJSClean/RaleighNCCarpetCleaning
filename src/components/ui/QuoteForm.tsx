"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/lib/data/services";
import { Button } from "./Button";

interface QuoteFormProps {
  compact?: boolean;
  defaultService?: string;
  onSuccess?: () => void;
  submitLabel?: string;
}

const SOURCES = [
  "Google Search",
  "Google Maps",
  "Facebook",
  "Instagram",
  "Nextdoor",
  "Yelp",
  "Friend / Family Referral",
  "Property Manager / Realtor",
  "Other",
];

const inputClass =
  "w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15";

export default function QuoteForm({
  compact = false,
  defaultService = "",
  onSuccess,
  submitLabel = "Request My Quote",
}: QuoteFormProps) {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    service: defaultService,
    source: "",
    message: "",
    "bot-field": "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setData({ ...data, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "quote", ...data }).toString(),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      if (onSuccess) onSuccess();
      else router.push("/success");
    } catch (err) {
      console.error(err);
      setError("We could not send that. Please email us instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-3" name="quote">
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" value={data["bot-field"]} onChange={update} />
        </label>
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="sr-only">Name</label>
          <input id="q-name" name="name" required placeholder="Full name" autoComplete="name" value={data.name} onChange={update} className={inputClass} />
        </div>
        <div>
          <label htmlFor="q-phone" className="sr-only">Phone</label>
          <input id="q-phone" name="phone" type="tel" required placeholder="Phone" autoComplete="tel" value={data.phone} onChange={update} className={inputClass} />
        </div>
        <div>
          <label htmlFor="q-email" className="sr-only">Email</label>
          <input id="q-email" name="email" type="email" required placeholder="Email" autoComplete="email" value={data.email} onChange={update} className={inputClass} />
        </div>
        <div>
          <label htmlFor="q-zip" className="sr-only">Zip code</label>
          <input id="q-zip" name="zip" inputMode="numeric" pattern="[0-9]{5}" required placeholder="Zip code" autoComplete="postal-code" value={data.zip} onChange={update} className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="q-service" className="sr-only">Service</label>
        <select id="q-service" name="service" required value={data.service} onChange={update} className={`${inputClass} ${data.service ? "" : "text-muted/70"}`}>
          <option value="" disabled>What do you need cleaned?</option>
          {services.map((s) => (
            <option key={s.key} value={s.key}>{s.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="q-source" className="sr-only">How did you find us?</label>
        <select id="q-source" name="source" required value={data.source} onChange={update} className={`${inputClass} ${data.source ? "" : "text-muted/70"}`}>
          <option value="" disabled>How did you find us?</option>
          {SOURCES.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
      {!compact && (
        <div>
          <label htmlFor="q-message" className="sr-only">Message</label>
          <textarea id="q-message" name="message" rows={4} placeholder="Rooms, stairs, pets, stains you want treated, anything we should know" value={data.message} onChange={update} className={inputClass} />
        </div>
      )}
      {error && <p className="text-sm text-clay">{error}</p>}
      <Button type="submit" disabled={submitting} className="w-full disabled:opacity-60">
        {submitting ? "Sending..." : submitLabel}
      </Button>
      <p className="text-center text-xs text-muted">
        We reply the same day, seven days a week. No spam, ever.
      </p>
    </form>
  );
}
