import React from "react";
import expertimg from "../images/expert.png";

const Expert = () => {
  return (
    <div className="flex flex-wrap justify-center mt-10" id="blog">
      <div className="p-4 mr-4 max-w-md">
        <div className="card w-96">
          <img src={expertimg} alt="" />
          {/* Rendering an image in the component */}
        </div>
      </div>
      <div className="p-4 ml-4 max-w-md">
        <div className="flex h-full bg-transparent bg-teal-400 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div>
              <p className="text-xs font-semibold leading-none text-yellow-400">
                BECOME PART OF THE TEAM
              </p>
              <h2 className="text-4xl font-normal leading-none tracking-wide text-grey-600">
                Become a
              </h2>
              <h2 className="text-4xl font-normal leading-normal tracking-wide text-grey-600 opacity-60">
                Storetasker Expert
              </h2>
              <p className="text-sm font-semibold leading-normal tracking-wide text-grey-600 opacity-50">
                We are tight nit community of shopify experts helping out store
                owners with digital tasks.
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-center">
                  <svg
                    class="w-6 h-6 text-yellow-500 dark:text-yellow-500"
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
                      d="m5 12 4.7 4.5 9.3-9"
                    />
                  </svg> {/*Svg icon*/}

                  <a className="text-gray-800 pl-3 font-semibold transition hover:opacity-75">
                    Satisfaction guaranteed
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    class="w-6 h-6 text-yellow-500 dark:text-yellow-500"
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
                      d="m5 12 4.7 4.5 9.3-9"
                    />
                  </svg>
                  <a className="text-gray-800 pl-3 font-semibold transition hover:opacity-75">
                    Fair pricing
                  </a>
                </li>
                <li className="flex items-center pb-4">
                  <svg
                    class="w-6 h-6 text-yellow-500 dark:text-yellow-500"
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
                      d="m5 12 4.7 4.5 9.3-9"
                    />
                  </svg>
                  <a className="text-gray-800 pl-3 font-semibold transition hover:opacity-75">
                    Fast turnaround
                  </a>
                </li>
              </ul>
              <a
                className="inline-flex items-center gap-2 bg-white px-8 py-3 pt-4 text-blue-400 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90 mr-6"
                href="/"
              >
                <span className="text-xs font-medium mr-12">
                  Become an expert
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Expert;
