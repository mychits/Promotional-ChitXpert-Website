import React from "react";
import Navbar from "../components/Navbar";
import grpManagementImg from "../assets/images/grp-mng-rbg.png";
import custManagementImg from "../assets/images/cust-mng.png";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { CheckCircle } from "lucide-react"; // Assuming you have lucide installed

export default function FeatureDetails() {

  const features = [
    {
      id: "chit-group-management",
      title: "Chit Group Management",
      description: [
        "Create and manage multiple chit groups with duration, amounts, members, and schedules.",
        "Track group performance, auctions, collections, and outstanding payments easily.",
        "Configure group rules, start and end dates, and contribution frequencies while monthly installments are calculated automatically.",
        "Monitor auctions, collections, payouts, and outstanding dues in real time."
      ],
      image: custManagementImg
    },
    {
      id: "member-management",
      title: "Member & Customer Management",
      description: [
        "Maintain secure profiles with contact, payment history, nominee, and guarantor details.",
        "Automated reminders for payments, auctions, and updates.",
        "Track member participation across multiple chit groups with full transaction history.",
        "Notifications reduce defaults and follow-up effort."
      ],
      image: grpManagementImg
    },
    {
      id: "auction-bid-handling",
      title: "Auction & Bid Handling",
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

      {/* Background with Gradient */}
      <div className="bg-blue-50">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24">

          {/* PAGE HEADING */}
          <div className="text-center max-w-4xl mx-auto mb-24">
            <span className="bg-green-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              Comprehensive Suite
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
              Key Features of <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                Chit Fund Software
              </span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Everything you need to manage chit operations efficiently, transparently, and securely. Powered by automation and designed for growth.
            </p>
          </div>

          {features.map((feature, index) => (
            <div
              key={feature.id}
              id={feature.id}
              className={`grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20 mb-24 last:mb-0 transition-all duration-500
                ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
            >
              {/* TEXT CONTENT */}
              <div className="flex flex-col">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h2>

                <ul className="space-y-5">
                  {feature.description.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 group"
                    >
                      <div className="mt-1">
                        <CheckCircle className="text-blue-500 size-6 group-hover:scale-110 transition-transform duration-200" strokeWidth={2.5} />
                      </div>
                      <span className="text-gray-600 text-base leading-relaxed font-medium">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMAGE CONTENT */}
              <div
                className={`flex justify-center ${index % 2 !== 0 ? "md:justify-start" : "md:justify-end"
                  }`}
              >
                <div className="relative w-full max-w-md p-2">
                    {/* Decorative background shadow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-blue-200 rounded-3xl transform translate-y-4 translate-x-4 blur-xl opacity-40"></div>
                    
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="relative w-full transform hover:scale-[1.0] hover:-translate-y-1 transition-all duration-500"
                    />
                </div>
              </div>
            </div>
          ))}

          {/* Final CTA Section */}
          <div className="mt-28 text-center max-w-4xl mx-auto rounded-3xl shadow-xl p-12 border border-blue-100 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

    {/* Icon */}
    <div className="relative z-10 mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mx-auto">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
        </div>
    </div>

    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative z-10">
        All-in-One Chit Fund Management Solution
    </h3>
    
    <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-2xl mx-auto relative z-10">
        Discover how our platform can transform your chit fund operations with powerful features designed for growth and efficiency.
        <strong className="block text-gray-900 mt-2">Manage everything from a single dashboard — no more spreadsheets or manual calculations.</strong>
    </p>
    
    <a
        href="/signup"
        className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform relative z-10 group"
    >
        See Features in Action
        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
    </a>
    
    <p className="mt-6 text-sm text-gray-500 font-medium relative z-10">
        Free Demo Available • Customizable Modules • Enterprise-Ready
    </p>
</div>
        </section>
      </div>

      <Contact />
      <Footer />
    </>
  );
}