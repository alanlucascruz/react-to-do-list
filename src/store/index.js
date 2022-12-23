import { configureStore } from "@reduxjs/toolkit";
import sidebarMenuSlice from "./slices/sidebarMenuSlice";

export default configureStore({
  reducer: {
    sidebarMenu: sidebarMenuSlice,
  },
});
