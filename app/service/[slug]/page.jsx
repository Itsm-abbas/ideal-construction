import { notFound } from "next/navigation";
import servicesData from "@lib/services.json";

import ServiceDetail from "./ServiceDetail";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }) {
  const service = servicesData.find((service) => service.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetail service={service} />
    </>
  );
}
