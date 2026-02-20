"use client";

import React from 'react';

const Problems: React.FC = () => {
  const items = [
    { 
      title: 'Production planning managed in Excel?', 
      text: 'Multiple spreadsheets causing confusion, data duplication, and version conflicts in manufacturing operations.' 
    },
    { 
      title: 'No proper BOM control?', 
      text: 'Difficulty tracking material requirements accurately, leading to production inefficiencies.' 
    },
    { 
      title: 'Raw material consumption not tracked?', 
      text: 'Poor visibility resulting in wastage, leakage, and increased operational costs.' 
    },
    { 
      title: 'No clarity on job card status?', 
      text: 'Production delays due to lack of real-time tracking and coordination between departments.' 
    },
    { 
      title: 'Stock mismatch between store & production?', 
      text: 'Inventory inaccuracies causing overstocking or unexpected stockouts.' 
    },
    { 
      title: 'No finished goods costing visibility?', 
      text: 'Inability to calculate accurate product costing and maintain proper profit margins.' 
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        
        <h3 className="text-3xl font-extrabold text-center mb-3">
          Common Manufacturing Challenges Faced by Businesses in Pune
        </h3>

        {/* SEO Optimized Paragraph */}
        <p className="text-center text-slate-500 mb-8 max-w-3xl mx-auto">
          Many growing manufacturing companies in Pune struggle with manual processes,
          disconnected systems, poor inventory visibility, and inaccurate costing.
          Choosing the best ERP software in Pune helps eliminate these operational
          challenges by providing a centralized, automated, and real-time business management solution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h4 className="font-bold mb-2">{it.title}</h4>
              <p className="text-sm text-slate-500">{it.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Problems;