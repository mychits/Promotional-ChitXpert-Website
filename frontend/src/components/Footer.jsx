import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronRight,
  Heart,
  Code,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo cx.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - LOGO + CONTACT INFO */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <img
                  src={logo}
                  alt="Chits Logo"
                  className="relative h-12 w-auto bg-white/10 backdrop-blur-sm rounded-lg p-1"
                />
              </div>
              <p className="text-white text-sm sm:text-base font-bold tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 transition-all">
                ChitXpert
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm">
              Smart Financial Chit Management Software....
            </p>

            <div className="space-y-3">
              <p className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-teal-500/20 transition-colors">
                  <Mail size={16} className="text-teal-400" />
                </div>
                <span className="text-sm">info.chitXpert@gmail.com</span>
              </p>

              <p className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Phone size={16} className="text-cyan-400" />
                </div>
                <span className="text-sm">+91 98453 44717 / 94484 88955</span>
              </p>
            </div>

            {/* App Store Badges */}
            <div className="flex items-center gap-4 pt-2">
              {/* App Store */}
              <a
                href="https://apps.apple.com/in/app/mychits/id6761298273"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-11 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com/store/search?q=mychits&c=apps&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Google Play"
                  className="h-16 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Column 2 - COMPANY */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-teal-400 relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/features", label: "Features" },
                { to: "/signup", label: "Free Trial" },
                {
                  to: "/#action",
                  label: "Auction & Bid Handling",
                  isHash: true,
                },
                { to: "/report", label: "Reports & Analytics" },
                { to: "/security", label: "Security & Compliance" },
              ].map((item, index) => (
                <li key={index}>
                  {item.isHash ? (
                    <NavLink
                      to={item.to}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("action")?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                      className="text-gray-300 hover:text-teal-400 transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform text-sm">
                        {item.label}
                      </span>
                    </NavLink>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `text-gray-300 hover:text-teal-400 transition-colors flex items-center gap-2 group ${isActive ? "text-teal-400" : ""}`
                      }
                    >
                      <ChevronRight className="w-4 h-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform text-sm">
                        {item.label}
                      </span>
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - SUPPORT */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-cyan-400 relative inline-block">
              Support
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/faq", label: "FAQs" },
                { href: "/contact", label: "Contact" },
                { href: "/Help&support", label: "Help & Support" },
                { href: "/privacy", label: "Privacy & Policy" },
                { href: "/termcondition", label: "Terms & Conditions" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform text-sm">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - FOLLOW US + SOCIAL */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-teal-400 relative inline-block">
              Follow Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"></span>
            </h4>

            <p className="text-gray-300 mb-4 text-sm">
              Stay connected with us on social media for updates and news.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <a
                href="https://www.facebook.com/people/Chit-Xpert/pfbid0LPAu2EqGJH3g2gfV4bV3TJKx2HJAYa5RUZTn8QZj6eVKopH3bhXndnnTznrwUHrol/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-[#1877F2]/30"
              >
                <Facebook className="text-white w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/chitxpert/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                style={{
                  background:
                    "linear-gradient(45deg, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5)",
                }}
              >
                <Instagram className="text-white w-5 h-5" />
              </a>

              <a
                href="https://www.youtube.com/@MyChit-z6d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#FF0000] flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF0000]/30"
              >
                <Youtube className="text-white w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1DA1F2] flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-[#1DA1F2]/30"
              >
                <Twitter className="text-white w-5 h-5" />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">
                Subscribe to our newsletter
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
                />
                <button className="px-4 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-r-lg hover:from-teal-600 hover:to-cyan-600 transition-all flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - COMPANY INFORMATION */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-gray-400 order-2 lg:order-1">
              © {currentYear}{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                chitXpert
              </span>
              . All rights reserved.
              <span className="mx-2 text-gray-600">|</span>
              Made with <Heart className="w-3 h-3 inline text-red-500 mx-0.5" />{" "}
              in India
            </p>

            {/* CIN and Address */}
            <div className="text-center text-xs text-gray-500 max-w-2xl order-1 lg:order-2">
              <p>
                VIJAYA VINAYAK CHITFUNDS PRIVATE LIMITED | CIN:
                U65999KA2022PTC161858
              </p>
              <p className="mt-1">
                No 11/36-25, 2nd Main, Kathriguppe Main Road, Bangalore - 560070
              </p>
            </div>

            {/* Developed by */}
            <div className="order-3">
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <Code className="w-4 h-4 text-teal-400" />
                <span>Designed & Developed by</span>
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Sanjay
                </span>
              </p>
            </div>
          </div>

          {/* Payment Partners */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="flex flex-wrap justify-center items-center gap-6">
              <span className="text-sm text-gray-400 font-medium">
                Trusted Payment Partners:
              </span>

              {/* Razorpay - White Background */}
              <div className="bg-white rounded-lg px-4 py-2 hover:scale-110 transition-transform duration-300 shadow-lg">
                <img
                  src="https://razorpay.com/assets/razorpay-logo.svg"
                  alt="Razorpay"
                  className="h-6 w-auto"
                />
              </div>

              {/* Cashfree - White Background */}
              <div className="bg-white rounded-lg px-4 py-2 hover:scale-110 transition-transform duration-300 shadow-lg">
                <img
                  src="https://cashfreelogo.cashfree.com/website/landings/homepage/cashfree10Logo.svg"
                  alt="Cashfree"
                  className="h-6 w-25"
                />
              </div>
            </div>
          </div>

          {/* Additional Trust Badges */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span>SSL Secure</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span>100% Safe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
