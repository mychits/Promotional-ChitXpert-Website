import React from "react";
import { CheckCircle2, PlayCircle, ArrowRight, Sparkles, Zap, Shield, Users, User, Clock, TrendingUp } from "lucide-react";
import homepageimg from "../assets/images/vpvp.png";

export default function Hero() {
  return (
    <section className="bg-white pt-10 lg:pt-24 lg:pb-32 overflow-hidden relative">

      {/* --- MODERN DECORATIVE ELEMENTS --- */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl -mr-96 -mt-96 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl -ml-72 -mb-72 pointer-events-none"></div>

      {/* Grid Pattern Overlay - Fixed the SVG string */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* --- LEFT SIDE CONTENT --- */}
          <div className="order-2 lg:order-1">

            {/* Modern Badge with Animation */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm border border-teal-200/50">
              <Sparkles className="w-4 h-4 text-teal-500" />
              <span>ChitXpert Software</span>
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
            </div>

            {/* Main Headline - Updated with teal/cyan gradient */}
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-gray-900 leading-tight mb-6">

              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
                ChitXpert Management
              </span>
            </h1>

            {/* Subheadline - Enhanced */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Designed for modern entrepreneurs & traditional legends. Automate auctions,
              <span className="text-teal-600 font-semibold"> manage subscribers</span>, and scale your business effortlessly.
            </p>

            {/* Key Benefits List - Redesigned with icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-teal-100 hover:border-teal-300 transition-all group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-gray-800 font-semibold">Automated Auction</span>
                  <p className="text-xs text-gray-500">Smart bidding system</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-cyan-100 hover:border-cyan-300 transition-all group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-gray-800 font-semibold">Secure Access</span>
                  <p className="text-xs text-gray-500">Multi-device support</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-teal-100 hover:border-teal-300 transition-all group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-gray-800 font-semibold">Member Management</span>
                  <p className="text-xs text-gray-500">360° customer view</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-cyan-100 hover:border-cyan-300 transition-all group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-gray-800 font-semibold">Real-time Reports</span>
                  <p className="text-xs text-gray-500">Financial analytics</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 border-2 border-white flex items-center justify-center text-xs text-white font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-teal-600">500+</span> businesses trust us
              </p>
            </div>

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/signup"
                className="inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 group"
              >
                <span>Start Free Demo</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button className="inline-flex justify-center items-center px-8 py-4 bg-white text-gray-700 font-bold rounded-xl border-2 border-teal-200 hover:border-teal-400 hover:text-teal-600 transition-all group">
                <PlayCircle className="mr-2 w-5 h-5 text-teal-500 group-hover:scale-110 transition-transform" />
                Watch 2-min Demo
              </button>
            </div>

            {/* Free Trial Badge */}
            <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              No credit card required • 14-day free trial
            </p>
          </div>

          {/* --- RIGHT SIDE IMAGE - Enhanced with modern effects --- */}
          {/* --- RIGHT SIDE IMAGE - Enhanced with modern effects --- */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center">
            {/* Floating Elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-teal-200/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>

            {/* Main Image Container */}
            <div className="relative group">

              {/* Image with Shadow and Hover Effect */}
              <div className="relative transform group-hover:scale-105 transition-all duration-700 ease-out">
                <img
                  src={homepageimg}
                  alt="Chit Fund Dashboard Interface"
                  className="w-full max-w-none lg:w-[120%] xl:w-[130%] h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating Stats Card - Moved to LEFT SIDE */}
              <div
                className="
  absolute 
  bottom-2 left-2
  sm:-bottom-6 sm:-left-6
  bg-white/95 backdrop-blur-sm
  rounded-xl shadow-2xl
  p-3 sm:p-4
  border border-teal-100
  min-w-[160px] sm:min-w-[200px]
  "
                style={{ animation: "float 3s ease-in-out infinite" }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>

                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">Processing</p>
                    <p className="text-base sm:text-lg font-bold text-gray-800">₹50L+</p>

                    <p className="text-[10px] sm:text-xs text-green-600 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      ↑ 28% this month
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating User Card - Moved to LEFT SIDE (UPPER) */}
              <div
                className="
  absolute
  top-2 left-2
  sm:-top-6 sm:-left-6
  bg-white/95 backdrop-blur-sm
  rounded-xl shadow-2xl
  p-3 sm:p-4
  border border-cyan-100
  min-w-[180px] sm:min-w-[220px]
  "
                style={{ animation: "float 3s ease-in-out 0.3s infinite" }}
              >

                {/* Header with Users */}
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-teal-500" />
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Active Users</p>
                </div>

                {/* Main Stats */}
                <div className="flex items-center justify-between mb-3">
                  <p className="text-2xl font-bold text-gray-800">2.5K+</p>
                  <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
                    <TrendingUp className="w-3 h-3 text-green-600" />
                    <span className="text-xs font-semibold text-green-600">+15%</span>
                  </div>
                </div>

                {/* Activity Bar */}
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-500">Activity rate</span>
                    <span className="text-xs font-semibold text-gray-700">75%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
                  </div>
                </div>

                {/* User Avatars with Status */}
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 border-2 border-white flex items-center justify-center relative shadow-md">
                      <User className="w-4 h-4 text-white" />
                      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 border-2 border-white flex items-center justify-center relative shadow-md">
                      <User className="w-4 h-4 text-white" />
                      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white flex items-center justify-center relative shadow-md">
                      <User className="w-4 h-4 text-white" />
                      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-gray-300 rounded-full border-2 border-white"></div>
                    </div>
                  </div>

                  {/* Mini Stats */}
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-500" />
                      <span className="text-xs text-gray-600">+28%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-gray-600">2h</span>
                    </div>
                  </div>
                </div>

                {/* Additional Stats Row */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    <span className="text-xs text-gray-600">98% active</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-purple-500" />
                    <span className="text-xs text-gray-600">↑ 1.15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-6">Trusted by leading chitXpert</p>
          {/* <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Company 1", "Company 2", "Company 3", "Company 4", "Company 5"].map((company, i) => (
              <div key={i} className="text-lg font-semibold text-gray-400">{company}</div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Add animation styles in a regular style tag */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}