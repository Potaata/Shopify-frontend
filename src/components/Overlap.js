import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import profile from "../images/profile.png";

const Overlap = () => {
  return (
    <div className="we-help-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1 pr-5">
                <img src={img3} alt="Untree.co" style={{ borderRadius: "0" }} />
                <div className="absolute top-20 left-4 right-4 flex flex-col items-center justify-center text-center p-16">
                  <a className="font-sans text-5xl font-semibold leading-snug tracking-normal text-white block whitespace-normal pb-4 max-w-[80%]">
                    Chinese Elm Bonsai
                  </a>
                  <button
                    type="button"
                    className="text-white bg-blue-400 hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mb-4 text-center me-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="grid grid-2">
                <div className="relative flex max-w-[12rem] flex-col overflow-hidden bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent bg-clip-border">
                    <img src={img1} alt="" style={{ borderRadius: "0" }} />
                  </div>
                  <div className="p-3 flex items-center">
                    <h4 className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 ">
                      Lorem ipsum dolor sit
                    </h4>
                    <button
                      type="button"
                      className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium text-sm p-2 text-center inline-flex items-center me-2 dark:bg-yellow-500 dark:hover:bg-yellow-700 dark:focus:ring-yellow-500"
                    >
                      <svg
                        class="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 12h14m-7 7V5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-3">
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-3xl w-64">
                  <div className="mx-3 mt-3 text-gray-700 h-64 pb-8">
                    <img src={img2} alt="" style={{ borderRadius: "0" }} />
                  </div>
                  <div className="flex flex-col justify-center items-center p-4">
                    <h4 className="mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 pb-2">
                      Chinese Elm Bonsai
                    </h4>
                    <button
                      type="button"
                      className="text-white bg-blue-400 hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mb-4 text-center me-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-4 h-20 w-16 bg-yellow-500 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-yellow-700 hover:shadow-xl">
                <svg
                  class="w-8 h-8 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"
                  />
                </svg>
              </div>
              <div className="third-image"></div>
              <div className="woo-card relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-none">
                <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                  <img
                    src={profile}
                    alt=""
                    className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                  />
                  <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                      <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Set up an online WooCommerce store
                      </h5>
                      <div className="flex items-center gap-0.5">
                        <button
                          type="button"
                          className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium text-sm p-2 text-center inline-flex items-center me-2 dark:bg-yellow-500 dark:hover:bg-yellow-700 dark:focus:ring-yellow-500"
                        >
                          <svg
                            class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 12h14m-7 7V5"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p class="align-middle pt-4 pr-6 font-sans text-xl antialiased font-bold leading-relaxed text-gray-400">
                        Quoted
                      </p>
                      <p class="align-middle font-sans text-4xl antialiased font-bold leading-relaxed text-blue-gray-900">
                        $125
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 ps-lg-5">
            <h3 className="text-4xl font-thin mb-4 pl-5">
              Join 2,000+ Shopify store owners using Storetasker to build their
              dream store
            </h3>
            <ul className="pl-5">
              <a
                className="inline-flex items-center gap-2 bg-white px-8 py-3 text-blue-400 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90 mr-6 shadow-md"
                href="/"
              >
                <span className="text-xs font-medium mr-12">
                  Get a Free Estimate
                </span>

                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlap;
