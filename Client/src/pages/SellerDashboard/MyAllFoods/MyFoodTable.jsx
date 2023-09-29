import React, { useState } from "react";
import FoodDeleteModal from "../../DashBoardModal/FoodDeleteModal";
import FoodUpdateModal from "../../DashBoardModal/FoodUpdateModal";

const MyFoodTable = ({ food, setMyFoods }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  const { foodImage, name, _id } = food || {};
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={foodImage}
                className="mx-auto object-cover rounded h-20 w-32 "
              />
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>

      <td className="px-5 py-5  border-b  border-gray-200  bg-white text-sm">
        <span
          onClick={() => setIsUpdateOpen(true)}
          className="relative  cursor-pointer inline-block px-3 py-1  font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative ">Update</span>
        </span>
      </td>
      <td className="px-5 py-5  border-b  border-gray-200  bg-white text-sm">
        <span
          onClick={() => setIsDeleteOpen(true)}
          className="relative  cursor-pointer inline-block px-3 py-1  font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative text-red-400">Remove</span>
        </span>
      </td>
      <FoodDeleteModal
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
        id={_id}
        setMyFoods={setMyFoods}
      />
      <FoodUpdateModal
        isUpdateOpen={isUpdateOpen}
        setIsUpdateOpen={setIsUpdateOpen}
        id={_id}
        setMyFoods={setMyFoods}
        food={food}
      />
    </tr>
  );
};

export default MyFoodTable;
