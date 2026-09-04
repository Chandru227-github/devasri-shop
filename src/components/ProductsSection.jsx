import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Eye, Send } from 'lucide-react';
import { products } from '../data/products';

export default function ProductsSection({ onSelectProduct, onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'fruits', label: 'Fresh Fruits' },
    { id: 'vegetables', label: 'Vegetables' },
    { id: 'spices', label: 'Spices & Herbs' },
    { id: 'agro', label: 'Agro Commodities' },
    { id: 'specialty', label: 'Specialty Leaves' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-sub-eyebrow">— OUR PRODUCTS —</span>
          <h2 className="section-main-heading">Fresh From Farms to Your Table</h2>
          <p className="section-desc">
            Directly sourced from certified farmer networks in Tamil Nadu and South India, graded to meet strict international standards.
          </p>

          {/* Category Filter Tabs */}
          <div className="category-filter-row">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`category-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 9 Product Cards Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => onSelectProduct(product)}
            >
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                  loading="lazy"
                />
                <span className="product-badge">{product.tag}</span>

                <div className="product-overlay-actions">
                  <button
                    type="button"
                    className="action-btn view-btn"
                    title="View Product Specifications"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                  >
                    <Eye size={16} /> Specs
                  </button>
                  <button
                    type="button"
                    className="action-btn quote-btn"
                    title="Enquire for this product"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenEnquiry(product);
                    }}
                  >
                    <Send size={16} /> Enquire
                  </button>
                </div>
              </div>

              {/* Light green bottom bar matching reference */}
              <div className="product-info-bar">
                <h3 className="product-name">{product.name}</h3>
                <span className="product-shelf-hint">{product.packaging}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="products-cta-wrap text-center">
          <button
            type="button"
            className="btn btn-primary btn-products-all"
            onClick={() => onOpenEnquiry()}
          >
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
