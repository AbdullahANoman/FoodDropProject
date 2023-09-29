import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/features/users/userSlice";
import { auth } from "../../firebase/firebase.config";

const ToggleNavbar = ({ setToggle }) => {
  const [plusToggle, setPlusToggle] = useState(true);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="">
      <div className="flex justify-between items-center ">
        <Link to="/">
          <div onClick={() => setToggle(true)}>
            <img
              src="https://food-drop.themerex.net/wp-content/uploads/2016/12/logo_light.png"
              alt=""
            />
          </div>
        </Link>
        <div
          onClick={() => setToggle(true)}
          className="bg-white inline-block px-4 py-2"
        >
          X
        </div>
      </div>
      <nav className="flex justify-center">
        <ul>
          <NavLink
            onClick={() => setToggle(true)}
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform recipeFont text-[80px] ${
                !plusToggle && "text-white"
              }   hover:text-gray-700 ${
                isActive ? " text-gray-700" : "text-white"
              }`
            }
          >
            Home
          </NavLink>
          <li>
            <div
              onClick={() => setPlusToggle(!plusToggle)}
              className={`flex items-center justify-center px-4 py-2 transition-colors duration-300 transform recipeFont text-[80px]  text-white     hover:text-gray-700 `}
            >
              Feature {plusToggle ? "+" : "-"}
            </div>
            {!plusToggle && (
              <ul>
                <Link to="/shop">
                  <li className=" flex items-center justify-center   text-center recipeFont text-[40px] duration-300 hover:text-white text-gray-700">
                    Shop
                  </li>
                </Link>
                <Link to="/aboutUs">
                  <li className=" flex items-center justify-center   text-center recipeFont text-[40px] duration-300 hover:text-white text-gray-700">
                    About Us
                  </li>
                </Link>
              </ul>
            )}
          </li>
          <NavLink
            onClick={() => setToggle(true)}
            to="/dashBoard"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform recipeFont text-[80px] ${
                !plusToggle && "text-white"
              }   hover:text-gray-700 ${
                isActive ? " text-gray-700" : "text-white"
              }`
            }
          >
            Dashboard
          </NavLink>
          <li>
            {user ? (
              <NavLink
                onClick={() => signOut()}
                className={`flex items-center  px-4 py-2 text-white transition-colors duration-300 transform recipeFont text-[80px]   hover:text-gray-700  `}
              >
                Log Out
              </NavLink>
            ) : (
              <NavLink
                onClick={() => setToggle(true)}
                to="/login"
                className={({ isActive }) =>
                  `flex items-center  px-4 py-2 transition-colors duration-300 transform recipeFont text-[80px]     hover:text-gray-700 ${
                    isActive ? "text-gray-700" : "text-white"
                  }`
                }
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ToggleNavbar;
