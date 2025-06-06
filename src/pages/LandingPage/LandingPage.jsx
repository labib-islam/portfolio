import React, { useEffect, useState } from "react";
import FacebookLogo from "../../assets/socials/facebook-logo.svg?react";
import LinkedinLogo from "../../assets/socials/linkedin-logo.svg?react";
import GithubLogo from "../../assets/socials/github-logo.svg?react";
import NewTabIcon from "../../assets/icons/new-tab-icon.svg?react";
import landingPageImage from "/home-image.svg";

import "./LandingPage.css";
import { Link } from "react-router";

const LandingPage = () => {
  const [data, setData] = useState();
  const [imageData, setImageData] = useState();

  const fetchData = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_REACT_APP_SHEET_LINK}/Links`
      );
      const data = await res.json();
      setData(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchImageData = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_REACT_APP_SHEET_LINK}/Images`
      );
      const data = await res.json();
      setImageData(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    fetchImageData();
  }, []);

  const socialList = [
    {
      name: "linkedin",
      logo: LinkedinLogo,
    },
    {
      name: "github",
      logo: GithubLogo,
    },
    {
      name: "facebook",
      logo: FacebookLogo,
    },
  ];

  return (
    <div id="landingpage" className="page__container">
      <div className="page-default-margin">
        <div className="page-landing">
          <div className="landingpage-left__container">
            <h4>Hello,</h4>
            <h1>
              I am <span>Labib Islam</span>
            </h1>
            <h3>Web Developer</h3>
            {data && (
              <div className="links__container">
                {socialList.map((item) => (
                  <Link key={item.name} to={data[item.name]} target="_blank">
                    <div className="social-logo__container">
                      <item.logo className="logo-icon" />
                    </div>
                  </Link>
                ))}
                <Link
                  className="cv__container"
                  to={data.resume}
                  target="_blank"
                >
                  <div className="new-tab-logo__container">
                    <NewTabIcon className="logo-icon" />
                  </div>
                  <span className="download-text">Résumé</span>
                </Link>
              </div>
            )}
          </div>
          <div className="landingpage-right__container">
            <img src={landingPageImage} alt="" />
            {/* {imageData && <img src={imageData.Avatar} alt="" />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
