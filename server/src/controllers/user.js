import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";
import {
  registerValidation,
  loginValidation,
} from "../validation/userValidation.js";
 
export const register = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
 
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) {
    return res.status(400).json({ error: "Username already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();

  res.json({ user: newUser, message: "User registered successfully" });
};

export const login = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });
  if (!user) {
    return res.status(400).json({ error: "Username or password is incorrect" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ error: "Username or password is incorrect" });
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.SECRET_TOKEN
    // , {expiresIn: "30d",}
  );
  res.json({ token, user });
};

export const getUser = async (req, res) => {
  const { token } = req.body;
  const user = jwt.decode(token);

  try {
    const result = await UserModel.findById(user.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
}; 

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization.split(" ")[1];
  if (authHeader) {
    jwt.verify(authHeader, process.env.SECRET_TOKEN, (err) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
