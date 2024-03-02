import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchIdentityCount } from "./fetchIdentityCount";

export const incrementAsync = createAsyncThunk(
  "counter/fetchIdentityCount",
  async (amount: number) => {
    const response = await fetchIdentityCount(amount);

    return response.data;
  }
);
