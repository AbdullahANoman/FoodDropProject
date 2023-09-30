import React, { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "./Baneer/Banner";
import Design from "./Design/Design";
import PopularCategories from "./PopularCategories/PopularCategories";
import ShareWithFriends from "./ShareWithFriends/ShareWithFriends";
import FreshDelicacies from "./FreshDelicacies/FreshDelicacies";
import RecentNews from "./RecentNews/RecentNews";
import { checkUser } from "../../utils/utils";
import FooterTop from "./FooterTop/FooterTop";
import Footer from "./Footer/Footer";
import './Home.css'
const Home = () => {
  const [toggle, setToggle] = useState(true);
  checkUser()
  return (
    <>
      <div
        className={`   ${
          toggle
            ? "backgroundImageBanner"
            : "bg-[#BAC64A] h-[100vh]  "
        } px-20 py-10 `}
      >
        <Navbar toggle={toggle} setToggle={setToggle} />
        <Banner toggle={toggle} setToggle={setToggle} />
      </div>

      {toggle && (
        <div>
          <Design />
          <PopularCategories />
          <ShareWithFriends />
          <FreshDelicacies />
          <RecentNews />
          <FooterTop/>
          <Footer/>
        </div>
      )}
    </>
  );
};

export default Home;
