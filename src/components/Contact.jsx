import { useState } from 'react'
import { Mail, Send, MapPin } from 'lucide-react'
import { profile } from '../data'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${body}`
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-center">Contact Me</h2>
        <p className="section-subtitle text-center">
          Have a project in mind? Let's talk.
        </p>
        <div className="row g-5 justify-content-center">
          <div className="col-lg-5">
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={20} />
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <div>
                  <strong>Location</strong>
                  <span>{profile.location}</span>
                </div>
              </div>
              <div className="contact-item">
                <i className="bi bi-github contact-icon" />
                <div>
                  <strong>GitHub</strong>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    github.com/kundanchauhan
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <i className="bi bi-linkedin contact-icon" />
                <div>
                  <strong>LinkedIn</strong>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    linkedin.com/in/kundanchauhan
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary w-100">
                    <Send size={16} /> Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
