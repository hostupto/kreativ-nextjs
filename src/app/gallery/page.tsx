import type { Metadata } from "next"
import PageHeader from "@/components/common/page-header"
import GalleryGrid from "@/components/sections/gallery-grid"
import VirtualTourSection from "@/components/sections/virtual-tour-section"
import ContactSection from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "Gallery - Kreativ Studio",
  description: "Browse through our portfolio of completed interior design and construction projects.",
}

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Our Gallery"
        subtitle="Browse through our portfolio of completed projects showcasing our expertise in interior design and construction."
        backgroundImage="/gallery-header-bg.png"
      />
      <GalleryGrid />
      <VirtualTourSection />
      <ContactSection />
    </>
  )
}
