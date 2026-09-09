"use client";

import { useEffect, useState } from "react";
import QuoteForm from "./QuoteForm";
import { CheckIcon, CloseIcon } from "./Icons";
import { Button } from "./Button";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function QuoteModal({ open, onClose, defaultService }: QuoteModalProps) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const close = () => {
    setDone(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-forest-deep/70 p-4 backdrop-blur-sm"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Request a quote"
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-paper p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted hover:bg-canvas hover:text-ink"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
        {done ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-cream text-forest">
              <CheckIcon className="h-8 w-8" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-forest">Request received</h3>
            <p className="mt-3 text-muted">
              Thanks for reaching out. A coordinator will call or text you shortly with a quote and available times.
            </p>
            <Button variant="forest" className="mt-6 w-full" onClick={close}>Done</Button>
          </div>
        ) : (
          <>
            <p className="eyebrow">Free quote</p>
            <h3 className="font-display mt-1 text-2xl font-semibold text-forest sm:text-3xl">
              Tell us about your place
            </h3>
            <p className="mb-5 mt-2 text-sm text-muted">
              Takes about 30 seconds. We confirm pricing before anything is booked.
            </p>
            <QuoteForm compact defaultService={defaultService} onSuccess={() => setDone(true)} />
          </>
        )}
      </div>
    </div>
  );
}
