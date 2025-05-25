import Image from "next/image"

const projects = [
  {
    category: "Residential",
    title: "Modern Villa Interior",
    image: "/images/interior-image-2.webp",
  },
  {
    category: "Commercial",
    title: "Corporate Office Design",
    image: "/images/interior-image-3.webp",
  },
  {
    category: "Hospitality",
    title: "Boutique Hotel Renovation",
    image: "/images/interior-image-4.webp",
  },
  {
    category: "Retail",
    title: "Luxury Retail Store",
    image: "/images/interior-image-5.webp",
  },
]

export default function ProjectsShowcase() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600">
            Take a look at some of our recent projects that showcase our expertise and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl tube-image">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6">
                <span className="text-[#f7c94b] text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
                <a
                  href="#"
                  className="bg-[#f7c94b] text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-white transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 bg-[#f7c94b] text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-[#e5b73a] transition-colors"
          >
            View All Projects
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
      </div>
    </section>
  )
}
