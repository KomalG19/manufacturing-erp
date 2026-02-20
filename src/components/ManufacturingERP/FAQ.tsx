"use client";

import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { q: 'How long does ERP implementation take?', a: 'Complete implementation typically takes 4-6 weeks, including data migration, staff training, and system testing. We work around your production schedule to minimize disruption.' },
    { q: 'Can you migrate our existing Excel data?', a: 'Yes, we provide complete data migration services. Our team will clean, validate, and import your Excel data into the ERP system, ensuring no information is lost.' },
    { q: 'Is the system suitable for small manufacturers?', a: 'Absolutely! BizPlusERP is designed specifically for Indian SME manufacturers. It scales with your business growth and doesn\'t require large IT infrastructure.' },
    { q: 'What about GST compliance and reporting?', a: 'The system is fully GST compliant and generates all required reports automatically. It includes GSTR-1, GSTR-3B, and other statutory reports as per Indian regulations.' },
    { q: 'Do you provide training to our staff?', a: 'Yes, we provide comprehensive on-site training for your team. We also offer video tutorials, user manuals, and ongoing phone support.' },
    { q: 'What is the monthly cost?', a: 'Pricing is customized based on number of users, modules required, and business size. Starting packages begin at affordable rates for SMEs. Contact us for a detailed quote tailored to your needs.' }
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className={`p-4 rounded-2xl bg-slate-50 border ${open === i ? 'border-sky-100 shadow-md' : 'border-transparent'}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between">
                <h4 className="font-bold text-left">{f.q}</h4>
                <div className="w-8 h-8 bg-sky-700 text-white rounded-lg flex items-center justify-center">{open === i ? '-' : '+'}</div>
              </button>
              {open === i && <div className="mt-3 text-slate-600">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
