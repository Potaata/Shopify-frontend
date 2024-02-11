import React from "react";

//importing images from src/images
import img1 from "../images/img1.webp";
import img2 from "../images/img2.webp";
import img3 from "../images/img3.webp";
import profile from "../images/profile.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Overlap2 = () => {
  return (
    <div className="we-help-section">
      <div className="col-lg-6 mb-5 mb-lg-0">
        {/* arrange the content in columns */}
        <div className="imgs-grid ">
          <div className="grid grid-1">
            <img
              src={img3}
              alt=""
              style={{ borderRadius: "0" }}
              className="full-width"
            />
            <div className="main-text-overlay">
              <div className="main-text-container">
                <a className="main-text">Chinese Elm Bonsai</a>
                <button type="button" className="grid-button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-2">
            <img src={img1} alt="" style={{ borderRadius: "0" }} />
            <div className="grid-2-container">
              <h4 className="grid-2-text">Lorem ipsum dolor sit</h4>
              <button type="button" className="grid-2-button">
                <FontAwesomeIcon icon="fa-solid fa-plus" />
              </button>
            </div>
          </div>
          <div className="grid grid-3">
            <div className="grid-3-card">
              <div className="grid-3-img">
                <img src={img2} alt="" style={{ borderRadius: "0" }} />
              </div>
              <div className="grid-3-container">
                <h4 className="grid-3-text">Chinese Elm Bonsai</h4>
                <button type="button" className="grid-button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-4">
           <div className="grid-4-icon"> <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></div>
          </div>
          <div className="third-image"></div>
          <div className="woo-card">
            <div className="woo-card-container">
              <img src={profile} alt="" className="woo-card-img" />
              <div className="woo-text-container">
                <div className="woo-flex">
                  <h5 className="woo-text">
                    Set up an online WooCommerce store
                  </h5>
                  <div className="button-container">
                    <button type="button" className="woo-card-button">
                      <FontAwesomeIcon icon="fa-solid fa-plus" />
                    </button>
                  </div>
                </div>
                <div className="woo-text2-container">
                  <p class="woo-quoted">Quoted</p>
                  <p class="woo-price">$125</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* column seperate */}
      <div className="card-column">
        <h3 className="column-heading">
          Join 2,000+ Shopify store owners using Storetasker to build their
          dream store
        </h3>
        <a className="cta" href="/">
          Get a Free Estimate
          <FontAwesomeIcon
                icon="fa-solid fa-arrow-right"
                className="arrow-icon"
              />
        </a>
      </div>
    </div>
  );
};

export default Overlap2;
