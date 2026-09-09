import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG, SITE_URL } from "@/lib/constants";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  SchemaScript,
} from "@/lib/schema";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Raleigh NC Carpet Cleaning | Carpet, Upholstery & Rug Cleaning in Raleigh, NC",
    template: "%s | Raleigh NC Carpet Cleaning",
  },
  description:
    "Professional carpet cleaning in Raleigh, NC. Hot water extraction for carpet, upholstery, area rugs, pet stains, and tile across Wake County and the Triangle. Free quotes.",
  keywords: [
    "carpet cleaning raleigh nc",
    "raleigh carpet cleaning",
    "carpet cleaners raleigh",
    "upholstery cleaning raleigh",
    "rug cleaning raleigh",
    "pet stain removal raleigh",
    "tile and grout cleaning raleigh",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable}`}>
      <body className="antialiased">
        <SchemaScript schema={[generateOrganizationSchema(), generateWebsiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
