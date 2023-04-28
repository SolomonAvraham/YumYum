import { createSlice } from "@reduxjs/toolkit";
import { recipes } from "../../../services/recipes-services/recipesServices";

const initialState = {
  recipes: null,
  loading: false,
  error: null,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},

  extraReducers: {
    [recipes.pending]: (state) => {
      state.loading = true;
    },
    [recipes.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.recipes = payload;
    },
    [recipes.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default recipesSlice.reducer;
