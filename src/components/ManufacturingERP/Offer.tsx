"use client";

import React from 'react';

const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block bg-white/8 px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-4">Limited Financial Year Offer</div>
        <h3 className="text-3xl font-extrabold mb-3">Financial Year Special Implementation Offer</h3>
        <p className="text-slate-200 mb-8">Start New Financial Year (1st April) With Structured ERP System</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white/5 p-6 rounded-2xl">
            <h4 className="font-bold mb-3">What&apos;s Included</h4>
            <ul className="text-sm text-slate-200 space-y-2">
              <li>Process Mapping Session</li>
              <li>Data Structuring Support</li>
              <li>BOM Setup Assistance</li>
              <li>Server Deployment Guidance</li>
              <li>User Training Support</li>
              <li>3 Months Free Support</li>
            </ul>
          </div>
          <div className="bg-white/6 p-6 rounded-2xl">
            <h4 className="font-bold mb-3">Implement Before 1st April & Begin FY With</h4>
            <ul className="text-sm text-slate-200 space-y-2">
              <li>Controlled Production</li>
              <li>Accurate Inventory</li>
              <li>Proper Costing</li>
              <li>Better Planning</li>
              <li>Reduced Wastage</li>
              <li>Improved Profit Margin</li>
            </ul>
          </div>
        </div>

        <a href="#contact" className="inline-block bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold">Get Special Pricing</a>
      </div>
    </section>
  );
};

export default Offer;
