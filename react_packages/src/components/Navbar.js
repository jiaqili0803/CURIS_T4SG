import React from "react";
import Logo from "../assets/curis_loogo.png";

function Navbar() {
  return (
    <div className = "Navbar">
      <div className = "leftSide">
        <img src = {Logo} />
      </div>
      <div className = "rightSide"></div>
    </div>
  );
}

export default Navbar;
