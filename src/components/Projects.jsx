import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      img: null,
      title: "Habit Tracker",
      description: "",
      role: "",
      tech: [
        { name: "React", icon: "/images/tech/react.svg" },
        { name: "Node.js", icon: "nodejs.svg" },
      ],
      highlight: "",
      links: { github: "", live: "" },
    },
  ];
  return (
    <section id="projects">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
export default Projects;
