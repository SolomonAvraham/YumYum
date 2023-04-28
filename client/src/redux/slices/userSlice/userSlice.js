import { createSlice } from "@reduxjs/toolkit";
import {
  signInUser,
  signUpUser,
} from "../../../services/user-services/userServices";
import Cookies from "js-cookie";
import { json } from "react-router-dom";

const initialState = {
  user: null,
  token: null,
  loading: false,
  isOnline: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
      state.isOnline = true;
      if (!payload) {
        state.isOnline = false;
        state.user = null;
        state.loading = false;
      }
    },
    logout: (state) => {
      state.loading = false;
      state.user = null;
      state.token = null;
      state.isOnline = false;
      Cookies.remove("savedRecipes");
      Cookies.remove("id");
      Cookies.remove("auth");
      Cookies.remove("username");
    },
  },

  extraReducers: {
    //   SING UP
    [signUpUser.pending]: (state) => {
      state.loading = true;
      state.registeredUser = false;
    },
    [signUpUser.fulfilled]: (state, { payload }) => {
      Cookies.remove("id");
      Cookies.remove("savedRecipes");
      Cookies.remove("auth");
      Cookies.remove("username");
      state.loading = false;
      const { error, user } = payload;
      if (!error) {
        state.user = user;
        state.error = null;
        state.registeredUser = true;
      } else {
        state.error = error;
      }
    },
    [signUpUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    },

    //   SING IN
    [signInUser.pending]: (state) => {
      state.loading = true;
      state.isOnline = false;
    },
    [signInUser.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.loading = false;
      const { token, user, error } = payload;
      state.error = error;
      if (!error) {
        state.user = user;
        state.token = token;
        state.error = null;
        state.isOnline = true;
        Cookies.set("auth", token, { expires: 7 });
        Cookies.set("savedRecipes", JSON.stringify(user.savedRecipes), {
          expires: 7,
        });
        Cookies.set("id", user._id, { expires: 7 });
        Cookies.set("username", user.username, { expires: 7 });
      } else {
        state.error = error;
      }
    },
    [signInUser.rejected]: (state, payload) => {
      state.loading = false;
      state.isOnline = false;
    },
  },
});

export const { addUser, logout } = userSlice.actions;

export default userSlice.reducer;
