"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LeadForm: React.FC = () => {
  const [status, setStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget; // ✅ FIXED (store reference)

    setStatus(null);
    setLoading(true);

    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") || "").trim(),
      phone: String(fd.get("phone") || "").replace(/\D/g, "").slice(-10),
      company: String(fd.get("company") || "").trim(),
      website: String(fd.get("website") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      city: String(fd.get("city") || "").trim(),
      description: String(fd.get("description") || "").trim(),
    };

    // Required validation
    if (
      !payload.name ||
      !payload.phone ||
      !payload.company ||
      !payload.website ||
      !payload.email ||
      !payload.city
    ) {
      setStatus({ type: "error", text: "Please fill in all required fields." });
      setLoading(false);
      return;
    }

    // Phone validation
    if (!/^[6-9]\d{9}$/.test(payload.phone)) {
      setStatus({
        type: "error",
        text: "Enter a valid 10-digit Indian mobile number.",
      });
      setLoading(false);
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setStatus({
        type: "error",
        text: "Enter a valid business email address.",
      });
      setLoading(false);
      return;
    }

    // Website validation
    try {
      const formattedUrl = payload.website.startsWith("http")
        ? payload.website
        : `https://${payload.website}`;
      new URL(formattedUrl);
    } catch {
      setStatus({
        type: "error",
        text: "Enter a valid company website URL.",
      });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        setStatus({
          type: "error",
          text: data?.error || "Unable to submit form.",
        });
        setLoading(false);
        return;
      }

      form.reset();          // ✅ safe reset
      setLoading(false);

      // slight delay for smoother UX
      setTimeout(() => {
        router.push("/thank-you");
      }, 200);

    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        text: "Server error. Please try again later.",
      });
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">

          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-[#1f3a8a] md:text-3xl">
              Book Your Free ERP Consultation
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Speak with our ERP experts and optimize your manufacturing operations.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {[
                { name: "name", placeholder: "Full Name *", type: "text" },
                { name: "phone", placeholder: "Mobile Number *", type: "tel" },
                { name: "company", placeholder: "Company Name *", type: "text" },
                { name: "website", placeholder: "Company Website *", type: "url" },
                { name: "email", placeholder: "Business Email *", type: "email" },
                { name: "city", placeholder: "City *", type: "text" },
              ].map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  autoComplete="off"
                  className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-800 
                  focus:border-[#1f3a8a] focus:ring-2 focus:ring-[#1f3a8a]/20 focus:outline-none"
                />
              ))}
            </div>

            <textarea
              name="description"
              placeholder="Briefly describe your ERP requirement (optional)"
              className="h-24 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 
              focus:border-[#1f3a8a] focus:ring-2 focus:ring-[#1f3a8a]/20 focus:outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="h-11 w-full rounded-lg bg-[#1f3a8a] text-sm font-semibold text-white transition hover:bg-[#162c6b]"
            >
              {loading ? "Processing..." : "Schedule Free Consultation"}
            </button>

            {status && (
              <div
                className={`rounded p-2 text-center text-xs ${
                  status.type === "success"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {status.text}
              </div>
            )}

          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
