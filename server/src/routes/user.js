import express from "express";
import { register, login, getUser, verifyToken } from "../controllers/user.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/" ,getUser);

export { router as userRouter };
