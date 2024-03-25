import React from "react";
import { whatsapp } from "../assets/index.js";

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+3288818283"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 w-16 h-16 flex items-center justify-center rounded-full shadow-lg z-10"
    >
      <img
        src={whatsapp}
        alt="WhatsApp Icon"
        className="bg-green h-9 w-9 text-white"
      />
    </a>
  );
};

export default WhatsAppButton;
