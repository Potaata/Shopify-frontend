import React from "react";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Storetasker = () => {
  return (
    <div class="storetasker-container">
      <div class="content-wrapper">
        <div class="heading">
          <p class="subtitle">BENEFITS OF STORETASKER</p>
          <h2 class="title">Storetasker makes it</h2>
          <h2 class="title">fast and easy</h2>
        </div>
        <div class="features">
          <div class="feature">
            <div class="icon">
              <img src={icon1} />
            </div>
            <div class="number">1</div>
            <div class="feature-content">
              <h2 class="feature-title">Easy to Use</h2>
              <p class="feature-description">
                Hassle-free setup and simple job management from start to
                finish.
              </p>
            </div>
          </div>
          <div class="feature">
            <div class="icon">
              <img src={icon2} />
            </div>
            <div class="number">2</div>

            <div class="feature-content">
              <h2 class="feature-title">Affordable Rates</h2>
              <p class="feature-description">
                Predictable work rates at $65/hour. Ideal for growing Shopify
                stores.
              </p>
            </div>
          </div>
          <div class="feature">
            <div class="icon">
              <img src={icon3} />
            </div>
            <div class="number">3</div>
            <div class="feature-content">
              <h2 class="feature-title">Fast Turnaround</h2>
              <p class="feature-description">
                No more flakey developers. Storetasker developers get things
                done on time.
              </p>
            </div>
          </div>
        </div>
        <div className="call-to-action ">
          <a href="/" class="cta-button">
            Get a Free Estimate
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-right"
              className="arrow-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Storetasker;
