import "../styles/ExperienceItem.css";

function ExperienceItem({ experience }) {
  return (
    <div
      className={`timeline-item ${experience.featured ? "featured" : "muted"}`}
    >
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3 className="timeline-title">{experience.title}</h3>

        <span className="timeline-date">{experience.dateRange}</span>
        <span className="timeline-context">{experience.context}</span>
        <p className="timeline-desc">{experience.description}</p>
      </div>
    </div>
  );
}
export default ExperienceItem;
