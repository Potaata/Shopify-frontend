import React from "react";

//importing expert and storetasker components
import Expert from "./Expert";
import Storetasker from "./Storetasker";

const StoretaskerExpert = () => {
  return (
    <div className="relative">
      {/* Empty div to reserve space for Expert */}
      <div style={{ height: "31rem" }}></div>

      {/* Absolute positioning for Expert */}
      <div className="hidden lg:block absolute top-0 left-0 right-0 z-10">
        <Expert />
      </div>

      {/* Container for Expert on large screens */}
      <div className="lg:hidden">
        <Expert />
      </div>

      {/* Storetasker component */}
      <div className="relative z-0">
        <Storetasker />
      </div>
    </div>
  );
};

export default StoretaskerExpert;
