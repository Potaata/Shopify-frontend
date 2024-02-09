import React from "react";
import expertimg from "../images/expert.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Expert = () => {
  return (
    <div class="flex-container">
      <div class="image-container">
        <img src={expertimg} alt="" class="image" />
      </div>
      <div class="content-container">
        <div class="content">
          <p class="category">BECOME PART OF THE TEAM</p>
          <h2 class="title">Become a</h2>
          <h2 class="sub-title">Storetasker Expert</h2>
          <p class="description">
            We are tight nit community of Shopify experts helping out store
            owners with digital tasks.
          </p>
          <ul class="list">
            <li>
              <FontAwesomeIcon icon="fa-solid fa-check" className="fa" />
              Satisfaction guaranteed
            </li>
            <li>
              <FontAwesomeIcon icon="fa-solid fa-check" className="fa" /> Fair
              pricing
            </li>
            <li>
              <FontAwesomeIcon icon="fa-solid fa-check" className="fa" /> Fast
              turnaround
            </li>
          </ul>
          <a href="/" class="cta">
            Become an expert
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
export default Expert;
