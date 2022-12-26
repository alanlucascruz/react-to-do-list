import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SidebarMenu from "../components/SidebarMenu";

import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Categories from "../pages/Categories";

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
      {
        path: "/categories",
        element: <Categories />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
