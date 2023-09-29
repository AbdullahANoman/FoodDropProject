import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Shop from "../pages/Shop/Shop";
import ShopDetails from "../pages/Shop/ShopDetails";
import { singleItems } from "../api/shop/shop";
import DashBoard from "../pages/Dashboard/DashBoard";
import RequestedSeller from "../pages/AdminDashboard/RequestedSeller/RequestedSeller";
import AllUsers from "../pages/AdminDashboard/AllUsers/AllUsers";
import MyAllFoods from "../pages/SellerDashboard/MyAllFoods/MyAllFoods";
import AddFoods from "../pages/SellerDashboard/AddFoods/AddFoods";
import FoodAdd from "../pages/SellerDashboard/AddFoods/FoodAdd";
import PrivateRoute from "./PrivateRoute";
import RequestedRider from "../pages/AdminDashboard/RequestedRider/RequestedRider";
import AboutUs from "../pages/AboutUs/AboutUs";
import FoodAddRequest from "../pages/AdminDashboard/FoodAddRequest/FoodAddRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/shop",
    element: (
      <PrivateRoute>
        <Shop />
      </PrivateRoute>
    ),
  },
  {
    path: '/aboutUs',
    element:<AboutUs/>
  },
  {
    path: "/dashBoard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "allUsers",
        element: <AllUsers />,
      },
      {
        path: "requestedSeller",
        element: <RequestedSeller />,
      },
      {
        path: "requestedRider",
        element: <RequestedRider />,
      },
      {
        path :'foodAddRequest',
        element : <FoodAddRequest/>
      },
      {
        path: "myAllFoods",
        element: <MyAllFoods />,
      },
      {
        path: "addFoods",
        element: <FoodAdd />,
      },
    ],
  },
  {
    path: "/shopDetails/:id",
    element: <ShopDetails />,
    loader: ({ params }) => singleItems(params.id),
  },
]);

export default router;
