import { createSlice } from "@reduxjs/toolkit";

export const sidebarMenuSlice = createSlice({
  name: "sidebarMenu",
  initialState: {
    showSidebarMenu: false,
  },
  reducers: {
    toggleSidebarMenu: (state) => {
      state.showSidebarMenu = !state.showSidebarMenu;
    },
  },
});

export const { toggleSidebarMenu } = sidebarMenuSlice.actions;

export default sidebarMenuSlice.reducer;
