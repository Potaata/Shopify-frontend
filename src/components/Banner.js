import React, { useState } from "react";
//importing images from src/images
import star from "../images/5star.webp";
import shopify from "../images/shopifyb.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  //The `handleClose` function sets the `isVisible` variable to `false`.
  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <>
      {isVisible && ( // renders a banner component conditionally based on the value of isVisible
        <div id="marketing-banner" tabIndex="-1" className="custom-banner">
          <div className="custom-banner-content">
            <button onClick={handleClose} className="close-button">
              <FontAwesomeIcon icon="fa-solid fa-xmark" />

              <span className="sr-only">Close banner</span>
            </button>
            <ul className="banner-info">
              <li>
                <img src={star} className="logo" alt="FlowBite Logo" />
              </li>
              <li>
                <a className="info-text">
                  <strong>4190 jobs</strong> completed successfully with{" "}
                  <strong>97.4%</strong> 5-star reviews
                </a>
              </li>
              <li>
                <a className="info-link">
                  <img src={shopify} className="logo" alt="FlowBite Logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
