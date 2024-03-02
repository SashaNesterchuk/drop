import { Type } from "@/types/module";

export const fetchTypes = async (): Promise<Array<Type>> => {
  const response = await fetch("http://localhost:3000/api/types", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();

  return result;
};

export const getTypesByYearAndMonthAsync = async (
  month: string,
  year: string
): Promise<Array<Type>> => {
  const response = await fetch(
    `http://localhost:3000/api/types/${month}/${year}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  const result = await response.json();

  return result;
};
