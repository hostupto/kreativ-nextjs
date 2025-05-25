// This component is no longer used, but keeping it for reference
"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

const roomTypes = [
  {
    id: "living-room",
    title: "Living Room",
    description: "Create a welcoming space that reflects your lifestyle and personality.",
    image: "/images/living-room-design.webp",
    features: [
      "Custom furniture design",
      "Lighting solutions",
      "Wall treatments",
      "Entertainment setups",
      "Space optimization",
    ],
  },
  {
    id: "bedroom",
    title: "Bedroom",
    description: "Transform your bedroom into a peaceful sanctuary for rest and relaxation.",
    image: "/images/bedroom-design.webp",
    features: [
      "Comfortable bed setups",
      "Wardrobe solutions",
      "Ambient lighting",
      "Color coordination",
      "Relaxing atmosphere",
    ],
  },
  {
    id: "kitchen",
    title: "Kitchen",
    description: "Design a functional and stylish kitchen that makes cooking a pleasure.",
    image: "/images/kitchen-design.webp",
    features: [
      "Modular kitchen designs",
      "Storage optimization",
      "Premium countertops",
      "Appliance integration",
      "Dining solutions",
    ],
  },
  {
    id: "bathroom",
    title: "Bathroom",
    description: "Create a luxurious bathroom that combines functionality with elegance.",
    image: "/images/elegant-bathroom.webp",
    features: ["Luxury fixtures", "Tile and stonework", "Shower enclosures", "Storage solutions", "Spa-like amenities"],
  },
  {
    id: "office",
    title: "Home Office",
    description: "Design a productive workspace that inspires creativity and focus.",
    image: "/images/interior-image-21.webp",
    features: [
      "Ergonomic furniture",
      "Storage systems",
      "Lighting design",
      "Technology integration",
      "Acoustic solutions",
    ],
  },
  {
    id: "outdoor",
    title: "Outdoor Spaces",
    description: "Extend your living space outdoors with beautifully designed patios and gardens.",
    image: "/images/interior-image-22.webp",
    features: ["Patio designs", "Outdoor furniture", "Landscaping", "Lighting solutions", "Weather protection"],
  },
]

export default function RoomTypesSection() {
  const [activeRoom, setActiveRoom] = useState(roomTypes[0].id)

  const selectedRoom = roomTypes.find((room) => room.id === activeRoom) || roomTypes[0]

  return (
    <section className="py-16 md:py-24 bg-[#1a1a1a] text-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="relative mb-4 inline-block">
            <div className="absolute -top-10 left-0 right-0 mx-auto w-20 h-1 bg-[#f7c94b]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Room Design Solutions</h2>
          <p className="text-gray-400">
            We create beautiful, functional spaces tailored to your specific needs and style preferences. Explore our
            specialized design solutions for every room in your home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Room Type Navigation */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="bg-[#2a2a2a] rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-3 text-[#f7c94b]">Room Types</h3>
              <div className="space-y-3">
                {roomTypes.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setActiveRoom(room.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${
                      activeRoom === room.id
                        ? "bg-[#f7c94b] text-[#1a1a1a]"
                        : "bg-[#333333] hover:bg-[#444444] text-white"
                    }`}
                  >
                    <span className="flex-1">{room.title}</span>
                    {activeRoom === room.id && <ArrowRight className="w-5 h-5" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-[#2a2a2a] rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#f7c94b]">Key Features</h3>
              <ul className="space-y-3">
                {selectedRoom.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#f7c94b] mt-0.5 shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[#f7c94b] text-[#1a1a1a] px-6 py-3 rounded-full font-medium hover:bg-[#e5b73a] transition-colors"
                >
                  Explore Services
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

          {/* Room Type Display */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#f7c94b] rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f7c94b] rounded-full opacity-20"></div>

              <div className="relative bg-[#2a2a2a] p-4 rounded-2xl tube-image shadow-xl overflow-hidden">
                <div className="aspect-[16/9] relative overflow-hidden rounded-xl">
                  <Image
                    src={selectedRoom.image || "/placeholder.svg"}
                    alt={selectedRoom.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#f7c94b]">{selectedRoom.title} Design</h3>
                  <p className="text-gray-300 mb-4">{selectedRoom.description}</p>

                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#333333] text-gray-300 px-3 py-1 rounded-full text-sm">Interior Design</span>
                    <span className="bg-[#333333] text-gray-300 px-3 py-1 rounded-full text-sm">Space Planning</span>
                    <span className="bg-[#333333] text-gray-300 px-3 py-1 rounded-full text-sm">
                      Furniture Selection
                    </span>
                    <span className="bg-[#333333] text-gray-300 px-3 py-1 rounded-full text-sm">
                      Color Consultation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {roomTypes.map((room) => (
            <div
              key={room.id}
              onClick={() => setActiveRoom(room.id)}
              className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                activeRoom === room.id ? "ring-4 ring-[#f7c94b]" : "hover:shadow-lg"
              }`}
            >
              <div className="relative h-24 md:h-32">
                <Image src={room.image || "/placeholder.svg"} alt={room.title} fill className="object-cover" />
              </div>
              <div className="p-3 bg-[#2a2a2a] text-center">
                <h4 className="font-medium text-sm text-gray-300">{room.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
