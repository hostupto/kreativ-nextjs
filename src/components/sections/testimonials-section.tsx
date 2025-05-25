"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react"

const testimonials = [
  {
    name: "Kavitha",
    role: "Homeowner",
    content:
      "Kreativ Studio transformed our home beyond our expectations. Their attention to detail and commitment to quality is exceptional. We love our new space!",
    rating: 5,
  },
  {
    name: "Thirumurugan",
    role: "Business Owner",
    content:
      "We hired Kreativ Studio for our office renovation and the results were outstanding. Professional team, timely delivery, and excellent craftsmanship.",
    rating: 5,
  },
  {
    name: "Anandaraj",
    role: "Architect",
    content:
      "As an architect, I've collaborated with many interior design firms, but Kreativ Studio stands out for their innovative approach and technical expertise.",
    rating: 5,
  },
  {
    name: "Jayalakshmi",
    role: "Homeowner",
    content:
      "The team at Kreativ Studio listened to our requirements and delivered a beautiful home that perfectly matches our lifestyle. Highly recommended!",
    rating: 5,
  },
  {
    name: "Velmurugan",
    role: "Property Developer",
    content:
      "We've worked with Kreativ Studio on multiple projects. Their consistency in delivering high-quality work on time makes them our preferred partner.",
    rating: 5,
  },
  {
    name: "Revathi",
    role: "Homeowner",
    content:
      "From concept to completion, Kreativ Studio guided us through the entire process. The end result exceeded our expectations in every way.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1))
  }

  return (
    <section className="py-16 md:py-24 bg-[#f7c94b]/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col hover:bg-[#1a1a1a] group transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gray-200 rounded-full p-2 group-hover:bg-[#2a2a2a]">
                        <User className="w-10 h-10 text-gray-500 group-hover:text-[#f7c94b]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-white">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm group-hover:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#f7c94b] fill-[#f7c94b]" />
                      ))}
                    </div>

                    <p className="text-gray-700 flex-grow group-hover:text-gray-300">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#1a1a1a] text-white p-2 rounded-full shadow-md hover:bg-[#2a2a2a] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#1a1a1a] text-white p-2 rounded-full shadow-md hover:bg-[#2a2a2a] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
