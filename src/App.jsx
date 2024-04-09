import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RecipeContainer from "./Components/RecipeContainer";
import "./assets/style.css";

function App() {
  const [recipes, setRecipes] = useState({});
  useEffect(() => {
    fetch("https://api.sampleapis.com/recipes/recipes")
      .then((res) => {
        console.log("Unmounted");
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
      });
  }, []);
  return (
    <>
      <Navbar />
      {recipes.length &&
        recipes.map((data) => <RecipeContainer recipe={data} key={data.id} />)}
      <Footer />
    </>
  );
}

export default App;
