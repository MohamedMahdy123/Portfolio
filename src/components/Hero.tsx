import React, { useState } from 'react';

const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '5', label: 'Products Shipped' },
  { value: '2k+', label: 'Active Users' },
];

const Hero: React.FC = () => {
  const [hireMeHovered, setHireMeHovered] = useState(false);
  const [projectsHovered, setProjectsHovered] = useState(false);

  return (
    <section id="home" className="py-5 min-vh-90 d-flex align-items-center" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="row align-items-center justify-content-between g-5 flex-column-reverse flex-lg-row">
          {/* Left */}
          <div className="col-lg-6 d-flex flex-column align-items-start gap-3">
            <div style={{ fontSize: 13, color: '#FD6F00', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
              Angular & React Frontend Engineer
            </div>
            <div className="fw-black lh-1" style={{ fontSize: 62, letterSpacing: '-0.01em', color: 'var(--text-primary)', lineHeight: 1.1 }}>
              Mohamed<br />
              <span style={{
                background: 'linear-gradient(90.48deg, #984300 0.34%, #FD6F00 42.06%, #CA5900 90.34%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Mahdy</span>
            </div>
            <p style={{ fontSize: 17, color: 'var(--text-secondary)', maxWidth: 460, lineHeight: 1.8, margin: 0 }}>
              Building production Angular &amp; React apps at Boyot. Creator of FormCraft — an AI-powered form builder used by real teams.
            </p>
            {/* Socials */}
            <div className="d-flex gap-3 mt-1">
              <a href="https://github.com/MohamedMahdy123" target="_blank" rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: 42, height: 42, border: '1.5px solid var(--border)', background: 'var(--bg-card)' }}>
                <i className="fab fa-github" style={{ color: 'var(--text-secondary)', fontSize: 20 }}></i>
              </a>
              <a href="https://www.linkedin.com/in/mohamed-mahdy02/" target="_blank" rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: 42, height: 42, border: '1.5px solid var(--border)', background: 'var(--bg-card)' }}>
                <i className="fab fa-linkedin-in" style={{ color: '#0077b5', fontSize: 20 }}></i>
              </a>
            </div>
            {/* CTAs */}
            <div className="d-flex gap-3 mt-2 flex-wrap">
              <a href="#contact" className="btn fw-bold px-4 py-2 rounded-3"
                style={{
                  background: hireMeHovered ? '#e05a00' : 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)',
                  color: '#fff', fontSize: 17, border: 'none', transition: 'background 0.2s',
                }}
                onMouseEnter={() => setHireMeHovered(true)} onMouseLeave={() => setHireMeHovered(false)}>
                Hire Me
              </a>
              <a href="#portfolio" className="btn fw-bold px-4 py-2 rounded-3"
                style={{
                  background: projectsHovered ? '#FD6F00' : 'transparent',
                  color: projectsHovered ? '#fff' : '#FD6F00',
                  fontSize: 17, border: '2px solid #FD6F00', transition: 'all 0.2s',
                }}
                onMouseEnter={() => setProjectsHovered(true)} onMouseLeave={() => setProjectsHovered(false)}>
                View Projects
              </a>
            </div>
            {/* Stats */}
            <div className="d-flex gap-4 mt-3 flex-wrap">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="fw-black" style={{ fontSize: 30, color: '#FD6F00', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="col-lg-5 d-flex align-items-center justify-content-center mb-4 mb-lg-0">
            <div className="position-relative">
              <div style={{
                width: 300, height: 300, borderRadius: '50%', overflow: 'hidden',
                border: '4px solid #FD6F00',
                boxShadow: '0 8px 40px rgba(253,111,0,0.2)',
              }}>
                <img src="/profile.jpg" alt="Mohamed Mahdy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              {/* Badge */}
              <div style={{
                position: 'absolute', bottom: 10, right: -24,
                background: 'var(--bg-card)',
                borderRadius: 14, padding: '10px 16px',
                boxShadow: 'var(--card-shadow)',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ fontSize: 20 }}>⚡</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--text-primary)' }}>Available for work</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Cairo · Remote</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
