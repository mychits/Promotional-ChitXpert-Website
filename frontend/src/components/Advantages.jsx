import { CheckCircle } from "lucide-react";
import dashboard from "../assets/images/S7-rbg.png"; // change path
import React from "react";

export default function Advantages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl font-bold mb-6">
              Advantages of Using <br /> Chit Fund Software
            </h1>

            <ul className="space-y-5">
              <li className="flex gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <div>
                  <p className="font-semibold">Complete Cash Flow Management</p>
                  <p className="text-gray-600 text-sm font-semibold">
                    Monitor every transaction — from auctions and receipts to
                    payouts and balances.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <div>
                  <p className="font-semibold">Transparency & Customer Satisfaction</p>
                  <p className="text-gray-600 text-sm font-semibold">
                    Keep subscribers informed with real-time updates and reports.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <div>
                  <p className="font-semibold">Centralized Online Access</p>
                  <p className="text-gray-600 text-sm font-semibold">
                    Manage multiple branches from one secure platform.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className=" p-4 sm:p-6 rounded-xl w-full max-w-md">
              <img
                src={dashboard}
                alt="Advantages Dashboard"
                className="
                              w-full
                              h-auto
                              rounded-lg
                              
                              object-contain
                            "
              />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
