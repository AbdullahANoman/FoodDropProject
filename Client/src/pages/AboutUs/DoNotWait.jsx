import React from "react";
import { Link } from "react-router-dom";

const DoNotWait = () => {
  return (
    <div className="backgroundShopImage text-white py-20 px-5">
      <p className="uppercase text-center recipeFont text-[60px]">
        Don't Wait. Start Out Today!
      </p>
      <p className="text-center text-[16px] font-thin ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam.
      </p>
      <div className="flex justify-center ">
        <Link to="/shop">
          <button className="uppercase bg-[#FFFFFF] text-[10px] text-[#BAC64A] px-6 py-3 border-2  border-b-[#A7B242]  rounded-3xl my-4  border-[#BAC64A]">
            get it now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoNotWait;
