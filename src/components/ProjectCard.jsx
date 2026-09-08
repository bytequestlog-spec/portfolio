import { useState } from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className="card-container"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img
          src={project.img}
          className="project-img"
          alt={project.title}
        ></img>
        <div className="title">{project.title}</div>
        {!isExpanded && (
          <>
            <div className="read-more">Read more ...</div>
          </>
        )}
        <div className={`expand-wrapper ${isExpanded ? "expanded" : ""}`}>
          <div className="expand-inner">
            <div className="view-buttons">
              <a
                href={project.links.github}
                className="view-btn"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/icons/github.webp"
                  className="view-btn-icon"
                  alt="Github"
                ></img>
                View code
              </a>
              <a
                href={project.links.live}
                className="view-btn"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/icons/demo.webp"
                  className="view-btn-icon"
                  alt="Live demo"
                ></img>
                View demo
              </a>
            </div>
            <div className="desc">{project.description}</div>
            <div className="role">{project.role}</div>
            <div className="highlight">{project.highlight}</div>
            <div className="tech-row">
              {project.tech.map((tech) => (
                <div key={tech.name} className="tech">
                  <img
                    alt={tech.name}
                    src={tech.icon}
                    className="tech-icon"
                  ></img>
                </div>
              ))}
            </div>
            <div className="read-less">Read less </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
