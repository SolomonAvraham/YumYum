import { createAsyncThunk } from "@reduxjs/toolkit";

export const recipes = createAsyncThunk("recipes", async () => {
  try {
    const res = await fetch("http://localhost:8000/recipes");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
});

export const recipesById = async (id) => {
  try {
    const res = await fetch(`http://localhost:8000/recipes/${id}`);

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const savedRecipes = async (id) => {
  try {
    const res = await fetch(`http://localhost:8000/recipes/savedRecipes/${id}`);

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
