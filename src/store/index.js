import { configureStore } from "@reduxjs/toolkit";
import sidebarMenuSlice from "./slices/sidebarMenuSlice";
import authSlice from "./slices/authSlice";

export default configureStore({
  reducer: {
    sidebarMenu: sidebarMenuSlice,
    auth: authSlice,
  },
});
