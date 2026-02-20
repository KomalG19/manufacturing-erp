"use client";

import React from 'react';

const Cities: React.FC = () => {
  const cities = [
    'Pune','Mumbai','Bangalore','Hyderabad','Chennai',
    'Delhi','Ahmedabad','Surat','Coimbatore',
    'Indore','Jaipur','Kolkata','& More'
  ];

  return (
    <section className="py-12 bg-slate-50 text-center">
      <div className="max-w-4xl mx-auto px-6">
        
        <h4 className="text-2xl font-extrabold mb-4">
          Trusted ERP Software Across India – Leading in Pune
        </h4>

        {/* SEO Optimized Paragraph */}
        <p className="text-slate-500 mb-6 max-w-2xl mx-auto">
          Recognized as one of the best ERP software in Pune, our solution helps
          manufacturing and growing businesses streamline operations with seamless
          implementation and dedicated support. We proudly serve companies across India.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {cities.map(c => (
            <span
              key={c}
              className="px-4 py-2 bg-white rounded-full font-semibold text-sm hover:shadow-md transition"
            >
              {c}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Cities;