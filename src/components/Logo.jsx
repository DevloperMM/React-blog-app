import React from "react";
import myLogo from "../assets/img1.jpg";

function Logo({ width = "100px" }) {
  return (
    <div style={{ width }}>
      <img src={myLogo} alt="Logo" />
    </div>
  );
}

export default Logo;
