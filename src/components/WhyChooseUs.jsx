import React from 'react';
import { Award, ShieldCheck, Clock, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <Award size={32} className="why-icon" />,
      title: 'Premium Quality',
      description: 'Carefully selected and sorted produce.'
    },
    {
      icon: <ShieldCheck size={32} className="why-icon" />,
      title: 'Global Standards',
      description: 'Hygienic packing & quality assurance.'
    },
    {
      icon: <Clock size={32} className="why-icon" />,
      title: 'Timely Delivery',
      description: 'On time shipment worldwide.'
    },
    {
      icon: <HeartHandshake size={32} className="why-icon" />,
      title: 'Customer Focused',
      description: 'Long term relationships with our clients.'
    }
  ];

  return (
    <section id="about" className="why-choose-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-sub-eyebrow">— WHY CHOOSE US —</span>
          <h2 className="section-main-heading">Built on Freshness, Reliability &amp; Integrity</h2>
          <p className="section-desc">
            Partner with Devashri International for direct farm-to-port supply chains, uncompromised cold chain management, and custom tailored Middle East export packaging.
          </p>
        </div>

        <div className="why-cards-grid">
          {cards.map((card, idx) => (
            <div key={idx} className="why-card">
              <div className="why-icon-container">
                {card.icon}
              </div>
              <div className="why-card-content">
                <h3 className="why-card-title">{card.title}</h3>
                <p className="why-card-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
