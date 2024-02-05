import React from "react";
import expertimg from "../images/expert.png";

const Expert = () => {
  return (
    <div className="container mx-auto lg:px-20">
      <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
        <div className="col-span-2 pb-10">
          <div className="card w-72">
            <img src={expertimg} alt="" />
          </div>
        </div>
        <div className="col-span-2 ml-14 pb-10 lg:col-span-3 lg:flex lg:items-end">
        <div className="space-y-4 md:space-y-0 md:flex md:items-start">

          <h2 className="text-4xl font-thin tracking-wide text-gray-300">
            A better way to hire
          </h2>
          <h2 className="text-4xl font-thin tracking-wide text-gray-300">
            Shopify Help
          </h2>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Expert;
