import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/templates/ServicePage";
import { services, getServiceBySlug } from "@/lib/data/services";
import { SITE_URL } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Page not found" };
  return {
    title: { absolute: `${service.metaTitle} | Raleigh NC Carpet Cleaning` },
    description: service.metaDescription,
    alternates: { canonical: `${SITE_URL}${service.href}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_URL}${service.href}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
