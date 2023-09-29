import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import {
  updateFoodRequestApprove,
  updateFoodRequestDeny,
} from "../../../api/food/food";
import { toast } from "react-hot-toast";
import { allItems } from "../../../api/shop/shop";
const FoodAddDetailsModal = ({ setIsOpen, isOpen, setFoods, id, food }) => {
  const { name, foodImage, categories, tags, price, title, subTitle, host } =
    food || {};
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleApprove = () => {
    updateFoodRequestApprove(id).then((data) => {
      if (data.acknowledged) {
        allItems().then((data) => {
          setFoods(data);
          closeModal();
          toast.success("Your Food Is Approve");
        });
      }
    });
  };

  const handleDeny = () => {
    updateFoodRequestDeny(id).then((data) => {
      if (data.acknowledged) {
        allItems().then((data) => {
          setFoods(data);
          closeModal();
          toast.success("Your Food Is Denied");
        });
      }
    });
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
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
                <Dialog.Panel className="w-[800px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="pt-2 px-6">
                    <button
                      type="button"
                      className="absolute font-semibold border-none"
                      onClick={closeModal}
                    >
                      X
                    </button>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      <p className="font-semibold text-center ">Food Details</p>
                      <hr className="mt-5" />
                    </Dialog.Title>
                  </div>

                  <div>
                    <div className="max-h-[50vh] overflow-y-auto p-6">
                      <div className="mt-2 ">
                        <div className="grid grid-cols-1">
                          <div className="space-y-6">
                            <div className="grid justify-center">
                              <img
                                className="w-[200px]"
                                src={foodImage}
                                alt=""
                              />
                              <p className="text-center mt-4 text-xl">{name}</p>
                            </div>
                            <div>
                              <div>
                                Seller Details
                                <div>
                                  {host?.name}
                                  <img
                                    className="w-20 rounded-full"
                                    src={host?.photoUrl}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div>Title : {title}</div>
                              <div>
                                Categories :
                                {categories.map((item, index) => (
                                  <span key={index}>{item},</span>
                                ))}
                              </div>
                              <div>
                                Tags :
                                {tags.map((item, index) => (
                                  <span key={index}>{item},</span>
                                ))}
                              </div>
                              <p>Price : ${price}</p>
                              <p> Details :{subTitle}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 ">
                      <hr className="mb-3" />
                      <div className="flex gap-5 justify-center">
                        <button
                          onClick={() => handleApprove()}
                          type="submit"
                          className="inline-flex justify-center   rounded-md border border-transparent bg-[#6AC5D6] px-20 py-3 w-full text-[16px] font-medium text-white focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleDeny()}
                          type="submit"
                          className="inline-flex justify-center   rounded-md border border-transparent bg-red-400 px-20 py-3 w-full text-[16px] font-medium text-white focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
                        >
                          Deny
                        </button>
                      </div>
                    </div>
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

export default FoodAddDetailsModal;
