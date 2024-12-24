import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div style={{ width }}>
      <img src={import.meta.env.VITE_PUBLIC_LOGO} alt="Logo" />
    </div>
  );
}

export default Logo;
