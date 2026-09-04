import React from 'react';
import { Mail, Phone, ShieldCheck } from 'lucide-react';
import { companyCredentials } from '../data/products';

export default function TopBar({ onOpenCertificate }) {
  return (
    <div className="top-bar">
      {/* Desktop Announcement Bar (Clean, single line across wide screens) */}
      <div className="top-bar-desktop-wrap">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <span className="top-bar-motto">
              <span className="leaf-icon">🌱</span> Exporting Freshness. Importing Trust.
            </span>
            <span className="top-bar-divider">|</span>
            <button
              type="button"
              className="top-bar-cert-badge"
              onClick={() => onOpenCertificate && onOpenCertificate('fieo')}
              title="Click to view Official Government Export Registration"
            >
              <ShieldCheck size={13} className="badge-shield" />
              <span>Govt. Regd Exporter • IEC: {companyCredentials.iecNumber}</span>
            </button>
          </div>
          <div className="top-bar-right">
            <a href="mailto:info@devashriexports.com" className="top-bar-link">
              <Mail size={14} className="top-icon" />
              <span>info@devashriexports.com</span>
            </a>
            <span className="top-bar-divider">|</span>
            <a href="tel:+918531027850" className="top-bar-link">
              <Phone size={14} className="top-icon" />
              <span>+91 85310 27850</span>
            </a>
            <span className="top-bar-divider">|</span>
            <div className="top-bar-socials">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Instagram"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="LinkedIn"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Streamlined TopBar: Single crisp line with essential contact & license */}
      <div className="top-bar-mobile-wrap">
        <a href="tel:+918531027850" className="top-bar-mobile-contact">
          <Phone size={12} className="top-icon" />
          <span>+91 85310 27850</span>
        </a>
        <span className="top-bar-mobile-sep">•</span>
        <button
          type="button"
          className="top-bar-mobile-cert"
          onClick={() => onOpenCertificate && onOpenCertificate('fieo')}
        >
          <ShieldCheck size={12} className="badge-shield" />
          <span>Govt. IEC: {companyCredentials.iecNumber}</span>
        </button>
      </div>
    </div>
  );
}
