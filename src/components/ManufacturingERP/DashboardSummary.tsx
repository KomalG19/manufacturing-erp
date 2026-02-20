"use client";

import React from 'react';

const DashboardSummary: React.FC = () => {
  const cards = [
    { value: '85%', label: 'Production Efficiency' },
    { value: '₹12.5L', label: 'Work in Progress' },
    { value: '₹45.2L', label: 'Current Stock Value' },
    { value: '23', label: 'Active Job Orders' },
    { value: '₹8.7L', label: 'Monthly Revenue' },
    { value: '15', label: 'Pending Deliveries' }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-6">Powerful ERP Dashboard</h3>
        <p className="text-center text-slate-500 mb-8">See Everything in One Screen</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-sky-700 mb-2">{c.value}</div>
              <div className="text-sm text-slate-600 font-semibold">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardSummary;
