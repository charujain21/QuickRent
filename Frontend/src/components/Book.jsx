import React from "react";
import Cards from "./Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json";

function Book() {
    const filterHome = list.filter((data) => data.category === "Home");
    const filterOffice = list.filter((data) => data.category === "Office");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className="justify-center items-center mx-9 mt-4 ">
        <h3 className="text-4xl font-bold text-center text-blue-800 ">
          Your Ideal Office & Home Rentals,{" "}
          <span className="text-red-500">Tailored to Your Needs :)</span>
        </h3>
        {/* <p className="text-xl font-semibold mt-4">
          Explore a wide range of office spaces and homes tailored to meet your
          needs. Whether you're a professional seeking the perfect workplace or
          a family looking for a comfortable home, SpaceFinder connects you with
          the best rental options in your desired location. Enjoy a seamless
          experience with advanced search filters, verified listings, and secure
          bookings. Find your next space effortlessly with SpaceFinder!
        </p> */}
      </div>
       
      <div className="mt-12">
        <h2 className="text-yellow-600 text-2xl font-semibold">Discover Your Perfect Home</h2>
        <p className="mt-2 mb-2">Explore a wide range of beautiful homes, from cozy apartments to luxurious villas, each offering unique features in prime locations. Whether you're looking for comfort or style, find your ideal living space today.</p>
      <div>
        <Slider {...settings}>
          {filterHome.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))}
        </Slider>
      </div>
      </div>

       <div>
        <h3 className="text-yellow-600 mt-8 text-2xl font-semibold">Find the Ideal Workspace</h3>
        <p className="mt-2 mb-2">Browse through various office spaces designed to inspire productivity and creativity. Whether for a startup or an established business, our offices offer the perfect environment for your work needs.</p>
       <div className="mt-2 mb-8">
        <Slider {...settings}>
          {filterOffice.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))}
        </Slider>
      </div>
       </div>

      </div>
    </>
  );
}
// hum Book se card mai data transfer kar rahe h using react props., yaha item as props pass kara h , usse recieve karege in CARDS
export default Book;
