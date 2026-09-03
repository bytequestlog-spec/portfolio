import "../styles/Hero.css";
function Hero() {
  return (
    <section id="hero">
      <img alt="pfp"></img>
      <h1 className="name-title">Hi, it's Ellie</h1>
      <p className="description">I'm a software developper at Google</p>
      <a className="view-work" href="#projects">
        View work
      </a>
    </section>
  );
}
export default Hero;
