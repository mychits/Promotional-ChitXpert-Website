import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Decorative Header */}
        <div className="relative mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl opacity-20 blur-xl"></div>
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-8 px-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-blue-100 mt-2 max-w-2xl mx-auto">
                Your trust is our priority. We're committed to protecting your personal information.
              </p>
            </div>
            
            <div className="p-8 md:p-10 bg-white">
              {/* Intro Section */}
              <div className="mb-10 space-y-5">
                <p className="text-gray-700 leading-relaxed">
                  For the purpose of this privacy policy,{" "}
                  <span className="font-semibold text-blue-700">
                    "We", "Us", "Our", "Company"
                  </span>{" "}
                  means <strong className="text-gray-900">VIJAYA VINAYAK CHITFUNDS PRIVATE LIMITED</strong> and{" "}
                  <span className="font-semibold text-blue-700">
                    "You", "Your", "User"
                  </span>{" "}
                  means any person who accesses or uses our website or application.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  This Data Policy applies to{" "}
                  <a
                    href="https://mychits.co.in"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors"
                  >
                    https://mychits.co.in
                  </a>{" "}
                  and the MyChits Mobile Application.
                </p>
              </div>

              {/* Policy Sections */}
              <div className="space-y-10">
                {/* What This Policy Covers */}
                <section>
                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold text-blue-700">1</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">What This Policy Covers</h2>
                  </div>
                  <ul className="space-y-3 pl-6 border-l-2 border-blue-100 ml-13">
                    {[
                      "Collection of Information",
                      "Usage of Information",
                      "Promotional Updates and Communications",
                      "Information Sharing",
                      "Storage of Information",
                      "Data Retention",
                      "Data Transfers",
                      "Amendments to Policy"
                    ].map((item, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Collection of Information */}
                <section>
                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold text-blue-700">2</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Collection of Information</h2>
                  </div>
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    The following information may be collected or received by us.
                  </p>
                  
                  {[
                    { title: "Direct Sharing of Information", content: "We collect name, address, contact number, email address and chit fund details during registration and service usage." },
                    { title: "Automatically Collected Information", content: "IP address, browser type, device identifiers, cookies and usage data may be collected automatically when accessing the Website/App." },
                    { title: "Camera & Storage", content: "Used for uploading KYC documents and verification proofs." },
                    { title: "Location", content: "Location data may be collected for risk assessment and fraud prevention." }
                  ].map((section, index) => (
                    <div key={index} className="mb-6 pl-5 border-l-2 border-gray-100 ml-8">
                      <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center text-xs mr-2 flex-shrink-0">
                          {index + 1}
                        </span>
                        {section.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </section>

                {/* Usage of Information */}
                <section>
                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold text-blue-700">3</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Usage of Information</h2>
                  </div>
                  <ul className="space-y-3 pl-6 border-l-2 border-blue-100 ml-13">
                    {[
                      "Administering user accounts",
                      "Verifying financial transactions",
                      "Improving services and user experience",
                      "Fraud detection and security"
                    ].map((item, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Sharing of Information */}
                <section>
                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold text-blue-700">4</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Sharing of Information</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed bg-blue-50 p-5 rounded-xl border border-blue-100">
                    We do not sell or rent your information. Data may be shared with financial partners, service providers or when legally required.
                  </p>
                </section>

                {/* Data Retention */}
                <section>
                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold text-blue-700">5</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
                  </div>
                  <ul className="space-y-3 pl-6 border-l-2 border-blue-100 ml-13">
                    {[
                      "While the user account is active",
                      "Up to 3 months after account closure"
                    ].map((item, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Amendments */}
                <section>
                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold text-blue-700">6</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Amendments to Policy</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Changes to this policy will be posted on this page and notified via email if required.
                  </p>
                </section>
              </div>

              {/* Footer */}
              <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium text-blue-700">Last Updated: May 21, 2025</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: "✓", text: "GDPR Compliant" },
                  { icon: "🔒", text: "Bank-Grade Security" },
                  { icon: "🛡️", text: "Data Encryption" },
                  { icon: "⭐", text: "Trusted by 1L+ Users" }
                ].map((badge, index) => (
                  <div key={index} className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                    <div className="text-2xl mb-2">{badge.icon}</div>
                    <div className="text-sm font-medium text-gray-700">{badge.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-gray-100">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions About Your Privacy?</h2>
            <p className="text-gray-600 mb-6">
              We're here to help. Contact our privacy team for any concerns or questions about how we handle your data.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contact Privacy Team
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;