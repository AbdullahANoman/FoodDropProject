import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/users/userSlice";
import { toast } from "react-hot-toast";
import { requestRider } from "../../api/user/user";

const MakeRiderModal = ({ isOpen, setIsOpen }) => {
  const user = useSelector(selectUser);
  function closeModal() {
    setIsOpen(false);
  }

  const { userEmail } = user || {};

  const requestForRider = (event) => {
    event.preventDefault();
    requestRider(userEmail).then((data) => console.log(data));
    toast.success("Request Sent For Rider Check Your Dashboard Accordingly");
    closeModal();
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Are you sure, You want to become a Rider ?
                  </Dialog.Title>
                  <form onSubmit={requestForRider}>
                    <div className="mt-5">
                      <input
                        type="text"
                        placeholder="Name"
                        required
                        className="bg-gray-100 py-2 w-full rounded-xl  focus:outline-none pl-2 focus:border-2 focus:border-[#BAC64A]"
                      />

                      <input
                        type="email"
                        placeholder="Email"
                        required
                        className="bg-gray-100 py-2 mt-4 w-full rounded-xl focus:outline-none pl-2 focus:border-2 focus:border-[#BAC64A]"
                      />
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="uppercase px-4 py-2 text-[12px] border-b-4 border-[#A7B242] bg-[#BAC64A]  text-white rounded-3xl hover:bg-[#b2bd50]"
                        // onClick={requestForRider}
                      >
                        Request
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MakeRiderModal;
