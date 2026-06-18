import eDoc from "../assets/edoc.jpg";
import chatApp from "../assets/chatApp.png";
import salonHub from "../assets/salonhub.png";
import cavendishCanteen from "../assets/cavendish-canteen.jpeg";
import ChatAppInterface from "../assets/doccure.jpeg";
import MovieLand from "../assets/movieland.png";
import Birthday from "../assets/happy-birthday.avif";
import Gown from "../assets/gown.jpg";
import FaceRecognition from "../assets/facerecognition.png";
import ReposCeleste from "../assets/reposceleste.jpg";
import WasteManagement from "../assets/wastemanagement.png";
import FinancialFreedom from "../assets/financialfreedom.jpeg";
import AIPoweredPlatform from "../assets/aipoweredplatform.png";
import Cavendish from "../assets/cavendish.png";
import DimeOrder from "../assets/dimeorder.png";
import OnLeave from "../assets/onleave.svg";
import { useState } from "react";
import useInView from "../hooks/useInView";

const projects = [
  {
    id: 0,
    title: "AI-Powered Learning Platform",
    description: "Analyze community issues and get AI-powered mentorship for solving problems. Detect and classify issues from images or text.",
    link: "https://jennermaximillien.streamlit.app/",
    image: AIPoweredPlatform,
    tags: ["Python", "AI/ML", "Streamlit"],
    category: "AI",
  },
  {
    id: 1,
    title: "Financial Freedom App",
    description: "Web application for depositing cryptocurrencies, earning profitable returns, and withdrawing funds securely.",
    link: "https://financialfreedom.capital/",
    image: FinancialFreedom,
    tags: ["React", "Node.js", "Crypto"],
    category: "Web",
  },
  {
    id: 2,
    title: "Cavendish Innovation",
    description: "Ecosystem for student projects — showcase, collaborate, and manage innovative ideas with intuitive tools.",
    link: "https://cavendish-innovation.vercel.app/",
    image: Cavendish,
    tags: ["React", "MongoDB", "Node.js"],
    category: "Web",
  },
  {
    id: 3,
    title: "Dime-Order – QR Food Ordering",
    description: "Scan a QR code at your table, browse the menu, and place orders without waiting for a server.",
    link: "https://dimeorder.vercel.app/",
    image: DimeOrder,
    tags: ["React", "QR Code", "Firebase"],
    category: "Web",
  },
  {
    id: 4,
    title: "OnLeave – Leave Management",
    description: "Comprehensive employee leave management: request, approve, and track leave applications across organizations.",
    link: "https://onleave-cuu.vercel.app/",
    image: OnLeave,
    tags: ["React", "Node.js", "MySQL"],
    category: "Web",
  },
  {
    id: 5,
    title: "Gown Management System",
    description: "Streamlined inventory, rental, and tracking of formal gowns for boutiques and event planners.",
    link: "https://gown-management.vercel.app/",
    image: Gown,
    tags: ["React", "MongoDB", "Express"],
    category: "Web",
  },
  {
    id: 6,
    title: "Doctor Appointment System",
    description: "Patients schedule, reschedule, or cancel appointments. Doctors manage their schedules efficiently.",
    link: "https://doc.automendy.com/",
    image: eDoc,
    tags: ["React", "Node.js", "MySQL"],
    category: "Web",
  },
  {
    id: 7,
    title: "Real-Time Chat Application",
    description: "Full-stack messaging platform with real-time communication, speed, security, and simplicity.",
    link: "https://maxim-chat-app.netlify.app/login",
    image: chatApp,
    tags: ["React", "Socket.io", "Node.js"],
    category: "Web",
  },
  {
    id: 8,
    title: "SalonHub – Booking Platform",
    description: "Connect with top-rated beauty professionals in Uganda. Seamless appointment scheduling and service discovery.",
    link: "https://salonhubuganda.netlify.app/",
    image: salonHub,
    tags: ["React", "Firebase", "Maps"],
    category: "Web",
  },
  {
    id: 9,
    title: "Face Recognition Attendance",
    description: "AI-powered attendance system using facial recognition. Published in the Cavendish Journal of Science and Technology.",
    link: "https://journals.cavendish.ac.ug/index.php/cjst/article/view/12",
    image: FaceRecognition,
    tags: ["Python", "OpenCV", "AI"],
    category: "AI",
  },
  {
    id: 10,
    title: "Cavendish Canteen",
    description: "Digital canteen solution: browse menus and place orders from smartphone or computer for campus food.",
    link: "https://cavendish-canteen.netlify.app/",
    image: cavendishCanteen,
    tags: ["React", "Node.js", "MySQL"],
    category: "Web",
  },
  {
    id: 11,
    title: "Chat App UI/UX Demo",
    description: "Clean, interactive frontend prototype for real-time messaging with focus on intuitive UX and visual appeal.",
    link: "https://maximdoccure.netlify.app/",
    image: ChatAppInterface,
    tags: ["React", "SCSS", "UI/UX"],
    category: "Web",
  },
  {
    id: 12,
    title: "MovieLand – Discover Films",
    description: "Dynamic movie browsing app powered by TMDB API. Explore trending, upcoming, and classic films.",
    link: "https://maximmovieland.netlify.app/",
    image: MovieLand,
    tags: ["React", "TMDB API", "CSS"],
    category: "Web",
  },
  {
    id: 13,
    title: "JavaScript Birthday Wisher",
    description: "Interactive web app with animations and music delivering personalized birthday celebrations in the browser.",
    link: "https://happy-birthday-doo-wan.netlify.app/",
    image: Birthday,
    tags: ["JavaScript", "CSS", "Canvas"],
    category: "Web",
  },
  {
    id: 14,
    title: "Repos Céleste",
    description: "Platform for accessing and honoring memories of loved ones with a respectful, user-friendly interface.",
    link: "https://reposceleste.netlify.app/",
    image: ReposCeleste,
    tags: ["React", "Firebase", "UX"],
    category: "Web",
  },
  {
    id: 15,
    title: "Waste Management Robot",
    description: "Robotic solution automating waste collection and sorting in urban environments to enhance recycling.",
    link: "https://youtu.be/m3AqkR7lW1I",
    image: WasteManagement,
    tags: ["Robotics", "Arduino", "Python"],
    category: "Hardware",
  },
];

const FILTERS = ["All", "Web", "AI", "Hardware"];

const ProjectCard = ({ project, inView, index }) => (
  <article
    className={`card reveal${inView ? " in-view" : ""}`}
    style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
  >
    <div className="card-image">
      <img src={project.image} alt={project.title} loading="lazy" />
      <div className="card-overlay">
        <p>{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="overlay-btn"
        >
          View Project →
        </a>
      </div>
    </div>
    <div className="card-body">
      <h3>{project.title}</h3>
      <div className="card-tags">
        {project.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  </article>
);

const Project = () => {
  const [filter, setFilter] = useState("All");
  const [ref, inView] = useInView(0.05);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="projects" ref={ref}>
      <div className={`projects-header reveal${inView ? " in-view" : ""}`}>
        <h1>
          My <span>Projects</span>
        </h1>
        <p>Real-world systems, applications, and solutions I&apos;ve built</p>
      </div>

      <div className={`filter-tabs reveal${inView ? " in-view" : ""} stagger-1`}>
        {FILTERS.map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="cards">
        {visible.map((project, i) => (
          <ProjectCard key={project.id} project={project} inView={inView} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Project;
