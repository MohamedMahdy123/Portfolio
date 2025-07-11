import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark py-5 mt-5 w-100">
      <div className="container d-flex flex-column align-items-center gap-4">
        <div
          className="fw-black mb-2 text-center"
          style={{
            fontFamily: 'K2D, sans-serif',
            fontWeight: 900,
            fontSize: 36,
            letterSpacing: '0.03em',
            background: 'linear-gradient(90deg, #FA6E00 0%, #E60026 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Mohamed Mahdy
        </div>
        <nav className="d-flex flex-wrap justify-content-center gap-4 mb-2">
          <a href="#home" className="fw-bold" style={{ color: '#FD6F00', fontSize: 18, fontFamily: 'Lato, sans-serif', textDecoration: 'none' }}>Home</a>
          <a href="#about" className="fw-medium" style={{ color: '#959595', fontSize: 18, fontFamily: 'Lato, sans-serif', textDecoration: 'none' }}>About Me</a>
          <a href="#portfolio" className="fw-medium" style={{ color: '#959595', fontSize: 18, fontFamily: 'Lato, sans-serif', textDecoration: 'none' }}>Projects</a>
          <a href="#contact" className="fw-medium" style={{ color: '#959595', fontSize: 18, fontFamily: 'Lato, sans-serif', textDecoration: 'none' }}>Contact Me</a>
        </nav>
        <div className="d-flex gap-4 mb-2">
          <a href="https://github.com/MohamedMahdy123" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: 44, height: 44, background: '#333', color: '#fff', fontSize: 22, textDecoration: 'none' }}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-mahdy02/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: 44, height: 44, background: '#0077b5', color: '#fff', fontSize: 22, textDecoration: 'none' }}>
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="text-secondary text-center mb-1" style={{ color: '#BABABA', fontWeight: 400, fontSize: 16 }}>
          Email: mohamedmahdy06@gmail.com &nbsp;|&nbsp; Location: Egypt
        </div>
        <div className="text-center mt-2" style={{ color: '#575757', fontWeight: 400, fontSize: 14 }}>
          &copy; {new Date().getFullYear()} Mohamed Mahdy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 