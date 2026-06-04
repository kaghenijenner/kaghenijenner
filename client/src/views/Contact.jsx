'use client';
import { useState } from "react";
import "../styles/contact.scss";
import GitHub from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import X from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Whatsapp from "../assets/whatsapp.png";
import Telegram from "../assets/telegram.png";
import useInView from "../hooks/useInView";

const u = (i) => i?.src ?? i;

const socials = [
  { href: "http://github.com/kaghenijenner", img: u(GitHub), label: "GitHub" },
  { href: "https://www.linkedin.com/in/kagheni-jenner-b11051251", img: u(LinkedIn), label: "LinkedIn" },
  { href: "https://x.com/kaghenijenner", img: u(X), label: "X" },
  { href: "https://www.instagram.com/jennermaxim", img: u(Instagram), label: "Instagram" },
  { href: "https://wa.me/+256784305644", img: u(Whatsapp), label: "WhatsApp" },
  { href: "https://t.me/kaghenijenner", img: u(Telegram), label: "Telegram" },
];

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2.5" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [headerRef, headerInView] = useInView(0.1);
  const [contentRef, contentInView] = useInView(0.05);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const link = `mailto:ceo@jennermaxim.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = link;
    setStatus("Opening your email client...");
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setStatus("");
    }, 2000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header" ref={headerRef}>
        <h1 className={`reveal${headerInView ? " in-view" : ""}`}>Get In Touch</h1>
        <p className={`reveal${headerInView ? " in-view" : ""} stagger-1`}>
          Have a project in mind? Let&apos;s build something great together.
        </p>
      </div>

      <div className="contact-content" ref={contentRef}>
        <div className={`contact-info reveal-left${contentInView ? " in-view" : ""}`}>
          <h2>Contact Information</h2>

          <div className="info-item">
            <h3>Email</h3>
            <a href="mailto:ceo@jennermaxim.com"><MailIcon /> ceo@jennermaxim.com</a>
          </div>

          <div className="info-item">
            <h3>Phone</h3>
            <a href="tel:+256784305644"><PhoneIcon /> +256 784 305 644</a>
          </div>

          <div className="info-item">
            <h3>Location</h3>
            <p className="location"><MapPinIcon /> Kampala, Uganda</p>
          </div>

          <div className="social-links">
            <h3>Social Media</h3>
            <div className="social-icons">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" suppressHydrationWarning title={s.label}>
                  <img src={s.img} alt={s.label} />
                </a>
              ))}
            </div>
          </div>

          <div className="availability">
            <h3>Available For</h3>
            <ul>
              <li>Freelance Projects</li>
              <li>Part-time Opportunities</li>
              <li>Consulting</li>
              <li>Open Source Collaboration</li>
            </ul>
          </div>
        </div>

        <div className={`contact-form-section reveal-right${contentInView ? " in-view" : ""}`}>
          <h2>Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text" id="name" name="name"
                value={formData.name} onChange={handleChange}
                required placeholder="Kagheni Jenner"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email *</label>
              <input
                type="email" id="email" name="email"
                value={formData.email} onChange={handleChange}
                required placeholder="you@company.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text" id="subject" name="subject"
                value={formData.subject} onChange={handleChange}
                required placeholder="Project Inquiry"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message" name="message"
                value={formData.message} onChange={handleChange}
                required rows="6"
                placeholder="Tell me about your project, timeline, and budget..."
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message →
            </button>
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
