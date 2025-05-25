import type React from "react"

interface PageHeaderProps {
  title: string
  backgroundImage: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, backgroundImage }) => {
  return (
    <div
      className="relative h-64 md:h-96 bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="text-4xl md:text-6xl font-bold z-10 text-center">{title}</h1>
    </div>
  )
}

export default PageHeader
