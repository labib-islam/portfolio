import React, { useEffect, useRef, useState } from "react";
import ImageSlider from "./ImageSlider";
import GithubLogo from "../../assets/socials/github-logo.svg?react";
import NewTabIcon from "../../assets/icons/new-tab-icon.svg?react";

import "./Projects.css";
import { Link } from "react-router";

const Projects = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_REACT_APP_SHEET_LINK}/Projects`
      );
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="projects" className="page__container test">
      <div className="page-default-margin">
        <div className="page-percent-width">
          <h1>Projects</h1>
          {/* <hr className="h-line" /> */}
          <ul className="no-style-ul project-cards__container">
            {data &&
              data.map((item, index) => (
                <li key={item.Name} className="no-style-li">
                  <div className="card__container">
                    <div className="card-top">
                      <ImageSlider
                        imageList={item.Images?.split(", ") || []}
                        id={`id-${index + 1}`}
                      />
                    </div>
                    <div className="card-bottom">
                      <div className="card-header">
                        <h2 title={item.Name}>{item.Name}</h2>
                        <div className="card-actions">
                          <Link to={item.Github} target="_blank">
                            <div className="card-link__container">
                              <GithubLogo className="logo-item" />
                            </div>
                          </Link>
                          {item.Link && (
                            <Link to={item.Link} target="_blank">
                              <div className="website-link__container">
                                <NewTabIcon className="icon-item" />
                                <span className="website-label">Website</span>
                              </div>
                            </Link>
                          )}
                        </div>
                      </div>
                      <p title={item.Description}>{item.Description}</p>
                      <span>{item.Stack}</span>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
