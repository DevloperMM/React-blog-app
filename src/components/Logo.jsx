import React from "react";
import myLogo from "../assets/logo.png";

function Logo({ width = "100px" }) {
  return (
    <div style={{ width }}>
      <img src={myLogo} alt="Logo" />
    </div>
  );
}

export default Logo;
