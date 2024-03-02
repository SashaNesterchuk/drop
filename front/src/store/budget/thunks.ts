import { fetchBudgetByMonthAndYear } from "./fetchBudget";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBudgetByMonthAndYearAsync = createAsyncThunk(
  "budget/fetchBudgetByMonthAndYearAsync",
  async ({ month, year }: { month: string; year: string }) => {
    const response = await fetchBudgetByMonthAndYear(month, year);

    return response;
  }
);
