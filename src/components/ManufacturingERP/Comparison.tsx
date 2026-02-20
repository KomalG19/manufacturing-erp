"use client";

import React from 'react';

const Comparison: React.FC = () => {
  const rows = [
    ['BOM Management','Multiple files, version conflicts','Single source of truth, auto-updates'],
    ['Production Tracking','Manual entries, delayed updates','Real-time tracking, instant alerts'],
    ['Inventory Control','Outdated stock levels','Live inventory, auto reorder points'],
    ['Cost Calculation','Manual calculations, errors','Automatic costing, 100% accuracy'],
    ['Reporting','Hours of manual work','Instant reports, automated delivery']
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-6">Excel vs BizPlusERP</h3>
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-3 bg-sky-700 text-white font-bold">
            <div className="p-4">Feature</div>
            <div className="p-4">Excel Method</div>
            <div className="p-4">BizPlusERP</div>
          </div>
          <div className="divide-y">
            {rows.map((r, i) => (
              <div key={i} className="grid md:grid-cols-3 grid-cols-1 p-6 gap-4 items-center">
                <div className="font-bold text-slate-900">{r[0]}</div>
                <div className="text-red-500">{r[1]}</div>
                <div className="text-emerald-600">{r[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
