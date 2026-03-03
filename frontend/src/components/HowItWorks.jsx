import React from "react";
import dashboard from "../assets/images/s2.png"; 
import { 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Users, 
  Calendar, 
  Settings, 
  BarChart3,
  Shield,
  Clock,
  Star
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Sign Up & Get Started",
      desc: "Reach out to the Chit Fund team for a demo. Once verified, receive login credentials.",
      icon: <CheckCircle className="w-5 h-5" />,
      color: "from-teal-500 to-cyan-500",
      lightBg: "bg-teal-100",
      iconColor: "text-teal-600"
    },
    {
      title: "Add Members & Create Groups",
      desc: "Add members, create chit groups, and assign users easily with just a few clicks.",
      icon: <Users className="w-5 h-5" />,
      color: "from-blue-500 to-indigo-500",
      lightBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Set Up Auctions",
      desc: "Define chit amount, duration, and auction schedule for transparent operations.",
      icon: <Calendar className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      lightBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      title: "Configure Calculations",
      desc: "Set commission, interest, and system auto-calculates everything accurately.",
      icon: <Settings className="w-5 h-5" />,
      color: "from-amber-500 to-orange-500",
      lightBg: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      title: "Manage Fund Distribution",
      desc: "Distribute funds to members securely and manage multiple chits effortlessly.",
      icon: <Zap className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
      lightBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "Access Real-Time Reports",
      desc: "View live reports, summaries, and branch-wise performance instantly.",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "from-red-500 to-pink-500",
      lightBg: "bg-red-100",
      iconColor: "text-red-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-blue-50 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
            backgroundImage: "radial-gradient(#166534 1.5px, transparent 1.5px)", 
            backgroundSize: "30px 30px" 
        }}
      ></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-teal-400/20 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header with Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 border border-teal-200/50 mb-6 shadow-sm">
     
            <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Simple Process</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
            How It{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
              Works
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get started in minutes with our simple 6-step process
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Clock className="w-4 h-4 text-teal-500" />
              <span className="text-sm font-medium text-gray-700">15-min Setup</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Shield className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-medium text-gray-700">Secure & Safe</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">4.9/5 Rating</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - STEPS with Timeline Design */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-cyan-400 hidden sm:block"></div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group relative flex items-start gap-6"
                >
                  {/* Step Number with Icon */}
                  <div className="relative flex-shrink-0">
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-10`}>
                      <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    
                    {/* Connector Line for Timeline */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-1/2 top-16 w-0.5 h-8 bg-gradient-to-b from-teal-400 to-cyan-400 transform -translate-x-1/2 hidden sm:block"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 group">
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${step.lightBg}`}>
                          {React.cloneElement(step.icon, { className: step.iconColor })}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-cyan-600 transition-all">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed pl-12">
                        {step.desc}
                      </p>

                      {/* Progress indicator */}
                      <div className="mt-4 flex items-center gap-2 pl-12">
                        <div className="h-1 w-12 bg-gray-200 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${step.color} rounded-full`} style={{ width: `${(index + 1) * 16.67}%` }}></div>
                        </div>
                        <span className="text-xs text-gray-400">Step {index + 1}/6</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - IMAGE with Enhanced Design */}
          <div className="relative flex justify-center order-first lg:order-last">
            
            {/* Decorative Background Blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-300/30 to-cyan-300/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-blue-300/30 to-indigo-300/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            {/* Animated Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 border-2 border-teal-200/50 rounded-full animate-ping"></div>
              <div className="absolute w-96 h-96 border-2 border-cyan-200/30 rounded-full animate-pulse delay-300"></div>
            </div>

            {/* Image Container with Enhanced Effects */}
            <div className="relative group">
              
              {/* Main Image */}
              <div className="relative rounded-3xl shadow-2xl border-4 border-white overflow-hidden transform group-hover:scale-[1.02] transition duration-500 ease-out">
                <img
                  src={dashboard}
                  alt="How Chitfund Works"
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-teal-200 animate-float">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-teal-500" />
                  <span className="text-xs font-semibold text-gray-700">6 Easy Steps</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-cyan-200 animate-float delay-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-500" />
                  <span className="text-xs font-semibold text-gray-700">15-min Setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • Free demo available
          </p>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}