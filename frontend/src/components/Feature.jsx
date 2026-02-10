import React from "react";
// import bgImg from "../assets/images/6.png";


export default function Feature() {
  return (
    <section className=" bg-blue-50 py-20" 
    style={{
        backgroundImage: "url('../assets/images/6.png')",
        //  backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
         backgroundRepeat: "no-repeat",

     }} 
     >
      <div className="max-w-7xl mx-auto px-6">

        {/* ROW 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Start & Manage Your Chit Fund Business Effortlessly
            </h2>

            <p className="text-gray-700 mb-6 font-semibold">
              Run your chit fund business with automated billing, SMS alerts,
              and real-time tracking — all in one powerful ERP platform.
            </p>

            <h4 className="font-semibold text-lg mb-2">
              Create Custom Bills & Send Instant SMS
            </h4>
            <p className="text-gray-600 mb-6 font-semibold">
              Generate receipts for every transaction and send automated SMS
              notifications for better transparency.
            </p>

            <h4 className="font-semibold text-lg mb-2">
              Track Member Progress & Money Flow Instantly
            </h4>
            <p className="text-gray-600 font-semibold">
              Monitor members, groups, and financial movements with real-time
              dashboards and reports.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/BILL1.png"
              alt="Chit Fund Dashboard"
              className="w-full max-w-lg "
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center order-2 lg:order-1">
            <img
              src="/B2.png"
              alt="Reports"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-4">
              Say Goodbye to Manual Errors
            </h3>

            <p className="text-gray-700 mb-6 font-semibold">
              Chit fund automates accounting, receipt generation, and reporting —
              reducing manual work and eliminating costly human errors.
            </p>

            <h4 className="font-semibold text-lg mb-2">
              Designed for All Business Sizes
            </h4>

            <p className="text-gray-600 mb-8 font-semibold">
              Whether you’re a small operator or a large enterprise, Chit fund
              scales with you using multi-user support and elegant UI.
            </p>

            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-medium transition">
              Book Free Demo
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
