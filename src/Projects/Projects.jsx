import React from "react";

import "./Projects.css";
import { Link } from "react-router-dom";
import LinkIcon from "../assets/icons/link-icon.svg?react";
import ImageSlider from "./ImageSlider";
import projectList from './ProjectList'

const Projects = () => {
  

  return (
    <div className="page-container">
      <div className="projectpage-box">
        <h1 className="page-headline">PROJECTS</h1>
        <div className="project-container">
          {projectList.map((project, idx) => (
            <div key={project.title} className="project-box">
              
              <div className="project-text-container">
                <div className="project-title-box">
                  <h1>{project.title}</h1>
                  <div className="link-box">
                    <Link to={project.link} target="_blank">
                      <div className="link-icon-box">
                        <LinkIcon className="link-icon" />
                      </div>
                      <h2>github</h2>
                    </Link>
                  </div>
                </div>

                <div className="project-text-box">
                  <div
                    className="h-line"
                    style={{ backgroundColor: project.accentColor }}
                  ></div>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="project-image-container">
                <div className="project-image-box">
                  <ImageSlider imageList={project.imageList} id={project.id}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
