import Image from "next/image"
import Link from "next/link"

const galleryImages = [
  {
    src: "/images/modern-kitchen.webp",
    alt: "Modern Kitchen Design",
  },
  {
    src: "/images/luxury-living-room.webp",
    alt: "Luxury Living Room",
  },
  {
    src: "/images/contemporary-bedroom.webp",
    alt: "Contemporary Bedroom",
  },
  {
    src: "/images/elegant-bathroom.webp",
    alt: "Elegant Bathroom",
  },
]

export default function GallerySection() {
  return (
    <section className="py-16 md:py-24 bg-[#1a1a1a] text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="relative mb-4 inline-block">
            <div className="absolute -top-10 left-0 right-0 mx-auto w-20 h-1 bg-[#f7c94b]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Completed Projects</h2>
          <p className="text-gray-400">
            Browse through our portfolio of completed projects showcasing our expertise in interior design and
            construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl tube-image">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-semibold mb-2">{image.alt}</h3>
                  <p className="text-sm">Interior Design Project</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-[#f7c94b] text-[#1a1a1a] px-6 py-3 rounded-full font-medium hover:bg-[#e5b73a] transition-colors"
          >
            View All Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
