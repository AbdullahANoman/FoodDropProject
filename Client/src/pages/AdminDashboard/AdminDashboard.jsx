import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/users/userSlice";
import DashboardRoutes from "./DashboardRoutes";
import SellerDashBoardRoutes from "../SellerDashboard/SellerDashBoardRoutes";
const AdminDashboard = () => {
  const [toggle, setToggle] = useState(false);
  const [isActive, setActive] = useState("false");
  const user = useSelector(selectUser);
  const { photoUrl, userName, userRole, userEmail } = user || {};
  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold rounded">
            <Link className="text-center" to="/">
              <img
                src="https://food-drop.themerex.net/wp-content/uploads/2016/12/home-logo.png"
                alt=""
                className="w-1/2"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#6AC5D6] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="w-full hidden md:flex py-2 justify-center items-center bg-rose-100 mx-auto rounded">
              <Link className="flex justify-center" to="/">
                <img
                  src="https://food-drop.themerex.net/wp-content/uploads/2016/12/home-logo.png"
                  alt=""
                  className="w-1/2"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={photoUrl}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <Link to="/dashboard">
                <h4 className="mx-2 mt-2 font-medium text-white hover:underline">
                  {userName}
                </h4>
              </Link>
              <Link to="/dashboard">
                <h4 className="mx-2 mt-2 font-medium text-white hover:underline">
                  {userRole == 'seller' && 'Seller'}
                  {
                    userRole == 'admin' && 'Admin'
                  }
                </h4>
              </Link>
              <Link to="/dashboard">
                <p className="mx-2 mt-1 text-sm font-medium text-white  hover:underline">
                  {userEmail}
                </p>
              </Link>
            </div>
          </div>
          {userRole == "admin" && <DashboardRoutes />}
          {userRole == "seller" && <SellerDashBoardRoutes />}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
