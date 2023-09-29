import React, { useEffect, useState } from "react";
import { allItems } from "../../api/shop/shop";
import { Link } from "react-router-dom";
import { FaCartArrowDown, FaLink } from "react-icons/fa";
import Loader from "../../Shared/Loader/Loader";

const RelatedProduct = ({ selectCategories, shop }) => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    allItems().then((data) => {
      const filteredData = data.filter(
        (item) =>
          item?.request == "approve" &&
          item["categories"][0][0] == shop["categories"][0][0]
      );
      setFoods(filteredData);
      setLoading(false);
    });
  }, []);
  console.log(foods);
  return (
    <div className="bg-[#F4F2EE]  py-10 ">
      <h1 className="uppercase recipeFont text-[60px] text-center text-[#474747] pb-5 ">
        related products
      </h1>
      <>
        {loading && <Loader />}
        {!loading && (
          <div className="grid max-w-[1500px] mx-auto md:grid-cols-3">
            {foods.map((item, index) => (
              <Link key={index} to={`/shopDetails/${item._id}`}>
                <div className="bg-white mb-5 shadow-2xl h-[500px]  w-[350px] group pb-10">
                  <div className="relative">
                    <img
                      className="max-w-full w-[500px] h-[300px]  group-hover:rounded-none  duration-500 "
                      src={item.foodImage}
                      alt=""
                    />
                    <div className="opacity-0  group-hover:opacity-80 absolute top-0 right-0 left-0 bottom-0  transition-opacity duration-1000 ease-in-out transform  bg-gray-700 border border-gray-300 rounded p-2shadow">
                      <div className="my-20 text-center mx-2 flex gap-2 justify-center">
                        <div className=" inline-block border-4 hover:bg-[#BAC64A]  px-3 py-3 border-[#BAC64A]">
                          <FaCartArrowDown className="text-white" size={26} />
                        </div>
                        <div className=" inline-block border-4 hover:bg-[#BAC64A]  px-3 py-3 border-[#BAC64A]">
                          <FaLink className="text-white" size={26} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="discoverFont text-[30px] text-[#4D4747] my-2 text-center pt-3">
                    {item.name}
                  </p>
                  <p className="text-center mx-10 text-gray-400">
                    {item.title}
                  </p>
                  <p className="text-center pt-2 font-semibold text-[#BFC64A]">
                    $ {parseFloat(item.price)}.00
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default RelatedProduct;
