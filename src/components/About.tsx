import React from 'react';

const skills = [
  { name: 'Angular', icon: 'fab fa-angular' },
  { name: 'React.js', icon: 'fab fa-react' },
  { name: 'TypeScript', icon: 'fab fa-js-square' },
  { name: 'RxJS', icon: 'fas fa-code' },
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'CSS / SCSS', icon: 'fab fa-css3-alt' },
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'GitHub', icon: 'fab fa-github' },
];

const sectionTitle = {
  fontSize: 48, letterSpacing: '0.03em',
  background: 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)',
  WebkitBackgroundClip: 'text' as const, WebkitTextFillColor: 'transparent' as const, backgroundClip: 'text' as const,
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-5" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h2 className="fw-black mb-0" style={sectionTitle}>About Me</h2>
          </div>
        </div>
        <div className="row align-items-start justify-content-center g-5 flex-column flex-lg-row mb-5">
          <div className="col-lg-5 d-flex align-items-center justify-content-center">
            <div style={{ borderRadius: 28, width: 300, height: 380, overflow: 'hidden', boxShadow: 'var(--card-shadow)', border: '2px solid var(--border)' }}>
              <img src="/profile.jpg" alt="Mohamed Mahdy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="col-lg-7 d-flex flex-column align-items-start gap-4">
            <div style={{ fontSize: 17, lineHeight: '1.9', color: 'var(--text-secondary)', maxWidth: 600 }}>
              Frontend Engineer specializing in Angular and React. I build production-grade SaaS dashboards, admin platforms, and AI-integrated web tools. Currently at Boyot (Cairo fintech), delivering Angular 17+ features for products with 2,000+ active users.<br /><br />
              I also built FormCraft — my own AI-powered form builder — to show what I can do end-to-end: drag-and-drop canvas, conditional logic engine, multi-framework code export, and Anthropic Claude API integration, all in Angular 17.<br /><br />
              I write TypeScript-first code, integrate REST APIs cleanly, and ship things that work in production.
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="row row-cols-2 row-cols-md-4 g-4 justify-content-center">
          {skills.map((skill, idx) => (
            <div className="col d-flex flex-column align-items-center gap-2" key={idx}>
              <div className="d-flex align-items-center justify-content-center position-relative" style={{ width: 100, height: 100 }}>
                <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)', opacity: 0.85, position: 'absolute', inset: 0, zIndex: 1 }} />
                <i className={skill.icon} style={{ color: '#fff', fontSize: 42, zIndex: 2, position: 'relative' }}></i>
              </div>
              <div className="fw-bold" style={{ fontSize: 16, color: 'var(--text-muted)' }}>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
