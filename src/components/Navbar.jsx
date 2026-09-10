import { useState } from "react";
import { createPortal } from "react-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo" onClick={() => setIsOpen(false)}>
        Ellie
      </a>
      <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#projects" onClick={() => setIsOpen(false)}>
          Projects
        </a>
        <a href="#skills" onClick={() => setIsOpen(false)}>
          Skills
        </a>
        <a href="#experience" onClick={() => setIsOpen(false)}>
          Experience
        </a>
        <a href="#about" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </div>

      {isOpen &&
        createPortal(
          <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>,
          document.getElementById("modal-root"),
        )}
    </nav>
  );
}
export default Navbar;
