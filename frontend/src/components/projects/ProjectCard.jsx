import React from "react";
import "./ProjectCard.scss";

const projects = [
  {
    title: "Ecommerce Web App",
    imagURL:
      "https://cdn.dribbble.com/userupload/10504693/file/original-4a2c641e56bcafc1caa20f33210890b2.png?resize=400x300&vertical=center",
    technologies: ["Spring Boot", "ReactJS", "SASS", "Redux", "MongoDB"],
    sourcecodeURL: "/",
  },
  {
    title: "Realtime Chat Application",
    imagURL:
      "https://cdn.dribbble.com/users/3112949/screenshots/20216136/admin-dashboard-chat-messenger-page-web-ui-template-504606.png",
    technologies: ["Spring Boot", "ReactJS", "RabbitMQ"],
    sourcecodeURL: "/",
  },
  {
    title: "Quiz App",
    imagURL:
      "https://cdn5.f-cdn.com/contestentries/1311283/19555963/5ae75a53640c7_thumb900.jpg",
    technologies: ["ReactJS", "Redux", "API"],
    sourcecodeURL: "/",
  },
  {
    title: "Library Management System",
    imagURL:
      "https://www.creatrixcampus.com/sites/default/files/2022-10/One-click_membership.png",
    technologies: ["Spring Boot", "ReactJS", "PostgreSQL"],
    sourcecodeURL: "/",
  },
  {
    title: "Blog Website",
    imagURL:
      "https://d3mm2s9r15iqcv.cloudfront.net/en/wp-content/uploads/old-blog-uploads/six-two-2-1.jpg",
    technologies: ["ReactJS", "Redux"],
    sourcecodeURL: "/",
  },
];

const ProjectCard = () => {
  return (
    <>
      <div className="projects-wrapper">
        {projects.map((obj, key) => (
          <article key={key} className="projects-card">
            <figure>
              <img src={obj.imagURL} alt="" />
            </figure>
            <div className="project-details">
              <div>
                <h3>{obj.title}</h3>
                <p>
                  {obj.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </p>
                <a href="/">Source Code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
