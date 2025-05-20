import React from 'react';
import eDoc from "../assets/edoc.jpg";
import chatApp from "../assets/chatApp.png";
import salonHub from '../assets/salonhub.png';
import cavendishCanteen from "../assets/cavendish-canteen.jpeg";
import ChatAppInterface from "../assets/doccure.jpeg";
import MovieLand from "../assets/movieland.png";
import Birthday from "../assets/happy-birthday.avif";
import Gown from "../assets/gown.jpg";
import FaceRecognition from "../assets/facerecognition.png";

import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: 'Gown Management System',
        description: 'A sophisticated web application designed to streamline the inventory, rental, and tracking of formal gowns for boutiques, bridal shops, or event planners. This system simplifies gown management with intuitive tools for both staff and customers.',
        link: 'https://gown-management.vercel.app/',
        image: Gown,
    },
    {
        id: 2,
        title: 'Doctor Appointment System',
        description: 'This system allows patients to easily schedule, reschedule, or cancel appointments with healthcare providers, while offering doctors an efficient way to manage their schedules.',
        link: 'https://doc.automendy.com/',
        image: eDoc,
    },
    {
        id: 3,
        title: 'Real-Time Chat Application',
        description: 'A dynamic, full-stack messaging platform enabling seamless real-time communication between users. Designed with modern web technologies, this app replicates core features of popular chat services while prioritizing speed, security, and simplicity.',
        link: 'https://maxim-chat-app.netlify.app/login',
        image: chatApp
    },
    {
        id: 4,
        title: 'SalonHub',
        description: 'A modern, user-friendly web application designed to simplify salon and barbershop bookings in Uganda. SalonHub connects customers with top-rated beauty professionals, enabling seamless appointment scheduling, service discovery, and business management.',
        link: 'https://salonhubuganda.netlify.app/',
        image: salonHub
    },
    {
        id: 5,
        title: 'Face Recognition Attendance System',
        description: 'A research article exploring the development and implementation of an AI-powered attendance system using facial recognition technology. Published in the Cavendish Journal of Science and Technology, this paper presents an efficient, contactless alternative to traditional attendance tracking for academic institutions and workplaces.',
        link: 'https://journals.cavendish.ac.ug/index.php/cjst/article/view/12',
        image: FaceRecognition
    },
    {
        id: 6,
        title: 'Cavendish Canteen – Campus Food Ordering System',
        description: 'A digital canteen solution designed to streamline food ordering for students and staff. This platform offers a hassle-free way to browse menus, and place orders from a smartphone or computer.',
        link: 'https://cavendish-canteen.netlify.app/',
        image: cavendishCanteen
    },
    {
        id: 7,
        title: 'Modern Chat App Interface (UI/UX Demo)',
        description: 'A clean, interactive frontend prototype for a real-time messaging application, designed with a focus on intuitive user experience and visual appeal. This interface showcases core chat functionalities with a polished, responsive layout.',
        link: 'https://maximdoccure.netlify.app/',
        image: ChatAppInterface
    },
    {
        id: 8,
        title: 'MovieLand – Discover & Explore Films',
        description: 'A dynamic movie browsing web app that lets users explore trending, upcoming, and classic films with ease. Powered by the TMDB API, MovieLand delivers a seamless cinematic experience with rich details and intuitive navigation.',
        link: 'https://maximmovieland.netlify.app/',
        image: MovieLand
    },
    {
        id: 9,
        title: 'JavaScript Birthday Wisher',
        description: 'A delightful web app that creates personalized birthday celebrations in the browser! This interactive experience combines animations, music, and custom messages to deliver unforgettable digital birthday wishes.',
        link: 'https://happy-birthday-doo-wan.netlify.app/',
        image: Birthday
    },
];

const Project = () => {
    return (
        <div className='projects'>
            <h1>My Projects</h1>
            <div className='cards'>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className='card'
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                        />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <Link
                        className='link'
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