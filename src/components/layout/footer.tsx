import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Image
              src="/kreativ-studio-logo-light.png"
              alt="Kreativ Studio"
              width={200}
              height={60}
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 mb-6">
              Your trusted partner for all your construction and interior design needs with 15+ years of experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-[#f7c94b] text-[#1a1a1a] p-2 rounded-full hover:bg-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-[#f7c94b] text-[#1a1a1a] p-2 rounded-full hover:bg-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-[#f7c94b] text-[#1a1a1a] p-2 rounded-full hover:bg-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-[#f7c94b] text-[#1a1a1a] p-2 rounded-full hover:bg-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#f7c94b]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#f7c94b] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#f7c94b] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#f7c94b] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-[#f7c94b] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#f7c94b] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Our Services</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#f7c94b]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#f7c94b] transition-colors">
                  Building Construction
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#f7c94b] transition-colors">
                  Interior Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#f7c94b] transition-colors">
                  Joint Venture
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#f7c94b] transition-colors">
                  Industrial Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#f7c94b] transition-colors">
                  Renovation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#f7c94b] transition-colors">
                  Consultancy Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Contact Info</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#f7c94b]"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-[#f7c94b] shrink-0 mt-1" />
                <span className="text-gray-400">
                  18/55B, 1st Main Road, New Colony, Chromepet, Chennai - 600 044, Near Balaji Hospital, Tamilnadu,
                  India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-[#f7c94b] shrink-0" />
                <a href="tel:+919789325717" className="text-gray-400 hover:text-[#f7c94b] transition-colors">
                  +91 9789 325 717
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="text-[#f7c94b] shrink-0" />
                <a
                  href="mailto:mdfarook@kreativstudio.co.in"
                  className="text-gray-400 hover:text-[#f7c94b] transition-colors"
                >
                  mdfarook@kreativstudio.co.in
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="text-[#f7c94b] shrink-0" />
                <a
                  href="mailto:kreativmodel@gmail.com"
                  className="text-gray-400 hover:text-[#f7c94b] transition-colors"
                >
                  kreativmodel@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>
            © {currentYear} Kreativ Studio. All Rights Reserved. |
            <span className="ml-1">
              Developed by{" "}
              <a
                href="https://orangemegasoftware.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f7c94b] hover:underline"
              >
                OrangeMegaSoftware
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
