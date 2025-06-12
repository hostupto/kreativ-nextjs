"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the message for WhatsApp
    const message = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message)

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/919789325717?text=${encodedMessage}`, "_blank")
  }

  return (
    <section className="py-16 md:py-24 bg-[#1a1a1a] text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="relative mb-4">
              <div className="absolute -top-10 left-0 w-20 h-1 bg-[#f7c94b]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have Questions? <span className="text-[#f7c94b]">Get in Touch</span>
            </h2>

            <p className="text-gray-300 mb-8">
              We're here to help with any questions you may have about our services. Fill out the form and we'll get
              back to you as soon as possible.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="shrink-0 p-2 bg-[#f7c94b] rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#1a1a1a]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white">Our Location</h3>
                  <p className="text-gray-400">
                    18/55B, 1st Main Road, New Colony, Chromepet, Chennai - 600 044, Near Balaji Hospital, Tamilnadu,
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0 p-2 bg-[#f7c94b] rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#1a1a1a]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white">Email Us</h3>
                  <p className="text-gray-400">
                    <a href="mailto:mdfarook@kreativstudio.co.in" className="hover:text-[#f7c94b] transition-colors">
                      mdfarook@kreativstudio.co.in
                    </a>
                    <br />
                    <a href="mailto:kreativmodel@gmail.com" className="hover:text-[#f7c94b] transition-colors">
                      kreativmodel@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0 p-2 bg-[#f7c94b] rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#1a1a1a]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white">Call Us</h3>
                  <p className="text-gray-400">
                    <a href="tel:+919789325717" className="hover:text-[#f7c94b] transition-colors">
                      +91 9789 325 717
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {isMounted && (
            <div suppressHydrationWarning className="bg-[#2a2a2a] p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-[#f7c94b]">Enquire Now</h3>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7c94b] text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7c94b] text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7c94b] text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7c94b] text-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#f7c94b] text-[#1a1a1a] py-3 rounded-lg font-medium hover:bg-[#e5b73a] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    GET FREE QUOTE
                  </button>
                </div>
              </form>
            </div>
          )}

          {!isMounted && (
            <div className="bg-[#2a2a2a] p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-[#f7c94b]">Enquire Now</h3>
              <div className="space-y-4">
                <div className="h-12 bg-[#1a1a1a] rounded-lg animate-pulse"></div>
                <div className="h-12 bg-[#1a1a1a] rounded-lg animate-pulse"></div>
                <div className="h-12 bg-[#1a1a1a] rounded-lg animate-pulse"></div>
                <div className="h-24 bg-[#1a1a1a] rounded-lg animate-pulse"></div>
                <div className="h-12 bg-[#f7c94b] rounded-lg animate-pulse"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
