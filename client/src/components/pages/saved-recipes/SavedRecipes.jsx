import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { getUser } from "../../../services/user-services/userServices";
import {
  recipesById,
  savedRecipes,
} from "../../../services/recipes-services/recipesServices";
import RecipeCard from "../../features/card/Card";
import { useGetUserID } from "../../../hooks/getUserId";

export const SavedRecipes = () => {
  const [userId, setUserId] = useState(null);
  const [userSavedRecipes, setUserSavedRecipes] = useState(null);
  const [card, setCard] = useState(null);

  // const userId = useGetUserID();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.savedRecipe);
  const loading = useSelector((state) => state.recipes.loading);

  const auth = Cookies.get("auth");
  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    if (auth) {
      getUser(auth).then((res) => setUserId(res.savedRecipes));
    }
  }, []);

  if (id) {
    recipesById(id).then((res) => setCard(res));
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = [];
      if (userId) {
        for (let i = 0; i < userId.length; i++) {
          const response = await recipesById(userId[i]);
          result[i] = response;
        }
      }

      setUserSavedRecipes(result);
    };

    fetchData();
  }, [userId]);

  return (
    <>
      <div className=" bg-center bg-cover relative   bg-fixed bg-[url('/imgs/3.jpg')]">
        <div className="bg-gray-500 bg-opacity-50  min-h-screen  ">
          <div className=" flex md:p-10 flex-col items-center justify-center  min-h-screen">
            <div className="w-full max-w-screen-lg p-8 bg-white rounded shadow-md">
              {loading ? (
                <div className="  flex   items-center justify-center min-h-screen ">
                  <SyncLoader color="#91a9f1" size={40} />
                </div>
              ) : !card ? (
                <>
                  <h1 className="font-bold text-center text-5xl  ">
                    Saved Recipes
                  </h1>
                  <div className=" flex flex-wrap items-center justify-center cursor-pointer p-5  gap-5">
                    {userSavedRecipes?.map((recipe) => (
                      <RecipeCard
                        handleClick={() => {
                          navigate(`${recipe._id}`), setCard(recipe);
                        }}
                        key={recipe.name}
                        name={recipe.name}
                        time={recipe.cookingTime}
                        img={recipe.imageUrl}
                        ingredients={recipe.ingredients}
                        instructions={recipe.instructions}
                        disabled={true}
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
                  <div className=" grid place-items-center place-content-center  h-screen md:h-screen ">
                    <div className=" font-bold text-center text-5xl py-5">
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
                        disabled={true}
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
};
