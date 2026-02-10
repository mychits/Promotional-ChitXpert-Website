import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, Globe, ArrowRight, ChevronUp, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/LOGOrbg.png";

export default function Navbar() {
    const [openTranslate, setOpenTranslate] = useState(false);
    const [openMenu, setOpenMenu] = useState(null); // 'features', 'mobile', 'reports'
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSections, setMobileSections] = useState({
        features: false,
        mobileApps: false,
        reports: false,
    });
    const [activeItem, setActiveItem] = useState(null);

    const { t } = useTranslation();
    const timeoutRef = useRef(null);

    const handleMouseEnter = (menu) => {
        clearTimeout(timeoutRef.current);
        setOpenMenu(menu);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpenMenu(null);
            setActiveItem(null); // Reset expanded item when menu closes
        }, 200);
    };

    const toggleMobileSection = (section) => {
        setMobileSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    // Close all menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".nav-dropdown") && !e.target.closest(".nav-item")) {
                setOpenMenu(null);
                setActiveItem(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // --- DATA STRUCTURES ---
    const featureMenu = [
        {
            id: "chit-group-management",
            label: "Chit Group Management",
            icon: "📊",
            children: [
                { id: "create-chit", label: "Create and manage multiple chit groups" },
                { id: "assign-members", label: "Track group performance and auctions" },
            ],
        },
        {
            id: "customer-management",
            label: "Customer Management",
            icon: "👥",
            children: [
                { id: "add-customer", label: "Maintain secure profiles" },
                { id: "kyc", label: "Automated reminders for payments" },
            ],
        },
        {
            id: "auction-bid-handling",
            label: "Auction & Bid Handling",
            icon: "💰",
            children: [
                { id: "auction", label: "Automate auction events" },
                { id: "biding", label: "Manage winners and discounts" },
            ],
        },
        {
            id: "financial-management",
            label: "Accounts & Financial Mgmt",
            icon: "📈",
            children: [
                { id: "accounts", label: "Ledger entries and vouchers" },
                { id: "financial", label: "Real-time financial updates" },
            ],
        },
        {
            id: "Payment-Tracking",
            label: "Automated Collection & Payment Tracking",
            icon: "💳",
            children: [
                { id: "payments", label: "Online and offline collection tracking" },
                { id: "collection", label: "Ensures transparency" },
            ],
        },
        {
            id: "Communication-Tools",
            label: "Communication Tools",
            icon: "📱",
            children: [
                { id: "sms", label: "SMS alerts for due payments" },
                { id: "comm-tool", label: "Offline SMS support" },
            ],
        },
        {
            id: "Reports-Analytics",
            label: "Reports & Analytics",
            icon: "📊",
            children: [
                { id: "report", label: "Real-time pending lists" },
                { id: "analytics", label: "Performance tracking" },
            ],
        },
        {
            id: "Agent-Management",
            label: "Agent Management",
            icon: "👤",
            children: [
                { id: "agent", label: "Track collections and attendance" },
                { id: "finacial", label: "Assign tasks and monitor productivity" },
            ],
        },
        {
            id: "Security-Compliance",
            label: "Security & Compliance",
            icon: "🔒",
            children: [
                { id: "security", label: "Role-based access" },
                { id: "complaince", label: "Regulatory standards" },
            ],
        },
        {
            id: "Web-Mobile Access",
            label: "Web & Mobile Access",
            icon: "💻",
            children: [
                { id: "webaccess", label: "Cloud-based access" },
                { id: "mobileaccess", label: "Mobile apps for admins" },
            ],
        },
    ];

    const mobileMenu = [
        {
            id: "Agent-app",
            label: "Agent Fund App",
            icon: "👨‍💼",
            children: [
                { id: "agent-app", label: "Manages customer details" },
                { id: "agent-app-2", label: "Record monthly installments" },
            ],
        },
        {
            id: "Customer-app",
            label: "Customer App",
            icon: "👩‍💼",
            children: [
                { id: "Customer-app", label: "View joined chit groups" },
                { id: "Customer-app-2", label: "Check installment due dates" },
            ],
        },
    ];

    const reportmenu = [
        {
            id: "Daybook-Report",
            label: "Daybook Report",
            icon: "📅",
            children: [
                { id: "Daybook-Report", label: "Daily cash inflows and outflows" },
                { id: "Daybook-Report-2", label: "Real-time transaction entries" },
            ]
        },
        {
            id: "Payment-Reports",
            label: "Payment Reports",
            icon: "💳",
            children: [
                { id: "Payment-Reports", label: "Installment collections" },
                { id: "Payment-Reports-2", label: "Pending and overdue installments" },
            ]
        },
        {
            id: "Customer-Reports",
            label: "Customer Reports",
            icon: "👥",
            children: [
                { id: "Customer-Reports", label: "All registered customers" },
                { id: "Customer-Reports-2", label: "Active and inactive accounts" },
            ]
        },
        {
            id: "Auction-Reports",
            label: "Auction Reports",
            icon: "💰",
            children: [
                { id: "Auction-Reports", label: "Conducted chit auctions" },
                { id: "Auction-Reports-2", label: "Bid amounts and winners" },
            ]
        },
        {
            id: "Collection-Reports",
            label: "Collection Reports",
            icon: "📊",
            children: [
                { id: "Collection-Reports", label: "Installment collections" },
                { id: "Collection-Reports-2", label: "Agent-wise performance" },
            ]
        },
        {
            id: "Sales-Lead Reports",
            label: "Sales & Lead Reports",
            icon: "📈",
            children: [
                { id: "Sales-Lead Reports", label: "Lead generation insights" },
                { id: "Sales-Lead Reports-2", label: "Conversions and prospects" },
            ]
        },
        {
            id: "Loan-Pigmy Reports",
            label: "Loan & Pigmy Reports",
            icon: "🏦",
            children: [
                { id: "Loan-Pigmy Reports", label: "Loan performance" },
                { id: "Loan-Pigmy Reports-2", label: "Pigmy collection details" },
            ]
        },
        {
            id: "Audit-Compliance",
            label: "Audit & Compliance Reports",
            icon: "📋",
            children: [
                { id: "Audit-Compliance", label: "Financial records for audits" },
                { id: "Audit-Compliance-2", label: "Statutory requirements" },
            ]
        },
    ];

    const triggerGoogleTranslate = (lang) => {
        let attempts = 0;
        const timer = setInterval(() => {
            const select = document.querySelector(".goog-te-combo");
            if (select) {
                select.value = lang;
                select.dispatchEvent(new Event("change"));
                clearInterval(timer);
            }
            attempts++;
            if (attempts > 20) clearInterval(timer);
        }, 300);
    };

    // Toggle active item on hover (desktop)
    const handleItemHover = (itemId) => {
        setActiveItem(prev => prev === itemId ? null : itemId);
    };

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
            <div className="w-full  px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">


                {/* LOGO & HEADING - Enhanced */}
                <div className="flex items-center gap-2 cursor-pointer group">
                    <div className="relative group-hover:scale-110 transition-transform duration-300">
                        <div className="absolute inset-0 bg-white/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-white/10 backdrop-blur-sm object-contain border-2 border-white/20 shadow-lg"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white text-sm sm:text-base font-bold tracking-wide">
                            CHIT FUND PVT LTD
                        </p>
                        {/* <p className="text-white/80 text-xs font-medium -mt-0.5">
                            PVT LTD
                        </p> */}
                    </div>
                </div>

                {/* DESKTOP MENU - Enhanced Styling */}
                <ul className="hidden md:flex items-center  space-x-1 text-white text-sm font-medium ml-6">


                    <li>
                        <a
                            href="/"
                            className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200 group relative overflow-hidden"
                        >
                            <span className="relative z-10">{t("home")}</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        </a>
                    </li>

                    <li>
                        <a
                            href="/#AboutSection"
                            className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200 group relative overflow-hidden"
                        >
                            <span className="relative z-10">{t("AboutUs")}</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        </a>
                    </li>

                    {/* FEATURES DROPDOWN - CHILDREN INSIDE PARENT CONTAINER */}
                    <li
                        className="relative nav-item"
                        onMouseEnter={() => handleMouseEnter("features")}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* TOP NAV BUTTON */}
                        <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all">
                            <span>{t("Features")}</span>
                            <ChevronDown size={14} />
                        </button>

                        {/* MAIN DROPDOWN */}
                        {openMenu === "features" && (
                            <div
                                className="absolute left-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100
                                    z-50 animate-fadeIn"
                                onMouseEnter={() => handleMouseEnter("features")}
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* LEFT SIDE – PARENT MENU */}
                                <ul className="w-72 py-2">
                                    {featureMenu.map((item) => (
                                        <li
                                            key={item.id}
                                            className="relative"
                                            onMouseEnter={() => setActiveItem(item)}
                                            onMouseLeave={() => setActiveItem(null)}
                                        >
                                            {/* PARENT ITEM */}
                                            <div
                                                className={`px-5 py-3 cursor-pointer flex items-center justify-between
                                                text-sm transition-all
                                                ${activeItem?.id === item.id
                                                        ? "bg-blue-50 text-blue-700"
                                                        : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="text-xl">{item.icon}</span>
                                                    <span className="font-medium">{item.label}</span>
                                                </div>

                                                {item.children && (
                                                    <ChevronRight size={16} className="text-gray-400" />
                                                )}
                                            </div>

                                            {/* 🔹 SMALL CHILD DROPDOWN (LIKE YOUR DRAWING) */}
                                            {activeItem?.id === item.id && item.children && (
                                                <div
                                                    className="absolute left-full top-1/2 -translate-y-1/2 ml-2
                                                                min-w-[200px] max-w-[230px]
                                                                bg-white border border-gray-200
                                                                rounded-xl shadow-xl px-3 py-2 z-50"
                                                >
                                                    <ul className="space-y-1">
                                                        {item.children.map((child) => (
                                                            <a
                                                                key={child.id}
                                                                href={`/features#${child.id}`}
                                                                className="block px-2 py-1 text-sm leading-snug rounded-md
                                                            text-slate-600 hover:bg-blue-50 hover:text-blue-700
                                                            transition-all"
                                                            >
                                                                {child.label}
                                                            </a>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>



                    <li>
                        <a
                            href="/#action"
                            className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200 group relative overflow-hidden"
                        >
                            <span className="relative z-10">Online Auction</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        </a>
                    </li>

                    {/* MOBILE APPS DROPDOWN - CHILDREN INSIDE PARENT CONTAINER */}
                    <li
                        className="relative nav-item group"
                        onMouseEnter={() => handleMouseEnter("mobile")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200 group/button relative overflow-hidden">
                            <span className="relative z-10">{t("MobileApps")}</span>
                            <ChevronDown size={14} className="relative z-10 transition-transform group-hover/button:rotate-180" />
                            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-200"></span>
                        </button>

                        {openMenu === "mobile" && (
                            <div
                                className="absolute left-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-fadeIn z-50"
                                onMouseEnter={() => handleMouseEnter("mobile")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <ul className="flex flex-col">
                                    {mobileMenu.map((item) => (
                                        <li
                                            key={item.id}
                                            className="group/item border-b border-gray-100 last:border-b-0"
                                            onMouseEnter={() => handleItemHover(item.id)}
                                            onMouseLeave={() => setActiveItem(prev => prev === item.id ? null : prev)}
                                        >
                                            <div className="px-5 py-3.5 text-sm text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-200 cursor-pointer flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-xl">{item.icon}</span>
                                                    <span className="font-medium">{item.label}</span>
                                                </div>
                                                {item.children && (
                                                    <ChevronDown
                                                        size={16}
                                                        className={`text-gray-400 transition-transform duration-200 ${activeItem === item.id ? "rotate-180 text-blue-600" : ""
                                                            }`}
                                                    />
                                                )}
                                            </div>

                                            {item.children && (
                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeItem === item.id ? 'max-h-36 opacity-100 py-2' : 'max-h-0 opacity-0'
                                                        }`}
                                                >
                                                    <div className="px-5 pt-1 pb-3 space-y-1.5">
                                                        {item.children.map((child, index) => (
                                                            <a
                                                                key={index}
                                                                href={`/mobile#${child.id}`}
                                                                className="flex items-start gap-2 text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all py-1.5 pl-4 pr-3 group/child"
                                                            >
                                                                <ArrowRight size={14} className="mt-0.5 text-blue-500 flex-shrink-0 opacity-0 group-hover/child:opacity-100 transition-opacity" />
                                                                <span className="leading-tight">{child.label}</span>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>

                    {/* REPORTS DROPDOWN - CHILDREN INSIDE PARENT CONTAINER */}
                    <li
                        className="relative nav-item group"
                        onMouseEnter={() => handleMouseEnter("reports")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200 group/button relative overflow-hidden">
                            <span className="relative z-10">Reports</span>
                            <ChevronDown size={14} className="relative z-10 transition-transform group-hover/button:rotate-180" />
                            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-200"></span>
                        </button>

                        {openMenu === "reports" && (
                            <div
                                className="absolute left-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-fadeIn z-50 max-h-[600px] overflow-y-auto"
                                onMouseEnter={() => handleMouseEnter("reports")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <ul className="flex flex-col">
                                    {reportmenu.map((item) => (
                                        <li
                                            key={item.id}
                                            className="group/item border-b border-gray-100 last:border-b-0"
                                            onMouseEnter={() => handleItemHover(item.id)}
                                            onMouseLeave={() => setActiveItem(prev => prev === item.id ? null : prev)}
                                        >
                                            <div className="px-5 py-3.5 text-sm text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-200 cursor-pointer flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-xl">{item.icon}</span>
                                                    <span className="font-medium">{item.label}</span>
                                                </div>
                                                {item.children && (
                                                    <ChevronDown
                                                        size={16}
                                                        className={`text-gray-400 transition-transform duration-200 ${activeItem === item.id ? "rotate-180 text-blue-600" : ""
                                                            }`}
                                                    />
                                                )}
                                            </div>

                                            {item.children && (
                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeItem === item.id ? 'max-h-48 opacity-100 py-2' : 'max-h-0 opacity-0'
                                                        }`}
                                                >
                                                    <div className="px-5 pt-1 pb-3 space-y-1.5">
                                                        {item.children.map((child, index) => (
                                                            <a
                                                                key={index}
                                                                href={`/report#${child.id}`}
                                                                className="flex items-start gap-2 text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all py-1.5 pl-4 pr-3 group/child"
                                                            >
                                                                <ArrowRight size={14} className="mt-0.5 text-blue-500 flex-shrink-0 opacity-0 group-hover/child:opacity-100 transition-opacity" />
                                                                <span className="leading-tight">{child.label}</span>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>

                    <li>
                        <a
                            href="/#contact"
                            className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200 group relative overflow-hidden"
                        >
                            <span className="relative z-10">Contact</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        </a>
                    </li>

                    {/* CTA BUTTON - Enhanced */}
                    <li className="ml-3">
                        <a
                            href="/signup"
                            className="inline-flex items-center justify-center whitespace-nowrap
                                        bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600
                                        text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl 
                                        transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Schedule a Demo
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </a>
                    </li>

                    {/* LANGUAGE SELECTOR - Enhanced */}
                    <li className="relative ml-1">
                        <button
                            onClick={() => setOpenTranslate(!openTranslate)}
                            className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 relative overflow-hidden"
                        >
                            <Globe size={18} />
                            <ChevronDown size={14} className="transition-transform" />
                            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200"></span>
                        </button>

                        {openTranslate && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-xl shadow-2xl z-50 overflow-hidden animate-fadeIn">
                                <button
                                    onClick={() => {
                                        triggerGoogleTranslate("en");
                                        setOpenTranslate(false);
                                    }}
                                    className="flex items-center gap-2 w-full text-left px-4 py-2.5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-sm text-slate-700 hover:text-blue-700 transition-all"
                                >
                                    <span className="text-xl">🇬🇧</span>
                                    <span>English</span>
                                </button>

                                <button
                                    onClick={() => {
                                        triggerGoogleTranslate("kn");
                                        setOpenTranslate(false);
                                    }}
                                    className="flex items-center gap-2 w-full text-left px-4 py-2.5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-sm text-slate-700 hover:text-blue-700 transition-all border-t border-gray-100"
                                >
                                    <span className="text-xl">🇮🇳</span>
                                    <span>ಕನ್ನಡ</span>
                                </button>
                            </div>
                        )}
                    </li>
                </ul>

                {/* HAMBURGER MENU (MOBILE) - Enhanced */}
                <button
                    className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MOBILE MENU - Enhanced */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl animate-fadeIn">
                    <ul className="flex flex-col p-4 space-y-1 text-sm font-medium">
                        <li>
                            <a href="/" className="block px-4 py-3 text-slate-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all">
                                <span className="flex items-center gap-2">
                                    <span>🏠</span>
                                    <span>Home</span>
                                </span>
                            </a>
                        </li>

                        <li>
                            <a href="/#AboutSection" className="block px-4 py-3 text-slate-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all">
                                <span className="flex items-center gap-2">
                                    <span>ℹ️</span>
                                    <span>About Us</span>
                                </span>
                            </a>
                        </li>

                        {/* MOBILE FEATURES - Enhanced */}
                        <li>
                            <button
                                onClick={() => toggleMobileSection("features")}
                                className="flex justify-between items-center w-full px-4 py-3 text-slate-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all"
                            >
                                <span className="flex items-center gap-2">
                                    <span>✨</span>
                                    <span>Features</span>
                                </span>
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform duration-300 ${mobileSections.features ? "rotate-180" : ""}`}
                                />
                            </button>

                            {mobileSections.features && (
                                <div className="ml-4 mt-2 flex flex-col gap-1 text-slate-600">
                                    {featureMenu.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`/features#${item.id}`}
                                            className="flex items-center gap-2 px-4 py-2.5 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all group"
                                        >
                                            <span className="text-lg">{item.icon}</span>
                                            <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </li>

                        <li>
                            <a href="/#action" className="block px-4 py-3 text-slate-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all">
                                <span className="flex items-center gap-2">
                                    <span>💰</span>
                                    <span>Auction</span>
                                </span>
                            </a>
                        </li>

                        {/* MOBILE APPS - Enhanced */}
                        <li>
                            <button
                                onClick={() => toggleMobileSection("mobileApps")}
                                className="flex justify-between items-center w-full px-4 py-3 text-slate-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all"
                            >
                                <span className="flex items-center gap-2">
                                    <span>📱</span>
                                    <span>Mobile Apps</span>
                                </span>
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform duration-300 ${mobileSections.mobileApps ? "rotate-180" : ""}`}
                                />
                            </button>

                            {mobileSections.mobileApps && (
                                <div className="ml-4 mt-2 flex flex-col gap-1 text-slate-600">
                                    {mobileMenu.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`/mobile#${item.id}`}
                                            className="flex items-center gap-2 px-4 py-2.5 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all group"
                                        >
                                            <span className="text-lg">{item.icon}</span>
                                            <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </li>

                        {/* REPORTS - Enhanced */}
                        <li>
                            <button
                                onClick={() => toggleMobileSection("reports")}
                                className="flex justify-between items-center w-full px-4 py-3 text-slate-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all"
                            >
                                <span className="flex items-center gap-2">
                                    <span>📊</span>
                                    <span>Reports</span>
                                </span>
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform duration-300 ${mobileSections.reports ? "rotate-180" : ""}`}
                                />
                            </button>

                            {mobileSections.reports && (
                                <div className="ml-4 mt-2 flex flex-col gap-1 text-slate-600">
                                    {reportmenu.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`/report#${item.id}`}
                                            className="flex items-center gap-2 px-4 py-2.5 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all group"
                                        >
                                            <span className="text-lg">{item.icon}</span>
                                            <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </li>

                        <li>
                            <a href="/#ReasonsSection" className="block px-4 py-3 text-slate-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all">
                                <span className="flex items-center gap-2">
                                    <span>⭐</span>
                                    <span>Why Choose Us</span>
                                </span>
                            </a>
                        </li>

                        <li>
                            <a href="/#faq" className="block px-4 py-3 text-slate-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all">
                                <span className="flex items-center gap-2">
                                    <span>❓</span>
                                    <span>FAQ</span>
                                </span>
                            </a>
                        </li>

                        <li className="pt-3">
                            <a
                                href="/signup"
                                className="block text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
                            >
                                Schedule a Demo
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}