import { useState } from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="card-container">
        <img src={project.img} className="project-img"></img>
        <div className="title">{project.title}</div>
        {!isExpanded && (
          <>
            <div
              onClick={() => setIsExpanded(!isExpanded)}
              className="read-more"
            >
              Read more ...
            </div>
          </>
        )}
        <div className={`expand-wrapper ${isExpanded ? "expanded" : ""}`}>
          <div className="expand-inner">
            <div className="desc">{project.description}</div>
            <div className="role">{project.role}</div>
            {project.tech.map((tech) => (
              <div key={tech.name} className="tech">
                <img
                  alt={tech.name}
                  src={tech.icon}
                  className="tech-icon"
                ></img>

                <span className="tech-name">{tech.name}</span>
              </div>
            ))}

            <div className="highlight">{project.highlight}</div>
            <a href={project.links.github} className="link">
              GitHub repo
            </a>
            {project.links.live && (
              <a href={project.links.live} className="link">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
