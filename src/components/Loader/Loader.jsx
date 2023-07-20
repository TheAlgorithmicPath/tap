import React from "react";
import "./style.css";
const Loader = () => {
  // Splitting();
  return (
    <div className="loader__parent">
      <div class="wrapper">
        <button className="loader__button">
          Loading ...
          <svg>
            <rect x="1" y="1"></rect>
          </svg>
        </button>
      </div>
      {/* <div class="company__name">THE ALGORITHMIC PATH</div> */}
    </div>
  );
};

export default Loader;
