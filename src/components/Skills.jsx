import "../styles/Skills.css";
function Skills() {
  const skills = [
    {
      category: "Languages",
      items: [
        {
          name: "JavaScript",
          icon: "https://cdn.simpleicons.org/javascript",
        },
        { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
        { name: "Java", icon: "/images/tech/java.webp" },
        {
          name: "C",
          icon: null,
        },
        { name: "SQL", icon: null },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", icon: "https://cdn.simpleicons.org/react" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "Express", icon: "https://cdn.simpleicons.org/express/ffffff" },
      ],
    },
    {
      category: "Tools & Databases",
      items: [
        { name: "Git", icon: "https://cdn.simpleicons.org/git" },
        { name: "Vite", icon: "https://cdn.simpleicons.org/vite" },
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      ],
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
                <span key={item.name} className="skill-pill">
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="skill-pill-icon"
                    />
                  )}

                  {item.name}
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
