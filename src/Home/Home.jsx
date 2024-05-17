import React from "react";

import Image from "../assets/home/image.png";

import "./Home.css";

const Home = () => {
  return (
    <main className="homepage-box">
      <div className="homepage-text-box">
        <div className="homepage-text-content">
          <h4>Hello,</h4>
          <h1>
            I am <span>Labib Islam</span>
          </h1>
          <h3>Web Developer</h3>
        </div>
      </div>
      <div className="homepage-image-box">
        <img src={Image} alt="Not Found" />
      </div>
    </main>
  );
};

export default Home;
