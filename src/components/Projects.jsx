import ProjectCard from "./ProjectCard";
import "../styles/ProjectCard.css";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      img: "/images/projects/habit-tracker.png",
      title: "Habit Tracker",
      description:
        "A full-stack habit tracking app that helps users build and maintain daily routines, with authentication and persistent progress tracking.",
      role: "Solo project built the frontend, REST API, auth system and database from scratch.",
      tech: [
        { name: "React", icon: "https://cdn.simpleicons.org/react" },
        { name: "Vite", icon: "https://cdn.simpleicons.org/vite" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
        {
          name: "Express",
          icon: "https://cdn.simpleicons.org/express/ffffff",
        },
      ],
      highlight:
        "Started with vanilla JS, then rebuilt the frontend in React as my first project with the framework.",
      links: {
        github: "https://github.com/bytequestlog-spec/habit-tracker.git",
        live: "https://habittracker-six-rho.vercel.app/",
      },
    },
    {
      id: 2,
      img: "/images/projects/maison-elegance.jpg",
      title: "Maison Elegance",
      description:
        "A luxury car dealership website built as a group project, with a full cart, checkout, and order management system.",
      role: "Owned all cart-related functionality and the admin orders page in a team of developers.",
      tech: [
        { name: "Html", icon: "https://cdn.simpleicons.org/html5" },
        { name: "Css", icon: "https://cdn.simpleicons.org/css/663399" },
        {
          name: "JavaScript",
          icon: "https://cdn.simpleicons.org/javascript",
        },
        { name: "Php", icon: "https://cdn.simpleicons.org/php" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      ],
      highlight:
        "Rewrote the cart and checkout flow to match the real database schema, and built a floating cart sidebar and post-purchase confirmation page.",
      links: {
        github:
          "https://github.com/bytequestlog-spec/uni-ecommerce-project.git",
        live: "/images/maison-elegance.mp4",
      },
    },
  ];
  return (
    <section id="projects" className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
export default Projects;
