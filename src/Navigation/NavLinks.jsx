import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import DownArrow from "../assets/icons/down-arrow.svg?react";

import "./NavLinks.css";

const NavLinks = (props) => {
  const [dropdownStatus, setDropdownStatus] = useState("inactive");

  const dropdownRef = useRef();

  const dropdownStatusHandler = (event) => {
    event.stopPropagation();
    dropdownStatus === "active"
      ? setDropdownStatus("inactive")
      : setDropdownStatus("active");
  };

  useEffect(() => {
    const closeDropdownHandler = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setDropdownStatus("inactive");
      }
    };
    document.addEventListener("click", closeDropdownHandler);

    return () => {
      document.removeEventListener("click", closeDropdownHandler);
    };
  }, [dropdownStatus]);

  return (
    <ul className={props.className}>
      {Object.entries(props.paths).map(([name, path]) => (
        <li key={name} className={name}>
          {name === "Home" ? (
            <NavLink to={path} end>
              {name}
            </NavLink>
          ) : (
            <NavLink to={path}>{name}</NavLink>
          )}
        </li>
      ))}
      <div className="dropdown" >
        
        <div
          className={`down-arrow-icon-box ${dropdownStatus}`}
          tabIndex="0"
          onClick={dropdownStatusHandler}ref={dropdownRef}
        >
          <DownArrow className="down-arrow-icon" />
        </div>
        <div className={`dropdown-menu  ${dropdownStatus}`}>
          {Object.entries(props.dropdownPaths).map(([name, path]) => (
            <li key={name} className={name}>
              {name === "Home" ? (
                <NavLink to={path} end>
                  {name}
                </NavLink>
              ) : (
                <NavLink to={path}>{name}</NavLink>
              )}
            </li>
          ))}
        </div>
      </div>
    </ul>
  );
};

export default NavLinks;
