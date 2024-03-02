import { Budget } from "@/types/module";

export const fetchBudgetByMonthAndYear = async (
  month: string,
  year: string
): Promise<Budget> => {
  const response = await fetch(
    `http://localhost:3000/api/budgets/${month}/${year}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const result = await response.json();

  return result;
};
