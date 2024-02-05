import React from "react";

//importing images from src/images
import star from "../images/5star.png";
import test1 from "../images/test1.png";
import test2 from "../images/test2.png";
import test3 from "../images/test3.png";

const Testimonial = () => {
  return (
    <div className="h-full bg-white m-6 flex flex-col justify-center items-center">
      <div className="testimonial flex flex-wrap justify-center gap-6">
        <div className="flex flex-wrap justify-between rounded-md bg-transparent p-8 max-w-sm mt-16">
          <div>
            <p className="text-xs font-semibold leading-none text-yellow-400">
              WHAT OTHERS ARE SAYING ABOUT STORETASKER
            </p>
            <h2 className="text-3xl font-normal leading-none tracking-wide text-grey-400">
              Why Storetasker is
            </h2>
            <h2 className="text-3xl font-normal leading-none tracking-wide text-grey-400">
              the <strong>#1 Shopify</strong>
            </h2>
            <h2 className="text-3xl font-bold leading-none tracking-wide text-grey-600">
              outsourcing service
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-between rounded-md bg-white p-8 shadow-lg max-w-sm mx-auto mt-32">
          <img src={star} width="100" height="100" />
          {/* Testimonial */}
          <p className="my-4 mb-0 text-lg font-normal italic leading-relaxed tracking-wide text-gray-400">
            Storetasker delivered on time, within budget and went above and
            beyond to make my app a success...
          </p>

          {/* Author */}
          <div className="mt-6 flex items-center gap-6">
            <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
              <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                <img
                  alt=""
                  src={test1}
                  width="50"
                  height="50"
                  decoding="async"
                  data-nimg="1"
                  className="inline-block"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <div>
              <p className="leading-none tracking-wide text-gray-400">
                Natalie Hernandez
              </p>
              <p className="text-xs leading-none tracking-wide text-gray-300">
                CEO @Stockey
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6">
        <div className="flex flex-wrap justify-between rounded-md bg-white p-8 shadow-lg max-w-sm mb-32">
          <img src={star} width="100" height="100" />

          {/* Testimonial */}
          <p className="my-4 mb-0 text-lg font-normal italic leading-relaxed tracking-wide text-gray-400">
            Storetasker delivered on time, within budget and went above and
            beyond to make my app a success...
          </p>

          {/* Author */}
          <div className="mt-6 flex items-center gap-6">
            <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
              <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                <img
                  alt=""
                  src={test3}
                  width="50"
                  height="50"
                  decoding="async"
                  data-nimg="1"
                  className="inline-block"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <div>
              <p className="leading-none tracking-wide text-gray-400">
                Natalie Hernandez{" "}
              </p>
              <p className="text-xs leading-none tracking-wide text-gray-300">
                CEO @Stockey{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between rounded-md bg-white p-8 shadow-lg max-w-sm mx-auto mb-16 mt-16 ">
          <img src={star} width="100" height="100" />

          {/* Testimonial */}
          <p className="my-4 mb-0 text-lg font-normal italic  leading-relaxed tracking-wide text-gray-400">
            Storetasker delivered on time, within budget and went above and
            beyond to make my app a success...
          </p>

          {/* Author */}
          <div className="mt-6 flex items-center gap-6">
            <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
              <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                <img
                  alt=""
                  src={test2}
                  width="50"
                  height="50"
                  decoding="async"
                  data-nimg="1"
                  className="inline-block"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <div>
              <p className="leading-none tracking-wide text-gray-400">
                Natalie Hernandez
              </p>
              <p className="text-xs leading-none tracking-wide text-gray-300">
                CEO @Stockey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
