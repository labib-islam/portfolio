import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import DownArrow from "../assets/icons/down-arrow.svg?react";
import UpArrow from "../assets/icons/up-arrow.svg?react";
import Sun from "../assets/icons/sun-icon.svg?react";
import Moon from "../assets/icons/moon-icon.svg?react";

import "./Layout.css";

const Layout = ({ theme, toggleTheme }) => {
  const navLinks = [
    { name: "About Me", path: "aboutme" },
    { name: "Experience", path: "experience" },
    { name: "Projects", path: "projects" },
    { name: "Skills", path: "skills" },
    { name: "Education", path: "education" },
    { name: "Contact", path: "contact" },
  ];

  const [dropdownStatus, setDropdownStatus] = useState("inactive");
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const dropdownRef = useRef();

  const dropdownStatusHandler = (event) => {
    event.stopPropagation();
    dropdownStatus === "active"
      ? setDropdownStatus("inactive")
      : setDropdownStatus("active");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    const closeDropdownHandler = (event) => {
      setDropdownStatus("inactive");
    };
    document.addEventListener("click", closeDropdownHandler);
    window.addEventListener("scroll", closeDropdownHandler);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", closeDropdownHandler);
      window.removeEventListener("scroll", closeDropdownHandler);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dropdownStatus]);

  return (
    <div>
      <div className="navigation__container">
        <div className="navigation-items__container">
          <div className="navigation-left">
            <div className="navigation-item__container">
              <Link
                to="landingpage"
                className="name-link"
                spy={true}
                // hashSpy={true}
                smooth={true}
                duration={500}
                offset={0}
              >
                {/* <div className="up-arrow__container">
                  <UpArrow className="up-arrow" />
                </div> */}
                <span className="name">Labib Islam</span>
              </Link>
            </div>
            <div className="theme-icon__container" onClick={toggleTheme}>
              {theme === "light" ? (
                <Sun className="theme-icon" />
              ) : (
                <Moon className="theme-icon" />
              )}
            </div>
          </div>
          <div className="navigation-right">
            <div
              className={`down-arrow__container ${dropdownStatus}`}
              tabIndex="0"
              onClick={dropdownStatusHandler}
              ref={dropdownRef}
            >
              <DownArrow className="down-arrow-icon" />
            </div>

            <div
              className={`right-navigation-items__container ${dropdownStatus}`}
            >
              {navLinks.map((item) => (
                <div className="navigation-item__container" key={item.name}>
                  <Link
                    to={item.path}
                    spy={true}
                    // hashSpy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Link
        to="landingpage"
        className={`scroll-to-top-link ${showScrollToTop ? "show" : ""}`}
        spy={true}
        // hashSpy={true}
        smooth={true}
        duration={500}
        offset={0}
      >
        <div className="up-arrow__container">
          <UpArrow className="up-arrow" />
        </div>
      </Link>
    </div>
  );
};

export default Layout;
