import React from 'react';

export default function Logo({ className = '', height = 52, showText = true }) {
  return (
    <div className={`brand-logo-container ${className}`}>
      <img
        src="/images/logo-transparent.png"
        alt="Devashri International Exports and Imports"
        className="brand-logo-img"
        style={{ height: `${height}px` }}
      />
      {showText && (
        <div className="brand-logo-text-block">
          <span className="brand-title-main">DEVASHRI</span>
          <span className="brand-title-sub">— INTERNATIONAL —</span>
          <span className="brand-title-tag">Exports &amp; Imports</span>
        </div>
      )}
    </div>
  );
}
