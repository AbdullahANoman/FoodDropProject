import React, { useEffect, useState } from "react";
import RequestedRiderTable from "./RequestedRiderTable";
import { allUsers } from "../../../api/user/user";
import Loader from "../../../Shared/Loader/Loader";

const RequestedRider = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    allUsers().then((data) => {
      const filteredData = data.filter((user) => user?.requestFor === "rider");
      console.log(filteredData);
      setUsers(filteredData);
      setLoading(false);
    });
  }, []);

  console.log(users);

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
                        Role
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
                    {users?.map((user) => (
                      <RequestedRiderTable
                        setUsers={setUsers}
                        key={user?._id}
                        user={user}
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

export default RequestedRider;
