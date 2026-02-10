// import React from "react";

// export default function HeroBanner() {
//   return (
//     <section className=" bg-emerald-300 ">
//       <div className="max-w-7xl mx-auto flex justify-center">
        
//         <div
//           className="
//             w-full md:w-[85%]
//             px-8 md:px-30
//             py-10
//             text-center         
//           "
//         >
//           <h1 className="text-3xl md:text-4xl font-bold text-green-800 leading-snug">
//             India’s Most Trusted Chit Fund Software <br />
//             to Simplify and Scale Your Business
//           </h1>

//           <p className="mt-5 text-gray-500 text-base font-bold md:text-lg">
//             Gain total control and clarity over your chit business with Chit fund software.
//           </p>

//         </div>

//       </div>
//     </section>
//   );
// }


import React from "react";
import { ShieldCheck, TrendingUp, Users } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative py-16 bg-slate-50 border-t border-gray-200">
      
      {/* --- DECORATIVE GRADIENT OVERLAY (Subtle) --- */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50/50 to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          
          {/* TRUST BADGE (Optional, adds professional touch) */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
            <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Trusted by 500+ Chit Fund Companies</span>
            </div>
          </div>

          {/* MAIN HEADLINE */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            India’s Most Trusted Chit Fund Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
              to Simplify and Scale Your Business
            </span>
          </h2>

          {/* SUB-HEADLINE */}
          <p className="mt-4 text-base md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Gain total control and clarity over your chit business with our advanced software. Automate operations and focus on growth.
          </p>

          {/* KEY METRICS / HIGHLIGHTS (Visual Breaker) */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-200 pt-8">
            <div className="flex flex-col items-center justify-center p-4">
              <div className="bg-red-100 p-3 rounded-full mb-3">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <p className="text-slate-800 font-bold text-lg">Scale Faster</p>
              <p className="text-slate-500 text-sm">Automated workflows</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 border-t md:border-t-0 md:border-l md:border-r border-gray-200">
              <div className="bg-green-100 p-3 rounded-full mb-3">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-slate-800 font-bold text-lg">100% Secure</p>
              <p className="text-slate-500 text-sm">Data encryption</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4">
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-slate-800 font-bold text-lg">Customer Love</p>
              <p className="text-slate-500 text-sm">Easy member portal</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}