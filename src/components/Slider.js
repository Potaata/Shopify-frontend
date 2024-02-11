import React, { useState } from "react";

//importing images from src/images
import logo from "../images/shopify.webp";
import girl from "../images/text-img.webp";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // utilizes state (useState) to manage the current slide
  const slides = [
    {
      secondImage: girl,
      mainImage: logo,
      bgClass: "bg-1",
    },
    {
      secondImage: girl,
      mainImage: logo,
      bgClass: "bg-2",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  //TnextSlide and prevSlide, handle navigation between slides by updating the currentSlide

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="homepage-slider">
      <div className={`single-homepage-slider ${slides[currentSlide].bgClass}`}>
        <div className="mt-96 flex justify-center">
          <div className="container">
            <div className="image-wrapper">
              <img
                src={slides[currentSlide].mainImage}
                alt="Main Hero Image"
                className="main-image"
                style={{ width: "400px", height: "100px" }} // Adjust the width and height here
              />
              <img
                src={slides[currentSlide].secondImage}
                alt="Main Hero Image"
                className="second-image"
              />
               
            </div>
          </div>
        </div>
      </div>
      {/* Connect navigation functions to buttons */}
      <div className="slider-navigation">
        <button className="prev-button" onClick={prevSlide}>
          PREV
        </button>
        <button className="next-button" onClick={nextSlide}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Slider;
