import express from "express";
import { verifyToken } from "../controllers/user.js";
import {
  getAllRecipes,
  createRecipe,
  getRecipeById,
  updateRecipe,
  getIdOfSavedRecipes,
  getSavedRecipes,
} from "../controllers/recipes.js";

const router = express.Router();

router.get("/", getAllRecipes);

router.post("/createRecipe", verifyToken, createRecipe);

router.get("/:recipeId", getRecipeById);

router.put("/updateRecipe", updateRecipe);

router.get("/savedRecipes/ids/:userId", getIdOfSavedRecipes);

router.get("/savedRecipes/:userId", getSavedRecipes);

export { router as recipesRouter };
        