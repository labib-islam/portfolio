import React from "react";
import PhoneIcon from "../assets/icons/phone-icon.svg?react";
import EmailIcon from "../assets/icons/mail-icon.svg?react";
import LocationIcon from "../assets/icons/location-icon.svg?react";
import SocialIcon from "../assets/icons/social-icon.svg?react";
import FacebookLogo from "../assets/socials/facebook-logo.svg?react";
import LinkedinLogo from "../assets/socials/linkedin-logo.svg?react";

import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const socialList = [
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/labib-islam/",
      logo: LinkedinLogo,
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/labib.islam.509994/",
      logo: FacebookLogo,
    },
  ];

  return (
    <div className="page-container">
      <div className="contactpage-box">
        <h1 className="page-headline">CONTACT ME</h1>
        <div className="contact-container">
          <div className="contact-box">
            <div className="contact-icon-box">
              <LocationIcon className="contact-icon" />
            </div>
            <h3>
              907, Monipur, Mirpur-2, <br />
              Dhaka-1216, Bangladesh
            </h3>
          </div>
          <div className="contact-box">
            <div className="contact-icon-box">
              <PhoneIcon className="contact-icon" />
            </div>

            <Link to="tel:01790231929">
              <h3>+880 1790 231 929</h3>
            </Link>
          </div>
          <div className="contact-box">
            <div className="contact-icon-box">
              <EmailIcon className="contact-icon" />
            </div>
            <h3>labibislam87@gmail.com</h3>
          </div>
          <div className="contact-box">
            <div className="contact-icon-box">
              <SocialIcon className="contact-icon" />
            </div>
            <div className="mini-icon-container">
              {socialList.map((item) => (
                <Link key={item.name} to={item.link} target="_blank">
                  <div className="mini-icon-box">
                    <item.logo className="mini-icon" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
