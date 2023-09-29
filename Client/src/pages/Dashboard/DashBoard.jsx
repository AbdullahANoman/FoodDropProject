import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/users/userSlice";
import { checkUser } from "../../utils/utils";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import ClientDashboard from "../ClientDashboard/ClientDashboard";
import DashboardLayout from "../../layouts/DashboardLayout";
import Loader from "../../Shared/Loader/Loader";

const DashBoard = () => {
  const user = useSelector(selectUser);
  checkUser();
  const { userRole } = user || {};
  return (
    <>
      {userRole == "seller" && <DashboardLayout /> }
      {userRole == "admin" && <DashboardLayout /> }
      {userRole == "client" && <ClientDashboard />}
      
    </>
  );
};

export default DashBoard;
