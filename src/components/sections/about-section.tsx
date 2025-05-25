import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-[#1a1a1a] text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative mb-4">
              <div className="absolute -top-10 left-0 w-20 h-1 bg-[#f7c94b]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#f7c94b]">15 YEAR'S</span> EXPERIENCE
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-300">
              Luxury Architecture Villa Home | Commercial architects | urban design | interiors
            </h3>

            <p className="text-gray-300 mb-8">
              Welcome to <strong className="text-[#f7c94b]">KAS END-END DESIGN & EXECUTION</strong>. Construction |
              Architects | Interiors | Exterior. Fabrication, your trusted partner for all your construction civil
              needs. Our company is built on a foundation of excellence, integrity, and commitment to{" "}
              <strong className="text-[#f7c94b]">Customer Satisfaction</strong>.
            </p>

            <p className="text-gray-300 mb-8">
              We have been serving the construction industry for 15 year's and have established ourselves as a
              reputable, reliable, and innovative construction contractor. Our team of experts has the experience,
              knowledge, and skills to take on any project, no matter the size or complexity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#f7c94b]" />
                <span className="text-gray-300">Professional Team</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#f7c94b]" />
                <span className="text-gray-300">Quality Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#f7c94b]" />
                <span className="text-gray-300">Timely Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#f7c94b]" />
                <span className="text-gray-300">Competitive Pricing</span>
              </div>
            </div>

            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-[#f7c94b] text-[#1a1a1a] px-6 py-3 rounded-full font-medium hover:bg-[#e5b73a] transition-colors"
            >
              Learn More About Us
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

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#f7c94b] rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f7c94b] rounded-full opacity-20"></div>

            <div className="bg-[#f7c94b]/10 p-6 rounded-2xl">
              <Image
                src="/images/luxury-interior-design-team.webp"
                alt="15 Years Experience"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl tube-image shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
