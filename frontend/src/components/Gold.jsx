import React from "react";
import goldImg from "../assets/images/chit-cycles-2.png";

export default function Gold() {
  return (
    <section id="gold-chits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-indigo-900 font-bold tracking-widest text-sm mb-4">
              SMART · SECURE · GOLD SAVINGS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
              Gold Chits Application <br />
              <span className="text-yellow-500">Invest in gold the smart way with our Gold Chits application.</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                
              
              Save monthly, track your gold value digitally, and secure your
              future with trusted gold-based chit plans.
            </p>

            <a
              href="http://prod-new-gold-chit.s3-website.eu-north-1.amazonaws.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
            >
              Explore Gold Chits
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src={goldImg}
              alt="Gold Chits"
              className="w-full max-w-xl "
            /> 
          </div>

        </div>
      </div>
    </section>
  );
}
