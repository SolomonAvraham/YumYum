import React, { useEffect, useState } from "react";
import RecipeCard from "../../features/card/Card";
import { recipes } from "../../../services/recipes-services/recipesServices";
import { useDispatch, useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export function Home() {
  const dispatch = useDispatch();
  const isRecipes = useSelector((state) => state.recipes.recipes);
  const loading = useSelector((state) => state.recipes.loading);

  const user = Cookies.get("username");
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    dispatch(recipes());
  }, []);

  return (
    <>
      <div className=" bg-center bg-cover    bg-fixed bg-[url('/imgs/3.jpg')]">
        <div className="bg-gray-500 bg-opacity-50  h-screen flex items-center justify-center">
          <div className=" text-center">
            <h2 className=" font-one text-4xl md:text-5xl md:text-cyan-900 font-extrabold tracking-wider uppercase">
              Welcome to
            </h2>
            <h1 className="mt-2 font-three text-5xl md:text-9xl  text-green-100 sm:text-4xl  tracking-wider">
              YumYum
            </h1>
            <img
              className=" w-20 mx-auto flex-shrink-0  p-2 "
              src="icons/icon.png"
              alt="icon"
            />
            <p className="mt-4 max-w-2xl p-4 md:p-0 text-xl md:text-2xl  font-extrabold text-white  lg:mx-auto font-one">
              A recipe site platform that provides users with a wide variety of
              culinary ideas, cooking techniques, and recipe inspiration. These
              sites can range from simple blogs run by food enthusiasts to
              comprehensive recipe databases maintained by professional chefs
              and nutritionists. our site offer a search function, allowing
              users to filter recipes based on ingredients, cuisine, cooking
              time, or dietary restrictions. Many sites also include user
              reviews and ratings, as well as the ability to save or share
              favorite recipes. Overall, recipe sites provide a convenient and
              accessible way for individuals to explore new flavors, develop
              their cooking skills, and share their passion for food with
              others.
            </p>
            {!user ? (
              <>
                <h2 className="p-4 md:p-0 mt-5 max-w-2xl text-2xl  font-extrabold text-white  lg:mx-auto font-one">
                  Be a part of our community and share your recipes, you can do
                  it by:
                </h2>
                <div className="flex items-center justify-center gap-5 py-5 font-one text-3xl font-extrabold">
                  <button className=" bg-green-200 p-2 rounded-md hover:bg-white">
                    <a href="/register">Sign Up</a>
                  </button>
                  <span className=" bg-black text-lg text-white px-2 rounded-md font-three">
                    OR
                  </span>
                  <button className=" hover:bg-green-200 p-2 rounded-md bg-white">
                    <a href="/login">Login</a>
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="  space-x-10 mt-10 max-w-2xl p-4 md:p-0 text-xl md:text-2xl  font-extrabold text-white  lg:mx-auto font-one">
                  Click the button and check your profile to see your saved recipes
                </h1>
                <button className=" hover:bg-green-200 p-2 tracking-widest w-24 font-extrabold text-2xl mt-5 font-one rounded-md bg-white">
                  <a href="/profile">{user}</a>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
