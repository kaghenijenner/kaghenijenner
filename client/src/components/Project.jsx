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

import { Link } from "react-router-dom";

const projects = [
  {
    id: 0,
    title: "AI-Powered Learning Platform",
    description:
      "Analyze community issues and get AI-powered mentorship for solving problems. Problem Analysis: Detect and classify community issues from images or text. AI Mentor: Get guidance through critical thinking or solution templates ",
    link: "https://jennermaximillien.streamlit.app/",
    image: AIPoweredPlatform,
  },
  {
    id: 1,
    title: "Financial Freedom App",
    description:
      "A web application that helps users to deposit cryptocurrencies, earn profitable returns, and withdraw your funds securely.",
    link: "https://financialfreedom.capital/",
    image: FinancialFreedom,
  },
  {
    id: 2,
    title: "Gown Management System",
    description:
      "A sophisticated web application designed to streamline the inventory, rental, and tracking of formal gowns for boutiques, bridal shops, or event planners. This system simplifies gown management with intuitive tools for both staff and customers.",
    link: "https://gown-management.vercel.app/",
    image: Gown,
  },
  {
    id: 3,
    title: "Doctor Appointment System",
    description:
      "This system allows patients to easily schedule, reschedule, or cancel appointments with healthcare providers, while offering doctors an efficient way to manage their schedules.",
    link: "https://doc.automendy.com/",
    image: eDoc,
  },
  {
    id: 4,
    title: "Real-Time Chat Application",
    description:
      "A dynamic, full-stack messaging platform enabling seamless real-time communication between users. Designed with modern web technologies, this app replicates core features of popular chat services while prioritizing speed, security, and simplicity.",
    link: "https://maxim-chat-app.netlify.app/login",
    image: chatApp,
  },
  {
    id: 5,
    title: "SalonHub",
    description:
      "A modern, user-friendly web application designed to simplify salon and barbershop bookings in Uganda. SalonHub connects customers with top-rated beauty professionals, enabling seamless appointment scheduling, service discovery, and business management.",
    link: "https://salonhubuganda.netlify.app/",
    image: salonHub,
  },
  {
    id: 6,
    title: "Face Recognition Attendance System",
    description:
      "A research article exploring the development and implementation of an AI-powered attendance system using facial recognition technology. Published in the Cavendish Journal of Science and Technology, this paper presents an efficient, contactless alternative to traditional attendance tracking for academic institutions and workplaces.",
    link: "https://journals.cavendish.ac.ug/index.php/cjst/article/view/12",
    image: FaceRecognition,
  },
  {
    id: 7,
    title: "Cavendish Canteen – Campus Food Ordering System",
    description:
      "A digital canteen solution designed to streamline food ordering for students and staff. This platform offers a hassle-free way to browse menus, and place orders from a smartphone or computer.",
    link: "https://cavendish-canteen.netlify.app/",
    image: cavendishCanteen,
  },
  {
    id: 8,
    title: "Modern Chat App Interface (UI/UX Demo)",
    description:
      "A clean, interactive frontend prototype for a real-time messaging application, designed with a focus on intuitive user experience and visual appeal. This interface showcases core chat functionalities with a polished, responsive layout.",
    link: "https://maximdoccure.netlify.app/",
    image: ChatAppInterface,
  },
  {
    id: 9,
    title: "MovieLand – Discover & Explore Films",
    description:
      "A dynamic movie browsing web app that lets users explore trending, upcoming, and classic films with ease. Powered by the TMDB API, MovieLand delivers a seamless cinematic experience with rich details and intuitive navigation.",
    link: "https://maximmovieland.netlify.app/",
    image: MovieLand,
  },
  {
    id: 10,
    title: "JavaScript Birthday Wisher",
    description:
      "A delightful web app that creates personalized birthday celebrations in the browser! This interactive experience combines animations, music, and custom messages to deliver unforgettable digital birthday wishes.",
    link: "https://happy-birthday-doo-wan.netlify.app/",
    image: Birthday,
  },
  {
    id: 11,
    title: "Repos Céleste",
    description:
      "A web app for Repos Céleste, a platform that allows users to access the details of their dead loved ones. This application provides a respectful and user-friendly interface for managing and honoring the memories of those who have passed away.",
    link: "https://reposceleste.netlify.app/",
    image: ReposCeleste,
  },
  {
    id: 12,
    title: "Waste Management Robot",
    description:
      "An innovative robotic solution designed to automate waste collection and sorting in urban environments. This project aims to enhance recycling efforts and reduce human labor in waste management.",
    link: "https://youtu.be/m3AqkR7lW1I",
    image: WasteManagement,
  },
];

const Project = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="cards">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link
              className="link"
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
