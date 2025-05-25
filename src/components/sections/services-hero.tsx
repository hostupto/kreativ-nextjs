import Image from "next/image"

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-[#f7c94b]">Services</span>
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              We offer a comprehensive range of interior design and construction services tailored to meet your specific
              needs and requirements.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">End-to-End Solutions</h3>
              <p className="text-gray-700 mb-4">
                From concept to completion, we handle every aspect of your project, ensuring a seamless and stress-free
                experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#f7c94b] rounded-full"></span>
                  <span>Concept Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#f7c94b] rounded-full"></span>
                  <span>Space Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#f7c94b] rounded-full"></span>
                  <span>Material Selection</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#f7c94b] rounded-full"></span>
                  <span>Project Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#f7c94b] rounded-full"></span>
                  <span>Installation & Execution</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#f7c94b] rounded-full opacity-30"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f7c94b] rounded-full opacity-30"></div>

            <Image
              src="/placeholder.svg?height=600&width=800&query=interior design services blueprint and materials"
              alt="Our Services"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl tube-image shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
