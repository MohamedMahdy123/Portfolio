import React, { useState } from 'react';

const skills = [
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'CSS', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', icon: 'fab fa-js-square' },
  { name: 'React.js', icon: 'fab fa-react' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'Flutter', icon: 'fas fa-mobile-alt' },
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'GitHub', icon: 'fab fa-github' },
];

const About: React.FC = () => {
  const [downloadHovered, setDownloadHovered] = useState(false);
  return (
    <section id="about" className="py-5 bg-transparent">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h2
              className="fw-black mb-0"
              style={{
                fontSize: 48,
                color: '#FD6F00',
                letterSpacing: '0.03em',
                background: 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              About Me
            </h2>
          </div>
        </div>
        <div className="row align-items-start justify-content-center g-5 flex-column flex-lg-row mb-5">
          <div className="col-lg-5 d-flex align-items-center justify-content-center mb-4 mb-lg-0">
            <div className="d-flex align-items-center justify-content-center overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 28, width: 320, height: 420 }}>
              <img src="/profile.jpg" alt="Mohamed Mahdy" style={{ width: 320, height: 420, objectFit: 'cover', borderRadius: '28px 28px 0 0' }} />
            </div>
          </div>
          <div className="col-lg-7 d-flex flex-column align-items-start gap-4">
            <div className="fw-medium text-secondary" style={{ fontSize: 20, lineHeight: '190%', textAlign: 'justify', maxWidth: 631 }}>
              A dedicated Software Engineer and Front-End Web Developer with a passion for creating interactive and user-friendly web applications. With a strong background in HTML, CSS, JavaScript, and React.js, I enjoy building a wide variety of projects—from dynamic restaurant platforms and productivity tools to weather dashboards and entertainment websites.<br /><br />
              I thrive on learning new technologies and tackling creative challenges. My work reflects a commitment to clean, maintainable code, responsive design, and delivering solutions that provide real value to users. Whether I’m integrating APIs, designing intuitive interfaces, or optimizing for performance across devices, I strive to build web applications that are both beautiful and highly functional.<br /><br />
              Let’s connect and create something amazing together!
            </div>
            <a
              href="/Mohamed%20Mahdy%20cv.pdf" target="_blank" rel="noopener noreferrer"
              className="btn fw-bold px-4 py-2 rounded-3 mt-2"
              style={{
                background: downloadHovered
                  ? '#fff'
                  : 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)',
                color: downloadHovered ? '#959595' : '#fff',
                fontSize: 20,
                fontFamily: 'Lato, sans-serif',
                border: 'none',
                letterSpacing: '0.03em',
                outline: downloadHovered ? '2px solid #959595' : 'none',
                transition: 'background 0.2s, color 0.2s, outline 0.2s',
                display: 'inline-block',
                textDecoration: 'none',
              }}
              onMouseEnter={() => setDownloadHovered(true)}
              onMouseLeave={() => setDownloadHovered(false)}
            >
              <i className="fas fa-download me-2"></i> Download CV
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="row row-cols-2 row-cols-md-4 g-4 justify-content-center">
              {skills.map((skill, idx) => (
                <div className="col d-flex flex-column align-items-center gap-2" key={idx}>
                  <div className="d-flex align-items-center justify-content-center position-relative" style={{ width: 110, height: 110 }}>
                    <div style={{ width: 110, height: 110, borderRadius: '50%', background: 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)', opacity: 0.7, position: 'absolute', top: 0, left: 0, zIndex: 1 }}></div>
                    <i className={skill.icon} style={{ color: '#fff', fontSize: 48, zIndex: 2, position: 'relative' }}></i>
                  </div>
                  <div className="fw-bold" style={{ fontSize: 20, color: '#959595' }}>{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 