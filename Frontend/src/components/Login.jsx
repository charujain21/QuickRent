import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-blue-300">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl text-pink-500 underline">Login</h3>

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

          {/* Email */}
          <div className="mt-4 space-y-2 text-white">
            <span className="text-blue-800 font-bold">Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              // {...register("email", { required: true })}
            />
            {/* <br />
        {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)} */}
          </div>

          {/* password */}
          <div className="mt-4 space-y-2 text-white">
            <span className="text-blue-800 font-bold">Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              // {...register("password", { required: true })}
            />
            <br />
            {/* {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )} */}
          </div>

          {/* Button */}
          <div className="flex justify-between mt-4">
            <button className="bg-pink-500 mx-1 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Login
            </button>
            <p>
              Not registered?{" "}
              <Link to="/Signup" className="text-blue-600 underline">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
