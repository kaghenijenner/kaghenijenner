import "../styles/skills.scss";
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

const Skills = () => {
    const skills = [
        { img: JS, title: "JavaScript", level: 100 },
        { img: TypeScript, title: "TypeScript", level: 80 },
        { img: ReactJS, title: "React.js", level: 100 },
        { img: ReactNative, title: "React Native", level: 85 },
        { img: Nextjs, title: "Next.js", level: 90 },
        { img: Node, title: "Node.js", level: 70 },
        { img: MongoDB, title: "MongoDB", level: 90 },
        { img: HTMLCSS, title: "HTML & CSS", level: 100 },
        { img: JQuery, title: "JQuery", level: 100 },
        { img: AJAX, title: "Ajax", level: 100 },
        { img: PHP, title: "PHP", level: 100 },
        { img: MySQL, title: "MySQL", level: 100 },
        { img: Firebase, title: "Firebase", level: 80 },
        { img: Python, title: "Python", level: 80 },
        { img: PhotoShop, title: "PhotoShop", level: 90 },
        { img: Blender, title: "Blender", level: 80 },
        { img: Flutter, title: "Flutter", level: 60 },
        { img: Linux, title: "Linux", level: 100 },
        { img: Angular, title: "Angular.js", level: 50 },
        { img: WordPress, title: "WordPress", level: 100 },
    ];
    const sortedSkills = skills.sort((a, b) => b.level - a.level);
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="skills-list">
                {sortedSkills.map((skill, index) => (
                    <div key={index} className="skill">
                        <img src={skill.img} alt={skill.title} />
                        <h4>{skill.title}</h4>
                        <p className="level">
                            <span style={{ width: `${skill.level}%` }}></span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
