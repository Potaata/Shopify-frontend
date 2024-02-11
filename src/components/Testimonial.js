import React from "react";

//importing images from src/images
import star from "../images/5star.webp";
import test1 from "../images/test1.webp";
import test2 from "../images/test2.webp";
import test3 from "../images/test3.webp";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-wrapper">
        <div className="testimonial-column">
          <div className="testimonial-card left no-border">
            <div className="testimonial-section">
              <p className="testimonial-heading">
                WHAT OTHERS ARE SAYING ABOUT STORETASKER
              </p>
              <h2 className="testimonial-title">Why Storetasker is</h2>
              <h2 className="testimonial-title">
                the <span className="bold-text">#1 Shopify</span>
              </h2>
              <h2 className="testimonial-title">
                <span className="bold-text">outsourcing service</span>
              </h2>
            </div>
          </div>

          <div className="testimonial-card left">
            <img src={star} width="100" height="100" alt="Rating Star" />
            <p className="testimonial-text">
              Storetasker delivered on time, within budget and went above and
              beyond to make my app a success...
            </p>
            <div className="author-info">
              <div className="author-avatar">
                <img src={test3} width="50" height="50" alt="Author Avatar" />
              </div>
              <div className="author-details">
                <p className="author-name">Natalie Hernandez</p>
                <p className="author-role">CEO @Stockey</p>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-column">
          <div className="testimonial-card right">
            <img src={star} width="100" height="100" alt="Rating Star" />
            <p className="testimonial-text">
              Storetasker delivered on time, within budget and went above and
              beyond to make my app a success...
            </p>
            <div className="author-info">
              <div className="author-avatar">
                <img src={test1} width="50" height="50" alt="Author Avatar" />
              </div>
              <div className="author-details">
                <p className="author-name">Natalie Hernandez</p>
                <p className="author-role">CEO @Stockey</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card right">
            <img src={star} width="100" height="100" alt="Rating Star" />
            <p className="testimonial-text">
              Storetasker delivered on time, within budget and went above and
              beyond to make my app a success...
            </p>
            <div className="author-info">
              <div className="author-avatar">
                <img src={test2} width="50" height="50" alt="Author Avatar" />
              </div>
              <div className="author-details">
                <p className="author-name">Natalie Hernandez</p>
                <p className="author-role">CEO @Stockey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
