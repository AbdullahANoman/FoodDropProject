import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { reviewFood } from "../../api/shop/shop";
const ReviewForm = ({ id }) => {
  const [rating, setRating] = useState(0);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewerName = form.name.value;
    const reviewComment = form.review.value;
    const reviewerEmail = form.email.value;

    const reviewInformation = { reviewComment, reviewerEmail, reviewerName,rating };
    reviewFood(id, reviewInformation).then((data) => console.log(data));
  };

  return (
    <div className="py-10">
      <form onSubmit={handleReview}>
        <div className="py-4">
          <p>Your rating *</p>
          <Rating
            initialRating={rating}
            onClick={(value) => setRating(value)}
            className="text-[#BAC64A]"
            emptySymbol={<FaRegStar size={26} />}
            fullSymbol={<FaStar size={26} />}
            fractions={2}
          />
        </div>
        <p>Your review *</p>
        <textarea
          name="review"
          type="text"
          className="bg-[#F4F2EE] h-[150px] pl-5 pt-3 mt-3 w-full rounded-3xl border-gray-100 border-2 focus:outline-none focus:border-[#BAC64A] "
        />
        <div className="flex items-center gap-2">
          <p>Name*</p>
          <input
            name="name"
            type="text"
            className="bg-[#F4F2EE] pl-5 h-[60px] mt-3 w-full md:w-1/3 rounded-3xl border-gray-100 border-2 focus:outline-none focus:border-[#BAC64A] "
          />
        </div>
        <div className="flex items-center gap-2">
          <p>Email*</p>
          <input
            name="email"
            type="email"
            className="bg-[#F4F2EE] pl-5 h-[60px] mt-3 w-full md:w-1/3 rounded-3xl border-gray-100 border-2 focus:outline-none focus:border-[#BAC64A] "
          />
        </div>

        <div className=" ">
          <div className="flex items-center mt-8">
            <input
              type="checkbox"
              id="myCheckbox"
              className="form-checkbox h-3 w-3 text-gray-600"
            />
            <label htmlFor="myCheckbox" className="ml-2">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          <div className="flex items-center ">
            <input
              type="checkbox"
              id="myCheckbox"
              className="form-checkbox h-3 w-3 text-gray-600"
            />
            <label htmlFor="myCheckbox" className="ml-2 ">
              By using this form you agree with the storage and handling of your
              data by this website. *
            </label>
          </div>
        </div>
        <div>
          <input
            type="submit"
            value={"Submit"}
            className="uppercase px-6 py-4 text-[12px] cursor-pointer mt-5 border-b-4 border-[#A7B242] bg-[#BAC64A]  text-white rounded-3xl"
          />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
