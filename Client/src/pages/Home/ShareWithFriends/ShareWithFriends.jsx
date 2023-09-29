import React from "react";
import "./Friends.css";
import { Link } from "react-router-dom";
const ShareWithFriends = () => {
  const categories = [
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2016/12/icon-new-1-370x208.png",
      title: "Create a Profile",
      subTitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, excepturi?",
    },
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2016/12/icon-new-2-370x208.png",
      title: "Find Friends",
      subTitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, excepturi?",
    },
  ];
  return (
    <div className="backgroundImageFriends py-10 ">
      <div className="md:py-[150px]">
        <p
          className="recipeFont text-[80px]  text-[#474747] text-center pb-5"
          style={{ fontWeight: "bolder" }}
        >
          Share with Friends
        </p>
        <p className="text-lg text-center  text-[#BFB4B3]">
          Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex flex-col items-center md:flex-row justify-center  gap-5 py-5">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#F4F2EE] w-[350px]  group py-10 rounded-2xl"
            >
              <img
                className="mx-auto group-hover:scale-90  duration-300"
                src={category.image}
                alt=""
              />
              <p className="discoverFont text-center pt-5 text-[#474747] text-[34px]">
                {category.title}
              </p>
              <p className="text-center  text-[#A59C97]">{category.subTitle}</p>
            </div>
          ))}
        </div>
        <div className="text-center ">
          <Link to="/aboutUs">
            <button className="uppercase px-6 py-4 text-[12px] border-b-4 border-[#A7B242] bg-[#BAC64A] hover:border-b-8 duration-300 text-white rounded-3xl">
              {" "}
              More Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShareWithFriends;
