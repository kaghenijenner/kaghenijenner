"use client";
import "../styles/projects.scss";
import { useState } from "react";
import useInView from "../hooks/useInView";

const projects = [
  {
    id: 0,
    title: "AI-Powered Learning Platform",
    description: "Analyze community issues and get AI-powered mentorship for solving problems. Detect and classify issues from images or text.",
    link: "https://jennermaximillien.streamlit.app/",
    image: "/projects/aipoweredplatform.png",
    tags: ["Python", "AI/ML", "Streamlit"],
    category: "AI",
  },
  {
    id: 1,
    title: "Financial Freedom App",
    description: "Web application for depositing cryptocurrencies, earning profitable returns, and withdrawing funds securely.",
    link: "https://financialfreedom.capital/",
    image: "/projects/financialfreedom.jpeg",
    tags: ["React", "Node.js", "Crypto"],
    category: "Web",
  },
  {
    id: 2,
    title: "Akili za Kesho",
    description: "A purpose-built multi-tenant platform for African universities and innovation centers to manage every aspect of their operations securely, scalably, and simply.",
    link: "https://akilizakesho.jennermaxim.com/",
    image: "/projects/akilizakesho.png",
    tags: ["Next.js", "MongoDB", "Node.js"],
    category: "Web",
  },
  {
    id: 3,
    title: "Cavendish Innovation",
    description: "Ecosystem for student projects, showcase, collaborate, and manage innovative ideas with intuitive tools.",
    link: "https://cuu.jennermaxim.com/",
    image: "/projects/cavendish.png",
    tags: ["Next.js", "MongoDB", "Node.js"],
    category: "Web",
  },
  {
    id: 4,
    title: "Dime-Order – QR Food Ordering",
    description: "Scan a QR code at your table, browse the menu, and place orders without waiting for a server.",
    link: "https://dimeorder.vercel.app/",
    image: "/projects/dimeorder.png",
    tags: ["React", "QR Code", "Firebase"],
    category: "Mobile",
  },
  {
    id: 5,
    title: "OnLeave – Leave Management",
    description: "Comprehensive employee leave management: request, approve, and track leave applications across organizations.",
    link: "https://onleave-cuu.vercel.app/",
    image: "/projects/onleave.svg",
    tags: ["React", "Node.js", "MySQL"],
    category: "Web",
  },
  {
    id: 6,
    title: "Gown Management System",
    description: "Streamlined inventory, rental, and tracking of formal gowns for boutiques and event planners.",
    link: "https://gown-management.vercel.app/",
    image: "/projects/gown.jpg",
    tags: ["React", "MongoDB", "Express"],
    category: "Web",
  },
  {
    id: 7,
    title: "Doctor Appointment System",
    description: "Patients schedule, reschedule, or cancel appointments. Doctors manage their schedules efficiently.",
    link: "https://doc.automendy.com/",
    image: "/projects/edoc.jpg",
    tags: ["React", "Node.js", "MySQL"],
    category: "Web",
  },
  {
    id: 8,
    title: "Real-Time Chat Application",
    description: "Full-stack messaging platform with real-time communication, speed, security, and simplicity.",
    link: "https://maxim-chat-app.netlify.app/login",
    image: "/projects/chatApp.png",
    tags: ["React", "Socket.io", "Node.js"],
    category: "Web",
  },
  {
    id: 9,
    title: "SalonHub – Booking Platform",
    description: "Connect with top-rated beauty professionals in Uganda. Seamless appointment scheduling and service discovery.",
    link: "https://salonhubuganda.netlify.app/",
    image: "/projects/salonhub.png",
    tags: ["React", "Firebase", "Maps"],
    category: "Web",
  },
  {
    id: 10,
    title: "Face Recognition Attendance",
    description: "AI-powered attendance system using facial recognition. Published in the Cavendish Journal of Science and Technology.",
    link: "https://journals.cavendish.ac.ug/index.php/cjst/article/view/12",
    image: "/projects/facerecognition.png",
    tags: ["Python", "OpenCV", "AI"],
    category: "AI",
  },
  {
    id: 11,
    title: "Cavendish Canteen",
    description: "Digital canteen solution: browse menus and place orders from smartphone or computer for campus food.",
    link: "https://cavendish-canteen.netlify.app/",
    image: "/projects/cavendish-canteen.jpeg",
    tags: ["React", "Node.js", "MySQL"],
    category: "Web",
  },
  {
    id: 12,
    title: "Chat App UI/UX Demo",
    description: "Clean, interactive frontend prototype for real-time messaging with focus on intuitive UX and visual appeal.",
    link: "https://maximdoccure.netlify.app/",
    image: "/projects/doccure.jpeg",
    tags: ["React", "SCSS", "UI/UX"],
    category: "Web",
  },
  {
    id: 13,
    title: "MovieLand – Discover Films",
    description: "Dynamic movie browsing app powered by TMDB API. Explore trending, upcoming, and classic films.",
    link: "https://maximmovieland.netlify.app/",
    image: "/projects/movieland.png",
    tags: ["React", "TMDB API", "CSS"],
    category: "Web",
  },
  {
    id: 14,
    title: "JavaScript Birthday Wisher",
    description: "Interactive web app with animations and music delivering personalized birthday celebrations in the browser.",
    link: "https://happy-birthday-doo-wan.netlify.app/",
    image: "/projects/happy-birthday.avif",
    tags: ["JavaScript", "CSS", "Canvas"],
    category: "Web",
  },
  {
    id: 15,
    title: "Repos Céleste",
    description: "Platform for accessing and honoring memories of loved ones with a respectful, user-friendly interface.",
    link: "https://reposceleste.netlify.app/",
    image: "/projects/reposceleste.jpg",
    tags: ["React", "Firebase", "UX"],
    category: "Web",
  },
  {
    id: 16,
    title: "Waste Management Robot",
    description: "Robotic solution automating waste collection and sorting in urban environments to enhance recycling.",
    link: "https://youtu.be/m3AqkR7lW1I",
    image: "/projects/wastemanagement.png",
    tags: ["Robotics", "Arduino", "Python"],
    category: "Hardware",
  },
];

const FILTERS = ["All", "Mobile", "Web", "AI", "Hardware"];

const ProjectCard = ({ project, inView, index }) => (
  <article
    className={`card reveal${inView ? " in-view" : ""}`}
    style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
  >
    <div className="card-image">
      <img src={project.image} alt={project.title} loading="lazy" />
      <div className="card-overlay" suppressHydrationWarning>
        <p>{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="overlay-btn"
          suppressHydrationWarning
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

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="projects" ref={ref}>
      <div className={`projects-header reveal${inView ? " in-view" : ""}`}>
        <h1>
          My <span>Projects</span>
        </h1>
        <p>Real-world systems, applications, and solutions I&apos;ve built</p>
      </div>

      <div
        className={`filter-tabs reveal${inView ? " in-view" : ""} stagger-1`}
      >
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
          <ProjectCard
            key={project.id}
            project={project}
            inView={inView}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
