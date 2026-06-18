import "../styles/about.scss";
import Maxim from "../assets/jennermaxim.png";
import useInView from "../hooks/useInView";

const Icon = ({ d, d2, d3, circle, rect, poly, lines = [] }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {circle && <circle cx={circle.cx} cy={circle.cy} r={circle.r} />}
    {rect && <rect x={rect.x} y={rect.y} width={rect.w} height={rect.h} rx={rect.rx || 0} />}
    {poly && <polygon points={poly} />}
    {d && <path d={d} />}
    {d2 && <path d={d2} />}
    {d3 && <path d={d3} />}
    {lines.map((l, i) => <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} />)}
  </svg>
);

const GlobeIcon = () => (
  <Icon
    circle={{ cx: 12, cy: 12, r: 10 }}
    d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"
  />
);
const PhoneIcon = () => (
  <Icon
    rect={{ x: 5, y: 2, w: 14, h: 20, rx: 2 }}
    lines={[[12, 18, 12, 18]]}
  />
);
const MonitorIcon = () => (
  <Icon
    rect={{ x: 2, y: 3, w: 20, h: 14, rx: 2 }}
    lines={[[8, 21, 16, 21], [12, 17, 12, 21]]}
  />
);
const CpuIcon = () => (
  <Icon
    rect={{ x: 4, y: 4, w: 16, h: 16, rx: 2 }}
    d2="M9 9h6v6H9z"
    lines={[[9,1,9,4],[15,1,15,4],[9,20,9,23],[15,20,15,23],[20,9,23,9],[20,14,23,14],[1,9,4,9],[1,14,4,14]]}
  />
);
const CloudIcon = () => (
  <Icon d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
);
const WrenchIcon = () => (
  <Icon d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
);
const FileTextIcon = () => (
  <Icon
    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    d2="M14 2v6h6"
    lines={[[16,13,8,13],[16,17,8,17]]}
  />
);
const AwardIcon = () => (
  <Icon
    circle={{ cx: 12, cy: 8, r: 6 }}
    d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"
  />
);
const KeyboardIcon = () => (
  <Icon
    rect={{ x: 2, y: 6, w: 20, h: 12, rx: 2 }}
    lines={[[6,10,6,10],[10,10,10,10],[14,10,14,10],[18,10,18,10],[6,14,6,14],[18,14,18,14],[10,14,14,14]]}
  />
);
const StarIcon = () => (
  <Icon poly="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
);
const InfinityIcon = () => (
  <Icon d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4zm0 0c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4z" />
);
const UsersIcon = () => (
  <Icon
    d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    d2="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
    circle={{ cx: 9, cy: 7, r: 4 }}
  />
);
const ZapIcon = () => (
  <Icon poly="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
);

const services = [
  { icon: <GlobeIcon />, title: "Full Stack Development", desc: "Complete web applications using React, Node.js, Next.js, and modern databases,  front to back." },
  { icon: <PhoneIcon />, title: "Mobile Development", desc: "Cross-platform mobile apps with React Native and Flutter for iOS and Android." },
  { icon: <MonitorIcon />, title: "Desktop Development", desc: "Electron.js desktop applications with cross-platform compatibility." },
  { icon: <CpuIcon />, title: "AI & Machine Learning", desc: "Intelligent systems and AI/ML integration, face recognition, computer vision, NLP." },
  { icon: <CloudIcon />, title: "Cloud & DevOps", desc: "AWS cloud infrastructure, CI/CD pipelines, and deployment automation." },
  { icon: <WrenchIcon />, title: "Technical Solutions", desc: "Network configuration, system administration, and full technical support." },
];

const achievements = [
  { icon: <FileTextIcon />, title: "Published Research", desc: "Face Recognition Attendance System. Published in the Cavendish Journal of Science and Technology." },
  { icon: <AwardIcon />, title: "12+ Certifications", desc: "JavaScript, React.js, DevOps, Cloud Computing (AWS), Backend Development from Google & Microsoft programs." },
  { icon: <KeyboardIcon />, title: "Advanced Typing Certified", desc: "Certified in Advanced Typing Assessment, exceptional speed and accuracy in technical documentation." },
];

const values = [
  { icon: <StarIcon />, label: "Quality First", desc: "Every project deserves attention to detail and excellence" },
  { icon: <InfinityIcon />, label: "Continuous Learning", desc: "Technology evolves and so do I" },
  { icon: <UsersIcon />, label: "Collaboration", desc: "Great products are built together" },
  { icon: <ZapIcon />, label: "Innovation", desc: "Always seeking better, smarter solutions" },
];

const About = () => {
  const [heroRef, heroInView] = useInView(0.1);
  const [servicesRef, servicesInView] = useInView(0.05);
  const [achieveRef, achieveInView] = useInView(0.1);
  const [valuesRef, valuesInView] = useInView(0.1);
  const [focusRef, focusInView] = useInView(0.1);

  return (
    <div className="about-page">

      {/* Hero */}
      <div className="about-hero" ref={heroRef}>
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className={`about-photo reveal-left${heroInView ? " in-view" : ""}`}>
          <div className="photo-ring" />
          <img src={Maxim} alt="Kagheni Jenner" />
        </div>
        <div className="hero-text">
          <span className={`eyebrow reveal${heroInView ? " in-view" : ""} stagger-1`}>About Me</span>
          <h1 className={`reveal${heroInView ? " in-view" : ""} stagger-2`}>Kagheni Jenner</h1>
          <p className={`subtitle reveal${heroInView ? " in-view" : ""} stagger-3`}>
            Software Engineer · Full Stack Developer · Tech Innovator
          </p>
          <p className={`bio reveal${heroInView ? " in-view" : ""} stagger-4`}>
            A passionate Software Engineer from Uganda building scalable, efficient, and user-friendly
            applications. I thrive on solving complex problems and delivering high-quality solutions
            that exceed expectations, from web and mobile to AI systems.
          </p>
          <p className={`bio reveal${heroInView ? " in-view" : ""} stagger-5`}>
            Beyond coding, I&apos;m skilled in network configuration and computer repair,
            giving me a holistic view of technology, from the hardware layer to the user interface.
          </p>
        </div>
      </div>

      {/* Services */}
      <section className="about-section" ref={servicesRef}>
        <div className={`section-header reveal${servicesInView ? " in-view" : ""}`}>
          <h2>What I <span>Build</span></h2>
          <p>End-to-end development across every platform</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.title} className={`service-card reveal${servicesInView ? " in-view" : ""} stagger-${i + 1}`}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="card-glow" />
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="about-section achievement-section" ref={achieveRef}>
        <div className={`section-header reveal${achieveInView ? " in-view" : ""}`}>
          <h2>Achievements &amp; <span>Research</span></h2>
        </div>
        <div className="achievement-list">
          {achievements.map((a, i) => (
            <div key={a.title} className={`achievement reveal-left${achieveInView ? " in-view" : ""} stagger-${i + 1}`}>
              <div className="achievement-icon">{a.icon}</div>
              <div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Focus */}
      <section className="about-section" ref={focusRef}>
        <div className={`section-header reveal${focusInView ? " in-view" : ""}`}>
          <h2>Current <span>Focus</span></h2>
        </div>
        <ul className="focus-list">
          {[
            "Building private projects with cutting-edge technologies",
            "Learning something new every single day",
            "Looking to collaborate on open-source projects",
            "Exploring AI/ML integration in production web applications",
          ].map((item, i) => (
            <li key={item} className={`reveal${focusInView ? " in-view" : ""} stagger-${i + 1}`}>
              <span className="focus-dot" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Values */}
      <section className="about-section" ref={valuesRef}>
        <div className={`section-header reveal${valuesInView ? " in-view" : ""}`}>
          <h2>My <span>Values</span></h2>
        </div>
        <div className="values-grid">
          {values.map((v, i) => (
            <div key={v.label} className={`value reveal${valuesInView ? " in-view" : ""} stagger-${i + 1}`}>
              <div className="value-icon">{v.icon}</div>
              <strong>{v.label}</strong>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
