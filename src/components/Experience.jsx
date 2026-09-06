import ExperienceItem from "./ExperienceItem.jsx";
import "../styles/ExperienceItem.css";
function Experience() {
  const experience = [
    {
      id: 1,
      title: "Web Developer",
      context: "Personal",
      dateRange: "2025 - Present",
      description:
        "Built and deployed web applications independently, taking projects from concept through development and deployment. Worked across frontend, backend, APIs, databases, authentication, and hosting.",
      featured: true,
    },
    {
      id: 2,
      title: "Private Tutor",
      context: "Freelance",
      dateRange: "2025 - 2026",
      description:
        "Provided one-on-one tutoring in mathematics and physics to a baccalaureate student, adapting explanations to their needs and helping them prepare for final examinations.",
      featured: true,
    },
    {
      id: 3,
      title: "Crochet Artist & Seller",
      context: "Personal",
      dateRange: "2023 - 2024",
      description:
        "Designed and sold handmade crochet pieces, managing the full process from creation to customer orders.",
      featured: false,
    },
    {
      id: 4,
      title: "Short-Form Video Editor & Creator",
      context: "Personal",
      dateRange: "2021 - 2023",
      description:
        "Created and edited short-form content, growing an account to ~900 followers through organic content.",
      featured: false,
    },
  ];

  return (
    <>
      <section id="experience">
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map((item) => (
            <ExperienceItem key={item.id} experience={item}></ExperienceItem>
          ))}
        </div>
      </section>
    </>
  );
}
export default Experience;
