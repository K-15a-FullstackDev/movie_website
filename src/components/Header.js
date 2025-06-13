import React from "react";

const Header = () => {
  return (
    <div className="absolute top-4 left-6 z-20">
      <img
        src="/logo_app.png"
        alt="KStreamX Logo"
        className="w-28 md:w-36 object-contain"
      />
    </div>
  );
};

export default Header;
