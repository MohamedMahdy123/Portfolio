import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-5 mt-5 w-100" style={{ background: 'var(--footer-bg)' }}>
      <div className="container d-flex flex-column align-items-center gap-4">
        <div
          className="fw-black mb-1 text-center"
          style={{
            fontFamily: 'K2D, sans-serif',
            fontWeight: 900,
            fontSize: 32,
            letterSpacing: '0.03em',
            background: 'linear-gradient(90deg, #FA6E00 0%, #E46400 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Mohamed Mahdy
        </div>
        <div style={{ color: 'var(--text-muted)', fontSize: 15 }}>Angular & React Frontend Engineer · Cairo, Egypt</div>
        <nav className="d-flex flex-wrap justify-content-center gap-4 mb-1">
          {[
            { href: '#home', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#experience', label: 'Experience' },
            { href: '#portfolio', label: 'Projects' },
            { href: '#contact', label: 'Contact' },
          ].map(link => (
            <a key={link.href} href={link.href} style={{ color: 'var(--text-muted)', fontSize: 16, fontFamily: 'Lato, sans-serif', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FD6F00')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="d-flex gap-3 mb-1">
          <a href="https://github.com/MohamedMahdy123" target="_blank" rel="noopener noreferrer"
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{ width: 44, height: 44, background: 'var(--badge-bg)', color: 'var(--text-primary)', fontSize: 20, textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#FD6F00'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--badge-bg)'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-mahdy02/" target="_blank" rel="noopener noreferrer"
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{ width: 44, height: 44, background: '#0077b5', color: '#fff', fontSize: 20, textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#FD6F00')}
            onMouseLeave={e => (e.currentTarget.style.background = '#0077b5')}>
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:mohamedmahdy06@gmail.com"
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{ width: 44, height: 44, background: 'var(--badge-bg)', color: 'var(--text-primary)', fontSize: 20, textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#FD6F00'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--badge-bg)'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', width: '100%', paddingTop: 20, textAlign: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
          &copy; {new Date().getFullYear()} Mohamed Mahdy Hassan · Built with React & TypeScript
        </div>
      </div>
    </footer>
  );
};

export default Footer;
