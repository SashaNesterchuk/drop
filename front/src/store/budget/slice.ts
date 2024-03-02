import { createSlice } from "@reduxjs/toolkit";
import { monthNames } from "@/hooks/useMonths";
import { Budget } from "@/types/module";
import { fetchBudgetByMonthAndYearAsync } from "./thunks";

const initialState: State = {
  budgetByMonthAndYear: undefined,
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  status: "idle",
};

export const slice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setYear: (state, { payload }) => {
      state.year = payload.year;
    },
    setMonth: (state, { payload }) => {
      state.month = payload.month;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBudgetByMonthAndYearAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBudgetByMonthAndYearAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.budgetByMonthAndYear = action.payload;
      });
  },
});

export interface State {
  budgetByMonthAndYear: Budget | undefined;
  month: number | string;
  year: number | string;
  status: "idle" | "loading" | "failed";
}
