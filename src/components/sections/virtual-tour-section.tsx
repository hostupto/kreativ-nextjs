import Image from "next/image"
import { Play } from "lucide-react"

export default function VirtualTourSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              3D VR <span className="text-[#f7c94b]">Walkthrough</span>
            </h2>

            <p className="text-gray-700 mb-8">
              The Kreativ Studio team helps present walkthrough videos or animations before stakeholders and clients in
              the most convincing way possible. Get in touch with the Kreativ Studio team to discuss your requirements
              or to explore the 3D virtual tour services.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#f7c94b] rounded-full"></div>
                <p className="text-gray-700">Immersive 3D visualization of your space</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#f7c94b] rounded-full"></div>
                <p className="text-gray-700">Virtual reality experience for realistic preview</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#f7c94b] rounded-full"></div>
                <p className="text-gray-700">Interactive walkthrough for better understanding</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#f7c94b] rounded-full"></div>
                <p className="text-gray-700">Detailed visualization before actual implementation</p>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#f7c94b] text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-[#e5b73a] transition-colors"
            >
              Request a Demo
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
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#f7c94b] rounded-full opacity-30"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f7c94b] rounded-full opacity-30"></div>

            <div className="relative rounded-2xl tube-image overflow-hidden">
              <Image
                src="/images/interior-image-15.webp"
                alt="3D VR Walkthrough"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a href="#" className="bg-white bg-opacity-80 p-5 rounded-full hover:bg-[#f7c94b] transition-colors">
                  <Play className="w-8 h-8 text-gray-900" fill="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
