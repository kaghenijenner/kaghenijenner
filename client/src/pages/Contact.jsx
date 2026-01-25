import { useState } from "react";
import "../styles/contact.scss";
import GitHub from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import X from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Whatsapp from "../assets/whatsapp.png";
import Telegram from "../assets/telegram.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link with form data
    const mailtoLink = `mailto:jennermaximbusiness@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setStatus("Opening your email client...");

    // Reset form
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setStatus("");
    }, 2000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>
          Have a project in mind or want to collaborate? Let&apos;s connect!
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-item">
            <a href="mailto:ceo@jennermaxim.com">Email me</a>
          </div>

          <div className="info-item">
            <a href="tel:+256784305644">Call me</a>
          </div>

          <div className="info-item">
            <h3>Location</h3>
            <p>Uganda</p>
          </div>

          <div className="social-links">
            <h3>Connect on Social Media</h3>
            <div className="social-icons">
              <a
                href="http://github.com/kaghenijenner"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <img src={GitHub} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/kagheni-jenner-b11051251"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
              <a
                href="https://x.com/maximjenner"
                target="_blank"
                rel="noopener noreferrer"
                title="X (Twitter)"
              >
                <img src={X} alt="X" />
              </a>
              <a
                href="https://www.instagram.com/jennermaxim"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <img src={Instagram} alt="Instagram" />
              </a>
              <a
                href="https://wa.me/+256784305644"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <img src={Whatsapp} alt="WhatsApp" />
              </a>
              <a
                href="https://t.me/jennermaxim"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
              >
                <img src={Telegram} alt="Telegram" />
              </a>
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

        <div className="contact-form-section">
          <h2>Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Kagheni Jenner"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="ceo@jennermaxim.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
