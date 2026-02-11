import { useState } from "react";
import React from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
  {
    question: "Is my data secured?",
    answer:
      "Yes, Chit Fund uses secure servers, encrypted passwords, and firewalls to protect all customer and transaction data."
  },
  {
    question: "Do you provide training for using this software?",
    answer:
      "Yes, we provide complete onboarding, demo sessions, and user training for admins and staff."
  },
  {
    question: "Can I view member and group details at one place?",
    answer:
      "Yes, you can view complete member profiles, chit group status, payment history, and auction details in one dashboard."
  },
  {
    question: "Is the accounting module included?",
    answer:
      "Yes, Chit.Biz includes full accounting features like ledgers, vouchers, reconciliation, and reports."
  },
  {
    question: "Can I configure chit values and duration?",
    answer:
      "Yes, chit amount, duration, auction frequency, and commission can be fully customized."
  },
  {
    question: "How many modules are available in Chit Fund?",
    answer:
      "Chit.Biz includes group management, member management, auctions, accounts, collections, reports, and mobile apps."
  },
  {
    question: "Can auction schedules be customized?",
    answer:
      "Yes, auction dates and schedules can be configured based on your business needs."
  },
  {
    question: "What payment options are supported?",
    answer:
      "Cash, bank transfer, UPI, and online payment integrations are supported."
  },
  {
    question: "What chit types are supported?",
    answer:
      "Monthly, weekly, bi-monthly, and customized chit types are supported."
  },
  {
    question: "Does it support multi-branch operations?",
    answer:
      "Yes, you can manage multiple branches with centralized control and reporting."
  }
];



  return (
    <section id="faq" className="bg-gray-50 py-16" 
     style={{
        backgroundImage: "url('/5th.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
       
      }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Everything you need to know about the product and billing.    
          </p>

          {/* <button className="bg-blue-600 text-white px-5 py-2 rounded-md">
            Contact Us
          </button> */}
        </div>

        {/* FAQ LIST */}
        <div className="md:col-span-2 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-4 cursor-pointer"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">
                  {index + 1}. {faq.question}
                </h3>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm font-semibold">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
