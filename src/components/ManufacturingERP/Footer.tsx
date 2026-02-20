"use client";

import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <div>
          <h4 className="text-xl font-bold">
            BizPlus<span className="text-sky-400">ERP</span>
          </h4>

          <p className="text-slate-400 mt-2">
            Complete Manufacturing ERP Solution for Indian SMEs
          </p>

          {/* SEO Line Added */}
          <p className="text-slate-400 text-sm mt-3">
            Recognized as one of the best ERP software in Pune, helping
            manufacturing businesses streamline production, inventory,
            accounting, and operations efficiently.
          </p>

          <div className="mt-4 text-slate-300">
            +91 70 30 32 3838
            <br />
            support@bizpluscrm.com
          </div>
        </div>

        <div>
          <h5 className="font-bold mb-2">Quick Links</h5>
          <ul className="text-slate-400 space-y-1 text-sm">
            <li><a href="#modules">ERP Modules</a></li>
            <li><a href="#offer">Special Offers</a></li>
            <li><a href="#contact">Request Demo</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-2">Industries</h5>
          <ul className="text-slate-400 space-y-1 text-sm">
            <li>Auto Components</li>
            <li>Metal Fabrication</li>
            <li>Machine Parts</li>
            <li>Electronics</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-2">Major Cities</h5>
          <p className="text-slate-400 text-sm">
            Pune • Mumbai • Delhi • Bangalore • Chennai • Hyderabad
          </p>
        </div>

      </div>

      <div className="mt-8 text-center text-slate-500 text-sm">
        © {year} BizPlusERP. All rights reserved. |
        Trusted as the Best ERP Software in Pune for Manufacturing Excellence.
      </div>
    </footer>
  );
};

export default Footer;