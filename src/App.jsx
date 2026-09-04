import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustRibbon from './components/TrustRibbon';
import ProductsSection from './components/ProductsSection';
import LogisticsBanner from './components/LogisticsBanner';
import WhyChooseUs from './components/WhyChooseUs';
import Certifications from './components/Certifications';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import ProductDetailModal from './components/ProductDetailModal';
import CertificateModal from './components/CertificateModal';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState(null);
  const [detailProduct, setDetailProduct] = useState(null);

  // Certificate Modal State
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [activeCert, setActiveCert] = useState('fieo');

  const handleOpenEnquiry = (product = null) => {
    setEnquiryProduct(product);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setEnquiryProduct(null);
  };

  const handleOpenDetail = (product) => {
    setDetailProduct(product);
  };

  const handleCloseDetail = () => {
    setDetailProduct(null);
  };

  const handleOpenCertificate = (certId = 'fieo') => {
    setActiveCert(certId);
    setIsCertModalOpen(true);
  };

  const handleCloseCertificate = () => {
    setIsCertModalOpen(false);
  };

  return (
    <div className="app-root">
      {/* Top Announcement Bar with Verified Exporter Tag */}
      <TopBar onOpenCertificate={handleOpenCertificate} />

      {/* Main Sticky Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      <main>
        {/* Hero Section with Live Produce and Dubai Backdrop */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Emerald Trust Ribbon with Verified IEC & FIEO credentials */}
        <TrustRibbon onOpenCertificate={handleOpenCertificate} />

        {/* 9 Featured Products Grid */}
        <ProductsSection
          onSelectProduct={handleOpenDetail}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* Logistics Feature: Bringing India's Finest to UAE */}
        <LogisticsBanner
          onOpenAbout={() => {
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenEnquiry={() => handleOpenEnquiry()}
        />

        {/* Why Choose Us Feature Cards */}
        <WhyChooseUs />

        {/* Official Certifications & Government Accreditations */}
        <Certifications
          onOpenCertificate={handleOpenCertificate}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* Operations & Visual Gallery */}
        <GallerySection onSelectImage={() => handleOpenEnquiry()} />
      </main>

      {/* Footer with Destination List, Verified Legal Credentials, Skyline Silhouette */}
      <Footer
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenCertificate={handleOpenCertificate}
      />

      {/* Floating Bottom-Right WhatsApp CTA */}
      <WhatsAppButton />

      {/* Interactive Commercial Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        preselectedProduct={enquiryProduct}
      />

      {/* Product Detailed Specifications Modal */}
      <ProductDetailModal
        product={detailProduct}
        onClose={handleCloseDetail}
        onEnquire={handleOpenEnquiry}
      />

      {/* Official Government Accreditation & Digital Certificate Modal */}
      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={handleCloseCertificate}
        initialCert={activeCert}
      />
    </div>
  );
}

export default App;
