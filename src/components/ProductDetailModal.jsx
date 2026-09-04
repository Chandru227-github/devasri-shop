import React from 'react';
import { X, Check, MapPin, Package, Calendar, Clock, Send } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onEnquire }) {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog product-detail-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close product modal"
        >
          <X size={20} />
        </button>

        <div className="product-modal-grid">
          <div className="product-modal-image-col">
            <img src={product.image} alt={product.name} className="product-modal-img" />
            <span className="product-modal-tag">{product.tag}</span>
          </div>

          <div className="product-modal-info-col">
            <span className="modal-category-badge">{product.category.toUpperCase()}</span>
            <h3 className="product-modal-title">{product.name}</h3>
            <p className="product-modal-desc">{product.description}</p>

            <div className="product-specs-list">
              <div className="spec-row">
                <div className="spec-label">
                  <MapPin size={15} /> Farm Origin:
                </div>
                <div className="spec-value">{product.origin}</div>
              </div>

              <div className="spec-row">
                <div className="spec-label">
                  <Package size={15} /> Export Packaging:
                </div>
                <div className="spec-value">{product.packaging}</div>
              </div>

              <div className="spec-row">
                <div className="spec-label">
                  <Clock size={15} /> Reefer Shelf Life:
                </div>
                <div className="spec-value">{product.shelfLife}</div>
              </div>

              <div className="spec-row">
                <div className="spec-label">
                  <Calendar size={15} /> Seasonality:
                </div>
                <div className="spec-value">{product.season}</div>
              </div>
            </div>

            <div className="product-modal-actions">
              <button
                type="button"
                className="btn btn-primary w-full"
                onClick={() => {
                  onClose();
                  onEnquire(product);
                }}
              >
                <Send size={16} /> Enquire for {product.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
