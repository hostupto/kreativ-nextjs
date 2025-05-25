import Image from "next/image"

export default function ContactHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="text-[#f7c94b]">Touch</span>
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              We're here to help with any questions you may have about our services. Reach out to us and we'll respond
              as soon as we can.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">Visit Our Office</h3>
                <p className="text-gray-700">
                  18/55B, 1st Main Road, New Colony, Chromepet, Chennai - 600 044, Near Balaji Hospital, Tamilnadu,
                  India
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">Contact Info</h3>
                <p className="text-gray-700">
                  <a href="tel:+919789325717" className="hover:text-[#f7c94b] transition-colors">
                    +91 9789 325 717
                  </a>
                  <br />
                  <a href="mailto:mdfarook@kreativstudio.in" className="hover:text-[#f7c94b] transition-colors">
                    mdfarook@kreativstudio.in
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#f7c94b] rounded-full opacity-30"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f7c94b] rounded-full opacity-30"></div>

            <Image
              src="/placeholder.svg?height=600&width=800&query=interior design office with team meeting clients"
              alt="Contact Us"
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
