import { createSlice } from "@reduxjs/toolkit";
import { fetchReports } from "../thunks/fetchReports";

const reportsSlice = createSlice({
  name: "reports",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchReports.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchReports.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchReports.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const reportsReducer = reportsSlice.reducer;
