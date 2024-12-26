import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store.js";
import AuthProtect from "./components/AuthProtect.jsx";
import {
  Home,
  Login,
  SignUp,
  AllPosts,
  AddPost,
  EditPost,
  Post,
} from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthProtect authentication={false}>
            <Login />
          </AuthProtect>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthProtect authentication={false}>
            <SignUp />
          </AuthProtect>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthProtect authentication={false}>
            <AllPosts />
          </AuthProtect>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthProtect authentication>
            <AddPost />
          </AuthProtect>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthProtect authentication>
            <EditPost />
          </AuthProtect>
        ),
      },
      {
        path: "/post/:slug",
        element: (
          <AuthProtect authentication>
            <Post />
          </AuthProtect>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
