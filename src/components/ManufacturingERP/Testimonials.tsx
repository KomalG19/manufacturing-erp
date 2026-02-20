"use client";

import React from 'react';

const Testimonials: React.FC = () => {
  const data = [
    { 
      quote: 'BizPlusERP transformed our production efficiency. We reduced our inventory holding by 30% and improved delivery times significantly.', 
      author: 'Rajesh Sharma', 
      role: 'MD, Precision Auto Parts Pvt Ltd, Pune' 
    },
    { 
      quote: 'No more Excel chaos! Our job card tracking is now digital and we have complete visibility of our production floor operations.', 
      author: 'Priya Patel', 
      role: 'Owner, Gujarat Engineering Works' 
    },
    { 
      quote: 'The ROI was visible within 3 months. Our material wastage reduced by 25% and we can now take more orders with confidence.', 
      author: 'Amit Kumar', 
      role: 'Director, Chennai Metal Crafts' 
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        
        <h3 className="text-3xl font-extrabold text-center mb-4">
          What Manufacturing Leaders Say About the Best ERP Software in Pune
        </h3>

        {/* SEO Intro Paragraph */}
        <p className="text-center text-slate-500 mb-8 max-w-3xl mx-auto">
          Businesses across Pune and India trust BizPlusERP to streamline operations,
          reduce wastage, and improve profitability. Our clients recognize us as one of the
          best ERP software providers in Pune for manufacturing excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <p className="italic text-slate-600 mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{t.author}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;