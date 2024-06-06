import { useState } from "react";
import {
  HashRouter as Router,
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
import Contact from "./Contact/Contact";

function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/work-experience" element={<WorkExperience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  return (
    <Router hashType="noslash">
      <MainNavigation />
      <main className="main">{routes}</main>
    </Router>
  );
}

export default App;
