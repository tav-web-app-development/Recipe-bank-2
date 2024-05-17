import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RecipeContainer from "./Components/RecipeContainer";
import "./assets/style.css";
import { Outlet, useActionData, useLoaderData } from "react-router-dom";

function App() {
  const [recipes, setRecipes] = useState([]);
  const recipe = useActionData();
  const loaderData = useLoaderData();
  console.log(recipe);
  console.log(loaderData);

  useEffect(() => {
    fetch("https://api.sampleapis.com/recipes/recipes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
        if (recipe) {
          setRecipes([
            {
              title: recipe.testName,
              id: "testName",
              description: recipe.testName,
            },
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
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
