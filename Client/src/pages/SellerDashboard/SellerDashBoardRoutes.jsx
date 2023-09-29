import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";
const SellerDashBoardRoutes = () => {
  return (
    <div>
      <hr className="mt-7" />
      <NavLink
        to="/dashBoard/myAllFoods"
        className={({ isActive }) =>
          `flex items-center px-4 py-4  mt-1 transition-colors duration-300 transform  hover:bg-white   hover:text-black ${
            isActive ? "bg-white  text-black" : "text-white"
          }`
        }
      >
        <FaUserSecret />

        <span className="mx-4 font-medium">My All Foods</span>
      </NavLink>

      <hr className="mt-1" />
      <NavLink
        to="/dashBoard/addFoods"
        className={({ isActive }) =>
          `flex items-center px-4 py-4  mt-1 transition-colors duration-300 transform  hover:bg-white   hover:text-black ${
            isActive ? "bg-white  text-black" : "text-white"
          }`
        }
      >
        <FaUserSecret />

        <span className="mx-4 font-medium">Add Foods</span>
      </NavLink>
      <hr className="mt-1" />
    </div>
  );
};

export default SellerDashBoardRoutes;
