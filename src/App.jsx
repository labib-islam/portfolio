import { useEffect, useState } from "react";
import { HashRouter } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import Layout from "./layout/Layout";
import { AboutMe } from "./pages/About/AboutMe";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Project/Projects";
import Skills from "./pages/Skill/Skills";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";

function App() {
  const [theme, setTheme] = useState("light");

  const setDarkMode = () => {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
    setTheme("dark");
  };

  const setLightMode = () => {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
    setTheme("light");
  };

  const toggleTheme = () => {
    theme === "light" ? setDarkMode() : setLightMode();
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      setDarkMode();
    } else if (selectedTheme === "light") {
      setLightMode();
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.body.setAttribute(
        "data-theme",
        systemPrefersDark ? "dark" : "light"
      );
      setTheme(systemPrefersDark ? "dark" : "light");
    }

    // Listen for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      if (!localStorage.getItem("selectedTheme")) {
        const newTheme = e.matches ? "dark" : "light";
        document.body.setAttribute("data-theme", newTheme);
        setTheme(newTheme); // Update state so UI updates properly
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  });

  return (
    <HashRouter>
      <Layout theme={theme} toggleTheme={toggleTheme} />
      <LandingPage />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </HashRouter>
  );
}

export default App;
