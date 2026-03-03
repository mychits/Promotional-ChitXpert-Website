import React from "react";
import Navbar from "../components/Navbar";
import grpManagementImg from "../assets/images/grp-mng-rbg.png";
import custManagementImg from "../assets/images/cust-mng.png";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { CheckCircle, Sparkles, Rocket, Zap, Shield, Users, DollarSign, TrendingUp, CreditCard, MessageSquare, BarChart3, Smartphone, FileText } from "lucide-react";

export default function FeatureDetails() {

  const features = [
    {
      id: "chit-group-management",
      title: "ChitXpert Group Management",
      icon: <BarChart3 className="text-teal-600" />,
      description: [
        "Create and manage multiple chitXpert groups with duration, amounts, members, and schedules.",
        "Track group performance, auctions, collections, and outstanding payments easily.",
        "Configure group rules, start and end dates, and contribution frequencies while monthly installments are calculated automatically.",
        "Monitor auctions, collections, payouts, and outstanding dues in real time."
      ],
      image: custManagementImg
    },
    {
      id: "member-management",
      title: "Member & Customer Management",
      icon: <Users className="text-teal-600" />,
      description: [
        "Maintain secure profiles with contact, payment history, nominee, and guarantor details.",
        "Automated reminders for payments, auctions, and updates.",
        "Track member participation across multiple chitXpert groups with full transaction history.",
        "Notifications reduce defaults and follow-up effort."
      ],
      image: grpManagementImg
    },
    {
      id: "auction-bid-handling",
      title: "Auction & Bid Handling",
      icon: <DollarSign className="text-teal-600" />,
      description: [
        "Automate auction events and bid recording.",
        "Manage winners, calculate discounts, and generate accurate records.",
        "Streamlined auction process ensures transparency and efficiency.",
        "Complete records support reporting and compliance."
      ],
      image: custManagementImg
    },
    {
      id: "financial-management",
      title: "Accounts & Financial Management",
      icon: <TrendingUp className="text-teal-600" />,
      description: [
        "Ledger entries, vouchers, reconciliation, profit & loss tracking.",
        "Real-time financial updates with transaction integration.",
        "Clear visibility into organizational financial health.",
        "Supports decision-making, auditing, and compliance."
      ],
      image: grpManagementImg
    },
    {
      id: "Payment-Tracking",
      title: "Automated Collection & Payment Tracking",
      icon: <CreditCard className="text-teal-600" />,
      description: [
        "Online and offline collection tracking with receipts.",
        "Reduces manual errors and late payments.",
        "Streamlines collections and settlements.",
        "Ensures transparency and accountability."
      ],
      image: grpManagementImg
    },
    {
      id: "Communication-Tools",
      title: "Communication Tools",
      icon: <MessageSquare className="text-teal-600" />,
      description: [
        "SMS alerts for due payments, auctions, and receipts.",
        "Offline SMS support for weak internet areas.",
        "Ensures timely communication anytime, anywhere.",
        "Improves customer and agent engagement."
      ],
      image: custManagementImg
    },
    {
      id: "Reports-Analytics",
      title: "Reports & Analytics",
      icon: <FileText className="text-teal-600" />,
      description: [
        "Real-time reports for pending lists and outstanding dues.",
        "Performance tracking by group or agent.",
        "Export reports in PDF or Excel.",
        "Improves planning, compliance, and transparency."
      ],
      image: grpManagementImg
    },
    {
      id: "Agent-Management",
      title: "Employee & Agent Management",
      icon: <Users className="text-teal-600" />,
      description: [
        "Track collections, attendance, roles, and performance.",
        "Assign tasks and monitor productivity.",
        "Auto-generate payslips and reports.",
        "Reduces manual administrative work."
      ],
      image: custManagementImg
    },
    {
      id: "Security-Compliance",
      title: "Security & Compliance",
      icon: <Shield className="text-teal-600" />,
      description: [
        "Role-based access and encryption protect data.",
        "Meets regulatory and data privacy standards.",
        "System activity logs ensure accountability.",
        "Prevents breaches and builds trust."
      ],
      image: grpManagementImg
    },
    {
      id: "Web-Mobile Access",
      title: "Web & Mobile Access",
      icon: <Smartphone className="text-teal-600" />,
      description: [
        "Cloud-based access for remote and multi-branch operations.",
        "Mobile apps for admins and members.",
        "Real-time sync across all devices.",
        "Improves efficiency and convenience."
      ],
      image: custManagementImg
    }
  ];

  return (
    <>
      <Navbar />

      {/* Background with subtle gradient */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24">

          {/* PAGE HEADING - Enhanced */}
          <div className="text-center max-w-4xl mx-auto mb-24">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm mb-4">
            
              <span>Comprehensive Suite</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
              Key Features of <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
                ChitXpert Software
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Everything you need to manage chitXpert operations efficiently, transparently, and securely. 
              Powered by automation and designed for growth.
            </p>

            {/* Feature Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { number: "10+", label: "Years Experience", icon: <Rocket className="w-5 h-5" /> },
                { number: "500+", label: "Chit Groups", icon: <Users className="w-5 h-5" /> },
                { number: "50K+", label: "Happy Customers", icon: <Users className="w-5 h-5" /> },
                { number: "24/7", label: "Support", icon: <Zap className="w-5 h-5" /> }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-center text-teal-500 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FEATURES GRID - Alternating Layout */}
          {features.map((feature, index) => (
            <div
              key={feature.id}
              id={feature.id}
              className={`grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20 mb-32 last:mb-0 scroll-mt-24
                ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              {/* TEXT CONTENT */}
              <div className="flex flex-col">
                {/* Feature Badge - Teal consistent */}
                <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold w-fit mb-6">
                  {feature.icon}
                  <span>Featured Module</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h2>

                {/* Feature Description List */}
                <ul className="space-y-5">
                  {feature.description.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 group"
                    >
                      <div className="mt-1">
                        <CheckCircle className="text-teal-500 size-6 group-hover:scale-110 transition-transform duration-200" strokeWidth={2.5} />
                      </div>
                      <span className="text-gray-600 text-base leading-relaxed font-medium">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link - Teal consistent */}
                <div className="mt-8">
                  <a 
                    href={`/features/${feature.id}`}
                    className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
                  >
                    Learn more about {feature.title}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* IMAGE CONTENT - Clean, no background, just shadow */}
              <div
                className={`flex justify-center ${index % 2 !== 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                <div className="relative w-full max-w-md">
                  {/* Subtle shadow only - no colored background */}
                  <div className="absolute inset-0 bg-gray-200/20 rounded-3xl transform translate-y-2 translate-x-2 blur-md opacity-30"></div>
                  
                  {/* Clean image container - no border, no background */}
                  <div className="relative">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="relative w-full transform hover:scale-105 transition-all duration-500 drop-shadow-xl"
                    />
                  </div>

                  {/* Floating badge - teal consistent */}
                  <div className="absolute -top-4 -right-4 bg-teal-100 rounded-full p-3 shadow-lg">
                    <div className="text-teal-600">
                      {feature.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Enhanced CTA Section */}
          <div className="mt-28 text-center max-w-5xl mx-auto rounded-3xl shadow-2xl p-12 relative overflow-hidden bg-gradient-to-br from-teal-600 to-cyan-600">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
            
            {/* Floating icons */}
            <div className="absolute top-10 left-10 text-white/10">
              <Rocket className="w-16 h-16" />
            </div>
            <div className="absolute bottom-10 right-10 text-white/10">
              <Zap className="w-16 h-16" />
            </div>

            {/* Icon */}
            <div className="relative z-10 mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mx-auto border border-white/30">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
              Ready to Transform Your Chit Fund Business?
            </h3>
            
            <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-2xl mx-auto relative z-10">
              Join 500+ chit fund businesses already using our platform to streamline operations, 
              reduce errors, and grow with confidence.
              <strong className="block text-white mt-2 text-xl">
                Start your free demo today — no credit card required.
              </strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-teal-600 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                Start Free Demo
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </a>
              
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
            
            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 relative z-10">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Shield className="w-4 h-4" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Users className="w-4 h-4" />
                <span>10K+ Active Users</span>
              </div>
            </div>

            <p className="mt-8 text-sm text-white/60 font-medium relative z-10">
              Free Demo Available • Customizable Modules • Enterprise-Ready • 24/7 Support
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}