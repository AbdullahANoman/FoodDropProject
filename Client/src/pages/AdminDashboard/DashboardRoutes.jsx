import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";
const DashboardRoutes = () => {
  return (
    <div>
      <hr className="mt-7" />
      <NavLink
        to="/dashBoard/allUsers"
        className={({ isActive }) =>
          `flex items-center px-4 py-4  mt-1 transition-colors duration-300 transform  hover:bg-white   hover:text-black ${
            isActive ? "bg-white  text-[#6AC5D6]" : "text-white"
          }`
        }
      >
        <FaUserSecret />

        <span className="mx-4 font-medium">All Users</span>
      </NavLink>

      <hr className="mt-1" />
      <NavLink
        to="/dashBoard/requestedSeller"
        className={({ isActive }) =>
          `flex items-center px-4 py-4  mt-1 transition-colors duration-300 transform  hover:bg-white   hover:text-black ${
            isActive ? "bg-white  text-[#6AC5D6]" : "text-white"
          }`
        }
      >
        <FaUserSecret />

        <span className="mx-4 font-medium">Requested Seller</span>
      </NavLink>
      <hr className="mt-1" />

      <NavLink
        to="/dashBoard/requestedRider"
        className={({ isActive }) =>
          `flex items-center px-4 py-4  mt-1 transition-colors duration-300 transform  hover:bg-white   hover:text-black ${
            isActive ? "bg-white  text-[#6AC5D6]" : "text-white"
          }`
        }
      >
        <FaUserSecret />

        <span className="mx-4 font-medium">Requested Rider</span>
      </NavLink>
      <hr className="mt-1" />
      <NavLink
        to="/dashBoard/foodAddRequest"
        className={({ isActive }) =>
          `flex items-center px-4 py-4  mt-1 transition-colors duration-300 transform  hover:bg-white   hover:text-black ${
            isActive ? "bg-white  text-[#6AC5D6]" : "text-white"
          }`
        }
      >
        <FaUserSecret />

        <span className="mx-4 font-medium">Food Add Request</span>
      </NavLink>
      <hr className="mt-1" />
    </div>
  );
};

export default DashboardRoutes;
