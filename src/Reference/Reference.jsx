import React from "react";

import './Reference.css'

const Reference = () => {

  const referenceList = [
    {
      name: "MD. Saiful Islam",
      designation: "Senior Lecturer",
      institute: "Brac University",
      location: 'Dhaka, Bangladesh',
      email: 'md.saiful.islam@bracu.ac.bd', 
    },
  ]

  return <div className="page-container reference">
  <div className="referencepage-box">
    <h1 className="page-headline">REFERENCE</h1>
    <div className="reference-container">
      <ul className="reference-box">
        {referenceList.map((reference) => <li key={reference.name} className="reference-content-box">
            <div className="reference-content-v-line"></div>
            <div className="reference-content">
              <h1>{reference.name}</h1>
              <h3>{reference.designation}</h3>
              <div className="reference-institute">
                <h2>{reference.institute}</h2>
                <h4 className="v-line">|</h4>
                <h4>{reference.location}</h4>
              </div>
              <h5>{reference.email}</h5>
            </div>
          

        </li>)}
      </ul>
    </div>
  </div>
</div>;
};

export default Reference;
