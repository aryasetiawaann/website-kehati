import React from "react";
import "./button.css";
import { BsArrowUpRight } from "react-icons/bs";

const Button = ({ title, scientific, arrow }) => {
  return (
    <div className="button">
      <svg className="button-icon" width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.4" cx="8" cy="8.00001" r="8" fill="#FF9B3F" />
        <circle cx="8" cy="8.00001" r="4" fill="#FF9B3F" />
      </svg>

      <div className="button-content">
        <p>
          {title}
          {arrow && <BsArrowUpRight style={{ marginLeft: "2px" }} />}
        </p>
        <p>
          <i>{scientific}</i>
        </p>
      </div>
    </div>
  );
};

export default Button;
