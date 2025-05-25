import Image from "next/image"

export default function GalleryHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-[#f7c94b]">Gallery</span>
          </h1>

          <p className="text-lg text-gray-700">
            Browse through our portfolio of completed projects showcasing our expertise in interior design and
            construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="relative overflow-hidden rounded-xl tube-image h-80">
              <Image
                src="/placeholder.svg?height=600&width=800&query=luxury modern living room interior design"
                alt="Luxury Living Room"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Residential Projects</h3>
              </div>
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-xl tube-image h-80">
              <Image
                src="/placeholder.svg?height=600&width=400&query=modern office interior design"
                alt="Modern Office"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Commercial Projects</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
