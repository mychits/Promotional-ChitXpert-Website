import { useState } from "react";
import { CheckCircle, ChevronRight, Sparkles, Users, Layers, Gavel, CreditCard, Wallet, BarChart3, ArrowRight } from "lucide-react";
import React from "react";
import dashboard1 from "../assets/images/membermanagement-1.png";
import dashboard2 from "../assets/images/groupmanagement.png";
import dashboard3 from "../assets/images/auctionmanagement.png";
import dashboard4 from "../assets/images/transaction.png";
import dashboard5 from "../assets/images/accountmanagement.png";
import dashboard6 from "../assets/images/report.png";

const tabs = [
    "Member Management",
    "Group Management",
    "Chit Auction Management",
    "Chit Transactions",
    "Accounts Management",
    "Comprehensive Reports",
];

const tabIcons = {
    "Member Management": <Users className="w-5 h-5" />,
    "Group Management": <Layers className="w-5 h-5" />,
    "Chit Auction Management": <Gavel className="w-5 h-5" />,
    "Chit Transactions": <CreditCard className="w-5 h-5" />,
    "Accounts Management": <Wallet className="w-5 h-5" />,
    "Comprehensive Reports": <BarChart3 className="w-5 h-5" />,
};

const tabContent = {
    "Member Management": {
        title: "Member Management",
        desc: "Easily manage all your chit fund subscribers in one place.",
        image: dashboard1,
        gradient: "from-blue-500 to-cyan-500",
        lightBg: "bg-blue-50",
        iconColor: "text-blue-600",
        points: [
            "Add and edit complete member details",
            "Create family groups using unique group codes",
            "Send reminders and updates via WhatsApp and SMS",
            "Securely store and verify PAN/GST documents",
        ],
    },

    "Group Management": {
        title: "Group Management",
        desc: "Automate group creation and payment schedules with smart configuration.",
        image: dashboard2,
        gradient: "from-purple-500 to-pink-500",
        lightBg: "bg-purple-50",
        iconColor: "text-purple-600",
        points: [
            "Enter chit amount and duration with auto calculations",
            "Set auction frequency (weekly, monthly, etc.)",
            "Choose auction date and time easily",
        ],
    },

    "Chit Auction Management": {
        title: "Chit Auction Management",
        desc: "Run auctions smoothly with automated processes and fair winner selection.",
        image: dashboard3,
        gradient: "from-amber-500 to-orange-500",
        lightBg: "bg-amber-50",
        iconColor: "text-amber-600",
        points: [
            "Calculate member contributions automatically",
            "Allow members to block specific tickets",
            "Auto-assign winners based on predefined prize rules",
        ],
    },

    "Chit Transactions": {
        title: "Chit Transactions",
        desc: "Keep accurate records of all member contributions and disbursements.",
        image: dashboard4,
        gradient: "from-green-500 to-emerald-500",
        lightBg: "bg-green-50",
        iconColor: "text-green-600",
        points: [
            "Allow partial payments via running receipts",
            "Auto-generate chit receipts",
            "Track fund distribution after every auction",
        ],
    },

    "Accounts Management": {
        title: "Accounts Management",
        desc: "Monitor your financials without manual bookkeeping.",
        image: dashboard5,
        gradient: "from-red-500 to-pink-500",
        lightBg: "bg-red-50",
        iconColor: "text-red-600",
        points: [
            "Record auctions, payments, and receipts",
            "Manage purchase & sales bills",
            "Track daily expenses and balances",
        ],
    },

    "Comprehensive Reports": {
        title: "Comprehensive Reports",
        desc: "Gain insights into your business growth with advanced reporting.",
        image: dashboard6,
        gradient: "from-indigo-500 to-purple-500",
        lightBg: "bg-indigo-50",
        iconColor: "text-indigo-600",
        points: [
            "Generate Cash, Ledger & GST reports",
            "Member-wise and branch-wise summaries",
            "Single dashboard for all branches",
        ],
    },
};

export default function AdminPanelFeatures() {
    const [activeTab, setActiveTab] = useState("Member Management");

    return (
        <section id="action" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat'
            }}></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Heading with Badge */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 border border-teal-200/50 mb-6 shadow-sm">
                        
                        <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Powerful Dashboard</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Admin Panel{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
                            Features
                        </span>
                    </h2>
                    
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
                        Manage your entire chitXpert business with ease using the ChitXpert Admin Panel.
                        <br />
                        Built for speed and simplicity, it offers a clutter-free interface and powerful features to streamline operations.
                    </p>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                            <span className="text-sm font-medium text-gray-700">🏆 500+ Businesses</span>
                        </div>
                        <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                            <span className="text-sm font-medium text-gray-700">⚡ 6 Modules</span>
                        </div>
                        <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                            <span className="text-sm font-medium text-gray-700">✨ 24/7 Support</span>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    
                    {/* LEFT TABS - Enhanced */}
                    <div className="lg:col-span-1 space-y-3">
                        {tabs.map((tab, index) => {
                            const isActive = activeTab === tab;
                            const gradient = tabContent[tab].gradient;
                            
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative w-full group overflow-hidden`}
                                >
                                    <div className={`
                                        relative flex items-center gap-4 px-5 py-4 rounded-xl font-medium transition-all duration-300
                                        ${isActive 
                                            ? `bg-gradient-to-r ${gradient} text-white shadow-lg scale-[1.02]` 
                                            : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-gray-300'
                                        }
                                    `}>
                                        {/* Icon */}
                                        <div className={`
                                            p-2 rounded-lg transition-all duration-300
                                            ${isActive 
                                                ? 'bg-white/20' 
                                                : `bg-gray-100 ${tabContent[tab].lightBg} group-hover:scale-110`
                                            }
                                        `}>
                                            {React.cloneElement(tabIcons[tab], { 
                                                className: isActive ? 'text-white' : tabContent[tab].iconColor 
                                            })}
                                        </div>
                                        
                                        <span className="flex-1 text-left font-semibold">{tab}</span>
                                        
                                        {isActive && (
                                            <ChevronRight className="w-5 h-5 text-white/70 animate-pulse" />
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* RIGHT CONTENT - Enhanced */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                            
                            {/* Header with gradient */}
                            <div className={`h-2 bg-gradient-to-r ${tabContent[activeTab].gradient}`}></div>
                            
                            <div className="p-8">
                                <div className="grid md:grid-cols-2 gap-8 items-start">

                                    {/* TEXT CONTENT */}
                                    <div>
                                        {/* Title with icon */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`p-3 rounded-xl ${tabContent[activeTab].lightBg}`}>
                                                {React.cloneElement(tabIcons[activeTab], { 
                                                    className: tabContent[activeTab].iconColor,
                                                    size: 24
                                                })}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900">
                                                {tabContent[activeTab].title}
                                            </h3>
                                        </div>

                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {tabContent[activeTab].desc}
                                        </p>

                                        {/* Feature Points */}
                                        <ul className="space-y-4">
                                            {tabContent[activeTab].points.map((point, i) => (
                                                <li key={i} className="flex items-start gap-3 group">
                                                    <div className="mt-1">
                                                        <CheckCircle className={`${tabContent[activeTab].iconColor} w-5 h-5 group-hover:scale-110 transition-transform`} />
                                                    </div>
                                                    <span className="text-gray-700 font-medium">{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Action Button */}
                                        <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 group">
                                                            Learn more about {activeTab}
                                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                        </button>
                                    </div>

                                    {/* IMAGE CONTENT - Enhanced */}
                                    <div className="relative group">
                                        {/* Decorative rings */}
                                        <div className={`absolute -inset-4 bg-gradient-to-r ${tabContent[activeTab].gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                                        
                                        {/* Image Container */}
                                        <div className="relative transform group-hover:scale-105 transition-all duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent rounded-2xl"></div>
                                            <img
                                                src={tabContent[activeTab].image}
                                                alt={tabContent[activeTab].title}
                                                className="w-full max-w-md mx-auto rounded-xl shadow-2xl border-4 border-white"
                                            />
                                        </div>

                                        {/* Floating Badge */}
                                        <div className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-lg px-4 py-2 border border-gray-200">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tabContent[activeTab].gradient}`}></div>
                                                <span className="text-xs font-semibold text-gray-700">Active Module</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                        Explore All Features
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}