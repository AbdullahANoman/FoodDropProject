import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/users/userSlice";
import { Dialog, Transition } from "@headlessui/react";
import { TbFidgetSpinner } from "react-icons/tb";
import { categories, tags } from "../../utils/utils";
import { handleImageUpload } from "../../api/imgBB/imageUpload";
import { toast } from "react-hot-toast";
import { getMyFoods, updateSingleFood } from "../../api/food/food";

const FoodUpdateModal = ({
  isUpdateOpen,
  setIsUpdateOpen,
  id,
  setMyFoods,
  food,
}) => {
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const user = useSelector(selectUser);
  const { userEmail, userName, photoUrl } = user || {};
  const {
    name,
    categories: categoriesItems,
    title,
    price,
    tags: tagsItems,
    sku,
    productId,
    subTitle,
    foodImage,
  } = food || {};

  const closeModal = () => {
    setIsUpdateOpen(false);
  };

  const handleImageChange = (image) => {
    console.log(image);
    setUploadButtonText(image?.name);
  };

  //   const handleDelete = () => {
  //     deleteMySingleFood(id).then((data) => {
  //       console.log(data);
  //       getMyFoods(userEmail).then((data) => {
  //         const filteredData = data.filter((user) => user?._id !== id);
  //         setMyFoods(filteredData);
  //         closeModal();
  //         toast.success("Food remove ");
  //       });
  //     });
  //   };

  const handleUpdate = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const foodName = form.foodName.value;
    const categories = categoriesItems;
    const title = form.title.value;
    const price = form.price.value;
    const tags = tagsItems;
    const sku = form.sku.value;
    const productId = form.productId.value;
    const description = form.description.value;

    const image = form.image.files[0];

    // uploadImage
    handleImageUpload(image)
      .then((res) => {
        const imageUrl = res.data.display_url;
        const allData = {
          name: foodName,
          categories,
          title,
          price: parseFloat(price),
          tags,
          sku: parseInt(sku),
          productId: parseInt(productId),
          subTitle: description,
          foodImage: imageUrl,
          host: {
            name: userName,
            photoUrl: photoUrl,
            email: userEmail,
          },
        };
        console.log(allData);
        // update the food 
        updateSingleFood(id,allData)
          .then((data) => {
            if(data?.acknowledged){
                getMyFoods(userEmail).then((data) => setMyFoods(data));
                toast.success('Your food is update successfully')
                closeModal()
            }
          })
          .catch((err) => toast.error(err.message));
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <Transition appear show={isUpdateOpen} as={Fragment}>
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
                      <p className="font-semibold text-center ">Update</p>
                      <hr className="mt-5" />
                    </Dialog.Title>
                  </div>

                  <form onSubmit={handleUpdate}>
                    <div className="max-h-[50vh] overflow-y-auto p-6">
                      <div className="mt-2 ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                          <div className="space-y-6">
                            <div className="space-y-1 text-sm">
                              <label
                                htmlFor="foodName"
                                className="block text-gray-600"
                              >
                                Food Name
                              </label>
                              <input
                                className="w-full px-4 py-3 text-gray-800 border border-[#8dd7e4] focus:outline-[#6AC5D6] rounded-md "
                                name="foodName"
                                id="foodName"
                                type="text"
                                placeholder="Food Name"
                                defaultValue={name}
                                required
                              />
                            </div>

                            <div className="space-y-1 text-sm">
                              <label
                                htmlFor="category"
                                className="block text-gray-600"
                              >
                                Category
                              </label>
                              <div>
                                {categoriesItems.length > 0 ? (
                                  <span> Selected Categories : </span>
                                ) : (
                                  ""
                                )}
                                {categoriesItems.map((item, index) => (
                                  <span key={index}>{item},</span>
                                ))}
                              </div>
                              <select
                                required
                                // onChange={handleCategoryChange}
                                className="w-full px-4 py-4 border-[#8dd7e4] focus:outline-[#6AC5D6] rounded-md"
                                name="category"
                              >
                                {categories.map((category) => (
                                  <option
                                    value={category.label}
                                    key={category.label}
                                  >
                                    {category.label}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="space-y-1 text-sm">
                              <label
                                htmlFor="tags"
                                className="block text-gray-600"
                              >
                                Tags
                              </label>
                              <div>
                                {tagsItems.length > 0 ? (
                                  <span> Selected Tags : </span>
                                ) : (
                                  ""
                                )}
                                {tagsItems.map((item, index) => (
                                  <span key={index}>{item},</span>
                                ))}
                              </div>
                              <select
                                required
                                // onChange={handleTagChange}
                                className="w-full px-4 py-4 border-[#8dd7e4] focus:outline-[#6AC5D6] rounded-md"
                                name="tags"
                              >
                                {tags.map((tag) => (
                                  <option value={tag.label} key={tag.label}>
                                    {tag.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="space-y-6">
                            <div className="space-y-1 text-sm">
                              <label
                                htmlFor="title"
                                className="block text-gray-600"
                              >
                                Title
                              </label>
                              <input
                                className="w-full px-4 py-3 text-gray-800 border border-[#8dd7e4] focus:outline-[#6AC5D6] rounded-md "
                                name="title"
                                id="title"
                                type="text"
                                placeholder="Title"
                                required
                                defaultValue={title}
                              />
                            </div>

                            <div className=" p-4 bg-white w-full  m-auto rounded-lg">
                              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                                <div className="flex flex-col w-max mx-auto text-center">
                                  <label>
                                    <input
                                      onChange={(e) =>
                                        handleImageChange(e.target.files[0])
                                      }
                                      className="text-sm cursor-pointer w-36  hidden"
                                      type="file"
                                      name="image"
                                      id="image"
                                      accept="image/*"
                                      hidden
                                      required
                                    />
                                    <div
                                      onClick={() => handleImageChange()}
                                      className="bg-[#6AC5D6] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-[#6AC5D6]"
                                    >
                                      {uploadButtonText
                                        ? `${uploadButtonText.slice(0, 20)}`
                                        : "Upload Image"}
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className=" justify-between gap-2">
                              <div className="space-y-1 text-sm">
                                <label
                                  htmlFor="price"
                                  className="block text-gray-600"
                                >
                                  Price
                                </label>
                                <input
                                  className="w-full px-4 py-3 text-gray-800 border border-[#8dd7e4] focus:outline-[#6AC5D6] rounded-md "
                                  name="price"
                                  id="price"
                                  type="number"
                                  placeholder="Price"
                                  required
                                  defaultValue={price}
                                />
                              </div>
                            </div>
                            <div className="flex justify-between gap-2">
                              <div className="space-y-1 text-sm">
                                <label
                                  htmlFor="sku"
                                  className="block text-gray-600"
                                >
                                  SKU
                                </label>
                                <input
                                  className="w-full px-4 py-3 text-gray-800 border border-[#8dd7e4] focus:outline-[#6AC5D6] rounded-md "
                                  name="sku"
                                  id="sku"
                                  type="number"
                                  placeholder="SKU"
                                  required
                                  defaultValue={sku}
                                />
                              </div>

                              <div className="space-y-1 text-sm">
                                <label
                                  htmlFor="productId"
                                  className="block text-gray-600"
                                >
                                  Product Id
                                </label>
                                <input
                                  className="w-full px-4 py-3 text-gray-800 border border-[#8dd7e4] focus:outline-[#6AC5D6] rounded-md "
                                  name="productId"
                                  id="productId"
                                  type="number"
                                  placeholder="Product Id"
                                  required
                                  defaultValue={productId}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1 text-sm">
                          <label
                            htmlFor="description"
                            className="block text-gray-600"
                          >
                            Description
                          </label>

                          <textarea
                            id="description"
                            className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-[#8dd7e4] focus:outline-[#6AC5D6]"
                            name="description"
                            defaultValue={subTitle}
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 ">
                      <hr className="mb-3" />
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="inline-flex justify-center   rounded-md border border-transparent bg-[#6AC5D6] px-20 py-3 w-full text-[16px] font-medium text-white focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
                        >
                          {loading ? (
                            <TbFidgetSpinner
                              className="m-auto animate-spin"
                              size={24}
                            />
                          ) : (
                            "Update"
                          )}
                        </button>
                      </div>
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

export default FoodUpdateModal;
