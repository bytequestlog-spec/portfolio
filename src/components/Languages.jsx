import "../styles/Languages.css";
function Languages() {
  const languages = [
    { name: "English", level: "Fluent" },
    {
      name: "Arabic",
      level: "Native",
    },
    {
      name: "French",
      level: "Intermediate",
    },
  ];

  return (
    <>
      <section id="languages">
        <h2>Languages</h2>
        <div className="language-list">
          {languages.map((lang) => (
            <div key={lang.name} className="language-item">
              <span className="language-name">{lang.name}</span>
              <span className="language-level">{lang.level}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Languages;
