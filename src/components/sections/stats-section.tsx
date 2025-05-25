import { Building, Home, SquareIcon as SquareFeet } from "lucide-react"

const stats = [
  {
    number: "16",
    label: "YEARS EXPERIENCE",
    suffix: "+",
  },
  {
    number: "4225",
    label: "EXECUTIVES",
    suffix: "+",
  },
  {
    number: "180",
    label: "FULL TIME EMPLOYEES",
    suffix: "+",
  },
  {
    number: "1000",
    label: "SQ.FT FACTORY",
    suffix: "K+",
    icon: <SquareFeet className="w-5 h-5" />,
  },
  {
    number: "7000",
    label: "SQ.FT OFFICE SPACE",
    suffix: "+",
    icon: <SquareFeet className="w-5 h-5" />,
  },
  {
    number: "2400",
    label: "DESIGN PROJECTS",
    suffix: "+",
  },
  {
    number: "800",
    label: "APARTMENTS",
    suffix: "+",
    icon: <Building className="w-5 h-5" />,
  },
  {
    number: "1400",
    label: "VILLAS",
    suffix: "+",
    icon: <Home className="w-5 h-5" />,
  },
  {
    number: "700",
    label: "COMMERCIAL PROJECTS",
    suffix: "+",
  },
]

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f7c94b]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">Our Numbers Speak</h2>
          <p className="text-[#1a1a1a]">
            We take pride in our achievements and the trust our clients have placed in us over the years.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#1a1a1a] p-6 rounded-xl shadow-md text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-3xl md:text-4xl font-bold text-white">{stat.number}</span>
                <span className="text-xl font-bold text-[#f7c94b]">{stat.suffix}</span>
                {stat.icon && <span className="text-[#f7c94b]">{stat.icon}</span>}
              </div>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
