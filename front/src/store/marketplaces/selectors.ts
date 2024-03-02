import type { ReduxState } from "../index";

export const selectMarketplaces = (state: ReduxState) =>
  state.marketplaces.allMarketplaces;

export const selectSortedMarketplaces = (state: ReduxState) =>
  (state.marketplaces.allMarketplaces
    ? [...state.marketplaces.allMarketplaces]
    : []
  ).sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

export const selectMarketplacesByMonthAndYear = (state: ReduxState) =>
  state.marketplaces.marketplaceByMonthAndYear;

export const selectTransactionsStatus = (state: ReduxState) =>
  state.marketplaces.status;
