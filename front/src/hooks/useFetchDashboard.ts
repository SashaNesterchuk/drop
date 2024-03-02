import { useEffect } from "react";
import { useDispatch, useSelector } from "@/store";
import {
  fetchBudgetByMonthAndYearAsync,
  selectActiveMonth,
  selectActiveYear,
} from "@/store/budget";
import { fetchMarketplacesAsync } from "@/store/marketplaces";
import { fetchTypesAsync } from "@/store/types";
import { fetchTransactionsByYearAndMonthAsync } from "@/store/transactions";

export default function useFetchDashboard() {
  const month = useSelector(selectActiveMonth);
  const year = useSelector(selectActiveYear);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMarketplacesAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTypesAsync());
  }, [dispatch]);

  useEffect(() => {
    const correctMonth = +month + 1;
    dispatch(
      fetchTransactionsByYearAndMonthAsync({
        month: correctMonth.toString(),
        year: year.toString(),
      })
    );

    dispatch(
      fetchBudgetByMonthAndYearAsync({
        month: correctMonth.toString(),
        year: year.toString(),
      })
    );
  }, [month, year, dispatch]);
}
