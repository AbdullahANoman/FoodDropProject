import React from "react";

const Design = () => {
  const designs = [
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2016/12/icon_1-370x208.png",
      title: "LARGE COOKBOOK",
      subTitle:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. officia deserunt mollit anim id.",
    },
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2016/12/icon_2-370x208.png",
      title: "LOTS OF CATEGORIES",
      subTitle:
        "Totam rem aperiam, eaque ipsa quaeab illo inventore veritatis et quasi architecto.",
    },
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2016/12/icon_3-370x208.png",
      title: "CATEGORY LIST",
      subTitle:
        "Nisi ut aliquip ex ea commodo consequuis aute irure  dolor in reprehenderit in voluptate.",
    },
  ];
  return (
    <div className="flex md:flex-row flex-col items-center    justify-center gap-20 my-20">
      <div>
        <img
          src="https://food-drop.themerex.net/wp-content/uploads/2016/12/promo-tel.png"
          alt=""
        />
      </div>
      <div className="px-5 md:px-0">
        <div>
          <h1 className="recipeFont  text-[80px] text-[#474747] ">
            SIMPLE, CLEAN AND{" "}
          </h1>{" "}
          <h1 className="recipeFont text-[#474747] text-[80px] leading-10 mt-3">
            GOOD <span className="text-[#BAC64A]">DESIGN</span>
          </h1>
          <p className="my-10 text-[#B3B8C7] text-[20px]">
            You can create your own cookbook one recipe at a time and <br /> it
            helps you find recipes that others have made.
          </p>
        </div>
        <div className="">
          {designs.map((design, index) => (
            <div key={index} className="flex  gap-8 mb-10">
              <div>
                <img src={design.image} alt="design" />
              </div>
              <div>
                <p className="mb-4" style={{ fontWeight: "500" }}>
                  {design.title}
                </p>
                <p className="text-[#B3B2C5] text-sm ">
                  {design.subTitle.slice(0, 53)} <br />{" "}
                  {design.subTitle.slice(53, 100)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
