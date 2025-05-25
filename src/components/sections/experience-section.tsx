const ExperienceSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Our Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Experience Item 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/images/business-partners-handshake.webp"
              alt="Business Partnership"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Strategic Partnerships</h3>
              <p className="text-gray-600">We forge strong partnerships to deliver exceptional results.</p>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/images/luxury-living-room.webp"
              alt="Luxury Project Showcase"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Luxury Project Showcase</h3>
              <p className="text-gray-600">Explore our portfolio of high-end projects.</p>
            </div>
          </div>

          {/* Experience Item 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/images/modern-kitchen.webp" alt="Modern Design Showcase" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern Design Showcase</h3>
              <p className="text-gray-600">Discover our innovative and contemporary designs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
