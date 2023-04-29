import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Navbar, Footer } from "../src/components/features/index";
import {
  PageNotFound,
  About,
  Contact,
  CreateRecipe,
  Home,
  Profile,
  SavedRecipes,
  Recipes,
  Login,
  Register,
} from "./components/pages/index";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { addUser } from "./redux/slices/userSlice/userSlice";
import { getUser } from "./services/user-services/userServices";



function App() {
  const dispatch = useDispatch();

  const auth = Cookies.get("auth");

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) getUser(auth).then((res) => setUser(res));
    dispatch(addUser(user));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/create-recipe/:id" element={<CreateRecipe />} />
        <Route path="/saved-recipes" element={<SavedRecipes />} />
        <Route path="/saved-recipes/:id" element={<SavedRecipes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<Recipes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
