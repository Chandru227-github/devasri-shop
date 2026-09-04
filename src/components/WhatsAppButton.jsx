import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/918531027850?text=Hello%20Devashri%20International,%20I%20would%20like%20to%20enquire%20about%20importing%20fresh%20produce%20to%20UAE/GCC.',
      '_blank'
    );
  };

  return (
    <button
      type="button"
      className="floating-whatsapp-btn"
      onClick={handleWhatsApp}
      aria-label="Chat on WhatsApp with Devashri International"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="whatsapp-bubble-icon" />
      <span className="whatsapp-tooltip">Chat with us</span>
    </button>
  );
}
