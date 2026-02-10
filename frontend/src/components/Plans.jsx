import React from "react";
import plansImg from "../assets/images/coin-raise.png"; // change image if needed

export default function Plans() {
    return (
        <section
            id="plans"
            className="max-w-7xl mx-auto px-8 py-20"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                {/* LEFT IMAGE */}
                <div className="flex justify-center">
                    <img
                        src={plansImg}
                        alt="Chit Plans"
                        className="w-full max-w-md scale-142 "
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div>
                    <p className="text-indigo-900 font-bold tracking-widest text-sm mb-3">
                        FLEXIBLE · AFFORDABLE · TRUSTED
                    </p>

                    <h2 className="text-4xl font-bold text-indigo-900 mb-6">
                        Our Chit Plans
                    </h2>

                    <p className="text-gray-600 mb-8 max-w-md">
                        Choose from our carefully designed chit plans that fit your
                        financial goals and monthly budget.
                    </p>

                    {/* PLANS CARDS */}
                    <div className="grid gap-4">

                        <div className="p-5 border rounded-lg hover:shadow-md transition">
                            <h3 className="font-bold text-lg">Basic Plan</h3>
                            <p className="text-gray-600 mb-4">₹1,00,000 · 20 Months</p>

                            <a
                                href="https://mychits.co.in/chitsimple-plans"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-yellow-400 px-5 py-2 rounded-md font-semibold hover:bg-yellow-300"
                            >
                                click here
                            </a>
                        </div>

                        <div className="p-5 border rounded-lg hover:shadow-md transition">
                            <h3 className="font-bold text-lg">Standard Plan</h3>
                            <p className="text-gray-600">₹5,00,000 · 25 Months</p>
                            <a
                                href="https://mychits.co.in/chitwealth-plans"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-yellow-400 px-5 py-2 rounded-md font-semibold hover:bg-yellow-300"
                            >
                                click here
                            </a>
                        </div>

                        <div className="p-5 border rounded-lg hover:shadow-md transition">
                            <h3 className="font-bold text-lg">Premium Plan</h3>
                            <p className="text-gray-600">₹10,00,000 · 30 Months</p>
                            <a
                                href="https://mychits.co.in/chitsaver-plans"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-yellow-400 px-5 py-2 rounded-md font-semibold hover:bg-yellow-300"
                            >
                                click here
                            </a>
                        </div>

                        <div className="mt-10">
                            <a
                                href="http://prod-chit.s3-website.eu-north-1.amazonaws.com/dashboard"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-yellow-400 px-5 py-2 rounded-md font-semibold hover:bg-yellow-300"
                            >
                                View All Plans
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
