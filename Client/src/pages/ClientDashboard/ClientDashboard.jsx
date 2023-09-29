import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MakeSeller from "./MakeSeller";
import { checkUser } from "../../utils/utils";
import Loader from "../../Shared/Loader/Loader";
import { allItems } from "../../api/shop/shop";
import MakeRider from "./MakeRider";
import Footer from "../Home/Footer/Footer";

const ClientDashboard = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    allItems().then((data) => {
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="backgroundShopImage py-5">
            <div>
              <Link to="/">
                <div className="flex sm:flex-col md:flex-row justify-between items-center">
                  <div>
                    <img
                      src="https://food-drop.themerex.net/wp-content/uploads/2016/12/logo_light.png"
                      alt=""
                      className="pt-5 pl-10  w-3/4"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <p className="hidden md:block recipeFont text-center text-white text-[80px]">
              Food Drop Family
            </p>
            <div className="flex justify-center gap-5 text-sm text-gray-100">
              <Link to="/">
                <p>Home</p>
              </Link>
              <hr />
            </div>
            <div>
              <MakeSeller />
            </div>
          </div>
          <MakeRider />
          <Footer/>
        </div>
      )}
    </>
  );
};

export default ClientDashboard;
