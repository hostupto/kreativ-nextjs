import type { Metadata } from "next"
import PageHeader from "@/components/common/page-header"
import DetailedServices from "@/components/sections/detailed-services"
import ProcessSection from "@/components/sections/process-section"
import ProjectsShowcase from "@/components/sections/projects-showcase"
import ContactSection from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "Our Services - Kreativ Studio",
  description: "Explore our comprehensive range of interior design and construction services.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Explore our comprehensive range of interior design and construction services tailored to meet your specific needs."
        backgroundImage="/services-header-bg.png"
      />
      <DetailedServices />
      <ProcessSection />
      <ProjectsShowcase />
      <ContactSection />
    </>
  )
}
