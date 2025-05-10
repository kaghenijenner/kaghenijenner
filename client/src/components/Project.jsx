import React from 'react';
import eDoc from "../assets/edoc.jpg";
import chatApp from "../assets/chatApp.png";
import salonHub from '../assets/salonhub.png';
import cavendishCanteen from "../assets/cavendish-canteen.jpeg";

const projects = [
    {
        id: 1,
        title: 'Doctor Appointment System',
        description: 'This system allows patients to easily schedule, reschedule, or cancel appointments with healthcare providers, while offering doctors an efficient way to manage their schedules.',
        link: 'https://doc.automendy.com/',
        image: eDoc,
    },
    {
        id: 2,
        title: 'Real-Time Chat Application',
        description: 'A dynamic, full-stack messaging platform enabling seamless real-time communication between users. Designed with modern web technologies, this app replicates core features of popular chat services while prioritizing speed, security, and simplicity.',
        link: 'https://maxim-chat-app.netlify.app/login',
        image: chatApp
    },
    {
        id: 3,
        title: 'SalonHub',
        description: 'A modern, user-friendly web application designed to simplify salon and barbershop bookings in Uganda. SalonHub connects customers with top-rated beauty professionals, enabling seamless appointment scheduling, service discovery, and business management.',
        link: 'https://salonhubuganda.netlify.app/',
        image: salonHub
    },
    {
        id: 4,
        title: 'Cavendish Canteen – Campus Food Ordering System',
        description: 'A digital canteen solution designed to streamline food ordering for students and staff. This platform offers a hassle-free way to browse menus, and place orders from a smartphone or computer.',
        link: 'https://cavendish-canteen.netlify.app/',
        image: cavendishCanteen
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
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                
                            }}
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;