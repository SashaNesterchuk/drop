import type { ReduxState } from "../index";

export const selectTransactions = (state: ReduxState) =>
  state.transactions.allTransactions;

export const selectTransactionsByMonthAndYear = (state: ReduxState) =>
  state.transactions.transactionByMonthAndYear;

export const selectTransactionsStatus = (state: ReduxState) =>
  state.transactions.status;
