import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainNavigation from "./Navigation/MainNavigation";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import WorkExperience from "./WorkExperience/WorkExperience";
import Projects from "./Projects/Projects";
import Education from "./Education/Education";
import Reference from "./Reference/Reference";

function App() {
  const routes = (
    <Routes>
      <Route path="/portfolio/" element={<Home />} />
      <Route path="/portfolio/about" element={<About />} />
      <Route path="/portfolio/skills" element={<Skills />} />
      <Route path="/portfolio/work-experience" element={<WorkExperience />} />
      <Route path="/portfolio/projects" element={<Projects />} />
      <Route path="/portfolio/education" element={<Education />} />
      <Route path="/portfolio/reference" element={<Reference />} />
      <Route path="*" element={<Navigate to="/portfolio" replace />} />
    </Routes>
  );

  return (
    <Router>
      <MainNavigation />
      <main className="main">{routes}</main>
    </Router>
  );
}

export default App;
