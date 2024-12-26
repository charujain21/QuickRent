import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Book from "../components/Book";
import HomeLinks from "../components/HomeLinks";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
    <div className=" bg-white text-black">
    <Navbar />
      <Banner />
      <Book />
      <HomeLinks />
      <Footer />
      </div>
    </>
  );
};

export default Home;
