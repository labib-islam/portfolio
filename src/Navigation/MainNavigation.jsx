import React from "react";

import NavLinks from "./NavLinks";

import "./MainNavigation.css";

const MainNavigation = () => {
  const navBarPaths = {
    Home: "/",
    About: "/about",
    Work: "/work-experience",
    Projects: "/projects",
  };

  const dropdownPaths = {
    Home: "/",
    About: "/about",
    Work: "/work-experience",
    Projects: "/projects",
    Skills: "/skills",
    Education: "/education",
    Contact: '/contact',
  };

  return (
    <main className="navbar-box">
      <NavLinks paths={navBarPaths} dropdownPaths={dropdownPaths} className="navbar-items-list" />
    </main>
  );
};

export default MainNavigation;
