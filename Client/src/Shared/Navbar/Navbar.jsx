import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import ToggleNavbar from "./ToggleNavbar";
const Navbar = ({ toggle, setToggle }) => {
  return toggle ? (
    <div className="flex sm:flex-col md:flex-row justify-between items-center">
      <div>
        <img
          src="https://food-drop.themerex.net/wp-content/uploads/2016/12/home-logo.png"
          alt=""
        />
      </div>
      <div
        onClick={() => setToggle(false)}
        className="bg-[#BAC64A] inline-block px-4 py-2"
      >
        <FaBars className="text-white" />
      </div>
    </div>
  ) : (
    <ToggleNavbar setToggle={setToggle} />
  );
};

export default Navbar;
