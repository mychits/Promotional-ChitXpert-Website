import { useState } from "react";
import { CheckCircle } from "lucide-react";
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

const tabContent = {
    "Member Management": {
        title: "Member Management",
        desc: "Easily manage all your chit fund subscribers in one place.",
        image: dashboard1,
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
        <section id="action" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-5">
                    Admin Panel Features
                </h2>
                <p className="mb-5 text-center text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed font-semibold">
                    Manage your entire chit fund business with ease using the Chit Fund Pvt Ltd Admin Panel.
                    <br />
                    Built for speed and simplicity, it offers a clutter-free interface and powerful features to streamline operations.
                </p>


                <div className="grid md:grid-cols-3 gap-10">

                    {/* LEFT TABS */}
                    <div className="space-y-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`w-full text-left px-5 py-3 rounded-lg font-medium transition
                  ${activeTab === tab
                                        ? "bg-blue-600 text-white shadow"
                                        : "bg-gray-100 hover:bg-gray-200"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="md:col-span-2 bg-gray-50 rounded-xl p-8 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-8 items-center">

                            {/* TEXT CONTENT */}
                            <div>
                                <h3 className="text-2xl font-bold mb-3">
                                    {tabContent[activeTab].title}
                                </h3>

                                <p className=" mb-6 font-semibold">
                                    {tabContent[activeTab].desc}
                                </p>

                                <ul className="space-y-4">
                                    {tabContent[activeTab].points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3 font-semibold">
                                            <CheckCircle className="text-blue-500 mt-1" size={20} />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* IMAGE CONTENT */}
                            <div className="relative flex justify-center">
                                <img
                                    src={tabContent[activeTab].image}
                                    alt={tabContent[activeTab].title}
                                    className=" w-full max-w-md transition-all duration-300"
                                />
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
