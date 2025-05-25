import Image from "next/image"

const TeamSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/images/interior-image-1.webp"
              alt="Team Member 1"
              width={400}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Senior Designer</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/images/interior-image-2.webp"
              alt="Team Member 2"
              width={400}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Lead Architect</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/images/interior-image-3.webp"
              alt="Team Member 3"
              width={400}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Peter Jones</h3>
              <p className="text-gray-600">Project Manager</p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/images/interior-image-4.webp"
              alt="Team Member 4"
              width={400}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Alice Brown</h3>
              <p className="text-gray-600">Interior Decorator</p>
            </div>
          </div>
        </div>

        {/* Team Celebration Image */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Celebrating Success</h2>
          <Image
            src="/images/luxury-interior-design-team.webp"
            alt="Team Celebration"
            width={800}
            height={600}
            className="object-cover rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default TeamSection
