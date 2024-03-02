import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTypes, getTypesByYearAndMonthAsync } from "./fetchTypes";

export const fetchTypesAsync = createAsyncThunk(
  "types/fetchTypes",
  async () => {
    const response = await fetchTypes();

    return response;
  }
);

export const fetchTypesByYearAndMonthAsync = createAsyncThunk(
  "types/getTypesByYearAndMonthAsync",
  async ({ month, year }: { month: string; year: string }) => {
    const response = await getTypesByYearAndMonthAsync(month, year);

    return response;
  }
);
