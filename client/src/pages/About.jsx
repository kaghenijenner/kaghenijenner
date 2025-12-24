import "../styles/about.scss";
import Maxim from "../assets/jennermaxim.png";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <img src={Maxim} alt="Jenner Maxim" />
        <div className="intro">
          <h1>About Me</h1>
          <h2>Kagheni Jenner</h2>
          <p className="subtitle">
            Software Engineer | Full Stack Developer | Tech Enthusiast
          </p>
        </div>
      </div>

      <div className="about-content">
        <section className="bio">
          <h2>Who I Am</h2>
          <p>
            I&apos;m a passionate Software Engineer from Uganda with expertise
            in building scalable, efficient, and user-friendly applications.
            With a deep understanding of various programming languages and
            frameworks, I thrive on solving complex problems and delivering
            high-quality software solutions that exceed expectations.
          </p>
          <p>
            Beyond coding, I&apos;m skilled in network configuration, and
            computer repair. This diverse skill set allows me to approach
            projects holistically, from concept to deployment.
          </p>
        </section>

        <section className="what-i-do">
          <h2>What I Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Full Stack Development</h3>
              <p>
                Building complete web applications using modern technologies
                like React, Node.js, Next.js, and various databases.
              </p>
            </div>
            <div className="service-card">
              <h3>Mobile Development</h3>
              <p>
                Creating cross-platform mobile applications with React Native
                and Flutter for iOS and Android.
              </p>
            </div>
            <div className="service-card">
              <h3>Desktop Development</h3>
              <p>
                Developing desktop applications using Electron.js for
                cross-platform compatibility.
              </p>
            </div>
            <div className="service-card">
              <h3>AI & Machine Learning</h3>
              <p>
                Developing intelligent systems and integrating AI/ML solutions
                into applications for enhanced functionality.
              </p>
            </div>
            <div className="service-card">
              <h3>Technical Solutions</h3>
              <p>
                Network configuration, system administration, and computer
                repair services for comprehensive tech support.
              </p>
            </div>
          </div>
        </section>

        <section className="current-focus">
          <h2>Current Focus</h2>
          <ul>
            <li>
              Working on private projects involving cutting-edge technologies
            </li>
            <li>Learning something new every day to stay ahead in tech</li>
            <li>Looking to collaborate on open-source projects</li>
            <li>Exploring AI/ML integration in web applications</li>
          </ul>
        </section>

        <section className="achievements">
          <h2>Achievements & Research</h2>
          <div className="achievement-list">
            <div className="achievement">
              <h3>Published Research</h3>
              <p>
                Face Recognition Attendance System - Published in the Cavendish
                Journal of Science and Technology, presenting an efficient
                AI-powered attendance tracking solution.
              </p>
            </div>
            <div className="achievement">
              <h3>Certifications</h3>
              <p>
                Multiple certifications in JavaScript, React.js, DevOps, Cloud
                Computing (AWS), Backend Development, and more from DevTown,
                Google, and Microsoft programs.
              </p>
            </div>
            <div className="achievement">
              <h3>Advanced Typing Skills</h3>
              <p>
                Certified in Advanced Typing Assessment, demonstrating
                exceptional speed and accuracy in technical documentation and
                coding.
              </p>
            </div>
          </div>
        </section>

        <section className="values">
          <h2>My Values</h2>
          <div className="values-grid">
            <div className="value">
              <strong>Quality First</strong>
              <p>Every project deserves attention to detail and excellence</p>
            </div>
            <div className="value">
              <strong>Continuous Learning</strong>
              <p>Technology evolves, and so should we</p>
            </div>
            <div className="value">
              <strong>Collaboration</strong>
              <p>Great things are built together</p>
            </div>
            <div className="value">
              <strong>Innovation</strong>
              <p>Always seeking better solutions</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
