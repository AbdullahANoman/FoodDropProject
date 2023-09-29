import React, { useState } from "react";
import UserDeleteModal from "../../DashBoardModal/UserDeleteModal";

const UsersTable = ({ user, setUsers }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { _id, userEmail, userName, userRole, userImage } = user || {};
  return (
    <>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="block relative">
                <img
                  alt="profile"
                  src={userImage}
                  className="mx-auto object-cover rounded h-20 w-15 "
                />
              </div>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{userName}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {(userRole == "admin" && "Admin") ||
              (userRole == "client" && "Client")}
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
            <span className="relative text-red-400">Remove</span>
          </span>
        </td>
      </tr>
      <UserDeleteModal
        setUsers={setUsers}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        id={_id}
      ></UserDeleteModal>
    </>
  );
};

export default UsersTable;
