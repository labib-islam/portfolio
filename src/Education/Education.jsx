import React from "react";

import './Education.css'

const Education = () => {


  const educationList = [
    {
      institute: "Brac University",
      location: 'Dhaka, Bangladesh',
      degree: "B.Sc in Computer Science & Engineering",
      duration: "Jan 2020 - Dec 2023",
      grade: 'CGPA 3.96' 
    },
    {
      institute: "Dhaka College",
      location: 'Dhaka, Bangladesh',
      degree: "HSC",
      duration: "2019 | Science",
      grade: 'GPA 5.00' 
    },
    {
      institute: "Monipur High School & College",
      location: 'Dhaka, Bangladesh',
      degree: "SSC",
      duration: "2017 | Science",
      grade: 'GPA 5.00' 
    },
  ]

  return <div className="page-container education">
    <div className="educationpage-box">
      <h1 className="page-headline">EDUCATION</h1>
      <div className="education-container">
        <ul className="education-box">
          {educationList.map((ed) => <li key={ed.institute} className="education-content-box">
              <div className="education-content-v-line"></div>
              <div className="education-content">
                <h1>{ed.degree}</h1>
                <h3>{ed.duration}</h3>
                <div className="education-institute">
                  <h2>{ed.institute}</h2>
                  <h4 className="v-line">|</h4>
                  <h4>{ed.location}</h4>
                </div>
                <h5>{ed.grade}</h5>
              </div>
            

          </li>)}
        </ul>
      </div>
    </div>
  </div>;
};

export default Education;
