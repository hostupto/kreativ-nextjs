import Image from "next/image"
import { MapPin } from "lucide-react"

const offices = [
  {
    location: "EOI, CHENNAI",
    image: "/images/chennai-office-interior.webp",
  },
  {
    location: "GACHIBOWLI, HYDERABAD",
    image: "/images/hyderabad-office-interior.webp",
  },
  {
    location: "HSR LAYOUT, BANGALORE",
    image: "/images/bangalore-office-interior.webp",
  },
  {
    location: "SIDCO INDUSTRIAL ESTATE, CHENNAI",
    image: "/images/chennai-factory-interior.webp",
  },
]

export default function OfficeLocations() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Offices</h2>
          <p className="text-gray-600">Visit us at any of our office locations across South India.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl tube-image">
              <Image
                src={office.image || "/placeholder.svg"}
                alt={`Office at ${office.location}`}
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <MapPin className="text-[#f7c94b]" />
                    <h3 className="text-xl font-semibold">OUR OFFICE @</h3>
                  </div>
                  <p className="text-lg font-bold text-[#f7c94b]">{office.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
