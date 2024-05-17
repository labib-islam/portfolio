import React from "react";

import NavLinks from "./NavLinks";

import "./MainNavigation.css";

const MainNavigation = () => {
  const navBarPaths = {
    Home: "/portfolio/",
    About: "/portfolio/about",
    Work: "/portfolio/work-experience",
    Projects: "/portfolio/projects",
    // Education: "/portfolio/education",
  };

  return (
    <main className="navbar-box">
      <NavLinks paths={navBarPaths} className="navbar-items-list" />
    </main>
  );
};

export default MainNavigation;
