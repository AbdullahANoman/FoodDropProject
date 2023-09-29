import React, { useEffect, useState } from "react";
import { allItems } from "../../../api/shop/shop";
import Loader from "../../../Shared/Loader/Loader";
import FoodsTable from "./FoodsTable";

const FoodAddRequest = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    allItems().then((data) => {
      setFoods(data);
      setLoading(false);
    });
  }, []);
  console.log(foods);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Seller Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Request
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 bg-white text-left border-b border-gray-200 text-gray-800   text-sm uppercase font-normal"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {foods.map((food) => (
                      <FoodsTable
                        setFoods={setFoods}
                        key={food?._id}
                        food={food}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodAddRequest;
