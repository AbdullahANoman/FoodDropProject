import React, { useState } from "react";
import { FaChevronUp, FaChevronDown, FaSearch } from "react-icons/fa";
import "./Shop.css";
import Review from "./Review";

const ShopDetailsCard = ({ shop }) => {
  const [itemCount, setItemCount] = useState(1);
  const {
    _id,
    name,
    foodImage,
    price,
    subTitle,
    sku,
    categories,
    tags,
    productId,
    reviews,
  } = shop || {};

  console.log(shop);

  const openImage = () => {
    window.open(foodImage);
  };

  return (
    <div className="max-w-[1500px] mx-auto  px-10 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <figure
            className="zoom"
            style={{
              backgroundImage: `url(${foodImage})`,
            }}
          >
            <img className="relative md:w-[300px]" src={foodImage} />
            <div
              onClick={() => openImage()}
              className="absolute bg-white px-3 py-3 cursor-pointer rounded-full top-2 right-4"
            >
              <FaSearch />
            </div>
          </figure>
        </div>
        <div>
          <p className="text-[#BAC64A] font-semibold text-[22px] pb-10">
            $ {price}.00
          </p>
          <p className="text-gray-800 font-thin pb-10">{subTitle}</p>
          <div className="py-5 flex gap-10 items-center">
            <div className="border border-none rounded-l-3xl  bg-[#F4F2EE] text-gray-500   w-[100px] ">
              <div className="flex gap-10 justify-between items-center">
                <div>
                  <p className="text-center ml-6 font-sem text-[20px] ">
                    {itemCount >= 0 ? itemCount : 0}
                  </p>
                </div>
                <div>
                  <div className="flex flex-col gap-5 ">
                    <button>
                      <FaChevronUp
                        // size={10}
                        onClick={() => setItemCount((prev) => prev + 1)}
                        className="text-gray-400  cursor-pointer hover:text-black"
                      ></FaChevronUp>
                    </button>
                    <button>
                      <FaChevronDown
                        // size={10}
                        onClick={() => setItemCount((prev) => prev - 1)}
                        className="text-gray-400 cursor-pointer hover:text-black"
                      ></FaChevronDown>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="uppercase px-6 py-4 text-[12px] border-b-4 border-[#A7B242] bg-[#BAC64A]  text-white rounded-3xl">
                Buy Now
              </button>
            </div>
          </div>
          <p className="pt-5">
            <span className="text-[#4D4747] font-semibold">SKU : </span>{" "}
            <span className="text-gray-400 font-semibold">{sku}</span>
          </p>
          <p>
            <span className="text-[#4D4747] font-semibold">Categories : </span>
            {categories.map((item, index) => (
              <span
                className="text-gray-400 font-semibold hover:text-[#BAC64A]"
                key={index}
              >
                {item},
              </span>
            ))}
          </p>
          <p>
            <span className="text-[#4D4747] font-semibold">Tags : </span>
            {tags.map((item, index) => (
              <span
                className="text-gray-400 font-semibold hover:text-[#BAC64A]"
                key={index}
              >
                {item},{" "}
              </span>
            ))}
          </p>
          <p className="text-[#4D4747] font-semibold">
            Product ID :{" "}
            <span className="text-gray-400 font-semibold">{productId}</span>
          </p>
        </div>
      </div>
      {/* description and reviews */}
      <Review subTitle={subTitle} name={name} reviews={reviews} id={_id} />
    </div>
  );
};

export default ShopDetailsCard;
