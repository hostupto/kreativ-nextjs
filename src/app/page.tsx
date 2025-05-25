import type { Metadata } from "next"
import HeroSection from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/services-section"
import WhyChooseUs from "@/components/sections/why-choose-us"
import AboutSection from "@/components/sections/about-section"
import StatsSection from "@/components/sections/stats-section"
import GallerySection from "@/components/sections/gallery-section"
import OfficeLocations from "@/components/sections/office-locations"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ContactSection from "@/components/sections/contact-section"
import FullWidthImageSection from "@/components/sections/full-width-image-section"

export const metadata: Metadata = {
  title: "Kreativ Studio - Interior Design & Construction Experts",
  description: "Luxury Architecture, Interior Design & Construction Services with 15+ years of experience",
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FullWidthImageSection />
      <WhyChooseUs />
      <AboutSection />
      <StatsSection />
      <GallerySection />
      <OfficeLocations />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
