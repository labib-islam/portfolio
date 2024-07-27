import React from "react";

import LinkIcon from "../assets/icons/link-icon.svg?react";
import "./WorkExperience.css";
import { Link } from "react-router-dom";

const WorkExperience = () => {
  const workPlaceList = [
  {
    title: "Adjunct Lecturer",
    companyName: "Brac University",
    duration: "May 2024 - Present",
    description: `Developed and delivered lectures on database system courses.
Collaborated with other faculty members and provided guidance to students as they constructed their first university project.
Prepared exam questions and assessments to measure the students' understanding of the material covered in courses.
`,
    link: "https://www.bracu.ac.bd/",
    accentColor: '#324eff'
  },
  {
    title: "Student Tutor",
    companyName: "Brac University",
    duration: "September 2022 - December 2023",
    description: `Provided constant guidance to freshers, involving assistance in
course content during lab classes as well as facilitating individual consultation
to clarify concepts. Continuously worked with faculty members to construct an
optimised learning environment and foster student success.`,
    link: "https://www.bracu.ac.bd/",
    accentColor: '#324eff'
  },
  {
    title: "Graphics Designer",
    companyName: "GameQart",
    duration: "2019-2021",
    description: `Worked in a local startup company as a graphics designer,
enhancing individual skill in design software tools as well as augmenting
digital presence and aesthetic appeal of the company’s products and services.`,
    link: "https://www.facebook.com/GameQart/",
    accentColor: '#13a89e'
  },
];


  return (
    <div className="page-container">
      <div className="workpage-box">
        <h1 className="page-headline">EMPLOYMENT HISTORY</h1>
        <div className="workplace-container">
        {workPlaceList.map((workPlace) => 
          <div key={workPlace.title} className="workplace-box">
            <div className="workplace-title-box">
              <h1>{workPlace.title}</h1>
              <div className="company-duration">
                <Link to={workPlace.link} target="_blank">
                  <div className="company-link-icon-box">
                    <LinkIcon className="company-link-icon" />
                  </div>
                  <h2>{workPlace.companyName}</h2>
                </Link>
                <h4 className="v-line">|</h4>
                <h4>{workPlace.duration}</h4>
              </div>
            </div>
            <div className="workplace-text-box">
              <div className="h-line" style={{backgroundColor: workPlace.accentColor}}></div>
              <p>
                {workPlace.description}
              </p>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
