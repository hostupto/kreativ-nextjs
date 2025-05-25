// This file is no longer needed as we're using the PageHeader component
// Keeping this file for reference but it's not being used
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#1a1a1a] text-white overflow-hidden curved-shape">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-[#f7c94b]">Kreativ Studio</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8">
              With over 15 years of experience in the industry, we have established ourselves as a leading provider of
              interior design and construction services in South India.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-[#f7c94b] mb-2">15+</div>
                <p className="text-gray-400">Years Experience</p>
              </div>

              <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-[#f7c94b] mb-2">2400+</div>
                <p className="text-gray-400">Projects Completed</p>
              </div>

              <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-[#f7c94b] mb-2">180+</div>
                <p className="text-gray-400">Team Members</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#f7c94b] rounded-full opacity-30"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f7c94b] rounded-full opacity-30"></div>

            <Image
              src="/interior-design-team.png"
              alt="About Kreativ Studio"
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
