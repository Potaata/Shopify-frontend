import React from "react";

//importing expert and storetasker components
import Expert from "./Expert";
import Storetasker from "./Storetasker";

const StoretaskerExpert = () => {
  return (
<div class="relative-container">
    {/* <!-- Empty div to reserve space for Expert --> */}
    <div class="expert-placeholder"></div>

    {/* <!-- Expert component container --> */}
    <div class="expert-container">
        {/* <!-- Expert component content --> */}
        <Expert />
    </div>

    {/* <!-- Storetasker component --> */}
    <div class="storetasker">
        {/* <!-- Storetasker component content --> */}
        <Storetasker />
    </div>
</div>


  );
};

export default StoretaskerExpert;
