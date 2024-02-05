
import React from "react";

//importing 'react-slick' for carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//importing images from src/images
import arch from "../images/archetype.webp";
import maes from "../images/maes.webp";
import pixel from "../images/pixel.webp";
import troop from "../images/troop.webp";
import sb from "../images/outOfSB.webp";

function Breadcrumb() {
  // array that containing the paths to the images 

  const images = [pixel, troop, sb, arch, maes]; 

  // configuring the behavior and appearance of the carousel slider.
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const containerStyle = {
    maxWidth: "100%", // maximum width for the container
    height: "200px",
    overflowX: "hidden", // Hide horizontal overflow

  };

  const imageSizeStyles = {
    maxWidth: "100px", // Set maximum width to fit within the container
    maxHeight: "100px", // Set maximum height to fit within the container
  };

  return (
  // Renders a carousel slider using the `react-slick` library. 

    <div className="clients-slider" style={containerStyle}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="swiper-slide">
            <div
              style={{
                maxWidth: "100px",
                maxHeight: "100px",
                position: "relative",
              }}
            >
              <img
                src={image}
                alt=""
                className="img-fluid"
                style={{
                  ...imageSizeStyles,
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Breadcrumb;
