import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Register from "./pages/Auth/Register.jsx";
import Profile from "./pages/User/Profile.jsx";

//Admin Route
import AdminRoute from "../src/pages/Admin/AdminRoutes.jsx";
import UserList from "./pages/Admin/UserList";
import CategoryList from "./pages/Admin/CategoryList.jsx";

//Private Route
import PrivateRoute from "./components/PrivateRoute.jsx";

//Auth
import Login from "./pages/Auth/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/** Private Routes */}
      <Route path="private" element={<PrivateRoute />} >
        <Route path="profile" element={<Profile />} />
      </Route>

      {/** Admin Routes */}
      <Route path="admin" element={<AdminRoute />} >
        <Route path="userlist" element={<UserList />} />
        <Route path="categorylist" element={<CategoryList />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
