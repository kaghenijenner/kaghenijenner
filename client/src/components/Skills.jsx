'use client';
import "../styles/skills.scss";
import useInView from "../hooks/useInView";
import HTMLCSS from "../assets/htmlcss.jpeg";
import MySQL from "../assets/mysql.png";
import PHP from "../assets/php.png";
import PhotoShop from "../assets/photoshop.jpg";
import Blender from "../assets/blender.jpg";
import JS from "../assets/js.jpg";
import ReactJS from "../assets/react.jpg";
import Firebase from "../assets/firebase.png";
import Flutter from "../assets/flutter.png";
import Python from "../assets/python.jpg";
import Linux from "../assets/linux.png";
import Node from "../assets/nodejs.png";
import JQuery from "../assets/jquery.png";
import AJAX from "../assets/ajax.jpeg";
import Angular from "../assets/angular.png";
import Nextjs from "../assets/nextjs.jpg";
import TypeScript from "../assets/typescript.png";
import WordPress from "../assets/wordpress.png";
import MongoDB from "../assets/mongodb.svg";
import ReactNative from "../assets/reactnative.png";

const u = (i) => i?.src ?? i;

const allSkills = [
  { img: u(JS), title: "JavaScript", level: 100, category: "Frontend" },
  { img: u(TypeScript), title: "TypeScript", level: 90, category: "Frontend" },
  { img: u(ReactJS), title: "React.js", level: 100, category: "Frontend" },
  { img: u(ReactNative), title: "React Native", level: 85, category: "Mobile" },
  { img: u(Nextjs), title: "Next.js", level: 100, category: "Frontend" },
  { img: u(Node), title: "Node.js", level: 80, category: "Backend" },
  { img: u(MongoDB), title: "MongoDB", level: 100, category: "Backend" },
  { img: u(HTMLCSS), title: "HTML & CSS", level: 100, category: "Frontend" },
  { img: u(JQuery), title: "JQuery", level: 100, category: "Frontend" },
  { img: u(AJAX), title: "Ajax", level: 100, category: "Frontend" },
  { img: u(PHP), title: "PHP", level: 100, category: "Backend" },
  { img: u(MySQL), title: "MySQL", level: 100, category: "Backend" },
  { img: u(Firebase), title: "Firebase", level: 80, category: "Backend" },
  { img: u(Python), title: "Python", level: 90, category: "AI/ML" },
  { img: u(PhotoShop), title: "Photoshop", level: 90, category: "Design" },
  { img: u(Blender), title: "Blender", level: 80, category: "Design" },
  { img: u(Flutter), title: "Flutter", level: 60, category: "Mobile" },
  { img: u(Linux), title: "Linux", level: 100, category: "DevOps" },
  { img: u(Angular), title: "Angular.js", level: 50, category: "Frontend" },
  { img: u(WordPress), title: "WordPress", level: 100, category: "CMS" },
];

const sorted = [...allSkills].sort((a, b) => b.level - a.level);

const levelLabel = (l) => l >= 90 ? "Expert" : l >= 75 ? "Advanced" : l >= 60 ? "Intermediate" : "Learning";

const SkillCard = ({ img, title, level, inView, index }) => (
  <div
    className={`skill reveal${inView ? " in-view" : ""}`}
    style={{ transitionDelay: `${(index % 5) * 0.08}s` }}
  >
    <div className="skill-icon">
      <img src={img} alt={title} />
    </div>
    <div className="skill-info">
      <div className="skill-header">
        <h4>{title}</h4>
        <span className={`skill-badge badge-${levelLabel(level).toLowerCase()}`}>
          {levelLabel(level)}
        </span>
      </div>
      <div className="level-bar">
        <div
          className="level-fill"
          style={{ width: inView ? `${level}%` : "0%" }}
        />
      </div>
      <span className="level-pct">{level}%</span>
    </div>
  </div>
);

const Skills = () => {
  const [ref, inView] = useInView(0.05);

  return (
    <section className="skills" ref={ref}>
      <div className="skills-header">
        <h2 className={`reveal${inView ? " in-view" : ""}`}>
          Skills &amp; <span>Technologies</span>
        </h2>
        <p className={`reveal${inView ? " in-view" : ""} stagger-1`}>
          A toolkit built over years of real-world projects
        </p>
      </div>
      <div className="skills-list">
        {sorted.map((skill, i) => (
          <SkillCard key={skill.title} {...skill} inView={inView} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
