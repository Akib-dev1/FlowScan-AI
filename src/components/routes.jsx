import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Scan from "../Pages/Scan";
import ScanDetails from "../Pages/ScanDetails";
import Register from "../Pages/Register";
import AuthLayout from "../Pages/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "scan",
        element: <Scan />,
      },
      {
        path: "scan/:scanId",
        element: <ScanDetails />,
      },
      {
        path: "history",
        element: <div>History</div>,
      },
    ],
  },
  {
    path: "auth/login",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "auth/register",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
    ],
  },
]);
