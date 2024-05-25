import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Main from "./pages/main/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
