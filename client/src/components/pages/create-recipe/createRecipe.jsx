import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { getUser } from "../../../services/user-services/userServices";
import { addUser } from "../../../redux/slices/userSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useGetUserID } from "../../../hooks/getUserId";
import SyncLoader from "react-spinners/SyncLoader";
import RecipeCard from "../../features/card/Card";

export const CreateRecipe = () => {
  const [card, setCard] = useState(null);
  const [recipeID, setRecipeID] = useState(null);

  const navigate = useNavigate();

  const loading = useSelector((state) => state.recipes.loading);

  const userId = useGetUserID();
  const auth = Cookies.get("auth");

  const formik = useFormik({
    initialValues: {
      name: "",
      ingredients: [],
      instructions: "",
      imageUrl: "",
      cookingTime: 0,
      userOwner: userId,
    },
    onSubmit: async (values) => {
      try {
        const res = await fetch(
          `https://yumyum-incj.onrender.com/recipes/createRecipe`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth}`,
            },
            body: JSON.stringify(values),
          }
        );
        await res.json().then((res) => {
          setRecipeID(res.createdRecipe._id), setCard(res.createdRecipe);
        });
      } catch (error) {
        console.error(error);
      }

      if (card) {
        navigate(`/create-recipe/${recipeID}`);
      }
    },
  });

  const initValues = [
    "name",
    "ingredients",
    "instructions",
    "imageUrl",
    "cookingTime",
  ];

  return (
    <div className=" bg-center bg-cover relative   bg-fixed bg-[url('/imgs/3.jpg')]">
      <div className="bg-gray-500 bg-opacity-50  ">
        <div className=" flex  md:p-10 flex-col items-center justify-center  min-h-screen">
          <div className="w-full h-screen bg-slate-100 max-w-screen-lg p-8   rounded shadow-md">
            {loading ? (
              <div className="  flex   items-center justify-center min-h-screen ">
                <SyncLoader color="#91a9f1" size={40} />
              </div>
            ) : !card ? (
              <div className="flex flex-row gap-5 justify-center items-center md:p-10 h-full  ">
                <form
                  onSubmit={formik.handleSubmit}
                  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4   "
                >
                  <h1 className=" text-center text-4xl">Create Recipe</h1>
                  {initValues.map((value, index) => (
                    <div
                      key={index + 12}
                      className=" grid text-center gap-5 text-xl"
                    >
                      <label key={index + 11} htmlFor={value}>
                        {`${value.charAt(0).toLocaleUpperCase()}${value.slice(
                          1
                        )}`}
                      </label>
                      <input
                        key={value}
                        required
                        id={value}
                        name={value}
                        type={value == "cookingTime" ? "number" : "text"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.value}
                        className="rounded border-black border-2 p-1"
                      />
                      {formik.touched.value && formik.errors.value ? (
                        <div key={index}>{formik.errors.value}</div>
                      ) : null}
                    </div>
                  ))}
                  <button
                    className="    bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 px-4 py-2 rounded "
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
                <div className="hidden md:block">
                  <img src="/imgs/1.jpg" alt="" />
                </div>
              </div>
            ) : (
              <div className=" grid place-items-center place-content-center  min-h-screen ">
                <div className=" font-bold text-center text-5xl py-10">
                  {card.name} Recipe
                </div>
                {
                  <RecipeCard
                    key={card.name}
                    name={card.name}
                    time={card.cookingTime}
                    img={card.imageUrl}
                    ingredients={card.ingredients}
                    instructions={card.instructions}
                  />
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
