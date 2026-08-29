import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      img: "",
      title: "Habit Tracker",
      description: "",
      role: "",
      tech: "",
      highlight: "",
      link: "",
    },
  ];
  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project}></ProjectCard>
      ))}
    </>
  );
}
export default Projects;
