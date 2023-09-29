import React from "react";
import { FaLink, FaLocationArrow, FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterTop = () => {
  const items = [
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2019/07/product-7-370x370.jpg",
      comment: 41,
      love: 23,
    },
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2019/07/product-5-370x370.jpg",
      comment: 25,
      love: 32,
    },
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2019/07/product-2-370x370.jpg",
      comment: 55,
      love: 39,
    },
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2019/07/product-1-370x370.jpg",
      comment: 51,
      love: 49,
    },
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2019/07/product-6-370x370.jpg",
      comment: 21,
      love: 29,
    },
  ];
  return (
    <div className="bg-[#5DC2D7] flex flex-col md:flex-row ">
      <div className="text-center py-20 text-white md:w-[350px]">
        <img
          className="mx-auto"
          src="https://food-drop.themerex.net/wp-content/uploads/2016/12/inst-img.png"
          alt=""
        />
        <p className="recipeFont text-6xl">Instagram</p>
        <p className="text-[12px] py-2">#FOODDROP</p>
      </div>
      <div className="grid grid-cols-5 gap-0">
        {items.map((item, index) => (
          <div className="group">
            <div className="relative">
              <img
                className="max-w-full   group-hover:rounded-none  duration-500 "
                src={item?.image}
                alt=""
              />
              <div className="opacity-0  group-hover:opacity-80 absolute top-0 right-0 left-0 bottom-0  transition-opacity duration-1000 ease-in-out transform  bg-gray-700 border border-gray-300 rounded p-2 shadow">
                <div className="my-5 md:my-20 text-center mx-2 flex gap-2 justify-center">
                  <div className="text-white flex items-center text-sm gap-2">
                    <FaLocationArrow size={15} /> {item.love}
                  </div>
                  <div className="text-white flex items-center text-sm gap-2">
                    <FaRegCommentDots size={15} className="text-white" />{" "}
                    {item?.comment}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterTop;
