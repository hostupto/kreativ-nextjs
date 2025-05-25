"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  })

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the message for WhatsApp
    const message = `New Inquiry from Website:
Name: ${formData.name}
Mobile: ${formData.mobile}
Email: ${formData.email}`

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message)

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/919789325717?text=${encodedMessage}`, "_blank")
  }

  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/luxury-interior-hero.webp"
          alt="Luxury Interior Design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1a1a1a]/70"></div>
      </div>

      <div className="container-custom relative z-10 mt-16 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-10 left-0 w-20 h-1 bg-[#f7c94b]"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              <span className="text-white">Modern</span>
              <br />
              <span className="text-[#f7c94b]">Interior</span>
              <br />
              <span className="text-white">Design</span>
            </h1>

            <p className="text-lg text-gray-200 mb-8 max-w-lg">
              Kreativ Studio is an acclaimed multidisciplinary studio specializing in interior architecture, interior
              design and decor that redefines laid-back luxury.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="/services"
                className="bg-[#f7c94b] text-[#1a1a1a] px-6 py-3 rounded-full font-medium hover:bg-[#e5b73a] transition-colors flex items-center justify-center gap-2"
              >
                Explore Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium hover:border-[#f7c94b] hover:text-[#f7c94b] transition-colors flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-[#f7c94b]">15+</div>
                <p className="text-gray-300">Years of experience</p>
              </div>
              <div className="h-12 w-px bg-gray-500"></div>
              <div>
                <div className="text-3xl font-bold text-[#f7c94b]">2400+</div>
                <p className="text-gray-300">Projects completed</p>
              </div>
            </div>
          </div>

          <div className="lg:ml-auto">
            <div
              className="bg-[#1a1a1a]/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl max-w-md border border-gray-800"
              suppressHydrationWarning
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#f7c94b]">Get Free Consultation</h3>

              {isMounted && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#2a2a2a]/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7c94b] text-white"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#2a2a2a]/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7c94b] text-white"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#2a2a2a]/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7c94b] text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#f7c94b] text-[#1a1a1a] py-3 rounded-lg font-medium hover:bg-[#e5b73a] transition-colors"
                  >
                    GET FREE QUOTE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1a1a1a] to-transparent z-10"></div>
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-[#f7c94b]/10 blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-[#f7c94b]/10 blur-3xl z-0"></div>
    </section>
  )
}
