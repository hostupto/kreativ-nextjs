import { Home, Building, Factory, PenToolIcon, Briefcase, WrenchIcon } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: <Building className="w-10 h-10 text-[#f7c94b]" />,
    title: "Building Construction",
    description: "We believe that every building should reflect the aura of its owner",
  },
  {
    icon: <Home className="w-10 h-10 text-[#f7c94b]" />,
    title: "Interiors",
    description: "Aesthetic sense is an innate experience beyond description. We give life to your aesthetic sense",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-[#f7c94b]" />,
    title: "Joint Venture",
    description: "We leverage our technical expertise to develop your land for Commercial and Residential Projects",
  },
  {
    icon: <Factory className="w-10 h-10 text-[#f7c94b]" />,
    title: "Industrial Projects",
    description: "Robustness, Utility, Precision, Aesthetic and adherence to industry specific standards",
  },
  {
    icon: <WrenchIcon className="w-10 h-10 text-[#f7c94b]" />,
    title: "Renovation",
    description: "Adding longevity to your buildings with our expert renovation services",
  },
  {
    icon: <PenToolIcon className="w-10 h-10 text-[#f7c94b]" />,
    title: "Consultancy Services",
    description: "Structural and Elevation Designs, Cost Estimation, Building Valuation",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#1a1a1a] text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <div className="relative mb-4">
              <div className="absolute -top-10 left-0 w-20 h-1 bg-[#f7c94b]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              End-to-end <span className="text-[#f7c94b]">Home Interior Solutions</span>
            </h2>
            <p className="text-gray-300 mb-8">
              We provide comprehensive interior design and construction services tailored to your unique style and requirements. Our team of experts handles everything from concept to completion, ensuring a seamless experience. Our offerings include all types of building approval plans, new building construction, house renovation, structural design, 3D elevations, and 360° walkthroughs. We specialize in modular kitchens, interiors, floating beds, and custom furnichair. Additional services include pargula installation, fabrication works, and natural stone flooring. We also construct gabion walls, floating staircases, and provide ACP & cladding glass solutions. Our technical team covers electrical work, plumbing, LED strip lighting, as well as painting and water-proofing services.
            </p>
            <a
              href="/services"
              className="inline-flex items-center gap-2 bg-[#f7c94b] text-[#1a1a1a] px-6 py-3 rounded-full font-medium hover:bg-[#e5b73a] transition-colors"
            >
              Explore All Services
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
          <div className="md:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#f7c94b] rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f7c94b] rounded-full opacity-20"></div>
            <Image
              src="/images/luxury-interior-design-team.webp"
              alt="Interior Design Services"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden group rounded-xl bg-gradient-to-br from-[#2a2a2a] to-[#222222] p-8 shadow-lg border-l-4 border-[#f7c94b] hover:border-l-8 transition-all duration-300"
            >
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#f7c94b] rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="mb-6 p-4 bg-[#333333] rounded-full w-20 h-20 flex items-center justify-center group-hover:bg-[#f7c94b]/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#f7c94b] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="/services" className="text-[#f7c94b] font-medium flex items-center gap-2">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
