import React, { useState } from "react";
import { useSelector } from "react-redux";
import { handleImageUpload } from "../../../api/imgBB/imageUpload";
import { addFood } from "../../../api/food/food";
import AddFoods from "./AddFoods";
import { selectUser } from "../../../redux/features/users/userSlice";
import { toast } from "react-hot-toast";
import { categories, tags } from "../../../utils/utils";

const FoodAdd = () => {
  const user = useSelector(selectUser);
  const { userName, userEmail, photoUrl } = user || {};
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  const [availableOptions, setAvailableOptions] = useState(categories);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [availableTags, setAvailableTags] = useState(tags);

  const handleCategoryChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );

    console.log(selectedValues);
    const findData = availableOptions.find(
      (item) => item.label == selectedValues
    );
    if (findData) {
      const updateAvailableOptions = availableOptions.filter(
        (item) => item.label !== selectedValues[0]
      );
      console.log(updateAvailableOptions);
      setAvailableOptions(updateAvailableOptions);
      setSelectedOptions([...selectedOptions, selectedValues]);
    }
  };
  const handleTagChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    const findData = availableTags.find((item) => item.label == selectedValues);
    if (findData) {
      const updateAvailableOptions = availableTags.filter(
        (item) => item.label !== selectedValues[0]
      );
      console.log(updateAvailableOptions);
      setAvailableTags(updateAvailableOptions);
      setSelectedTags([...selectedTags, selectedValues]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const foodName = form.foodName.value;
    const categories = selectedOptions;
    const title = form.title.value;
    const price = form.price.value;
    const tags = selectedTags;
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
          request : 'deny',
          host: {
            name: userName,
            photoUrl: photoUrl,
            email: userEmail,
          },
        };
        console.log(allData);
        //postFood in database
        addFood(allData)
          .then((res) => {
            if (res?.insertedId) {
              toast.success("Food Added Request  Successfully Send To The Admin");
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

  const handleImageChange = (image) => {
    console.log(image);
    setUploadButtonText(image?.name);
  };

  return (
    <div>
      <AddFoods
        handleSubmit={handleSubmit}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
        loading={loading}
        handleCategoryChange={handleCategoryChange}
        handleTagChange={handleTagChange}
        selectedOptions={selectedOptions}
        availableOptions={availableOptions}
        selectedTags={selectedTags}
        availableTags={availableTags}
      ></AddFoods>
    </div>
  );
};

export default FoodAdd;
