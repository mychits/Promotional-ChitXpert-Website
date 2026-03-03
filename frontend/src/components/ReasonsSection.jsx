import {
  ShieldCheck,
  BarChart3,
  Layers,
  FileText,
  Settings,
  CheckCircle,
  Building2,
  Lock,
  Wallet,
  Sliders,
  Users,
  Bell,
  Sparkles,
  Zap,
  Award,
  Star,
  TrendingUp,
  Globe,
  Clock,
  HeartHandshake
} from "lucide-react";
import React from "react";

export default function ReasonsSection() {
  const reasons = [
    {
      icon: <Layers />,
      title: "Complete Chit Lifecycle Management",
      desc: "Create, manage, and close chit groups seamlessly from a single dashboard.",
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-600"
    },
    {
      icon: <BarChart3 />,
      title: "Automated Auction & Winner Selection",
      desc: "Conduct chit auctions digitally with transparent bidding and automatic winner calculation.",
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-600"
    },
    {
      icon: <Users />,
      title: "Member & Subscriber Management",
      desc: "Easily manage members, nominees, KYC, subscriptions, and payment history.",
      color: "from-green-500 to-emerald-500",
      iconColor: "text-green-600"
    },
    {
      icon: <Wallet />,
      title: "Secure Payment Tracking",
      desc: "Track installments, penalties, foreman commission, and payouts accurately.",
      color: "from-amber-500 to-orange-500",
      iconColor: "text-amber-600"
    },
    {
      icon: <Settings />,
      title: "Role-Based Access Control",
      desc: "Separate dashboards for Admin, Staff, Agents, and Members with controlled permissions.",
      color: "from-indigo-500 to-purple-500",
      iconColor: "text-indigo-600"
    },
    {
      icon: <FileText />,
      title: "Real-Time Reports & Analytics",
      desc: "View collection reports, outstanding dues, auction summaries, and profit insights instantly.",
      color: "from-red-500 to-pink-500",
      iconColor: "text-red-600"
    },
    {
      icon: <Building2 />,
      title: "Multi-Branch & Multi-Chit Support",
      desc: "Manage multiple branches and unlimited chit schemes from one system.",
      color: "from-teal-500 to-cyan-500",
      iconColor: "text-teal-600"
    },
    {
      icon: <ShieldCheck />,
      title: "Legal & Statutory Compliance Ready",
      desc: "Designed to comply with Chit Fund Act, GST, audit requirements, and documentation.",
      color: "from-emerald-500 to-teal-500",
      iconColor: "text-emerald-600"
    },
    {
      icon: <Bell />,
      title: "Automated Notifications & Alerts",
      desc: "SMS, WhatsApp, and email alerts for installments, auctions, and due reminders.",
      color: "from-yellow-500 to-amber-500",
      iconColor: "text-yellow-600"
    },
    {
      icon: <Lock />,
      title: "Cloud-Based, Secure & Scalable",
      desc: "Secure cloud hosting with data backup, encryption, and scalable performance.",
      color: "from-gray-500 to-slate-500",
      iconColor: "text-gray-600"
    }
  ];

  return (
    <section id="ReasonsSection" className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/4th.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading with Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 border border-teal-200/50 mb-6 shadow-sm">
           
            <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Why Choose Us</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            10 Reasons Why Our{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
              ChitXpert Application
            </span>{' '}
            is the Perfect Choice
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover why thousands of chitXert businesses trust us for their daily operations
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Award className="w-4 h-4 text-teal-500" />
              <span className="text-sm font-medium text-gray-700">10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Users className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-medium text-gray-700">50K+ Users</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">4.9/5 Rating</span>
            </div>
          </div>
        </div>

        {/* Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Number Badge - Top Right */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md border border-gray-200">
                  {React.cloneElement(item.icon, { 
                    size: 28, 
                    className: `${item.iconColor} group-hover:scale-110 transition-transform duration-300` 
                  })}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-cyan-600 transition-all">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Bottom Line - This is the super line you wanted */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your ChitXpert Business?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join 500+ businesses already using our platform to streamline operations and grow faster
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
                  Get Started Now
                  <Zap className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
                
                <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                  <HeartHandshake className="mr-2 w-5 h-5" />
                  Talk to Sales
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">14-Day Free Trial</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">PAN India Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}