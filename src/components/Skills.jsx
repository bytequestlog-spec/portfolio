import "../styles/Skills.css";
function Skills() {
  const skills = [
    { category: "Languages", items: ["JavaScript", "PHP", "Java", "C", "SQL"] },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Node.js", "Express"],
    },
    {
      category: "Tools & Databases",
      items: ["Git", "Vite", "PostgreSQL", "MySQL"],
    },
  ];
  return (
    <>
      <section id="skills">
        <h2>Skills</h2>
        {skills.map((group) => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-category">{group.category}</h3>
            <div className="skill-pills">
              {group.items.map((item) => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
export default Skills;
