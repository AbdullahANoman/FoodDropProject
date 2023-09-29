import React from "react";
import { Link } from "react-router-dom";

const PopularCategories = () => {
  const categories = [
    {
      image: "https://i.ibb.co/k2Mwqj2/image-3.jpg",
      name: "Pasta & Pizza",
      title: "Tmpor incididunt ut labore et dolore menim ad minim.",
    },
    {
      image: "https://i.ibb.co/bRMkYvL/image-8.jpg",
      name: "Sandwiches",
      title: "Nisi ut aliquip ex ea commodo consequuis aute irure dolor.",
    },
    {
      image: "https://i.ibb.co/qWr6b2D/image-12.jpg",
      name: "Salads",
      title: "Veniam, quis nostrud exer citation ullamco laboris nisi.",
    },
  ];
  return (
    <div className="bg-[#F4F2EE] py-20">
      <p
        className="recipeFont text-[80px] text-[#474747] text-center pb-5"
        style={{ fontWeight: "bolder" }}
      >
        Popular Categories
      </p>
      <div className="flex flex-col items-center md:flex-row   md:px-20 justify-center gap-20 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white mb-5 shadow-2xl w-[350px] group pb-10"
          >
            <img
              className="max-w-full w-[500px] h-[300px] rounded-b-[250px] group-hover:rounded-none  duration-500 "
              src={category.image}
              alt=""
            />
            <p className="discoverFont text-[30px] text-[#4D4747] my-2 text-center pt-3">
              {category?.name}
            </p>
            <p className="text-center mx-10 text-gray-400">{category.title}</p>
            <div className="text-center mt-3">
              <Link to="/shop">
                <button className="uppercase px-6 py-4 text-[12px] border-b-4 border-[#54AEC1] bg-[#5DC2D7] hover:bg-[#54AEC1] text-white rounded-3xl ">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
