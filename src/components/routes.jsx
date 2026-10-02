import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../pages/Login";
import Dashboard from "../Pages/Dashboard";
import Scan from "../Pages/Scan";
import ScanDetails from "../Pages/ScanDetails";
import Register from "../Pages/Register";

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
        path: "login",
        element: <Login />,
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
]);
