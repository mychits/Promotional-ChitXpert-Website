import React from "react";
import dashboard from "../assets/images/s2.png"; 

export default function HowItWorks() {
  const steps = [
    {
      title: "Sign Up & Get Started",
      desc: "Reach out to the Chit Fund team for a demo. Once verified, receive login credentials."
    },
    {
      title: "Add Members & Create Groups",
      desc: "Add members, create chit groups, and assign users easily with just a few clicks."
    },
    {
      title: "Set Up Auctions",
      desc: "Define chit amount, duration, and auction schedule for transparent operations."
    },
    {
      title: "Configure Calculations",
      desc: "Set commission, interest, and system auto-calculates everything accurately."
    },
    {
      title: "Manage Fund Distribution",
      desc: "Distribute funds to members securely and manage multiple chits effortlessly."
    },
    {
      title: "Access Real-Time Reports",
      desc: "View live reports, summaries, and branch-wise performance instantly."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-blue-50 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
            backgroundImage: "radial-gradient(#166534 1.5px, transparent 1.5px)", 
            backgroundSize: "30px 30px" 
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Process</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
              How It Works
            </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - STEPS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Floating Number Badge */}
                <div className="absolute -top-4 -right-4 h-10 w-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg border-4 border-white">
                  0{index + 1}
                </div>

                <h4 className="mt-2 text-lg font-bold text-gray-800">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT - IMAGE */}
          <div className="relative flex justify-center order-first lg:order-last">
            
            {/* Decorative Background Blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

            {/* STRAIGHT IMAGE - No rotation */}
            <div className="relative rounded-3xl shadow-2xl border-4 border-white overflow-hidden transform hover:scale-[1.02] transition duration-500 ease-out">
              <img
                src={dashboard}
                alt="How Chitfund Works"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}