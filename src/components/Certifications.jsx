import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, Award, ExternalLink, FileText, Check } from 'lucide-react';
import { certifications, companyCredentials } from '../data/products';

export default function Certifications({ onOpenCertificate, onOpenEnquiry }) {
  const govtCerts = certifications.filter(c => c.isPrimaryGovt);
  const qualityStandards = certifications.filter(c => !c.isPrimaryGovt);

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        {/* Section Intro Header */}
        <div className="section-header text-center">
          <span className="section-sub-eyebrow">— GOVERNMENT ACCREDITATIONS &amp; LEGAL STANDARDS —</span>
          <h2 className="section-main-heading">Certified Export Licenses &amp; Compliance</h2>
          <p className="section-desc">
            Devashri International Exports and Imports is an officially authorized Merchant Exporter recognized by the Ministry of Commerce &amp; Industry, Government of India. Every shipment is backed by statutory trade licenses, phytosanitary screenings, and verifiable documentation.
          </p>
        </div>

        {/* Official Trust Strip */}
        <div className="govt-trust-strip">
          <div className="trust-strip-item">
            <span className="strip-dot"></span>
            <span><strong>IEC:</strong> {companyCredentials.iecNumber}</span>
          </div>
          <div className="trust-strip-item">
            <span className="strip-dot"></span>
            <span><strong>GSTIN:</strong> {companyCredentials.gstin}</span>
          </div>
          <div className="trust-strip-item">
            <span className="strip-dot"></span>
            <span><strong>FIEO RCMC:</strong> 11199/2025-26</span>
          </div>
          <div className="trust-strip-item">
            <span className="strip-dot"></span>
            <span><strong>UDIN:</strong> {companyCredentials.fieoUdin}</span>
          </div>
        </div>

        {/* Primary Government Registrations (Interactive Cards) */}
        <div className="primary-govt-certs-grid">
          {/* 1. FIEO RCMC Card */}
          <div className="govt-cert-card highlight-card">
            <div className="govt-cert-badge-row">
              <span className="govt-agency-tag">FIEO • APEX EXPORT BODY</span>
              <span className="verified-status-tag">
                <CheckCircle2 size={13} />
                <span>Govt. Verified</span>
              </span>
            </div>
            <div className="govt-cert-main">
              <div className="govt-icon-wrap">
                <Award size={26} className="govt-icon" />
              </div>
              <div>
                <h3 className="govt-cert-title">Registration Cum Membership Certificate (RCMC)</h3>
                <p className="govt-cert-sub">Federation of Indian Export Organisations (Govt. of India)</p>
              </div>
            </div>

            <div className="govt-cert-details">
              <div className="cert-detail-pair">
                <span className="detail-k">RCMC Registration No:</span>
                <span className="detail-v font-mono">{companyCredentials.fieoRcmc}</span>
              </div>
              <div className="cert-detail-pair">
                <span className="detail-k">Registered As:</span>
                <span className="detail-v">{companyCredentials.registeredAs}</span>
              </div>
              <div className="cert-detail-pair">
                <span className="detail-k">Validity:</span>
                <span className="detail-v text-valid">{companyCredentials.fieoValidity}</span>
              </div>
              <div className="cert-detail-pair">
                <span className="detail-k">Registered Scope:</span>
                <span className="detail-v">Spices, Agro Produce, Maize, Cashew &amp; Coconut</span>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-cert-view"
              onClick={() => onOpenCertificate && onOpenCertificate('fieo')}
            >
              <FileText size={15} />
              <span>View Official Certificate</span>
              <ExternalLink size={14} className="link-icon" />
            </button>
          </div>

          {/* 2. Central GST Registration Card */}
          <div className="govt-cert-card">
            <div className="govt-cert-badge-row">
              <span className="govt-agency-tag">GOVERNMENT OF INDIA</span>
              <span className="verified-status-tag">
                <CheckCircle2 size={13} />
                <span>Active Taxpayer</span>
              </span>
            </div>
            <div className="govt-cert-main">
              <div className="govt-icon-wrap">
                <ShieldCheck size={26} className="govt-icon" />
              </div>
              <div>
                <h3 className="govt-cert-title">Goods &amp; Services Tax (GST REG-06)</h3>
                <p className="govt-cert-sub">Central Board of Indirect Taxes &amp; Customs</p>
              </div>
            </div>

            <div className="govt-cert-details">
              <div className="cert-detail-pair">
                <span className="detail-k">GST Identification No (GSTIN):</span>
                <span className="detail-v font-mono">{companyCredentials.gstin}</span>
              </div>
              <div className="cert-detail-pair">
                <span className="detail-k">Trade Name:</span>
                <span className="detail-v">{companyCredentials.tradeName}</span>
              </div>
              <div className="cert-detail-pair">
                <span className="detail-k">Jurisdictional Office:</span>
                <span className="detail-v">{companyCredentials.gstJurisdiction}</span>
              </div>
              <div className="cert-detail-pair">
                <span className="detail-k">Registration Status:</span>
                <span className="detail-v text-valid">Regular • Active Taxpayer</span>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-cert-view"
              onClick={() => onOpenCertificate && onOpenCertificate('gst')}
            >
              <FileText size={15} />
              <span>View Official Certificate</span>
              <ExternalLink size={14} className="link-icon" />
            </button>
          </div>

          {/* 3. DGFT IEC License Card */}
          <div className="govt-cert-card">
            <div className="govt-cert-badge-row">
              <span className="govt-agency-tag">DGFT • MINISTRY OF COMMERCE</span>
              <span className="verified-status-tag">
                <CheckCircle2 size={13} />
                <span>PAN Linked Code</span>
              </span>
            </div>
            <div className="govt-cert-main">
              <div className="govt-icon-wrap">
                <FileCheck size={26} className="govt-icon" />
              </div>
              <div>
                <h3 className="govt-cert-title">Import Export Code (IEC)</h3>
                <p className="govt-cert-sub">Directorate General of Foreign Trade</p>
              </div>
            </div>

            <div className="govt-cert-details">
              <div className="cert-detail-pair">
                <span className="detail-k">IEC Code:</span>
                <span className="detail-v font-mono">{companyCredentials.iecNumber}</span>
              </div>
              <div className="cert-detail-pair">
                <span className="detail-k">PAN Reference:</span>
                <span className="detail-v font-mono">{companyCredentials.pan}</span>
              </div>
              <div className="cert-detail-pair">
                <span className="detail-k">Port Customs Clearance:</span>
                <span className="detail-v">Air Cargo &amp; Major Indian Sea Ports</span>
              </div>
              <div className="cert-detail-pair">
                <span className="detail-k">Export Authorization:</span>
                <span className="detail-v text-valid">Authorized Worldwide</span>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-cert-view"
              onClick={() => onOpenCertificate && onOpenCertificate('fieo')}
            >
              <FileText size={15} />
              <span>Inspect Credentials</span>
              <ExternalLink size={14} className="link-icon" />
            </button>
          </div>
        </div>

        {/* Quality Standards & Export Protocols Sub-Grid */}
        <div className="quality-standards-sub">
          <div className="quality-header">
            <h4 className="quality-title">Export Quality Protocols &amp; Testing Standards</h4>
            <p className="quality-sub">Standard operating procedures enforced before every air or sea consignment leaves port</p>
          </div>

          <div className="quality-cards-row">
            {qualityStandards.map((item) => (
              <div key={item.id} className="quality-protocol-card">
                <div className="quality-card-head">
                  <span className="quality-badge-tag">{item.code}</span>
                  <CheckCircle2 size={16} className="quality-check" />
                </div>
                <h5 className="quality-card-title">{item.title}</h5>
                <p className="quality-card-desc">{item.description}</p>
                <div className="quality-meta">
                  <span className="quality-meta-lbl">{item.regLabel}:</span>
                  <span className="quality-meta-val">{item.regNumber}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customs & Commercial LC Assurance Banner */}
        <div className="cert-assurance-banner">
          <div className="assurance-text">
            <h4 className="assurance-title">Need Verified Export Documents for Letter of Credit (LC) or Customs?</h4>
            <p className="assurance-desc">
              We provide full documentation sets with every consignment: Certificate of Origin (Chamber of Commerce / FIEO), Phytosanitary Certificate, Commercial Invoice (GST compliant), Bill of Lading / Airway Bill, and Lab Analysis Reports.
            </p>
          </div>
          <div className="assurance-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
            >
              Request Trade Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
