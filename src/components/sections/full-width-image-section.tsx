import Image from "next/image"

const images = [
  {
    src: "/images/interior-image-1.webp",
    alt: "Modern Living Room Interior",
  },
  {
    src: "/images/interior-image-2.webp",
    alt: "Contemporary Kitchen Design",
  },
  {
    src: "/images/interior-image-3.webp",
    alt: "Luxury Bedroom Interior",
  },
  {
    src: "/images/interior-image-4.webp",
    alt: "Elegant Bathroom Design",
  },
  {
    src: "/images/interior-image-5.webp",
    alt: "Stylish Office Space",
  },
  {
    src: "/images/interior-image-6.webp",
    alt: "Minimalist Dining Room",
  },
]

export default function FullWidthImageSection() {
  return (
    <section className="w-full overflow-hidden">
      {/* Desktop Version - Single Row */}
      <div className="hidden md:flex w-full">
        {images.map((image, index) => (
          <div key={index} className="relative flex-1 h-[50vh]">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 16.666vw, 100vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h3 className="text-xl font-semibold">{image.alt}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Version - Two Rows */}
      <div className="md:hidden grid grid-cols-3 w-full">
        {images.map((image, index) => (
          <div key={index} className="relative h-[30vh]">
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" sizes="33vw" />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center p-2">
                <h3 className="text-sm font-semibold">{image.alt}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
