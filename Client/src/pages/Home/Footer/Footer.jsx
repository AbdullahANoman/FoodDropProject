import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#2C2C2C] text-gray-300">
      <div className="max-w-[1200px] mx-auto">
        <div className=" flex flex-col gap-5 items-center md:grid grid-cols-12 mx-auto py-12">
          <Link to='/' className="col-span-6">
            <div >
              <img
                className="w-[150px]"
                src="https://food-drop.themerex.net/wp-content/uploads/2016/12/logo_light.png"
                alt=""
              />
            </div>
          </Link>
          <div className="col-span-4">
            <ul className="flex gap-2 uppercase text-sm">
              <li className="text-[#BAC64A]">Home</li>
              <li className=" hover:text-[#BAC64A]">our team</li>
              <li className=" hover:text-[#BAC64A]">prices</li>
              <li className=" hover:text-[#BAC64A]">blog</li>
              <li className=" hover:text-[#BAC64A]">faq's</li>
            </ul>
          </div>
          <div className="col-span-2 flex gap-5">
            <FaTwitter className=" hover:text-[#BAC64A]" />
            <FaFacebookF className=" hover:text-[#BAC64A]" />
            <FaInstagram className=" hover:text-[#BAC64A]" />
          </div>
        </div>
        <hr className="pb-4 text-gray-500" />
        <p className="text-sm text-center md:text-start pb-2  text-gray-400">
          ThemeREX © 2023 All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
