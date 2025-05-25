import { IndianRupeeIcon as CurrencyInr, Clock, Award, Shield, Users, Target } from "lucide-react"
import Image from "next/image"

const reasons = [
  {
    icon: <Clock className="w-6 h-6 text-[#f7c94b]" />,
    title: "15 Years Experience",
    description: "Expertise in Civil and Interior design with proven track record",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#f7c94b]" />,
    title: "Quality Assurance",
    description: "Quality should not be compromised, we ensure the best materials",
  },
  {
    icon: <Award className="w-6 h-6 text-[#f7c94b]" />,
    title: "15 Years Warranty",
    description: "We stand behind our work with comprehensive warranty",
  },
  {
    icon: <Target className="w-6 h-6 text-[#f7c94b]" />,
    title: "ONE-STOP Solution",
    description: "From design to execution, we handle everything",
  },
  {
    icon: <Users className="w-6 h-6 text-[#f7c94b]" />,
    title: "Dedicated Site Team",
    description: "Professional team dedicated to your project",
  },
  {
    icon: <CurrencyInr className="w-6 h-6 text-[#f7c94b]" />,
    title: "Price Match Guarantee",
    description: "Competitive pricing without compromising on quality",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#f7c94b] rounded-full opacity-30"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f7c94b] rounded-full opacity-30"></div>

            <Image
              src="/images/interior-image-16.webp"
              alt="Why Choose Us"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl tube-image shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-[#f7c94b]">Kreativ Studio</span>
            </h2>

            <p className="text-gray-700 mb-8">
              With over 15 years of experience in the industry, we have established ourselves as a leading provider of
              interior design and construction services. Here's why our clients trust us:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="p-2 bg-gray-100 rounded-full">{reason.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
