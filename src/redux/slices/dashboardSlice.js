import { createSlice } from "@reduxjs/toolkit";
import { tableInsightsData, graphInsightsData } from "../../data/data";
import { actionTypes } from "../../utils/constants/constants";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    tableData: tableInsightsData,
    graphData: graphInsightsData,
  },
  reducers: {
    [actionTypes.SORT_TABLE]: (state, action) => {
      return state;
    },
  },
});

export default dashboardSlice.reducer;
