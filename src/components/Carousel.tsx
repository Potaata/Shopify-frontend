import React, {useState} from "react";
import bg from "../images/bg.webp";
import bg2 from "../images/image-bg.webp";


const Carousel = () => {
  const images = [bg, bg2];

  const [currentIndex, setCurrentIndex] = useState(0);

  const back = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full flex flex-shrink-0 overflow-hidden shadow-2xl">
      {images.map((image, index) => (
        <figure
          key={index}
          className={currentIndex === index ? 'h-96 transition-opacity duration-300 ease-in-out opacity-100' : 'hidden'}
        >
          <img src={image} alt="Image" className="absolute inset-0 z-10 h-full w-full object-cover opacity-70" />
          <figcaption className="absolute inset-x-0 bottom-1 z-20 w-96 mx-auto p-4 font-light text-sm text-center tracking-widest leading-snug bg-gray-300 bg-opacity-25">
            Any kind of content here!
            Primum in nostrane potestate est, quid meminerimus? Nulla erit controversia. Vestri haec verecundius, illi fortasse constantius.
          </figcaption>
        </figure>
      ))}

      <button onClick={back} className="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
        {/* Back button SVG */}
      </button>

      <button onClick={next} className="absolute right-14 top-1/2 translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
        {/* Next button SVG */}
      </button>
    </div>
  );
};

export default Carousel;
