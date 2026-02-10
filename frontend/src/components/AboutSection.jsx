import React from "react";

export default function AboutSection() {
  return (
    <section id="AboutSection" className="py-45"
      style={{
        backgroundImage: "url('/3page.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
       
      }}
      >
      <div className="max-w-7xl mx-auto px-6">
       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            {/* <div className="absolute -z-10 w-72 h-72 bg-blue-500 rounded-full -left-10 top-20"></div> */}

            <img
              src="/s4.png"
              alt="Dashboard"
              className="w-full max-w-lg mx-auto md:-ml-16"

            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="inline-block mb-4 bg-yellow-200 text-yellow-800 px-4 py-1 rounded-full text-sm">
              About
            </span>

            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Manage Your Chit Fund Business with Smart Chit Fund Software
            </h1>

            <p className="mt-6 font-semibold text-gray-900 leading-relaxed">
              Chit fund is an intuitive and powerful Chit Fund Software designed
              for simplicity and efficiency. Even first-time users can quickly
              master the platform and manage their entire chit fund business
              with confidence.
            </p>

            <p className="mt-4 font-semibold text-gray-900 leading-relaxed">
              Track every transaction — receipts, payments, auctions and access
              real-time updates across all branches from any device, anywhere.
            </p>

            <p className="mt-4 font-semibold text-gray-900 leading-relaxed">
              With Chit fund, you gain complete visibility into your business’s financial flows while
              strengthening relationships with loyal subscribers. Our software not only streamlines
              operations but also helps you deliver a trustworthy and transparent chit fund experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
