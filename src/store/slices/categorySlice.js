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
  const response = await api.post("/categories", data);

  dispatch(postCategorySuccess(response.data));
  dispatch(setStatus("succeeded"));
};

export const putCategoryRequest = (id, data) => async (dispatch) => {
  const response = await api.put(`/categories/${id}`, data);

  dispatch(putCategorySuccess(response.data));
  dispatch(setStatus("succeeded"));
};

export const deleteCategoryRequest = (id) => async (dispatch) => {
  await api.delete(`/categories/${id}`);

  dispatch(deleteCategorySuccess(id));
};

export const category = createSlice({
  name: "category",
  initialState: {
    data: [],
    status: "loading", // idle, loading, filtering, succeeded, failed
    filter: "",
  },
  reducers: {
    getCategorySuccess: (state, action) => {
      state.data = action.payload;
    },
    postCategorySuccess: (state, action) => {
      state.data.unshift(action.payload);
    },
    putCategorySuccess: (state, action) => {
      const { data } = state;
      const { _id: id } = action.payload;

      const index = data.findIndex((item) => item._id === id);

      console.log(index);

      data.splice(index, 1, action.payload);
    },
    deleteCategorySuccess: (state, action) => {
      const { data } = state;

      const index = data.findIndex((item) => item._id === action.payload);

      data.splice(index, 1);
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  getCategorySuccess,
  postCategorySuccess,
  putCategorySuccess,
  deleteCategorySuccess,
  setStatus,
  setFilter,
} = category.actions;

export default category.reducer;
