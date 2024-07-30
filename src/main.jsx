import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import { Link } from "react-router-dom";
import { TechStacks } from "./pages/techStacks.jsx";
import { DarkmodeContextProvider } from "./contexts/darkmodeContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div>
        Oops seems like you lost your way! <br /> Go back to
        <Link className="underline" to="/">
          Home
        </Link>
      </div>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/tech-stacks",
    element: <TechStacks />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkmodeContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </DarkmodeContextProvider>
);
