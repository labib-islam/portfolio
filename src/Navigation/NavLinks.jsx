import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import DownArrow from "../assets/down-arrow.svg?react";

import "./NavLinks.css";

const NavLinks = (props) => {
  const [dropdownStatus, setDropdownStatus] = useState("inactive");

  const dropdownRef = useRef();

  const dropdownStatusHandler = () => {
    dropdownStatus === "active"
      ? setDropdownStatus("inactive")
      : setDropdownStatus("active");
  };

  return (
    <ul className={props.className}>
      {Object.entries(props.paths).map(([name, path]) => (
        <li key={name}>
          {name === "Home" ? (
            <NavLink to={path} end>
              {name}
            </NavLink>
          ) : (
            <NavLink to={path}>{name}</NavLink>
          )}
        </li>
      ))}
      <div className="dropdown">
        <div
          className={`down-arrow-icon-box`}
          tabIndex="0"
          onClick={dropdownStatusHandler}
        >
          <DownArrow className="down-arrow-icon" />
        </div>
        <div className={`dropdown-menu  ${dropdownStatus}`}>
          {Object.entries(props.paths).map(([name, path]) => (
            <li key={name}>
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
