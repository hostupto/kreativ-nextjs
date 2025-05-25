"use client"

import { useState } from "react"
import Image from "next/image"

const categories = ["All", "Residential", "Commercial", "Hospitality", "Retail"]

const galleryItems = [
  {
    category: "Residential",
    title: "Modern Villa Interior",
    image: "/images/interior-image-6.webp",
  },
  {
    category: "Commercial",
    title: "Corporate Office Design",
    image: "/images/interior-image-7.webp",
  },
  {
    category: "Hospitality",
    title: "Boutique Hotel Renovation",
    image: "/images/interior-image-8.webp",
  },
  {
    category: "Retail",
    title: "Luxury Retail Store",
    image: "/images/interior-image-9.webp",
  },
  {
    category: "Residential",
    title: "Contemporary Apartment",
    image: "/images/interior-image-10.webp",
  },
  {
    category: "Commercial",
    title: "Modern Restaurant Design",
    image: "/images/interior-image-11.webp",
  },
  {
    category: "Residential",
    title: "Luxury Bathroom Design",
    image: "/images/interior-image-12.webp",
  },
  {
    category: "Hospitality",
    title: "Resort Villa Design",
    image: "/images/interior-image-13.webp",
  },
  {
    category: "Retail",
    title: "Fashion Boutique Interior",
    image: "/images/interior-image-14.webp",
  },
]

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[#f7c94b] text-gray-900"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl tube-image">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <span className="text-[#f7c94b] text-sm font-medium block mb-2">{item.category}</span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
