export default function ThankYouPage() {
  return (
    <section className="bg-slate-100 pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl bg-white shadow-xl border border-slate-200 p-10">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1f3a8a]">
              🎉 Thank You! Your Free ERP Consultation is Confirmed
            </h1>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Our ERP Manufacturing Specialist will contact you shortly to understand
              your current workflow and schedule your live demo.
            </p>
          </div>

          {/* Productivity Package */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-[#1f3a8a] mb-4">
              🎁 You’ve Unlocked Our Productivity Boost Package
            </h2>

            <div className="space-y-4 text-slate-700 text-sm leading-relaxed">

              <p>
                🚀 <strong>4 High-Impact Business Modules FREE with BizPlusERP</strong>
              </p>

              <div>
                <p className="font-semibold">🔹 Sales Productivity – BizPlusCRM</p>
                <p>
                  Manage Enquiries, Quotations, Tasks, Telecalling, Visit Planning
                  & Appointments in one structured system.
                </p>
              </div>

              <div>
                <p className="font-semibold">🔹 Support Management System</p>
                <p>
                  Tickets, Customer CMS, AMC Tracking & App Notifications
                  for better service control.
                </p>
              </div>

              <div>
                <p className="font-semibold">🔹 Basic Accounting Suite</p>
                <p>
                  Proforma, Invoicing, Purchase, Cashbook, Ledger & Expense
                  Management — fully integrated.
                </p>
              </div>

              <div>
                <p className="font-semibold">🔹 Automatic Lead Integrations</p>
                <p>
                  Website, Facebook, Sulekha, Justdial, IndiaMart,
                  TradeIndia & WhatsApp (Bizon, Intrackt, Wati).
                </p>
              </div>

              <p className="font-medium text-slate-800 mt-4">
                🎯 Lead → Sales → Production → Inventory → Accounting
                — All in One Unified Platform.
              </p>

            </div>
          </div>

          {/* Deadline Section */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10">
            <h3 className="font-semibold text-amber-700">
              ⏳ Offer Deadline
            </h3>
            <p className="text-sm text-amber-700 mt-2">
              This FREE module package is available only for ERP implementations
              confirmed before <strong>15th March 2026</strong>.
              After this date, these modules will be chargeable separately.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-[#1f3a8a]">
              📅 Want to Move Faster?
            </h3>

            <p className="text-sm text-slate-600">
              See Real-time Production Tracking, BOM Control, Inventory Accuracy,
              Costing & Profit Visibility in your Live ERP Demo.
            </p>

            <a
              href="/manufacturing-erp#contact"
              className="inline-block mt-3 bg-[#1f3a8a] hover:bg-[#162c6b] text-white px-6 py-3 rounded-lg text-sm font-semibold transition"
            >
              Book My ERP Demo Now
            </a>

            <div className="mt-6 text-sm text-slate-600">
              💬 Need Immediate Assistance? <br />
              Chat with our ERP Expert on WhatsApp <br />
              <span className="font-semibold text-[#1f3a8a]">
                📞 +91 70 30 32 3838
              </span>
            </div>
          </div>

          {/* Footer Line */}
          <div className="mt-10 text-center text-sm text-slate-500">
            Start the New Financial Year with a Structured ERP System — Not Excel Sheets. <br />
            – Team BizPlusERP
          </div>

        </div>
      </div>
    </section>
  );
}
