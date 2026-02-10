import { CheckCircle } from "lucide-react";
import React from "react";
import dashboard from "../assets/images/payment-1-rbg.png"; 
import playstore from "../assets/images/googleplay.png"; 

export default function TrackInflows() {
    return (
        <section className="py-24 bg-blue-50 relative overflow-hidden">
            
            {/* DECORATIVE BACKGROUND PATTERN */}
            <div 
                className="absolute inset-0 opacity-[0.05]" 
                style={{ 
                    backgroundImage: "radial-gradient(#166534 1.5px, transparent 1.5px)", 
                    backgroundSize: "24px 24px" 
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE - Floating Card Style */}
                    <div className="relative flex justify-center order-2 md:order-1">
                        {/* Decorative Blob behind the image */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] bg-gradient-to-r from-green-300 to-teal-300 rounded-full blur-3xl opacity-40 -z-10"></div>
                        
                        {/* The Image with Shadow and Round Corners */}
                        <img
                            src={dashboard}
                            alt="Track Inflows & Outflows"
                            className="max-w-md w-full rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transform rotate-2 hover:rotate-0 transition duration-500 ease-out border border-white/50"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="order-1 md:order-2">
                        {/* Badge */}
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold tracking-wide uppercase px-4 py-2 rounded-full mb-6 border border-green-200 shadow-sm">
                            Chit Business
                        </span>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Track Inflows & Outflows <br />
                            of Your Chit Fund Business
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                            With Chit Fund Pvt Ltd, gain complete visibility into every rupee that enters
                            and leaves your chit fund operations — all from a single,
                            easy-to-use dashboard.
                        </p>

                        {/* Sub heading */}
                        <h4 className="font-bold text-gray-900 text-xl mb-5">What You Can Achieve:</h4>

                        {/* Points */}
                        <ul className="space-y-5 mb-10">
                            <li className="flex gap-4 items-start group">
                                <div className="bg-green-100 p-1.5 rounded-full text-green-600 shrink-0 mt-0.5 group-hover:bg-green-200 transition-colors">
                                    <CheckCircle size={20} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <strong className="block text-gray-900 text-lg">Strategically Boost Profit Margins</strong>
                                    <span className="text-gray-500 text-sm">Identify revenue opportunities and optimize performance.</span>
                                </div>
                            </li>

                            <li className="flex gap-4 items-start group">
                                <div className="bg-green-100 p-1.5 rounded-full text-green-600 shrink-0 mt-0.5 group-hover:bg-green-200 transition-colors">
                                    <CheckCircle size={20} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <strong className="block text-gray-900 text-lg">Simplify Customer Management</strong>
                                    <span className="text-gray-500 text-sm">Manage members, payments, auctions, and communication.</span>
                                </div>
                            </li>

                            <li className="flex gap-4 items-start group">
                                <div className="bg-green-100 p-1.5 rounded-full text-green-600 shrink-0 mt-0.5 group-hover:bg-green-200 transition-colors">
                                    <CheckCircle size={20} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <strong className="block text-gray-900 text-lg">Empower Your Team</strong>
                                    <span className="text-gray-500 text-sm">Faster workflows with secure multi-user access.</span>
                                </div>
                            </li>
                        </ul>

                        {/* Play Store Button - Styled Container */}
                        <a
                            href="https://play.google.com/store/search?q=mychits&c=apps&hl=en_IN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 duration-300"
                        >
                            <img
                                src={playstore}
                                alt="Get it on Google Play"
                                className="w-48 h-auto cursor-pointer"
                            />
                        </a>

                    </div>

                </div>
            </div>
        </section>
    );
}