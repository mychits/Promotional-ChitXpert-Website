import React from "react";
import {
  ShieldCheck,
  IndianRupee,
  Users,
  Smartphone
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-indigo-900 font-semibold tracking-widest text-sm">
            TRUST · TRANSPARENCY · TECHNOLOGY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mt-4">
            Why Choose MyChits?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            We combine secure financial practices with modern technology to
            provide a hassle-free chit fund experience.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CARD 1 */}
          <div className="p-6 border rounded-xl text-center hover:shadow-lg transition">
            <ShieldCheck className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">100% Secure</h3>
            <p className="text-gray-600 text-sm">
              Registered & compliant chit fund operations with complete data
              security.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 border rounded-xl text-center hover:shadow-lg transition">
            <IndianRupee className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Affordable Plans</h3>
            <p className="text-gray-600 text-sm">
              Flexible monthly contributions designed for every budget.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 border rounded-xl text-center hover:shadow-lg transition">
            <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Trusted by Thousands</h3>
            <p className="text-gray-600 text-sm">
              Growing community of satisfied members across India.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="p-6 border rounded-xl text-center hover:shadow-lg transition">
            <Smartphone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">100% Digital</h3>
            <p className="text-gray-600 text-sm">
              Easy online enrollment, payments, and tracking anytime, anywhere.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
