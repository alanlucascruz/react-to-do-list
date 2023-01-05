import { createSlice } from "@reduxjs/toolkit";
import api from "../../core/api";

export const getCategoryRequest = (status) => async (dispatch, getState) => {
  const { filter } = getState().category;

  dispatch(setStatus(status));

  const route = filter ? `/categories/find/${filter}` : "/categories";
  const response = await api.get(route);

  dispatch(getCategorySuccess(response.data));
  dispatch(setStatus("succeeded"));
};

export const postCategoryRequest = (data) => async (dispatch) => {
  dispatch(setStatus("sending"));

  console.log(data);

  const response = await api.post("/categories", data);

  dispatch(postCategorySuccess(response.data));
  dispatch(setStatus("succeeded"));
};

export const category = createSlice({
  name: "category",
  initialState: {
    data: [],
    status: "loading", // idle, loading, filtering, sending, succeeded, failed
    filter: "",
  },
  reducers: {
    getCategorySuccess: (state, action) => {
      state.data = action.payload;
    },
    postCategorySuccess: (state, action) => {
      // state.data = [action.payload, ...state.data];
      state.data.unshift(action.payload);
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { getCategorySuccess, postCategorySuccess, setStatus, setFilter } =
  category.actions;

export default category.reducer;
