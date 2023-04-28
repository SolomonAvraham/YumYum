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
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Welcome to
            </h2>
            <h1 className="mt-2  text-gray-900 sm:text-4xl">Yum Yum</h1>
            <img
              className=" w-16 mx-auto flex-shrink-0    p-2 "
              src="icons/icon.png"
              alt="icon"
            />
            <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
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
          </div>
        </div>
      </div>
      {/* first section ^^ */}
      {/* <div className=" bg-center bg-cover    bg-fixed bg-[url('/imgs/1.jpg')]  ">
        <div className="bg-gray-100 bg-opacity-40">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl text-center font-bold mb-4">
              Trending Recipes
            </h2>
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {loading ? (
                <div className=" mx-auto ">
                  <SyncLoader color="#91a9f1" size={40} />
                </div>
              ) : (
                <>
                  {isRecipes?.map((recipe, index) => {
                    if (index < 3) {
                      return (
                        <RecipeCard
                          handleClick={() => navigate(`recipes/${recipe._id}`)}
                          key={recipe.name}
                          name={recipe.name}
                          time={recipe.cookingTime}
                          img={recipe.imageUrl}
                          ingredients={recipe.ingredients}
                          instructions={recipe.instructions}
                        />
                      );
                    }
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div> */}
      {/* second section ^^ */}
      {/* <div className=" bg-center bg-cover    bg-[url('/imgs/2.jpg')]  ">
        <div className="bg-gray-100 bg-opacity-40">
          <p className=" p-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            distinctio doloremque totam, vel similique natus consectetur quae
            exercitationem saepe deleniti, explicabo asperiores culpa ipsa, ut
            excepturi debitis labore nulla reiciendis dignissimos? Praesentium
            animi voluptatem veniam iste officiis, molestiae fugiat magni nihil
            aliquid quibusdam provident mollitia nulla debitis veritatis.
            Doloremque veritatis voluptates, quasi odio itaque quos ducimus
            nulla fugiat quis dignissimos repellat nobis exercitationem a quod
            repellendus, debitis vero facere! Cupiditate soluta modi odio veniam
            laborum rerum totam vel qui ab! Debitis similique autem odio
            reiciendis numquam nesciunt, impedit accusantium voluptatum dolores
            recusandae dolorem eum accusamus magnam sint suscipit doloremque
            praesentium doloribus nihil, labore neque eius. Velit rerum eveniet
            vero, tempora facere quibusdam veritatis sequi facilis laboriosam
            saepe earum, explicabo numquam eum blanditiis cumque quaerat,
            tempore ipsum neque autem sint cum sapiente error dolorum
            consequuntur. Expedita, nihil aut quisquam iure ex tenetur, odit
            error sit necessitatibus a delectus doloribus illo ipsa similique ut
            laborum accusamus reprehenderit adipisci. Quaerat sit praesentium
            suscipit qui aperiam tempora libero dignissimos voluptas odit
            nostrum voluptatibus, autem officiis quas nemo repudiandae dolorem
            natus unde obcaecati dolor. Reprehenderit harum ad molestias magnam!
            Placeat nemo ipsam libero voluptatem ducimus! Ea, sequi? Facere,
            cum. Voluptas molestiae excepturi pariatur laudantium corporis
            eligendi ea delectus quisquam enim modi atque, reprehenderit sequi
            et fugit eaque, quas exercitationem, incidunt nemo magni maiores
            mollitia cupiditate! Veritatis magnam repellendus alias ipsa quod
            exercitationem voluptas accusantium delectus, earum obcaecati
            reprehenderit! Consequuntur natus delectus porro, a fugiat
            necessitatibus ducimus aspernatur quidem enim esse eos iste fugit
            architecto at minima harum quos. Accusantium nemo itaque quaerat
            officia? Asperiores cumque cupiditate dolores minus rerum,
            aspernatur voluptatum blanditiis iure eligendi tenetur itaque
            provident et? Nobis molestias molestiae, accusantium aliquam
            doloremque itaque, perferendis, doloribus quidem assumenda dolorem
            hic nihil animi adipisci iste deleniti enim exercitationem.
            Provident voluptatibus quo repellat dolorum minus accusamus fugiat
            reiciendis aliquam. Vitae dignissimos veritatis odio pariatur. Quos
            cum eveniet dolorem voluptatem deserunt rerum suscipit. Deleniti
            cumque totam, sint est labore laboriosam repellendus velit, nisi
            veritatis nulla accusamus quod dicta vitae asperiores voluptas
            perspiciatis suscipit? Mollitia est accusamus rem et dolorum
            officiis dolore eligendi laudantium in ducimus provident hic
            suscipit perferendis, quam adipisci dolores a pariatur cum corrupti
            illum vel, natus cumque! Ut voluptate magnam necessitatibus possimus
            libero dicta eum quaerat consequatur repellat, doloribus atque
            doloremque neque adipisci a minima aperiam obcaecati suscipit
            exercitationem tempora aliquam quo! Necessitatibus voluptatem
            deleniti laudantium fugit eos inventore veritatis consequatur nobis
            alias dignissimos neque molestias, magni, deserunt voluptates
            repellat aliquid nesciunt perspiciatis cumque. Pariatur quibusdam
            neque libero cum eaque explicabo a vero voluptatum. Natus assumenda
            autem, dignissimos eum quod at, laboriosam molestias sit eos nisi
            impedit provident ipsa ex quibusdam error sed minus dolore
            accusantium, sunt accusamus. Quidem minima asperiores quisquam
            repellendus optio suscipit. Sed velit quia dicta delectus asperiores
            et dolorem beatae sapiente dolorum officiis dolore dolores nisi nam
            corporis deleniti tempore repellat ab aut, consequatur cumque
            excepturi reprehenderit? Tenetur fuga architecto aut quibusdam
            consequuntur labore tempora ea harum sint debitis libero, amet
            obcaecati cumque ex necessitatibus alias at, repellendus assumenda
            temporibus?
          </p>
        </div>
      </div> */}
      {/* third section ^^ */}
    </>
  );
}
