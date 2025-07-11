import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [hireMeHovered, setHireMeHovered] = useState(false);
  const [downloadHovered, setDownloadHovered] = useState(false);
  return (
    <section id="home" className="py-5 bg-transparent min-vh-90 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center justify-content-between g-5 flex-column-reverse flex-lg-row">
          <div className="col-lg-6 d-flex flex-column align-items-start gap-3">
            <div className="fw-semibold text-secondary" style={{fontSize: 24}}>Hi I am</div>
            <div className="fw-bold" style={{color: '#959595', fontSize: 28}}>Mohamed Mahdy</div>
            <div
              className="fw-black lh-1 mb-2"
              style={{
                fontSize: 56,
                letterSpacing: '0.03em',
                background: 'linear-gradient(90.48deg, #984300 0.34%, #FD6F00 42.06%, #CA5900 90.34%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginTop: 10,
              }}
            >
              Web Developer<br />Front End Developer<br />UI/UX designer
            </div>
            <div className="d-flex gap-3 mt-2">
              <a href="https://github.com/MohamedMahdy123" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center rounded-circle border" style={{width: 40, height: 40, borderColor: '#575757', background: 'rgba(255,255,255,0.04)'}}>
                <i className="fab fa-github" style={{ color: '#BABABA', fontSize: 24 }}></i>
              </a>
              <a href="https://www.linkedin.com/in/mohamed-mahdy02/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center rounded-circle border" style={{width: 40, height: 40, borderColor: '#575757', background: 'rgba(255,255,255,0.04)'}}>
                <i className="fab fa-linkedin-in" style={{ color: '#BABABA', fontSize: 24 }}></i>
              </a>
            </div>
            <div className="d-flex gap-3 mt-4 flex-wrap">
              <a
                href="#contact"
                className="btn fw-bold px-4 py-2 rounded-3"
                style={{
                  background: hireMeHovered
                    ? '#fff'
                    : 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)',
                  color: hireMeHovered ? '#959595' : '#fff',
                  fontSize: 20,
                  fontFamily: 'Lato, sans-serif',
                  letterSpacing: '0.03em',
                  outline: hireMeHovered ? '2px solid #959595' : 'none',
                  border: 'none',
                  transition: 'background 0.2s, color 0.2s, outline 0.2s',
                }}
                onMouseEnter={() => setHireMeHovered(true)}
                onMouseLeave={() => setHireMeHovered(false)}
              >
                Hire Me
              </a>
              <a
                href="/Mohamed%20Mahdy%20cv.pdf" target="_blank" rel="noopener noreferrer"
                className="btn fw-bold px-4 py-2 rounded-3 border"
                style={{
                  border: '2px solid #959595',
                  color: downloadHovered ? '#fff' : '#959595',
                  background: downloadHovered ? '#E46400' : 'transparent',
                  fontSize: 20,
                  fontFamily: 'Lato, sans-serif',
                  letterSpacing: '0.03em',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={() => setDownloadHovered(true)}
                onMouseLeave={() => setDownloadHovered(false)}
              >
                Download CV
              </a>
            </div>
            <div className="d-flex justify-content-center mt-5 w-100">
              <div className="bg-dark rounded-4 px-5 py-4 text-center d-flex flex-column align-items-center" style={{minWidth: 220}}>
                <div className="fw-bold" style={{ color: '#FD6F00', fontSize: 32 }}>30+</div>
                <div className="fw-bold text-white" style={{ fontSize: 22 }}>Project done</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center mb-4 mb-lg-0">
            <div className="rounded-circle d-flex align-items-center justify-content-center position-relative overflow-hidden" style={{ width: 320, height: 400, background: 'rgba(255,255,255,0.04)' }}>
              <img src="/profile.jpg" alt="Mohamed Mahdy" style={{ width: 280, height: 360, objectFit: 'cover', borderRadius: '50%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 