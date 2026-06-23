import React from 'react';

const experiences = [
  {
    role: 'Frontend Engineer',
    company: 'Boyot — Real Estate Fintech',
    period: 'Sep 2024 – Present',
    bullets: [
      'Build and maintain Angular 17+ dashboards across 5 products: Taraabot Admin, Taraabot Website, Boyot Pay, Arkan, and Bcommunity',
      'Deliver reactive UIs using Angular Signals, RxJS, and Angular Material for 2,000+ active users',
      'Integrate RESTful APIs with JWT auth, HTTP interceptors, and TypeScript interface contracts',
      'Apply lazy loading and OnPush change detection to optimize bundle size and performance',
    ],
  },
];

const sectionTitle = {
  fontSize: 48, letterSpacing: '0.03em',
  background: 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)',
  WebkitBackgroundClip: 'text' as const, WebkitTextFillColor: 'transparent' as const, backgroundClip: 'text' as const,
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-5" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h2 className="fw-black mb-0" style={sectionTitle}>Experience</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-4 mb-4"
                style={{ background: 'var(--experience-card)', boxShadow: 'var(--card-shadow)', border: '1px solid var(--border)' }}>
                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2 mb-3">
                  <div>
                    <div className="fw-black" style={{ fontSize: 22, color: 'var(--text-primary)' }}>{exp.role}</div>
                    <div className="fw-semibold" style={{ fontSize: 16, color: '#FD6F00' }}>{exp.company}</div>
                  </div>
                  <div className="fw-semibold px-3 py-1 rounded-3"
                    style={{ fontSize: 14, color: '#fff', background: 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)', whiteSpace: 'nowrap' }}>
                    {exp.period}
                  </div>
                </div>
                <ul className="mb-0 ps-3" style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.8 }}>
                  {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
