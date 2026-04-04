import { useEffect, useState } from "react";
import "../styles/certificates.scss";
import GoogleBackend from "../assets/certificates/GoogleBackend.png";
import GoogleCloudcomputing from "../assets/certificates/GoogleCloudComputing.png";
import GoogleDevOps from "../assets/certificates/GoogleDevOps.png";
import GoogleJavaScriptReact from "../assets/certificates/GoogleJavaScriptReact.png";
import GooglePythonOpenCV from "../assets/certificates/GooglePythonOpenCV.png";
import GoogleTinderClone from "../assets/certificates/GoogleTinderClone.png";
import MicrosoftBackend from "../assets/certificates/MicrosoftBackend.png";
import MicrosoftCloudComputing from "../assets/certificates/MicrosoftCloudComputing.png";
import MicrosoftDevOps from "../assets/certificates/MicrosoftDevOps.png";
import MicrosoftJavaScriptReact from "../assets/certificates/MicrosoftJavaScriptReact.png";
import MicrosoftPythonOpenCV from "../assets/certificates/MicrosoftPythonOpenCV.png";
import MicrosoftTinderClone from "../assets/certificates/MicrosoftTinderClone.png";

const certificates = [
  {
    id: 1,
    title: "Backend Web Development using JavaScript, Node.js, and Express",
    credentials: [
      {
        issuer: "Developer Student Clubs by Google",
        image: GoogleBackend,
        link: "https://www.cert.devtown.in/verify/ZoMYSF",
      },
      {
        issuer: "Microsoft Learn Student Ambassador",
        image: MicrosoftBackend,
        link: "https://www.cert.devtown.in/verify/Z29d12d",
      },
    ],
    skills: ["Backend Development", "Node.js", "Express", "API Design"],
  },
  {
    id: 2,
    title: "Hands-on Cloud Computing with AWS",
    credentials: [
      {
        issuer: "Developer Student Clubs by Google",
        image: GoogleCloudcomputing,
        link: "https://www.cert.devtown.in/verify/13NJJz",
      },
      {
        issuer: "Microsoft Learn Student Ambassador",
        image: MicrosoftCloudComputing,
        link: "https://www.cert.devtown.in/verify/Z2bPMnc",
      },
    ],
    skills: ["Cloud Computing", "AWS"],
  },
  {
    id: 3,
    title: "Learn DevOps for Web Development",
    credentials: [
      {
        issuer: "Developer Student Clubs by Google",
        image: GoogleDevOps,
        link: "https://www.cert.devtown.in/verify/1OMbY5",
      },
      {
        issuer: "Microsoft Learn Student Ambassador",
        image: MicrosoftDevOps,
        link: "https://www.cert.devtown.in/verify/ZCz5wz",
      },
    ],
    skills: ["DevOps"],
  },
  {
    id: 4,
    title: "JavaScript & React.js",
    credentials: [
      {
        issuer: "Developer Student Clubs by Google",
        image: GoogleJavaScriptReact,
        link: "https://www.cert.devtown.in/verify/1UuGJB",
      },
      {
        issuer: "Microsoft Learn Student Ambassador",
        image: MicrosoftJavaScriptReact,
        link: "https://www.cert.devtown.in/verify/Z13U6P7",
      },
    ],
    skills: ["JavaScript", "React.js"],
  },
  {
    id: 5,
    title: "Harry Potter Invisibility Cloak with Python and OpenCV",
    credentials: [
      {
        issuer: "Developer Student Clubs by Google",
        image: GooglePythonOpenCV,
        link: "https://www.cert.devtown.in/verify/ZrusJA",
      },
      {
        issuer: "Microsoft Learn Student Ambassador",
        image: MicrosoftPythonOpenCV,
        link: "https://www.cert.devtown.in/verify/Z1OTzE4",
      },
    ],
    skills: ["Python", "OpenCV", "Computer Vision"],
  },
  {
    id: 6,
    title: "Tinder Clone using HTML & CSS",
    credentials: [
      {
        issuer: "Developer Student Clubs by Google",
        image: GoogleTinderClone,
        link: "https://www.cert.devtown.in/verify/24zuvz",
      },
      {
        issuer: "Microsoft Learn Student Ambassador",
        image: MicrosoftTinderClone,
        link: "https://www.cert.devtown.in/verify/geks9",
      },
    ],
    skills: ["HTML", "CSS"],
  },
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section className="certificates-page">
      <div className="certificates-hero">
        <h1>My Certificates</h1>
        <p>
          A curated list of certifications and learning milestones that support
          my work across software engineering, cloud, and AI.
        </p>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <article className="certificate-card" key={certificate.id}>
            <h2>{certificate.title}</h2>

            <div className="certificate-previews">
              {certificate.credentials.map((credential) => (
                <div
                  className="certificate-preview-item"
                  key={`${certificate.id}-${credential.issuer}`}
                >
                  <p>{credential.issuer}</p>
                  <button
                    type="button"
                    className="certificate-image-button"
                    onClick={() =>
                      setSelectedImage({
                        src: credential.image,
                        alt: `${certificate.title} by ${credential.issuer}`,
                      })
                    }
                    aria-label={`Open large view for ${certificate.title} by ${credential.issuer}`}
                  >
                    <img
                      src={credential.image}
                      alt={`${certificate.title} by ${credential.issuer}`}
                      loading="lazy"
                    />
                  </button>

                  {credential.link ? (
                    <a
                      href={credential.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View credential
                    </a>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="certificate-skills">
              {certificate.skills.map((skill) => (
                <span key={`${certificate.id}-${skill}`}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {selectedImage ? (
        <div
          className="certificate-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            Close
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
};

export default Certificates;
