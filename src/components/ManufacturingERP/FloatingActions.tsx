"use client";

import React from "react";

const FloatingActions = () => {
  const scrollToOffer = () => {
    const section = document.getElementById("offer");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-8 bottom-6 z-[9999] flex flex-col items-end gap-4">
      {/* Special Offer Button */}
      <a
        href="#offer"
        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white"
          >
            <path d="M20.59 13.41L11 3.83V10H2v4h9v6.17l9.59-9.59z" />
          </svg>
        </span>
        Special Offer
      </a>

      {/* 🟢 WhatsApp Button */}
      <a
        href="https://wa.me/917030323838?text=Hello%20BizPlusERP%20Team,%0A%0AI%20want%20to%20implement%20Manufacturing%20ERP%20in%20my%20company%20before%20the%20Financial%20Year%20deadline.%0A%0APlease%20schedule%20a%20demo%20and%20share%20the%20special%20offer%20details.%0A%0AThank%20you."
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="26"
          height="26"
          fill="white"
        >
          <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.82.736 5.572 2.136 7.99L0 32l7.824-2.056A15.933 15.933 0 0016 31.604c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.02a13.03 13.03 0 01-6.646-1.82l-.476-.28-4.646 1.22 1.24-4.532-.308-.468a13.036 13.036 0 01-2.018-6.932c0-7.216 5.868-13.084 13.084-13.084 7.216 0 13.084 5.868 13.084 13.084 0 7.216-5.868 13.084-13.084 13.084zm7.262-9.818c-.398-.2-2.356-1.164-2.72-1.296-.364-.132-.63-.2-.896.2-.266.398-1.03 1.296-1.262 1.562-.232.266-.464.3-.862.1-.398-.2-1.68-.62-3.2-1.98-1.182-1.054-1.98-2.356-2.212-2.754-.232-.398-.024-.612.176-.812.18-.178.398-.464.598-.696.2-.232.266-.398.398-.664.132-.266.066-.498-.034-.696-.1-.2-.896-2.16-1.228-2.96-.324-.78-.654-.674-.896-.686l-.762-.014c-.266 0-.696.1-1.06.498-.364.398-1.392 1.36-1.392 3.316 0 1.956 1.426 3.844 1.626 4.11.2.266 2.81 4.292 6.812 6.014.952.41 1.694.654 2.272.838.954.304 1.822.262 2.508.158.764-.114 2.356-.962 2.688-1.89.332-.928.332-1.724.232-1.89-.1-.166-.364-.266-.762-.466z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingActions;
