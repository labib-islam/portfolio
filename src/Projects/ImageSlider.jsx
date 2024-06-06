import React, { useEffect, useState } from "react";

import LeftArrow from "../assets/icons/left-arrow.svg?react";
import RightArrow from "../assets/icons/right-arrow.svg?react";

import image1 from "../assets/projects/craftersCorner/crafters-corner-a.png";
import image2 from "../assets/projects/craftersCorner/crafters-corner-b.png";
import image3 from "../assets/projects/craftersCorner/crafters-corner-c.png";

import "./ImageSlider.css";

const ImageSlider = (props) => {
  const [slider, setSlider] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const slider = document.querySelector(`.${props.id}`);
    // const images = document.querySelectorAll('.image');
    setSlider(slider);
    setImages(props.imageList);
  }, []);

  let slideNumber = 0;
  const length = images.length;

  const leftArrowClickHandler = () => {
    slideNumber = slideNumber > 0 ? --slideNumber : length - 1;
    slider.style.transform = `translateX(-${slideNumber * 100}%)`;
  };
  const rightArrowClickHandler = () => {
    slideNumber = slideNumber < length - 1 ? ++slideNumber : 0;
    slider.style.transform = `translateX(-${slideNumber * 100}%)`;
  };

  return (
    <div className="image-slider-container">
      <div className="left-arrow-icon-box" onClick={leftArrowClickHandler}>
        <LeftArrow className="left-arrow-icon" />
      </div>
      <div className="image-frame">
        <div className={`image-slider ${props.id}`}>
          {props.imageList.map((image) => (
            <img key={image} src={image} className="image" />
          ))}
        </div>
      </div>
      <div className="right-arrow-icon-box" onClick={rightArrowClickHandler}>
        <RightArrow className="right-arrow-icon" />
      </div>
    </div>
  );
};

export default ImageSlider;
