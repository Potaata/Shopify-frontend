import React from "react";

//importing images from src/images
import footer1 from "../images/footer1.png";
import footer2 from "../images/footer2.png";
import visa from "../images/visa.png";
import visa2 from "../images/visa2.png";
import paypal from "../images/paypal.png";
import star from "../images/5star.png";
import shopify from "../images/shopifyfooter.png";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Footer CTA */}
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>A better way to hire </h4>
                  <h4>Shopify Help</h4>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-md-6 mb-30">
              <div class="button-container">
                <a href="/" class="custom-button white-button">
                  <span class="button-text">Become an expert</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="button-icon"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a href="/" class="custom-button blue-button">
                  <span class="button-text">Get a Free Estimate</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="button-icon"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 mb-30">
              <div className="footer-widget">
                <div className="footer-logo ">
                  <a href="#" className="flex items-center">
                    <img src={footer2} className="img-fluid" alt="logo" />
                    <img src={footer1} className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    The #1 Shopify outsourcing marketplace. Proudly built by
                    Carson, highest rated Shopify expert team in the world.
                  </p>
                </div>
              </div>

              <div className="footer-img">
                <ul>
                  <li>
                    <a className="flex items-center">
                      <img src={visa} className="img-fluid" alt="" />
                      <img src={visa2} className="img-fluid" alt="" />
                      <img src={paypal} className="img-fluid" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Company</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Connect</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Our Community</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Experts</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Apply as an Expert</a>
                  </li>
                  <li>
                    <a href="#">Vetting Guidelines</a>
                  </li>
                  <li>
                    <a href="#">Expert Sign In</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo ">
                  <img src={star} className="img-fluid" alt="logo" />
                </div>
                <div className="footer-text mb-25">
                  <p>
                    4190 jobs completed successfully with 97.4% 5 star reviews
                  </p>
                </div>
                <div className="footer-logo ">
                  <img src={shopify} className="img-fluid" alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="copyright-area">
          <div className="row">
            <div className="col-xl-3 col-lg-3 text-center text-lg-left">
              <div className="copyright-text">
                <p>&copy; 2017 - Storetasker - All Right Reserved</p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
