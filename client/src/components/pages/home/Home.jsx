import React, { useEffect, useState } from "react";
import RecipeCard from "../../features/card/Card";
import { recipes } from "../../../services/recipes-services/recipesServices";
import { useDispatch, useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import { useNavigate } from "react-router-dom";

// export const Home = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [savedRecipes, setSavedRecipes] = useState([]);

//   // const userID = useGetUserID();

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/recipes");
//         setRecipes(response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     const fetchSavedRecipes = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8000/recipes/savedRecipes/ids/${userID}`
//         );
//         setSavedRecipes(response.data.savedRecipes);
//       } catch (err) {
//         // console.log(err);
//       }
//     };

//     fetchRecipes();
//     fetchSavedRecipes();
//   }, [savedRecipes]);

//   const saveRecipe = async (recipeID) => {
//     try {
//       const response = await axios.put(
//         "http://localhost:8000/recipes/updateRecipe",
//         {
//           recipeID,
//           userID,
//         }
//       );
//       setSavedRecipes(response.data.savedRecipes);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const isRecipeSaved = (id) => savedRecipes.includes(id);

//   return (
//     <div className=" relative   bg-slate-200 ">
//       {/*   */}

//       <div className=" bg-center bg-cover relative   bg-fixed bg-[url('/imgs/3.jpg')]  ">
//         <div className=" bg-zinc-500 bg-opacity-50 ">
//           <div className="  md:p-24  grid grid-cols-8   gap-5   place-items-center  ">
//             <div className=" text-center  text-6xl text-zinc-100      md:row-start-1  md:col-start-2 md:col-end-5 ">
//               <span>
//                 Welcome to <br />
//                 Yum Yum
//               </span>
//               <div className=" text-xl     text-zinc-100">
//                 A recipe site platform that provides users with a wide variety
//                 of culinary ideas, cooking techniques, and recipe inspiration.
//                 These sites can range from simple blogs run by food enthusiasts
//                 to comprehensive recipe databases maintained by professional
//                 chefs and nutritionists. our site offer a search function,
//                 allowing users to filter recipes based on ingredients, cuisine,
//                 cooking time, or dietary restrictions. Many sites also include
//                 user reviews and ratings, as well as the ability to save or
//                 share favorite recipes. Overall, recipe sites provide a
//                 convenient and accessible way for individuals to explore new
//                 flavors, develop their cooking skills, and share their passion
//                 for food with others.
//               </div>
//             </div>
//             <img
//               className="hidden  md:block md:col-start-5   md:col-end-8    "
//               src="/imgs/4.jpg"
//               alt="2"
//             />
//           </div>
//         </div>
//       </div>
//       {/*   */}

//       <div className="   ">
//         <img className=" w-screen " src="/imgs/1.jpg" alt="2" />
//       </div>

//       <div className=" bg-center bg-cover  h-screen bg-fixed bg-[url('/imgs/2.jpg')]  "></div>
//       <div className="   ">
//         <ul className=" text-center   grid grid-cols-1 p-10 grid-rows-1 md:grid-cols-3  ">
//           {recipes.map((recipe) => (
//             <li key={recipe._id}>
//               <div>
//                 <h2>Recipe's Name :{recipe.name}</h2>
//               </div>
//               <div className="instructions">
//                 <p>Instructions: {recipe.instructions}</p>
//               </div>
//               <img src={recipe.imageUrl} alt={recipe.name} />
//               <p>Cooking Time: {recipe.cookingTime} minutes</p>
//               <button
//                 className=" bg-slate-300 p-2"
//                 onClick={() => saveRecipe(recipe._id)}
//                 disabled={isRecipeSaved(recipe._id)}
//               >
//                 {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

export function Home() {
  const dispatch = useDispatch();
  const isRecipes = useSelector((state) => state.recipes.recipes);
  const loading = useSelector((state) => state.recipes.loading);

  const navigate = useNavigate();

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
            <h2 className="p-4 md:p-0 mt-5 max-w-2xl text-2xl  font-extrabold text-white  lg:mx-auto font-one">
              Be a part of our community and share your recipes, you can do it
              by:
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
          </div>
        </div>
      </div>
    </>
  );
}
