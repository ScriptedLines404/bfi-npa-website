/* src/components/FloatingWhatsApp.jsx */
import React from "react";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%2C%20I%20need%20help%20with%20NPA%20recovery"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 hover:scale-110"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default FloatingWhatsApp;