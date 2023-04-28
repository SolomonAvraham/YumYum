import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { getUser } from "../../../services/user-services/userServices";
import { addUser } from "../../../redux/slices/userSlice/userSlice";
import { FaUserCircle } from "react-icons/fa";
import SyncLoader from "react-spinners/SyncLoader";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const auth = Cookies.get("auth");
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      getUser(auth).then((res) => setUser(res));
      dispatch(addUser(user));
    }
  }, []);

  const userPages = [
    // { name: "Edit Profile", path: "/profile" },
    { name: "Saved Recipes", path: "/saved-recipes" },
    { name: "Create Recipe", path: "/create-recipe" },
  ];

  return (
    <>
      <div className=" bg-center bg-cover relative   bg-fixed bg-[url('/imgs/3.jpg')]">
        <div className="bg-gray-500 bg-opacity-50 flex flex-col items-center justify-center ">
          {!user ? (
            <div className=" flex   items-center justify-center min-h-screen">
              <SyncLoader color="#91a9f1" size={40} />
            </div>
          ) : <div className=" flex flex-col items-center justify-center   min-h-screen"></div> ? (
            <div className=" flex flex-col items-center justify-center md:w-96 md:m-10  h-screen w-full  md:h-screen   lg:max-w-screen-lg p-8 bg-slate-200 rounded shadow-md">
              <div className=" drop-shadow-2xl py-2 text-9xl">
                <FaUserCircle />
                <div>
                  <h1 className="text-4xl text-center mt-5 font-bold">
                    {user?.username}
                  </h1>
                  <p className="text-lg text-center text-gray-500">
                    @{user?.username}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded shadow-md p-4 w-max">
                <p className="text-3xl text-center font-bold">
                  {user?.savedRecipes.length}
                </p>
                <p className="text-lg text-gray-500">Saved Recipes</p>
              </div>

              {userPages.map((page) => (
                <button
                  key={page.name}
                  onClick={() => navigate(`${page.path}`)}
                  className=" mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1"
                >
                  {page.name}
                </button>
              ))}
            </div>
          ) : (
            <div className=" mx-auto ">
              <SyncLoader color="#91a9f1" size={40} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
