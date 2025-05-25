import Image from "next/image"

const images = [
  {
    src: "/interior-image-1.png",
    alt: "Modern Living Room Interior",
  },
  {
    src: "/interior-image-2.png",
    alt: "Contemporary Kitchen Design",
  },
  {
    src: "/interior-image-3.png",
    alt: "Luxury Bedroom Interior",
  },
  {
    src: "/interior-image-4.png",
    alt: "Elegant Bathroom Design",
  },
  {
    src: "/interior-image-5.png",
    alt: "Stylish Office Space",
  },
]

export default function MobileFullWidthImageSection() {
  return (
    <section className="w-full overflow-x-auto md:hidden">
      <div className="flex flex-nowrap" style={{ width: `${images.length * 100}vw` }}>
        {images.map((image, index) => (
          <div key={index} className="relative w-screen h-[40vh] flex-shrink-0">
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h3 className="text-lg font-semibold">{image.alt}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
