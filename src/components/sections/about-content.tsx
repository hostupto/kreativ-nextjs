import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutContent() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#f7c94b] rounded-full opacity-30"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f7c94b] rounded-full opacity-30"></div>

            <Image
              src="/images/luxury-interior-design-team.webp"
              alt="Our Mission"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl tube-image shadow-xl"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-[#f7c94b]">Mission & Vision</span>
            </h2>

            <p className="text-gray-700 mb-6">
              At Kreativ Studio, we understand that every project is unique and requires a personalized approach. Our
              mission is to transform spaces into stunning, functional environments that reflect the personality and
              lifestyle of our clients. We are committed to delivering exceptional quality, innovative designs, and
              superior craftsmanship.
            </p>

            <p className="text-gray-700 mb-6">
              Our vision is to be the leading interior design and construction company in South India, known for our
              creativity, reliability, and customer-centric approach. We strive to set new standards in the industry
              through our commitment to excellence and sustainable practices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#f7c94b]" />
                <span>Customer Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#f7c94b]" />
                <span>Quality Craftsmanship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#f7c94b]" />
                <span>Innovative Designs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#f7c94b]" />
                <span>Timely Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
