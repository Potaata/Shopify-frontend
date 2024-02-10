import React from "react";

//importing images from src/images
import img1 from "../images/img1.webp";
import img2 from "../images/img2.webp";
import img3 from "../images/img3.webp";
import profile from "../images/profile.png";

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
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14m-7 7V5"
                      />
                    </svg>
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
                <svg
                  class="w-12 h-12 text-gray-800 dark:text-white pl-2 pt-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"
                  />
                </svg>
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
                          <svg
                            class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 12h14m-7 7V5"
                            />
                          </svg>
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
              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
  
  );
};

export default Overlap2;
