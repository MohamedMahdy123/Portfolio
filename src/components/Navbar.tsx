import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#portfolio', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg sticky-top portfolio-navbar" style={{ padding: 0, zIndex: 100 }}>
      <div className="container-fluid px-4">
        {/* Brand */}
        <a
          className="navbar-brand fw-bold"
          href="#home"
          style={{
            fontFamily: 'K2D, sans-serif',
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: '0.03em',
            background: 'linear-gradient(90deg, #FA6E00 0%, #E46400 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Mohamed Mahdy
        </a>

        {/* Mobile: toggle + hamburger */}
        <div className="d-flex align-items-center gap-3 d-lg-none">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <span className="theme-toggle-icon">{isDark ? '☀️' : '🌙'}</span>
          </button>
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation"
            style={{ color: 'var(--text-light)' }}
          >
            <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`} style={{ fontSize: 22 }}></i>
          </button>
        </div>

        {/* Links */}
        <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3">
            {navLinks.map(link => (
              <li className="nav-item" key={link.href}>
                <a
                  className="nav-link fw-semibold portfolio-nav-link"
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: 'var(--text-light)', fontSize: 15 }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#FD6F00')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light)')}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Desktop theme toggle */}
            <li className="nav-item d-none d-lg-flex align-items-center ms-2">
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                <span className="theme-toggle-icon">{isDark ? '☀️' : '🌙'}</span>
              </button>
            </li>

            {/* Hire Me */}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a
                href="#contact"
                className="btn fw-bold px-4 py-2 rounded-3"
                onClick={() => setMenuOpen(false)}
                style={{
                  background: 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)',
                  border: 'none',
                  color: '#fff',
                  fontSize: 15,
                  letterSpacing: '0.03em',
                }}
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
