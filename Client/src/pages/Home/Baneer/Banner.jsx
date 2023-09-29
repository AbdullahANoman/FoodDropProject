import React from "react";

const Banner = ({toggle}) => {
  return (
    toggle && 
    <div className="py-24 ">
      <div className="flex  items-center gap-5">
        <p className="text-[#474747] text-4xl  md:text-8xl  discoverFont  ">discover</p>
        <p className="text-[#BAC64A] text-[60px] md:text-[160px] font-bold  recipeFont uppercase">recipes</p>
      </div>
      <p className="text-gray-400 py-5 text-[18px] space-y-10">
        You can create your own cookbook one recipe at a time and   <br />  it helps you
        find recipes that others have made.
      </p>
      <div className="flex gap-5">
        <div>
          <img
            src="https://food-drop.themerex.net/wp-content/uploads/2016/12/slider-link-2.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://food-drop.themerex.net/wp-content/uploads/2016/12/slider-link-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
