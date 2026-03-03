import React from "react";
import { CheckCircle, ArrowRight, Users, TrendingUp, Shield, Award, Zap, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section 
      id="AboutSection" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/3page.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed" // Optional: creates parallax effect
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm border border-teal-400/30 mb-4">
            <Sparkles className="w-4 h-4 text-teal-300" />
            <span className="text-sm font-semibold text-teal-300 uppercase tracking-wider">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Transform Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-300">
              ChitXpert Business
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join 500+ successful chitXpert businesses that trust our platform for their daily operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT IMAGE - Enhanced */}
          <div className="relative group">
            {/* Animated rings */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-cyan-400 to-teal-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
            {/* Main image container */}
            <div className="relative transform group-hover:scale-105 transition-all duration-700 ease-out">
              <img
                src="/s4.png"
                alt="Chit Fund Dashboard"
                className="w-full max-w-lg mx-auto lg:-ml-16 drop-shadow-2xl"
              />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 border border-teal-100 min-w-[180px] animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Growth Rate</p>
                  <p className="text-lg font-bold text-gray-800">+156%</p>
                  <p className="text-xs text-green-600">↑ 28% this year</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - Enhanced */}
          <div className="space-y-6">
            {/* About badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm border border-teal-400/30">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-teal-300 uppercase tracking-wider">About ChitXpert</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Manage Your ChitXpert Business with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-300">
                Smart Software
              </span>
            </h1>

            <div className="space-y-4">
              <p className="text-lg text-gray-200 leading-relaxed font-medium">
                ChitXpert is an intuitive and powerful Chit Fund Software designed
                for simplicity and efficiency. Even first-time users can quickly
                master the platform and manage their entire chitXpert business
                with confidence.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed font-medium">
                Track every transaction — receipts, payments, auctions and access
                real-time updates across all branches from any device, anywhere.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed font-medium">
                With ChitXpert, you gain complete visibility into your business's financial flows while
                strengthening relationships with loyal subscribers. Our software not only streamlines
                operations but also helps you deliver a trustworthy and transparent chit fund experience.
              </p>
            </div>

            {/* Feature bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200 font-medium">Real-time tracking</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200 font-medium">Bank-grade security</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200 font-medium">Multi-user access</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200 font-medium">ISO certified</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="/signup"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-white/20">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-teal-300" />
            <span className="text-sm text-gray-300">10+ Years Excellence</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-300" />
            <span className="text-sm text-gray-300">50,000+ Users</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-teal-300" />
            <span className="text-sm text-gray-300">Award Winning Platform</span>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}