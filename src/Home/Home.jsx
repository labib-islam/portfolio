import React from "react";

import Image from "../assets/home/image.png";
import HomeImage from "../assets/home/home-image.svg?react";
import FacebookLogo from "../assets/socials/facebook-logo.svg?react";
import LinkedinLogo from "../assets/socials/linkedin-logo.svg?react";
import GithubLogo from "../assets/socials/github-logo.svg?react";
import DownloadIcon from "../assets/icons/download-icon-1.svg?react";
import PDFflie from "../assets/cv_labibislam.pdf";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {

  const downloadFileAtURL = (url) => {
    const linkTag = document.createElement("a");
    linkTag.href = url;
    linkTag.setAttribute("download", "cv_labibislam.pdf");
    document.body.appendChild(linkTag)
    linkTag.click()
    linkTag.remove()
  }

  const socialList = [
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/labib-islam/",
      logo: LinkedinLogo,
    },
    {
      name: "github",
      link: "https://github.com/labib-islam",
      logo: GithubLogo,
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/labib.islam.509994/",
      logo: FacebookLogo,
    },
  ];

  return (
    <main className="homepage-box">
      <div className="homepage-text-box">
        <div className="homepage-text-content">
          <h4>Hello,</h4>
          <h1>
            I am <span>Labib Islam</span>
          </h1>
          <h3>Web Developer</h3>
          <div className="social-links">
            {socialList.map((item) => (
              <Link key={item.name} to={item.link} target="_blank">
                <div className="social-logo-container">
                  <item.logo className="logo-icon" />
                </div>
              </Link>
            ))}
            <div className="download-cv-container" onClick={() => {downloadFileAtURL(PDFflie)}}>
              <div className="social-logo-container">
                <DownloadIcon className="logo-icon" />
              </div>
              <h1 className="download-text">DOWNLOAD CV</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-image-box">
        {/* <img src={Image} alt="Not Found" /> */}
        <HomeImage className="homepage-image" />
      </div>
    </main>
  );
};

export default Home;
