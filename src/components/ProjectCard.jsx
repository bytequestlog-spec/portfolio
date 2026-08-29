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
            <div>{project.tech}</div>
            <div>{project.highlight}</div>
            <div>{project.link}</div>
          </>
        )}
      </div>
    </>
  );
}

export default ProjectCard;
