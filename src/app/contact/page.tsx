import type { Metadata } from "next"
import PageHeader from "@/components/common/page-header"
import ContactForm from "@/components/common/contact-form"
import LocationsMap from "@/components/sections/locations-map"
import FaqSection from "@/components/sections/faq-section"

export const metadata: Metadata = {
  title: "Contact Us - Kreativ Studio",
  description: "Get in touch with our team for inquiries, consultations, or to discuss your project requirements.",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, consultations, or to discuss your project requirements."
        backgroundImage="/contact-header-bg.png"
      />
      <ContactForm />
      <LocationsMap />
      <FaqSection />
    </>
  )
}
