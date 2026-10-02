import { createBrowserRouter } from "react-router";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      {
        path: "login",
        element: <div>Login</div>,
      },
      {
        path: "dashboard",
        element: <div>Dashboard</div>,
      },
      {
        path: "scan",
        element: <div>Scan</div>,
      },
      {
        path: "scan/:scanId",
        element: <div>Scan Details</div>,
      },
      {
        path: "history",
        element: <div>History</div>,
      },
    ],
  },
]);
