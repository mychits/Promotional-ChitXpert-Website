import React from "react";
import Navbar from "../components/Navbar";
import Mobileapp2 from "../assets/images/mobile2.png";
import Mobileapp3 from "../assets/images/mobile3.png";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { CheckCircle } from "lucide-react";

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
        "Less paperwork, fewer errors, and faster operations."
      ],
      image: Mobileapp3
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
        "Enjoy a hassle-free chit experience with total peace of mind."
      ],
      image: Mobileapp2
    }
  ];

  return (
    <>
      <Navbar />

      <div className="bg-green-50">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

          {/* PAGE HEADING */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              Mobile Applications
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
              Smart, Secure & Simple <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500">
                Chit Fund Mobile Apps
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Manage chit operations, payments, and auctions seamlessly —
              anytime, anywhere.
            </p>
          </div>

          {/* APP SECTIONS */}
          {apps.map((app, index) => (
            <div
              key={app.id}
              id={app.id}
              className={`grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20 mb-24 last:mb-0 transition-all duration-500
                ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
            >
              {/* TEXT CONTENT */}
              <div className="flex flex-col">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {app.title}
                </h2>

                <ul className="space-y-4">
                  {app.description.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 group"
                    >
                      <div className="mt-1">
                        <CheckCircle className="text-green-500 w-6 h-6 group-hover:scale-110 transition-transform duration-200" strokeWidth={2.5} />
                      </div>
                      <span className="text-gray-600 text-base leading-relaxed font-medium">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMAGE - No background, no border, just the floating image */}
              <div
                className={`flex justify-center ${index % 2 !== 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                {/* 
                   REMOVED the wrapper div with background/border. 
                   Added 'rounded-2xl' to give the phone rounded corners directly.
                   Added 'shadow-2xl' to float it.
                */}
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full max-w-xs sm:max-w-sm transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 object-contain bg-transparent"
                />
              </div>
            </div>
          ))}


          {/* Final CTA Section */}
          <div className="mt-28 text-center max-w-4xl mx-auto rounded-3xl shadow-xl p-12 border border-green-100 relative overflow-hidden">
             {/* Decorative circle */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 translate-x-1/2 -translate-y-1/2"></div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative z-10">
              Transform Your Chit Fund Operations Today
            </h3>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-2xl mx-auto relative z-10">
              Join hundreds of chit fund businesses already using our mobile apps to reduce errors, save time, and grow with confidence.
              <strong className="block text-gray-900 mt-2">Get full control, real-time insights, and seamless customer management — all from your phone.</strong>
            </p>
            <a
              href="/signup"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform relative z-10"
            >
              Start Your Free Demo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </a>
            <p className="mt-6 text-sm text-gray-500 font-medium relative z-10">
              No credit card required • 15-minute onboarding • Dedicated support
            </p>
          </div>
        </section>
      </div>

      <Contact />
      <Footer />
    </>
  );
}