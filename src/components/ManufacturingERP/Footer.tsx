"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

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
          <div className="mt-4 text-slate-300">
            +91 70 30 32 3838
            <br />
            support@bizpluscrm.com
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com/DU-BTCgAlRX"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-400 hover:bg-pink-500 hover:border-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com/122096585037120705"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-400 hover:bg-blue-600 hover:border-blue-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://linkedin.com/company/yourcompany"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-400 hover:bg-blue-500 hover:border-blue-500 transition"
            >
              <FaLinkedinIn />
            </a>

            {/* <a */}
              {/* href="https://youtube.com/yourchannel" */}
              {/* target="_blank" */}
              {/* className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-400 hover:bg-red-600 hover:border-red-600 transition" */}
            {/* > */}
              {/* <FaYoutube /> */}
            {/* </a> */}
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

        {/* Cities */}
        <div>
          <h5 className="font-bold mb-2">Major Cities</h5>
          <p className="text-slate-400 text-sm">
            Mumbai • Delhi • Bangalore • Chennai • Pune • Hyderabad
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-slate-500 text-sm">
        © {year} BizPlusERP. All rights reserved. | Made in India for Indian Manufacturing
      </div>
    </footer>
  );
};

export default Footer;