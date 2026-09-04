import React, { useState } from 'react';
import { Camera, ZoomIn } from 'lucide-react';

export default function GallerySection({ onSelectImage }) {
  const galleryItems = [
    {
      title: 'Farm Harvest & Selection',
      category: 'Harvesting',
      image: '/images/hero-produce.jpg',
      caption: 'Careful morning harvesting of fresh green mangoes and plantains.'
    },
    {
      title: 'Air Cargo Dispatch to UAE',
      category: 'Logistics',
      image: '/images/logistics-uae.jpg',
      caption: 'Palletized produce arriving at Dubai International Airport.'
    },
    {
      title: 'Moringa Drumstick Sorting',
      category: 'Packing',
      image: '/images/drumstick.jpg',
      caption: 'Uniform grading and carton packaging of export-grade drumsticks.'
    },
    {
      title: 'Organic Golden Turmeric',
      category: 'Processing',
      image: '/images/fresh-turmeric.jpg',
      caption: 'Cured and hygienic cleaning of high-curcumin turmeric roots.'
    },
    {
      title: 'Banana Leaf Bundles',
      category: 'Packaging',
      image: '/images/banana-leaves.jpg',
      caption: 'Moisture-sealed packaging preserving crisp green leaf luster.'
    },
    {
      title: 'Panruti Jackfruit Crates',
      category: 'Grading',
      image: '/images/jackfruit.jpg',
      caption: 'Export weight calibration for premium Middle East wholesale markets.'
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-sub-eyebrow">— EXPORT FACILITY &amp; OPERATIONS —</span>
          <h2 className="section-main-heading">Visual Tour: From Tamil Nadu Soil to Global Ports</h2>
          <p className="section-desc">
            Explore our supply chain operations, cold store hygiene, and safe packaging methods.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-card"
              onClick={() => onSelectImage && onSelectImage(item)}
            >
              <div className="gallery-img-wrap">
                <img src={item.image} alt={item.title} className="gallery-img" loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-tag">{item.category}</span>
                  <h4 className="gallery-title">{item.title}</h4>
                  <p className="gallery-caption">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
