import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RecipeContainer from "./Components/RecipeContainer";
import "./assets/style.css";
import { useActionData } from "react-router-dom";

function App() {
  const [recipes, setRecipes] = useState([]);
  const recipe = useActionData();

  useEffect(() => {
    fetch("https://api.sampleapis.com/recipes/recipes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
        if (recipe) {
          setRecipes([
            { title: recipe.chani, id: "chani", description: recipe.chani },
            ...data,
          ]);
        }
      });
    return () => console.log("unmounted");
  }, []);

  return (
    <>
      <Navbar />
      {recipes.map((data) => (
        <RecipeContainer recipe={data} key={data.id} />
      ))}
      <Footer />
    </>
  );
}

export default App;
