import React, { useState } from "react";
import MakeSellerModal from "./MakeSellerModal";

const MakeSeller = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 px-5 md:px-0 md:grid-cols-2 pt-10 gap-10">
      <div>
        <p className="recipeFont text-[80px] text-white">Become a seller</p>
        <p className="text-white text-[20px] pt-5">
          You can create your own cookbook one recipe at a time and it helps you
          find recipes that others have made.
        </p>
        <p className="text-white text-[20px] pt-5">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusan.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className={` mt-5 bg-[#5DC2D7] font-semibold text-white px-10 py-5  rounded-full border-b-4   border-b-[#E5E5E5] hover:bg-[#4ba0b1]  `}
        >
          Request for Seller
        </button>
      </div>
      <div>
        <img
          src="https://food-drop.themerex.net/wp-content/uploads/2016/12/bg-promo-view.jpg"
          alt=""
        />
      </div>
      <MakeSellerModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default MakeSeller;
