import "../styles/header.scss";
import GitHub from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import X from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Maxim from "../assets/jennermaxim.png";
import Whatsapp from "../assets/whatsapp.png";
import Telegram from "../assets/telegram.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showMenu = (e) => {
    e.currentTarget.classList.toggle("change");
    setIsVisible(!isVisible);
  };

  const closeMenu = () => {
    setIsVisible(false);
    document.querySelector(".menu-icon").classList.remove("change");
  };

  return (
    <>
      <div className="header-page">
        <div className="pre-header-position">
          <div className="pre-header">
            <div className="contact">
              <a href="mailto:ceo@jennermaxim.com">Email me</a>
              <a href="tel:+256784305644">Call me</a>
            </div>
            <div className="social-media">
              <a
                href="http://github.com/jennermaxim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GitHub} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/jenner-maxim-b11051251"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
              <a
                href="https://x.com/maximjenner"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={X} alt="X" />
              </a>
              <a
                href="https://www.instagram.com/jennermaxim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="Instagram" />
              </a>
              <a
                href="https://wa.me/+256784305644"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Whatsapp} alt="Whatsapp" />
              </a>
              <a
                href="https://t.me/jennermaxim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Telegram} alt="Whatsapp" />
              </a>
            </div>
          </div>
          <hr />
        </div>
        <div className="header">
          <div className="logo">
            <img src={Maxim} alt="Jenner Maxim" />
            <Link to="/">
              <h1>Jenner Maxim</h1>
            </Link>
          </div>
          <div className="search">
            <input type="search" name="" id="" placeholder="Search" />
          </div>
          <div className="right-nav">
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/projects">My Projects</NavLink>
            <NavLink to="/contact">Contact Me</NavLink>
            <NavLink to="/resume">Resume</NavLink>
          </div>
          <div className="menu-icon" onClick={showMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          {isVisible && (
            <div className="menu" onClick={closeMenu}>
              <NavLink to="/about">About Me</NavLink>
              <NavLink to="/projects">My Projects</NavLink>
              <NavLink to="/contact">Contact Me</NavLink>
              <NavLink to="/resume">Resume</NavLink>
            </div>
          )}
        </div>
        <hr />
      </div>
    </>
  );
};

export default Header;
