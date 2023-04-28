import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../../services/user-services/userServices";
import SyncLoader from "react-spinners/SyncLoader";
import { FaUserCircle } from "react-icons/fa";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const errors = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.loading);
  const isUserOnline = useSelector((state) => state.user.isOnline);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUser({ username, password }));
  };

  useEffect(() => {
    if (isUserOnline) return navigate("/");
  }, [isUserOnline]);

  return (
    <>
      <div className=" bg-center bg-cover relative   bg-fixed bg-[url('/imgs/3.jpg')]">
        <div className="bg-gray-500 bg-opacity-50 ">
          <div className="flex flex-col text-center justify-center items-center h-screen ">
            {loading ? (
              <div className=" ">
                <SyncLoader color="#91a9f1" size={40} />
              </div>
            ) : (
              <>
                <form
                  onSubmit={handleSubmit}
                  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                  <div className="p-5 flex items-center justify-around text-center ">
                    <h1 className=" font-semibold text-4xl   ">Log-In</h1>
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
                      placeholder="Enter your Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
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
                  <div className="flex items-center justify-between">
                    <button
                      className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                <div className="p-2  text-lg   bg-slate-950 font-extrabold text-gray-50">
                  Don't have an account?{" "}
                  <span
                    onClick={() => navigate("/register")}
                    className=" cursor-pointer hover:text-gray-50 text-orange-300"
                  >
                    Sign Up!
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
