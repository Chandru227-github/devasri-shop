import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', active: true },
    { name: 'ABOUT US', href: '#about' },
    {
      name: 'PRODUCTS',
      href: '#products',
      hasDropdown: true,
      subItems: [
        { name: 'Fresh Fruits (Mango, Lemon, Jackfruit)', href: '#products' },
        { name: 'Fresh Vegetables (Drumstick, Plantain, Flower)', href: '#products' },
        { name: 'Agro & Spices (Turmeric, Groundnut)', href: '#products' },
        { name: 'Specialty Leaves (Banana Leaves)', href: '#products' },
      ]
    },
    { name: 'EXPORT', href: '#export' },
    { name: 'CERTIFICATIONS', href: '#certifications' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT US', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  return (
    <header className={`main-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#home" className="logo-link">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`nav-item ${link.active ? 'active' : ''} ${link.hasDropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => link.hasDropdown && setProductsDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setProductsDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="dropdown-arrow" />}
                </a>

                {link.hasDropdown && productsDropdownOpen && (
                  <div className="dropdown-menu">
                    {link.subItems.map((sub, idx) => (
                      <a
                        key={idx}
                        href={sub.href}
                        className="dropdown-item"
                        onClick={(e) => handleLinkClick(e, sub.href)}
                      >
                        <Sparkles size={13} className="sub-bullet" />
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="header-actions">
          <button
            type="button"
            className="btn btn-primary enquire-btn"
            onClick={onOpenEnquiry}
          >
            ENQUIRE NOW
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="mobile-nav-item">
                <a
                  href={link.href}
                  className={`mobile-nav-link ${link.active ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="mobile-nav-action">
              <button
                type="button"
                className="btn btn-primary w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
              >
                ENQUIRE NOW
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
