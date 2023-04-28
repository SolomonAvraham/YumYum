import express from "express";
import cors from "cors";
import DB from "./src/DB/mongoDB.js";
import cookieParser from "cookie-parser";

import { userRouter } from "./src/routes/user.js";
import { recipesRouter } from "./src/routes/recipes.js";

const app = express();
const port = 8000;
app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5174",
    methods: ["POST", "GET", "PUT"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

app.get("/", (req, res) => {
  res.sendStatus(200).send({ msg: "successfully" });
});

app.listen(port, () => DB, console.log("Server started"));
