"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false)
    router.push(path)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1a1a1a] shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => handleNavigation("/")}>
          <Image
            src="/kreativ-studio-logo-light.png"
            alt="Kreativ Studio"
            width={220}
            height={60}
            className="h-16 w-auto rounded-lg"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-white hover:text-[#f7c94b] font-medium transition-colors"
                    onClick={() => handleNavigation(item.path)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="tel:+919789325717"
            className="flex items-center gap-2 bg-[#f7c94b] text-[#1a1a1a] px-4 py-2 rounded-full font-medium hover:bg-[#e5b73a] transition-colors"
          >
            <Phone size={18} />
            <span>+91 9789 325 717</span>
          </a>
        </div>

        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a1a1a] absolute top-full left-0 right-0 shadow-md">
          <nav className="container-custom py-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="block text-white hover:text-[#f7c94b] font-medium py-2 transition-colors"
                    onClick={() => handleNavigation(item.path)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="tel:+919789325717"
                  className="flex items-center gap-2 bg-[#f7c94b] text-[#1a1a1a] px-4 py-2 rounded-full font-medium hover:bg-[#e5b73a] transition-colors w-fit"
                >
                  <Phone size={18} />
                  <span>+91 9789 325 717</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}