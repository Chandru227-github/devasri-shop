import React from 'react';
import { ArrowRight, Plane, Ship, ShieldCheck, Clock } from 'lucide-react';

export default function LogisticsBanner({ onOpenAbout, onOpenEnquiry }) {
  return (
    <section id="export" className="logistics-section">
      <div className="container">
        <div className="logistics-card">
          <div className="logistics-text-side">
            <h2 className="logistics-heading">
              BRINGING INDIA'S <br />
              <span className="logistics-accent">FINEST TO UAE</span> <span className="leaf-icon">🍃</span>
            </h2>

            <p className="logistics-paragraph">
              We export a wide range of fresh fruits, vegetables and agro products with the highest quality standards. Our commitment is to deliver freshness, purity and trust in every shipment.
            </p>

            <div className="logistics-perks">
              <div className="perk-item">
                <Plane size={18} className="perk-icon" />
                <span>Daily Direct Air Cargo Flights</span>
              </div>
              <div className="perk-item">
                <Ship size={18} className="perk-icon" />
                <span>Reefer Sea Containers for Bulk</span>
              </div>
              <div className="perk-item">
                <ShieldCheck size={18} className="perk-icon" />
                <span>100% Phyto-Sanitary Compliance</span>
              </div>
            </div>

            <div className="logistics-actions">
              <a href="#about" className="btn btn-primary btn-logistics">
                <span>ABOUT US</span>
                <ArrowRight size={18} />
              </a>
              <button
                type="button"
                className="btn btn-secondary-outline"
                onClick={() => onOpenEnquiry()}
              >
                Request Freight Quote
              </button>
            </div>
          </div>

          <div className="logistics-visual-side">
            <div className="logistics-media-wrapper">
              <img
                src="/images/logistics-uae.jpg"
                alt="Cargo shipping container, refrigerated truck, air cargo plane to UAE with fresh produce"
                className="logistics-main-img"
                loading="lazy"
              />

              {/* Floating Circular Badge matching the screenshot */}
              <div className="badge-excellence">
                <div className="badge-inner">
                  <span className="badge-leaf">🌱</span>
                  <span className="badge-title">EXPORTING</span>
                  <span className="badge-highlight">excellence</span>
                  <span className="badge-year">SINCE 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
