import type { Metadata } from "next"
import PageHeader from "@/components/common/page-header"
import AboutContent from "@/components/sections/about-content"
import TeamSection from "@/components/sections/team-section"
import ExperienceSection from "@/components/sections/experience-section"
import ContactSection from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "About Us - Kreativ Studio",
  description:
    "Learn about our team, our values, and our commitment to excellence in interior design and construction.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Learn more about Kreativ Studio, our team, our values, and our commitment to excellence in interior design and construction."
        backgroundImage="/about-header-bg.png"
      />
      <AboutContent />
      <ExperienceSection />
      <TeamSection />
      <ContactSection />
    </>
  )
}
