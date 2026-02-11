import React from "react";
import { useForm } from "react-hook-form";

export default function LeadForm({ type = "contact", onSuccess }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      message: "",
      type: type,
    },
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    // 🔹 Example API call (optional)
    // await fetch("/api/leads", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });

    reset();
    if (onSuccess) onSuccess();
    alert("Form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-xl shadow"
    >
      {/* Name */}
      <div>
        <label className="block font-medium mb-1">Full Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          className="w-full border rounded px-3 py-2"
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block font-medium mb-1">Phone Number</label>
        <input
          {...register("phone", {
            required: "Phone is required",
            minLength: 10,
          })}
          className="w-full border rounded px-3 py-2"
          placeholder="+91 98765 43210"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">Invalid phone number</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full border rounded px-3 py-2"
          placeholder="john@company.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label className="block font-medium mb-1">
          Chit Fund Company Name
        </label>
        <input
          {...register("companyName")}
          className="w-full border rounded px-3 py-2"
          placeholder="Safe Chits Pvt Ltd"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block font-medium mb-1">Message</label>
        <textarea
          {...register("message")}
          className="w-full border rounded px-3 py-2 min-h-[100px]"
          placeholder={
            type === "demo"
              ? "Tell us about your requirements..."
              : "How can we help you?"
          }
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold"
      >
        {isSubmitting
          ? "Submitting..."
          : type === "demo"
          ? "Request Free Demo"
          : "Send Message"}
      </button>
    </form>
  );
}
