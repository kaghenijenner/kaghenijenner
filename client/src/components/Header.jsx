import "../styles/header.scss";
import GitHub from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import X from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Maxim from "../assets/jennermaxim.png";
import Whatsapp from "../assets/whatsapp.png";
import Telegram from "../assets/telegram.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsVisible(false);
    document.querySelector(".menu-icon")?.classList.remove("change");
  }, [location]);

  const showMenu = (e) => {
    e.currentTarget.classList.toggle("change");
    setIsVisible((v) => !v);
  };

  return (
    <div className={`header-page${scrolled ? " scrolled" : ""}`}>
      <div className="pre-header-bar">
        <div className="pre-header">
          <div className="contact">
            <a href="mailto:ceo@jennermaxim.com">
              <span className="icon">✉</span> Email me
            </a>
            <a href="tel:+256784305644">
              <span className="icon">☎</span> Call me
            </a>
          </div>
          <div className="social-media">
            <a href="http://github.com/kaghenijenner" target="_blank" rel="noopener noreferrer" title="GitHub">
              <img src={GitHub} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/kagheni-jenner-b11051251" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="https://x.com/maximjenner" target="_blank" rel="noopener noreferrer" title="X">
              <img src={X} alt="X" />
            </a>
            <a href="https://www.instagram.com/jennermaxim" target="_blank" rel="noopener noreferrer" title="Instagram">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://wa.me/+256784305644" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <img src={Whatsapp} alt="WhatsApp" />
            </a>
            <a href="https://t.me/jennermaxim" target="_blank" rel="noopener noreferrer" title="Telegram">
              <img src={Telegram} alt="Telegram" />
            </a>
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <div className="nav-inner">
          <Link to="/" className="logo">
            <div className="logo-img-wrap">
              <img src={Maxim} alt="Kagheni Jenner" />
            </div>
            <div className="logo-text">
              <span className="name">Kagheni Jenner</span>
              <span className="title-tag">Software Engineer</span>
            </div>
          </Link>

          <div className="right-nav">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/certificates">Certificates</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/resume" className="nav-resume-btn">Resume</NavLink>
          </div>

          <button className="menu-icon" onClick={showMenu} aria-label="Toggle menu">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>
        </div>

        {isVisible && (
          <div className="mobile-menu" onClick={() => setIsVisible(false)}>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/certificates">Certificates</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/resume">Resume</NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
