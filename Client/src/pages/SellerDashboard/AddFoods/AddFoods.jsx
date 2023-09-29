import React, { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { categories, tags } from "../../../utils/utils";

const AddFoods = ({
  availableTags,
  selectedTags,
  availableOptions,
  selectedOptions,
  handleTagChange,
  handleCategoryChange,
  handleSubmit,
  uploadButtonText,
  loading,
  handleImageChange,
}) => {
  console.log(selectedOptions);
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="foodName" className="block text-gray-600">
                Food Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#8dd7e4] focus:outline-[#6AC5D6] rounded-md "
                name="foodName"
                id="foodName"
                type="text"
                placeholder="Food Name"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <div>
                {selectedOptions.length > 0 ? (
                  <span> Selected Categories : </span>
                ) : (
                  ""
                )}
                {selectedOptions.map((item, index) => (
                  <span key={index}>{item},</span>
                ))}
              </div>
              <select
                required
                onChange={handleCategoryChange}
                className="w-full px-4 py-4 border-[#8dd7e4] focus:outline-[#6AC5D6] rounded-md"
                name="category"
              >
                {availableOptions.map((category) => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="tags" className="block text-gray-600">
                Tags
              </label>
              <div>
                {selectedTags.length > 0 ? <span> Selected Tags : </span> : ""}
                {selectedTags.map((item,index) => (
                  <span key={index}>{item},</span>
                ))}
              </div>
              <select
                required
                onChange={handleTagChange}
                className="w-full px-4 py-4 border-[#8dd7e4] focus:outline-[#6AC5D6] rounded-md"
                name="tags"
              >
                {availableTags.map((tag) => (
                  <option value={tag.label} key={tag.label}>
                    {tag.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#8dd7e4] focus:outline-[#6AC5D6] rounded-md "
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                required
              />
            </div>

            <div className=" p-4 bg-white w-full  m-auto rounded-lg">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      onChange={(e) => handleImageChange(e.target.files[0])}
                      className="text-sm cursor-pointer w-36  hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
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
                <label htmlFor="price" className="block text-gray-600">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-[#8dd7e4] focus:outline-[#6AC5D6] rounded-md "
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Price"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="sku" className="block text-gray-600">
                  SKU
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-[#8dd7e4] focus:outline-[#6AC5D6] rounded-md "
                  name="sku"
                  id="sku"
                  type="number"
                  placeholder="SKU"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="productId" className="block text-gray-600">
                  Product Id
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-[#8dd7e4] focus:outline-[#6AC5D6] rounded-md "
                  name="productId"
                  id="productId"
                  type="number"
                  placeholder="Product Id"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="description" className="block text-gray-600">
            Description
          </label>

          <textarea
            id="description"
            className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-[#8dd7e4] focus:outline-[#6AC5D6]"
            name="description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#6AC5D6]"
        >
          {loading ? (
            <TbFidgetSpinner className="m-auto animate-spin" size={24} />
          ) : (
            "Save & Continue"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddFoods;
