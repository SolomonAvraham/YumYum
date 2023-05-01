import React, { useEffect, useState } from "react";
import RecipeCard from "../../features/card/Card";
import {
  recipes,
  recipesById,
} from "../../../services/recipes-services/recipesServices";
import { useDispatch, useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserID } from "../../../hooks/getUserId";
import Cookies from "js-cookie";

function Recipes() {
  const [card, setCard] = useState(null);

  const userId = useGetUserID();

  const dispatch = useDispatch();
  const isRecipes = useSelector((state) => state.recipes.recipes);
  const loading = useSelector((state) => state.recipes.loading);

  const navigate = useNavigate();
  let { id } = useParams();
  const savedRecipes = Cookies.get("savedRecipes");

  useEffect(() => {
    dispatch(recipes());
    if (id) {
      recipesById(id).then((res) => setCard(res));
    }
  }, []);

  const savedRecipeHandler = async (recipeId, userId) => {
    try {
      const res = await fetch(
        `https://yumyum-incj.onrender.com/recipes/updateRecipe`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ recipeId, userId }),
        }
      );
      return await res
        .json()
        .then((res) =>
          Cookies.set("savedRecipes", JSON.stringify(res.savedRecipes))
        );
    } catch (error) {
      console.error(error);
    }
  };
  const isRecipeSaved = (id) => {
    if (!savedRecipes) {
      return;
    } else {
      return savedRecipes.includes(id);
    }
  };

  return (
    <>
      <div className=" bg-center bg-cover relative   bg-fixed bg-[url('/imgs/3.jpg')]">
        <div className="bg-gray-500 bg-opacity-50  min-h-max  ">
          <div className=" flex md:p-10 flex-col items-center justify-center  min-h-screen">
            <div className="w-full max-w-screen-lg p-8 bg-white rounded shadow-md">
              {loading ? (
                <div className="  flex   items-center justify-center min-h-screen ">
                  <SyncLoader color="#91a9f1" size={40} />
                </div>
              ) : !card ? (
                <>
                  <h1 className="font-bold text-white text-7xl pb-3 pt-10 font-two    bg-[url('/imgs/1.jpg')]">
                    Recipes
                  </h1>
                  <p className="  text-xl  font-two"> Recipes For All...</p>
                  <hr className="mb-10 md:w-52 shadow-2xl" />
                  <div className=" flex flex-wrap items-center justify-center  p-5  gap-5">
                    {isRecipes?.map((recipe, index) => (
                      <RecipeCard
                        handleClick={() => {
                          navigate(`${recipe._id}`), setCard(recipe);
                        }}
                        savedRecipeHandler={() =>
                          savedRecipeHandler(recipe._id, userId)
                        }
                        key={`${recipe.name}${+index}`}
                        name={recipe.name}
                        time={recipe.cookingTime}
                        img={recipe.imageUrl}
                        ingredients={recipe.ingredients}
                        instructions={recipe.instructions}
                        disabled={isRecipeSaved(recipe._id)}
                      />
                    ))}
                  </div>
                </>
              ) : loading ? (
                <div className=" mt-52 mx-auto">
                  <SyncLoader color="#91a9f1" size={40} />
                </div>
              ) : (
                <>
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
                        disabled={isRecipeSaved(card._id)}
                      />
                    }
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipes;
