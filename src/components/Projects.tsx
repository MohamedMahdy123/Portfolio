import React, { useState } from 'react';

const foodImages = [
  '/projects-images/Food%20restaurant%20React%20-%202.png',
  '/projects-images/Food%20restaurant%20React%20-%203.png',
  '/projects-images/Food%20restaurant%20React%20-%204.png',
  '/projects-images/Food%20restaurant%20React%20-%205.png',
];

const projects = [
  {
    image: '/projects-images/formcraft.png',
    name: 'FormCraft v8',
    subName: 'AI Form Builder',
    desc: 'AI-powered low-code form builder. Drag-and-drop canvas, conditional logic engine, multi-framework code export (Angular / React / Vue), and Anthropic Claude API integration. Built solo with Angular 17, Signals, RxJS, and Supabase.',
    live: 'https://formcraft-v8.vercel.app',
    tag: 'Angular 17 · AI · Supabase',
  },
  {
    image: '/projects-images/taraabot.png',
    name: 'Taraabot Admin',
    subName: 'Angular SaaS Dashboard',
    desc: 'Multi-module Angular 17+ admin platform for AI assistant management, user roles, billing, and real-time status. Production app at Boyot serving 2,000+ users.',
    live: '#',
    tag: 'Angular 17 · RxJS · Angular Material',
  },
  {
    image: '/projects-images/boyot-pay.png',
    name: 'Boyot Pay Dashboard',
    subName: 'Fintech Dashboard',
    desc: 'Financial transaction dashboard with date-range filtering, CSV export, and revenue charts. Production app at Boyot.',
    live: '#',
    tag: 'Angular 17 · TypeScript · REST API',
  },
  {
    images: foodImages,
    name: 'Food Restaurant',
    subName: 'React + TypeScript',
    desc: 'Responsive restaurant website built with React 18, TypeScript, and Bootstrap 5.',
    live: 'https://food-resta-react-js-bootstrap-5.vercel.app/#',
    tag: 'React · TypeScript · Bootstrap 5',
  },
  {
    image: '/projects-images/weather%20web.png',
    name: 'Weather App',
    subName: 'API Integration',
    desc: 'Real-time weather dashboard fetching live data for any city via OpenWeatherMap API.',
    live: 'https://weather-alpha-gilt.vercel.app/',
    tag: 'React · REST API',
  },
];

const sectionTitle = {
  fontSize: 48, letterSpacing: '0.03em',
  background: 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)',
  WebkitBackgroundClip: 'text' as const, WebkitTextFillColor: 'transparent' as const, backgroundClip: 'text' as const,
};

const Projects: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [foodIdx] = useState(0);

  return (
    <section id="portfolio" className="py-5" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h2 className="fw-black mb-2" style={sectionTitle}>Projects</h2>
            <div style={{ color: 'var(--text-muted)', fontSize: 18, maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
              A selection of my best work — production SaaS platforms, AI-integrated tools, and frontend apps.
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          {projects.map((project, idx) => (
            <div className="col d-flex" key={idx}>
              <div
                className="portfolio-card flex-fill h-100 rounded-4 overflow-hidden position-relative"
                style={{
                  borderRadius: 20,
                  minHeight: 400,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  transform: hovered === idx ? 'translateY(-6px) scale(1.02)' : 'none',
                  cursor: 'pointer',
                  border: '1.5px solid var(--border)',
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image */}
                <div className="position-relative w-100" style={{ height: 200, overflow: 'hidden' }}>
                  <img
                    src={(project as any).images ? (project as any).images[foodIdx] : (project as any).image}
                    alt={project.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s', transform: hovered === idx ? 'scale(1.05)' : 'scale(1)' }}
                  />
                  <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 4, background: 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)' }} />
                </div>

                {/* Body */}
                <div className="d-flex flex-column p-4 gap-2" style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: '#FD6F00', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {project.subName}
                  </div>
                  <div className="fw-black" style={{ fontSize: 20, color: 'var(--text-primary)' }}>{project.name}</div>
                  <div style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.65, flexGrow: 1 }}>{project.desc}</div>
                  <div style={{ fontSize: 12, color: '#FD6F00', fontWeight: 600, letterSpacing: '0.04em', marginTop: 4 }}>
                    {(project as any).tag}
                  </div>
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn fw-bold px-4 py-2 rounded-3 mt-2 d-flex align-items-center gap-2"
                      style={{
                        background: hovered === idx ? 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)' : 'transparent',
                        color: hovered === idx ? '#fff' : '#FD6F00',
                        fontSize: 15,
                        border: '2px solid #FD6F00',
                        transition: 'all 0.2s',
                        width: 'fit-content',
                      }}
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center">
            <a href="https://github.com/MohamedMahdy123" target="_blank" rel="noopener noreferrer"
              className="btn fw-bold px-5 py-3 rounded-3 d-inline-flex align-items-center gap-2"
              style={{ background: 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)', color: '#fff', fontSize: 18, border: 'none' }}>
              <i className="fab fa-github" style={{ fontSize: 22 }}></i>
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
