import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="background-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <div className="languages-about-row">
        <About />
        <Languages />
      </div>

      <Contacts />
      <footer className="footer">
        &copy; | <span className="footer-span">Ellie</span>
      </footer>
    </>
  );
}
export default App;
