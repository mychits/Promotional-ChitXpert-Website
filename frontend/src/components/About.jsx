import React from "react";
import aboutImg from "../assets/images/PNG DOWN.png";
import aboutImg1 from "../assets/images/2nd.jpg";


export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl font-bold text-indigo-900 mb-6 leading-tight">
              About MyChits
            </h1>

      <h4 className="text-5xl font-bold text-indigo-900 leading-tight">
                        MyChits is a secure and transparent chit fund platform helping users <br />
                        <span className="text-yellow-500">save, borrow, and invest with confidence.</span>
                    </h4>


            
            <p className="text-gray-600 leading-relaxed mb-4">
              MyChits is India’s 100% digital chit fund firm. We are a registered
              chit fund company helping people from all walks of life achieve
              financial independence.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Join our fast-growing team that is transforming the traditional
              chit fund system and creating exciting opportunities for retail
              investors across India.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="About MyChits"
              className="w-full max-w-3xl scale-135 translate-x-15"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
