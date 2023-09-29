import React, { useEffect, useState } from "react";
import { getMyFoods } from "../../../api/food/food";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/features/users/userSlice";
import MyFoodTable from "./MyFoodTable";

const MyAllFoods = () => {
  const user = useSelector(selectUser);
  const { userEmail } = user || {};
  const [myFoods, setMyFoods] = useState([]);
  useEffect(() => {
    getMyFoods(userEmail).then((data) => setMyFoods(data));
  }, []);

  console.log(myFoods);
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Food Name
                  </th>
                 

                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-left border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                  >
                    Action Update
                  </th>
                  
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-left border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                  >
                    Action Delete
                  </th>
                  
                </tr>
              </thead>
              <tbody>
                {myFoods.map((food) => (
                  <MyFoodTable key={food?._id} food={food} setMyFoods={setMyFoods} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAllFoods;
