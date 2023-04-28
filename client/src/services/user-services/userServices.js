import { createAsyncThunk } from "@reduxjs/toolkit";

export const signInUser = createAsyncThunk("sign-In", async (body) => {
  const res = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

export const signUpUser = createAsyncThunk("sign-Up", async (body) => {
  const res = await fetch("http://localhost:8000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

// export const sendEmail = async (body) => {
//   const res = await fetch("http://localhost:8080/users/sendEmail", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
//   console.log(res);
//   return await res.json();
// };

export const getUser = async (token) => {
  try {
    const res = await fetch(`http://localhost:8000/auth/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        token,
      }),     
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
 