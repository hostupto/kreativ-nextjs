"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What services does Kreativ Studio offer?",
    answer:
      "Kreativ Studio offers a comprehensive range of services including Building Construction, Interior Design, Joint Venture, Industrial Projects, Renovation, and Consultancy Services. We provide end-to-end solutions for all your construction and interior design needs.",
  },
  {
    question: "How long has Kreativ Studio been in business?",
    answer:
      "Kreativ Studio has been in the construction and interior design industry for over 15 years. We have established ourselves as a leading provider of high-quality services in South India.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve Chennai, Hyderabad, and Bangalore, but we also take on projects in other parts of South India. Please contact us to discuss your specific location.",
  },
  {
    question: "How do I get a quote for my project?",
    answer:
      "You can get a quote by filling out the contact form on our website, calling us at +91 9789 325 717, or visiting one of our office locations. We'll schedule a consultation to understand your requirements and provide a detailed quote.",
  },
  {
    question: "What is the typical timeline for a project?",
    answer:
      "The timeline varies depending on the scope and complexity of the project. A small interior design project might take a few weeks, while a large construction project could take several months. We'll provide a detailed timeline during the consultation phase.",
  },
  {
    question: "Do you provide 3D visualization of the project?",
    answer:
      "Yes, we provide 3D visualization and VR walkthrough services to help you better understand how the final project will look. This allows you to make informed decisions and changes before the actual implementation.",
  },
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to some of the most common questions about our services.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {activeIndex === index ? (
                    <ChevronUp className="text-[#f7c94b] w-5 h-5" />
                  ) : (
                    <ChevronDown className="text-[#f7c94b] w-5 h-5" />
                  )}
                </button>

                {activeIndex === index && (
                  <div className="p-6 pt-0 bg-white">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">Still have questions? Feel free to contact us.</p>
            <a
              href="tel:+919789325717"
              className="inline-flex items-center gap-2 bg-[#f7c94b] text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-[#e5b73a] transition-colors"
            >
              Call Us Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
