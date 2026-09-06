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
        "A full-stack habit tracking app that helps users build and maintain daily routines, with authentication and persistent progress tracking",
      role: "Solo project built the frontend, REST API, auth system and database from scratch",
      tech: [
        { name: "React", icon: "/images/tech/react.webp" },
        { name: "Vite", icon: "/images/tech/vite.webp" },
        { name: "Node.js", icon: "/images/tech/nodejs.webp" },
        { name: "PostgreSQL", icon: "/images/tech/psql.webp" },
      ],
      highlight:
        "Started with vanilla JS, then rebuilt the frontend in React as my first React project",
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
        "A luxury car dealership website built as a group project, with a full cart, checkout, and order management system",
      role: "Owned all cart-related functionality and the admin orders page in a team of developers",
      tech: [
        { name: "Html", icon: "/images/tech/html.webp" },
        { name: "Css", icon: "/images/tech/css.webp" },
        { name: "JavaScript", icon: "/images/tech/js.webp" },
        { name: "Php", icon: "/images/tech/php.webp" },
        { name: "MySQL", icon: "/images/tech/mysql.webp" },
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
