import { configureStore } from "@reduxjs/toolkit";
import sidebarMenuSlice from "./slices/sidebarMenuSlice";
import authSlice from "./slices/authSlice";
import categorySlice from "./slices/categorySlice";

export default configureStore({
  reducer: {
    sidebarMenu: sidebarMenuSlice,
    auth: authSlice,
    category: categorySlice,
  },
});
