import React from "react";
import Navbar from "../components/Navbar";
import Mobileapp2 from "../assets/images/mobile2.png";
import Mobileapp3 from "../assets/images/mobile3.png";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { CheckCircle, Sparkles, Users, Briefcase, CreditCard, BadgeCheck } from "lucide-react";

export default function MobileDetails() {
  const apps = [
    {
      id: "Agent-app",
      title: "Agent Fund App",
      description: [
        "Complete control over customers and chit group management.",
        "Digital monthly collections with real-time payment tracking.",
        "Instant view of active, upcoming, and completed chit groups.",
        "Easy attendance and bidding management during auctions.",
        "Automatic tracking of dues, penalties, and overdue payments.",
        "Clear visibility of agent commissions and earnings.",
        "Instant alerts for payments, auctions, and reminders.",
        "Less paperwork, fewer errors, and faster operations.",
        "Track multiple chit groups assigned to you from one dashboard.",
        "Generate collection reports and share with management instantly."
      ],
      image: Mobileapp3,
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      id: "Customer-app",
      title: "Customer App",
      description: [
        "Access all your joined chit groups in one secure place.",
        "Know your monthly installment amount and due dates instantly.",
        "Make fast and secure online payments without visiting office.",
        "View complete payment history and download receipts anytime.",
        "Get smart reminders for due dates and auction schedules.",
        "Participate in chit auctions digitally with full transparency.",
        "Track auction results, winnings, and outstanding balances.",
        "Receive instant notifications for group updates and announcements.",
        "Download statements and certificates directly from the app.",
        "24/7 access to your chit portfolio from anywhere."
      ],
      image: Mobileapp2,
      icon: <Users className="w-5 h-5" />
    },
    {
      id: "Collection-app",
      title: "Collection App",
      description: [
        "Dedicated app for field staff to manage daily collections efficiently.",
        "Real-time tracking of collected payments with instant receipt generation.",
        "Offline mode support for areas with poor internet connectivity.",
        "View daily collection targets and achieve them with ease.",
        "Track pending collections from customers with automatic reminders.",
        "Mark payments as collected with timestamp and location data.",
        "Upload payment proofs and customer signatures for verification.",
        "Sync data automatically when internet connection is restored.",
        "Generate daily collection reports and submit to management.",
        "Reduce cash handling errors with digital payment tracking."
      ],
      image: Mobileapp3,
      icon: <CreditCard className="w-5 h-5" />
    },
    {
      id: "Employed-app",
      title: "Employee App",
      description: [
        "Comprehensive dashboard for employees to manage daily tasks.",
        "Track attendance, leave requests, and work schedules efficiently.",
        "Monitor customer follow-ups and pending documentation requirements.",
        "View assigned tasks and update their status in real-time.",
        "Access customer details and chit group information on the go.",
        "Submit expense claims and reimbursement requests digitally.",
        "Receive company announcements and important updates instantly.",
        "Track performance metrics and incentive calculations.",
        "Coordinate with team members through in-app messaging.",
        "Generate and share reports with management seamlessly."
      ],
      image: Mobileapp2,
      icon: <BadgeCheck className="w-5 h-5" />
    }
  ];

  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-gray-50 to-white">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

          {/* PAGE HEADING */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm mb-4">
          
              <span>Mobile Applications</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
              Complete Mobile Ecosystem <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
                For ChitXpert Management
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Four powerful apps designed for every stakeholder in your chitXpert business — 
              agents, customers, collection staff, and employees.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                <div className="text-2xl font-bold text-teal-600">10K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                <div className="text-2xl font-bold text-teal-600">50K+</div>
                <div className="text-sm text-gray-600">Transactions</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                <div className="text-2xl font-bold text-teal-600">4.8★</div>
                <div className="text-sm text-gray-600">App Rating</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                <div className="text-2xl font-bold text-teal-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* APP SECTIONS */}
          {apps.map((app, index) => (
            <div
              key={app.id}
              id={app.id}
              className={`grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20 mb-24 last:mb-0 transition-all duration-500 scroll-mt-24
                ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              {/* TEXT CONTENT */}
              <div className="flex flex-col">
                {/* App Type Badge - Teal consistent */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold">
                    {app.icon}
                    <span>
                      {app.id === "Agent-app" ? "Agent" : 
                       app.id === "Customer-app" ? "Customer" :
                       app.id === "Collection-app" ? "Collection" :
                       "Employee"} App
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">Version 2.0</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {app.title}
                </h2>

                {/* Key Features Label */}
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Key Features
                  </span>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600 mt-1"></div>
                </div>

                <ul className="space-y-4">
                  {app.description.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 group"
                    >
                      <div className="mt-1">
                        <CheckCircle className="text-teal-500 w-6 h-6 group-hover:scale-110 transition-transform duration-200" strokeWidth={2.5} />
                      </div>
                      <span className="text-gray-600 text-base leading-relaxed font-medium">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* App Store Badges */}
                <div className="flex gap-3 mt-8">
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="App Store"
                    className="h-10 hover:opacity-80 transition-opacity cursor-pointer"
                  />
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                    alt="Google Play"
                    className="h-10 hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </div>
              </div>

              {/* IMAGE - Clean with teal accents */}
              <div
                className={`flex justify-center ${index % 2 !== 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                <div className="relative group">
                  {/* Subtle teal glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  
                  {/* Image */}
                  <img
                    src={app.image}
                    alt={app.title}
                    className="relative w-full max-w-xs sm:max-w-sm transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 object-contain"
                  />

                  {/* Floating icon badge - Teal */}
                  <div className="absolute -top-4 -right-4 bg-teal-500 rounded-full p-3 shadow-lg">
                    <div className="text-white">
                      {React.cloneElement(app.icon, { className: "w-5 h-5" })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* App Comparison Table - Updated with teal theme */}
          <div className="mt-28 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Which App is Right for You?
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-teal-600">Agent App</th>
                    <th className="text-center py-4 px-6 font-semibold text-teal-600">Customer App</th>
                    <th className="text-center py-4 px-6 font-semibold text-teal-600">Collection App</th>
                    <th className="text-center py-4 px-6 font-semibold text-teal-600">Employee App</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6 text-gray-700">Group Management</td>
                    <td className="text-center py-3 px-6">
                      <span className="text-teal-500 font-bold">✓</span>
                    </td>
                    <td className="text-center py-3 px-6">
                      <span className="text-teal-500 font-bold">✓</span>
                    </td>
                    <td className="text-center py-3 px-6 text-gray-300">✗</td>
                    <td className="text-center py-3 px-6 text-gray-300">✗</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6 text-gray-700">Payment Collection</td>
                    <td className="text-center py-3 px-6">
                      <span className="text-teal-500 font-bold">✓</span>
                    </td>
                    <td className="text-center py-3 px-6">
                      <span className="text-teal-500 font-bold">✓</span>
                    </td>
                    <td className="text-center py-3 px-6">
                      <span className="text-teal-500 font-bold">✓</span>
                    </td>
                    <td className="text-center py-3 px-6 text-gray-300">✗</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6 text-gray-700">Auction Participation</td>
                    <td className="text-center py-3 px-6">
                      <span className="text-teal-500 font-bold">✓</span>
                    </td>
                    <td className="text-center py-3 px-6">
                      <span className="text-teal-500 font-bold">✓</span>
                    </td>
                    <td className="text-center py-3 px-6 text-gray-300">✗</td>
                    <td className="text-center py-3 px-6 text-gray-300">✗</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6 text-gray-700">Offline Mode</td>
                    <td className="text-center py-3 px-6">
                      <span className="text-teal-500 font-bold">✓</span>
                    </td>
                    <td className="text-center py-3 px-6 text-gray-300">✗</td>
                    <td className="text-center py-3 px-6">
                      <span className="text-teal-500 font-bold">✓</span>
                    </td>
                    <td className="text-center py-3 px-6">
                      <span className="text-teal-500 font-bold">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 text-gray-700">Performance Tracking</td>
                    <td className="text-center py-3 px-6">
                      <span className="text-teal-500 font-bold">✓</span>
                    </td>
                    <td className="text-center py-3 px-6 text-gray-300">✗</td>
                    <td className="text-center py-3 px-6">
                      <span className="text-teal-500 font-bold">✓</span>
                    </td>
                    <td className="text-center py-3 px-6">
                      <span className="text-teal-500 font-bold">✓</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Final CTA Section - Already teal */}
          <div className="mt-28 text-center max-w-4xl mx-auto rounded-3xl shadow-xl p-12 bg-gradient-to-br from-teal-600 to-cyan-600 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-2xl mx-auto relative z-10">
              Get all four apps customized for your chitXpert business. 
              <strong className="block text-white mt-2">Start with a free demo today and see the difference.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Start Free Demo
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
            <p className="mt-6 text-sm text-white/80 font-medium relative z-10">
              No credit card required • 15-minute onboarding • Dedicated support team
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}