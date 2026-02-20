"use client";

import React from 'react';
import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Company Info */}
        <div>
          <h4 className="text-xl font-bold">
            BizPlus<span className="text-sky-400">ERP</span>
          </h4>

          <p className="text-slate-400 mt-2">
            Complete Manufacturing ERP Solution for Indian SMEs
          </p>

          <p className="text-slate-400 text-sm mt-3">
            Recognized as one of the <strong>best ERP software in Pune</strong>,
            helping manufacturing businesses streamline production,
            inventory management, accounting, and overall business operations.
          </p>

          <div className="mt-4 text-slate-300 text-sm">
            +91 70 30 32 3838
            <br />
            support@bizpluscrm.com
          </div>

          {/* Social Media Links With Icons */}
          <div className="mt-5 flex gap-4">
            <a 
              href="https://facebook.com/122096585037120705" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 hover:bg-sky-600 transition"
            >
              <Facebook size={18} />
            </a>

            <a 
              href="https://linkedin.com/company/yourcompany" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 hover:bg-sky-600 transition"
            >
              <Linkedin size={18} />
            </a>

            <a 
              href="https://instagram.com/DU-BTCgAlRX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 hover:bg-sky-600 transition"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-bold mb-2">Quick Links</h5>
          <ul className="text-slate-400 space-y-1 text-sm">
            <li><a href="#modules">ERP Modules</a></li>
            <li><a href="#offer">Special Offers</a></li>
            <li><a href="#contact">Request Demo</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h5 className="font-bold mb-2">Industries</h5>
          <ul className="text-slate-400 space-y-1 text-sm">
            <li>Auto Components</li>
            <li>Metal Fabrication</li>
            <li>Machine Parts</li>
            <li>Electronics</li>
          </ul>
        </div>

        {/* Internal Keyword Links */}
        <div>
          <h5 className="font-bold mb-2">ERP Solutions in Pune</h5>
          <ul className="text-slate-400 space-y-1 text-sm">
            <li>
              <Link href="/erp-software-in-pune" className="hover:text-sky-400">
                ERP Software in Pune
              </Link>
            </li>
            <li>
              <Link href="/manufacturing-erp-pune" className="hover:text-sky-400">
                Manufacturing ERP Pune
              </Link>
            </li>
            <li>
              <Link href="/cloud-erp-pune" className="hover:text-sky-400">
                Cloud ERP in Pune
              </Link>
            </li>
            <li>
              <Link href="/erp-for-smes-pune" className="hover:text-sky-400">
                ERP for SMEs in Pune
              </Link>
            </li>
          </ul>
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