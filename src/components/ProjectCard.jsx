import { useState } from "react";

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div>
        <img src={project.img}></img>
        <div>{project.title}</div>
        {!isExpanded && (
          <>
            <div onClick={() => setIsExpanded(!isExpanded)}>Read more ...</div>
          </>
        )}
        {isExpanded && (
          <>
            <div>{project.description}</div>
            <div>{project.role}</div>
            {project.tech.map((tech) => (
              <div key={tech.name}>
                <img alt={tech.name} src={tech.icon}></img>

                <span>{tech.name}</span>
              </div>
            ))}

            <div>{project.highlight}</div>
            <a href={project.links.github}>GitHub</a>
            {project.links.live && <a href={project.links.live}>Live Demo</a>}
          </>
        )}
      </div>
    </>
  );
}

export default ProjectCard;
