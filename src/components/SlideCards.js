import React from "react";
import star from "../images/5star.png";
import card1 from "../images/card1.webp";
import card2 from "../images/card2.webp";
import card3 from "../images/card3.webp";
import card4 from "../images/card4.webp";
import card5 from "../images/card5.webp";
import card6 from "../images/card6.webp";

const Button = ({ children, isActive }) => {
  const buttonStyle = {
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

  const handleBlur = (event) => {
    if (!isActive) {
      event.target.style.color = "#4b5563";
      event.target.style.borderColor = "transparent";
    }
  };

  return (
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
    <div className="h-full bg-white">
      <div className=" flex items-center justify-center py-4 md:py-8 flex-wrap">
        <Button>EMAIL</Button>
        <Button>SOCIAL MEDIA</Button>
        <Button>ADVERTISING</Button>
        <Button>CONVERSION</Button>
        <Button>FEATURES</Button>
        <Button isActive={true}>DESIGN</Button>
        <Button> GROWTH</Button>
        <Button> SEO</Button>
      </div>
      <div className="container mx-auto lg:px-20">
        <div className="grid grid-cols-3 h-full pb-40">
          <div className="container flex justify-center">
            <div className="max-w-sm py-16">
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img className="rounded-t-lg" src={card1} alt="" />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <div className="flex items-center">
                    <p className="text-gray-700 font-semibold text-sm mb-3 mr-4 hover:text-gray-900 hover:cursor-pointer">
                      EMAIL MARKETING
                    </p>
                    <p className="text-gray-700 font-semibold text-sm mb-3 hover:text-gray-900 hover:cursor-pointer">
                      4 Days
                    </p>
                  </div>
                  <p className="text-gray-400 text-xl tracking-wide">
                    Mailchimp Integration
                  </p>
                  <div className="flex items-center mt-12">
                    <span className="text-lg font-bold mr-4">$325.00</span>
                    <img src={star} className="h-4 ml-3" alt="Star Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container flex justify-center mt-16">
            <div className="max-w-sm py-16">
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img className="rounded-t-lg" src={card2} alt="" />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <div className="flex items-center">
                    <p className="text-gray-700 font-semibold text-sm mb-3 mr-4 hover:text-gray-900 hover:cursor-pointer">
                      EMAIL MARKETING
                    </p>
                    <p className="text-gray-700 font-semibold text-sm mb-3 hover:text-gray-900 hover:cursor-pointer">
                      4 Days
                    </p>
                  </div>
                  <p className="text-gray-400 text-xl tracking-wide">
                    Xmarine development sub-hire
                  </p>
                  <div className="flex items-center mt-10">
                    <span className="text-lg font-bold mr-4">$325.00</span>
                    <img src={star} className="h-4 ml-3" alt="Star Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container flex justify-center">
            <div className="max-w-sm py-16">
              <p className="lg:text-6xl sm:text-2xl md:text-3xl">Last 40, by Shopify</p>
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img className="rounded-t-lg" src={card3} alt="" />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <div className="flex items-center">
                    <p className="text-gray-700 font-semibold text-sm mb-3 mr-4 hover:text-gray-900 hover:cursor-pointer">
                      EMAIL MARKETING
                    </p>
                    <p className="text-gray-700 font-semibold text-sm mb-3 hover:text-gray-900 hover:cursor-pointer">
                      4 Days
                    </p>
                  </div>
                  <p className="text-gray-400 text-xl tracking-wide">
                    Mailchimp Integration
                  </p>
                  <div className="flex items-center mt-12">
                    <span className="text-lg font-bold mr-4">$325.00</span>
                    <img src={star} className="h-4 ml-3" alt="Star Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container flex justify-center">
            <div className="max-w-sm">
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img className="rounded-t-lg" src={card4} alt="" />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <div className="flex items-center">
                    <p className="text-gray-700 font-semibold text-sm mb-3 mr-4 hover:text-gray-900 hover:cursor-pointer">
                      EMAIL MARKETING
                    </p>
                    <p className="text-gray-700 font-semibold text-sm mb-3 hover:text-gray-900 hover:cursor-pointer">
                      4 Days
                    </p>
                  </div>
                  <p className="text-gray-400 text-xl tracking-wide">
                    Mailchimp Integration
                  </p>
                  <div className="flex items-center mt-12">
                    <span className="text-lg font-bold mr-4">$325.00</span>
                    <img src={star} className="h-4 ml-3" alt="Star Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container flex justify-center mt-16">
            <div className="max-w-sm ">
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img className="rounded-t-lg" src={card5} alt="" />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <div className="flex items-center">
                    <p className="text-gray-700 font-semibold text-sm mb-3 mr-4 hover:text-gray-900 hover:cursor-pointer">
                      EMAIL MARKETING
                    </p>
                    <p className="text-gray-700 font-semibold text-sm mb-3 hover:text-gray-900 hover:cursor-pointer">
                      4 Days
                    </p>
                  </div>
                  <p className="text-gray-400 text-xl tracking-wide">
                    Mailchimp Integration
                  </p>
                  <div className="flex items-center mt-12">
                    <span className="text-lg font-bold mr-4">$325.00</span>
                    <img src={star} className="h-4 ml-3" alt="Star Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container flex justify-center mt-32">
            <div className="max-w-sm ">
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img className="rounded-t-lg" src={card6} alt="" />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <div className="flex items-center">
                    <p className="text-gray-700 font-semibold text-sm mb-3 mr-4 hover:text-gray-900 hover:cursor-pointer">
                      EMAIL MARKETING
                    </p>
                    <p className="text-gray-700 font-semibold text-sm mb-3 hover:text-gray-900 hover:cursor-pointer">
                      4 Days
                    </p>
                  </div>
                  <p className="text-gray-400 text-xl tracking-wide">
                    Mailchimp Integration
                  </p>
                  <div className="flex items-center mt-12">
                    <span className="text-lg font-bold mr-4">$325.00</span>
                    <img src={star} className="h-4 ml-3" alt="Star Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCards;
