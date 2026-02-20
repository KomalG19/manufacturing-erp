"use client";

import React from 'react';

const Modules: React.FC = () => {
  const modules = [
    { title: 'Sales Order Management', points: ['Convert enquiry to Sales Order','Order-wise production planning','Pending order tracking','Customer-wise order history'] },
    { title: 'Bill of Material (BOM)', points: ['Multi-level BOM','Raw material mapping','Version control','Standard quantity management'] },
    { title: 'Job Card Management', points: ['Job card creation from SO','Department-wise process flow','Stage tracking','Production status monitoring'] },
    { title: 'Production Process Tracking', points: ['WIP tracking','Stage-wise updates','Process completion','Efficiency tracking'] },
    { title: 'Raw Material & Consumption Tracking', points: ['Auto material deduction','Actual vs standard comparison','Wastage calculation','Material variance report'] },
    { title: 'Inventory Management', points: ['Real-time stock visibility','Raw material, WIP & FG tracking','Low stock alerts','Stock valuation reports'] }
  ];

  return (
    <section id="modules" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-8">Core ERP Modules</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-transparent hover:border-sky-100 transition">
              <h4 className="font-bold mb-3">{m.title}</h4>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5">
                {m.points.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
