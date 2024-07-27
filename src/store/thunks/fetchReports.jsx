import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchReportsData } from "../../api/mockAPI";

const fetchReports = createAsyncThunk("reports/fetch", async () => {
  const response = await fetchReportsData();

  //FOR DEVELOPMENT PURPOSE ONLY
  await pause(1500);

  return response;
});

//FOR DEVELOPMENT PURPOSE ONLY
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchReports };
