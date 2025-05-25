const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "We begin with a detailed consultation to understand your requirements, preferences, and budget.",
  },
  {
    number: "02",
    title: "Concept Development",
    description: "Our design team creates initial concepts and mood boards based on your requirements.",
  },
  {
    number: "03",
    title: "Design Presentation",
    description: "We present detailed designs, 3D visualizations, and material samples for your approval.",
  },
  {
    number: "04",
    title: "Project Planning",
    description: "Once the design is approved, we create a detailed project plan with timelines and milestones.",
  },
  {
    number: "05",
    title: "Execution",
    description: "Our skilled team executes the project according to the approved design and plan.",
  },
  {
    number: "06",
    title: "Quality Check",
    description: "We conduct thorough quality checks at every stage to ensure the highest standards.",
  },
  {
    number: "07",
    title: "Handover",
    description: "Once everything is perfect, we hand over the project to you with a detailed walkthrough.",
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#f7c94b]/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#f7c94b]/5 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="relative mb-4 inline-block">
            <div className="absolute -top-10 left-0 right-0 mx-auto w-20 h-1 bg-[#f7c94b]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#f7c94b]">Process</span>
          </h2>
          <p className="text-gray-400">
            We follow a systematic approach to ensure that every project is executed flawlessly from start to finish.
            Our proven methodology guarantees exceptional results and client satisfaction.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f7c94b] via-[#f7c94b]/50 to-[#f7c94b]/20 hidden md:block"></div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div
                    className={`bg-[#2a2a2a] p-8 rounded-xl shadow-lg border-t-4 border-[#f7c94b] hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
                    style={{ maxWidth: "500px" }}
                  >
                    <h3 className="text-xl font-bold mb-3 text-[#f7c94b]">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>

                <div className="relative z-20 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#f7c94b] flex items-center justify-center text-[#1a1a1a] font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                </div>

                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/services"
              className="inline-flex items-center gap-2 bg-[#f7c94b] text-[#1a1a1a] px-6 py-3 rounded-full font-medium hover:bg-[#e5b73a] transition-colors"
            >
              Start Your Project
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
      </div>
    </section>
  )
}
