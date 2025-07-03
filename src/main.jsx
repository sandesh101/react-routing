import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import User from "./components/User.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "user/:id",
        element: <User />,
      },
      {
        path: "*",
        element: <h1>404 not found</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
