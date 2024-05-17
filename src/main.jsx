import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    action: async ({ request }) => {
      const formData = await request.formData();
      const recipe = Object.fromEntries(formData);
      return recipe;
    },
    loader: ({ request }) => {
      return "Hello from loader";
    },
    children: [
      {
        path: "recipes",
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
