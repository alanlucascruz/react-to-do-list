import { createSlice } from "@reduxjs/toolkit";
import api from "../../core/api";

export const getDashboardRequest = () => async (dispatch) => {
  dispatch(setStatus("loading"));

  const responseDailyProductivity = await api.get(
    "/dashboard/daily-productivity"
  );

  const responseCategoryProgress = await api.get(
    "/dashboard/category-progress"
  );

  const data = {
    dailyProductivity: responseDailyProductivity.data,
    categoryProgress: responseCategoryProgress.data,
  };

  dispatch(getDashboardSuccess(data));
  dispatch(setStatus("succeeded"));
};

export const dashboard = createSlice({
  name: "dashboard",
  initialState: {
    data: {},
    status: "loading", // idle, loading, succeeded, failed
  },
  reducers: {
    getDashboardSuccess: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { getDashboardSuccess, setStatus } = dashboard.actions;

export default dashboard.reducer;
