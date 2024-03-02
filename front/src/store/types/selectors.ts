import type { ReduxState } from "../index";

export const selectTypes = (state: ReduxState) => state.types.allTypes;

// export const selectTypesByMonthAndYear = (state: ReduxState) =>
//   state.types.marketplaceByMonthAndYear;

export const selectTransactionsStatus = (state: ReduxState) =>
  state.types.status;
