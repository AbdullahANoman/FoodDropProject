import React from "react";
import { FaCartArrowDown, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const FreshDelicacies = () => {
  const categories = [
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2019/07/product-4-300x300.jpg",
      name: "Sweet breakfast",
      title: "Tmpor incididunt ut labore et dolore menim ad minim.",
      price: 13.0,
    },
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2019/07/product-10-300x300.jpg",
      name: "Veggie sandwhich",
      title: "Nisi ut aliquip ex ea commodo consequuis aute irure dolor.",
      price: 15.0,
    },
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2019/07/product-7-370x370.jpg",
      name: "Salmon pasta",
      title: "Veniam, quis nostrud exer citation ullamco laboris nisi.",
      price: 17.0,
    },
  ];
  return (
    <div className="bg-[#F4F2EE] py-20">
      <p
        className="recipeFont text-[80px] text-[#474747] text-center pb-5"
        style={{ fontWeight: "bolder" }}
      >
        Fresh delicacies
      </p>
      <div className="flex flex-col items-center  md:flex-row  justify-center gap-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white mb-5 shadow-2xl w-[350px] group pb-10"
          >
            <div className="relative">
              <img
                className="max-w-full w-[500px] h-[300px]  group-hover:rounded-none  duration-500 "
                src={category.image}
                alt=""
              />
              <div className="opacity-0  group-hover:opacity-80 absolute top-0 right-0 left-0 bottom-0  transition-opacity duration-1000 ease-in-out transform  bg-gray-700 border border-gray-300 rounded p-2shadow">
                <div className="my-20 text-center mx-2 flex gap-2 justify-center">
                  <div className=" inline-block border-4 hover:bg-[#BAC64A]  px-3 py-3 border-[#BAC64A]">
                    <FaCartArrowDown className="text-white" size={26} />
                  </div>
                  <div className=" inline-block border-4 hover:bg-[#BAC64A]  px-3 py-3 border-[#BAC64A]">
                    <Link to="/shop"> <FaLink className="text-white" size={26} /></Link>
                  </div>
                </div>
              </div>
            </div>
            <p className="discoverFont text-[30px] text-[#4D4747] my-2 text-center pt-3">
              {category.name}
            </p>
            <p className="text-center mx-10 text-gray-400">{category.title}</p>
            <p className="text-center pt-2 font-semibold text-[#BFC64A]">
              $ {parseFloat(category.price)}.00
            </p>
          </div>
        ))}
      </div>
      <div className="text-center ">
        <Link to="/shop">
          <button className="uppercase px-6 py-4  mt-5 text-[12px] border-b-4 border-[#A7B242] bg-[#BAC64A] hover:border-b-8 duration-300 text-white rounded-3xl">
            {" "}
            order online
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FreshDelicacies;
