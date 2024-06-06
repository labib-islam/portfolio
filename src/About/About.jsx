import React from "react";

import aboutImage from "../assets/about/about-image.png";

import PhoneIcon from "../assets/icons/phone-icon.svg?react";
import MailIcon from "../assets/icons/mail-icon.svg?react";
import "./About.css";

const About = () => {
  return (
    <div className="page-container about">
      <div className="aboutpage-box">
        <div className="aboutpage-image-container">
          <div className="aboutpage-image-box-border">
            <div className="aboutpage-image-box">
              <img src={aboutImage} alt="" />
            </div>
          </div>
        </div>
        <div className="aboutpage-text-container">
          <div className="aboutpage-text-box">
            <h1 className="page-headline">PROFILE</h1>
            <p>
              Diligent individual with an enthusiasm for problem solving in
              technical field. Passionate about attaining new skill sets,
              especially in software proficiency. Competent in Microsoft Office
              Suite and well-versed in Adobe softwares namely Illustrator, XD,
              Photoshop, and premiere pro. Currently expanding skills in ReactJS
              and exploring the vast possibilities of AWS cloud technology.
            </p>
            <div className="aboutpage-contact-info-box">
              <div className="aboutpage-phone-number">
                <div className="aboutpage-phone-icon-box">
                  <PhoneIcon className="aboutpage-phone-icon" />
                </div>
                <h4>+880 179 023 1929</h4>
              </div>
              <div className="aboutpage-email">
                <div className="aboutpage-email-icon-box">
                  <MailIcon className="aboutpage-email-icon" />
                </div>
                <h4>labibislam87@gmail.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
