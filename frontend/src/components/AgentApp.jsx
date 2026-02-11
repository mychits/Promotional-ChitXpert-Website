import playstore from "../assets/images/googleplay.png"; // change path
import mobile from "../assets/images/collection-agent.png"; // phone image
import React from "react";

export default function AgentApp() {
    return (
        <section id="agentapp" className="py-08 bg-blue-500 text-white">
            <div className="max-w-5xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center">
                        <img
                            src={mobile}
                            alt="Agent App"
                            className="w-full
                              h-auto
                              rounded-lg    
                             
                              object-contain"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>
                        <h1 className="text-3xl font-bold mb-2">
                            Boost Your Collections <br /> with Our Agent App
                        </h1>

                        <p className=" font-semibold mb-2 max-w-lg">
                            No paper, no delays. Agents can collect payments, track receipts,
                            and sync data instantly from their Android phones.
                        </p>

                        <a
                            href="https://play.google.com/store/search?q=mychits+agent&c=apps&hl=en_IN"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={playstore}
                                alt="Get it on Google Play"
                                className="w-40 cursor-pointer hover:scale-105 transition"
                            />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}



