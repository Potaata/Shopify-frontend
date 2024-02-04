// import React, { useState } from "react";
// import SliderItem from "./SliderItem"; // Import the SliderItem component
// import shop from "../images/shopifyb.webp";
// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     {
//       subtitle: "Fresh & Organic",
//       mainImage: {shop},
//       bgClass: "bg-1",
//     },
//     {
//       subtitle: "Fresh Everyday",
//       title: "100% Organic Collection",
//       bgClass: "bg-2",
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
//   };

//   return (
//     <div className="homepage-slider">
//       <SliderItem
//         subtitle={slides[currentSlide].subtitle}
//         mainImage={slides[currentSlide].mainImage}
//         bgClass={slides[currentSlide].bgClass}
//       />
//       {/* Connect navigation functions to buttons */}
//       <div className="slider-navigation">
//         <button className="prev-button" onClick={prevSlide}>
//           PREV
//         </button>
//         <button className="next-button" onClick={nextSlide}>
//           NEXT
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React, { useState } from "react";
import logo from "../images/shopify.webp";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      subtitle: "Fresh & Organic",
      mainImage: logo,
      bgClass: "bg-1",
    },
    {
      subtitle: "Fresh Everyday",
      mainImage: logo, // Add the URL for the second image
      bgClass: "bg-2",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="homepage-slider">
      <div className={`single-homepage-slider ${slides[currentSlide].bgClass}`}>
        <div className="container col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
            <div className="">
              <div className="hero-text">
                {/* <div className="hero-text-tablecell text-center"> */}
                  <img
                    src={slides[currentSlide].mainImage}
                    alt="Main Hero Image"
                    className="absolute pl-12 pt-12"
                  />
                {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Connect navigation functions to buttons */}
      <div className="slider-navigation">
        <button className="prev-button" onClick={prevSlide}>
          PREV
        </button>
        <button className="next-button" onClick={nextSlide}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Slider;

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const prevSlide = () => {
//     console.log('Previous Slide');
//     setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
//   };

//   const nextSlide = () => {
//     console.log('Next Slide');
//     setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
//   };

//   const slides = [
//     {
//       id: 1,
//       className: 'bg-1',
//     },
//     {
//       id: 2,
//       className: 'bg-2',
//     },

//   ];

//   console.log('Current Slide:', currentSlide);

//   return (
//     <div id="controls-carousel" className="relative w-full" data-carousel="static">
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         {slides.map((slide, index) => (
//           <div key={slide.id} className={`hidden duration-700 ease-in-out ${index === currentSlide ? '' : 'opacity-0'}`} data-carousel-item={(index === currentSlide) ? 'active' : ''}>
//             <img src={slide.imgUrl} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Slide ${slide.id}`} />
//           </div>
//         ))}
//       </div>
//       <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prevSlide} data-carousel-prev>
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
//           </svg>
//           <span className="sr-only">Previous</span>
//         </span>
//       </button>
//       <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextSlide} data-carousel-next>
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
//           </svg>
//           <span className="sr-only">Next</span>
//         </span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;
