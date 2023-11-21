import React, { useState } from "react";
import { GiLeafSwirl } from "react-icons/gi";
import "./NavBar.scss";

const lists = [
  { tag: "About", id: "#about" },
  { tag: "Services", id: "#services" },
  { tag: "Projects", id: "#projects" },
  { tag: "Contact", id: "#contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <GiLeafSwirl />
        </a>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          {lists.map(({ tag, id }) => (
            <>
              <a href={id}>{tag}</a>
            </>
          ))}
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQmdf_I2ZMDjRxuBdhrDf9L_RsrVAq76kDV-2RqzYn0VY9SebevWyLiN9oFHohsUIxj51GODvsT0_wF/pub"
            className="btn"
            target="_blank"
          >
            Resumé
          </a>
        </div>

        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
