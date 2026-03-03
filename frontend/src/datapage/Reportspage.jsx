import React from "react";
import Navbar from "../components/Navbar";
import Mobileapp4 from "../assets/images/mobile4.png";
import Mobileapp2 from "../assets/images/daybook.png";
import Mobileapp3 from "../assets/images/mobile3.png";
import Footer from "../components/Footer";
import { 
  FileText, 
  Calendar, 
  CreditCard, 
  Users, 
  DollarSign, 
  BarChart3, 
  TrendingUp, 
  Shield, 
  Download, 
  Eye, 
  PieChart,
  Sparkles,
  Rocket,
  CheckCircle
} from "lucide-react";

export default function Reportspage() {

  const reports = [
    {
      id: "daybook-Reports",
      title: "Daybook Report",
      icon: <Calendar className="w-6 h-6" />,
      description: [
        "Provides a detailed summary of daily cash inflows and outflows.",
        "Tracks all receipts, payments, and transaction entries in real time.",
        "Helps monitor opening and closing cash balances accurately.",
        "Ensures transparency in daily financial operations.",
        "Reduces manual errors through automated record keeping.",
        "Supports audit readiness with clear, organized financial data.",
        "Enables quick review of daily business performance."
      ],
      image: Mobileapp2,
      stats: ["Real-time", "Audit-ready", "Automated"]
    },
    {
      id: "Payment-Reports",
      title: "Payment Reports",
      icon: <CreditCard className="w-6 h-6" />,
      description: [
        "Displays detailed records of installment collections and payments.",
        "Tracks paid, pending, and overdue installments in real time.",
        "Helps monitor customer dues, penalties, and payment status accurately.",
        "Provides complete payment history with receipts and transaction details.",
        "Improves cash flow management through timely payment tracking.",
        "Ensures financial transparency and reduces manual reconciliation errors.",
        "Supports audits with clear and well-organized payment data."
      ],
      image: Mobileapp2,
      stats: ["Real-time", "Payment history", "Overdue alerts"]
    },
    {
      id: "Customer-Reports",
      title: "Customer Reports",
      icon: <Users className="w-6 h-6" />,
      description: [
        "Provides complete details of all registered customers and members.",
        "Tracks active, inactive, held, and closed customer accounts.",
        "Shows customer enrollment, group participation, and status updates.",
        "Helps monitor customer payment behavior and account performance.",
        "Improves customer management with organized and searchable data.",
        "Supports transparency with accurate customer records.",
        "Assists in audits and compliance through reliable customer information."
      ],
      image: Mobileapp2,
      stats: ["Customer 360", "Status tracking", "Searchable"]
    },
    {
      id: "Auction-Reports",
      title: "Auction Reports",
      icon: <DollarSign className="w-6 h-6" />,
      description: [
        "Provides detailed information on all conducted chit auctions.",
        "Tracks bid amounts, winners, and auction participation data.",
        "Helps analyze auction performance and bidding trends.",
        "Displays auction dates, chit values, and settlement details.",
        "Improves transparency in auction processes and outcomes.",
        "Supports accurate financial reconciliation after auctions.",
        "Assists management and audits with well-documented auction records."
      ],
      image: Mobileapp2,
      stats: ["Bid tracking", "Winner history", "Settlement data"]
    },
    {
      id: "Collection-Reports",
      title: "Collection Reports",
      icon: <BarChart3 className="w-6 h-6" />,
      description: [
        "Provides detailed records of installment collections across all chit groups.",
        "Tracks agent-wise and area-wise collection performance.",
        "Monitors daily, weekly, and monthly collection totals accurately.",
        "Helps identify pending collections and overdue payments.",
        "Improves accountability by linking collections to agents.",
        "Supports better cash flow planning and performance analysis.",
        "Ensures transparency with clear and organized collection data."
      ],
      image: Mobileapp2,
      stats: ["Agent-wise", "Area-wise", "Performance tracking"]
    },
    {
      id: "Sales-Lead Reports",
      title: "Sales & Lead Reports",
      icon: <TrendingUp className="w-6 h-6" />,
      description: [
        "Provides insights into lead generation and sales performance.",
        "Tracks new leads, conversions, and dropped prospects.",
        "Monitors agent-wise and source-wise sales effectiveness.",
        "Helps analyze conversion rates and customer acquisition trends.",
        "Improves sales planning through data-driven insights.",
        "Supports performance evaluation of sales teams and agents.",
        "Ensures accurate reporting for business growth decisions."
      ],
      image: Mobileapp2,
      stats: ["Lead tracking", "Conversion rates", "Source analysis"]
    },
    {
      id: "Loan-Pigmy Reports",
      title: "Loan & Pigmy Reports",
      icon: <FileText className="w-6 h-6" />,
      description: [
        "Provides complete details of loans and pigmy savings accounts.",
        "Tracks loan disbursements, repayments, and outstanding balances.",
        "Monitors pigmy deposits, installments, and maturity status.",
        "Helps identify overdue loans and delayed pigmy payments.",
        "Ensures accurate tracking of interest, penalties, and dues.",
        "Improves financial planning with organized loan and pigmy data.",
        "Supports audits and compliance with reliable financial records."
      ],
      image: Mobileapp2,
      stats: ["Loan tracking", "Pigmy savings", "Maturity alerts"]
    },
    {
      id: "Audit-Compliance",
      title: "Audit & Compliance Reports",
      icon: <Shield className="w-6 h-6" />,
      description: [
        "Maintains accurate and well-structured financial records for audits.",
        "Ensures compliance with regulatory and statutory requirements.",
        "Tracks transactions, balances, and reports with full transparency.",
        "Helps prepare audit-ready statements and supporting documents.",
        "Reduces compliance risks through systematic record management.",
        "Supports internal and external audits with reliable data.",
        "Improves trust and accountability in financial operations."
      ],
      image: Mobileapp2,
      stats: ["Audit-ready", "Regulatory", "Full transparency"]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

          {/* Enhanced Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Data Insights & Analytics</span>
            </div>

            {/* Main Title with Gradient */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
              Comprehensive <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
                ChitXpert Reports & Analytics
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Access accurate financial and operational reports to monitor performance,
              ensure compliance, and make informed business decisions.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { number: "15+", label: "Report Types", icon: <FileText className="w-5 h-5" /> },
                { number: "Real-time", label: "Data Sync", icon: <Eye className="w-5 h-5" /> },
                { number: "PDF/Excel", label: "Export Options", icon: <Download className="w-5 h-5" /> },
                { number: "100%", label: "Audit Ready", icon: <Shield className="w-5 h-5" /> }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-center text-teal-500 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Reports Grid - Alternating Layout */}
          {reports.map((report, index) => (
            <div
              key={report.id}
              id={report.id}
              className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 mb-20 last:mb-0 scroll-mt-24
                ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Text Content */}
              <div className="flex flex-col">
                {/* Report Type Badge - Teal consistent */}
                <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold w-fit mb-4">
                  {report.icon}
                  <span>{report.title}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-teal-600 mb-6">
                  {report.title}
                </h2>

                {/* Feature Tags - Teal consistent */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {report.stats.map((stat, i) => (
                    <span key={i} className="bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {stat}
                    </span>
                  ))}
                </div>

                {/* Description List */}
                <ul className="space-y-3">
                  {report.description.map((text, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <CheckCircle className="text-teal-500 w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                      <span className="text-gray-600 text-base leading-relaxed">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons - Teal consistent */}
                <div className="flex gap-3 mt-8">
                  <button className="flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all">
                    <Eye className="w-4 h-4" />
                    Preview Report
                  </button>
                  <button className="flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all">
                    <Download className="w-4 h-4" />
                    Sample PDF
                  </button>
                </div>
              </div>

              {/* Image Content - Clean, no background */}
              <div className={`flex justify-center ${index % 2 !== 0 ? "lg:justify-start" : "lg:justify-end"}`}>
                <div className="relative w-full max-w-md group">
                  {/* Subtle shadow only - no colored background */}
                  <div className="absolute inset-0 bg-gray-200/20 rounded-3xl transform translate-y-2 translate-x-2 blur-md opacity-30"></div>
                  
                  {/* Clean image container */}
                  <div className="relative">
                    <img
                      src={report.image}
                      alt={report.title}
                      className="w-full transform group-hover:scale-105 transition-all duration-500"
                    />
                    
                    {/* Floating Icon - Teal consistent */}
                    <div className="absolute -top-3 -right-3 bg-teal-100 rounded-full p-3 shadow-lg">
                      <div className="text-teal-600">
                        {report.icon}
                      </div>
                    </div>
                  </div>

                  {/* Download Badge */}
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-2 flex items-center gap-2">
                    <Download className="w-4 h-4 text-teal-500" />
                    <span className="text-xs font-semibold text-gray-600">Export Ready</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Enhanced CTA Section */}
          <div className="mt-28 text-center max-w-5xl mx-auto rounded-3xl shadow-2xl p-12 relative overflow-hidden bg-gradient-to-br from-teal-600 to-cyan-600">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
            
            {/* Floating Icons */}
            <div className="absolute top-10 left-10 text-white/10">
              <PieChart className="w-16 h-16" />
            </div>
            <div className="absolute bottom-10 right-10 text-white/10">
              <BarChart3 className="w-16 h-16" />
            </div>

            {/* Icon */}
            <div className="relative z-10 mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mx-auto border border-white/30">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
              Make Smarter Decisions with Real-Time Reporting
            </h3>
            
            <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-2xl mx-auto relative z-10">
              Trusted by 500+ chit fund businesses across India for audit-ready, accurate, and actionable insights.
              <strong className="block text-white mt-2 text-xl">
                Eliminate manual errors, ensure compliance, and unlock performance data — all in one dashboard.
              </strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-teal-600 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                Get Started Free
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </a>
              
              <a
                href="/demo"
                className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 relative z-10">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Export to PDF/Excel</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}