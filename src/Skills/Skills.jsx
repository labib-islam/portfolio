import React from "react";

import PythonLogo from '../assets/skills/python-logo.svg?react' 
import skillList from "./SkillList";
import './Skills.css'

const Skills = () => {
  return <div className="page-container">
    <div className="skillpage-box">
      {skillList.map((skillType) => <div key={skillType.type} className="skilltype-container">
        <h1>{skillType.type}</h1>
        <div className={`h-line ${skillType.type === "" ? "no-title" : ""}`}></div>
        <div className="skill-container">
          {skillType.skillItems.map((item) => <div key={item.name} className="skill-box">
            <div className="skill-icon-box">
              <item.logo key={item.name} className="skill-icon"/>
            </div>
            <h3>{item.name}</h3>
          </div>)}
        </div>
      </div>)}
    </div>
  </div>;
};

export default Skills;
