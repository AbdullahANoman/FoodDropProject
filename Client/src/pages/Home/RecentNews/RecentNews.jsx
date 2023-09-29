import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./News.css";
import { Link } from "react-router-dom";
const RecentNews = () => {
  const categories = [
    {
      tittle: "Cooking Gluten-free Dishes",
    },
    {
      tittle: "Baked Fish with Sweet Potato Mojos",
    },
    {
      tittle: "Coconut & Cinnamon Brown Rice Pudding",
    },
  ];
  return (
    <div className="backgroundImageNews hidden md:block  ">
      <div className="py-32 md:pl-[300px]">
        <p
          className="recipeFont text-[80px] text-center md:text-start text-[#474747]  pb-5 "
          style={{ fontWeight: "bolder" }}
        >
          recent news
        </p>
        <div className="flex items-center md:items-start flex-col gap-5">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#F4F2EE] md:w-1/2 w-3/4 py-10 px-10 flex  group gap-5  items-center justify-between "
            >
              <div>
                <p className="hover:text-[#BAC64A] text-2xl text-[#474747]">
                  {category.tittle}
                </p>
                <p className="text-[#B9B1BA] text-sm pt-2">
                  By{" "}
                  <span className="text-[#BAC64A] hover:text-black">
                    {" "}
                    Adam Brown
                  </span>{" "}
                  | on{" "}
                  <span className="text-[#BAC64A] hover:text-black">
                    {" "}
                    August 29, 2016{" "}
                  </span>{" "}
                  | in{" "}
                  <span className="text-[#BAC64A] hover:text-black">
                    {" "}
                    PROJECTS
                  </span>
                  ,{" "}
                  <span className="text-[#BAC64A] hover:text-black">
                    RECIPES & MENU
                  </span>
                </p>
              </div>
              <div
                className="bg-white inline-block px-4 py-4 group-hover:bg-[#BAC64A] duration-500 "
                style={{ borderRadius: "50%" }}
              >
                <FaArrowRight className="text-[#BAC64A] group-hover:text-white duration-500"></FaArrowRight>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center md:text-start">
          <Link to="/aboutUs">
            <button className="uppercase mt-3 md:mt-10 px-6 py-4 text-[12px] border-b-4 border-[#A7B242] bg-[#BAC64A] hover:border-b-8 duration-300 text-white rounded-3xl">
              {" "}
              View all post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
