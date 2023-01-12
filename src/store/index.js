import { configureStore } from "@reduxjs/toolkit";
import sidebarMenuSlice from "./slices/sidebarMenuSlice";
import authSlice from "./slices/authSlice";
import dashboardSlice from "./slices/dashboardSlice";
import taskSlice from "./slices/taskSlice";
import categorySlice from "./slices/categorySlice";

export default configureStore({
  reducer: {
    sidebarMenu: sidebarMenuSlice,
    auth: authSlice,
    dashboard: dashboardSlice,
    task: taskSlice,
    category: categorySlice,
  },
});
