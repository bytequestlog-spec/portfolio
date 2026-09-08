import { useState } from "react";
import Modal from "./Modal";
import "../styles/ProjectCard.css";

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="card-container" onClick={() => setIsExpanded(true)}>
        <img src={project.img} className="project-img" alt={project.title} />
        <div className="title">{project.title}</div>
        <div className="read-more">Read more ...</div>
      </div>

      {isExpanded && (
        <Modal onClose={() => setIsExpanded(false)}>
          <img src={project.img} className="modal-img" alt={project.title} />
          <h2 className="modal-title">{project.title}</h2>
          <div className="view-buttons">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="https://cdn.simpleicons.org/github/ffffff"
                className="view-btn-icon"
                alt="GitHub"
              />
              View code
            </a>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/images/icons/demo.webp"
                className="view-btn-icon"
                alt="Live demo"
              />
              View demo
            </a>
          </div>
          <div className="desc">{project.description}</div>
          <div className="role">{project.role}</div>
          <div className="highlight">{project.highlight}</div>
          <div className="tech-row">
            {project.tech.map((tech) => (
              <div key={tech.name} className="tech">
                <img alt={tech.name} src={tech.icon} className="tech-icon" />
              </div>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
}

export default ProjectCard;
