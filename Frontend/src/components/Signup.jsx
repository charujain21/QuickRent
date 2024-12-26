import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Signup() {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-blue-400 flex items-center justify-center">
        <div
          id="my_modal_3"
          className="border-[2px] shadow-md p-5 rounded-md bg-blue-300"
        >
          <div className="">
            <form method="div">
              {/* if there is a button in form, it will close the modal */}
            </form>
            <h3 className="font-bold text-xl text-pink-500 underline">
              Signup
            </h3>
            {/* User Type Dropdown */}
            <div className="mt-4 space-y-2">
              <span className="text-blue-800 font-bold">User Type</span>
              <br />
              <select
                className="w-80 px-3 py-1 border rounded-md outline-none"
                defaultValue="Owner"
              >
                <option value="Owner">Owner</option>
                <option value="Buyer">Buyer</option>
              </select>
            </div>
            {/* Name */}
            <div className="mt-4 space-y-2 text-white">
              <span className="text-blue-800 font-bold">Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your full Name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2 text-white">
              <span className="text-blue-800 font-bold">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>

            {/* password */}
            <div className="mt-4 space-y-2 text-white">
              <span className="text-blue-800 font-bold">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
              <br />
            </div>

            {/* Button */}
            <div className="flex justify-between mt-4">
              <button className="bg-pink-500 mx-1 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
