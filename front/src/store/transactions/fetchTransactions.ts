import { Transaction } from "@/types/module";

export const fetchTransactions = async (): Promise<Array<Transaction>> => {
  const response = await fetch("http://localhost:3000/api/transactions", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();

  return result;
};

export const getTransactionByMonthAndYear = async (
  month: string,
  year: string
): Promise<Array<Transaction>> => {
  const response = await fetch(
    `http://localhost:3000/api/transactions/${month}/${year}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  const result = await response.json();

  return result;
};

export const setMarketplaceToTransactions = async (
  transactionsId: Array<string>,
  marketplaceId: string
): Promise<Array<Transaction>> => {
  const response = await fetch(
    `http://localhost:3000/api/transactions/add/marketplace`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ transactionsId, marketplaceId }),
    }
  );

  const result = await response.json();

  return result;
};
