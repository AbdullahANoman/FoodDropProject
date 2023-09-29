import React, { useState } from "react";
import MakeRiderModal from "./MakeRiderModal";

const MakeRider = () => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="max-w-[1400px] bg-[#FFFFFF] px-5 md:px-0 grid-cols-1 mx-auto items-center grid py-20 md:grid-cols-2 pt-10 gap-10">
      <div>
        <img
          src="https://food-drop.themerex.net/wp-content/uploads/2016/12/tablet-about-1.jpg"
          alt=""
          className="hidden md:block"
        />
      </div>
      <div>
        <div className="text-black">
          <p className="recipeFont text-[80px] ">Become a Rider</p>
          <p className=" text-[20px] pt-5">
            You can create your own cookbook one recipe at a time and it helps
            you find recipes that others have made.
          </p>
          <p className=" text-[20px] pt-5">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusan.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className={` mt-5 bg-[#BAC64A] text-white font-semibold px-10 py-5  rounded-full border-b-4   border-b-[#E5E5E5] hover:bg-[#aab35d]    `}
          >
            Request for Rider
          </button>
        </div>
      </div>
      <MakeRiderModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default MakeRider;
