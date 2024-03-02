import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchTransactions,
  getTransactionByMonthAndYear,
  setMarketplaceToTransactions,
} from "./fetchTransactions";

export const fetchTransactionsAsync = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    return await fetchTransactions();
  }
);

export const fetchTransactionsByYearAndMonthAsync = createAsyncThunk(
  "transactions/getTransactionByMonthAndYear ",
  async ({ month, year }: { month: string; year: string }) => {
    const response = await getTransactionByMonthAndYear(month, year);

    return response;
  }
);

export const setMarketplaceToTransactionsAsync = createAsyncThunk(
  "transactions/setMarketplaceToTransactions",
  async ({
    transactionsId,
    marketplaceId,
  }: {
    transactionsId: Array<string>;
    marketplaceId: string;
  }) => {
    const response = await setMarketplaceToTransactions(
      transactionsId,
      marketplaceId
    );

    return response;
  }
);
