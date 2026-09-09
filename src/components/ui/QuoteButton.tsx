"use client";

import { useState } from "react";
import { Button } from "./Button";
import QuoteModal from "./QuoteModal";

interface QuoteButtonProps {
  label?: string;
  variant?: "clay" | "forest" | "outline" | "ghost-light";
  className?: string;
  defaultService?: string;
}

export default function QuoteButton({
  label = "Get a Free Quote",
  variant = "clay",
  className = "",
  defaultService,
}: QuoteButtonProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant={variant} className={className} onClick={() => setOpen(true)}>
        {label}
      </Button>
      <QuoteModal open={open} onClose={() => setOpen(false)} defaultService={defaultService} />
    </>
  );
}
