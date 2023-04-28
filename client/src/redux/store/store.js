import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice/userSlice";
import recipesSlice  from "../slices/recipesSlice/recipesSlice";



export const store = configureStore({
  reducer: {
    user: userSlice,
    recipes: recipesSlice
  },
});
