import { createSlice } from "@reduxjs/toolkit";
import api from "../../core/api";

export const signIn = (data) => async (dispatch) => {
  try {
    dispatch(setError(""));
    dispatch(setStatus("loading"));

    const response = await api.post("/auth/signin", data);
    const user = response.data;

    const { _id: id, name, email, token } = user;
    const userFormatted = { id, name, email };

    dispatch(setUser(userFormatted));
    dispatch(setToken(token));
    dispatch(setStatus("succeeded"));

    localStorage.setItem("@user", JSON.stringify(userFormatted));
    localStorage.setItem("@token", token);
  } catch (error) {
    dispatch(setStatus("failed"));
    dispatch(setError(error.response.data.message));
  }
};

export const signUp = (data) => async (dispatch) => {
  try {
    dispatch(setError(""));
    dispatch(setStatus("loading"));

    const response = await api.post("/auth/signup", data);
    const user = response.data;

    const { _id: id, name, email, token } = user;
    const userFormatted = { id, name, email };

    dispatch(setUser(userFormatted));
    dispatch(setToken(token));
    dispatch(setStatus("succeeded"));

    localStorage.setItem("@user", JSON.stringify(userFormatted));
    localStorage.setItem("@token", token);
  } catch (error) {
    dispatch(setStatus("failed"));
    dispatch(setError(error.response.data.message));
  }
};

export const signOut = () => async (dispatch) => {
  localStorage.clear();
  dispatch(setToken(""));
};

export const auth = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("@user")),
    token: localStorage.getItem("@token"),
    status: "", // idle, loading, succeeded, failed
    error: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setToken, setStatus, setError } = auth.actions;

export default auth.reducer;
