import React from "react";

//importing images from src/images
import star from "../images/5star.png";
import card1 from "../images/card1.webp";
import card2 from "../images/card2.webp";
import card3 from "../images/card3.webp";
import card4 from "../images/card4.webp";
import card5 from "../images/card5.webp";
import card6 from "../images/card6.webp";

const Button = ({ children, isActive }) => {
  const buttonStyle = {
    // button's appearance determined by the isActive prop
    borderBottom: isActive ? "2px solid #1C64F2" : "none",
    transition: "border-color 0.3s, color 0.3s",
    margin: "0 10px",
    padding: "10px 20px",
    backgroundColor: "transparent",
    color: isActive ? "#1C64F2" : "#4b5563",
    borderRadius: 0,
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    cursor: "pointer",
    outline: "none",
  };

  const handleFocus = (event) => {
    if (!isActive) {
      event.target.style.color = "#000";
      event.target.style.borderColor = "#4b5563";
    }
  };
  //handleFocus and handleBlur changes the button's styles, only when it is not active

  const handleBlur = (event) => {
    if (!isActive) {
      event.target.style.color = "#4b5563";
      event.target.style.borderColor = "transparent";
    }
  };

  return (
    //button is rendered with its children and event handlers for focus and blur.
    <button
      type="button"
      style={buttonStyle}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {children}
    </button>
  );
};

const SlideCards = () => {
  return (
    <div className="article-container" id="portfolio">
      <div className="article-flex">
        <Button>EMAIL</Button>
        <Button>SOCIAL MEDIA</Button>
        <Button>ADVERTISING</Button>
        <Button>CONVERSION</Button>
        <Button>FEATURES</Button>
        <Button isActive={true}>DESIGN</Button> {/*buton is currently active*/}
        <Button> GROWTH</Button>
        <Button> SEO</Button>
      </div>
      <div className="custom-grid">
        <div className="custom-card">
          <img className="custom-img" src={card1} alt="" />
          <div className="custom-content">
            <div className="flex-container">
              <p className="custom-description">EMAIL MARKETING</p>
              <p className="custom-subtitle">4 Days</p>
            </div>
            <p className="custom-title">Mailchimp Integration</p>
            <div className="custom-info">
              <span className="custom-price">$325.00</span>
              <img className="custom-star" src={star} alt="Star Icon" />
            </div>
          </div>
        </div>
        <div className="custom-card card-2">
          <img className="custom-img" src={card2} alt="" />
          <div className="custom-content">
            <div className="flex-container">
              <p className="custom-description">EMAIL MARKETING</p>
              <p className="custom-subtitle">4 Days</p>
            </div>
            <p className="custom-title">Xmarine development sub-hire</p>
            <div className="custom-info">
              <span className="custom-price">$325.00</span>
              <img className="custom-star" src={star} alt="Star Icon" />
            </div>
          </div>
        </div>

        <div className="custom-card">
          <p className="card-title">Last 40,</p>
          <p className="card-title">by Shopify</p>
          <img className="custom-img" src={card3} alt="" />
          <div className="custom-content">
            <div className="flex-container">
              <p className="custom-description">EMAIL MARKETING</p>
              <p className="custom-subtitle">4 Days</p>
            </div>
            <p className="custom-title">Mailchimp Integration</p>
            <div className="custom-info">
              <span className="custom-price">$325.00</span>
              <img className="custom-star" src={star} alt="Star Icon" />
            </div>
          </div>
        </div>
        <div className="custom-card card-4">
          <img className="custom-img" src={card1} alt="" />
          <div className="custom-content">
            <div className="flex-container">
              <p className="custom-description">EMAIL MARKETING</p>
              <p className="custom-subtitle">4 Days</p>
            </div>
            <p className="custom-title">Mailchimp Integration</p>
            <div className="custom-info">
              <span className="custom-price">$325.00</span>
              <img className="custom-star" src={star} alt="Star Icon" />
            </div>
          </div>
        </div>
        <div className="custom-card card-5">
          <img className="custom-img" src={card2} alt="" />
          <div className="custom-content">
            <div className="flex-container">
              <p className="custom-description">EMAIL MARKETING</p>
              <p className="custom-subtitle">4 Days</p>
            </div>
            <p className="custom-title">Xmarine development sub-hire</p>
            <div className="custom-info">
              <span className="custom-price">$325.00</span>
              <img className="custom-star" src={star} alt="Star Icon" />
            </div>
          </div>
        </div>

        <div className="custom-card">
          <img className="custom-img" src={card3} alt="" />
          <div className="custom-content">
            <div className="flex-container">
              <p className="custom-description">EMAIL MARKETING</p>
              <p className="custom-subtitle">4 Days</p>
            </div>
            <p className="custom-title">Mailchimp Integration</p>
            <div className="custom-info">
              <span className="custom-price">$325.00</span>
              <img className="custom-star" src={star} alt="Star Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCards;
