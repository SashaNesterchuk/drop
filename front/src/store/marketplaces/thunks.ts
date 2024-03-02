import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchMarketplaces,
  getMarketplacesByYearAndMonthAsync,
} from "./fetchMarketplaces";

export const fetchMarketplacesAsync = createAsyncThunk(
  "marketplaces/fetchMarketplaces",
  async () => {
    const response = await fetchMarketplaces();

    return response;
  }
);

export const fetchMarketplacesByYearAndMonthAsync = createAsyncThunk(
  "marketplaces/getMarketplacesByYearAndMonthAsync",
  async ({ month, year }: { month: string; year: string }) => {
    const response = await getMarketplacesByYearAndMonthAsync(month, year);

    return response;
  }
);
