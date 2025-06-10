import Link from "next/link"
import { Mail, Phone, MapPin, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VG</span>
              </div>
              <span className="font-bold text-xl">Viquoe Global</span>
            </div>
            <p className="text-slate-300 text-sm">
              Your trusted partner in automobiles, logistics, construction, and international trade. Delivering
              excellence across multiple industries worldwide.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/automobiles" className="text-slate-300 hover:text-white transition-colors">
                  Automobile Sales
                </Link>
              </li>
              <li>
                <Link href="/logistics" className="text-slate-300 hover:text-white transition-colors">
                  Road Logistics & Supply
                </Link>
              </li>
              <li>
                <Link href="/construction" className="text-slate-300 hover:text-white transition-colors">
                  General Contractors
                </Link>
              </li>
              <li>
                <Link href="/trade" className="text-slate-300 hover:text-white transition-colors">
                  Import & Export
                </Link>
              </li>
              <li>
                <Link href="/supply" className="text-slate-300 hover:text-white transition-colors">
                  General Goods Supply
                </Link>
              </li>
              <li>
                <Link href="/facilitation" className="text-slate-300 hover:text-white transition-colors">
                  Trade Facilitation
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-slate-300 hover:text-white transition-colors">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-600 flex-shrink-0" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-600 flex-shrink-0" />
                <span className="text-slate-300">info@viquoeglobal.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  123 Business District
                  <br />
                  Global Trade Center
                  <br />
                  International City, IC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-orange-600 flex-shrink-0" />
                <span className="text-slate-300">www.viquoeglobal.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 Viquoe Global Ltd. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
