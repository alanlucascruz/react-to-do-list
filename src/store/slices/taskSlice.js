import { createSlice } from "@reduxjs/toolkit";
import api from "../../core/api";

export const getTaskRequest = (status) => async (dispatch, getState) => {
  const { filter } = getState().task;

  dispatch(setStatus(status));

  const route = filter ? `/tasks/find/${filter}` : "/tasks";
  const response = await api.get(route);

  dispatch(getTaskSuccess(response.data));
  dispatch(setStatus("succeeded"));
};

export const postTaskRequest = (data) => async (dispatch) => {
  const response = await api.post("/tasks", data);

  dispatch(postTaskSuccess(response.data));
  dispatch(setStatus("succeeded"));
};

export const putTaskRequest = (id, data) => async (dispatch) => {
  const response = await api.put(`/tasks/${id}`, data);

  dispatch(putTaskSuccess(response.data));
  dispatch(setStatus("succeeded"));
};

export const deleteTaskRequest = (id) => async (dispatch) => {
  await api.delete(`/tasks/${id}`);

  dispatch(deleteTaskSuccess(id));
};

export const task = createSlice({
  name: "task",
  initialState: {
    data: [],
    status: "loading", // idle, loading, filtering, succeeded, failed
    filter: "",
  },
  reducers: {
    getTaskSuccess: (state, action) => {
      state.data = action.payload;
    },
    postTaskSuccess: (state, action) => {
      state.data.unshift(action.payload);
    },
    putTaskSuccess: (state, action) => {
      const { data } = state;
      const { _id: id } = action.payload;

      const index = data.findIndex((item) => item._id === id);

      data.splice(index, 1, action.payload);
    },
    deleteTaskSuccess: (state, action) => {
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
  getTaskSuccess,
  postTaskSuccess,
  putTaskSuccess,
  deleteTaskSuccess,
  setStatus,
  setFilter,
} = task.actions;

export default task.reducer;
