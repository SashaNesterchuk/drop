import { createSlice } from "@reduxjs/toolkit";

import {
  fetchTransactionsAsync,
  fetchTransactionsByYearAndMonthAsync,
  setMarketplaceToTransactionsAsync,
} from "./thunks";
import { Transaction } from "@/types/module";

const initialState: State = {
  allTransactions: undefined,
  transactionByMonthAndYear: undefined,
  status: "idle",
};

export const slice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTransactionsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.allTransactions = action.payload;
      })
      .addCase(
        fetchTransactionsByYearAndMonthAsync.fulfilled,
        (state, action) => {
          state.transactionByMonthAndYear = action.payload;
        }
      )
      .addCase(setMarketplaceToTransactionsAsync.fulfilled, (state, action) => {
        state.allTransactions = action.payload;
      });
  },
});

export interface State {
  allTransactions?: Array<Transaction>;
  transactionByMonthAndYear?: Array<Transaction>;
  status: "idle" | "loading" | "failed";
}
