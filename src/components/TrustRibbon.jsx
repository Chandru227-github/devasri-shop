import React from 'react';
import { Globe, Award, ShieldCheck, Leaf } from 'lucide-react';
import { companyCredentials } from '../data/products';

export default function TrustRibbon({ onOpenCertificate }) {
  const items = [
    {
      icon: <Globe size={28} />,
      title: 'UAE & GCC Specialty',
      subtitle: 'Dubai, Doha, Muscat & Riyadh',
      action: null
    },
    {
      icon: <Award size={28} />,
      title: 'Govt. Regd Exporter',
      subtitle: `IEC: ${companyCredentials.iecNumber}`,
      action: () => onOpenCertificate && onOpenCertificate('fieo')
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'FIEO & GST Certified',
      subtitle: 'RCMC Registered Exporter',
      action: () => onOpenCertificate && onOpenCertificate('gst')
    },
    {
      icon: <Leaf size={28} />,
      title: '100% Farm Fresh',
      subtitle: 'Phytosanitary & Cold Chain',
      action: null
    }
  ];

  return (
    <section className="trust-ribbon-section">
      <div className="container">
        <div className="trust-ribbon-grid">
          {items.map((item, index) => (
            <div
              key={index}
              className={`trust-item ${item.action ? 'clickable-trust-item' : ''}`}
              onClick={item.action || undefined}
              role={item.action ? 'button' : undefined}
              tabIndex={item.action ? 0 : undefined}
              title={item.action ? 'Click to view official certificate' : undefined}
            >
              <div className="trust-icon-wrap">
                {item.icon}
              </div>
              <div className="trust-text">
                <span className="trust-title">{item.title}</span>
                <span className="trust-subtitle">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
