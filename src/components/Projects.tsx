import React, { useState } from 'react';

const foodImages = [
  '/projects-images/Food%20restaurant%20React%20-%202.png',
  '/projects-images/Food%20restaurant%20React%20-%203.png',
  '/projects-images/Food%20restaurant%20React%20-%204.png',
  '/projects-images/Food%20restaurant%20React%20-%205.png',
];

const projects = [
  {
    image: '/projects-images/cime web.png',
    name: 'Cima Web',
    subName: 'cime website',
    desc: 'A modern movie streaming platform with categories, live TV, and user authentication.',
    live: 'https://cima-website.vercel.app',
  },
  {
    images: foodImages,
    name: 'Food Restaurant React',
    subName: 'Food restaurant',
    desc: 'A responsive restaurant website built with React and Bootstrap 5.',
    live: 'https://food-resta-react-js-bootstrap-5.vercel.app/#',
  },
  {
    image: '/projects-images/Full responsive restaurant.png',
    name: 'Full Responsive Restaurant',
    subName: 'Food restaurant',
    desc: 'A fully responsive restaurant site with menu, team, and reservation features.',
    live: 'https://project-full-responsive-restaurant.vercel.app/',
  },
  {
    image: '/projects-images/weather%20web.png',
    name: 'Weather App',
    subName: 'weather',
    desc: 'A weather dashboard app showing real-time weather data for any city.',
    live: 'https://weather-alpha-gilt.vercel.app/',
  },
  {
    image: '/projects-images/pray time.png',
    name: 'Pray Time',
    subName: 'Pray Time',
    desc: 'A prayer time app for Muslims, showing daily prayer times for any location.',
    live: 'https://pray-time-raect-js.vercel.app/',
  },
  {
    image: '/projects-images/To-Do list.png',
    name: 'To-Do List',
    subName: 'To-Do list',
    desc: 'A simple and elegant to-do list app built with React.js.',
    live: 'https://to-do-list-react-js-mauve.vercel.app/',
  },
];

const Projects: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [foodIdx, setFoodIdx] = useState(0);
  return (
    <section id="portfolio" className="py-5 bg-transparent">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h2
              className="fw-black mb-2"
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
              Projects
            </h2>
            <div className="fw-medium mx-auto" style={{ color: '#959595', fontSize: 22, maxWidth: 700, lineHeight: 1.5 }}>
              A selection of my best work, showcasing modern web apps, responsive design, and real-world solutions.
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          {projects.map((project, idx) => (
            <div className="col d-flex" key={idx}>
              <div
                className="card flex-fill h-100 shadow-sm border-0 rounded-4 overflow-hidden position-relative"
                style={{
                  background: '#fff',
                  borderRadius: 24,
                  minHeight: 420,
                  minWidth: 0,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  transform: hovered === idx ? 'translateY(-8px) scale(1.025)' : 'none',
                  boxShadow: hovered === idx ? '0 12px 36px rgba(253,111,0,0.13)' : '0 4px 16px rgba(0,0,0,0.08)',
                  border: '1.5px solid #ececec',
                  cursor: 'pointer',
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {project.images ? (
                  <div className="position-relative w-100" style={{ height: 220 }}>
                    <img
                      src={project.images[foodIdx]}
                      alt={project.name}
                      className="card-img-top"
                      style={{ height: 220, objectFit: 'cover', borderRadius: '24px 24px 0 0' }}
                    />
                    <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 4, background: 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)' }} />
                  </div>
                ) : (
                  <div className="position-relative w-100" style={{ height: 220 }}>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="card-img-top"
                      style={{ height: 220, objectFit: 'cover', borderRadius: '24px 24px 0 0' }}
                    />
                    <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 4, background: 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)' }} />
                  </div>
                )}
                <div className="card-body d-flex flex-column align-items-center justify-content-between p-4 gap-2">
                  {project.subName && (
                    <div className="fw-bold text-dark text-center mt-2" style={{ fontSize: 18, letterSpacing: '0.01em' }}>
                      {project.subName}
                    </div>
                  )}
                  <div style={{ width: 40, height: 3, background: 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)', borderRadius: 2, margin: '16px auto 0 auto' }} />
                  <div className="fw-bold text-dark text-center" style={{ fontSize: 22, letterSpacing: '0.03em' }}>{project.name}</div>
                  <div className="fw-medium text-secondary text-center mb-2" style={{ fontSize: 16, minHeight: 48 }}>{project.desc}</div>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn fw-bold px-4 py-2 rounded-3 mt-2 d-flex align-items-center gap-2"
                    style={{
                      background: hovered === idx ? 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)' : '#fff',
                      color: hovered === idx ? '#fff' : '#FD6F00',
                      fontSize: 18,
                      fontFamily: 'Lato, sans-serif',
                      border: hovered === idx ? 'none' : '2px solid #FD6F00',
                      outline: hovered === idx ? '2px solid #FD6F00' : 'none',
                      transition: 'background 0.2s, color 0.2s, outline 0.2s, border 0.2s',
                      boxShadow: hovered === idx ? '0 2px 12px rgba(253,111,0,0.10)' : 'none',
                    }}
                  >
                    <i className="fas fa-external-link-alt" style={{ fontSize: 18 }}></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center">
            <a
              href="https://github.com/MohamedMahdy123"
              target="_blank"
              rel="noopener noreferrer"
              className="btn fw-bold px-4 py-3 rounded-3 d-inline-flex align-items-center gap-2"
              style={{
                background: 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)',
                color: '#fff',
                fontSize: 20,
                fontFamily: 'Lato, sans-serif',
                border: 'none',
                boxShadow: '0 2px 12px rgba(253,111,0,0.10)',
                transition: 'background 0.2s, color 0.2s',
                marginTop: 10,
              }}
            >
              <i className="fab fa-github" style={{ fontSize: 24 }}></i>
              Show more in GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 