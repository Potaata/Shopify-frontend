import React from "react";

export default function SliderItem({ subtitle, mainImage, bgClass }) {
  return (
    <div className={`single-homepage-slider ${bgClass}`}>
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
          <div className="hero-text">
            <div className="hero-text-tablecell text-center">
            <img src={mainImage} alt="Main Hero Image" />

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
