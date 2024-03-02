import { useMemo } from "react";
import { Transaction } from "@/types/module";

interface Props {
  transactions: Array<Transaction> | undefined;
}

export default function useTransactions(props: Props) {
  const transactionsByDate = useMemo(() => {
    if (!props.transactions) {
      return undefined;
    }

    const sorted: Map<Date, Array<Transaction>> = new Map();

    props.transactions.forEach((item: Transaction) => {
      if (sorted.has(item.date)) {
        const tmpSort = sorted.get(item.date);
        sorted.set(item.date, [...(tmpSort || []), item]);
      } else {
        sorted.set(item.date, [item]);
      }
    });

    return sorted;
  }, [props.transactions]);

  const transactionSortedByDateArray = useMemo(
    () => Array.from(transactionsByDate || []),
    [transactionsByDate]
  );

  const transactionsAmountInDate = useMemo(() => {
    const result: any = {};
    transactionsByDate?.forEach((value, key) => {
      result[key.toString()] = value
        .filter((el) => Number(el.amount) < 0)
        .reduce((acc, it) => (acc += Math.abs(Number(it.amount))), 0);
    });

    return result;
  }, [transactionsByDate]);

  const sumAllTransactions = useMemo(() => {
    return Math.round(
      props.transactions?.reduce(
        (acc, it) => (+it.amount < 0 ? acc + Math.abs(+it.amount) : acc),
        0
      ) || 0
    );
  }, [props.transactions]);

  const groupTransactionsByName = useMemo(() => {
    return (
      props.transactions
        ?.filter((el) => !el.marketplaceId)
        ?.filter((el) => Number(el.amount) < 0)
        ?.reduce((acc, it) => {
          const key = it.row_name.toLowerCase().trim();
          if (acc[key]) {
            acc[key].push(it);
          } else {
            acc[key] = [it];
          }
          return acc;
        }, {} as Record<string, Array<Transaction>>) || {}
    );
  }, [props.transactions]);

  return {
    transactionsByDate: transactionSortedByDateArray,
    transactionsAmountInDate,
    sumAllTransactions,
    groupTransactionsByName,
  };
}
