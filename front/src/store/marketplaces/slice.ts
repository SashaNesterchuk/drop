import { createSlice } from "@reduxjs/toolkit";

import {
  fetchMarketplacesByYearAndMonthAsync,
  fetchMarketplacesAsync,
} from "./thunks";
import { Marketplace } from "@/types/module";

const initialState: State = {
  allMarketplaces: undefined,
  marketplaceByMonthAndYear: undefined,
  status: "idle",
};

export const slice = createSlice({
  name: "marketplaces",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMarketplacesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMarketplacesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.allMarketplaces = action.payload;
      })
      .addCase(
        fetchMarketplacesByYearAndMonthAsync.fulfilled,
        (state, action) => {
          state.marketplaceByMonthAndYear = action.payload;
        }
      );
  },
});

export interface State {
  allMarketplaces?: Array<Marketplace>;
  marketplaceByMonthAndYear?: Array<Marketplace>;
  status: "idle" | "loading" | "failed";
}
