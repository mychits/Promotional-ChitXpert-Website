import React, { useState } from "react";
import { CheckSquare, Square } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Checkbox = ({ checked, onChange }) => {
  return (
    <button
      onClick={onChange}
      className="flex items-start gap-2 text-left"
    >
      {checked ? (
        <CheckSquare className="mt-1 text-[#053B90]" />
      ) : (
        <Square className="mt-1 text-slate-500" />
      )}
      <span className="text-gray-800">
        I have read and agree to the{" "}
        <span className="font-semibold text-[#053B90]">
          Terms & Conditions
        </span>{" "}
        and{" "}
        <span className="font-semibold text-[#053B90]">
          Privacy Policy
        </span>.
      </span>
    </button>
  );
};

const TermsConditions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { groupId, userId } = location.state || {};

  const [agreed, setAgreed] = useState(false);

  const handleProceed = () => {
    if (!agreed) return;
    navigate("/signup", {
      state: { termsReadConfirmed: true, groupId, userId },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <h1 className="mb-6 text-center text-2xl font-bold text-[#053B90]">
          Terms & Conditions and Privacy Policy for My Chit
        </h1>

        {/* Why Read */}
        <div className="mb-6 rounded-xl border-l-4 border-green-500 bg-green-50 p-5 shadow-md">
          <h3 className="mb-4 text-center text-xl font-bold text-green-700">
            Why Customers Must Read Them All
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>✅ <strong>Legal Binding Agreement</strong></li>
            <li>⚠️ <strong>Rights & Obligations</strong></li>
            <li>❌ <strong>Penalties & Consequences</strong></li>
            <li>💰 <strong>Financial Implications</strong></li>
            <li>🔐 <strong>Data Privacy</strong></li>
            <li>⚖️ <strong>Dispute Resolution</strong></li>
          </ul>
        </div>

        {/* Agreement */}
        <div className="mb-6 px-2">
          <Checkbox
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
        </div>

        {/* Proceed Button */}
        <button
          disabled={!agreed}
          onClick={handleProceed}
          className={`w-full rounded-xl py-4 text-lg font-bold text-white shadow-lg transition
            ${
              agreed
                ? "bg-[#09f143] hover:bg-blue-900"
                : "cursor-not-allowed bg-gray-400"
            }
          `}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default TermsConditions;
