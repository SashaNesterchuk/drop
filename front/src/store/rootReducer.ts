import { slice as marketplacesSlice } from "./marketplaces";
import { slice as budgetSlice } from "./budget";
import { slice as templatesSlice } from "./templates";
import { slice as transactionsSlice } from "./transactions";
import { slice as typesSlice } from "./types";

export const reducer = {
  template: templatesSlice.reducer,
  transactions: transactionsSlice.reducer,
  budgets: budgetSlice.reducer,
  marketplaces: marketplacesSlice.reducer,
  types: typesSlice.reducer,
};
