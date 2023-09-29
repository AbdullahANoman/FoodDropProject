import React from "react";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import { Outlet } from "react-router-dom";
import { checkUser } from "../utils/utils";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <AdminDashboard />
      <div className="flex-1  md:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
