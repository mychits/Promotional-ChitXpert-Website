import React from "react";
import Navbar from "../components/Navbar";
import Mobileapp4 from "../assets/images/mobile4.png";
import Mobileapp2 from "../assets/images/daybook.png";
import Mobileapp3 from "../assets/images/mobile3.png";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Reportspage() {

    const reports = [
        {
            id: "Daybook-Report",
            title: "Daybook Report",
            description: [
                "Provides a detailed summary of daily cash inflows and outflows.",
                "Tracks all receipts, payments, and transaction entries in real time.",
                "Helps monitor opening and closing cash balances accurately.",
                "Ensures transparency in daily financial operations.",
                "Reduces manual errors through automated record keeping.",
                "Supports audit readiness with clear, organized financial data.",
                "Enables quick review of daily business performance."
            ],

            image: Mobileapp2
        },
        {
            id: "Payment-Reports",
            title: "Payment Reports",
            description: [
                "Displays detailed records of installment collections and payments.",
                "Tracks paid, pending, and overdue installments in real time.",
                "Helps monitor customer dues, penalties, and payment status accurately.",
                "Provides complete payment history with receipts and transaction details.",
                "Improves cash flow management through timely payment tracking.",
                "Ensures financial transparency and reduces manual reconciliation errors.",
                "Supports audits with clear and well-organized payment data."
            ],
            image: Mobileapp2
        },
        {
            id: "Customer-Reports",
            title: "Customer Reports",
            description: [
                "Provides complete details of all registered customers and members.",
                "Tracks active, inactive, held, and closed customer accounts.",
                "Shows customer enrollment, group participation, and status updates.",
                "Helps monitor customer payment behavior and account performance.",
                "Improves customer management with organized and searchable data.",
                "Supports transparency with accurate customer records.",
                "Assists in audits and compliance through reliable customer information."
            ],
            image: Mobileapp2
        },
        {
            id: "Auction-Reports",
            title: "Auction Reports",
            description: [
                "Provides detailed information on all conducted chit auctions.",
                "Tracks bid amounts, winners, and auction participation data.",
                "Helps analyze auction performance and bidding trends.",
                "Displays auction dates, chit values, and settlement details.",
                "Improves transparency in auction processes and outcomes.",
                "Supports accurate financial reconciliation after auctions.",
                "Assists management and audits with well-documented auction records."
            ],
            image: Mobileapp2
        },
        {
            id: "Collection-Reports",
            title: "Collection Reports",
            description: [
                "Provides detailed records of installment collections across all chit groups.",
                "Tracks agent-wise and area-wise collection performance.",
                "Monitors daily, weekly, and monthly collection totals accurately.",
                "Helps identify pending collections and overdue payments.",
                "Improves accountability by linking collections to agents.",
                "Supports better cash flow planning and performance analysis.",
                "Ensures transparency with clear and organized collection data."
            ],
            image: Mobileapp2
        },
        {
            id: "Sales-Lead Reports",
            title: "Sales & Lead Reports",
            description: [
                "Provides insights into lead generation and sales performance.",
                "Tracks new leads, conversions, and dropped prospects.",
                "Monitors agent-wise and source-wise sales effectiveness.",
                "Helps analyze conversion rates and customer acquisition trends.",
                "Improves sales planning through data-driven insights.",
                "Supports performance evaluation of sales teams and agents.",
                "Ensures accurate reporting for business growth decisions."
            ],
            image: Mobileapp2
        },

        {
            id: "Loan-Pigmy Reports",
            title: "Loan & Pigmy Reports",
            description: [
                "Provides complete details of loans and pigmy savings accounts.",
                "Tracks loan disbursements, repayments, and outstanding balances.",
                "Monitors pigmy deposits, installments, and maturity status.",
                "Helps identify overdue loans and delayed pigmy payments.",
                "Ensures accurate tracking of interest, penalties, and dues.",
                "Improves financial planning with organized loan and pigmy data.",
                "Supports audits and compliance with reliable financial records."
            ],
            image: Mobileapp2
        },

        {
            id: "Audit-Compliance",
            title: "Audit & Compliance Reports",
            description: [
                "Maintains accurate and well-structured financial records for audits.",
                "Ensures compliance with regulatory and statutory requirements.",
                "Tracks transactions, balances, and reports with full transparency.",
                "Helps prepare audit-ready statements and supporting documents.",
                "Reduces compliance risks through systematic record management.",
                "Supports internal and external audits with reliable data.",
                "Improves trust and accountability in financial operations."
            ],
            image: Mobileapp2
        }

    ];

    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-b from-blue-50 to-white">
  <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

            <div className="text-center max-w-4xl mx-auto mb-20">
                {/* Added Badge for Professional Look */}
                <span className="bg-green-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    Data Insights
                </span>

                {/* Updated Title with Gradient Text */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
                    Comprehensive <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 ">
                        Chit Fund Reports & Analytics
                    </span>
                </h1>

                {/* Updated Description */}
                <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                    Access accurate financial and operational reports to monitor performance,
                    ensure compliance, and make informed business decisions.
                </p>
            </div>
            {reports.map((report, index) => (
                <div
                    key={report.id}
                    id={report.id}
                    className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-16 ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                        }`}
                >
                    {/* TEXT */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
                            {report.title}
                        </h2>

                        <ul className="space-y-2">
                            {report.description.map((text, i) => (
                                <li key={i} className="text-gray-700 leading-relaxed text-md font-semibold sm:text-base">
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* IMAGE */}
                    <div
                        className={`flex justify-center ${index % 2 !== 0 ? "md:justify-start" : "md:justify-end"
                            }`}
                    >
                        <img
                            src={report.image}
                            alt={report.title}
                            className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[360px]"
                        />
                    </div>
                </div>
            ))}

            {/* Final CTA Section */}
            <div className="mt-28 text-center max-w-4xl mx-auto rounded-3xl shadow-xl p-12 border border-blue-100 relative overflow-hidden">
    {/* Decorative circle - Top right accent */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 translate-x-1/2 -translate-y-1/2"></div>
    
    {/* Decorative circle - Bottom left accent */}
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative z-10">
        Make Smarter Decisions with Real-Time Reporting
    </h3>
    
    <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-2xl mx-auto relative z-10">
        Trusted by chit fund businesses across India for audit-ready, accurate, and actionable insights.
        <strong className="block text-gray-900 mt-2">Eliminate manual errors, ensure compliance, and unlock performance data — all in one dashboard.</strong>
    </p>
    
    <a
        href="/signup"
        className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform relative z-10 group"
    >
        See Reports in Action
        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
    </a>
    
    <p className="mt-6 text-sm text-gray-500 font-medium relative z-10">
        Instant access • No setup fees • Export to PDF/Excel
    </p>
</div>


        </section >
            </div >

            <Contact />
            <Footer />
        </>
    );
}
