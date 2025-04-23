// LinkedInStyleSpinner.js
import React from "react";

const CustomSpinner = () => {
  return (
    <div className="linkedin-loader-wrapper">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
        alt="LinkedIn logo"
        className="linkedin-logo"
      />
      <div className="progress-bar-container">
        <div className="progress-bar-fill"></div>
      </div>
    </div>
  );
};

export default CustomSpinner;
