import React from "react";
import { Link } from "react-router-dom";
import DoNotWait from "./DoNotWait";
import WhyOurApp from "./WhyOurApp";
import Footer from "../Home/Footer/Footer";

const AboutUs = () => {
  return (
    <div>
      <div className="backgroundShopImage py-5">
        <div>
          <Link to="/">
            <div className="flex sm:flex-col md:flex-row justify-between items-center">
              <div>
                <img
                  src="https://food-drop.themerex.net/wp-content/uploads/2016/12/logo_light.png"
                  alt=""
                  className="pt-5 pl-10 w-3/4"
                />
              </div>
            </div>
          </Link>
        </div>
        <p className="recipeFont text-center text-white text-[80px]">Our Benefits</p>
        <div className="flex justify-center gap-5 text-sm text-gray-100">
          <Link to="/">
            <p>Home</p>
          </Link>
          <hr />
          <Link to="/aboutUs">
            <p>About Us</p>
          </Link>
        </div>
      </div>
      <WhyOurApp/>
      <DoNotWait/>
      <Footer/>
    </div>
  );
};

export default AboutUs;
