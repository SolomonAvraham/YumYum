import React, { useState } from "react";
 
const RecipeCard = ({
  name,
  time,
  img,
  ingredients,
  instructions,
  handleClick,
  savedRecipeHandler,
  disabled,
  username,
}) => {

  const [disabledBtn, setDisabledBtn] = useState(false);
 
  return (
    <div className="bg-white   rounded-md shadow-xl p-4">
      <img
        onClick={handleClick}
        src={img}
        alt={name}
        className=" cursor-pointer min-h-40  max-h-40 mx-auto rounded-md mb-2"
      />
      <h2 className="text-xl text-center font-semibold mb-2">{name}</h2>
      <div className="flex items-center mb-2">
        <span className="text-gray-600 mr-2">Cooking Time: {time} min</span>
      </div>
      <ul className="list-disc list-inside">
        <p>ingredients </p>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p className="mt-4">instructions: </p>
      <p> {instructions}</p>
      <button
        disabled={disabled}
        onClick={savedRecipeHandler}
        className={` disabled:bg-slate-600 bg-slate-200 font-semibold mt-5 rounded text-lg hover:bg-slate-100  px-5 py-1`}
      >
        {disabled ? "Saved " : "Save"}
      </button>
      <p className=" mt-3 font-bold ">Created by {username}</p>
    </div>
  );
};

export default RecipeCard;
