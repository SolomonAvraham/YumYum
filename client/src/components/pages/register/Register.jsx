import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../../services/user-services/userServices";
import SyncLoader from "react-spinners/SyncLoader";
import { FaUserCircle } from "react-icons/fa";


export function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const errors = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.loading);
  const registeredUser = useSelector((state) => state.user.registeredUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUpUser({ username, password }));
    if (user && !errors) return navigate("/login");
  };

  useEffect(() => {
    if (registeredUser) return navigate("/login");
  }, [registeredUser]);
  return (
    <>
      <div className=" bg-center bg-cover relative   bg-fixed bg-[url('/imgs/3.jpg')]">
        <div className="bg-gray-500 bg-opacity-50 ">
          <div className="flex flex-col justify-center items-center h-screen">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="p-5 flex items-center justify-evenly gap-5 text-center ">
                <h1 className=" font-semibold text-4xl   ">Sign Up</h1>
                <div className=" text-4xl">
                  <FaUserCircle />
                </div>
              </div>
              {errors ?? errors}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="username"
                >
                  username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="**********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            placeholder="**********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div> */}
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="p-2  text-lg  bg-slate-950 font-extrabold text-gray-50">
              Already has an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className=" cursor-pointer hover:text-gray-50 text-orange-300"
              >
                Log In!
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
