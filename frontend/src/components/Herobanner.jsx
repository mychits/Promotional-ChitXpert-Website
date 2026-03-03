import React from "react";
import { ShieldCheck, TrendingUp, Users, Sparkles, Zap, CheckCircle, ArrowRight, Star, Award } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-b from-white to-teal-50/30 overflow-hidden">
      
      {/* --- DECORATIVE ELEMENTS --- */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          
          {/* TRUST BADGE - Enhanced with sparkle */}
          <div className="inline-flex items-center justify-center px-5 py-2 mb-8 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 border border-teal-200 shadow-sm">
            <div className="flex items-center space-x-2 text-sm font-semibold text-teal-700">
              <Sparkles className="w-4 h-4 text-teal-500" />
              <span>Trusted by 500+ Chit Fund Companies</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
            </div>
          </div>

          {/* MAIN HEADLINE - Updated with teal/cyan gradient */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            India’s Most Trusted <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
              ChitXpert Software
            </span>
          </h2>

          {/* SUB-HEADLINE */}
          <p className="mt-4 text-base md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Gain total control and clarity over your chit business with our advanced software. 
            <span className="text-teal-600 font-semibold"> Automate operations</span> and focus on growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-105 group"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-teal-200 hover:border-teal-400 hover:text-teal-600 transition-all">
              Watch Demo
            </button>
          </div>

          {/* KEY METRICS / HIGHLIGHTS - Redesigned with cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100 hover:border-teal-300">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-4 rounded-2xl mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <p className="text-gray-800 font-bold text-xl mb-1">Scale Faster</p>
                <p className="text-gray-500 text-sm">Automated workflows & auctions</p>
                <div className="mt-3 flex items-center gap-1 text-teal-600 text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  <span>40% faster ops</span>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100 hover:border-cyan-300 transform md:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-4 rounded-2xl mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <p className="text-gray-800 font-bold text-xl mb-1">100% Secure</p>
                <p className="text-gray-500 text-sm">Bank-grade encryption</p>
                <div className="mt-3 flex items-center gap-1 text-cyan-600 text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>ISO 27001 Certified</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100 hover:border-teal-300">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-4 rounded-2xl mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <p className="text-gray-800 font-bold text-xl mb-1">Customer Love</p>
                <p className="text-gray-500 text-sm">Easy member portal</p>
                <div className="mt-3 flex items-center gap-1 text-teal-600 text-sm font-medium">
                  <Star className="w-4 h-4 fill-current" />
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges Row */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Award className="w-5 h-5 text-teal-500" />
              <span>10+ Years Excellence</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ShieldCheck className="w-5 h-5 text-cyan-500" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Users className="w-5 h-5 text-teal-500" />
              <span>50K+ Happy Users</span>
            </div>
          </div>

                 </div>
      </div>
    </section>
  );
}