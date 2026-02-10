import React from "react";
import {
  BarChart3,
  Users,
  Wallet,
  FileText,
  TrendingUp,
  ShieldCheck,
  ClipboardList,
  Calendar,
} from "lucide-react";

function Reports() {
  return (
    <section id="report" className="bg-white py-20" 
     style={{
        backgroundImage: "url('/5th.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
       
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Complete Reporting Suite <span className="font-bold text-blue-700">Powerful Reports</span> <span></span>
              for Smart Decisions
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl font-semibold mx-auto">
            Monitor, analyze, and grow your chit fund business using powerful
            real-time reports designed for accuracy and compliance.
            Get complete visibility into your chit fund business with
            real-time, accurate, and actionable reports.
          </p>
        </div>

        {/* IMAGE + CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-10">

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="/report.png"
              alt="Reports Dashboard"
              className="w-96 max-m-full"
            />
          </div>

          {/* CONTENT */}
          <div>
            <h3 className="text-2xl font-bold text-blue-700 mb-6">
              One Dashboard. All Business Insights.
            </h3>

            <ul className="space-y-4 font-semibold text-gray-600">
              <li>✔ Centralized view of all reports</li>
              <li>✔ Color-coded and easy to understand</li>
              <li>✔ Faster audits and decision-making</li>
              <li>✔ Secure and role-based access</li>
              <li>✔ Export to Excel & PDF</li>
            </ul>

            <a
              href="/signup"
              className="inline-block mt-8 bg-blue-500 text-white px-6 py-3 font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Explore Reports
            </a>
          </div>
        </div>

        {/* REPORT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-semibold">

          <ReportCard
            icon={<Calendar />}
            title="Daybook Report"
            desc="Daily cash inflow and outflow summary."
          />

          <ReportCard
            icon={<Wallet />}
            title="Payment Reports"
            desc="Installments, dues, and payment summaries."
          />

          <ReportCard
            icon={<Users />}
            title="Customer Reports"
            desc="Active, inactive, held and enrollment data."
          />

          <ReportCard
            icon={<BarChart3 />}
            title="Auction Reports"
            desc="Auction performance and bidding insights."
          />

          <ReportCard
            icon={<ClipboardList />}
            title="Collection Reports"
            desc="Agent-wise and area-wise collections."
          />

          <ReportCard
            icon={<TrendingUp />}
            title="Sales & Lead Reports"
            desc="Lead conversion and sales tracking."
          />

          <ReportCard
            icon={<FileText />}
            title="Loan & Pigmy Reports"
            desc="Loan status, pigmy and installment summaries."
          />

          <ReportCard
            icon={<ShieldCheck />}
            title="Audit & Compliance"
            desc="Accurate records for audits and regulations."
          />

        </div>
        
      </div>
      
    </section>
  );
}

/* CARD COMPONENT */
function ReportCard({ icon, title, desc }) {
  return (
    <div className="bg-slate-50 rounded-xl shadow-md p-6 border border-transparent hover:bg-blue-50
      hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-blue-600 mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

export default Reports;
