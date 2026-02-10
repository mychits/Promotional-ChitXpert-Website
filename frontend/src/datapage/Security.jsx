import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Security() {
  return (

   
    <div className="min-h-screen bg-gray-50">
         <Navbar/>
      
      {/* Header */}
      <div className="bg-green-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold">Security & Compliance</h1>
          <p className="mt-3 text-200 text-lg">
            Your trust and financial safety are our top priorities
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">

        {/* Legal Compliance */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Legal Compliance
          </h2>
          <p className="text-gray-600 font-semibold leading-relaxed">
            Our chit fund operations strictly follow the guidelines of the
            <strong> Chit Funds Act, 1982</strong> and applicable state
            regulations. All chit groups are registered and managed as per
            government norms to ensure complete legality and transparency.
          </p>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Data Protection & Privacy
          </h2>
          <p className="text-gray-600 font-semibold leading-relaxed">
            We use industry-standard security practices to protect your personal
            and financial data. Sensitive information such as login credentials,
            personal details, and transaction records are securely stored and
            never shared with unauthorized parties.
          </p>
        </section>

        {/* Secure Payments */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Secure Payment Processing
          </h2>
          <p className="text-gray-600 font-semibold leading-relaxed">
            All payments are processed through trusted and secure payment
            gateways. We ensure encrypted transactions to prevent unauthorized
            access, fraud, or misuse of funds.
          </p>
        </section>

        {/* Auction Transparency */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Transparent Auction System
          </h2>
          <p className="text-gray-600 font-semibold leading-relaxed">
            Our auction and bidding process is fully transparent. Every bid,
            winner selection, and payout is recorded digitally and made available
            for review, ensuring fairness for all members.
          </p>
        </section>

        {/* Fraud Prevention */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Fraud Prevention Measures
          </h2>
          <p className="text-gray-600 font-semibold leading-relaxed">
            We actively monitor transactions and member activities to detect and
            prevent suspicious behavior. Multiple verification checks are in
            place to protect members from fraud or misuse.
          </p>
        </section>

        {/* User Responsibility */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            User Responsibility
          </h2>
          <p className="text-gray-600 font-semibold leading-relaxed">
            Members are encouraged to keep their login credentials confidential
            and report any unusual activity immediately. Together, we can ensure
            a safe and secure chit fund environment.
          </p>
        </section>

      </div>

     <Footer/>
    </div>
  );
}
