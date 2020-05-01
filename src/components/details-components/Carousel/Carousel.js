import React, { useState } from "react";
import "./Carousel.scss";
import rightArrow from "../../../assets/images/right-arrow-icon.svg";
import leftArrow from "../../../assets/images/left-arrow-icon.svg";
const Carousel = props => {
  let [currentImage, setCurrentImage] = useState(0);
  const previousImage = () => {
    if (currentImage > 0) {
      setCurrentImage(previousVal => previousVal - 1);
    }
  };
  const nextImage = () => {
    if (currentImage < props.screenshots.length - 1) {
      setCurrentImage(previousVal => previousVal + 1);
    }
  };
  return (
    <div
      className="carousel slide carousel-fade z-depth-1-half"
      data-ride="carousel"
    >
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="view">
            <img
              className="d-block w-100 development-img"
              src={props.screenshots[currentImage]}
              alt="First slide"
            />
            <div className="mask rgba-black-light"></div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        role="button"
        data-slide="prev"
        onClick={previousImage}
      >
        <span className="gray-rectangle" aria-hidden="true">
          <img src={leftArrow} className="side-arrow" />
        </span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        role="button"
        data-slide="next"
        onClick={nextImage}
      >
        <span className="gray-rectangle" aria-hidden="true">
          <img src={rightArrow} className="side-arrow" />
        </span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
export default Carousel;
