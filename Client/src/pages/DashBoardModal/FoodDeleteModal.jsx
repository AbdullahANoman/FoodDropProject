import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/users/userSlice";
import { toast } from "react-hot-toast";
import { deleteMySingleFood, getMyFoods } from "../../api/food/food";
import { Dialog, Transition } from "@headlessui/react";

const FoodDeleteModal = ({ isDeleteOpen, setIsDeleteOpen, id, setMyFoods }) => {
  const user = useSelector(selectUser);
  const {userEmail} = user || {}
  const closeModal = () => {
    setIsDeleteOpen(false);
  };

  const handleDelete = () => {
    deleteMySingleFood(id).then((data) => {
      console.log(data);
      getMyFoods(userEmail).then((data) => {
        const filteredData = data.filter((user) => user?._id !== id);
        setMyFoods(filteredData);
        closeModal();
        toast.success("Food remove ");
      });
    });
  };
  return (
    <>
      <Transition appear show={isDeleteOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Are you sure you want to Delete this food
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Food are you want to delete
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleDelete}
                    >
                      Yes
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FoodDeleteModal;
