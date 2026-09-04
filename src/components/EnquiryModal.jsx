import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Building2, User, Mail, Phone, MapPin, Package } from 'lucide-react';
import { products, exportDestinations } from '../data/products';

export default function EnquiryModal({ isOpen, onClose, preselectedProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'UAE',
    product: '',
    volume: '100 kg - 500 kg (Air Freight Trial)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProduct) {
      setFormData(prev => ({
        ...prev,
        product: preselectedProduct.name
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        product: 'Multiple Fresh Produce / Custom Consignment'
      }));
    }
    setIsSubmitted(false);
  }, [preselectedProduct, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New Export Enquiry - Devashri International*
• *Name:* ${formData.name || 'Importer'}
• *Company:* ${formData.company || 'N/A'}
• *Country:* ${formData.country}
• *Product:* ${formData.product}
• *Volume:* ${formData.volume}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email}
• *Note:* ${formData.message || 'Looking for pricing and flight/vessel schedule.'}`;

    const url = `https://wa.me/918531027850?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="modal-header">
              <div className="modal-header-brand">
                <img
                  src="/images/logo-transparent.png"
                  alt="Devashri International"
                  className="modal-header-logo"
                />
                <span className="modal-eyebrow">DIRECT EXPORT INQUIRY • DEVASHRI INTERNATIONAL</span>
              </div>
              <h3 className="modal-title">Request a Commercial Export Quote</h3>
              <p className="modal-desc">
                Fill in your produce specifications and delivery port. Our export desk will reply within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">
                    <User size={14} /> Contact Person *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Tariq Al-Mansoor"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">
                    <Building2 size={14} /> Company / Importer Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="e.g. Gulf Fresh Trading LLC"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <Mail size={14} /> Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="buyer@domain.ae"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <Phone size={14} /> WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="country">
                    <MapPin size={14} /> Destination Port / Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    {exportDestinations.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                    <option value="Other">Other Global Port</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="product">
                    <Package size={14} /> Product Required *
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                  >
                    <option value="Multiple Fresh Produce / Custom Consignment">Multiple Produce / Mixed Pallet</option>
                    {products.map(p => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="volume">Estimated Volume / Frequency</label>
                <select
                  id="volume"
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                >
                  <option value="100 kg - 500 kg (Air Freight Trial)">100 kg – 500 kg (Air Freight Trial)</option>
                  <option value="500 kg - 1 Ton (Air Freight)">500 kg – 1 Ton (Air Freight)</option>
                  <option value="1 Ton - 3 Tons (Commercial Air Cargo)">1 Ton – 3 Tons (Commercial Air Cargo)</option>
                  <option value="1x 20ft Reefer Container (Sea Freight)">1x 20ft Reefer Container (Sea Freight)</option>
                  <option value="1x 40ft High Cube Reefer Container (Sea Freight)">1x 40ft High Cube Reefer Container (Sea Freight)</option>
                  <option value="Regular Weekly Contract Consignment">Regular Weekly Contract Consignment</option>
                  <option value="Sample Order for Quality Testing (100 kg)">Sample Order for Quality Testing (100 kg)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Requirements (Packaging, Grade, Delivery Terms)</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Specify CIF / FOB terms, custom carton branding, or certificate requirements..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="modal-actions-row">
                <button type="submit" className="btn btn-primary btn-submit-form">
                  <Send size={16} /> Submit Export Enquiry
                </button>

                <button
                  type="button"
                  className="btn btn-whatsapp-direct"
                  onClick={handleSendViaWhatsApp}
                >
                  <MessageCircle size={18} /> Quick Chat on WhatsApp
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="modal-success-box text-center">
            <div className="success-icon-wrap">
              <CheckCircle2 size={56} className="success-icon" />
            </div>
            <h3 className="success-title">Enquiry Received!</h3>
            <p className="success-message">
              Thank you, <strong>{formData.name || 'Valued Importer'}</strong>. Our export trade team is reviewing your requirements for <strong>{formData.product}</strong> destined for <strong>{formData.country}</strong>.
            </p>
            <p className="success-note">
              We have dispatched a confirmation to <em>{formData.email}</em> and our team will connect on WhatsApp at <em>{formData.phone}</em> within 24 hours.
            </p>

            <div className="success-actions">
              <button
                type="button"
                className="btn btn-whatsapp-direct"
                onClick={handleSendViaWhatsApp}
              >
                <MessageCircle size={18} /> Direct WhatsApp Export Desk
              </button>
              <button
                type="button"
                className="btn btn-secondary-outline"
                onClick={onClose}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
