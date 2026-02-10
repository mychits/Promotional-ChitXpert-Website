    import React from "react";


const Privacy = () => {
  return (
    <div className="min-h-screen bg-green-700 px-4 py-6">
    

      <div className="mx-auto mt-6 max-w-6xl rounded-[30px] bg-[#F5F9FF] px-6 py-10 shadow-[10px_10px_25px_rgba(0,0,0,0.15),-10px_-10px_25px_rgba(255,255,255,0.6)] sm:px-10 lg:px-16">
        {/* Title */}
        <h1 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-[#0A4B9F] sm:text-4xl">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="mb-6 text-justify text-base leading-8 text-gray-700">
          For the purpose of this privacy policy,
          <span className="font-semibold text-[#0A4B9F]">
            {" "}“We”, “Us”, “Our”, “Company”
          </span>{" "}
          means <strong>VIJAYA VINAYAK CHITFUNDS PRIVATE LIMITED</strong> and
          <span className="font-semibold text-[#0A4B9F]">
            {" "}“You”, “Your”, “User”
          </span>{" "}
          means any person who accesses or uses our website or application.
        </p>

        <p className="mb-6 text-justify text-base leading-8 text-gray-700">
          This Data Policy applies to{" "}
          <a
            href="https://mychits.co.in"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-blue-600 underline"
          >
            https://mychits.co.in
          </a>{" "}
          and the MyChits Mobile Application.
        </p>

        {/* Section */}
        <h2 className="section-title">This Policy Sets Out</h2>
        <ul className="list-disc space-y-3 pl-6 text-gray-700">
          <li>Collection of Information</li>
          <li>Usage of Information</li>
          <li>Promotional Updates and Communications</li>
          <li>Information Sharing</li>
          <li>Storage of Information</li>
          <li>Data Retention</li>
          <li>Data Transfers</li>
          <li>Amendments to Policy</li>
        </ul>

        {/* Collection */}
        <h2 className="section-title">Collection of Information</h2>
        <p className="paragraph">
          The following information may be collected or received by us.
        </p>

        <h3 className="sub-title">Direct Sharing of Information</h3>
        <p className="paragraph">
          We collect name, address, contact number, email address and chit fund
          details during registration and service usage.
        </p>

        <h3 className="sub-title">Automatically Collected Information</h3>
        <p className="paragraph">
          IP address, browser type, device identifiers, cookies and usage data
          may be collected automatically when accessing the Website/App.
        </p>

        <h3 className="sub-title">Camera & Storage</h3>
        <p className="paragraph">
          Used for uploading KYC documents and verification proofs.
        </p>

        <h3 className="sub-title">Location</h3>
        <p className="paragraph">
          Location data may be collected for risk assessment and fraud
          prevention.
        </p>

        {/* Usage */}
        <h2 className="section-title">Usage of Information</h2>
        <ul className="list-disc space-y-3 pl-6 text-gray-700">
          <li>Administering user accounts</li>
          <li>Verifying financial transactions</li>
          <li>Improving services and user experience</li>
          <li>Fraud detection and security</li>
        </ul>

        {/* Sharing */}
        <h2 className="section-title">Sharing of Information</h2>
        <p className="paragraph">
          We do not sell or rent your information. Data may be shared with
          financial partners, service providers or when legally required.
        </p>

        {/* Retention */}
        <h2 className="section-title">Data Retention</h2>
        <ul className="list-disc space-y-3 pl-6 text-gray-700">
          <li>While the user account is active</li>
          <li>Up to 3 months after account closure</li>
        </ul>

        {/* Amendments */}
        <h2 className="section-title">Amendments to Policy</h2>
        <p className="paragraph">
          Changes to this policy will be posted on this page and notified via
          email if required.
        </p>

        <p className="mt-10 text-right text-sm text-gray-500">
          Last Updated: 21/05/2025
        </p>
      </div>
    </div>
  );
};

export default Privacy;
