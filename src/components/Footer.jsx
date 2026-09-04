import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, MessageSquare, ShieldCheck, Award } from 'lucide-react';
import { companyCredentials } from '../data/products';

export default function Footer({ onOpenEnquiry, onOpenCertificate }) {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-main-content">
        <div className="footer-grid">
          {/* Column 1: WE EXPORT TO */}
          <div className="footer-col export-to-col">
            <div className="footer-brand-lockup">
              <img
                src="/images/logo-transparent.png"
                alt="Devashri International Exports and Imports"
                className="footer-logo-img"
              />
              <div className="footer-brand-text">
                <span className="footer-brand-title">DEVASHRI INTERNATIONAL</span>
                <span className="footer-brand-tagline">Exporting Goodness, Importing Trust</span>
              </div>
            </div>
            <h3 className="footer-heading">WE EXPORT TO</h3>
            <p className="footer-destinations">
              UAE | OMAN | QATAR | KUWAIT | BAHRAIN | SAUDI ARABIA &amp; MORE
            </p>
            <p className="footer-sub-dest">
              Serving premium supermarkets, hypermarkets, horeca suppliers, and central vegetable markets across the GCC and Southeast Asia with temperature-controlled air &amp; sea reefer cargo.
            </p>

            {/* Skyline Silhouette Illustration matching reference */}
            <div className="skyline-wrapper" aria-hidden="true">
              <svg
                viewBox="0 0 400 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="skyline-svg"
              >
                {/* Subtle base line */}
                <line x1="0" y1="85" x2="400" y2="85" stroke="#b9d6c3" strokeWidth="1.5" />
                {/* Burj Khalifa silhouette */}
                <path d="M 195 85 L 197 15 L 200 5 L 203 15 L 205 85 Z" fill="#cbe3d3" />
                <line x1="200" y1="5" x2="200" y2="85" stroke="#a4cbb1" strokeWidth="1" />
                {/* Modern Towers */}
                <rect x="210" y="32" width="16" height="53" fill="#d7ebe0" />
                <rect x="230" y="44" width="22" height="41" fill="#cbe3d3" />
                <rect x="256" y="24" width="18" height="61" fill="#d7ebe0" />
                <polygon points="256,24 265,14 274,24" fill="#a4cbb1" />
                {/* Burj Al Arab curve silhouette */}
                <path d="M 285 85 Q 295 50 315 40 L 315 85 Z" fill="#cbe3d3" />
                <path d="M 285 85 C 290 60 305 45 325 35 L 325 85 Z" fill="#b9d6c3" opacity="0.6" />
                {/* Left side towers */}
                <rect x="170" y="38" width="18" height="47" fill="#d7ebe0" />
                <rect x="145" y="48" width="20" height="37" fill="#cbe3d3" />
                <rect x="120" y="28" width="20" height="57" fill="#d7ebe0" />
                <polygon points="120,28 130,16 140,28" fill="#b9d6c3" />
                <rect x="95" y="55" width="20" height="30" fill="#cbe3d3" />
                <rect x="70" y="42" width="20" height="43" fill="#d7ebe0" />
                <rect x="40" y="60" width="24" height="25" fill="#e0f0e6" />
                <rect x="10" y="68" width="25" height="17" fill="#e5f3eb" />
                <rect x="330" y="52" width="22" height="33" fill="#d7ebe0" />
                <rect x="358" y="62" width="26" height="23" fill="#e0f0e6" />
              </svg>
            </div>
          </div>

          {/* Column 2: GET IN TOUCH & REGISTERED CREDENTIALS */}
          <div className="footer-col touch-col">
            <h3 className="footer-heading">GET IN TOUCH</h3>
            <ul className="footer-contact-list">
              <li>
                <a href="tel:+918531027850" className="contact-touch-link">
                  <Phone size={18} className="contact-icon" />
                  <span className="contact-strong">+91 85310 27850</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@devashriexports.com" className="contact-touch-link">
                  <Mail size={18} className="contact-icon" />
                  <span>info@devashriexports.com</span>
                </a>
              </li>
              <li className="address-item">
                <MapPin size={22} className="contact-icon address-icon" />
                <address className="contact-address">
                  Ground Floor, 9/76, Gandhi Nagar,<br />
                  Near Govt. Higher Secondary School,<br />
                  Vadakkalur, Labbaikudikadu,<br />
                  Perambalur (Dt) - 621 108, Tamil Nadu, India.
                </address>
              </li>
            </ul>

            {/* Official Legal Registrations Strip */}
            <div className="footer-credentials-box">
              <div className="credentials-header">
                <ShieldCheck size={16} className="cred-icon" />
                <span className="cred-title">Government Export Credentials</span>
              </div>
              <div className="credentials-list">
                <div className="cred-item">
                  <span className="cred-lbl">IEC Code:</span>
                  <strong className="cred-val font-mono">{companyCredentials.iecNumber}</strong>
                </div>
                <div className="cred-item">
                  <span className="cred-lbl">GSTIN:</span>
                  <strong className="cred-val font-mono">{companyCredentials.gstin}</strong>
                </div>
                <div className="cred-item">
                  <span className="cred-lbl">FIEO RCMC:</span>
                  <strong className="cred-val font-mono">11199/2025-26</strong>
                </div>
              </div>
              <button
                type="button"
                className="footer-cert-link-btn"
                onClick={() => onOpenCertificate && onOpenCertificate('fieo')}
              >
                <Award size={13} />
                <span>View Digital Certificates &amp; Licenses</span>
              </button>
            </div>
          </div>

          {/* Column 3: SEND US AN ENQUIRY */}
          <div className="footer-col enquiry-col">
            <h3 className="footer-heading">SEND US AN ENQUIRY</h3>
            <p className="enquiry-prompt">
              We provide prompt commercial quotations with CNF / CIF Middle Eastern port rates, packaging options, and flight/vessel schedules.
            </p>

            <button
              type="button"
              className="btn btn-primary btn-enquire-footer"
              onClick={() => onOpenEnquiry()}
            >
              <MessageSquare size={16} />
              <span>ENQUIRE NOW</span>
              <ArrowRight size={16} />
            </button>

            <div className="quick-guarantee">
              <span className="guarantee-badge">✓ Free Export Feasibility &amp; Reefer Guidance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="footer-bottom-strip">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            © 2025 Devashri International Exports and Imports. All Rights Reserved. (IEC: {companyCredentials.iecNumber} | GSTIN: {companyCredentials.gstin})
          </p>
          <div className="footer-bottom-links">
            <a href="#about" className="foot-link">About Us</a>
            <span className="foot-sep">•</span>
            <a href="#products" className="foot-link">Products</a>
            <span className="foot-sep">•</span>
            <button
              type="button"
              onClick={() => onOpenCertificate && onOpenCertificate('fieo')}
              className="foot-link-btn"
            >
              Government Licenses
            </button>
            <span className="foot-sep">•</span>
            <a href="#certifications" className="foot-link">Certifications</a>
            <span className="foot-sep">•</span>
            <a href="#contact" className="foot-link">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
