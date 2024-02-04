// import React, { useState } from "react";
// //importing from src/images
// import pixel from "../images/pixelUnion.png";
// import troop from "../images/troop.png";
// import sb from "../images/outOfSB.jpg";

// function Breadcrumb() {
//   return (
//     <nav className="flex" aria-label="Breadcrumb">
//       <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
//         <li className="inline-flex items-center">
//           <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
//             <img src={pixel} alt="" style={{ maxWidth: '100px', maxHeight: '100px' }} />
//           </a>
//         </li>
//         <li>
//           <div className="flex items-center">
//             <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
//               <img src={troop} alt="" style={{ maxWidth: '100px', maxHeight: '100px' }} />
//             </a>
//           </div>
//         </li>
//         <li aria-current="page">
//           <div className="flex items-center">
//             <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
//               <img src={sb} alt="" style={{ maxWidth: '100px', maxHeight: '100px' }} />
//             </span>
//           </div>
//         </li>
//       </ol>
//     </nav>
//   );
// }

// export default Breadcrumb;

// function Breadcrumb() {
//   const images = [pixel, troop, sb]; // Add more images as needed
//   const [currentPage, setCurrentPage] = useState(0);

//   const handleClick = (index) => {
//     setCurrentPage(index);
//   };

//   const renderImages = () => {
//     const startIndex = currentPage * 5;
//     const endIndex = Math.min(startIndex + 5, images.length);
//     const slicedImages = images.slice(startIndex, endIndex);
//     const repeatedImages = [...slicedImages];

//     // Repeat images if there are less than 5
//     while (repeatedImages.length < 5) {
//       repeatedImages.push(...slicedImages);
//     }

//     return repeatedImages.map((image, index) => (
//       <img
//         key={index}
//         src={image}
//         alt=""
//         style={{
//           maxWidth: "100px",
//           maxHeight: "100px",
//           marginRight: "200px", // Adjust the margin as needed
//         }}
//       />
//     ));
//   };

//   const totalPages = Math.ceil(images.length / 5);

//   return (
//     <nav className="flex" aria-label="Breadcrumb">
//       <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <li key={index}>
//             <button
//               className={`text-sm font-medium ${
//                 index === currentPage ? "text-gray-700" : "text-gray-400"
//               } hover:text-blue-600 dark:text-gray-400 dark:hover:text-white`}
//               onClick={() => handleClick(index)}
//             >
//               &bull;
//             </button>
//           </li>
//         ))}
//       </ol>
//       <div className="flex items-center">{renderImages()}</div>
//     </nav>
//   );
// }

// export default Breadcrumb;

// function Breadcrumb() {
//     const images = [pixel, troop, sb]; // Add more images as needed
//     const [currentPage, setCurrentPage] = useState(0);

//     const handleClick = (index) => {
//       setCurrentPage(index);
//     };

//     const totalPages = Math.ceil(images.length / 5);

//     const renderImages = () => {
//       const startIndex = currentPage * 5;
//       const endIndex = startIndex + 5;
//       const renderedImages = [];

//       for (let i = startIndex; i < endIndex; i++) {
//         const imageIndex = i % images.length;
//         renderedImages.push(
//           <img
//             key={i}
//             src={images[imageIndex]}
//             alt=""
//             style={{ maxWidth: '20px', maxHeight: '20px', marginRight: '5px' }}
//           />
//         );
//       }

//       return renderedImages;
//     };

//     return (
//       <nav className="flex" aria-label="Breadcrumb">
//         <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <li key={index}>
//               <button
//                 className={`text-sm font-medium ${
//                   index === currentPage ? 'text-gray-700' : 'text-gray-400'
//                 } hover:text-blue-600 dark:text-gray-400 dark:hover:text-white`}
//                 onClick={() => handleClick(index)}
//               >
//                 &bull;
//               </button>
//             </li>
//           ))}
//         </ol>
//         <div className="flex items-center">{renderImages()}</div>
//       </nav>
//     );
//   }
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import images
import arch from "../images/archetype.png";
import maes from "../images/maes.png";
import pixel from "../images/pixel.png";
import troop from "../images/troop.png";
import sb from "../images/outOfSB.jpg";

function Breadcrumb() {
  const images = [pixel, troop, sb, arch, maes]; // Add more images as needed

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
    maxWidth: "100%", // Set maximum width for the container
    height: "200px",
    overflowX: "hidden", // Hide horizontal overflow

  };

  const imageSizeStyles = {
    maxWidth: "100px", // Set maximum width to fit within the container
    maxHeight: "100px", // Set maximum height to fit within the container
  };

  return (
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
