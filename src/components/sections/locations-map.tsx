import Image from "next/image"
import { MapPin } from "lucide-react"

const locations = [
  {
    city: "Chennai",
    address: "18/55B, 1st Main Road, New Colony, Chromepet, Chennai - 600 044, Near Balaji Hospital, Tamilnadu, India",
    image: "/placeholder.svg?height=300&width=500&query=map of Chennai India",
  },
  {
    city: "Hyderabad",
    address: "Gachibowli, Hyderabad, Telangana, India",
    image: "/placeholder.svg?height=300&width=500&query=map of Hyderabad India",
  },
  {
    city: "Bangalore",
    address: "HSR Layout, Bangalore, Karnataka, India",
    image: "/placeholder.svg?height=300&width=500&query=map of Bangalore India",
  },
]

export default function LocationsMap() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
          <p className="text-gray-600">Visit us at any of our office locations across South India.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={`Map of ${location.city}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="text-[#f7c94b]" />
                  <h3 className="text-xl font-semibold">{location.city}</h3>
                </div>
                <p className="text-gray-600 mb-4">{location.address}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#f7c94b] font-medium hover:text-[#e5b73a] transition-colors"
                >
                  Get Directions
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
          ))}
        </div>
      </div>
    </section>
  )
}
