import React from "react";

//importing images from src/images
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import profile from "../images/profile.png";

const Overlap = () => {
  return (
    <div className="we-help-section">
      <div className="container mx-auto">
        <div className="row justify-content-between">
          <div className="col-lg-8 mb-5 mb-lg-0">
            {/* arrange the content in columns */}
            <div className="grid grid-cols-12 md:items-center w-full max-w-screen-sm md:max-w-screen-md mx-auto px-4">
              {/* responsive design classes */}
              <div className="col-span-12 md:col-span-auto md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-1 bg-red-500">
                <a className="" href="#" title="Image Link">
                  <div
                    className="relative block w-full h-full pb bg-gray-300 overflow-hidden shadow-lg"
                    style={{ paddingTop: "75%" }}
                  >
                    <img
                      className="absolute inset-0 w-full h-full object-cover"
                      src={img3}
                    />
                    <div className="absolute flex justify-center items-center text-white">
                      <div className="text-center">
                        <h2 className="text-2xl font-semibold">
                          Chinese Elm Bonsai
                        </h2>
                        <a
                          className="inline-flex items-center gap-2 bg-blue-400 px-8 py-3 rounded-full text-center text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90 "
                          href="/"
                        >
                          <span className="text-xs font-medium">Buy now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
                <button
                  type="button"
                  className="absolute top-24 right-40 text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-sm p-2 text-center inline-flex items-center me-2 hidden md:block"
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
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"
                    />
                  </svg>
                </button>
              </div>
              <div className="col-span-12 pb-[32rem] pl-[2rem] md:col-span-auto md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-3 bg-white mb-4 md:mb-0">
                <div className="relative flex max-w-[10rem] h-[12rem] flex-col overflow-hidden bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent bg-clip-border">
                    <img src={img1} alt="" style={{ borderRadius: "0" }} />
                  </div>
                  <div className="p-2 flex items-center">
                    <h4 className="block font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 ">
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
              <div className="col-span-8 pt-48 md:col-span-auto md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0 hidden md:block">
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-3xl w-36">
                  <div className="mx-3 mt-3 text-gray-700 h-20">
                    <img src={img2} alt="" style={{ borderRadius: "0" }} />
                  </div>
                  <div className="flex flex-col justify-center items-center pt-12 pl-4">
                    <h4 className="mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 pb-2">
                      Chinese Elm Bonsai
                    </h4>
                    <a
                      className="inline-flex items-center gap-2 bg-blue-400 px-8 py-3 rounded-full text-center text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90 mr-6 mb-6"
                      href="/"
                    >
                      <span className="text-xs font-medium">Buy now</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-auto md:col-start-1 md:col-end-9 md:row-start-2 md:row-end-2 bg-white">
                <div className="relative flex w-full max-w-[20rem] max-h-[13rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-none">
                  <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                    <img
                      src={profile}
                      alt=""
                      className="relative inline-block h-[42px] w-[48px] !rounded-full object-cover object-center"
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
          </div>
          {/* column seperate */}
          <div className="col-lg-4 ps-lg-5">
            <h3 className="text-3xl font-thin mb-4">
              Join 2,000+ Shopify store owners using Storetasker to build their
              dream store
            </h3>
            <ul className="pt-5">
              <a
                className="inline-flex items-center gap-2 bg-white px-8 py-3 text-blue-400 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90 shadow-md"
                href="/"
              >
                <span className="text-xs font-thin mr-12">
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
