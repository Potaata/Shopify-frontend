import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = () => {
  return (
    <div className="service-container" id="service">
      <div className="service-content">
        {/* arrange the content in columns */}
        <div className="service-grid">
          <div className="service-block">
            <div>
              <p className="service-subtitle">START BROWSING THE MARKETPLACE</p>
              <h2 className="service-title">Most Popular</h2>
              <h2 className="service-title">Shopify Services</h2>
            </div>
          </div>

          {/* column separate */}
          <div className="service-block">
            <a href="/" class="service-link">
              View all Services
              <FontAwesomeIcon
                icon="fa-solid fa-arrow-right"
                className="arrow-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
