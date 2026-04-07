import playstore from "../assets/images/googleplay.png"; // change path
import appstore from "../assets/images/appstore.png";
import mobile from "../assets/images/collection-agent.png"; // phone image
import React from "react";

export default function AgentApp() {
    return (
        <section id="agentapp" className="py-08 bg-teal-500 text-white">
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

                       <div className="flex items-center gap-4 mt-4">
  <a
    href="https://play.google.com/store/search?q=mychits&c=apps&hl=en_IN"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center h-14 px-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 duration-300"
  >
    <img
      src={playstore}
      alt="Get it on Google Play"
      className="h-full object-contain"
    />
  </a>

  <a
    href="https://apps.apple.com/in/app/mychits/id6761298273"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center h-14 px-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 duration-300"
  >
    <img
      src={appstore}
      alt="Download on the App Store"
      className="h-10 object-contain"
    />
  </a>
</div>
                    </div>

                </div>
            </div>
        </section>
    );
}



