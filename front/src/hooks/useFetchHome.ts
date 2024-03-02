import { useEffect } from "react";
import { useDispatch } from "@/store";
import { fetchMarketplacesAsync } from "@/store/marketplaces";
import { fetchTypesAsync } from "@/store/types";
import { fetchTransactionsAsync } from "@/store/transactions";

export default function useFetchHome() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMarketplacesAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTypesAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTransactionsAsync());
  }, [dispatch]);
}
