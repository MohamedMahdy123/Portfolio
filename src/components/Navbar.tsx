import React, { useState } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About me' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact me' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => setMenuOpen((open) => !open);
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top" style={{padding: 0, margin: 0, zIndex: 10}}>
      <div className="container-fluid px-4">
        <a className="navbar-brand fw-bold" href="#home" style={{fontFamily: 'K2D, sans-serif', fontWeight: 700, fontSize: 30, letterSpacing: '0.03em', background: 'linear-gradient(90deg, #FA6E00 0%, #E60026 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>LOGO</a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-4">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  className="nav-link fw-semibold"
                  href={link.href}
                  onClick={handleNavClick}
                  style={{color: link.href === '#home' ? '#FD6F00' : '#959595'}}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a
                href="#contact"
                className="btn btn-warning fw-bold px-4 py-2 rounded-3"
                style={{background: 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)', border: 'none', color: '#fff', fontFamily: 'Lato, sans-serif', fontSize: 16, letterSpacing: '0.03em'}}
                onClick={handleNavClick}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 