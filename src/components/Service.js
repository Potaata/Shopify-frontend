import React from "react";

const Service = () => {
  return (
    <div
      className="max-w-7xl mx-auto flex justify-center items-center h-full"
      id="service"
    >
      <div className="lg:flex lg:items-start lg:gap-8 flex justify-center">
        {/* arrange the content in columns */}

        <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16 flex justify-between items-center">
          <div className="col-span-2 pb-10">
            <div>
              <p className="text-xs font-semi-bold leading-none text-yellow-500">
                START BROWSING THE MARKETPLACE
              </p>
              <h2 className="text-4xl font-semibold leading-none tracking-wide text-black">
                Most Popular
              </h2>
              <h2 className="text-4xl font-semibold leading-none tracking-wide text-black">
                Shopify Services
              </h2>
            </div>
          </div>

          {/* column seperate */}
          <div className="col-span-2 ml-auto pb-10 lg:col-span-3 lg:flex lg:items-end">
            <a
              className="inline-flex items-center gap-2 bg-blue-400 px-8 py-3 text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
              href="/"
            >
              <span className="text-xs font-medium mr-12">
                View All Services
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
  );
};

export default Service;
