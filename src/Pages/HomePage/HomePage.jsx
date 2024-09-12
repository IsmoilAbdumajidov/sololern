// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Navigating from "../../Components/Navbar/Navigating";
import Header from "../../Components/Header/Header";
import Carousel from "../../Components/Carousel/Carousel";
import Body from "../../Components/Body/Body";
import People from "../../Components/People/People";
import Cards from "../../Components/Cards/Cards";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { getFromLS } from "../../utils/localStorage";

const HomePage = () => {
  const navigate = useNavigate()
  const token = getFromLS("a-token")
  // useEffect(() => {
  //   if (token) {
  //     navigate("profile")
  //   }
  // }, []);
  return (
    <div>
      <Navigating />
      <Header />
      <div className="py-3 bg-white"></div>
      <Carousel />
      <div className="bg-[#f2f5f7] py-[26vh]"></div>
      <Body />
      <People />
      <Cards />
      <Footer />
    </div>
  );
};

export default HomePage;
