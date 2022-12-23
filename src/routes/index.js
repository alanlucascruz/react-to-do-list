import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SidebarMenu from "../components/SidebarMenu";

import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SidebarMenu />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
