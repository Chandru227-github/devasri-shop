import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Copy, Check, Printer, ShieldCheck, ExternalLink, Award, FileText } from 'lucide-react';
import { companyCredentials } from '../data/products';

export default function CertificateModal({ isOpen, onClose, initialCert = 'fieo' }) {
  const [activeTab, setActiveTab] = useState(initialCert || 'fieo');
  const [copiedField, setCopiedField] = useState(null);

  useEffect(() => {
    if (initialCert) {
      setActiveTab(initialCert);
    }
  }, [initialCert, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cert-modal-backdrop" onClick={onClose}>
      <div
        className="cert-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-modal-title"
      >
        {/* Modal Header Bar */}
        <div className="cert-modal-topbar">
          <div className="cert-modal-topbar-left">
            <ShieldCheck size={22} className="cert-top-icon" />
            <span className="cert-topbar-title">Official Government Accreditation &amp; License Verification</span>
          </div>
          <button
            type="button"
            className="cert-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="cert-tabs-bar">
          <button
            type="button"
            className={`cert-tab-btn ${activeTab === 'fieo' ? 'active' : ''}`}
            onClick={() => setActiveTab('fieo')}
          >
            <Award size={16} />
            <span>FIEO Export Certificate (RCMC)</span>
            <span className="cert-tab-tag">IEC: {companyCredentials.iecNumber}</span>
          </button>
          <button
            type="button"
            className={`cert-tab-btn ${activeTab === 'gst' ? 'active' : ''}`}
            onClick={() => setActiveTab('gst')}
          >
            <FileText size={16} />
            <span>GST Registration (REG-06)</span>
            <span className="cert-tab-tag">GSTIN: {companyCredentials.gstin.slice(0, 8)}...</span>
          </button>
        </div>

        {/* Modal Certificate Canvas Body */}
        <div className="cert-modal-content">
          {activeTab === 'fieo' && (
            <div className="digital-certificate fieo-certificate">
              {/* Ornamental Certificate Frame */}
              <div className="cert-inner-frame">
                {/* Certificate Heading */}
                <div className="cert-doc-header">
                  <div className="cert-doc-emblem">
                    <div className="fieo-diamond-logo">
                      <span>FIEO</span>
                    </div>
                  </div>
                  <div className="cert-doc-authority">
                    <h3 className="cert-doc-main-org">FEDERATION OF INDIAN EXPORT ORGANISATIONS</h3>
                    <p className="cert-doc-sub-org">FIEO Southern Region — Chennai</p>
                    <p className="cert-doc-sub-addr">Spencer Plaza Unit No.706, 7th Floor, 769, Anna Salai, Chennai, Tamil Nadu 600002</p>
                    <p className="cert-doc-statute">
                      (Set up by Ministry of Commerce, Government of India • Issued under Foreign Trade Policy)
                    </p>
                  </div>
                  <div className="cert-doc-seal">
                    <img src="/images/logo-transparent.png" alt="Devashri Exporter Seal" className="cert-seal-logo-img" />
                    <span className="cert-seal-text">OFFICIALLY VERIFIED</span>
                  </div>
                </div>

                <div className="cert-title-strip">
                  <h2 id="cert-modal-title" className="cert-formal-title">
                    REGISTRATION CUM MEMBERSHIP CERTIFICATE (RCMC)
                  </h2>
                  <span className="cert-status-pill">Active &amp; Valid for Global Export</span>
                </div>

                {/* Key Highlight Bar */}
                <div className="cert-highlight-metrics">
                  <div className="metric-box">
                    <span className="metric-label">Registration No. (RCMC)</span>
                    <div className="metric-value-wrap">
                      <strong className="metric-val">{companyCredentials.fieoRcmc}</strong>
                      <button
                        type="button"
                        className="btn-copy-chip"
                        onClick={() => handleCopy(companyCredentials.fieoRcmc, 'rcmc')}
                        title="Copy RCMC Number"
                      >
                        {copiedField === 'rcmc' ? <Check size={14} className="copied" /> : <Copy size={14} />}
                        <span>{copiedField === 'rcmc' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="metric-box">
                    <span className="metric-label">Import Export Code (IEC)</span>
                    <div className="metric-value-wrap">
                      <strong className="metric-val highlight-iec">{companyCredentials.iecNumber}</strong>
                      <button
                        type="button"
                        className="btn-copy-chip"
                        onClick={() => handleCopy(companyCredentials.iecNumber, 'iec')}
                        title="Copy IEC Code"
                      >
                        {copiedField === 'iec' ? <Check size={14} className="copied" /> : <Copy size={14} />}
                        <span>{copiedField === 'iec' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="metric-box">
                    <span className="metric-label">Validity Period</span>
                    <strong className="metric-val text-green">{companyCredentials.fieoValidity}</strong>
                  </div>
                </div>

                {/* Structured Particulars Table */}
                <div className="cert-table-container">
                  <table className="cert-specs-table">
                    <tbody>
                      <tr>
                        <td className="cert-col-lbl">Name of the Exporter</td>
                        <td className="cert-col-val strong-val">{companyCredentials.tradeName}</td>
                      </tr>
                      <tr>
                        <td className="cert-col-lbl">Proprietor / Signatory</td>
                        <td className="cert-col-val">{companyCredentials.proprietor}</td>
                      </tr>
                      <tr>
                        <td className="cert-col-lbl">Registered Category</td>
                        <td className="cert-col-val">
                          <span className="category-tag">{companyCredentials.registeredAs}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="cert-col-lbl">UDIN Verification Code</td>
                        <td className="cert-col-val">
                          <span className="mono-badge">{companyCredentials.fieoUdin}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="cert-col-lbl">PAN Number</td>
                        <td className="cert-col-val">{companyCredentials.pan}</td>
                      </tr>
                      <tr>
                        <td className="cert-col-lbl">Registered Head Office</td>
                        <td className="cert-col-val">{companyCredentials.registeredAddress.fullAddress}</td>
                      </tr>
                      <tr>
                        <td className="cert-col-lbl">Registered Scope of Products</td>
                        <td className="cert-col-val">
                          <div className="scope-pills-wrap">
                            {companyCredentials.registeredGoods.map((good, idx) => (
                              <span key={idx} className="scope-pill">{good}</span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Digital Verification & Stamp Footer */}
                <div className="cert-doc-footer">
                  <div className="cert-qr-block">
                    <div className="qr-box">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0e3e24" strokeWidth="1.5">
                        <rect x="3" y="3" width="7" height="7" rx="1" fill="#0e3e24" />
                        <rect x="14" y="3" width="7" height="7" rx="1" fill="#0e3e24" />
                        <rect x="3" y="14" width="7" height="7" rx="1" fill="#0e3e24" />
                        <rect x="14" y="14" width="3" height="3" fill="#0e3e24" />
                        <rect x="18" y="18" width="3" height="3" fill="#0e3e24" />
                        <rect x="14" y="18" width="3" height="3" fill="#0e3e24" />
                        <rect x="18" y="14" width="3" height="3" fill="#0e3e24" />
                      </svg>
                      <span className="qr-caption">DGFT Verifiable</span>
                    </div>
                    <div className="qr-meta">
                      <p className="meta-text"><strong>Issue Date:</strong> {companyCredentials.fieoIssueDate}</p>
                      <p className="meta-text"><strong>File Number:</strong> {companyCredentials.fileNumber}</p>
                      <p className="meta-text text-muted">Southern Region Chennai Jurisdiction</p>
                    </div>
                  </div>

                  <div className="cert-signature-block">
                    <div className="digital-sign-box">
                      <span className="sign-label">Digitally Signed &amp; Authenticated</span>
                      <span className="sign-signer">S SELVANAYAGI VIJAYKUMAR</span>
                      <span className="sign-authority">Federation of Indian Export Organisations</span>
                      <span className="sign-badge">✓ Valid Digital Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gst' && (
            <div className="digital-certificate gst-certificate">
              <div className="cert-inner-frame">
                {/* GST Heading */}
                <div className="cert-doc-header">
                  <div className="cert-doc-emblem">
                    {/* Ashoka Pillar Emblem Silhouette */}
                    <div className="ashoka-pillar-emblem" title="Satyameva Jayate - Government of India">
                      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#0e3e24" strokeWidth="1.6">
                        <path d="M12 2L15 8H9L12 2Z" fill="#0e3e24" />
                        <circle cx="12" cy="14" r="5" stroke="#0e3e24" />
                        <line x1="12" y1="9" x2="12" y2="19" stroke="#0e3e24" />
                        <line x1="7" y1="14" x2="17" y2="14" stroke="#0e3e24" />
                        <path d="M5 22H19" stroke="#0e3e24" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="cert-doc-authority">
                    <h3 className="cert-doc-main-org">GOVERNMENT OF INDIA</h3>
                    <p className="cert-doc-sub-org">Goods and Services Tax</p>
                    <p className="cert-doc-statute">Form GST REG-06 [See Rule 10(1)]</p>
                  </div>
                  <div className="cert-doc-seal">
                    <img src="/images/logo-transparent.png" alt="Devashri Exporter Seal" className="cert-seal-logo-img" />
                    <span className="cert-seal-text">GST REGISTERED</span>
                  </div>
                </div>

                <div className="cert-title-strip">
                  <h2 className="cert-formal-title">REGISTRATION CERTIFICATE</h2>
                  <span className="cert-status-pill">Regular Taxpayer • Active</span>
                </div>

                {/* GST Metric Bar */}
                <div className="cert-highlight-metrics">
                  <div className="metric-box wide-metric">
                    <span className="metric-label">Goods &amp; Services Tax Identification Number (GSTIN)</span>
                    <div className="metric-value-wrap">
                      <strong className="metric-val highlight-gstin">{companyCredentials.gstin}</strong>
                      <button
                        type="button"
                        className="btn-copy-chip"
                        onClick={() => handleCopy(companyCredentials.gstin, 'gstin')}
                        title="Copy GSTIN"
                      >
                        {copiedField === 'gstin' ? <Check size={14} className="copied" /> : <Copy size={14} />}
                        <span>{copiedField === 'gstin' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="metric-box">
                    <span className="metric-label">Jurisdictional Office</span>
                    <strong className="metric-val">{companyCredentials.gstJurisdiction}</strong>
                  </div>
                </div>

                {/* GST Particulars Table */}
                <div className="cert-table-container">
                  <table className="cert-specs-table">
                    <tbody>
                      <tr>
                        <td className="cert-col-lbl">1. Legal Name</td>
                        <td className="cert-col-val strong-val">{companyCredentials.legalName}</td>
                      </tr>
                      <tr>
                        <td className="cert-col-lbl">2. Trade Name</td>
                        <td className="cert-col-val strong-val">{companyCredentials.tradeName}</td>
                      </tr>
                      <tr>
                        <td className="cert-col-lbl">3. Constitution of Business</td>
                        <td className="cert-col-val">
                          <span className="category-tag">{companyCredentials.constitution}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="cert-col-lbl">4. Address of Principal Place of Business</td>
                        <td className="cert-col-val">{companyCredentials.registeredAddress.fullAddress}</td>
                      </tr>
                      <tr>
                        <td className="cert-col-lbl">5. Period of Validity</td>
                        <td className="cert-col-val">
                          <span>From <strong>{companyCredentials.gstIssueDate}</strong> To <strong>Not Applicable (Regular)</strong></span>
                        </td>
                      </tr>
                      <tr>
                        <td className="cert-col-lbl">6. Type of Registration</td>
                        <td className="cert-col-val">
                          <span className="scope-pill">Regular</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="cert-col-lbl">7. Approving Authority</td>
                        <td className="cert-col-val">
                          <span>GOPALAKRISHNAN ARUMUGAM (Superintendent, Perambalur Division)</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* GST Footer */}
                <div className="cert-doc-footer">
                  <div className="cert-qr-block">
                    <div className="qr-box">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0e3e24" strokeWidth="1.5">
                        <rect x="3" y="3" width="7" height="7" rx="1" fill="#0e3e24" />
                        <rect x="14" y="3" width="7" height="7" rx="1" fill="#0e3e24" />
                        <rect x="3" y="14" width="7" height="7" rx="1" fill="#0e3e24" />
                        <rect x="14" y="14" width="3" height="3" fill="#0e3e24" />
                        <rect x="18" y="18" width="3" height="3" fill="#0e3e24" />
                        <rect x="14" y="18" width="3" height="3" fill="#0e3e24" />
                        <rect x="18" y="14" width="3" height="3" fill="#0e3e24" />
                      </svg>
                      <span className="qr-caption">GST Portal Verifiable</span>
                    </div>
                    <div className="qr-meta">
                      <p className="meta-text"><strong>Date of Issue:</strong> {companyCredentials.gstIssueDate}</p>
                      <p className="meta-text"><strong>State Code:</strong> 33 (Tamil Nadu)</p>
                      <p className="meta-text text-muted">Jurisdiction: PERAMBALUR</p>
                    </div>
                  </div>

                  <div className="cert-signature-block">
                    <div className="digital-sign-box">
                      <span className="sign-label">System Generated Digitally Signed Certificate</span>
                      <span className="sign-signer">DS GOODS AND SERVICES TAX NETWORK 07</span>
                      <span className="sign-authority">Jurisdictional Authority: Perambalur</span>
                      <span className="sign-badge">✓ Verified Taxpayer Document</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Bar */}
        <div className="cert-modal-actions">
          <div className="cert-modal-disclaimer">
            <span>🔒 All certificates are registered with the Government of India &amp; verifiable on DGFT / GST portals.</span>
          </div>
          <div className="cert-modal-btns">
            <button
              type="button"
              className="btn btn-outline-dark cert-action-btn"
              onClick={handlePrint}
            >
              <Printer size={16} />
              <span>Print / Save</span>
            </button>
            <button
              type="button"
              className="btn btn-primary cert-action-btn"
              onClick={onClose}
            >
              <span>Close Viewer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
