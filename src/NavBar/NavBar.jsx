import React, { useState } from "react";
import { TbSquareLetterA } from "react-icons/tb";
import "./NavBar.scss";
import { FaMoon, FaSun } from "react-icons/fa";


const lists = [
  // { tag: "Color Mode", id: "#color-mode", isColorMode: true },
  { tag: "About", id: "#about" },
  { tag: "Projects", id: "#projects" },
  { tag: "Contact Me", id: "#contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleColorModeToggle = () => {
    setIsDarkMode(!isDarkMode);

    console.log("Toggle color mode");
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
        

          AL<TbSquareLetterA size={45} className="icon"/>MEER

        </a>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          {lists.map(({ tag, id, isColorMode }) => (
            <React.Fragment key={id}>
            {/* {isColorMode ? ( */}
                {/* <button onClick={handleColorModeToggle}>
                  {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button> */}
              {/* ) : ( */}
                <a href={id}>{tag}</a>
              {/* )} */}
            </React.Fragment>
          ))}
        </div>

          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQmdf_I2ZMDjRxuBdhrDf9L_RsrVAq76kDV-2RqzYn0VY9SebevWyLiN9oFHohsUIxj51GODvsT0_wF/pub"
            className="btn"
            target="_blank"
          >
            Resumé
          </a>



        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
