import React, { useState } from "react";
import FoodAddDetailsModal from "./FoodAddDetailsModal";

const FoodsTable = ({ food, setFoods }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { foodImage, name, price, host, _id, request } = food || {};

  return (
    <>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="block relative">
                <img
                  alt="profile"
                  src={foodImage}
                  className="mx-auto object-cover rounded h-20 w-15 "
                />
              </div>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{name}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{host?.name} </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {request == "deny" ? <p className="text-red-400 bg-red-200 inline-block px-3 text-sm font-semibold py-1 rounded-xl ">Deny</p> :<p className="text-green-900 bg-red-200 inline-block px-3 text-sm font-semibold py-1 rounded-xl ">Approved</p> }{" "}
          </p>
        </td>
        <td className="px-5 py-5  border-b  border-gray-200  bg-white text-sm">
          <span
            onClick={() => setIsOpen(true)}
            className="relative  cursor-pointer inline-block px-3 py-1  font-semibold text-green-900 leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span className="relative ">Details</span>
          </span>
        </td>
      </tr>
      <FoodAddDetailsModal
        setFoods={setFoods}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        id={_id}
        food={food}
      ></FoodAddDetailsModal>
    </>
  );
};

export default FoodsTable;
