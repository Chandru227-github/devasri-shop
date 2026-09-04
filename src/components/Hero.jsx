import React from 'react';
import { ArrowRight, Award, Sprout, ShieldCheck, Truck, MessageCircle } from 'lucide-react';

export default function Hero({ onOpenEnquiry }) {
  const highlights = [
    {
      icon: <Award size={20} />,
      label: 'Premium',
      sublabel: 'Quality'
    },
    {
      icon: <Sprout size={20} />,
      label: 'Farm',
      sublabel: 'Fresh'
    },
    {
      icon: <ShieldCheck size={20} />,
      label: 'Hygienic',
      sublabel: 'Packing'
    },
    {
      icon: <Truck size={20} />,
      label: 'On Time',
      sublabel: 'Delivery'
    }
  ];

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/918531027850?text=Hello%20Devashri%20International,%20I%20am%20interested%20in%20your%20fresh%20produce%20export%20services.',
      '_blank'
    );
  };

  return (
    <section id="home" className="hero-section">
      {/* Side floating WhatsApp bar */}
      <aside className="floating-side-tab" onClick={handleWhatsApp} title="Chat with Export Desk">
        <span className="side-tab-text">WhatsApp Enquiry</span>
        <div className="side-tab-icon">
          <MessageCircle size={18} />
        </div>
      </aside>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">PREMIUM QUALITY</span>
          <h1 className="hero-title">
            FRESH PRODUCE <br />
            <span className="hero-title-accent">EXPORTERS FROM INDIA</span> <span className="leaf-emoji">🍃</span>
          </h1>

          <p className="hero-tagline">
            Delivering Nature's Best to UAE &amp; Global Markets
          </p>

          <div className="hero-features-row">
            {highlights.map((item, idx) => (
              <div key={idx} className="feature-pill">
                <div className="feature-icon-bubble">
                  {item.icon}
                </div>
                <div className="feature-text">
                  <span className="feature-name">{item.label}</span>
                  <span className="feature-sub">{item.sublabel}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-cta-wrapper">
            <a href="#products" className="btn btn-primary btn-hero">
              <span>EXPLORE PRODUCTS</span>
              <ArrowRight size={18} className="btn-arrow" />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="/images/hero-produce.jpg"
              alt="Fresh Indian produce exported to UAE - Green mangoes, drumsticks, bananas, turmeric, jackfruit with Dubai skyline and cargo airplane"
              className="hero-main-img"
              loading="eager"
            />
            {/* Subtle aesthetic gradient overlay to merge naturally */}
            <div className="hero-glow-edge"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
