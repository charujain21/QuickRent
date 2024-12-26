import React from "react";
import Login from "./Login";
import Signup from "./Signup";

// py- padding  and mx -margin
const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-600 text-white pt-2 rounded-md">
      <div className="logo mx-4">
        <span className="font-bold text-xl">QuickRent</span>
      </div>
      {/* by gap 8 jo gap h navbar mai wo set rahega */}
      <ul className="flex gap-8 mx-9 my-2">
        <li className="cursor-pointer hover:font-bold transition-all duration-50">
          <a href="/">Home</a>
        </li>
        <li className="cursor-pointer hover:font-bold transition-all duration-50">
          <a href="/Rentarea">Rental Areas</a>
        </li>
        <li className="cursor-pointer hover:font-bold transition-all duration-50">
          <a href="/Categories">Categories</a>
        </li>
        <li className="cursor-pointer hover:font-bold transition-all duration-50">
          <a href="/Aboutus">About Us</a>
        </li>
        <div>
          <a href="/Signup" className="search-btn bg-blue-400 rounded-md px-2 py-1 cursor-pointer hover:font-bold transition-all duration-50"
          onClick={() => document.getElementById("my_modal_3").showModal()}>
            Register
          </a>
          {/* <Signup /> */}
        </div>
        <div>
          <a
            className="search-btn bg-blue-400 rounded-md px-2 py-1 cursor-pointer hover:font-bold transition-all duration-50"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Login
          </a>
          <Login />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
