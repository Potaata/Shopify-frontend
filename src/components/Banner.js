import React, { useState } from "react";
import star from "../images/5star.png";
import shopify from "../images/shopifyb.webp";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  //The `handleClose` function sets the `isVisible` variable to `false`.
  const handleClose = () => {
    setIsVisible(false);

  };
  return (
    <>
      {isVisible && (
        <div
          id="marketing-banner"
          tabIndex="-1"
          className="fixed z-50 flex flex-col md:flex-row justify-between w-56 p-4 right-6 top-36 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl dark:bg-gray-700 dark:border-gray-600"
        >
          <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
            <ul className="mt-6 space-y-4 text-sm">
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close banner</span>
              </button>
              <li>
                <img src={star} className="h-4 me-3" alt="FlowBite Logo" />
              </li>
              <li>
                <a className="text-gray-500">
                  <strong>4190 jobs</strong> completed successfully with{" "}
                  <strong>97.4%</strong>5 star reviews
                </a>
              </li>

              <li>
                <a className="text-gray-300 transition hover:opacity-75">
                  <img src={shopify} className="h-5 me-3" alt="FlowBite Logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
