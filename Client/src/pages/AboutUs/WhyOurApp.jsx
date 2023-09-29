import React from "react";

const WhyOurApp = () => {
  const items = [
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2016/12/icon_8-370x208.png",
      label: "ONLINE SHOPPING",
    },
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2016/12/icon_4-370x208.png",
      label: "Quick setting",
    },
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2016/12/icon_5-370x208.png",
      label: `your  ACHIEVEMENTS`,
    },
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2016/12/icon_6-370x208.png",
      label: "SECTION VEGAN FOOD",
    },
    {
      image:
        "https://food-drop.themerex.net/wp-content/uploads/2016/12/icon_7-370x208.png",
      label: "STORAGE OF PRODUCTS",
    },
  ];
  return (
    <div className="max-w-[1200px] grid grid-cols-1 md:grid-cols-2 items-center justify-evenly gap-10  text-[#474747] mx-auto py-20">
      <div className="flex justify-center">
        <img
          className="h-[60vh] "
          src="https://food-drop.themerex.net/wp-content/uploads/2016/12/promo-4.png"
          alt=""
        />
      </div>
      <div className="px-10 md:px-0">
        <h1 className="recipeFont text-[70px] pb-10 ">
          WHY OUR <span className="text-[#5DC2D7]">APP</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="grid grid-cols-3  pt-10">
          {items.map((item, index) => (
            <div>
              <img src={item?.image} alt="" />
              <p className="uppercase pr-20 font-semibold text-[14px] pt-2">
                {item?.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyOurApp;
