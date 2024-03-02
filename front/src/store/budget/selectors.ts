import type { ReduxState } from "../index";

export const selectBudgetByMonthAndYear = (state: ReduxState) =>
  state.budgets.budgetByMonthAndYear;

export const selectBudgetStatus = (state: ReduxState) => state.budgets.status;

export const selectActiveMonth = (state: ReduxState) => state.budgets.month;
export const selectActiveYear = (state: ReduxState) => state.budgets.year;
