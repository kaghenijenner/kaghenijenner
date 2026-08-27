"use client";
import "../styles/projects.scss";
import { useState } from "react";
import useInView from "../hooks/useInView";

const projects = [
  {
    id: 0,
    title: "AI-Powered Learning Platform",
    description:
      "Analyze community issues and get AI-powered mentorship for solving problems. Detect and classify issues from images or text.",
    link: "https://jennermaximillien.streamlit.app/",
    image: "/projects/aipoweredplatform.png",
    tags: ["Python", "AI/ML", "Streamlit"],
    category: "AI",
  },
  {
    id: 1,
    title: "Financial Freedom App",
    description:
      "Web application for depositing cryptocurrencies, earning profitable returns, and withdrawing funds securely.",
    link: "https://financialfreedom.capital/",
    image: "/projects/financialfreedom.jpeg",
    tags: ["PHP", "MySQL", "Crypto"],
    category: "Web",
  },
  {
    id: 2,
    title: "ACE Business Intelligence",
    description:
      "ACE Business Intelligence transforms how you run events, from guest registration and QR check-in to live dashboards and personalised WhatsApp messages. Everything in one platform.",
    link: "https://acebii.com/",
    image: "/projects/ace.svg",
    tags: ["Next.js", "MySQL", "API"],
    category: "Web",
  },
  {
    id: 3,
    title: "GarageLink",
    description:
      "GarageLink connects drivers in trouble with the nearest verified garages and mobile mechanics with live tracking, chat, and reviews.",
    link: "https://garagelink.kaghenijenner.com/",
    image: "/projects/garagelink.png",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    category: "Mobile",
  },
  {
    id: 4,
    title: "Akili za Kesho",
    description:
      "A purpose-built multi-tenant platform for African universities and innovation centers to manage every aspect of their operations securely, scalably, and simply.",
    link: "https://akilizakesho.com/",
    image: "/projects/akilizakesho.png",
    tags: ["Next.js", "MongoDB", "Node.js"],
    category: "Web",
  },
  {
    id: 5,
    title: "Cavendish Innovation",
    description:
      "Ecosystem for student projects, showcase, collaborate, and manage innovative ideas with intuitive tools.",
    link: "https://cuu.kaghenijenner.com/",
    image: "/projects/cavendish.png",
    tags: ["Next.js", "MongoDB", "Node.js"],
    category: "Web",
  },
  {
    id: 6,
    title: "Dime-Order – QR Food Ordering",
    description:
      "Scan a QR code at your table, browse the menu, and place orders without waiting for a server.",
    link: "https://dimeorder.vercel.app/",
    image: "/projects/dimeorder.png",
    tags: ["React Native", "Next.js", "QR Code"],
    category: "Mobile",
  },
  {
    id: 7,
    title: "OnLeave – Leave Management",
    description:
      "Comprehensive employee leave management: request, approve, and track leave applications across organizations.",
    link: "https://onleave.kaghenijenner.com/",
    image: "/projects/onleave.svg",
    tags: ["Next.js", "Node.js", "MySQL"],
    category: "Web",
  },
  {
    id: 8,
    title: "Gown Management System",
    description:
      "Streamlined inventory, rental, and tracking of formal gowns for boutiques and event planners.",
    link: "https://gownmanagement.kaghenijenner.com/",
    image: "/projects/gown.jpg",
    tags: ["Next.js", "MongoDB", "Express"],
    category: "Web",
  },
  {
    id: 9,
    title: "Browser Music Sidebar",
    description:
      "A vscode extension that provides a sidebar for music streaming, allowing users to listen to music while coding",
    link: "https://marketplace.visualstudio.com/items?itemName=kaghenijenner.browser-music-sidebar",
    image: "/projects/browsermusicsidebar.png",
    tags: ["Node.js", "PowerShell", "TypeScript"],
    category: "VS Code Extension",
  },
  {
    id: 10,
    title: "Real-Time Chat Application",
    description:
      "Full-stack messaging platform with real-time communication, speed, security, and simplicity.",
    link: "https://maxim-chat-app.netlify.app/login",
    image: "/projects/chatApp.png",
    tags: ["React", "Socket.io", "Firebase"],
    category: "Web",
  },
  {
    id: 11,
    title: "SalonHub – Booking Platform",
    description:
      "Connect with top-rated beauty professionals in Uganda. Seamless appointment scheduling and service discovery.",
    link: "https://salonhubuganda.netlify.app/",
    image: "/projects/salonhub.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
  },
  {
    id: 12,
    title: "Face Recognition Attendance",
    description:
      "AI-powered attendance system using facial recognition. Published in the Cavendish Journal of Science and Technology.",
    link: "https://journals.cavendish.ac.ug/index.php/cjst/article/view/12",
    image: "/projects/facerecognition.png",
    tags: ["Python", "OpenCV", "AI"],
    category: "AI",
  },
  {
    id: 13,
    title: "Cavendish Canteen",
    description:
      "Digital canteen solution: browse menus and place orders from smartphone or computer for campus food.",
    link: "https://cavendish-canteen.netlify.app/",
    image: "/projects/cavendish-canteen.jpeg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
  },
  {
    id: 14,
    title: "Chat App UI/UX Demo",
    description:
      "Clean, interactive frontend prototype for real-time messaging with focus on intuitive UX and visual appeal.",
    link: "https://maximdoccure.netlify.app/",
    image: "/projects/doccure.jpeg",
    tags: ["HTML", "CSS", "UI/UX"],
    category: "Web",
  },
  {
    id: 15,
    title: "MovieLand – Discover Films",
    description:
      "Dynamic movie browsing app powered by TMDB API. Explore trending, upcoming, and classic films.",
    link: "https://maximmovieland.netlify.app/",
    image: "/projects/movieland.png",
    tags: ["React", "TMDB API", "CSS"],
    category: "Web",
  },
  {
    id: 16,
    title: "JavaScript Birthday Wisher",
    description:
      "Interactive web app with animations and music delivering personalized birthday celebrations in the browser.",
    link: "https://happy-birthday-doo-wan.netlify.app/",
    image: "/projects/happy-birthday.avif",
    tags: ["JavaScript", "CSS", "Canvas"],
    category: "Web",
  },
  {
    id: 17,
    title: "Repos Céleste",
    description:
      "Platform for accessing and honoring memories of loved ones with a respectful, user-friendly interface.",
    link: "https://reposceleste.netlify.app/",
    image: "/projects/reposceleste.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
  },
  {
    id: 18,
    title: "Waste Management Robot",
    description:
      "Robotic solution automating waste collection and sorting in urban environments to enhance recycling.",
    link: "https://youtu.be/m3AqkR7lW1I",
    image: "/projects/wastemanagement.png",
    tags: ["Robotics", "Blender", "Design"],
    category: "Hardware",
  },
];

const FILTERS = ["All", "Mobile", "Web", "AI", "Hardware", "VS Code Extension"];

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
