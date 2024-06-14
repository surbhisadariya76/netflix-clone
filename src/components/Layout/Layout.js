import React, { useEffect, useState } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "../LoginPage/Login.js";
import SignInForm from "../SignInForm/SignInForm.js";
import App from "../Dashboard/App.js";
import MovieDetails from "../MovieDetails/MovieDetails.js";
import LoginPassword from "../LoginPassword page/LoginPassword.js";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "../Firebase/Firebase.js";

function Layout() {
  const [user, setUser] = useState();

  let tocon = localStorage.getItem("accessTocon");
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(Auth, (user) => {
      setUser(user);
    });
    return () => unsuscribe();
  }, [user]);

  const layout = createBrowserRouter([
    {
      path: "/",
      element: tocon ? <Navigate to={"/dashboard"} /> : <Login />,
    },
    {
      path: "/:signin",
      element: <SignInForm />,
    },
    {
      path: "/dashboard",
      element: tocon ? <App /> : <Navigate to={"/"} />,
    },
    {
      path: "/dashboard/:typeofMovie/:movieID",
      element: tocon ? <MovieDetails /> : <Navigate to={"/"} />,
    },
    {
      path: "/in/password",
      element: <LoginPassword />,
    },
    {
      path: "*",
      element: <div>404 Not Found</div>,
    },
  ]);
  return <RouterProvider router={layout} />;
}

export default Layout;
