import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ShopDetailsCard from "./ShopDetailsCard";
import RelatedProduct from "./RelatedProduct";
import Footer from "../Home/Footer/Footer";

const ShopDetails = () => {
  const shop = useLoaderData();
  const { name, foodImage, categories } = shop || {};
  return (
    <div>
      <div className="backgroundShopImage py-5">
        <div>
          <Link to="/">
            <div className="flex sm:flex-col md:flex-row justify-between items-center">
              <div>
                <img
                  src="https://food-drop.themerex.net/wp-content/uploads/2016/12/logo_light.png"
                  alt=""
                  className="pt-5 pl-10 w-3/4"
                />
              </div>
            </div>
          </Link>
        </div>
        <p className="recipeFont text-center text-white text-[80px]">{name}</p>
        <div className="flex justify-center gap-5 text-sm text-gray-100">
          <Link to="/">
            <p>Home</p>
          </Link>
          <hr />
          <Link to="/shop">
            <p>Shop</p>
          </Link>
        </div>
      </div>
      <div className="">
        <ShopDetailsCard shop={shop} />
        <RelatedProduct shop={shop} selectCategories={categories}/>
        <Footer/>
      </div>
    </div>
  );
};

export default ShopDetails;
