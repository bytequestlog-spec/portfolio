import "../styles/Contacts.css";
function Contacts() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="link-pill">
        <img
          alt="email"
          className="link-icon"
          src="/images/icons/gmail.webp"
        ></img>
        <a href="mailto:bytequest.log@gmail.com" className="link-name">
          My Email
        </a>
      </div>

      <div className="link-pill">
        <img
          alt="github"
          className="link-icon"
          src="/images/icons/github.webp"
        ></img>
        <a href="https://github.com/bytequestlog-spec" className="link-name">
          My GitHub
        </a>
      </div>
    </section>
  );
}

export default Contacts;
