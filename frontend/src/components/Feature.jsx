import React from "react";
import { CheckCircle, ArrowRight, Zap, Users, Smartphone, Clock, Shield, Sparkles, Send, BarChart3, Star } from "lucide-react";

export default function Feature() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-teal-50/30">
      {/* Light decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Light grid pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 border border-teal-200/50 mb-6 shadow-sm">
           
            <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Powerful Features</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Start & Manage Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
              ChitXpert Business
            </span>{' '}
            Effortlessly
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Run your chitXpert business with automated billing, SMS alerts,
            and real-time tracking — all in one powerful ERP platform.
          </p>
        </div>

        {/* ROW 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Feature Card 1 */}
            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-teal-300 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Create Custom Bills & Send Instant SMS</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Generate receipts for every transaction and send automated SMS
                    notifications for better transparency.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-cyan-300 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Track Member Progress & Money Flow Instantly</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Monitor members, groups, and financial movements with real-time
                    dashboards and reports.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full border border-teal-200">
                <Zap className="w-4 h-4 text-teal-600" />
                <span className="text-sm text-teal-700 font-medium">Automated</span>
              </div>
              <div className="flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full border border-cyan-200">
                <Clock className="w-4 h-4 text-cyan-600" />
                <span className="text-sm text-cyan-700 font-medium">Real-time</span>
              </div>
              <div className="flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full border border-teal-200">
                <Shield className="w-4 h-4 text-teal-600" />
                <span className="text-sm text-teal-700 font-medium">Secure</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE - BILL1.png */}
          <div className="relative group">

            {/* Image */}
            <div className="relative transform group-hover:scale-105 transition-all duration-700 ease-out">
              <img
                src="/BILL1.png"
                alt="Chit Fund Dashboard"
                className="w-full max-w-lg mx-auto drop-shadow-xl"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-teal-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span className="text-xs font-semibold text-gray-700">Automated Billing</span>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT IMAGE - B2.png */}
          <div className="relative group order-2 lg:order-1">


            {/* Image */}
            <div className="relative transform group-hover:scale-105 transition-all duration-700 ease-out">
              <img
                src="/B2.png"
                alt="Reports"
                className="w-full max-w-md mx-auto drop-shadow-xl"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-cyan-200">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-cyan-500" />
                <span className="text-xs font-semibold text-gray-700">Real-time Reports</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Feature Card 3 */}
            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-teal-300 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Say Goodbye to Manual Errors</h3>
                  <p className="text-gray-600 leading-relaxed">
                    ChitXpert automates accounting, receipt generation, and reporting —
                    reducing manual work and eliminating costly human errors.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Card 4 */}
            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-cyan-300 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Designed for All Business Sizes</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you're a small operator or a large enterprise, ChitXpert
                    scales with you using multi-user support and elegant UI.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-105">
                <span>Book Free Demo</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust indicators */}
              <div className="flex items-center gap-4 mt-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 border-2 border-white shadow-md flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 border-2 border-white shadow-md flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-white shadow-md flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-teal-600">500+</span> businesses trust us
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Active Users", value: "50K+", icon: Users },
            { label: "Transactions", value: "₹100Cr+", icon: Zap },
            { label: "SMS Sent", value: "10M+", icon: Send },
            { label: "Rating", value: "4.9/5", icon: Star },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <stat.icon className="w-8 h-8 text-teal-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}