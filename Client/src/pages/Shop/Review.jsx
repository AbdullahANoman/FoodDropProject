import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ReviewForm from "./ReviewForm";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const Review = ({ subTitle, name, id, reviews }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="py-10">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex gap-4 py-4">
          <Tab
            className={`${
              tabIndex == 0
                ? "bg-[#5DC2D7] text-white "
                : "bg-[#F4F2EE] text-black"
            } px-10 py-5  rounded-full border-b-4  border-b-[#E5E5E5] hover:bg-[#5DC2D7]  text-gray-500  hover:text-black  `}
          >
            Description
          </Tab>
          <Tab
            className={`${
              tabIndex == 1
                ? "bg-[#5DC2D7] text-white "
                : "bg-[#F4F2EE] text-black"
            } px-10 py-5  rounded-full border-b-4   border-b-[#E5E5E5] hover:bg-[#5DC2D7] text-gray-500  hover:text-black `}
          >
            {" "}
            Reviews
          </Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-gray-500">{subTitle}</h2>
        </TabPanel>
        <TabPanel className="text-gray-500">
          <p className="recipeFont text-[25px] text-black">Reviews</p>
          {reviews ? (
            <div>
              {reviews.map((review,index) => (
                <div key={index} className="border-2 border-[#BAC64A] px-5 py-2">
                  <p>{review.reviewerName}</p>
                  <p>{review.reviewComment}</p>
                  <div className="py-4">
                    <Rating
                      initialRating={review.rating}
                      readonly
                      className="text-[#BAC64A]"
                      emptySymbol={<FaRegStar size={26} />}
                      fullSymbol={<FaStar size={26} />}
                      fractions={2}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p>There are no reviews yet.</p>
              <p className="mt-5">{`Be the first to review “${name}”`}</p>
            </div>
          )}
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <ReviewForm id={id} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Review;
