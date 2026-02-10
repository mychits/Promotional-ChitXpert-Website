

import React from "react";
import { CheckCircle2, PlayCircle, ArrowRight } from "lucide-react";
import homepageimg from "../assets/images/vpvp.png";

export default function Hero() {
  return (
    <section className="bg-white pt-10 pb-20 lg:pt-24 lg:pb-32 overflow-hidden relative">

      {/* --- DECORATIVE BACKGROUND BLOBS (Modern SaaS Look) --- */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* --- LEFT SIDE CONTENT --- */}
          <div className="order-2 lg:order-1">

            {/* Small Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Chit Fund Software
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Next-Gen Chit Fund <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                Management Platform
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Designed for modern entrepreneurs & traditional legends. Automate auctions, manage subscribers, and scale your business effortlessly.
            </p>

            {/* Key Benefits List */}
            <ul className="space-y-4 mb-10">
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-slate-700 font-medium">Automated Auction & Bidding</span>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-slate-700 font-medium">Secure Multi-Device Access</span>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-slate-700 font-medium">Real-time Financial Reports</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/signup"
                className="inline-flex justify-center items-center px-8 py-4 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-all transform hover:-translate-y-1 hover:shadow-xl"
              >
                Book Free Demo <ArrowRight className="ml-2 w-5 h-5" />
              </a>

              <button className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-700 font-bold rounded-lg border border-slate-200 hover:border-red-300 hover:text-red-600 transition-all">
                <PlayCircle className="mr-2 w-5 h-5" /> Watch Video
              </button>
            </div>

          </div>

          {/* --- RIGHT SIDE IMAGE --- */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center">
            <img
              src={homepageimg}
              alt="Chit Fund Dashboard Interface"
              className="
      w-full
      max-w-none
      lg:w-[120%]
      xl:w-[130%]
      h-auto
      object-contain
    "
            />
          </div>




        </div>
      </div>
    </section >
  );
}