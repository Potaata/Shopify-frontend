import React from "react";

const Storetasker = () => {
  return (
    <div className="relative z-20 sm:z-auto">
      <div className="mx-auto max-w-container bg-blue-900 px-4 pb-16 sm:px-6 lg:px-8 justify-center items-center h-full">
        <div className="max-w-full pt-36 pb-24 pt-10 lg:flex lg:items-start text-center flex justify-center items-center h-full">
          <div>
            <p className="text-xs font-semi-bold leading-none text-yellow-500">
              BENEFITS OF STORETASKER
            </p>
            <h2 className="text-4xl font-semibold leading-none tracking-wide text-white">
              Storetasker makes it
            </h2>
            <h2 className="text-4xl font-semibold leading-none tracking-wide text-white">
              fast and easy
            </h2>
          </div>
        </div>
        <div className="relative mx-auto grid max-w-[60rem] grid-cols-1 gap-8 mt-12 mb-12 lg:max-w-none lg:grid-cols-3">
          <div className="flex">
            <div className="ml-6">
              <div className="flex items-center ">
                <svg
                  class="w-10 h-10 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm5.5 1a.5.5 0 0 0-1 0 5 5 0 0 0 1.6 3.4 5.5 5.5 0 0 0 7.8 0 5 5 0 0 0 1.6-3.4.5.5 0 0 0-1 0h-.2l-1 .3a18.9 18.9 0 0 1-7.8-.4ZM9 8a1 1 0 0 0 0 2 1 1 0 1 0 0-2Zm6 0a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h2 className="mr-4 pt-4 text-white text-sm font-semibold leading-6 text-slate-900">
                  Easy to Use
                </h2>
                <a className="ml-5 mb-8 text-9xl text-gray-500 font-semibold leading-6 opacity-50 ">
                  1
                </a>
              </div>
              <p className="mt-2 text-sm text-white leading-6 text-slate-700 w-56">
                Hassle-free setup and simple job management from start to
                finish.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="ml-6">
              <div className="flex items-center">
                <svg
                  class="w-10 h-10 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                </svg>
                <h2 className="mr-4 pt-4 text-white text-sm font-semibold leading-6 text-slate-900">
                  Affordable Rates
                </h2>
                <a className="ml-3 mb-8 text-9xl text-gray-500 font-semibold leading-6 opacity-50 ">
                  2
                </a>
              </div>
              <p className="mt-2 text-white text-sm leading-6 text-slate-700 w-56">
                Predictable work rates at $65/hour. Ideal for growing Shopify
                stores.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="ml-6">
              <div className="flex items-center">
                <svg
                  class="w-10 h-10 text-gray-800 dark:text-white"
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
                    d="M18.5 4h-13m13 16h-13M8 20v-3.3c0-.5.1-.9.4-1.2l1.6-2.9a1 1 0 0 0 0-1.2L8.4 8.5A2 2 0 0 1 8 7.3V4h8v3.3c0 .5-.1.9-.4 1.2L14 11.4a1 1 0 0 0 0 1.2l1.6 2.9c.3.3.4.7.4 1.2V20H8Z"
                  />
                </svg>
                <h2 className="mr-4 pt-4 text-white text-sm font-semibold leading-6 text-slate-900">
                  Fast Turnaround
                </h2>
                <a className="mb-8 text-9xl text-gray-500 font-semibold leading-6 opacity-50 ">
                  3
                </a>
              </div>
              <p className="mt-2 text-sm text-white  leading-6 text-slate-700 w-64">
                No more flakey developers. Storetasker developers get things
                done on time.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-full pt-20 pb-24 pt-10 lg:flex lg:items-start text-center flex justify-center items-center h-full">
          <a
            className="inline-flex items-center gap-2 bg-slate-500 px-8 py-3 text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
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
        </div>
      </div>
    </div>
  );
};

export default Storetasker;
