import { FunctionComponent } from "react";

export interface Template {
  id: string;
  name: string;
  items: Array<Budget>;
}

export type CreateTemplate = Omit<Template, "id">;

export interface BudgetType {
  name: string;
  icon?: FunctionComponent;
}

export interface Budget {
  income: string;
  currency: string;
  date_start: Date;
  types: Array<BudgetType>;
}

export interface Transaction {
  date: Date;
  amount: string;
  currency: "PLN";
  row_name: string;
  row_data: string;
  id: string;
  marketplaceId: string | null;
  TypeId: string | null;
}

export interface Marketplace {
  id: string;
  name: string;
  TypeId: string;
}

export interface Type {
  id: string;
  name: string;
  description?: string;
}
