import Image from "next/image"
import { Building, Home, Briefcase, Factory, PenToolIcon, WrenchIcon } from "lucide-react"

const services = [
  {
    icon: <Building className="w-12 h-12 text-[#f7c94b]" />,
    title: "Building Construction",
    description:
      "We believe that every building should reflect the aura of its owner. Our construction services encompass residential, commercial, and institutional projects. We handle everything from foundation to finishing, ensuring the highest quality standards at every stage.",
    image: "/services/building-construction-site.webp",
  },
  {
    icon: <Home className="w-12 h-12 text-[#f7c94b]" />,
    title: "Interiors",
    description:
      "Aesthetic sense is an innate experience beyond description. We give life to your aesthetic sense through our interior design services. From space planning to furniture selection, we create interiors that are both beautiful and functional, reflecting your personal style and preferences.",
    image: "/services/interiors.webp",
  },
  {
    icon: <Briefcase className="w-12 h-12 text-[#f7c94b]" />,
    title: "Joint Venture",
    description:
      "We leverage our technical expertise to develop your land for Commercial and Residential Projects. Our joint venture services provide a win-win solution for landowners looking to maximize the value of their property through strategic development partnerships.",
    image: "/services/business-partners-handshake.webp",
  },
  {
    icon: <Factory className="w-12 h-12 text-[#f7c94b]" />,
    title: "Industrial Projects",
    description:
      "Robustness, Utility, Precision, Aesthetic and adherence to industry specific standards are our primary focus in this segment. We design and build industrial spaces that optimize workflow, enhance productivity, and comply with all relevant regulations.",
    image: "/services/industrial-projects.webp",
  },
  {
    icon: <WrenchIcon className="w-12 h-12 text-[#f7c94b]" />,
    title: "Renovation",
    description:
      "Adding longevity to your buildings with our expert renovation services. Whether you're looking to update an outdated space, expand your current layout, or repair structural issues, our renovation services breathe new life into existing buildings.",
    image: "/services/renovation.webp",
  },
  {
    icon: <PenToolIcon className="w-12 h-12 text-[#f7c94b]" />,
    title: "Consultancy Services",
    description:
      "We provide expert consultancy services including Structural and Elevation Designs, Cost Estimation, and Building Valuation. Our team of experienced professionals offers valuable insights and guidance to help you make informed decisions about your property.",
    image: "/services/interior-design-consultation.webp",
  },
]

export default function DetailedServices() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Services</h2>
          <p className="text-gray-600">
            We offer a wide range of services to meet all your interior design and construction needs.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-100 rounded-full">{service.icon}</div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>

                <p className="text-gray-700 mb-6">{service.description}</p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#f7c94b] font-medium hover:text-[#e5b73a] transition-colors"
                >
                  Learn More
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

              <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#f7c94b] rounded-full opacity-30"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#f7c94b] rounded-full opacity-30"></div>

                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl tube-image shadow-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
