import { useEffect, useState } from "react";
import "../styles/home.scss";
import Maxim from "../assets/jennermaxim.png";
import Skills from "../components/Skills";
import GitHubStats from "../components/GitHubStats";
import { Link } from "react-router-dom";
import useInView from "../hooks/useInView";

const useCounter = (target, active, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
};

const stats = [
  { value: 16, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Technologies Mastered" },
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "%", label: "Dedication" },
];

const StatItem = ({ value, suffix, label, active, delay }) => {
  const count = useCounter(value, active);
  return (
    <div className={`stat-item reveal${active ? " in-view" : ""}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Home = () => {
  const [statsRef, statsInView] = useInView(0.2);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="profile">
          <div className="image-wrap reveal-left in-view">
            <img src={Maxim} alt="Kagheni Jenner - Software Engineer" />
            <div className="available-badge">
              <span className="dot" />
              Available for hire
            </div>
          </div>

          <div className="about-me">
            <div className="greeting reveal in-view stagger-1">
              Hello, World!
            </div>
            <h1 className="reveal in-view stagger-2">
              I&apos;m <span className="name-highlight">Kagheni Jenner</span>
            </h1>
            <h2 className="role-line reveal in-view stagger-3">
              a <span />
            </h2>
            <p className="tagline reveal in-view stagger-4">
              I build scalable full-stack applications, mobile apps, and intelligent systems.
              From idea to deployment. I deliver software that works.
            </p>
            <div className="languages reveal in-view stagger-5">
              Currently working with: <span />
            </div>
            <div className="cta-buttons reveal in-view stagger-6">
              <Link to="/projects" className="btn-primary">
                View My Work →
              </Link>
              <Link to="/contact" className="btn-outline">
                Hire Me
              </Link>
            </div>
          </div>
        </div>

        <div className="scroll-hint">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Scroll down</span>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section" ref={statsRef}>
        {stats.map((s, i) => (
          <StatItem key={s.label} {...s} active={statsInView} delay={i * 0.1} />
        ))}
      </section>

      {/* Skills */}
      <Skills />

      {/* GitHub Stats */}
      <GitHubStats />
    </div>
  );
};

export default Home;
