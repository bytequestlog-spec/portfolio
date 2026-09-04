import "../styles/Contacts.css";
function Contacts() {
  return (
    <section id="contact">
      <h2>Contact me</h2>
      <div className="link-pill">
        <img alt="email" className="link-icon"></img>
        <a href="mailto:bytequest.log@gmail.com" className="link-name">
          My email
        </a>
      </div>

      <div className="link-pill">
        <img alt="github" className="link-icon"></img>
        <a href="https://github.com/bytequestlog-spec" className="link-name">
          My github
        </a>
      </div>
    </section>
  );
}

export default Contacts;
