import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_o3mhzfa';
const TEMPLATE_ID = 'template_dwyvkeb';
const PUBLIC_KEY = 'HY_XiL7eCTvvjsVx0';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    details: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [sendHovered, setSendHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          service: form.service,
          timeline: form.timeline,
          details: form.details,
        },
        PUBLIC_KEY
      );
      setStatus('success');
      setMessage('Message sent successfully!');
      setForm({
        name: '',
        email: '',
        phone: '',
        service: '',
        timeline: '',
        details: '',
      });
    } catch (error) {
      setStatus('error');
      setMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-5 bg-transparent">
      <div className="container">
        <div className="row justify-content-center mb-4">
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
              Contact Me
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            {status === 'success' && (
              <div className="text-success fw-semibold mb-3 text-center">{message}</div>
            )}
            {status === 'error' && (
              <div className="text-danger fw-semibold mb-3 text-center">{message}</div>
            )}
            <form onSubmit={handleSubmit} className="row g-4 bg-transparent">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  style={{ color: '#959595', fontWeight: 500, background: '#fff', border: '2px solid #FD6F00', fontSize: 20 }}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  style={{ color: '#959595', fontWeight: 500, background: '#fff', border: '2px solid #FD6F00', fontSize: 20 }}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="phone"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  style={{ color: '#959595', fontWeight: 500, background: '#fff', border: '2px solid #FD6F00', fontSize: 20 }}
                />
              </div>
              <div className="col-md-6">
                <select
                  name="service"
                  className="form-select form-select-lg rounded-3"
                  value={form.service}
                  onChange={handleChange}
                  aria-label="Service Of Interest"
                  disabled={status === 'sending'}
                  style={{ color: '#959595', fontWeight: 500, background: '#fff', border: '2px solid #FD6F00', fontSize: 20 }}
                >
                  <option value="">Service Of Interest</option>
                  <option value="web">Web Development</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="mobile">Mobile App</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="timeline"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Timeline"
                  value={form.timeline}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  style={{ color: '#959595', fontWeight: 500, background: '#fff', border: '2px solid #FD6F00', fontSize: 20 }}
                />
              </div>
              <div className="col-md-6">
                <textarea
                  name="details"
                  className="form-control form-control-lg rounded-3"
                  placeholder="Project Details..."
                  value={form.details}
                  onChange={handleChange}
                  style={{ color: '#959595', fontWeight: 500, background: '#fff', border: '2px solid #FD6F00', fontSize: 20, minHeight: 120 }}
                  disabled={status === 'sending'}
                />
              </div>
              <div className="col-12 d-flex justify-content-end mt-2">
                <button
                  type="submit"
                  className="btn fw-bold px-5 py-3 rounded-3"
                  style={{
                    background: sendHovered ? '#E46400' : 'linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%)',
                    color: '#fff',
                    fontSize: 20,
                    fontFamily: 'Lato, sans-serif',
                    letterSpacing: '0.03em',
                    border: 'none',
                    outline: sendHovered ? '2px solid #959595' : 'none',
                    transition: 'background 0.2s, color 0.2s, outline 0.2s',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                  disabled={status === 'sending'}
                  onMouseEnter={() => setSendHovered(true)}
                  onMouseLeave={() => setSendHovered(false)}
                >
                  {status === 'sending' ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 