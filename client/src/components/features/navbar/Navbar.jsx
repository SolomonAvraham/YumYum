import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slices/userSlice/userSlice";
import Cookies from "js-cookie";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = Cookies.get("username");

  const pages = ["Recipes", "About", "Contact"];

  const userPages = [
    { name: "Saved Recipes", path: "/saved-Recipes" },
    { name: "Create Recipe", path: "/create-recipe" },
    { name: "Profile", path: "/profile" },
  ];

  const lastPath = window.location.href.split("/").pop();

  return (
    <nav className=" sticky top-0  z-10 bg-[#76a561] shadow-xl">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen), setIsUserOpen(false);
              }}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <a href="/" className="">
              <img
                className=" w-10  px-1   py-1 "
                src="icons/icon.png"
                alt="icon"
              />
            </a>
            <div className="flex-shrink-0 ml-2">
              <a href="/" className="text-white font-bold text-2xl">
                Yum Yum
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {pages?.map((page) => (
                  <a
                    key={page}
                    href={`/${page.toLocaleLowerCase()}`}
                    className={`
                    ${lastPath === page.toLocaleLowerCase() && "text-stone-950"}
                    text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    {page}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a
            href="/profile"
            className={`${
              lastPath === "profile" && "text-stone-950"
            } hover:text-slate-400 text-xl text-white  p-5`}
          >
            {user && user}
          </a>
          <button
            onClick={() => {
              setIsUserOpen(!isUserOpen), setIsOpen(false);
            }}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="   text-3xl text-white  ">
              <FaUserCircle />
            </span>
          </button>
        </div>
      </div>
      <div
        className={`${isUserOpen ? "block" : "hidden"} py-10  `}
        id="mobile-menu"
      >
        <div className="flex flex-col items-center gap-10 ">
          {user && (
            <>
              {userPages.map((page) => (
                <a
                  key={page.name}
                  href={page.path}
                  className={` ${
                    lastPath === page.name.toLocaleLowerCase() &&
                    "text-stone-950"
                  } text-white text-xl hover:bg-slate-800  hover:w-96 hover:text-center`}
                >
                  {page.name}
                </a>
              ))}
            </>
          )}

          {!user ? (
            <>
              <a
                href="/register"
                className=" text-white text-lg hover:bg-slate-800   hover:w-96 hover:text-center"
              >
                Sign Up
              </a>
              <a
                href="/login"
                className=" text-white text-lg hover:bg-slate-800   hover:w-96 hover:text-center"
              >
                Login
              </a>
            </>
          ) : (
            <a
              href="/"
              onClick={() => dispatch(logout())}
              className=" text-white text-xl hover:bg-slate-800   hover:w-96 hover:text-center"
            >
              Log out
            </a>
          )}
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 text-center space-y-1">
          {pages?.map((page) => (
            <a
              key={page}
              href={`/${page.toLocaleLowerCase()}`}
              className={` ${
                lastPath === page.toLocaleLowerCase() && "text-stone-950"
              } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium`}
            >
              {page}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
