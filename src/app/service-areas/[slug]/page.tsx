import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaPage from "@/components/templates/AreaPage";
import CountyPage from "@/components/templates/CountyPage";
import { locations, countyPages, getLocationBySlug, getCountyBySlug } from "@/lib/data/locations";
import { getAreaContent, getCountyContent } from "@/lib/data/areas";
import { SITE_URL } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [...locations.map((l) => ({ slug: l.slug })), ...countyPages.map((c) => ({ slug: c.slug }))];
}

function resolve(slug: string) {
  const location = getLocationBySlug(slug);
  if (location) {
    const content = getAreaContent(location.key);
    return content ? { kind: "area" as const, location, content } : null;
  }
  const county = getCountyBySlug(slug);
  if (county) {
    const content = getCountyContent(county.key);
    return content ? { kind: "county" as const, county, content } : null;
  }
  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = resolve(slug);
  if (!data) return { title: "Page not found" };
  const name = data.kind === "area" ? data.location.name : data.county.name;
  const href = data.kind === "area" ? data.location.href : data.county.href;
  const title = `Carpet Cleaning ${name} NC`;
  const description = data.content.subtitle;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${href}` },
    openGraph: {
      title: `Carpet Cleaning in ${name}, NC`,
      description,
      url: `${SITE_URL}${href}`,
      type: "website",
    },
  };
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const data = resolve(slug);
  if (!data) notFound();
  if (data.kind === "area") return <AreaPage location={data.location} content={data.content} />;
  return <CountyPage county={data.county} content={data.content} />;
}
