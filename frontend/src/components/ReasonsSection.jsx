
import {
  ShieldCheck,
  BarChart3,
  Layers,
  FileText,
  Settings,
  CheckCircle,
  Building2,
  Lock,
  Wallet,
  Sliders,
  Users,
  Bell,
} from "lucide-react";
import React from "react";

export default function ReasonsSection() {
  const reasonsLeft = [
    {
      icon: <Layers />,
      title: "Complete Chit Lifecycle Management",
      desc: "Create, manage, and close chit groups seamlessly from a single dashboard."
    },
    {
      icon: <BarChart3 />,
      title: "Automated Auction & Winner Selection",
      desc: "Conduct chit auctions digitally with transparent bidding and automatic winner calculation."
    },
    {
      icon: <Users />,
      title: "Member & Subscriber Management",
      desc: "Easily manage members, nominees, KYC, subscriptions, and payment history."
    },
    {
      icon: <Wallet />,
      title: "Secure Payment Tracking",
      desc: "Track installments, penalties, foreman commission, and payouts accurately."
    },
    {
      icon: <Settings />,
      title: "Role-Based Access Control",
      desc: "Separate dashboards for Admin, Staff, Agents, and Members with controlled permissions."
    }
  ];

  const reasonsRight = [
    {
      icon: <FileText />,
      title: "Real-Time Reports & Analytics",
      desc: "View collection reports, outstanding dues, auction summaries, and profit insights instantly."
    },
    {
      icon: <Building2 />,
      title: "Multi-Branch & Multi-Chit Support",
      desc: "Manage multiple branches and unlimited chit schemes from one system."
    },
    {
      icon: <ShieldCheck />,
      title: "Legal & Statutory Compliance Ready",
      desc: "Designed to comply with Chit Fund Act, GST, audit requirements, and documentation."
    },
    {
      icon: <Bell />,
      title: "Automated Notifications & Alerts",
      desc: "SMS, WhatsApp, and email alerts for installments, auctions, and due reminders."
    },
    {
      icon: <Lock />,
      title: "Cloud-Based, Secure & Scalable",
      desc: "Secure cloud hosting with data backup, encryption, and scalable performance."
    }
  ];

  return (
    <section id="ReasonsSection" className="py-24 bg-white"  
    style={{
        backgroundImage: "url('/4th.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
       
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          10 Reasons Why Our{" "}
          <span className="text-blue-600">Chit Fund Application</span> is the
          Perfect Choice for Your Business
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left Column */}
          <div className="space-y-10">
            {reasonsLeft.map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center"
              >
                <div className="text-blue-500 bg-blue-50 p-3 rounded-full flex-shrink-0">
                  {React.cloneElement(item.icon, { size: 22 })}
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {reasonsRight.map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center"
              >
                <div className="text-blue-500 bg-blue-50 p-3 rounded-full flex-shrink-0">
                  {React.cloneElement(item.icon, { size: 22 })}
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
