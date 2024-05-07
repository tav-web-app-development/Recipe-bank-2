import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      {
        path: "/",
        element: <App />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const recipe = Object.fromEntries(formData);
          return recipe;
        },
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
